<template>
    <div class="banner">
        <div class="container">
            <div class="banner-type">{{banner.type}}</div>
            <h1 v-html="banner.title"></h1>
            <p v-html="banner.desc" class="banner-desc"></p>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['banner'],
}
</script>
