<template>
    <div class="wall">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">
            <article id="case" class="container">
                <section-title title="輔導案例"></section-title>
                <div class="case-item">
                    <a :href="`#${item.title}`" class="js-nav no-smooth" v-for="item in result.caseList" :key="item.list[0].link">{{item.title}}</a>
                </div>

                <section :id="item.title" v-for="item in result.caseList" :key="item.list[0].link">
                    <section-title :title="item.title"></section-title>
                    <case-list :list="item.list"></case-list>
                    <a href="#case" class="top js-nav no-smooth">Top</a>
                </section>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'wall',
    computed: {
        result() {
            return store.state.result.wall;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
