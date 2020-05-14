<template>
    <el-collapse v-model="activeNames" class="collapse">
        <el-collapse-item :name="idx + 1" v-for="(item, idx) in items" :key="item.title">
            <!-- title -->
            <template slot="title">
                <h2>{{item.title}}</h2>
            </template>

            <!-- content -->
            <div class="container">
                <h2>{{item.title}}</h2>
                <p v-html="item.desc"></p>
                <img :src="'images/manufacture/collapse-illust' + (idx + 1) + '.png'" alt="">
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