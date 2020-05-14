<template>
    <div class="solution01">
        <article class="section1 container">
            <section-title title="產業特性"></section-title>
            <p>電子零組件產業主要有機殼、印刷電路版、連接器、主動元件、被動元件、電池、PCB原材料、石英元件等，其製造工序包含金屬加工、塑膠加工、表面加工、化學製程等，主要製程通常是由自動化機械量產，屬於資本密集產業。在PC市場衰退的後PC時代，電子零組件產業紛紛轉行切入車用、醫療、雲端、工業用、消費電子等市場，少量多樣與高品質成為電子零組件產業在管理上必須因應的衝擊。</p>
        </article>

        <article class="section2 container">
            <section-title title="解決方案"></section-title>
            <table class="table">
                <thead>
                    <tr>
                        <th>行業需求</th>
                        <th>解決方案</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in result.section2" :key="item.name">
                        <td>{{item.name}}</td>
                        <td v-html="item.desc"></td>
                    </tr>
                </tbody>
            </table>
        </article>

        <article class="section3 container">
            <section-title title="成功案例"></section-title>
            <case-list :list="result.caseList"></case-list>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'solution01',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
