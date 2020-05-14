<template>
    <article class="articleComponent" :class="section">
        <div class="container">
            <h1 class="sectionTitle">
                <slot name="title"></slot>
            </h1>
            <div v-if="desc" class="articleDesc">
                <slot v-if="isMobile" name="desc-s"></slot>
                <slot v-else name="desc"></slot>
            </div>
            <div class="illust">
                <slot name="svg"></slot>
            </div>
            <slot name="picture"></slot>
        </div>
    </article>
</template>

<script>
module.exports = {
    props: ['section', 'desc'],
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        }
    },
}
</script>