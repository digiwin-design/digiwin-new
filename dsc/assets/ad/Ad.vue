<template>
    <div>
        <div class="ad">
            <template v-if="showAd">
                <a :href="info.adUrl" class="ad-content" target="_blank">
                    <img :src="info.imgSrc" alt />
                </a>
                <a href class="ad-close" @click.prevent="closeAd">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAe1BMVEUAAAD/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCYjISH/xCYvKiGqhCT2vSaQcSM8MiHiriVjTiJxWiNWRyIrJiGviSTBlSS0iySkgCRJPSJFOiKCZSNRQSLstiXXpiWXdyREmuutAAAAEnRSTlMA74j31mIPpVuVFgHyp5JZGBLkiSteAAABNUlEQVQ4y+2U3Y6DIBCFBaVqa/9mQBTrX1vbvv8TrrgSzCr2Yi82m/RcgMQv48lhRu+j/6ANC4MESRCyzVuU+qK4ceC3Qvh0HY/Ii4MRf5HIje5odYGpLhXduWDamrJGvKUO9tgYdkI3x0V2S7QHIeTIKSGy3gnZLsGHgRKI8ptNsda7PCyF5pcDVCOqfutGFkp/IUAmYFCWY9rpNc9gkGBzOCxgpFPMwbJQhHM4uPYvjNsHpsocr8EcJjY3iRMWOJnDCFMYpT3iWuU7Yo6obGWHZxOwjkSteA4LG0YGnV7daTBhYn5oSiE+Tc7OG3ya70vE2nmDXqwDaBDvGrGPMnZ13UyurvOiaqGfq8g5KeUPtmzpL2fQTrcsbVlpptuhUzz5b8Qn743ObB8kmAR7dvY++hN9Ab/eLAXJV7h3AAAAAElFTkSuQmCC"
                        alt
                    />
                </a>
            </template>
        </div>
        <transition name="fade">
            <div class="mask" v-show="showMask" @click="closeAd" @touchstart="closeAd"></div>
        </transition>
    </div>
</template>

<script>
let timer;
module.exports = {
    props: {
        info: {
            type: Object
        }
    },
    data: function () {
        return {
            isMobile: false,
            showAd: false,
            showMask: false,
        }
    },
    watch: {
        isMobile: function (value) {
            this.showMask = value && this.showAd;
        }
    },
    methods: {
        mediaSensor(minWidth) {
            let resizeWidth = (pMatchMedia) => this.isMobile = !pMatchMedia.matches;
            let mm = window.matchMedia(`(min-width: ${minWidth + 1}px)`);
            mm.addListener(resizeWidth);
            resizeWidth(mm);
        },
        closeAd: function () {
            clearInterval(timer);
            this.showAd = false;
            this.showMask = false;
        },
        preloadImg: function () {
            return new Promise(function (resolve) {
                let img = document.createElement('IMG');
                img.onload = resolve;
                img.src = this.info.imgSrc;
            }.bind(this));
        },
        init() {
            this.showAd = dayjs().isBetween(this.info.startTime, this.info.endTime);
            this.showMask = this.showAd && this.isMobile;
            // this.setTimer();
        },
        setTimer: function () {
            timer = setInterval(function () {
                // 超過活動時間後停止計時器
                let beforeEnd = dayjs().isBefore(dayjs(this.info.endTime));
                if (!beforeEnd) {
                    clearInterval(timer);
                }
            }.bind(this), 1000);
        },
    },
    created: function () {
        dayjs.extend(dayjs_plugin_isBetween);
        this.mediaSensor(768);
        this.preloadImg().then(this.init);
    },
}
</script>

<style>
.ad {
    position: fixed;
    right: 110px;
    bottom: 0;
    z-index: 10;
}
@media (max-width: 768px) {
    .ad {
        right: 50%;
        bottom: 50%;
        transform: translate(50%, 50%);
    }
}
.ad-content {
    display: block;
}
.ad-close {
    position: absolute;
    top: -22px;
    right: -22px;
}
.ad img {
    max-width: none;
}

.mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.7);
    content: "";
}

/* transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
