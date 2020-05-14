(function () {
    // dev
    // let dir = '';
    // let path = '/tw/dsc/digital-newspaper/1901_index'.split('/');

    // final
    let dir = 'assets/submenu/';
    let path = location.pathname.split('/');

    let id = path[path.length - 1].replace('.html', '');
    let page = path[path.length - 1].replace(/(.html|.htm)/g, '');
    let header = document.querySelector('.header-box header');

    if (header !== null) {
        new Vue({
            el: '#submenu',
            data: {
                results: [],
                currentPage: '',
                isActive: false
            },
            created() {
                header.insertAdjacentHTML('beforeend', '<div id="submenu"></div>');
                this.getData();
            },
            methods: {
                // 取得選單內容
                getData() {
                    fetch(`${dir}submenu.json`)
                        .then(res => res.json())
                        .then(res => {
                            this.results = res.filter(
                                value => value.id === id
                            );
                            this.isActive = true;
                        });
                },
                // 設定標題文字
                setTitle(value) {
                    return this.currentPage
                        ? `${value} / ${this.currentPage}`
                        : value;
                },
                // 判斷連結開啟方式
                linkTo(url, target) {
                    let urlArr = url.split('#');
                    if (urlArr[0] === '' || urlArr[0] === page) {
                        let $target = $(`#${urlArr[1]}`);
                        if ($target.length) {
                            let targetPos = $target.offset().top;
                            $('html, body').animate({
                                scrollTop: targetPos - 50
                            });
                        }
                    } else if (target) {
                        window.open(url, target);
                    } else {
                        window.open(url, '_self');
                    }
                },
            },
            template: `
                <div class="page-submenubox" :class="{active:isActive}">
                    <div class="page-submenu">
                        <div class="container">
                            <template v-for="result in results">
                                <h2>{{setTitle(result.title)}}</h2>
                                <ul class="page-submenu-list">
                                    <li v-for="menu in result.menus">
                                        <span>
                                            <a :href="menu.url" @click.prevent="linkTo(menu.url, menu.target)">{{menu.text}}</a>
                                        </span>
                                    </li>
                                </ul>
                            </template>
                        </div>
                    </div>
                </div>
            `
        });
    }
})();