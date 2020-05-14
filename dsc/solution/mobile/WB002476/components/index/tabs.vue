<template>
    <div class="tabs" :class="`tab${index + 1}`">
        <ul>
            <li v-for="item in tab" :key="item.content">
                <p>{{item.content}}</p>
                <a :href="item.company.link" target="_blank">─ {{item.company.name}}</a>
            </li>
        </ul>
        <div class="tabs-nav">
            <a href v-for="(n, idx) in tabs.length" :key="idx" :class="{ active: idx === index }" @click.prevent="index = idx">{{n}}</a>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'tabs',
    data() {
        return {
            index: 0,
        }
    },
    computed: {
        tabs() {
            return store.state.result.index.tabs;
        },
        tab() {
            return this.tabs[this.index];
        },
    },
}
</script>