<template>
    <div class="section-btns">
        <a v-bind:href="link.url" v-bind:target="link.target" class="btn">想要了解更多</a>
        <a href="#contact" class="btn js-nav">預約諮詢服務</a>
    </div>
</template>

<script>
module.exports = {
    props: {
        link: {
            type: Object,
            required: true
        }
    }
}
</script>