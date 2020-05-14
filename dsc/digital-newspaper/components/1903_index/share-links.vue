<template>
    <div class="shareLinks">
        <!-- fb -->
        <a :href="`http://www.facebook.com/share.php?u=${fbURL}`" target="_blank">
            <img src="images/1903_index/share-fb.png" alt />
        </a>
        <!-- line -->
        <a :href="`http://line.naver.jp/R/msg/text/?${lineText}`" target="_blank">
            <img src="images/1903_index/share-line.png" alt />
        </a>
        <!-- mail -->
        <a :href="`mailto:?subject=${mailSubject}&body=${mailBody}`" target="_blank">
            <img src="images/1903_index/share-mail.png" alt />
        </a>
    </div>
</template>

<script>
module.exports = {
    name: 'ShareLinks',
    computed: {
        fbURL: function () {
            // 縮網址工具：https://picsee.co
            return 'http://sc.piee.pw/K87P3';
        },
        lineText: function () {
            // %0d%0a 為換行字元
            return `分享專題報，讓知識因共享更深化《美中貿易戰搶商機! 產線回流關鍵解析》%0d%0a訂閱傳送門：${location.href}`;
        },
        mailSubject: function () {
            return '分享專題報，讓知識因共享更深化《美中貿易戰搶商機! 產線回流關鍵解析》';
        },
        mailBody: function () {
            // %0d%0a 為換行字元
            return `我想要分享一個很棒的數位轉型專題報給你！%0d%0a讓知識因共享更深化《美中貿易戰搶商機! 產線回流關鍵解析》%0d%0a訂閱傳送門：${location.href}`;
        }
    },
}
</script>

<style scoped>
.shareLinks {
    display: flex;
}
a + a {
    margin-left: 20px;
}
</style>
