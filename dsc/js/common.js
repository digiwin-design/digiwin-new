/**
 * 取得網址參數
 * @param {string} name 參數名
 */
function getParameterByName(name) {
    let url = new URL(location.href);
    let params = url.searchParams;
    return params.get(name);
}

/**
 * 動態引入JS
 * @param {array} urls 
 * @returns {Promise}
 */
function appendScripts(urls) {
    let head = document.querySelector('head');
    let appendFile = (src) => {
        return new Promise((resolve, reject) => {
            let el = document.createElement('script');
            el.src = src;
            el.defer = true;
            head.appendChild(el);
            el.onload = () => resolve();
        });
    };
    return urls.map(url => appendFile(url));
}

/**
 * 動態引入CSS
 * @param {array} urls 
 */
function appendLinks(urls) {
    let head = document.querySelector('head');
    urls.forEach(url => {
        let el = document.createElement('link');
        el.href = url;
        el.rel = 'stylesheet';
        head.appendChild(el);
    });
}

// 轉址
(function () {
    let currentUrl = location.pathname.replace(/(.html|.htm)$/, '') + location.hash;

    let urlMaps = [
        {
            before: '/tw/list.html',
            after: '/tw/ERP/erp-all.html'
        },
        {
            before: '/tw/dsc/marketing/WB002838/WB00283803.htm',
            after: '/tw/dsc/marketing/WB002838/web/03/'
        }
    ];

    // 比對網址成功後進行轉址
    let result = urlMaps.find(function (item) {
        item = item.before.replace(/(.html|.htm)$/, '');
        let regex = new RegExp(item + '$');
        return currentUrl.search(regex) !== -1;
    });
    if (result) {
        location.replace(result.after);
    }
})();

// 電腦/手機版轉址
// BUG：電腦開啟手機版網址無法自動轉址(重新整理始可)
(function () {
    let currentUrl = location.pathname.replace(/(.html|.htm)$/, '') + location.hash.replace(/#\w*$/, '');

    // 判斷目的裝置
    let md = new MobileDetect(window.navigator.userAgent);
    let device = md.mobile() ? 'desktop' : 'mobile';
    document.querySelector('html').classList.add(md.os());

    // 比對網址
    fetch('/tw/dsc/assets/awd-list.json')
        .then(res => res.json())
        .then(res => {
            let result = res.list.find(function (item) {
                item[device] = item[device].replace(/(.html|.htm)/, '');
                let regex = new RegExp(item[device] + '$');
                return regex.test(currentUrl);
            });

            // 如比對成功進行轉址
            if (result && device === 'desktop') {
                location.replace(result.mobile);
            }
            else if (result && device === 'mobile') {
                location.replace(result.desktop);
            }
        });
})();

// add class to html tag
(function () {
    let isProd = location.hostname === 'www.digiwin.com' ? 'production' : 'no-production';
    let currentPage = location.pathname.split('/').pop().replace('.html', '');
    document.querySelector('html').classList.add(isProd, currentPage);
})();

// 修改手機版電話號碼(與後台電腦版連動)
$(function () {
    let target = document.querySelector('#toolbar .p-2');
    if (target) {
        let phoneNum = target.innerText.trim();
        document.querySelector('.xz-fudong a').setAttribute('href', 'tel:' + phoneNum);
    }
});

// 設置文章登入及訂閱表單
// 訂閱表單標題清單：/tw/dsc/assets/login/subscribe.json
$(function () {
    let currentUrl = location.pathname.replace(/(.html|.htm)$/, '');

    // 取得加入閱讀權限的文章，比對網址成功後載入相關連結
    fetch('/tw/dsc/assets/login/login.json')
        .then(res => res.json())
        .then(res => {
            let result = res.find(function (item) {
                item = item.replace(/(.html|.htm)$/, '');
                let regex = new RegExp(item + '$');
                return currentUrl.search(regex) !== -1;
            });

            if (!result) return;

            let head = document.querySelector('head');

            let links = [
                'https://fonts.googleapis.com/icon?family=Material+Icons',
                '/tw/dsc/assets/login/css/login.css'
            ];
            appendLinks(links);

            let scripts = [
                'https://cdn.jsdelivr.net/npm/sweetalert2@8',
                'https://unpkg.com/vue-recaptcha@latest/dist/vue-recaptcha.min.js',
                'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit'
            ];
            Promise.all(appendScripts(scripts))
                .then(() => {
                    let el = document.createElement('script');
                    el.src = '/tw/dsc/assets/login/js/login.min.js';
                    el.defer = true;
                    head.appendChild(el);
                })
                .catch(err => console.error(err));
        });
});

// 文章插入廣告
// 廣告清單：/tw/dsc/assets/article-ad/db.json
$(function () {
    let currentUrl = location.pathname.replace(/(.html|.htm)$/, '');

    // 取得插入廣告的文章
    fetch('/tw/dsc/assets/article-ad/db.json')
        .then(res => res.json())
        .then(res => {
            // 比對網址成功後載入對應連結
            let result = res.find(function (item) {
                item = item.url.replace(/(.html|.htm)$/, '');
                let regex = new RegExp(item + '$');
                return currentUrl.search(regex) !== -1;
            });

            if (!result) return;

            // 在文章標籤下方插入廣告
            let img = document.createElement('img');
            img.src = result.imgSrc;

            let a = document.createElement('a');
            a.href = result.link;
            a.target = '_blank';
            a.style.display = 'block';
            a.appendChild(img);

            document.querySelector('.list-case-show .tag').insertAdjacentElement('afterend', a);
        });
});

// 解決主選單擋住文章內容的問題
$(function () {
    let mouseenterHandler = function () {
        document.querySelector('header').style.zIndex = 100;
    };

    let mouseleaveHandler = function () {
        setTimeout(() => {
            if (document.querySelector('#qcTopNavSheetWrapper').style.display === 'none') {
                document.querySelector('header').removeAttribute('style');
            }
        }, 500);
    };

    if (document.querySelector('.nav')) {
        document.querySelector('.nav').addEventListener('mouseenter', mouseenterHandler);
        document.querySelector('.nav').addEventListener('mouseleave', mouseleaveHandler);
    }
    if (document.querySelector('#qcTopNavSheetWrapper')) {
        document.querySelector('#qcTopNavSheetWrapper').addEventListener('mouseenter', mouseenterHandler);
        document.querySelector('#qcTopNavSheetWrapper').addEventListener('mouseleave', mouseleaveHandler);
    }
});

// 解決文章右側定位問題
$(function () {
    window.addEventListener('scroll', () => {
        document.querySelector('aside.rightbox') && document.querySelector('aside.rightbox').classList.remove('asideFixed', 'topscorll', 'asideBottom');
    });
});

// 將活動介紹頁網址中的 userId 加至"立即報名"連結上
$(function () {
    let userId = getParameterByName('userId');
    let btn1 = document.querySelector('.list-cc .button a');
    let btn2 = document.querySelector('.list-case-show .abutton a');
    if (userId && btn1 && btn2) {
        btn1.href += `&userId=${userId}`;
        btn2.href += `&userId=${userId}`;
    }
});

// 右下角浮動廣告
$(function () {
    fetch('/tw/dsc/assets/ad/db.json')
        .then(res => res.json())
        .then(res => {
            let result = res.filter(value => location.pathname.replace(/(.html|.htm)$/, '') === value.url.replace(/(.html|.htm)$/, ''));
            if (!result.length) return;

            let div = document.createElement('div');
            div.id = 'ad';
            document.querySelector('body').appendChild(div);

            new Vue({
                el: '#ad',
                components: {
                    'ad': httpVueLoader('/tw/dsc/assets/ad/Ad.vue')
                },
                computed: {
                    info() {
                        return result[0];
                    }
                },
                template: '<ad :info="info"></ad>',
            });
        });
});

// 修改資料下載標題
$(function () {
    if (location.pathname !== '/tw/zlsq.html') return;

    const firebaseConfig = {
        apiKey: 'AIzaSyCun_SNGxWtqPEQYkL0d17XBRI0z-LobVY',
        authDomain: 'digiwin-dc30c.firebaseapp.com',
        databaseURL: 'https://digiwin-dc30c.firebaseio.com',
        projectId: 'digiwin-dc30c',
        storageBucket: 'digiwin-dc30c.appspot.com',
        messagingSenderId: '52675222168',
        appId: '1:52675222168:web:2ba46359f0c3a800af4eed'
    };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    let contentRef = firebase.database().ref('resources');
    contentRef.once('value').then(snapshot => {
        let content = snapshot.val();
        for (const key in content) {
            if (content.hasOwnProperty(key)) {
                const element = content[key];
                if (element.id == getParameterByName('id')) {
                    document.querySelector('.form-bd .title').textContent = element.title;
                    break;
                }
            }
        }
    });

    // =========================================================================
    // 使用本機資料(可於 Firebase 控制台匯出)
    // =========================================================================
    // fetch('db.json')
    //     .then(res => res.json())
    //     .then(res => {
    //         res = res.resources;
    //         for (const key in res) {
    //             if (res.hasOwnProperty(key)) {
    //                 const element = res[key];
    //                 if (element.id == getParameterByName('id')) {
    //                     document.querySelector('.form-bd .title').textContent = element.title;
    //                     break;
    //                 }
    //             }
    //         }
    //     });
});

// 修改首頁資料索取錯誤連結
$(function () {
    if (location.pathname !== '/tw') return;
    var links = document.querySelectorAll('.h-new:last-of-type a');
    links.forEach(el => {
        let url = el.getAttribute('href');
        el.href = url.replace(/\/tw\/tw\//, '/tw/');
    });
});