<template>
    <div class="eform">
        <div class="header">
            <div class="container">
                <h1 class="mainTitle">電子表單、行動簽核<br>系統提升便利性 為企業有效節省人力</h1>
                <h2>
                    主管在外地出差，就不能簽核文件？<br>
                    請假、加班單據還在紙本作業？<br>
                    文件紙本傳簽傳到不見了？
                </h2>
            </div>
        </div>

        <article class="section1">
            <div class="container">
                <h1 class="sectionTitle">成功案例小檔案</h1>
                <img src="images/eform/section1-illust.png" alt="">
                <section v-for="(item, idx) in section1" :key="item.subtitle">
                    <h2 class="subtitle" :class="{line:idx!==0}"><span>{{item.subtitle}}</span></h2>
                    <p v-html="item.content"></p>
                </section>
            </div>
        </article>

        <article class="section2">
            <div class="container">
                <h1 class="sectionTitle">也看看他們使用電子簽核的理由？</h1>
                <section v-for="(item, idx) in section2" :key="item.subtitle">
                    <img :src="`images/eform/section2-illust${idx+1}.png`" alt="">
                    <h2><a :href="item.url" class="subtitle" target="_blank">{{item.subtitle}}</a></h2>
                    <p>{{item.content}}</p>
                    <a :href="item.url" class="more" target="_blank">了解更多</a>
                </section>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    computed: {
        section1() {
            return [
                {
                    subtitle: '財榮實業',
                    content: '資本額：1000萬。2016年6月啟動EasyFlow.net<br>公司簡介：財榮實業成立於1990年，致力於自行車周邊配件。除了自創品牌之外，還包含了OEM代工服務，生產自行車停車架、水壺架和自行車貨架…等配件並出口至世界各地，其中主要客戶還包含了自行車領導品牌：捷安特、美利達…等大廠。',
                },
                {
                    subtitle: '使用前',
                    content: '過去財榮實業內部訊息以紙本型式傳遞，但是，在傳遞表單、簽核的過程中總是遇到：<strong>找不到窗口、不知道責任單位是誰、工作進度</strong>...等狀況，導致工作效率低弱、企業流程無法落實、事件責任追朔不易。而這些日積月累的資訊也成為了企業負擔，除了使用者難以查詢、追蹤，管理人員為了統計、繪製報表也花費了不少心力與時間在資料整理上，無形之間，<strong>增加了龐大的企業成本</strong>。',
                },
                {
                    subtitle: '使用後',
                    content: '第一階段上線的表單除了人事考勤類別的單據外，還額外製作：品質異常處理單/新產品專利申請單/用品申請單/客戶提案單/新進人員考核表…共5張表單。再加上電子簽核表單的流程設計，<strong>讓使用者只要上網填寫內容並發單，表單就會自動依照管理者制定的規則來解析流程，並且傳簽到指定的主管手上</strong>；不必擔心找不到簽核人員或是落入表單無從追蹤的窘境。另外，財榮實業張小姐也很聰明地運用表單欄位顯示功能，<strong>確實追蹤每一個關卡人員回覆的訊息與意見，落實企業工作與流程</strong>。',
                },
            ];
        },
        section2() {
            return [
                {
                    subtitle: '亞生特電業',
                    content: '紙本憑證全部單據都簽核到總經理，若遇到總經理外出或出差國外，又有請採購作業急待簽核，採購人員都會很緊張，不知道到底可不可以發單，必須先打電話詢問總經理可否先下單。',
                    url: 'https://www.digiwin.com/tw/case/567.html'
                },
                {
                    subtitle: '汎宇空間設計',
                    content: '以前口頭報告一下，行政單位紀錄一下就好了，現在則要求員工要填表單，所以很多東西可以直接透過系統就查到，而且有憑據避免資訊傳達錯誤。像請假單、加班單這些人事表單也可以連接ERP的薪資控管去自動計算很方便。',
                    url: 'https://www.digiwin.com/tw/case/1114.html'
                },
            ];
        }
    }
}
</script>
