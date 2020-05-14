fetch('db.json')
    .then(res => res.json())
    .then(res => {
        let result = res.index;
        new Vue({
            el: '#section1',
            data: {
                isInit: false
            },
            computed: {
                result() {
                    return result.section1;
                },
                progressbarsPos() {
                    return $('#section1-progressbars').offset().top;
                }
            },
            mounted() {
                this.scrollHandler();
                $(window).on('scroll.initComponent', _.throttle(() => {
                    this.scrollHandler();
                }, 100));
            },
            methods: {
                scrollHandler() {
                    if (!this.isInit) {
                        let distance = this.progressbarsPos - $(window).height();
                        let windowPos = $(window).scrollTop();
                        if (windowPos >= distance) {
                            this.initComponent();
                            this.isInit = true;
                        }
                    }
                },
                initComponent() {
                    setTimeout(() => {
                        $('.js-progressbar').addClass('active').each(function (index) {
                            let percentage = this.dataset.percentage;
                            new CountUp(`progressbar${index + 1}`, 0, percentage).start();
                        });
                    }, 100);
                }
            },
            template: `
                <ul id="section1-progressbars" class="section1-progressbars">
                    <li v-for="(item, index) in result">
                        <div class="section1-text">
                            <p>{{item.text}}</p>
                        </div>
                        <div class="section1-value">
                            <div :id="'progressbar' + (index + 1)" class="section1-progressbar js-progressbar" :data-percentage="item.percentage">0</div>
                        </div>
                    </li>
                </ul>
            `
        });
        new Vue({
            el: '#section3',
            computed: {
                result() {
                    return result.section3;
                }
            },
            template: `
                <ul>
                    <li v-for="(item, index) in result">
                        <div class="section3-item" :class="'item' + (index + 1)">
                            <ul>
                                <li v-for="item in item.text">{{item}}</li>
                            </ul>
                            <p class="section3-item-title" onclick>{{item.title}}</p>
                            <div class="section3-item-hover">
                                <ul>
                                    <li v-for="item in item.hoverText">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            `
        });
    });
