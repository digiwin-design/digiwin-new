<template>
    <div class="issue03">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">
            <article class="section1">
                <div class="container">
                    <section-title title="研討會資訊"></section-title>
                    <section class="seminar" v-for="(item, idx) in result.section1" :key="item.category">
                        <figure>
                            <figcaption>{{item.category}}</figcaption>
                            <img :src="`images/issue03/section1-illust${idx + 1}.jpg`" alt="">
                        </figure>
                        <h1>{{item.title}}</h1>
                        <p class="seminar__speaker" v-html="item.speaker"></p>
                        <p class="seminar__desc">{{item.desc}}</p>
                        <div class="seminar__btn">
                            <a href="#contact" class="js-nav">索取資料</a>
                            <a :href="item.link" target="_blank">了解更多</a>
                        </div>
                    </section>
                </div>
            </article>

            <article class="section2">
                <div class="container">
                    <section-title title="IPO成功案例"></section-title>
                    <a :href="item.link" target="_blank" :data-co="item.company" v-for="item in result.section2" :key="item.company">
                        <i v-html="item.company"></i>
                        {{item.content}}
                    </a>
                </div>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'issue03',
    computed: {
        result() {
            return store.state.result.issue03;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
