<template>
    <div>
        <div class="header">
            <div class="container">
                <div>
                    <h1>{{content.title}}</h1>
                </div>
            </div>
        </div>

        <article class="section1">
            <h1>{{content.section1Title}}</h1>
            <accordion :accordion="content.accordion"></accordion>
        </article>

        <article class="section2">
            <div class="container">
                <h1>{{content.section2Title}}</h1>
                <p v-html="content.section2Desc" class="section2-desc"></p>
                <progress-bar :progress-bar="content.progressBar"></progress-bar>
            </div>
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