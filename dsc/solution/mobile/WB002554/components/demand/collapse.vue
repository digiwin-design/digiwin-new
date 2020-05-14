<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item :name="idx+1" v-for="(item, idx) in items" :key="item.title">
            <!-- title -->
            <template slot="title">
                <div class="icon">
                    <img :src="`images/demand/collapse-icon${idx+1}.png`" alt />
                </div>
                <h2 v-html="item.title"></h2>
            </template>

            <!-- content -->
            <div class="container">
                <h3 v-html="item.title"></h3>
                <p>{{item.content}}</p>
                <figure>
                    <img :src="`images/demand/collapse-illust${idx+1}.jpg`" alt />
                    <figcaption>▲ 解決方案圖</figcaption>
                </figure>
                <router-link :to="{ name: item.linkUrl, params: { tab: item.tab } }">
                    <i class="material-icons">arrow_forward</i>
                    {{item.linkText}}
                </router-link>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
module.exports = {
    name: 'Collapse',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            activeNames: ['1']
        };
    },
}
</script>