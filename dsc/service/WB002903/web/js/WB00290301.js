// 輪播
var swiper = new Swiper('.swiper-container', {
    // spaceBetween: 0,
    loop: true,
    autoplay: {
        disableOnInteraction: false
    },
    pagination: {
        el: '.banner-pagination',
        clickable: true,
        bulletClass: 'banner-pagination-bullet',
        bulletActiveClass: 'banner-pagination-bullet-active'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
