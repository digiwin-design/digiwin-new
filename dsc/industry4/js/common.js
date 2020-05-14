'use strict';$(function(){function a(){$('#adBox').stop().animate({right:0,bottom:0},600),i=!1}function b(){$('#adBox').stop().animate({right:'-300px',bottom:'-500px'},600),i=!0}//頁面滾過視窗高度*0.75時，顯示廣告；滾過視窗高度*1.75時，隱藏廣告
var c,d=$(window),e=$(window).height(),f=$(document),g=$('html, body'),h=!1,i=!0,j=!1,k=location.href,l=k.split('#')[0],m=l.substr(k.lastIndexOf('/')+1);//判斷廣告是否已經預設顯示過一次
//載入廣告內容
//滑過廣告顯示說明
//回頁首
$.getJSON('adData.json',function(a){''==m&&(m='index.htm'),c=a[m],c?($('.adLink').attr('href',c.adLink),$('.adImg').attr({src:c.adImg,alt:c.adImgAlt}),$('.adIcon, .adIconMobile a').text(c.adImgAlt),$('.adTxt').text(c.adTxt),$('#adBox .readMore, .adIconMobile a').attr('href',c.adLink)):$('#adBox, .adIcon').hide()}),d.scroll(function(){var c=d.scrollTop();c>.75*e&&c<=1.75*e?i&&!j&&a():(c>1.75*e||c<.75*e)&&!i&&(b(),j=!0),c>.75*e?!h&&($('#rightIcon').stop().fadeIn(),h=!0):($('#rightIcon').stop().fadeOut(),h=!1)}).scroll(),$('#rightIcon').on('click','.adIcon',function(){a()}),$('#rightIcon').on('click','.goTop',function(){g.animate({scrollTop:0})}),$('#adBox .closeBox').click(function(){b(),j=!0})});
//# sourceMappingURL=common.js.map
