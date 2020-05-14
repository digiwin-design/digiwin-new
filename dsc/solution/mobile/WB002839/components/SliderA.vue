<template>
    <div class="slider">
        <template v-for="slide in slides">
            <input type="radio" class="slider-input" name="sliderA" :id="`sliderA${slide.id}`" :key="slide.id" :checked="slide.id === 1">
            <label :for="`sliderA${slide.id}`" class="slider-label" :key="slide.title">{{slide.linkText}}</label>
        </template>
        <div class="slider-slides">
            <section class="slider-slide" v-for="slide in slides" :key="slide.id">
                <div class="container">
                    <h1 class="slider-title">{{slide.title}}</h1>
                    <ul class="slider-list">
                        <li v-for="list in slide.lists" :key="list">{{list}}</li>
                    </ul>
                    <img :src="`images/online/slideA-${slide.id}.png`" alt="">
                </div>
            </section>
        </div>
    </div>
</template>

<script>
module.exports = {
    computed: {
        slides() {
            return [
                {
                    id: 1,
                    linkText: '接單管理',
                    title: '接單零誤差、出貨搶時效',
                    lists: [
                        '平台訂單自動轉入、確認即可',
                        '隨時掌握準確的商品庫存',
                        '自動產生對應的物流貨運',
                        '降低平台扣款及缺貨罰款',
                    ]
                },
                {
                    id: 2,
                    linkText: '對帳管理',
                    title: '對帳快又準、損益即時瞭',
                    lists: [
                        '自動轉入交易對帳資料',
                        '有效處理大量對帳資料',
                        '提升對帳實效性與掌握度',
                    ]
                },
                {
                    id: 3,
                    linkText: '退換貨管理',
                    title: '問題處理服務佳、客戶忠誠會更高',
                    lists: [
                        '掌握客戶退換貨的原因',
                        '提升退換貨處理時效',
                        '退換貨處理進度回報',
                        '帳務、庫存自動拋轉',
                    ]
                },
                {
                    id: 4,
                    linkText: '合約管理',
                    title: '平台費用項目多、期期比較不可少',
                    lists: [
                        '有效管理各平台合約資料',
                        '自動產生各平台通路費用',
                        '有效處理每期交易資料',
                    ]
                },
            ];
        }
    }
}
</script>

<style lang="scss" scoped>
    .slider {
        overflow-x: hidden;
        &-input {
            display: none;
            @for $nth from 1 through 5 {
                &:nth-of-type(#{$nth}):checked ~ .slider-slides {
                    $value: ($nth - 1) * -100%;
                    transform: translateX(#{$value});
                }
            }
            &:checked + .slider-label {
                background-color: #088089;
            }
        }
        &-label {
            float: left;
            width: calc(100% / 4);
            background-color: #0daebb;
            color: #fff;
            text-align: center;
            line-height: 45px;
            @media (max-width: 413px) {
                font-size: 15px;
            }
        }
        &-slides {
            display: flex;
            clear: both;
            padding-top: 25px;
            padding-bottom: 20px;
            transition: transform .4s;
        }
        &-slide {
            width: 100%;
            flex-shrink: 0;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &-title {
            color: #ff374b;
            // text-align: center;
            font-weight: bold;
            line-height: 30px;
        }
        &-list {
            margin: 0 auto 5px;
            padding-left: 1em;
            // width: 250px;
            list-style-type: disc;
            line-height: 30px;
        }
    }

</style>
