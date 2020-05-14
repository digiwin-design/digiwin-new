# 運作方式
1. 設置權限  
    1. 在 reCAPTCHA 控制台新增網域(Email 登入表單驗證碼)。
    1. 在 LINE 後台新增網址(LINE 登入 Callback URL)。
    1. 透過共用 JS 將目前網址與 login.json 中的網址做比對，如符合則在目前網頁插入 CSS 及 JS 設置權限。
1. 插入訂閱表單  
在插入的 JS 中再次將目前網址與 subscribe.json 中的網址做比對，如符合則插入表單元件。