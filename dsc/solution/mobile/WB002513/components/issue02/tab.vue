<template>
    <div class="tab">
        <transition name="fade" mode="out-in">
            <div v-for="(item, idx) in tab" :key="item.title" v-if="active === idx">
                <h2>{{item.title}}</h2>
                <ul>
                    <li v-for="i in item.list" :key="i">{{i}}</li>
                </ul>
                <img :src="item.imgSrc" v-if="item.imgSrc">
            </div>
        </transition>
        <div class="btn">
            <a href :class="{ active: active === 0 }" @click.prevent="active = 0">CQA為企業<br>帶來的效益</a>
            <a href :class="{ active: active === 1 }" @click.prevent="active = 1">解決方案簡介</a>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'tab',
    props: {
        tab: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            active: 0,
        }
    },
    computed: {
        imgSrc() {
            return this.tab.filter(item => item.imgSrc).map(item => item.imgSrc);
        }
    },
    created() {
        preloadImg(this.imgSrc);
    },
}
</script>