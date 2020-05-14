<template>
    <div>
        <main-header>
            <template slot="content">
                <h1 v-html="seminar.title"></h1>
                <p v-html="seminar.desc"></p>
            </template>
        </main-header>

        <article>
            <div class="container">
                <h1>{{seminar.section1Title}}</h1>
                <p>鼎新深耕流通買賣業多年，期許藉著各種不同議題的研討會，與流通業朋友們一同精進成長，也體會忙碌的工作讓您無法親自前來上課聽取新知，我們特別提供各場研討會講義資料索取，如您對任何一場有興趣了解，都可以點選[索取資料]，我們將盡快將資料送達您手中。知識就是力量，我們願意與您分享更多成功者的思考面向與成功密訣！</p>
                <ul class="nav">
                    <li v-for="(text,idx) in seminar.nav" :key="text">
                        <a
                            :href="'#section'+(idx+1)"
                            data-delay="450"
                            v-on:click.prevent="clickHandler"
                        >{{text}}</a>
                    </li>
                </ul>
            </div>

            <template v-for="(accordion,idx) in seminar.accordions">
                <p
                    :id="['section'+(idx+1)]"
                    class="category container"
                    :key="accordion.category"
                >{{accordion.category}}：</p>
                <accordion
                    :accordion="accordion.content"
                    :index="idx+1"
                    :key="accordion.content[0].id"
                ></accordion>
            </template>
        </article>

        <contact v-bind:multiple="false" source></contact>
    </div>
</template>

<script>
module.exports = {
    props: ['seminar'],
    components: {
        'accordion': httpVueLoader('components/seminar/accordion.vue'),
    },
    methods: {
        clickHandler: function (event) {
            let delay = $(event.target).data('delay') || 0;
            // 展開/收合
            let $accordion = $(event.target.hash).next();
            if (!$accordion.find('h2').next().is(':visible')) {
                $accordion.find('h2').eq(0).trigger('click');
            }
            $accordion.siblings('.accordion').find('h2.ui-state-active').trigger('click');

            // 滾動頁面
            let $target = $(event.target);
            let target = $target.attr('href') || $target.data('target');
            setTimeout(function () {
                let offset = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
                let targetPos = document.querySelector(target).offsetTop;
                let finalPos = offset ? targetPos - offset : targetPos;
                $('html, body').animate({ scrollTop: finalPos });
            }, delay);
        },
    },
};
</script>