<template>
    <div class="sliderTitle">
        <h1 class="sectionTitle">
            <slot name="title"></slot>
        </h1>
        <p class="sliderTitle-desc">
            <slot name="desc"></slot>
        </p>
        <div class="sliderTitle-icon">
            <p>挑戰</p>
            <i>{{id}}</i>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['id']
}
</script>