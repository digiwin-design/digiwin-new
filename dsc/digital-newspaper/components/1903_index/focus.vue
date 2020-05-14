<template>
    <section class="focus">
        <h1>{{content.title}}</h1>
        <p>{{content.text}}</p>
        <a :href="content.link.url" target="_blank">
            <span v-html="content.link.text"></span>
            <i class="material-icons">keyboard_arrow_right</i>
        </a>
    </section>
</template>

<script>
module.exports = {
    name: 'Focus',
    props: {
        content: {
            type: Object,
            required: true
        }
    }
}
</script>