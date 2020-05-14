Vue.component('Checklist', {
    props: ['content'],
    template: `
        <ul class="checklist">
            <li v-for="(list, index) in content">
                <i class="animated bounceIn"></i>
                {{list}}
            </li>
        </ul>
    `
});

Vue.component('Images', {
    props: ['content'],
    computed: {
        src() {
            return this.content.length === 1 ? [this.content[0], this.content[0]] : this.content;
        }
    },
    template: `
        <picture>
            <source :srcset="'images/01_3/' + src[0]" media="(min-width: 768px)">
            <img :src="'images/01_3/' + src[1]">
        </picture>
    `
});

Vue.component('Sft', {
    props: ['content'],
    template: `
        <div>
            <Checklist :content="content.lists"/>
            <Images :content="content.images"/>
        </div>
    `
});

Vue.component('Lists', {
    props: ['content'],
    template: `
        <ul class="lists">
            <li v-for="list in content">{{list}}</li>
        </ul>
    `
});

Vue.component('Columns', {
    props: ['content'],
    template: `
        <ul class="columns">
            <li v-for="item in content">
                <template v-if="!item.customTitle">
                    <div class="columns-title">{{item.title}}</div>
                    <div class="columns-content">{{item.content}}</div>
                </template>
                <div v-else v-html="item.customTitle" class="columns-title custom"></div>
            </li>
        </ul>
    `
});

Vue.component('Lightbox', {
    props: ['content'],
    mounted() {
        $('[data-fancybox="gallery"]').fancybox({
            infobar: false,
            toolbar: false
        });
    },
    beforeDestroy() {
        $.fancybox.destroy();
    },
    template: `
        <ul class="lightbox">
            <li v-for="image in content">
                <p class="lightbox-title">{{image.title}}</p>
                <a data-fancybox="gallery" :href="'images/01_3/' + image.big">
                    <img :src="'images/01_3/' + image.small">
                </a>
            </li>
        </ul>
    `
});

Vue.component('ColumnList', {
    props: ['content'],
    methods: {
        setClass(childrens) {
            return childrens ? true : false;
        }
    },
    template: `
        <ul class="columns">
            <li v-for="item in content" :class="{cols: setClass(item.content.childrens)}">
                <div class="columns-title">{{item.title}}</div>
                <div class="columns-content">
                    <p v-if="item.content.title" v-html="item.content.title" class="columns-contentTitle"></p>
                    <Lists v-if="item.content.lists" :content="item.content.lists"/>
                    <DlList v-if="item.content.dlLists" :content="item.content.dlLists"/>
                </div>
                <ul v-if="item.content.childrens">
                    <li v-for="children in item.content.childrens">
                        <div class="columns-title">{{children.title}}</div>
                        <div class="columns-content">
                            <p v-if="children.content.title" v-html="children.content.title" class="columns-contentTitle"></p>
                            <Lists v-if="children.content.lists" :content="children.content.lists"/>
                            <DlList v-if="children.content.dlLists" :content="children.content.dlLists"/>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    `
});

Vue.component('ChecklistH', {
    props: ['content'],
    methods: {
        setDelay(index) {
            if (index) {
                return `delay-${index}s`;
            }
        }
    },
    template: `
        <ul class="checklistH checklist">
            <li v-for="(list, index) in content">
                <i class="animated bounceIn" :class="setDelay(index)"></i>
                <p class="checklistH-highlight">{{list.highlight}}</p>
                <p class="checklistH-text">{{list.text}}</p>
            </li>
        </ul>
    `
});

Vue.component('DlList', {
    props: ['content'],
    template: `
        <dl class="dlLists">
            <template v-for="list in content">
                <dt>{{list.term}}</dt>
                <dd>{{list.description}}</dd>
            </template>
        </dl>
    `
});

Vue.component('PrivateCloud', {
    props: ['content'],
    template: `
        <div class="privateCloud">
            <div v-for="item in content" class="col">
                <article>
                    <h1>{{item.title}}</h1>
                    <Lists :content="item.lists"/>
                    <Images :content="item.images"/>
                </article>
            </div>
        </div>
    `
});

$.preload('images/01_3/section1-3-1.png', () => {
    Promise.all([fetchFile('db.json'), fetchFile('components/WB00291701_3.vue')]).then(res => {
        let results = res[0]['01_3'];
        document.querySelector('#main').innerHTML = res[1];

        let vm = new Vue({
            el: '#main',
            data: {
                sectionId: 0,
                target: null,
                device: 'mobile'
            },
            computed: {
                results() {
                    return results;
                },
                result() {
                    return results[this.sectionId];
                },
                theme() {
                    return `theme${this.sectionId + 1}`;
                }
            },
            created() {
                this.preloadImgs();
            },
            mounted() {
                window.addEventListener('resize', this.resetSlider);
                this.initComponent();
                this.matchMedia();
            },
            beforeUpdate() {
                this.destroyComponent();
            },
            updated() {
                this.initComponent();
                this.resetSlider();
                this.moveTo();
            },
            methods: {
                initComponent() {
                    $('#section-mb-accordion').accordion({
                        icons: false,
                        collapsible: true,
                        heightStyle: 'content'
                    });
                    $('.js-section-mb-tabs').tabs();
                },
                destroyComponent() {
                    $('#section-mb-accordion').accordion('destroy');
                    $('.js-section-mb-tabs').tabs('destroy');
                },
                changeSection(sectionId, target = null) {
                    this.sectionId = sectionId;
                    this.target = target;
                    if (target) {
                        vm.$forceUpdate();
                    }
                },
                setSliderHeight(target) {
                    let selector = document.querySelector('.js-' + target);
                    $(selector).parents('.js-section-slider').height(selector.offsetHeight);
                },
                resetSlider() {
                    // 設定slider預設高度
                    $('.js-section-slider').each(function () {
                        let _height = $(this).children('div').first().find('.js-section-slider-content').outerHeight();
                        this.style.height = `${_height}px`;
                    });
                    // 每個slider切換至第一個項目
                    $('#section article').each(function () {
                        $(this).find('[type="radio"]').first().prop('checked', true);
                    });
                },
                moveTo() {
                    // 移動至指定區塊
                    if (this.target) {
                        let offset = $('.page-submenu').outerHeight();
                        let targetPos = $(this.target).offset().top;
                        let finalPos = offset ? targetPos - offset : targetPos;
                        $('html, body').animate({ scrollTop: finalPos });
                    }
                },
                resizeWidth(pMatchMedia) {
                    if (pMatchMedia.matches) {
                        this.resetSlider();
                        this.device = 'pc';
                    }
                    else {
                        this.device = 'mobile';
                    }
                },
                matchMedia() {
                    let mm = window.matchMedia('(min-width: 768px)');
                    mm.addListener(this.resizeWidth);
                    this.resizeWidth(mm);
                },
                preloadImgs() {
                    let preloadArr = [];

                    this.results.forEach(el => {
                        el.categories.forEach(el => {
                            el.items.forEach(el => {
                                if (el.component === 'Images') {
                                    el.content.forEach(el => {
                                        preloadArr.push(`images/01_3/${el}`);
                                    });
                                }
                                else if (el.component === 'Sft') {
                                    el.content.images.forEach(el => {
                                        preloadArr.push(`images/01_3/${el}`);
                                    });
                                }
                                else if (el.component === 'Lightbox') {
                                    el.content.forEach(el => {
                                        preloadArr.push(`images/01_3/${el.big}`);
                                        preloadArr.push(`images/01_3/${el.small}`);
                                    });
                                }
                                else if (el.component === 'PrivateCloud') {
                                    el.content.forEach(el => {
                                        el.images.forEach(el => {
                                            preloadArr.push(`images/01_3/${el}`);
                                        });
                                    });
                                }
                                else if (el.html) {
                                    let str = el.html;
                                    let start = str.indexOf('images/01_3/');
                                    let end = str.lastIndexOf('.png');
                                    let path = str.slice(start, end);
                                    preloadArr.push(`${path}.png`);
                                }
                            });
                        });
                    });

                    $.preload(preloadArr);
                }
            }
        });
    });
});
