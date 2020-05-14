Promise.all([fetchFile('db.json'), fetchFile('components/WB00291701_4.vue')]).then(res => {
    let results = res[0]['01_4'];
    document.querySelector('#main').innerHTML = res[1];

    let $section2;

    new Vue({
        el: '#main',
        computed: {
            section1: () => results.section1,
            section2: () => results.section2,
            section3: () => results.section3
        },
        mounted() {
            $section2 = $('#section2');
            $(window).on('scroll.section2', this.scrollHandler);
        },
        destroyed() {
            $(window).off('scroll.section2');
        },
        methods: {
            scrollHandler: _.throttle(() => {
                let pos = $(window).scrollTop();
                let distance = $section2.offset().top - $(window).height();
                if (pos >= distance) {
                    $section2.find('i').addClass('animated bounceIn');
                }
            }, 100)
        }
    });
});

Vue.component('Checklist', {
    props: ['lists'],
    template: `
        <ul class="section2-checklist">
            <li v-for="(list, index) in lists">
                <i></i>
                {{list}}
            </li>
        </ul>
    `
});