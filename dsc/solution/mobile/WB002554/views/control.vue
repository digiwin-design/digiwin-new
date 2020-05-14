<template>
    <div class="control">
        <main-header>
            <template slot="content">
                <h1>因應市場變化之彈性高效率的製造現場</h1>
                <p>製造現場常見機台閒置停工,造成稼動率低、領錯次料比生產出不良產品，生產進度掌控不佳，時間拖長只能用加班或外包來因應，增加生產成本，如能提昇排程能力，強化現場控制能力，並建置異常預警機制，便能以最大的生產製造彈性，獲取更多的訂單</p>
            </template>
        </main-header>

        <collapse-and-tabs :content="control"></collapse-and-tabs>
    </div>
</template>

<script>
module.exports = {
    name: 'Control',
    components: {
        'collapse-and-tabs': httpVueLoader('components/collapse-and-tabs.vue'),
    },
    computed: {
        control() {
            return store.state.result.control;
        }
    },
}
</script>