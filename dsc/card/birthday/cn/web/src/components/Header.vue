<template lang="pug">
    div.top
        //- 手機版的LOGO+右上按鈕
        #TOP-MENU
            h4#LOGO_M(@click='clickHandler') 鼎捷软件

        //- 主選單區
        #nav
            a(href='http://www.digiwin.com', target='_blank')
                img.logo(src='http://www.digiwin.com/tw/dsc/Library/images/logo-cn.png', alt='鼎捷官网', width='90', height='29')
</template>

<script>
export default {
    methods: {
        clickHandler() {
            window.open('http://www.digiwin.com');
        }
    }
}
</script>

<style lang="scss" scoped>
.top {
    position: relative;
    z-index: 5;
}
</style>
