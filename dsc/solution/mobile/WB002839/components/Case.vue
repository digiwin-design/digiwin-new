<template>
    <div class="case">
        <div class="header">
            <div class="container">
                <h1 class="mainTitle">各行各業客戶證言</h1>
                <h2>中小企業創業維艱，任何的成本支出總是經過多方考量才出手，然而成功經驗是可被複製的，不仿看看同樣身為中小企業老闆的他們怎麼說！</h2>
            </div>
        </div>
        <ul class="nav">
            <li>
                <input type="radio" name="case" id="case1" checked>
                <label for="case1" @click="context=caseManufacture">製造業案例</label>
            </li>
            <li>
                <input type="radio" name="case" id="case2">
                <label for="case2" @click="context=caseMerchandise">買賣業案例</label>
            </li>
        </ul>
        <article class="lists">
            <Case-list :context="context"></Case-list>
        </article>
    </div>
</template>

<script>
let caseManufacture = {
    title: '製造業輔導案例',
    items: [
        {
            imgSrc: 'list-manufacture1.jpg',
            link: '/tw/case/634.html',
            title: '豐達複合材料',
            type: '橡膠原料買賣、加工、製造',
            desc: '蕭經理提到：「就財務角度。如果成本估算不準確對於公司的影響層面非常大，產品成本高估，對於影響訂價，則於市場上的競爭力會降低；如果低估成本，錯誤訂價，對於公司發展更不利。」'
        },
        {
            imgSrc: 'list-manufacture2.jpg',
            link: '/tw/case/649.html',
            title: '應用奈米科技',
            type: '射頻電漿設備設計、製造輸出',
            desc: '林副總經理：「想要透過電子流程，將公司主流程(從業務接單到銷貨)的每個環節透過系統來自動通知給下個流程，也透過電子表單可以跨地點的簽核，加速簽核效率，另外，將資料累積到系統中，透過工具將資料轉變為資訊，進而轉換成知識。」'
        },
        {
            imgSrc: 'list-manufacture3.jpg',
            link: '/tw/case/725.html',
            title: '昱承機械',
            type: '機械設計製造',
            desc: '老闆現在可透過系統產出損益表，得到當月經營績效，也可分析當月花費的占比。'
        },
        {
            imgSrc: 'list-manufacture4.jpg',
            link: '/tw/case/1499.html',
            title: '旭晟精密',
            type: '齒輪加工業',
            desc: '齒輪箱製程眾多，以往由管理同仁手工紙本逐項針對每個製程紀錄成本並加總。'
        },
        {
            imgSrc: 'list-manufacture5.jpg',
            link: '/tw/case/1501.html',
            title: '傑揚工具',
            type: '套筒手工具製造',
            desc: '以往生管人員將所有委外生產之料件依據廠商給予之單據進行維護至Excel中，但往往只有生管人員才看得懂相關製程資料。'
        },
        {
            imgSrc: 'list-manufacture6.jpg',
            link: '/tw/case/1523.html',
            title: '漢育工業',
            type: '汽車零件電動窗',
            desc: '廖總經理：「只要有系統能協助人員管理，就要適時的導入，傻瓜的事交給電腦，人員才有時間精進及管理改善。」'
        },
        {
            imgSrc: 'list-manufacture7.jpg',
            link: '/tw/case/651.html',
            title: '德騰企業',
            type: '農藥與肥料',
            desc: '德騰在舊有系統中，對於庫存的控管非常鬆散，且經常後補單據，無法即時回饋存貨進出的資料。'
        },
        {
            imgSrc: 'list-manufacture8.jpg',
            link: '/tw/case/711.html',
            title: '新繹企業',
            type: '光學器材製造',
            desc: '過去都由各單位人員採用excel方式維護，不僅效率低落，資料正確性也容易發生問題。'
        },
        {
            imgSrc: 'list-manufacture9.jpg',
            link: '/tw/case/1504.html',
            title: '大勝纖維',
            type: '人造纖維',
            desc: '以前生產製造部門實際生產時並無系統管理生產進度及相關庫存數量，生產單位生產完畢僅透過舊有磅秤系統...'
        },
        {
            imgSrc: 'list-manufacture10.jpg',
            link: '/tw/case/1508.html',
            title: '鵬震實業',
            type: '螺絲',
            desc: '鵬震廠內初期表單皆以品名規格手寫方式法呈現，遭遇問題不外乎：表達方式不統一導致溝通往返耗時；品名或是規格集中呈現或缺一表達等導致判斷與管理不易。'
        },
        {
            imgSrc: 'list-manufacture11.jpg',
            link: '/tw/case/976.html',
            title: '達鴻精工',
            type: '模具與塑膠射出成型',
            desc: '以前業務、生管與現場人員常常在產銷會議上，爭得臉紅脖子粗，業務不了解為何交期要超過60天，生管不了解目前現場進度與困難，只知道將單子盡可能排上去。'
        },
        {
            imgSrc: 'list-manufacture12.jpg',
            link: '/tw/case/808.html',
            title: '鈺興豐企業',
            type: '沖壓五金',
            desc: '過去無法得知生產與訂單的連結，透過製令管理系統產出生產進度表，管理人員能隨時了解訂單在現場的製造狀況。'
        },
        {
            imgSrc: 'list-manufacture13.jpg',
            link: '/tw/case/631.html',
            title: '龍口食品',
            type: '食品業',
            desc: '由於龍口企業總公司與工廠使用的進銷存與會計系統為獨立體系，故資料無法整合串聯。'
        },
        {
            imgSrc: 'list-manufacture14.jpg',
            link: '/tw/case/1512.html',
            title: '久勝旗幟',
            type: '旗幟生產及輸出',
            desc: '許董事長：「當公司規模小時，其實不需要這麼多系統輔助，隨著組織成長，企業必需快速反應高度競爭化的商業環境。」'
        },
    ]
};
let caseMerchandise = {
    title: '買賣業輔導案例',
    items: [
        {
            imgSrc: 'list-merchandise1.jpg',
            link: '/tw/case/564.html',
            title: '德瑪凱',
            type: '醫美、醫療儀器',
            desc: '採購人員Selina：「目前差別較大的地方在於付款段，以前完全沒有在系統中輸入請款的單據，現在會由請款單位輸入應付憑單再交由財會單位審核，大大降低人工填單或口頭對帳的狀況，也有許多報表可以產生。」'
        },
        {
            imgSrc: 'list-merchandise2.jpg',
            link: '/tw/case/687.html',
            title: '艾肯娛樂',
            type: '手機與網頁遊戲',
            desc: '過去艾肯娛樂在傳遞表單簽核時候，總是遇到：找不到主管、不知道專案經費申請是否核准，導致...'
        },
        {
            imgSrc: 'list-merchandise3.jpg',
            link: '/tw/case/749.html',
            title: '香港商振光玩具',
            type: '貿易代理商',
            desc: '業務人員在客戶端確認客戶的商品需求後，可立即在客戶端遠端遠線至公司資料庫，並能迅速維護客戶訂單的內容，減少需要重複確認客戶需求的時間，且能透過遠端方式查詢到商品庫存數量。'
        },
        {
            imgSrc: 'list-merchandise4.jpg',
            link: '/tw/case/817.html',
            title: '黃德倫建築',
            type: '建築設計',
            desc: '黃德倫始終相信"持續的改善"帶來"持續的價值提升"。目前已強化財務管理能力，能藉由有價資訊分析市場交易行為，掌握開支'
        },
        {
            imgSrc: 'list-merchandise5.jpg',
            link: '/tw/case/681.html',
            title: '台灣租車',
            type: '運輸旅遊業',
            desc: '財務長 徐婉榕：「資訊化時代的進步，已經不再透過人來管流程，而是資訊系統必須將可進行的流程規劃完善。」'
        },
        {
            imgSrc: 'list-merchandise6.jpg',
            link: '/tw/case/821.html',
            title: '亞果元素',
            type: '穿戴式及智慧手機周邊商品',
            desc: '內部作業方式皆為excel及紙本控管，並無統一的資料庫及庫存監控機制，造成作業及人力上的重複與資源浪費。'
        },
        {
            imgSrc: 'list-merchandise7.jpg',
            link: '/tw/case/1515.html',
            title: '創興實業',
            type: '家電代理經銷',
            desc: '創興實業所經銷的產品訂購流程更是與其企業伙伴的庫存與配銷系統達到幾近無縫接軌的密切合作關係'
        },
        {
            imgSrc: 'list-merchandise8.jpg',
            link: '/tw/case/980.html',
            title: '明裕起重',
            type: '交通運輸',
            desc: '過去明裕起重舊有的系統沒有完整的系統可以結合運輸資料及財務系統，貨櫃運送服務、貨櫃買賣及裝箱等資料只能人工記錄。'
        },
        {
            imgSrc: 'list-merchandise9.jpg',
            link: '/tw/case/1168.html',
            title: '振勝水電',
            type: '衛浴設備、電工材料',
            desc: '振勝販售的產品小至螺絲大至吊扇、燈具、馬桶及浴缸，約有三分之一的品號不會隨年度更換...'
        },
        {
            imgSrc: 'list-merchandise10.jpg',
            link: '/tw/case/803.html',
            title: '訢寶企業',
            type: '電子零件買賣業',
            desc: '電子流通買賣業，商品種類繁多且不斷推陳出新，為求公司資訊一致性，讓業務人員能於第一時間了解公司所販售電子零件產品...'
        },
        {
            imgSrc: 'list-merchandise11.jpg',
            link: '/tw/case/807.html',
            title: '滿弓企業',
            type: '十字弓與獵弓',
            desc: '蔡老闆提到目前倉庫的料件繁多，導致庫存狀況無法精準掌握，他認為當時公司共用料件品項繁多、多道製程造成管理不易。'
        },
        {
            imgSrc: 'list-merchandise12.jpg',
            link: '/tw/case/1517.html',
            title: '大武山畜產',
            type: '雞蛋',
            desc: '以前管理部總要花一個月時間結帳，甚至很難自行產出財務成本報表。'
        },
        {
            imgSrc: 'list-merchandise13.jpg',
            link: '/tw/case/1271.html',
            title: '冠成科技',
            type: '特殊氣體供應商',
            desc: '透過系統追蹤，冠成公司人員能由PDA手持裝置於廠商端或客戶端追蹤鋼瓶所在位置，達到鋼瓶充份利用的目的。'
        },
        {
            imgSrc: 'list-merchandise14.jpg',
            link: '/tw/case/1520.html',
            title: '台灣庵原',
            type: '農藥',
            desc: '蔡特助：「過去在製作報表時，各部門都是用自己手上的資料做，格式不一，業務與生產手上的資料也不同，在溝通上就時常牛頭不對馬嘴，好像是兩家不同的公司。」'
        },
        {
            imgSrc: 'list-merchandise15.jpg',
            link: '/tw/case/1522.html',
            title: '旭泰玻璃纖維',
            type: '玻璃纖維',
            desc: '現有廠內所有料件不論請、採、進到管理都由人員透過手寫表單進行管理，往往造成手寫錯誤。'
        },
        {
            imgSrc: 'list-merchandise16.jpg',
            link: '/tw/case/1283.html',
            title: '喫茶小舖',
            type: '手搖飲料',
            desc: '喫茶小舖是連鎖加盟體系，因此工作日報的來往是以Mail作為傳遞，工作日報常常淹沒在E-mail中。'
        },
        {
            imgSrc: 'list-merchandise17.jpg',
            link: '/tw/case/590.html',
            title: '晴天美食',
            type: '手搖飲料',
            desc: '晴天美食總部每天都要面對來自世界各國的加盟/直營店主，並且處理龐大的訂單量；在過去店主都是以填寫Excel訂單的方式下訂商品，並且透過通訊軟體或是Mail形式寄送。'
        },
        {
            imgSrc: 'list-merchandise18.jpg',
            link: '/tw/case/1017.html',
            title: '國際百貨',
            type: '百貨賣場',
            desc: 'POS會員管理帶來的會員管理有著相當大的效益，經由前台POS銷售資料而來，可記錄每個會員的消費歷程，也可提供判斷以決定發簡訊或MAIL予實際可能消費的會員，得以節省內部行銷的費用。'
        },
        {
            imgSrc: 'list-merchandise19.jpg',
            link: '/tw/case/644.html',
            title: '寶悍運動',
            type: '活動行銷',
            desc: '『管理就是把複雜的問題簡單化，混亂的事情規劃化』過去，請假作業多為紙本...'
        },
        {
            imgSrc: 'list-merchandise20.jpg',
            link: '/tw/case/981.html',
            title: '美而快實業(PAZZO)',
            type: '網購服飾',
            desc: '每日近萬筆資料，金流對帳更需嚴謹，預收貨款的帳務處理、各種付款條件的沖帳時點不同，及購物金的記錄處理，在在考驗著財務人員。'
        },
        {
            imgSrc: 'list-merchandise21.jpg',
            link: '/tw/case/1524.html',
            title: '陳金福號貢糖',
            type: '觀光工廠',
            desc: '在旅行團數倍增之下，旺季每天至少接待數十個團體，無論團務的管控、相關費用的計算、不斷生產及出貨庫存數量的管理...'
        },
    ]
};
module.exports = {
    components: {
        'CaseList': httpVueLoader('components/Case-list.vue'),
    },
    data() {
        return {
            context: caseManufacture
        };
    },
    computed: {
        caseManufacture() {
            return caseManufacture;
        },
        caseMerchandise() {
            return caseMerchandise;
        },
    },
}
</script>
