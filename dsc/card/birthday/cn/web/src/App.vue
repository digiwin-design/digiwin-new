<template>
    <div class="wrapper">
        <Header></Header>
        <MenuMask></MenuMask>
        <div class="main">
            <div class="container">
                <h1>请凭直觉抽出一张卡，看您的生日幸运星降落在何处！</h1>
                <Desk></Desk>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import './assets/js/modernizr-custom';
import './assets/js/mobile-detect';
import './assets/js/mobile-detect-modernizr';
import Header from './components/Header.vue';
import MenuMask from './components/MenuMask.vue';
import Footer from './components/Footer.vue';
import Desk from './components/Desk.vue';

let images = [];

export default {
    name: 'app',
    components: {
        Header,
        MenuMask,
        Footer,
        Desk,
    },
    mounted() {
        this.$store.commit('setDevice', new MobileDetect(window.navigator.userAgent).mobile());

        // preload image                
        for (let i = 1; i <= 6; i++) {
            images[i] = new Image();
            images[i].src = 'images/popup-card'+ i + '.png';
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/sass/reset.scss';
@import '@/assets/sass/common.scss';
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.main {
    display: flex;
    overflow: hidden;
    min-width: 320px;
    letter-spacing: getLetterSpacing(25);
    flex-grow: 1;
    background: url('~@/assets/images/bg.jpg') no-repeat 50%;
    @media (max-width: $tablet-width) {
        background-size: cover;
    }
}
.container {
    margin: auto;
    padding: 36px 15px 15px;
}
h1 {
    margin-bottom: .5em;
    color: #381818;
    text-align: center;
    letter-spacing: getLetterSpacing(25);
    font-size: 28px;
    line-height: 1.3;
}
</style>
