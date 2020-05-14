<template>
    <div>
        <div class="wrapper">
            <Header></Header>
            <MenuMask></MenuMask>
            <main>
                <router-view/>
            </main>
            <Footer></Footer>
        </div>
        <loading :loading="loading"></loading>
    </div>
</template>

<script>
import '@/assets/vendor/modernizr-custom';
import '@/assets/vendor/mobile-detect';
import '@/assets/vendor/mobile-detect-modernizr';
import mixins from '@/mixins';
import Header from '@/components/Header.vue';
import MenuMask from '@/components/MenuMask.vue';
import Footer from '@/components/Footer.vue';
import Loading from '@/components/Loading.vue';

export default {
    name: 'app',
    mixins: [mixins],
    components: {
        Header,
        MenuMask,
        Footer,
        Loading,
    },
    computed: {
        detectIE() {
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
        },
    },
    watch: {
        loading(value) {
            if (!value) {
                this.$nextTick(() => this.scrollToAnchor(`#${this.$route.query.a}`));
            }
        },
    },
    methods: {
        mediaSensor(minWidth) {
            let resizeWidth = (pMatchMedia) => this.$store.commit('setDeviceType', !pMatchMedia.matches);
            let mm = window.matchMedia(`(min-width: ${minWidth + 1}px)`);
            mm.addListener(resizeWidth);
            resizeWidth(mm);
        },
        mediaSensor2(minWidth) {
            let resizeWidth = (pMatchMedia) => this.$store.commit('setDeviceType2', !pMatchMedia.matches);
            let mm = window.matchMedia(`(min-width: ${minWidth + 1}px)`);
            mm.addListener(resizeWidth);
            resizeWidth(mm);
        },
    },
    created() {
        this.$store.dispatch('getData');
    },
    mounted() {
        this.$store.commit('setDevice', new MobileDetect(window.navigator.userAgent).mobile());
        this.mediaSensor(768);
        this.mediaSensor2(1499);
        
        // if (this.detectIE) {
        //     alert('建議使用 Google Chrome，以獲得最佳瀏覽效果。');
        // }
    },
}
</script>

<style lang="scss">
@import '@/assets/sass/reset.scss';
@import '@/assets/sass/common.scss';

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    margin: 0 auto;
    min-width: $min-width;
    max-width: $max-width;
    width: 100%;
    flex-grow: 1;
}
.container {
    // outline: 1px solid #0ff;
    margin: 0 auto;
    padding: 0 15px;
    max-width: $content-width;
    @media (min-width: $min-width + 1) {
        padding-right: 20px;
        padding-left: 20px;
    }
    @media (min-width: $content-width) {
        padding-right: 0;
        padding-left: 0;
    }
}
</style>
