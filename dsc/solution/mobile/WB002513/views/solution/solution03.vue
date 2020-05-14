<template>
    <div class="solution03">
        <div class="section1 container">
            <p>這幾年因輕薄化趨勢，NB連接器用量已遭明顯縮減，且光碟機、記憶卡、硬碟、電話線、甚至網路線的連接裝置，不少都被簡化，內部連接器的MXM、DDR及Socket長期產值也將受阻。NB輕薄化趨勢將使整體連接器用量較目前的常規NB大減四至五成，雲端世代下用戶端簡化的趨勢不變，傳統以Client端為主的連接器廠，勢必得隨之轉型。雖然雲端時代用戶端連接器雖可能隨外接裝置縮減、用量減少，但也開拓遠端設備新的商機，加速產業的世代升級。</p>
            <p class="mt-1">連接器產業鏈包含上游的銅材、塑膠材，中游的線纜，以及下游連接器等相關產品。其關聯圖如下：</p>
            <img src="images/solution/solution03-illust1.jpg" alt="" class="mt-1">
            <p class="mt-1">全球連接器產品應用領域包含汽車、電腦週邊、通訊數據、工業等，其中以汽車及電腦週邊之連接器合計佔市場比重50%，為主要應用市場。以全球前23三大連接器製造商來看(如下圖)，佔全球總市佔率60 %以上，但其中台灣廠商只有不到10%市佔，可見台灣尚有很大的發展空間。</p>
            <img src="images/solution/solution03-illust2.jpg" alt="" class="mt-1">
            <p class="mt-1">展望未來，雲端無疑是今年ICT產業發展最重要的趨勢之一；資策會報告指出，雲端時代的三大發展方向不外乎「Server端集中化」、「Client端精簡化」及「Cloud端行動化」，此預期也將掀起零組件產業的質變、量變，不少連接器廠商藉與大廠結盟提前佈署，廠商預期，「私有雲」將把伺服器產業推向消費市場，但因競爭門檻墊高，可望帶來高階化、集中化的產業轉型。未來雲端世代將引爆高速傳輸、高量儲存的需求，連接器產業也將走向用戶端「簡便化」、企業端「虛擬化」及「高階化」，高速乃至工業等級的連接器將成為台廠加速搶進的領域。</p>
        </div>

        <article class="section2 container">
            <section-title title="管理重點"></section-title>
            <h2 class="subtitle">一、各職能所面臨之管理挑戰</h2>
            <img src="images/solution/solution03-illust3.jpg" alt="">
            <h2 class="subtitle mt-1">二、連接器業SWOT分析</h2>
            <img src="images/solution/solution03-illust4.jpg" alt="">
        </article>

        <article class="section3 container">
            <section-title title="解決方案"></section-title>
            <img src="images/solution/solution03-illust5.jpg" alt="">
            <p class="mt-1">其中又以銅價波動影響產品毛利，以及因產品少量多樣、客製化程度高且接單靈活度高的狀況下，如何快速安排生產排程及因應插單快速反應，更是這個行業現今更需關注的議題。</p>
            <p class="mt-1">連接器產業在銅的採購行為上，區分為兩種，一為年度合約採購，一為依需求批次採購。不管是哪種模式，在採購價格部份均受期貨市場價格影響，雖有與廠商的談判空間，但也有一定的限度，所以如何控管好銷售預測以及加快存貨去化速度，是這個產業很重要的兩項作業指標。隨時掌控銅價趨勢、掌控企業內存貨量、以及存貨預計銷耗量等相關資訊，並加以模擬(下圖)，以找出對企業最有利的營運模式。</p>
            <img src="images/solution/solution03-illust6.jpg" alt="" class="mt-1">
            <p class="mt-1">模擬後的行動相對也非常重要，該如何去化庫存？要找哪些客戶？要主推哪些產品？哪些產品的銷售量是較好的？哪些產品的毛利是比較高的？…這些資訊如何能明確做呈現，讓企業能快速明瞭並做決策，快狠準的去化存貨，不僅對營收或獲利有助益，也可讓銅的影響降到最低。</p>
            <img src="images/solution/solution03-illust7.jpg" alt="" class="mt-1">
            <p class="mt-1">對於如何快速安排生產排程及因應插單快速反應，在企業都是集團化管理之下，已不可能再用人工來處理，需要配合產能、料況、需求等資訊，透過排程模擬工具協助企業進行產銷協調，以快速因應市場變化。</p>
        </article>

        <article class="section4 container">
            <section-title title="成功案例"></section-title>
            <case-list :list="result.caseList"></case-list>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'solution03',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
