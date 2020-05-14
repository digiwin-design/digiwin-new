$('.js-learnMore').on('click', function(event) {
    event.preventDefault();
    $(this)
        .parents('.js-section1-header')
        .next()
        .slideToggle();
});
