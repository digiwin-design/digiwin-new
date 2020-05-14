<template>
    <div class="toolbar">
        <div class="container">
            <a :href="'http://www.facebook.com/share.php?u='+fbURL" target="_blank">
                <figure>
                    <img src="images/mag201909/fb.png" alt />
                    <figcaption>FB分享</figcaption>
                </figure>
            </a>
            <a href="https://acho.tw/acho/r/sMPlI" target="_blank">
                <figure>
                    <img src="images/mag201909/line.png" alt />
                    <figcaption>
                        數位轉型
                        <br />與您同行
                    </figcaption>
                </figure>
            </a>
            <a href="https://www.digiwin.com/tw/enewspaper.html" target="_blank">
                <figure>
                    <img src="images/mag201909/enewspaper.png" alt />
                    <figcaption>
                        支持企業通
                        <br />好內容
                    </figcaption>
                </figure>
            </a>
            <a href="https://www.digiwin.com/tw/zlsq.html?id=2042" target="_blank">
                <figure>
                    <img src="images/mag201909/resources.png" alt />
                    <figcaption>
                        為成功者的
                        <br />轉型劃重點
                    </figcaption>
                </figure>
            </a>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'toolbar',
    computed: {
        fbURL: function () {
            // 縮網址工具：https://picsee.co
            return 'http://sc.piee.pw/MCT47';
        },
    },
}
</script>

<style scoped>
.toolbar {
    margin: 0 auto;
    max-width: 440px;
}
.toolbar .container {
    display: flex;
    justify-content: space-between;
}
figcaption {
    margin-top: 10px;
    color: #fff;
    font-size: 16px;
    line-height: 20px;
}
a {
    text-align: center;
}
</style>
