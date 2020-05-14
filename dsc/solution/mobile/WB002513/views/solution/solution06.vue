<template>
    <div class="solution06">
        <div class="section1 container">
            <p>LED業可以分為LED製造、LED應用兩大類型。LED製造包含磊晶、封裝、LED模組等；LED應用主要分為資訊顯示、 交通信號燈 、汽車用燈、 LED背光源、  照明等類型。LED業關聯圖如下：</p>
            <img src="images/solution/solution06-illust1.jpg" alt="" class="mt-1">
            <p class="mt-1">LED製造在製造的特性上與IC製造相近，然而，分Bin是以光電特性為基礎，不同光電特性的LED適用於不同的應用領域。</p>
            <p class="mt-1">LED應用的製造特性偏向電子組裝，由於LED應用非常廣泛，所以在商業模式上除了電子業常見的OEM、ODM之外，OBM(品牌)、專案的類型也很普遍，尤其LED照明是電子業中少數品牌跨入門檻較低的產業。</p>
        </div>

        <article class="section2 container">
            <section-title title="管理重點"></section-title>
            <h2 class="subtitle">一、LED製造各職能所面臨之管理挑戰</h2>
            <img src="images/solution/solution06-illust2.jpg" alt="">
            <h2 class="subtitle mt-1">二、LED應用各職能所面臨之管理挑戰</h2>
            <img src="images/solution/solution06-illust3.jpg" alt="">
        </article>

        <article class="section3 container">
            <section-title title="解決方案"></section-title>
            <h2 class="subtitle">(1)LED製造解決方案</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>行業需求</th>
                        <th>解決方案</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in result['section3-1']" :key="item.name">
                        <td>{{item.name}}</td>
                        <td>{{item.desc}}</td>
                    </tr>
                </tbody>
            </table>
            <h2 class="subtitle mt-1">(2)LED應用解決方案</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>行業需求</th>
                        <th>解決方案</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in result['section3-2']" :key="item.name">
                        <td>{{item.name}}</td>
                        <td>{{item.desc}}</td>
                    </tr>
                </tbody>
            </table>
        </article>

        <article class="section4 container">
            <section-title title="成功案例"></section-title>
            <case-list :list="result.caseList"></case-list>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'solution06',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
