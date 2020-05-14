<template>
    <div ref="progressBars" class="progressBars">
        <template v-for="(bar, barIdx) in progressBars">
            <h2 :key="bar.subtitle">{{barIdx+1}}.{{bar.subtitle}}</h2>
            <ul class="js-barGroup" :key="bar.items[0].text"></ul>
        </template>
    </div>
</template>

<script src="components/seminar/progressBars/progressBars.min.js"></script>
