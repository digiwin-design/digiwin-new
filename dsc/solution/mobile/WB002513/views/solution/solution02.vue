<template>
    <div class="solution02">
        <article class="section1 container">
            <section-title title="產業特性"></section-title>
            <p>電子組裝業範圍涵蓋電子業廠商所提供生產和電腦相關的各種產品與技術，包含電腦系統、零組件、輸入週邊設備、輸出週邊設備、儲存週邊設備、半導體、光電元件、軟體、網路、通訊。電子組裝業台灣產業與全球跨國合作模式，由早期的委託代工、委託設計與製造調整到委託運籌、全球運籌。從訂單、製造及運送採用電子化的技術，整合成一個從資訊流、物流及金流同步運作供應鏈，以降低成本、提升品質、縮短交期，提高企業的營運績效，快速且正確的反應市場需求，以提升企業整體的競爭力。</p>
            <p class="mt-1">近年來資訊電子組裝業產品變動快速、新技術也不斷地開發，上下游的聯繫關係也非常密切；在產品價格激烈競爭下，隨著利潤日薄的趨勢下，該產業的廠商勢必以自動化生產或將低階的產品外移已降低成本，共同朝向高附加價值產品發展。電子組裝業向兩端發展—產品研發與關鍵零組件的生產、產品品牌/通路的經營是兩大發展方向，或是投入新興產業提高營收，如資訊家電、光電與通訊等。</p>
        </article>

        <article class="section2 container">
            <section-title title="管理重點"></section-title>
            <table class="table">
                <thead>
                    <tr>
                        <th>行業重點</th>
                        <th>管理挑戰</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in result.section2" :key="item.name">
                        <td>{{item.name}}</td>
                        <td>
                            <ul>
                                <li v-for="i in item.desc" :key="i">{{i}}</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </article>
        
        <article class="section3 container">
            <section-title title="解決方案"></section-title>
            <table class="table">
                <thead>
                    <tr>
                        <th>行業需求</th>
                        <th>解決方案</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in result.section3" :key="item.name">
                        <td>{{item.name}}</td>
                        <td v-html="item.desc"></td>
                    </tr>
                </tbody>
            </table>
        </article>

        <article class="section4 container">
            <section-title title="加值服務"></section-title>
            <a href="https://www.digiwin.com/softwareDetail_P201211123618.html" target="_blank" class="subtitle"><h2>CRM客戶關係管理</h2></a>
            <p>從機台進入試車階段開始，即進入到客戶服務的循環，由教育訓練、參數調整，到上線後的檢測，保固維護，客戶的叫修，維修到Key Parts 返回原廠及耗材的提供等管理都必須是以客戶、以機台為核心的流程管理模式。而在這一階段也考驗大多數企業的資訊統整的能力及資訊傳遞的效率！售後服務能量及速度力的提升更是企業的競爭力及創造企業客戶再續力的重要關鍵。</p>
            <a href="https://www.digiwin.com/softwareDetail_P201402132317.html" target="_blank" class="subtitle mt-1"><h2>同步整合PDM</h2></a>
            <p>縮短新產品研發時間，運用協同設計與客戶共同研發產品，減少修正率，快速反應市場需求，研發設計到生產出貨一條鞭，減少管理成本及損失，奪得市場先機。</p>
        </article>

        <article class="section5 container">
            <section-title title="成功案例"></section-title>
            <case-list :list="result.caseList"></case-list>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'solution02',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
