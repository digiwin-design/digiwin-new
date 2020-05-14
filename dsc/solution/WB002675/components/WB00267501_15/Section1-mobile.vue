<template>
    <div class="section1-mobile">
        <div class="nav">
            <a href="" :class="{active:status==='before'}" @click.prevent="status='before'">Before</a>
            <a href="" :class="{active:status==='after'}" @click.prevent="status='after'">After</a>
        </div>
        <div class="container">
            <dl class="list before" v-if="status==='before'">
                <dt>下單</dt>
                <dd></dd>
                <dt>收取訂單</dt>
                <dd>業務與經銷商/加盟主接洽後整理訂單回傳，或由經銷商/加盟主直接透過mail、電話方式向總部下訂單。</dd>
                <dt>整理訂單</dt>
                <dd>助理收到經銷商/加盟主訂單後，進ERP登打訂單資料，印出紙本訂單或整理為Excel給採購。</dd>
                <dt>彙整訂單</dt>
                <dd>採購確認訂單內容並彙整訂單品項跟供應商下單。</dd>
                <dt>回覆出貨</dt>
                <dd>回覆業務出貨資訊，並請業務通知經銷商/加盟主。</dd>
                <dt>回覆交期</dt>
                <dd>業務聯絡經銷商/加盟主回覆預計出貨日。</dd>
                <dt>收到貨物</dt>
                <dd></dd>
            </dl>
            <dl class="list after" v-if="status==='after'">
                <dt>下單</dt>
                <dd>透過手機直接下購，相關商品資訊完整呈現，並提供新產品、熱銷商品推薦。</dd>
                <dt>確認訂單</dt>
                <dd>確認訂單與出貨。</dd>
                <dt>追蹤訂單</dt>
                <dd>可隨時透過手機追蹤訂單進度。</dd>
                <dt></dt>
                <dd><img src="images/WB00267501_15/section1-illust-s.png" alt=""></dd>
            </dl>
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            status: 'before'
        };
    }
}
</script>