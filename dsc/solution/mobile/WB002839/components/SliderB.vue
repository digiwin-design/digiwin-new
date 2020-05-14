<template>
    <div class="slider">
        <template v-for="slide in slides">
            <input type="radio" class="slider-input" name="sliderB" :id="`sliderB${slide.id}`" :key="slide.id" :checked="slide.id === 1">
            <label :for="`sliderB${slide.id}`" class="slider-label" :key="slide.title">{{slide.linkText}}</label>
        </template>
        <div class="slider-slides">
            <section class="slider-slide" v-for="slide in slides" :key="slide.id">
                <div class="container">
                    <h1 class="slider-title">{{slide.title}}</h1>
                    <ul class="slider-list">
                        <li v-for="list in slide.lists" :key="list">{{list}}</li>
                    </ul>
                    <img :src="`images/online/slideB-${slide.id}.png`" alt="">
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
                    linkText: '商品上架',
                },
                {
                    id: 2,
                    linkText: '接單',
                },
                {
                    id: 3,
                    linkText: '出貨',
                },
                {
                    id: 4,
                    linkText: '退貨',
                },
                {
                    id: 5,
                    linkText: '對帳',
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
            padding-right: 5px;
            padding-left: 5px;
            width: calc(100% / 5);
            background-color: #0daebb;
            color: #fff;
            text-align: center;
            line-height: 45px;
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
