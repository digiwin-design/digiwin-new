// 錨點連結
document.addEventListener('click', function () {
    const el = event.target;
    if (el.tagName === 'A' && el.classList.contains('js-nav')) {
        event.preventDefault();
        let target = el.getAttribute('href') || el.getAttribute('xlink:href') || el.dataset.target;
        let offset = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
        let targetPos = document.querySelector(target).getBoundingClientRect().top + window.pageYOffset;
        let finalPos = offset ? targetPos - offset : targetPos;
        window.scroll({ top: finalPos, left: 0, behavior: 'smooth' });
    }
});