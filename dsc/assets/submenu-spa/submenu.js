(function () {
    let dir, path, hash;

    if (location.pathname === '/tw/dsc/assets/submenu-spa/demo.html') {
        // demo
        dir = '';
        path = '/tw/dsc/solution/mobile/WB002839/index#/merchandise'.split('/');
        hash = '';
    }
    else {
        // final
        dir = '/tw/dsc/assets/submenu-spa/';
        path = location.pathname.split('/');
    }

    let id = path.find(value => value.startsWith('WB'));
    let page = '#/' + path[path.length - 1].replace(/(.html|.htm)/g, '');
    let header = document.querySelector('.header-box header');

    if (header === null) return;

    new Vue({
        el: '#submenu',
        data: {
            results: [],
            currentPage: '',
            activeIndex: 0,
            isActive: false
        },
        computed: {
            submenu() {
                return document.querySelector('.page-submenu');
            }
        },
        created() {
            header.insertAdjacentHTML('beforeend', '<div id="submenu"></div>');
            this.getData();
        },
        mounted() {
            document.querySelector('body').addEventListener('touchstart', (event) => this.closeDropdownHandler(event));
        },
        beforeDestroy() {
            document.querySelector('body').removeEventListener('touchstart');
            window.removeEventListener('scroll', this.scrollHandler);
            window.removeEventListener('resize', this.resizeHandler);
        },
        methods: {
            // 取得選單內容
            getData() {
                fetch(`${dir}submenu.json`)
                    .then(res => res.json())
                    .then(res => {
                        this.results = res.filter(value => value.id === id);
                        if (!this.results.length) return;
                        this.setActiveIndex();
                        this.isActive = true;

                        // 依據選單高度設定main上方間距
                        window.addEventListener('load', this.resizeHandler); // 此行保留以相容舊寫法，應在各頁main顯示後(資料取得後)處理
                        window.addEventListener('resize', this.resizeHandler);

                        // 設定頁面捲動時的錨點樣式
                        if (this.results[0].anchors) {
                            window.addEventListener('scroll', this.scrollHandler);
                        }
                    });
            },
            // 設定目前頁面名稱(不含首頁)
            setCurrentPage(text) {
                if (text && !text.match(/首頁$/)) {
                    this.currentPage = text;
                }
                else {
                    this.currentPage = '';
                }
            },
            // 設定目前選單樣式
            setActiveIndex() {
                this.results[0].menus.some((menu, index) => {
                    if (menu.url === page) {
                        this.activeIndex = index;
                        this.setCurrentPage(menu.text);
                        return true;
                    } else if (menu.dropdowns) {
                        return menu.dropdowns.some(dropdown => {
                            if (dropdown.url === page) {
                                this.activeIndex = index;
                                this.setCurrentPage(dropdown.text);
                                return true;
                            }
                        });
                    }
                });
            },
            // 設定標題文字
            setTitle(value) {
                return this.currentPage
                    ? `${value} / ${this.currentPage}`
                    : value;
            },
            getScrollPos(el, offset, callback) {
                if (!$(el).length) return;
                let scrollTop = $(window).scrollTop();
                let target = $(el).offset().top - offset;
                if (scrollTop >= target) {
                    callback();
                }
            },
            scrollHandler() {
                let anchors = this.results[0].anchors;
                let offset = this.submenu.offsetHeight;
                anchors.forEach(item => {
                    this.getScrollPos(item.url, offset, () => {
                        $(this.submenu).addClass('active')
                            .find('.page-submenu-list > li').removeClass('active')
                            .eq(item.index).addClass('active');
                    });
                });
            },
            // 判斷連結開啟方式
            linkTo({ url, target, anchor }) {
                if (target) {
                    window.open(`${url}`, target);
                }
                else if (url && !anchor) {
                    window.open(`${url}`, '_self');
                    this.setPageInfo(url);
                    if (url !== 'javascript:;') {
                        this.closeDropdownHandler();
                    }
                }
                else if (!url && anchor) {
                    let targetPos = $(anchor).offset().top;
                    let offset = document.querySelector('html').classList.contains('production') && $('.page-submenu').outerHeight();
                    let finalPos = offset ? targetPos - offset : targetPos;
                    $('html, body').animate({ scrollTop: finalPos });
                    this.closeDropdownHandler();
                }
                else if (url && anchor) { // 已棄用，應使用各頁面的router.beforeEach處理(如製造業)
                    window.open(`${url}`, '_self');

                    // 切換頁面後延遲兩秒移動至錨點
                    setTimeout(() => {
                        let targetPos = $(anchor).offset().top;
                        let offset = $('.page-submenu').outerHeight();
                        $('html, body').animate({ scrollTop: targetPos - offset });
                        this.closeDropdownHandler();
                    }, 2000);

                    this.setPageInfo(url);
                }
            },
            // 設定頁面資訊
            setPageInfo(url) {
                if (url === 'javascript:;') return;
                page = url;
                this.setActiveIndex();
            },
            openDropdown(event) {
                $(event.target).parents('li').addClass('is-open').siblings().removeClass('is-open');
            },
            closeDropdownHandler(event) {
                if (event && $(event.target).parents('.page-submenubox').length === 1) return;
                $('.page-submenu-list > li').removeClass('is-open');
            },
            resizeHandler() {
                let menuHeight = this.submenu.offsetHeight;
                let main = document.querySelector('main');
                if (main === null) return;
                main.style.paddingTop = menuHeight > 50 ? '50px' : 0;
            }
        },
        template: `
            <div class="page-submenubox" :class="{active:isActive}">
                <div class="page-submenu">
                    <div class="container">
                        <template v-for="result in results">
                            <h2>{{setTitle(result.title)}}</h2>
                            <ul class="page-submenu-list">
                                <li v-for="(menu, index) in result.menus">
                                    <span :class="{active:index===activeIndex}">
                                        <a :href="menu.url" @click.prevent="linkTo(menu)" @touchstart="openDropdown">{{menu.text}}</a>
                                    </span>
                                    <ul v-if="menu.dropdowns" class="page-submenu-dropdown">
                                        <li v-for="dropdown in menu.dropdowns">
                                            <a :href="dropdown.url" @click.prevent="linkTo(dropdown)">{{dropdown.text}}</a>
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
})();