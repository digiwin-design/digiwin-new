<template>
    <div class="subscribe">
        <form @submit.prevent="submit">
            <fieldset>
                <legend>{{title}}專欄訂閱</legend>
                <div class="subscribe-fields">
                    <div class="subscribe-field">
                        <label for="subscribe-name">姓名</label>
                        <input
                            type="text"
                            v-model.trim="name"
                            class="form-control"
                            id="subscribe-name"
                            required
                        />
                        <div v-show="nameErr" class="invalid-feedback">必填欄位</div>
                    </div>
                    <div class="subscribe-field">
                        <label for="subscribe-email">電子信箱</label>
                        <input
                            type="email"
                            v-model.trim="email"
                            class="form-control"
                            id="subscribe-email"
                            required
                        />
                        <div v-show="emailErr" class="invalid-feedback">此 Email 無效</div>
                    </div>
                    <div class="subscribe-btns">
                        <div class="subscribe-submit" :class="{ 'is-loading': isLoading }">
                            <input type="submit" class="btn btn-primary" value="訂閱" />
                        </div>
                        <a :href="lineUrl" class="subscribe-line" target="_blank">社群訂閱</a>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
module.exports = {
    name: 'SubscribeForm',
    props: {
        title: {
            type: String,
            required: true
        },
        lineUrl: {
            type: String,
            required: true
        },
    },
    data: function () {
        return {
            name: '',
            nameErr: false,
            email: '',
            emailErr: false,
            isLoading: false
        }
    },
    computed: {
        dev: function () {
            return location.hostname !== 'www.digiwin.com';
        },
        userID: function () {
            return localStorage.getItem('line_userID') || '';
        },
        displayName: function () {
            return localStorage.getItem('line_displayName') || '';
        }
    },
    methods: {
        checkForm: function () {
            this.nameErr = !this.name.length;
            this.emailErr = !this.checkEmail();
        },
        checkEmail: function () {
            return /.+@.+\..+/.test(this.email);
        },
        submit: function () {
            this.checkForm();
            if (this.nameErr || this.emailErr) return;

            let data = {
                lineId: this.userID,
                lineName: this.displayName,
                realName: this.name,
                eMail: this.email,
                mobile: '',
                fbId: '',
                fbName: '',
                companyCode: '',
                companyName: '',
                job: '',
                acpCusNo: '',
                memEDM: [
                    {
                        orderEDM: this.title,
                        source: location.href
                    }
                ],
                memEvent: []
            };
            this.ajaxSensor(data, 'https://misws.digiwin.com/SocialMediaMarketing/api/member/Save')
                .then(function (res) {
                    Swal.fire(
                        '訂閱成功',
                        '',
                        'success'
                    )
                    this.name = '';
                    this.email = '';
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
                        _this.isLoading = false;
                    });
            });
        },
        setFormAnchor: function () {
            let targetPos = $(this.$el).offset().top;
            document.querySelectorAll('.list-case-show a').forEach(function (el) {
                if (el.hash !== '#subscribe') return;
                el.addEventListener('click', function (event) {
                    event.preventDefault();
                    $('html, body').animate({ scrollTop: targetPos });
                });
            });
        },
    },
    mounted: function () {
        this.setFormAnchor();
    },
}
</script>