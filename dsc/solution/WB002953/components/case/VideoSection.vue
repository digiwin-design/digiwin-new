<template>
    <div class="videoSection" :class="type">
        <div class="container">
            <div class="videoSection-text" v-html="title"></div>
            <div class="videoSection-video">
                <div class="video-container">
                    <iframe :src="videoSrc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['type', 'title', 'videoSrc'],
}
</script>