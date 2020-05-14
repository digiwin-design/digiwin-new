<template>
    <div class="tabs">
        <div class="tabs-content" :class="'content' + (idx + 1)" v-for="(item, idx) in content" :key="item.title" v-show="idx === id">
            <h3>{{item.title}}</h3>
            <p v-html="item.desc"></p>
            <div class="img"><img :src="'images/index/collapse-illust' + (idx + 1) + '.png'" alt=""></div>
        </div>
        <ul class="tabs-nav">
            <li v-for="(item, idx) in content" :key="item.title" :class="{ active: idx === id }" @click="id = idx">
                <h2>{{item.title}}</h2>
                <p>{{item.desc}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    name: 'tabs',
    props: {
        content: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            id: 0,
        }
    },
}
</script>