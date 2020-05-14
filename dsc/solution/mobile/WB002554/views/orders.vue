<template>
    <div class="orders">
        <main-header>
            <template slot="content">
                <h1>打通產銷平台，提升出貨效率與品質</h1>
                <p>缺料的問題真的只能用存貨來解決嗎? 若供需無法及時平衡，將影響訂單出貨，無法及時回覆客戶準確的交期，將會影響客戶滿意度及再次下單的意願，若是不能應用條碼來簡化進出貨及盤點的效率及正確性，可能會影響客戶對出貨品質的滿意度...</p>
            </template>
        </main-header>

        <collapse-and-tabs :content="orders"></collapse-and-tabs>
    </div>
</template>

<script>
module.exports = {
    name: 'Orders',
    components: {
        'collapse-and-tabs': httpVueLoader('components/collapse-and-tabs.vue'),
    },
    computed: {
        orders() {
            return store.state.result.orders;
        }
    },
}
</script>