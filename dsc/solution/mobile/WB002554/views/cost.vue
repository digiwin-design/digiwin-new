<template>
    <div class="cost">
        <main-header>
            <template slot="content">
                <h1>從用料、報工明確管好成本</h1>
                <p>次料與生產效率關乎塑膠產業能否降低成本的重要關鍵項目，次料未做好庫存管理，由現場自行目視取用，導致次料用量與原料帳不準，人工排產作業無法滿足多重連批(品號、模具、機台及顏色等)之複雜條件，造成模具切換頻繁，有效稼動率低...產業提升獲利就從細節競爭力開始 !</p>
            </template>
        </main-header>

        <collapse-and-tabs :content="cost"></collapse-and-tabs>
    </div>
</template>

<script>
module.exports = {
    name: 'Cost',
    components: {
        'collapse-and-tabs': httpVueLoader('components/collapse-and-tabs.vue'),
    },
    computed: {
        cost() {
            return store.state.result.cost;
        }
    },
}
</script>