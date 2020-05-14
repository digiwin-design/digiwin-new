<template lang="pug">
    div.top
        //- 手機版的LOGO+右上按鈕
        #TOP-MENU
            h4#LOGO_M 鼎新電腦
            h5#BTN MENU

        //- 主選單區
        #nav
            a(href='https://www.digiwin.com/tw', target='_blank')
                img.logo(src='https://www.digiwin.com/tw/dsc/Library/images/logo.png', alt='鼎新官網', width='90', height='29')
            ul.link
                li.line_L
                    a(href='https://www.digiwin.com/tw/activity.html', target='_blank') 最新課程
                li
                    a(href='https://www.digiwin.com/tw/enewspaper.html', target='_blank') 電子報
                li
                    a(href='javascript:;')
                        | 解決方案
                        img(src='https://www.digiwin.com/tw/dsc/Library/images/arr.png', width='9', height='7')
                    ul.subLink
                        li
                            a(href='https://www.digiwin.com/tw/case.html', target='_blank') E化案例
                li
                    a(href='https://www.youtube.com/user/DSCTCE00', target='_blank')
                        | YouTube
                        img(src='https://www.digiwin.com/tw/dsc/Library/images/arr.png', width='9', height='7')
                    ul.subLink
                        li
                            a(href='https://www.facebook.com/DSCmain', target='_blank') 鼎新粉絲團
                        li
                            a(href='https://www.digiwin.com/tw/dsc/service/WB002588/WB00258801.html', target='_blank') 心服務新價值
                        li
                            a(href='https://a1.digiwin.com/', target='_blank') 商務應用雲
                        li
                            a(href='https://www.digiwin.com/tw/dsc/service/WB002903/web/WB00290301_index.htm', target='_blank') 鼎新服務雲
                li.Phone
                    a(href='https://www.digiwin.com/tw/contact/eform.html')
                        img(src='https://www.digiwin.com/tw/dsc/Library/images/phoneIcon.png', width='16', height='12')
                        |  0800-888-162
</template>

<script>
export default {
    methods: {
        initMenu() {
            /*-------上方企業識別Nav-------------*/
            /*$("#nav ul ul").hide();*/

            $("#nav > ul > li").hover(function () {
                var N = $(this).index();
                $("#nav > ul > li").eq(N).find("ul").stop(true, true).slideDown(100);
            }, function () {
                var N = $(this).index();
                $("#nav > ul > li").eq(N).find("ul").stop(true, true).slideUp(100);
            })


            /*-------手機版Nav-------------*/

            $("#BTN").on("click", this.OPENOPEN);

            $(window).on("resize", CLEARSTYLE)
            function CLEARSTYLE() {
                if ($(window).innerWidth() > 768) {
                    $("#nav").attr("style", "");
                }
            }

            $("#LOGO_M").on("click", DIGIWIN);
            function DIGIWIN() {
                window.open("https://www.digiwin.com/tw");

            }
        },
        OPENOPEN() {
            $("#nav").slideToggle(300);
            this.$store.commit('toggleMask', !this.$store.state.showMask);
        },
        slideUpNav() {
            if ($(window).innerWidth() <= 768) {
                $("#nav").slideUp(300);
            }
        },
    },
    mounted() {
        this.initMenu();
        document.querySelector('#mask').addEventListener('click', this.slideUpNav);
        document.querySelector('#mask').addEventListener('touchstart', this.slideUpNav);
    },
    beforeDestroy() {
        document.querySelector('#mask').removeEventListener('click', this.slideUpNav);
        document.querySelector('#mask').removeEventListener('touchstart', this.slideUpNav);
    }
}
</script>

<style lang="scss" scoped>
.top {
    position: relative;
    z-index: 5;
}
</style>
