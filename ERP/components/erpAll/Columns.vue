<template>
    <div class="columns">
        <div v-for="column in columns" :key="column.title" class="col">
            <a
                :href="column.url"
                @mouseenter="hoverHandler(true,$event)"
                @mouseleave="hoverHandler(false,$event)"
                @click="removeClass"
                class="js-columns-link js-nav"
            >
                <div>
                    <img :src="column.imgSrc" class="mouseenter" alt>
                    <img v-if="column.hoverImgSrc" :src="column.hoverImgSrc" class="mouseleave" alt>
                </div>
                <p>{{column.title}}</p>
                <i class="material-icons">keyboard_arrow_down</i>
            </a>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: {
        columns: Array,
    },
    methods: {
        hoverHandler: function (value, evt) {
            if (value) {
                evt.target.classList.add('is-hover');
            }
            else {
                evt.target.classList.remove('is-hover');
            }
        },
        removeClass: function() {
            // 移除手機點擊後加入的class(觸發mouseenter)
            $('.js-columns-link').removeClass('is-hover');
        }
    },
}
</script>