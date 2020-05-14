<template>
    <div class="index">
        <header-component :title="header.title" :lists="header.lists"></header-component>
        
        <article class="section1 container">
            <p class="section1-desc">
                財政部宣布即將全面實施電子發票<br>
                繁雜的會計工作之餘要了解法規?  又要導入電子發票?<br>
                在您焦慮的同時，鼎新也接獲許多客戶的來電
            </p>
            <h1>一如既往，鼎新請客戶不用擔心，我們早就備好解決方案了!!</h1>
            <dl>
                <dt>中科王小姐來電問 </dt>
                <dd>我們有考慮導入&lt;鼎新+汎宇&gt;的電子發票方案，但因為有貨交大潤發，大潤發又規定要上汎宇的平台key發票，請問這樣還要上大潤發的汎宇平台再key一次嗎?，還是目前的【鼎新+汎宇】的方案就可以解了?</dd>
                <dt>內湖張小姐來電問：</dt>
                <dd>目前開完發票是隨貨附發票，常常發生對發票內容有很多爭議還要修改內容，那以後開電子發票後，有問題只能作廢重開，那爭議是否會更多更麻煩？</dd>
                <dt>高雄黃小姐來電問：</dt>
                <dd>請問電子發票資料傳送時加密方式及加密長度?如何避免資料在傳送過程被駭造成資料外洩? </dd>
                <dt>桃園李小姐來電問：</dt>
                <dd>我們客戶的統一編號碼同時有零稅(保稅區)和應稅(非保稅區)，請問鼎新的電子發票方案會怎麼處理這一段?</dd>
                <dt>高雄謝小姐來電問：</dt>
                <dd>我們公司在ERP系統裡有4家公司別，熱感紙上要針對不同的公司列印不同的LOGO，這樣是否只要購買一台出據機，就可以針對不同公司別印不同的LOGO，還是需購買4台出據機來分別對應不同公司的LOGO?</dd>
            </dl>
        </article>
        
        <article class="section2 container">
            <h1 class="mainTitle">一張發票的生命週期 (一張發票的奇幻冒險旅程)</h1>
            <p>電子發票絕不僅僅是把發票上傳到財政部電子發票平台如此簡單，當發票開立時，您的有些客戶接受電子發票，有些客戶接受紙本發票，或是有些客戶有指定的第三方加值服務平台，這麼多種的發票平台開立和交付形式，如果開錯、漏開、漏傳將可能面對法規罰則與客戶抱怨。而發票開立後，如何確保所有電子發票正確交付給對方，且皆準時送達財政部電子發票平台?最後來到帳務核對與營業稅申報階段，該怎麼縮短簡化對帳時程?</p>
            <p>鼎新電腦一體化整合方案，協助企業從開立每張電子發票到上傳、請款、對帳所有的困擾，用最短時程、最少人力、最自動化的監控，完美協助您日常的電子發票作業。</p>
            <img src="images/index/section2-illust.jpg" alt="">
        </article>
        
        <article class="section3 container">
            <h1 class="mainTitle">為何電子發票要選鼎新的方案?</h1>
            <div class="section3-table">
                <div class="section3-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>自建Turnkey傳輸</th>
                                <th>其他第三方加值服務中心</th>
                                <th>鼎新電子發票加值服務中心</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>發票上傳機制</td>
                                <td>需手動複製上傳資料至指定路徑，ERP發票狀態皆須手動變更</td>
                                <td>需手動複製上傳資料至指定路徑，ERP發票狀態皆須手動變更</td>
                                <td>使上傳全流程自動化，並可接收上傳結果，自動改變ERP發票狀態，避免錯誤操作發生</td>
                            </tr>
                            <tr>
                                <td>上傳狀態追蹤</td>
                                <td>需自行開啟Turnkey介面做查詢，詳細內容須自行解析XML資料</td>
                                <td>需自行前往第三方平台做查詢，上傳之狀態變化依各個第三方平台提供功能不等</td>
                                <td>上傳全流程狀況追蹤(包含Turnkey，第三方平台，財政部平台檢查)，皆有狀態自動回報並可透過ERP查詢</td>
                            </tr>
                            <tr>
                                <td>Turnkey監控</td>
                                <td>無</td>
                                <td>無</td>
                                <td>自動監控Turnkey，當發生異常時主動通知相關負責人處理，避免超過時限上傳而受罰</td>
                            </tr>
                            <tr>
                                <td>上傳異常通知</td>
                                <td>每天會mail發送前一天上傳的筆數和有問題的發票號碼</td>
                                <td>無</td>
                                <td>當發現異常狀態(包含Turnkey，第三方平台，財政部平台檢查)，均會主動通知相關使用者</td>
                            </tr>
                            <tr>
                                <td>安全管控</td>
                                <td>人員可接觸上傳檔案，無法避免被竄改之風險</td>
                                <td>人員可接觸上傳檔案，無法避免被竄改之風險</td>
                                <td>全部操作皆由系統自動化進行，並避免人為竄改</td>
                            </tr>
                            <tr>
                                <td>操作介面整合</td>
                                <td>需自行啟動Turnkey管理介面，並自行解析XML資料後再比對ERP資料，方可了解問題</td>
                                <td>所有電子發票查詢功能皆須上第三方平台才可操作</td>
                                <td>所有相關功能皆可在ERP操作，不須切換不同廠商系統，並可以在ERP系統直接查詢第三方資料與財政部平台資料</td>
                            </tr>
                            <tr>
                                <td>服務方式</td>
                                <td>無</td>
                                <td>須判斷問題點，分別聯絡負責廠商</td>
                                <td>鼎新客服單一窗口</td>
                            </tr>
                            <tr>
                                <td>進項發票接收</td>
                                <td>僅能接收交換制發票，皆須手動匯入，並自行解析XML資料</td>
                                <td>須上第三方平台下載並自行手動匯入，並解析XML資料</td>
                                <td>除了可以直接接收財政部交換制之進項發票資料，亦可接收同為汎宇作為第三方資料廠商發票，並可自動匯入ERP中以供後續處理</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h2 class="mainTitle">我們提供的服務</h2>
            <ul class="section3-service">
                <li>電子發票自動傳送/B2B的客戶確簽回覆</li>
                <li>電子發票配號檔通知匯入功能</li>
                <li>電子發票空白號碼上傳申報</li>
                <li>會員管理的自動對獎/代印會員中獎發票寄送客戶</li>
                <li>ERP與Turnkey整合的資料收送狀態回報與雙方監控</li>
                <li>針對字軌、重號、漏上傳、發票異常處理反覆檢核</li>
                <li>當日上傳筆數紀錄查詢</li>
            </ul>
        </article>
        
        <article class="section4 container">
            <h1 class="mainTitle">研討會資訊</h1>
            <img src="images/index/section4-illust.jpg" alt="">
            <h2>酷訊搜索成功導入電子發票案例分享</h2>
            <p>財政部積極推動電子發票政策，明定電子計算機統一發票自109年1月1日起停止使用，距離落日僅剩1年多時間。電子發票系統導入除要符合法令規範外，尚需要與ERP等帳務系統銜接、串聯財政部電子發票整合服務平台，若太晚啟動導入電子發票，恐增加轉換時間與成本、影響企業營運與形象！本研討會特別邀請酷訊搜索(股)公司執行長孟逸錤與財務經理洪雪玉，分享導入鼎新電子發票方案後的價值提升與效益，並輔以鼎新電子發票專案團隊專家說明電子發票法規對企業的影響、以及完整因應方案，望能協助企業降低營運成本、快速因應電子發票的轉換！</p>
            <a href="/tw/dsc/activity/WB002873/WB00287302.htm" target="_blank">了解更多課程內容</a>
            <a href="#/seminar/3">看更多研討會資訊</a>
        </article>
        
        <article id="solution" class="solution container">
            <h1 class="mainTitle">各行各業，獨到專精</h1>
            <h2>累積30多年產業輔導經驗，50,000 多家企業成功案例<br>轉化成行業解決方案，提供您專業服務與支援</h2>
            <Industry-list></Industry-list>
        </article>
    </div>
</template>

<script>
module.exports = {
    components: {
        'IndustryList': httpVueLoader('/tw/dsc/assets/industry-list-v2/industry.vue'),
    },
    computed: {
        header() {
            return {
                title: '電子發票即將全面實施',
                lists: [
                    '自106年1月1日起停止核准營業人以電子計算機開立統一發票',
                    '自110年1月1日起全面停止使用電子計算機發票',
                    '政府法規總是來的又急又快，因應的腳步可不能慢'
                ]
            }
        }
    },
}
</script>
