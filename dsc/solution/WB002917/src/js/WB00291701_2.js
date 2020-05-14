let slider = document.querySelector('#section6-slider');
let sliderToggle = document.querySelector('#section6-sliderToggle');

// =============================================================================
// function
// =============================================================================
function setSliderHeight(order) {
    let contentHeight = slider.querySelectorAll('article')[order].querySelector('.js-container').offsetHeight;
    slider.style.height = contentHeight + 'px';
}

function setSliderHeightHandler() {
    let order = $(sliderToggle).prop('checked') ? 1 : 0;
    setTimeout(() => {
        setSliderHeight(order);
    }, 500);
}

// =============================================================================
// event
// =============================================================================
sliderToggle.addEventListener('change', setSliderHeightHandler);

window.addEventListener('resize', _.throttle(setSliderHeightHandler, 500));

// =============================================================================
// initial
// =============================================================================
setSliderHeight(0);
