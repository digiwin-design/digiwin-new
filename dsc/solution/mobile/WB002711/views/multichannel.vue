<template>
    <div class="multichannel">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <template v-if="isReady">
            <article class="section1">
                <section-title title="方案介紹"></section-title>
                <collapse :collapse="result.collapse"></collapse>
            </article>
        </template>
    </div>
</template>

<script>
module.exports = {
    name: 'multichannel',
    components: {
        'collapse': httpVueLoader('../components/multichannel/collapse.vue'),
    },
    computed: {
        result() {
            return store.state.result.multichannel;
        },
        isReady() {
            return store.state.isReady;
        },
    },
}
</script>
