'use strict';$('#sixProcess').tooltip({position:{my:'center top',at:'center top+63px'}});var move,prevProcessName,nextProcessName,$win=$(window),$htmlBody=$('html,body'),winWidth=$win.outerWidth(),processNum=0,threePointNum=0,moveDistance=445,$sixProcessTxtOuter=$('.sixProcessTxtOuter'),$sixProcessNext=$('.sixProcessList .next'),$sixProcessPrev=$('.sixProcessList .prev'),$sixProcessListInner=$('.sixProcessListInner'),$sixProcessBtn=$('.sixProcessBtn'),$threePointListInner=$('.threePointListInner'),$threePointIcon=$('.threePointIcon'),$threePointOrder=$('.threePointList .order li'),isPrevClose=!0;$win.resize(function(){winWidth=$win.outerWidth()});/*scrollDown*/var scrollDownNum;$('#mainVisual .scrollDown').click(function(){scrollDownNum=$('#sixProcess').offset().top,scrollDown()}),$('#sixProcess .scrollDown').click(function(){scrollDownNum=$('#wrapper').offset().top,scrollDown()});function scrollDown(){$htmlBody.stop().animate({scrollTop:scrollDownNum})}/*六階段場景*/$sixProcessBtn.mouseover(function(){var a=$(this);$sixProcessBtn.removeClass('active'),a.addClass('active')}),$threePointIcon.click(function(){threePointNum=$threePointIcon.index(this),moveThreePoint()});function moveThreePoint(){move=threePointNum*moveDistance,$threePointListInner.stop().animate({left:-move}),0===threePointNum?$threePointIcon.removeClass('active'):$threePointIcon.removeClass('active').eq(threePointNum).addClass('active')}// 輪播
new Swiper('.swiper-container',{loop:!0,autoplay:{disableOnInteraction:!1,delay:5e3},pagination:{el:'.case-pagination',clickable:!0,bulletClass:'case-pagination-bullet',bulletActiveClass:'case-pagination-bullet-active'}}),$('.solFigure01, .solFigure02').fancybox({openEffect:'fade',closeEffect:'fade',helpers:{overlay:{locked:!1}}});// =============================================================================
// vue
// =============================================================================
var store=new Vuex.Store({state:{isMobile:!1,showMask:!0,showAd:!0},mutations:{updateDevice:function c(a,b){a.isMobile=b},toggleMask:function c(a,b){a.showMask=b},toggleAd:function c(a,b){a.showAd=b}}});// new Vue({
//     el: '#ad',
//     components: {
//         'ad': httpVueLoader('components/Ad.vue'),
//         'menu-mask': httpVueLoader('components/MenuMask.vue'),
//     },
//     methods: {
//         mediaSensor() {
//             let mm = window.matchMedia('(min-width: 769px)');
//             mm.addListener(this.resizeWidth);
//             this.resizeWidth(mm);
//         }, 
//         resizeWidth(pMatchMedia) {
//             let isMobile = pMatchMedia.matches ? false : true;
//             store.commit('updateDevice', isMobile);
//         },
//     },
//     mounted() {
//         this.mediaSensor();
//     },
// });
//# sourceMappingURL=smartFactory.js.map
