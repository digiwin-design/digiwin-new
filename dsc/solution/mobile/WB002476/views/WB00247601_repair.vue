<template>
    <div class="WB00247601_repair">
        <main-header>
            <template slot="content">
                <h1>工業4.0市場環境下<br>機台維修需思考的<strong>5</strong>難<strong>3</strong>關鍵</h1>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <section-title
                    title="機台維修需思考的5難3關鍵"
                    padding-bottom="1em"
                ></section-title>
                <p class="section1-content">工業4.0成就了智慧機械，也為機械業翻開另一個歷史新頁。但這也使得硬體與軟體的功能急速擴張，從原來的單機功能優化創新到整線，到整廠。機台的結構，除了原來的機械結構、機電結構外，更有因應智慧機械所增加的傳感應器、視覺辨識、機械手臂、………，等裝置。機台的控制也從單機作動到多機協作、多設備協作(機械手臂、無人搬運)。不論智慧機械可以做的多偉大，維修體系與能力沒跟上那將會是一場災難。審視智慧機械的發展趨勢，將伴隨而來的是極具挑戰的智慧機械時代售後服務。在面對從現在開始的新世代服務，機械製造廠不得不思考「人員培育」、「經驗傳承」、「跨域技術」、「非標維修」、「遠端服務」等五項難題，以及維修管理落實上的三大關鍵程序。</p>
            </div>
        </article>

        <article class="section2">
            <div class="container">
                <section-title title="維修作業困擾之面面觀"></section-title>
                <img src="images/WB00247601_repair/section2-illust.jpg" alt="">
            </div>
        </article>

        <article class="section3">
            <div class="container">
                <section-title
                    title="維修管理3大關鍵、6大議題"
                    padding-bottom="1em"
                ></section-title>
                
                <h2>維修管理<br><strong>3</strong>大關鍵程序</h2>
                <video-switch></video-switch>
                
                <h2><strong>6</strong>大議題</h2>
                <collapse :collapse="result.collapse1"></collapse>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'WB00247601_repair',
    components: {
        'video-switch': httpVueLoader('../components/WB00247601_repair/video-switch.vue'),
    },
    computed: {
        result() {
            return store.state.result.WB00247601_repair;
        }
    },
}
</script>
