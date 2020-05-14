<template>
    <article class="case">
        <div class="case-header" :style="{backgroundImage:'url('+content.bgUrl+')'}">
            <h1>{{content.title}}</h1>
            <h2>{{content.subtitle}}</h2>
            <a :href="content.url" target="_blank">完整案例</a>
        </div>
        <div class="case-detail" :class="status">
            <p>{{detail}}</p>
        </div>
        <ul class="case-nav">
            <li :class="{active:status==='before'}">
                <a href v-on:click.prevent="status='before'">Before</a>
            </li>
            <li :class="{active:status==='after'}">
                <a href v-on:click.prevent="status='after'">After</a>
            </li>
        </ul>
    </article>
</template>

<script>
module.exports = {
    props: ['content'],
    data: function () {
        return {
            status: 'before'
        }
    },
    computed: {
        detail: function () {
            return this.content.detail[this.status];
        }
    },
}
</script>