<template>
    <div>
        <div ref="accordion" class="accordion">
            <template v-for="(item, idx) in accordion">
                <h2 v-on:click="slideToggle" :key="item.title" :id="item.id || ''">{{item.title}}</h2>
                <div
                    class="accordion-content"
                    :key="item.contents[idx] && item.contents[idx].company"
                >
                    <case
                        v-for="content in item.contents"
                        :key="content.company"
                        :kind="content.kind"
                        :company="content.company"
                        :desc="content.desc"
                        :url="content.url"
                    ></case>
                    <a
                        v-if="item.link"
                        :href="item.link.url"
                        class="accordion-content-link"
                        target="_blank"
                    >{{item.link.text}}</a>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['accordion'],
    methods: {
        slideToggle: function (event) {
            $(event.target).toggleClass('active').next().slideToggle();
        },
        scrollHandler: function (event) {
            $(event.target.hash).addClass('active').next().slideDown();
        }
    },
    mounted: function () {
        $(this.$refs.accordion).find('h2').eq(0).addClass('active');
    },
};
</script>

<style scoped>
.accordion h2 {
    display: flex;
    padding-right: 20px;
    padding-left: 20px;
    height: 84px;
    font-weight: bold;
    line-height: 84px;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
}
.accordion h2:not(:last-of-type) {
    border-bottom: 1px solid #e8e8e8;
}
.accordion h2:focus {
    outline: none;
}
.accordion h2::after {
    width: 20px;
    height: 20px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAALVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////BHg4sAAAADXRSTlMA4qxbVPrdiwcGivPXUMzG+gAAAGhJREFUCNdjYGDgNEoNU57AAAJud4EgBcRivwsGBUBmLYR5nYGBBUjdewskHBgaYUwJBlsY8zKDLox5iUEWxrzIEHv3HRjcvYrMRChA1oYwDMkKZIsZ1kKccwvoMi64IxFOh3hoD8hDAO3egudkhIJfAAAAAElFTkSuQmCC);
    content: "";
}
.accordion h2.active::after {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAALVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////BHg4sAAAADXRSTlMA4qxbVPrdiwcGivPXUMzG+gAAAGVJREFUCNdjYGDgNEoNU57AAAJud4EgBcRivwsGBUBmLYR5nYGB5S4UODA0wpgSDLYw5mUGXRjzEoMsjHmRIfbuOzC4exWZiVCArA1hGJIVyBYzrIWwbgFdxgV3JMLpEA/tAXkIAKUdgj3j5jcXAAAAAElFTkSuQmCC);
    content: "";
}
.accordion-content {
    padding-right: 20px;
    padding-left: 20px;
}
.accordion-content:not(:first-of-type) {
    display: none;
}
</style>
