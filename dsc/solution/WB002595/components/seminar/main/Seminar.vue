<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="header-text">
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
                <progress-bars :progress-bars="progressBars"></progress-bars>
            </div>
        </article>
    </div>
</template>

<script src="components/seminar/main/seminar.min.js"></script>