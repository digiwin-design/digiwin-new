new Vue({
    el: '#section2',
    data: {
        results: []
    },
    mounted() {
        this.getData();
    },
    updated() {
        this.initComponent();
    },
    methods: {
        getData() {
            fetch('db.json')
                .then(res => res.json())
                .then(res => {
                    this.results = res.index;
                });
        },
        setClass(value) {
            let classes = 'section2-problems';
            if (value.problems.length === 2) {
                classes += ' problems-finance';
            }
            return classes;
        },
        initComponent() {
            let mySwiper, $myAccordion;

            const enableSwiper = function() {
                mySwiper = new Swiper('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    on: {
                        init() {
                            // Disable Swiper Slider if only 1 slide
                            $('.js-section2-problem').each(function() {
                                let slideTotal = $(this).find('.swiper-slide')
                                    .length;
                                if (slideTotal === 1) {
                                    $(this)
                                        .find(
                                            '.swiper-wrapper, .swiper-pagination'
                                        )
                                        .addClass('disabled');
                                }
                            });
                        }
                    }
                });
            };

            const enableAccordion = function() {
                $myAccordion = $('#section2').accordion({
                    icons: false,
                    collapsible: true,
                    heightStyle: 'content'
                });
            };

            // matchMedia
            (function() {
                const breakpoint = window.matchMedia('(min-width: 769px)');

                const breakpointChecker = function() {
                    // >=769px
                    if (breakpoint.matches) {
                        // init swiper
                        enableSwiper();

                        // destroy accordion
                        if ($myAccordion !== undefined) {
                            $myAccordion.accordion('destroy');
                        }
                    }
                    // <769px
                    else {
                        // destroy accordion
                        if (mySwiper !== undefined) {
                            $(mySwiper).each(function(index, element) {
                                element.destroy(true, true);
                            });
                        }

                        // init accordion
                        enableAccordion();
                    }
                };

                breakpoint.addListener(breakpointChecker);

                breakpointChecker(breakpoint);
            })();
        }
    }
});
