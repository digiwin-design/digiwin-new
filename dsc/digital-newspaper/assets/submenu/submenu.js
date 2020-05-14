(function () {
    // dev
    // let dir = '';
    // let path = '/tw/dsc/digital-newspaper/1901_index'.split('/');

    // final
    let dir = 'assets/submenu/';
    let path = location.pathname.split('/');

    let id = path[path.length - 1].replace('.html', '');
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
                }
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
                                            <a :href="menu.url" target="_blank">{{menu.text}}</a>
                                        </span>
                                        <ul v-if="menu.dropdowns" class="page-submenu-dropdown">
                                            <li v-for="dropdown in menu.dropdowns">
                                                <a :href="dropdown.url" target="_blank"">{{dropdown.text}}</a>
                                            </li>
                                        </ul>
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