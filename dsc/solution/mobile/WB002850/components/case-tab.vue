<template>
    <article class="case-tab">
        <div class="container">
            <section-title title="方案介紹" padding-top="50px"></section-title>
            
            <div class="nav">
                <a href v-for="(item, idx) in cases" :key="item.title" :class="{ active: idx === currentCase }" @click.prevent="currentCase=idx">{{item.title}}</a>
            </div>

            <hgroup>
                <h2>{{myCase.title}}</h2>
                <h3 v-if="myCase.subtitle">{{myCase.subtitle}}</h3>
            </hgroup>
            <p>{{myCase.desc}}</p>
            <img :src="img" v-for="img in myCase.imgSrc" :key="img">
        </div>
    </article>
</template>

<script>
module.exports = {
    name: 'case-tab',
    props: {
        cases: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            currentCase: 0,
        }
    },
    computed: {
        myCase() {
            return this.cases[this.currentCase];
        },
    },
    methods: {
        preload() {
            let imgs = [];
            this.cases.forEach(item => {
                imgs = imgs.concat(item.imgSrc);
            });
            preloadImg(imgs);
        }
    },
    created() {
        this.preload();
    },
}
</script>