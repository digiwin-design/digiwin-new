<template>
    <div class="smartFactory">
        <main-header>
            <template slot="content">
                <h1>高效高品質的智慧化現場</h1>
                <p>
                    塑膠行業因高度消費者導向需求，產業競爭激烈且市場變化大，如不跟著市場改變，或改變的速度比市場或競爭者慢，都面臨被淘汰的危機。
                    <br />而速度將會是決定接單勝負的關鍵之一，如何將危機化為轉機，彈性有效的善用資源，使工廠高效率及高品質連續產出，有效縮短生產週期程時間及控制生產成本，將決定您是否具備產業競爭力。
                </p>
            </template>
        </main-header>

        <div class="section1">
            <div class="container">
                <anchor
                    v-for="(anchor, idx) in smartFactory.anchors"
                    :key="anchor.fileName"
                    :content="anchor"
                    :index="idx"
                    @click.native="scrollHandler(idx)"
                ></anchor>
                <light-box></light-box>
            </div>
        </div>

        <collapse-and-tabs :content="smartFactory.content" :anchor-idx="anchorIdx"></collapse-and-tabs>

        <div class="smartFactory-link container">
            <router-link :to="{ name: 'control', params: { tab: 5 } }">
                <span>
                    除了智慧現場管理
                    <br />還可以
                    <strong>了解更多生產現場管理</strong>
                </span>
            </router-link>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'SmartFactory',
    data() {
        return {
            anchorIdx: 0,
        }
    },
    components: {
        'collapse-and-tabs': httpVueLoader('components/smartFactory/collapse-and-tabs.vue'),
        'anchor': httpVueLoader('components/smartFactory/anchor.vue'),
        'light-box': httpVueLoader('components/smartFactory/light-box.vue'),
    },
    computed: {
        smartFactory() {
            return store.state.result.smartFactory;
        }
    },
    methods: {
        scrollHandler(index) {
            $(`#anchor${index}`).addClass('active').next().slideDown();
        },
    }
}
</script>