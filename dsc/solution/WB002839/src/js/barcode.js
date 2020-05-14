// =============================================================================
// function
// =============================================================================
function detectIE() {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

// =============================================================================
// event
// =============================================================================
// 錨點連結
$(document).on('click', '.js-nav', function (event) {
    event.preventDefault();
    let target = $(this).attr('href') || $(this).data('target');
    let offset = $(this).data('offset');
    let targetPos = $(target).offset().top;
    let finalPos = offset ? targetPos - offset : targetPos;
    $('html, body').animate({ scrollTop: finalPos - 50 });
});

// 頭部滾動視差
if (!detectIE()) {
    let $header = $('header');
    let $mainHeader = $('#header');
    let posY;
    $(window).on('scroll.parallax', function () {
        let headerHeight = $header.height();
        let scrollPos = $(window).scrollTop();
        let nextPos = $mainHeader.next().offset().top;
        if (scrollPos >= headerHeight && scrollPos < nextPos) {
            posY = (scrollPos - headerHeight) / 2;
        }
        else {
            posY = 0;
        }
        $mainHeader.css('background-position', `50% ${posY}px`);
    });
}

// =============================================================================
// init
// =============================================================================
let md = new MobileDetect(window.navigator.userAgent);

new WOW().init();

// section4 demo
let demoData = [
    {
        id: 1,
        title: '庫存盤點',
        contents: [
            '勾選欲下載之盤點底稿編號範圍，點選「下載」，會出現下載訊息，進入庫存盤點作業，選擇盤點底稿，點選「下一步」進行盤點',
            '輸入庫別、品號、批號、盤點數量，按Enter 儲存，即儲存該品號盤點資料',
            '盤點數量自動回寫ERP'
        ]
    },
    {
        id: 2,
        title: '採購進貨',
        contents: [
            '點選下方列表，可查看此採購單之內容資訊，輸入庫別代碼、品號，即帶出品名、規格及應收量',
            '輸入批號，若品號有做允收管理，系統自動計算允收日期，依客戶資料的允收期管制(警告或拒絕)，輸入進貨數量，即儲存完畢',
            'ERP自動產生進貨單'
        ]
    }
];
Vue.component('Section', {
    props: ['result'],
    data() {
        return {
            index: 1,
            timer: null
        };
    },
    mounted() {
        this.loop();
        this.swipeHandler();
    },
    methods: {
        loop() {
            if (!this.timer) {
                this.timer = setInterval(() => {
                    this.index = this.index % 4 < 3 ? this.index + 1 : 1;
                }, 5000);
            }
        },
        stopLoop() {
            clearInterval(this.timer);
            this.timer = null;
        },
        setIndex(index) {
            this.stopLoop();
            this.index = index;
            this.loop();
        },
        swipeHandler() {
            let Section = this;
            let el = this.$el.querySelector('.js-slider-container');
            $(el).swipe({
                swipe (event, direction, distance, duration, fingerCount, fingerData) {
                    Section.stopLoop();
                    if (direction === 'left' && Section.index !== 3) {
                        Section.index += 1;
                    }
                    else if (direction === 'right' && Section.index !== 1) {
                        Section.index -= 1;
                    }
                    Section.loop();
                },
                threshold: 0
            });
        }
    },
    template: `
        <section :id="'demo' + result.id">
            <h1 :class="'demo' + result.id">{{result.title}}</h1>
            <div class="slider-container js-slider-container">
                <div class="slider-wrapper" :class="'index' + index">
                    <figure v-for="(content, contentIdx) in result.contents">
                        <img :src="'images/barcode/section4-slide' + result.id + '-' + (contentIdx + 1) + '.png'" alt="">
                        <figcaption v-show="contentIdx !== 2">{{content}}</figcaption>
                    </figure>
                </div>
                <ul class="slider-pagination">
                    <li v-for="(content, contentIdx) in result.contents" @click="setIndex(contentIdx + 1)">{{contentIdx + 1}}</li>
                </ul>
            </div>
        </section>
    `
});
new Vue({
    el: '#section4-app',
    computed: {
        demo1() {
            return demoData[0];
        },
        demo2() {
            return demoData[1];
        },
    },
    template: `
        <div class="section4-demo container">
            <Section :result="demo1"/>
            <Section :result="demo2"/>
        </div>
    `
});

new Vue({
    el: '#contact',
    components: {
        contact: httpVueLoader('components/contact.vue')
    }
});