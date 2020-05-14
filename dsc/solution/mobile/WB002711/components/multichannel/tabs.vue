<template>
    <el-tabs v-model="activeName" type="card" class="tabs">
        <el-tab-pane label="常見困擾" name="1">
            <h3>{{tabs.left.subtitle}}</h3>
            <div class="desc">
                <p>{{tabs.left.desc}}</p>
            </div>
            <div class="pains">
                <pain :content="pain" v-for="pain in tabs.left.pains" :key="pain.imgSrc"></pain>
                <hover-box :color="item.color" v-for="item in tabs.left.hoverBox" :key="item.color">
                    <template slot="content">
                        <img :src="item.imgSrc" alt="">
                    </template>
                    <template slot="hover">
                        <img :src="item.hoverImgSrc" alt="">
                    </template>
                </hover-box>
            </div>
        </el-tab-pane>
        <el-tab-pane label="解決方案" name="2">
            <h3>{{tabs.right.subtitle}}</h3>
            <div class="desc">
                <p v-if="tabs.right.listTitle">{{tabs.right.listTitle}}</p>
                <ul>
                    <li v-for="item in tabs.right.list" :key="item">{{item}}</li>
                </ul>
            </div>
            <figure>
                <img :src="tabs.right.imgUrl" alt="">
                <figcaption>▲ {{tabs.right.figcaption}}</figcaption>
            </figure>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
module.exports = {
    name: 'tabs',
    components: {
        'pain': httpVueLoader('../pain.vue'),
        'hover-box': httpVueLoader('../hover-box.vue'),
    },
    props: {
        tabs: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            activeName: '1'
        };
    },
}
</script>