<template>
    <a :href="`#anchor${index}`" class="anchor js-nav">
        <section :data-icon="`../images/smartFactory/${content.fileName}`">
            <span :style="{ 'background-image': `url(images/smartFactory/${content.fileName})` }"></span>
            <h1>{{content.title}}</h1>
            <h2>{{content.subtitle}}</h2>
            <p>{{content.desc}}</p>
        </section>
    </a>
</template>

<script>
module.exports = {
    props: {
        content: {
            type: Object
        },
        index: {
            type: Number
        }
    }
}
</script>