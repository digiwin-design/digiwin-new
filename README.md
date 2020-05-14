# 開發工具

- nvm-windows  
  https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip  
  使用 NVM 安裝 Node.js 10.15.1 [(安裝說明)](https://oranwind.org/nvm-windows/)

- Yarn  
  https://classic.yarnpkg.com/latest.msi

- Ruby  
  https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.7.0-1/rubyinstaller-2.7.0-1-x64.exe

- Git  
  https://github.com/git-for-windows/git/releases/download/v2.25.0.windows.1/Git-2.25.0-32-bit.exe

- VSCode  
  [https://code.visualstudio.com/docs/?dv=win32user](https://code.visualstudio.com/docs/?dv=win32user)

# 安裝套件

`npm install -g gulp`

`npm install -g bower`

`npm install -g @vue/cli`

`yarn`

# Git Repository

URL：https://digiwin-design@github.com/digiwin-design/digiwin.git

GitHub 帳號：digiwin-design

GitHub 密碼：2u/3vup 2u04sl3

# Google 帳戶

帳號：[digiwin.design@gmail.com](mailto:digiwin.design@gmail.com)

密碼：2u/3vup 2u04sl3

已註冊服務： reCAPTCHA (登入驗證用)、Firebase (資料下載標題設置用)

# 官網分類

| 名稱        | 位置                         | 備註                                                                       |
| --------- | -------------------------- | ------------------------------------------------------------------------ |
| 文章        | /tw/article/               | HR產品、公司簡介                                                                |
| 活動        | /tw/dsc/activity/          |                                                                          |
| 賀卡        | /tw/dsc/card/              |                                                                          |
| 測試用       | /tw/dsc/dev/               |                                                                          |
| 企業通電子報    | /tw/dsc/digital-newspaper/ |                                                                          |
| 工業 4.0    | /tw/dsc/industry4/         | 廠內智能物流、智能現場管理                                                            |
| 企業通雜誌     | /tw/dsc/mag/               |                                                                          |
| CPL (實驗頁) | /tw/dsc/marketing/         | [Demo](https://www.digiwin.com/tw/dsc/marketing/WB002838/WB00283804.htm) |
| 方案/行業     | /tw/dsc/solution/          |                                                                          |
| 行業手機版     | /tw/dsc/solution/mobile/   |                                                                          |
| 404 Page  | /tw/dsc/404.html           |                                                                          |
| ERP       | /tw/ERP/                   |                                                                          |
| 產品        | /tw/software/              |                                                                          |
| 研討會 Demo  | /tw/dsc/dev/demo/seminar/  |                                                                          |

# 官網檔案

| 名稱         | 位置                            | 備註                                          |
| ---------- | ----------------------------- | ------------------------------------------- |
| 樣版         | /tw/dsc/template/default.html | 含頂部及底部                                      |
| 後台上稿樣版     | /tw/dsc/template/editor.html  | 含次級選單 & 表單一                                 |
| 後台上稿樣版     | /tw/dsc/template/editor2.html | 含次級選單 & 表單二                                 |
| 後台上稿重置用樣式  | /tw/dsc/css/reboot.css        | 透過 npm scripts (sass:reboot) 編譯 reboot.scss |
| 全站共用 JS    | /tw/dsc/js/common.min.js      | 透過 npm scripts (babel:common) 編譯 common.js  |
| 全站共用 CSS   | /tw/dsc/css/all.css           |                                             |
| 電腦/手機版轉址清單 | /tw/dsc/assets/awd-list.json  | 行業解決方案用                                     |

# 官網元件

| 名稱                  | 位置                               | 備註                                                                                                                                     |
| ------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 右下角浮動廣告             | /tw/dsc/assets/ad/               | 資料來源：db.json<br/>圖片位置： images/                                                                                                         |
| 文章廣告 Banner         | /tw/dsc/assets/article-ad/       | 資料來源：db.json<br/>圖片位置： images/                                                                                                         |
| 活動結束 Banner         | /tw/dsc/assets/EventEnd/         | 資料來源：db.json                                                                                                                           |
| 活動結束 Banner (線上活動用) | /tw/dsc/assets/EventEnd2/        |                                                                                                                                        |
| 各行各業區塊 (首頁用)        | /tw/dsc/assets/index-industry/   | 資料來源：index-industry.json<br/>圖片位置：/tw/dsc/images/index/                                                                                |
| 各行各業區塊 (行業用)        | /tw/dsc/assets/industry-list-v2/ | 資料來源 & 圖片位置同上 (首頁用)                                                                                                                    |
| 各行各業區塊 (IT 編列預算用)   | /tw/dsc/assets/industry-list/    | 資料來源： industry.vue<br/>圖片位置： images/                                                                                                   |
| 登入 & 訂閱             | /tw/dsc/assets/login/            | 資料來源：<br/>1. [LINE 後台](https://developers.line.biz/console/channel/1570741188/line-login)、login.json (登入用)<br/>2. subscribe.json (訂閱用) |
| 繁/簡體站跳轉提示           | /tw/dsc/assets/popup/            | 已委外上線                                                                                                                                  |
| 資料下載標題設置            | /tw/dsc/assets/resources/        | [設置頁面](https://www.digiwin.com/tw/dsc/assets/resources/)                                                                               |
| 次級選單                | /tw/dsc/assets/submenu/          | 資料來源：submenu.json                                                                                                                      |
| 次級選單手機版             | /tw/dsc/assets/submenu-spa/      | 資料來源：submenu.json                                                                                                                      |

# 官網 API

## 需求諮詢 (e化單)

- URL
  
  - 正式：http://misws.digiwin.com/WebPageData/Service.asmx/SaveData
  - 測試：https://misws.digiwin.com/WebPageDataTest/Service.asmx/SaveData

- Method：POST

- Request Sample
  
  ```js
  let tJSON = {
    doc_no: "WB002554", // 文宣代號
    source: "塑膠業管理次料成本、模具管理、訂單自動排程、製造現場管理...", // 資料頁面來源
    page_dir: "http://www.digiwin.com/solution/WB002554/WB00255401.htm", // 網頁位置
    company: "明明塑膠廠有限公司", // 公司名稱
    telephone: "（02)29826682", // 聯絡電話
    extension: "", // 分機
    address: "", // 公司地址
    contact_person: "張梅芬", // 聯絡人
    email: "mmp88.a66@msa.hinet.net", // E-mail
    mobile: "", // 行動電話
    department: "採購", // 部門
    job_title: "主管", // 索取職稱
    req_sys: "", // 需求內容
    dm_ask: "Y", // 其它
    get_file: "", // 資料索取
    query: "", // 索取內容
    other: "", // 諮詢內容
    country: "" // 跨國企業
  };
  $.ajax({
    type: 'POST',
    url: 'http://misws.digiwin.com/WebPageData/Service.asmx/SaveData',
    data: { data: JSON.stringify(tJSON) },
    success(result) {
      // get result
    }
  });
  ```

- Response Sample
  
  ```json
  {
    "msg": "",
    "result": "1", // 1：成功 0：失敗
    "farm": "N"
  }
  ```
  
  ### 信件通知人

- 正式  
  潘家鴈、李孟純、石渼華、黃郁雯、林佩君、張琇媚、黃子芸、沈家如、蔡任維、宋冠樺、李宜芳、王齡翊

- 正式 (東南亞 CPL：WB003008)  
  宋冠樺、李孟純、洪之文、石渼华、張琇媚、黃子芸、李宜芳、王齡翊

- 測試  
  陳琬婷、林韓蕙、蔡承真、李孟純、謝元中
  
  ## LINE / Email 登入紀錄

- URL：http://misws.digiwin.com/SocialMediaMarketing/api/loglist/Save

- Method：POST

- Request Sample
  
  ```js
  let data = {
    logtype: "lineId", // 儲存類型(lineId/mail)
    lineId: "U807f121a6ca7f7b808a96e23d5517b8c", // 如 logtype= mail 可為空字串
    mail: "test@test.test", // 如 logtype= lineId 可為空字串
    source: "https://www.digiwin.com/tw/software/2063.html" // 來源網址
  };
  const params = new URLSearchParams();
  params.append('', JSON.stringify(data));
  axios.post('https://misws.digiwin.com/SocialMediaMarketing/api/loglist/Save', params)
    .then(res => {
        // get result
    });
  ```

- Response Sample
  
  ```json
  {
    "result": 1, // 1：成功 0：失敗
    "msg": "" // 錯誤訊息
  }
  ```

- 呼叫時機
1. LINE / Email 登入成功時

2. 已登入狀態下進入文章頁面時
   
   ## LINE 訂閱報名紀錄
- URL：http://misws.digiwin.com/SocialMediaMarketing/api/member/Save

- Method：POST

- Request Sample
  
  ```js
  let data = {
    lineId: "aabbcc123", // LINE ID
    lineName: "UserName", // LINE 名稱
    realName: "TheReal", // 真實姓名
    eMail: "aaa@gmail.com", // EMail
    mobile: "0912345678", // 行動電話
    fbId: "", // Facebook ID
    fbName: "", // Facebook 名稱
    companyCode: "28682266", // 統一編號
    companyName: "鼎新", // 公司名稱
    job: "", // 職稱
    acpCusNo: "999999999", // 潛客代號
    memEDM: [ // 訂閱EDM
        {
            orderEDM: "企業數位化轉型", // EDM代號
            source: "https:// www.digiwin.com/tw" // 訂閱來源網頁位址
        }
    ],
    memEvent: [ // 活動報名
        {
            eventDate: "2019/06/06", // 活動日期
            eventCode: "28682266", // 活動代號
            eventName: "特別活動" // 活動名稱
        }
    ]
  };
  const params = new URLSearchParams();
  params.append('', JSON.stringify(data));
  axios.post('https://misws.digiwin.com/SocialMediaMarketing/api/member/Save', params)
    .then(function (res) {
        // get result
    });
  ```

- Response Sample
  
  ```json
  {
    "result": 1, // 1：成功 0：失敗
    "msg": "" // 錯誤訊息
  }
  ```

# 已完成專案

[https://trello.com/b/pdhuI2vz/digiwin](https://trello.com/b/pdhuI2vz/digiwin)
