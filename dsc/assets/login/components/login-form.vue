<template>
    <div>
        <transition name="fade">
            <div class="loginForm" v-if="value">
                <form @submit.prevent="emailLogin">
                    <div class="loginForm-fields">
                        <div class="loginForm-field">
                            <label for="loginForm-email">電子信箱</label>
                            <input
                                type="email"
                                class="form-control"
                                id="loginForm-email"
                                v-model.trim="email"
                                v-focus
                                required
                            />
                            <div class="invalid-feedback" v-show="emailErr">此 Email 無效</div>
                        </div>
                        <vue-recaptcha
                            ref="recaptcha"
                            @verify="onVerify"
                            @expired="onExpired"
                            :sitekey="sitekey"
                        ></vue-recaptcha>
                        <div class="loginForm-btns">
                            <div class="loginForm-submit" :class="{ 'is-loading': isLoading, 'disabled': !valid }">
                                <button type="submit" class="btn btn-primary">登入</button>
                            </div>
                            <a href class="loginForm-line" @click.prevent="lineLogin">社群登入</a>
                        </div>
                    </div>
                    <button class="loginForm-close" @click.prevent="closePopup">
                        <i class="material-icons">close</i>
                    </button>
                    <p class="loginForm-desc">一鍵登入鼎新官網，72小時官網內容全文公開</p>
                </form>
            </div>
        </transition>
        <!-- preload font -->
        <i class="material-icons" style="opacity: 0;">close</i>
    </div>
</template>

<script>
module.exports = {
    name: 'LoginForm',
    props: {
        value: {
            type: Boolean,
            required: true
        },
        info: {
            type: Object,
            required: true
        },
    },
    components: {
        'vue-recaptcha': VueRecaptcha
    },
    data: function () {
        return {
            email: localStorage.getItem('email') || '',
            isLoading: false,
            emailErr: false,
            valid: false,
        }
    },
    computed: {
        dev: function () {
            return location.hostname !== 'www.digiwin.com';
        },
        apiURL: function () {
            return 'https://misws.digiwin.com/SocialMediaMarketing/api/loglist/Save';
        },
        sitekey: function () {
            return this.dev ? '6Lfcw9YUAAAAANBlUjipucUOXYnNcD0VlIy_Ilxl' : '6Le8w9YUAAAAAK9DBSradzUyjkVPuYCntnrpu7hX';
        },
    },
    methods: {
        closePopup: function () {
            this.valid = false;
            this.$emit('input', false);
        },
        checkEmail: function () {
            this.emailErr = !(/.+@.+\..+/.test(this.email));
        },
        lineLogin: function () {
            let url = 'https://access.line.me/oauth2/v2.1/authorize?';
            url += 'response_type=code';
            url += '&client_id=' + this.info.channelID;
            url += '&redirect_uri=' + this.info.callbackURL;
            url += '&state=' + this.info.state;
            url += '&scope=openid%20email%20profile';
            location.href = url; // 前往 line 登入畫面
        },
        emailLogin: function () {
            this.checkEmail();
            if (this.emailErr) return;
            if (!this.valid) return;

            let data = {
                logtype: 'mail',
                lineId: '',
                mail: this.email,
                source: location.href
            };
            this.ajaxSensor(data).then(function (res) {
                this.$emit('input', false); // close popup
                this.$emit('set-exp', 'email_exp');
                localStorage.setItem('email', this.email);
                location.reload();
            }.bind(this));
        },
        ajaxSensor: function (data, apiURL) {
            apiURL = apiURL || this.apiURL;
            let _this = this;
            let mock = new AxiosMockAdapter(axios, { delayResponse: 2000 });
            mock.onPost(apiURL).reply(function (config) {
                return [200, {
                    result: 1,
                    msg: ''
                }];
            });
            if (!this.dev) mock.restore();

            return new Promise(function (resolve, reject) {
                _this.isLoading = true;
                const params = new URLSearchParams();
                params.append('', JSON.stringify(data));
                axios.post(apiURL, params)
                    .then(function (res) {
                        if (!res.data.result) {
                            Swal.fire({
                                type: 'error',
                                title: 'Oops...',
                                text: '伺服器錯誤，請稍候再試！',
                            });
                            console.error(res.data.msg);
                            return;
                        }
                        resolve();
                        console.log(res.data);
                    })
                    .catch(function (err) {
                        Swal.fire({
                            type: 'error',
                            title: 'Oops...',
                            text: '伺服器錯誤，請稍候再試！',
                        });
                        console.error(err);
                    })
                    .finally(function () {
                        _this.isLoading = false
                    });
            });
        },
        onVerify: function (response) {
            this.valid = true;
        },
        onExpired: function () {
            this.valid = false;
        },
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus();
            }
        }
    }
}
</script>