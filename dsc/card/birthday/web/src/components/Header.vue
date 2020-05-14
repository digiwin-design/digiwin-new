<template lang="pug">
    div.top
        //- 手機版的LOGO+右上按鈕
        #TOP-MENU
            h4#LOGO_M(@click='clickHandler') 鼎新電腦

        //- 主選單區
        #nav
            a(href='http://www.digiwin.com/tw', target='_blank')
                img.logo(src='http://www.digiwin.com/tw/dsc/Library/images/logo.png', alt='鼎新官網', width='90', height='29')
</template>

<script>
export default {
    methods: {
        clickHandler() {
            window.open('http://www.digiwin.com/tw');
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
