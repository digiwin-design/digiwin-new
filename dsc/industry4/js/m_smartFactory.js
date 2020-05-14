'use strict';var move,prevProcessName,nextProcessName,$win=$(window),$htmlBody=$('html,body'),winWidth=$win.outerWidth(),processNum=0,threePointNum=0,$sixProcessTxtOuter=$('.sixProcessTxtOuter'),$sixProcessNext=$('.sixProcessList .next'),$sixProcessPrev=$('.sixProcessList .prev'),$sixProcessListInner=$('.sixProcessListInner'),$sixProcessBtn=$('.sixProcessBtn'),$threePointListInner=$('.threePointListInner'),$threePointIcon=$('.threePointIcon'),$threePointOrder=$('.threePointList .order li'),isPrevClose=!0;$win.resize(function(){winWidth=$win.outerWidth()}),$('.scrollDown').click(function(){$htmlBody.stop().animate({scrollTop:$('#sixProcess').offset().top})}),$sixProcessBtn.click(function(){processNum=$(this).index(),prevProcessName=$sixProcessTxtOuter.eq(processNum-1).find('h4').text(),nextProcessName=$sixProcessTxtOuter.eq(processNum+1).find('h4').text(),isPrevClose?0!==processNum&&($sixProcessPrev.show(),isPrevClose=!1):0==processNum&&($sixProcessPrev.hide(),isPrevClose=!0),6==processNum&&(nextProcessName='\u89E3\u51B3\u65B9\u6848'),moveSixProcessTxt(processNum,nextProcessName,prevProcessName),$('#sixProcessTxtGroup').delay(300).fadeIn()}),$sixProcessNext.click(function(){prevProcessName=$sixProcessTxtOuter.eq(processNum).find('h4').text(),isPrevClose&&($sixProcessPrev.show(),isPrevClose=!1),5>processNum?(processNum++,nextProcessName=$sixProcessTxtOuter.eq(processNum+1).find('h4').text(),moveSixProcessTxt(processNum,nextProcessName,prevProcessName)):5==processNum?(processNum++,nextProcessName='\u89E3\u51B3\u65B9\u6848',moveSixProcessTxt(processNum,nextProcessName,prevProcessName)):($htmlBody.stop().animate({scrollTop:$('#threePoint').offset().top}),$('#sixProcessTxtGroup').fadeOut())}),$sixProcessPrev.click(function(){nextProcessName=$sixProcessTxtOuter.eq(processNum).find('h4').text(),1==processNum&&($sixProcessPrev.hide(),isPrevClose=!0);0<processNum&&(processNum--,prevProcessName=$sixProcessTxtOuter.eq(processNum-1).find('h4').text(),moveSixProcessTxt(processNum,nextProcessName,prevProcessName))});function moveSixProcessTxt(a,b,c){move=a*winWidth,$sixProcessNext.find('.processName').text(b),$sixProcessPrev.find('.processName').text(c),$sixProcessListInner.stop().animate({left:-move}),$sixProcessBtn.removeClass('active').eq(a).addClass('active')}/*三大關鍵*/$('.threePointIcon').click(function(){threePointNum=$(this).index()-1,moveThreePoint(threePointNum),$('#threePointTxtGroup').delay(300).fadeIn()}),$threePointOrder.click(function(){threePointNum=$(this).index(),moveThreePoint(threePointNum),$('#threePointTxtGroup').delay(300).fadeIn()});function moveThreePoint(a){move=a*winWidth,$threePointListInner.stop().animate({left:-move}),$threePointIcon.removeClass('active').eq(a).addClass('active'),$threePointOrder.removeClass('active').eq(a).addClass('active')}$('.close').click(function(){var a=$(this);a.parents().find('.txtGroup').fadeOut()});/*影片*/var videoNum=0,videoWidth=$('.videoTxt').outerWidth();$('#videoCase .order li').click(function(){videoNum=$(this).index(),move=videoNum*videoWidth,$('.videoContainer').stop().animate({left:-move}),$('#videoCase .order li').removeClass('active').eq(videoNum).addClass('active')}),new Swiper('.swiper-container',{loop:!0,autoplay:{disableOnInteraction:!1,delay:5e3},pagination:{el:'.case-pagination',clickable:!0,bulletClass:'case-pagination-bullet',bulletActiveClass:'case-pagination-bullet-active'}});// =============================================================================
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
//# sourceMappingURL=m_smartFactory.js.map
