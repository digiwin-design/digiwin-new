new Vue({
    el: '.list-case-show',
    components: {
        'login-form': httpVueLoader('/tw/dsc/assets/login/components/login-form.vue'),
    },
    data: {
        showPopup: false,
    },
    computed: {
        dev() {
            return location.hostname !== 'www.digiwin.com';
        },
        email() {
            return localStorage.getItem('email') || '';
        },
        userID() {
            return localStorage.getItem('line_userID') || '';
        },
        channelID() {
            return '1570741188';
        },
        channelSecret() {
            return '8082e9d4b345e1b3768f160ddd76a6ee';
        },
        state() {
            return 'abcde'; // 自訂驗證碼
        },
        code() {
            return this.getParameterByName('code');
        },
        callbackURL() {
            return location.origin + location.pathname;
        },
        apiURL() {
            return 'https://misws.digiwin.com/SocialMediaMarketing/api/loglist/Save';
        }
    },
    methods: {
        init() {
            let state = this.getParameterByName('state');
            if (this.code && state === this.state) {
                this.getToken(); // 從登入畫面導回
            }
            else {
                this.showCover(); // 未登入
            }
        },
        getToken() {
            // 變更網址
            let pageName = this.callbackURL.split('/').pop();
            history.replaceState({}, '', pageName);

            const params = new URLSearchParams();
            params.append('grant_type', 'authorization_code');
            params.append('code', this.code);
            params.append('redirect_uri', this.callbackURL);
            params.append('client_id', this.channelID);
            params.append('client_secret', this.channelSecret);
            axios.post('https://api.line.me/oauth2/v2.1/token', params)
                .then(res => {
                    if (res.status !== 200) return this.showCover();
                    this.accessToken = res.data.access_token;
                    localStorage.setItem('line_token', this.accessToken);
                    this.getProfile(this.accessToken);
                })
                .catch(err => {
                    this.showCover();
                    console.error(err);
                });
        },
        getProfile(token) {
            axios.get('https://api.line.me/v2/profile', {
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(res => {
                    if (res.status !== 200) return this.showCover();
                    localStorage.setItem('line_userID', res.data.userId);
                    localStorage.setItem('line_displayName', res.data.displayName);
                    this.setExpTime('line_exp');
                    this.saveLineLog(res.data.userId);
                    this.addSubscribeForm();
                })
                .catch(error => this.showCover());
        },
        saveLineLog(id) {
            let data = {
                logtype: 'lineId',
                lineId: id,
                mail: '',
                source: location.href
            };
            this.ajaxSensor(data);
        },
        saveViewLog() {
            let data = {
                logtype: this.userID ? 'lineId' : 'mail',
                lineId: this.userID,
                mail: this.userID ? '' : this.email,
                source: location.href
            };
            this.ajaxSensor(data);
        },
        checkLogin() {
            let today = new Date();
            let exp = localStorage.getItem('line_exp') || localStorage.getItem('email_exp');
            if (!exp || today.getTime() > parseInt(exp, 10)) {
                this.cleanLS();
                return false;
            }
            return true;
        },
        addCover() {
            // 預設隱藏
            document.querySelector('.list-case-show').insertAdjacentHTML('beforeend', `
                <div class="articleCover">
                    <a href @click.prevent="showPopup=true">全文閱讀</a>
                </div>
                <login-form
                    v-model="showPopup"
                    :info="{ channelID: channelID, state: state, callbackURL: callbackURL }"
                    @set-exp="setExpTime"
                    @post="ajaxSensor"
                ></login-form>
            `);

            // 測試用登出按鈕
            if (this.dev) {
                document.querySelector('.list-case-show').insertAdjacentHTML('beforeend', `
                    <button
                        @click="logout"
                        style="position: fixed;left: 0;bottom: 0;z-index: 1;"
                    >登出</button>
                `);
            }
        },
        showCover() {
            // 設定文章高度
            if (this.$el.offsetHeight > 1400) {
                this.$el.style.height = '1400px';
                this.$el.style.overflow = 'hidden';
            }
            // 取消隱藏
            this.$el.classList.add('no-login');
        },
        addSubscribeForm() {
            fetch('/tw/dsc/assets/login/subscribe.json')
                .then(res => res.json())
                .then(res => {
                    let currentUrl = location.pathname.replace(/(.html|.htm)$/, '');
                    res.forEach(el => {
                        let { url, title, lineUrl } = el;
                        url = url.replace(/(.html|.htm)$/, '');
                        if (url === currentUrl) {
                            // 比對網址成功後插入訂閱表單
                            document.querySelector('.list-case-show').insertAdjacentHTML('afterend', '<div id="subscribeForm"></div>');
                            new Vue({
                                el: '#subscribeForm',
                                components: {
                                    'subscribe-form': httpVueLoader('/tw/dsc/assets/login/components/subscribe-form.vue'),
                                },
                                template: `<subscribe-form title="${title}" line-url="${lineUrl}"></subscribe-form>`
                            });
                        }
                    });
                });
        },
        logout() {
            this.cleanLS();
            location.reload();
        },
        manualLogout() { // 透過網址登出
            if (location.hash == '#logout') {
                this.cleanLS();
                let currentPage = location.pathname.split('/').pop();
                history.replaceState({}, '', currentPage);
            }
        },
        cleanLS() {
            localStorage.removeItem('line_token');
            localStorage.removeItem('line_userID');
            localStorage.removeItem('line_displayName');
            localStorage.removeItem('line_exp');
            localStorage.removeItem('email_exp');
        },
        setExpTime(itemName, day = 3) { // 設置登入到期時間(預設第三天結束後到期)
            let today = new Date();
            let lastDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + day);
            localStorage.setItem(itemName, lastDay.getTime());
        },
        getParameterByName(name) {
            let url = new URL(location.href);
            let params = url.searchParams;
            return params.get(name);
        },
        ajaxSensor(data, apiURL = this.apiURL) {
            let mock = new AxiosMockAdapter(axios, { delayResponse: 2000 });
            mock.onPost(apiURL).reply(config => {
                return [200, {
                    result: 1,
                    msg: ''
                }];
            });
            if (!this.dev) mock.restore();

            return new Promise((resolve, reject) => {
                const params = new URLSearchParams();
                params.append('', JSON.stringify(data));
                axios.post(apiURL, params)
                    .then(res => {
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
                    .catch(err => {
                        Swal.fire({
                            type: 'error',
                            title: 'Oops...',
                            text: '伺服器錯誤，請稍候再試！',
                        });
                        console.error(err);
                    });
            });
        },
    },
    created() {
        this.manualLogout();

        // 在 vue 掛載 DOM 前插入子組件
        this.addCover();
    },
    mounted() {
        // 如已登入 line 則檢查訂閱表單列表
        if (this.userID) {
            this.addSubscribeForm();
        }

        // 檢查是否已登入 email/line 且未逾期
        if (this.checkLogin()) {
            this.saveViewLog();
        }
        else {
            this.init();
        }
    },
});