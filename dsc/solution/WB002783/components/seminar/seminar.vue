<template>
    <div>
        <div class="header">
            <div class="container">
                <div>
                    <h1>{{content.title}}</h1>
                    <h2 v-html="content.subtitle"></h2>
                </div>
            </div>
        </div>

        <article class="section1">
            <accordion :accordion="content.accordion"></accordion>
        </article>
        
        <contact v-bind:multiple="false" source></contact>
    </div>
</template>

<script>
module.exports = {
    props: ['content'],
    components: {
        'accordion': httpVueLoader('components/seminar/accordion.vue'),
        'progress-bar': httpVueLoader('components/seminar/progress-bar.vue'),
    },
};
</script>