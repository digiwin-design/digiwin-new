<template>
    <div class="law">
        <header-component :title="header.title" :lists="header.lists"></header-component>
        
        <article class="section1 container">
            <h1 class="mainTitle">強制使用電子發票相關規定</h1>
            <dl>
                <dt>財政部:105/07/15統一發票使用辦法第25條</dt>
                <dd>
                    <ul>
                        <li>自106年1月1日起停止核准營業人以電子計算機開立統一發票</li>
                    </ul>
                </dd>
                <dt>財政部:108/05/24統一發票使用辦法</dt>
                <dd>
                    <ul>
                        <li>電子計算機統一發票自110年1月1日停止使用</li>
                    </ul>
                </dd>
                <dt>配合下游廠商(買方)主動要求</dt>
                <dd>
                    <ul>
                        <li>原採用人工開立發票或使用電子計算機發票之營業人,將配合下游大廠使用電子發票</li>
                        <li>自104年度起22類食品業者應使用電子發票，分年分階段陸續導入</li>
                    </ul>
                </dd>
                <dt>因應食品業衛福部要求強制使用電子發票</dt>
                <dd>
                    <ul>
                        <li>自104年度起22類食品業者應使用電子發票，分年分階段陸續導入</li>
                    </ul>
                </dd>
            </dl>
        </article>

        <article class="section2 container">
            <h1 class="mainTitle">何謂電子發票</h1>
            <section>
                <h1 class="section2-sectionTitle">電子發票實施作業要點</h1>
                <p>指以網際網路或其他電子方式開立、傳輸或接收之統一發票，分為存根檔、收執檔及存證檔</p>
                <ul>
                    <li>
                        <i class="section2-listTitle">存根檔：</i>
                        由賣方營業人自行保存
                    </li>
                    <li>
                        <i class="section2-listTitle">收執檔：</i>
                        交付買受人收執，買受人為營業人者，作為記帳憑證及依加值型及非加值型營業稅法規定申報扣抵或扣減稅額之用
                    </li>
                    <li>
                        <i class="section2-listTitle">存證檔：</i>
                        由賣方營業人傳輸至整合服務平台存證
                    </li>
                </ul>
            </section>
            <section>
                <h1 class="section2-sectionTitle">名詞解釋</h1>
                <ul>
                    <li><i class="section2-listTitle">加值服務中心：</i>指向主管稽徵機關申請核准提供電子發票系統及相關加值服務之營業人。</li>
                    <li><i class="section2-listTitle">整合服務平台：</i>指由財政部提供電子發票相關整合性服務之平台。</li>
                    <li><i class="section2-listTitle">電子發票證明聯：</i>指賣方營業人自存根檔或買受人自整合服務平台存證檔依規定格式與紙質下載列印（如附件一，其中二維條碼應記載內容由財政部財政資訊中心公告）， 供有紙本作業需求之買受人作為對外營業事項發生之原 始憑證或供買受人兌領獎之憑證。</li>
                    <li><i class="section2-listTitle">載具：</i>指經財政部核准，得以電磁紀錄記載或連結電子發票資訊之工具。</li>
                    <li><i class="section2-listTitle">共通性載具：</i>指經財政部核准，供買受人使用於所有開立電子發票營業人之載具。</li>
                    <li><i class="section2-listTitle">歸戶：</i>買受人將已連結於載具下之電子發票資訊，再連結至身分識別資訊或共通性載具之方式。</li>
                    <li><i class="section2-listTitle">受捐贈機構：</i>指以組織及團體憑證登入整合服務平台註冊之受捐贈對象。</li>
                    <li><i class="section2-listTitle">載具發行機構：</i>發行載具供買受人記載或連結電子發票資訊之機構或營業人。</li>
                </ul>
            </section>
        </article>

        <article class="section3 container">
            <h1 class="mainTitle">導入電子發票導入效益分析</h1>
            <div class="reference">
                <img src="images/law/section3-illust.jpg" alt="">
                <p class="source">資料來源：財政部北區國局</p>
            </div>
        </article>
        
        <article class="section4 container">
            <h1 class="mainTitle">導入電子發票獎勵措施</h1>
            <div class="reference">
                <img src="images/law/section4-illust.jpg" alt="">
                <p class="source">資料來源：財政部北區國局</p>
            </div>
        </article>
        
        <article class="section5 container">
            <h1 class="mainTitle">電子發票相關法規</h1>
            <div class="reference">
                <a href="https://www.einvoice.nat.gov.tw/home/Article!getArticleListByCId?articleType=1&cId=AC10000006&CSRT=17130576495107954254" target="_blank">
                    <img src="images/law/section5-illust.jpg" alt="">
                </a>
                <p class="source">資料來源：財政部北區國局</p>
            </div>
        </article>

        <article class="section6 container">
            <h1 class="mainTitle">資料上傳到整合服務平台的3種方式</h1>
            <h2>台灣地區因應電子發票模式</h2>
            <img src="images/law/section6-illust.png" alt="">
            <p class="source">註：方式一、自行上大平台開立發票</p>
        </article>
    </div>
</template>

<script>
module.exports = {
    computed: {
        header() {
            return {
                title: `
                    在政府積極推動與降低企業成本的誘因之下<br>
                    電子發票實施勢在必行<br>
                    為免造成企業營運成本增加與罰鍰問題！<br>
                    相關法規不可不知！
                `,
                lists: [
                    '強制使用電子發票相關規定',
                    '何謂電子發票與名詞解釋',
                    '導入電子發票導入效益分析',
                    '導入電子發票獎勵措施',
                    '最新電子發票相關法規'
                ]
            }
        }
    },
}
</script>
