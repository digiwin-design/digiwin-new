<template>
    <div class="chart-list">
        <transition name="fade" mode="out-in">
            <div
                class="chart"
                v-for="(item, idx) in items"
                v-if="currentItem === idx"
                :key="item.title"
            >
                <hgroup>
                    <h2>{{item.title}}</h2>
                    <h3>{{item.desc}}</h3>
                </hgroup>
                <img :src="'images/WB00251301_Manufacture/collapse-illust' + (idx + 1) + '.png'" />
            </div>
        </transition>
        <ul class="list">
            <li
                v-for="(item, idx) in items"
                :key="item.title"
                :class="{ active: currentItem === idx }"
                @mouseenter="currentItem = idx"
            >{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    name: 'chart-list',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            currentItem: 0,
        }
    },
    methods: {
        setHeight: _.throttle(function () {
            this.$el.style.height = '';
            let height = this.$el.offsetHeight;
            this.$el.style.height = height + 'px';
        }, 100),
        preload: function () {
            let imgs = [];
            for (let i = 1; i <= 7; i++) {
                imgs.push('images/WB00251301_Manufacture/collapse-illust' + i + '.png');
            }
            preloadImg(imgs);
        },
    },
    mounted: function () {
        window.addEventListener('load', this.setHeight);
        window.addEventListener('resize', this.setHeight);
        this.preload();
    },
}
</script>