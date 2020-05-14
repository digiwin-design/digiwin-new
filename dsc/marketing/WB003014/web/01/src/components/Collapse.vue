<template>
    <el-collapse v-model="activeNames" :accordion="!isMobile">
        <el-collapse-item :name="index + 1" v-for="(item, index) in items" :key="item.titleName">
            <template slot="title">
                <div class="collapse-title" :class="`category${item.category}`">
                    <div class="collapse-title__type" v-html="item.titleType"></div>
                    <div class="collapse-title__name">{{item.titleName}}</div>
                </div>
            </template>
            <div class="collapse-content">
                <div class="collapse-content__illust">
                    <img :src="require(`@/assets/images/video-list/${item.imgUrl}`)" alt />
                </div>
                <div class="collapse-content__text">
                    <p>{{item.contentText}}</p>
                    <a :href="item.link" target="_blank">{{item.linkText}}</a>
                </div>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            activeNames: 1,
        };
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        }
    },
    watch: {
        isMobile() {
            this.activeNames = 1;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/common';
/deep/ .el-collapse-item {
    &__header {
        position: relative;
        height: auto; /* override */
    }
    &__arrow {
        position: absolute;
        right: 9px;
        margin: 0; /* override */
        transition: none; /* override */
        @media (min-width: $tablet-width + 1) {
            right: 24px;
        }
        &.is-active {
            transform: rotate(180deg);
        }
        &::before {
            display: block;
            width: 0;
            height: 0;
            border-width: 12px 10.5px 0 10.5px;
            border-style: solid;
            border-color: #fff transparent transparent transparent;
            content: '';
        }
    }
    &__content {
        padding-bottom: 0; /* override */
    }
}
.collapse-title {
    display: flex;
    width: 100%;
    letter-spacing: getLetterSpacing(10);
    font-size: 20px;
    line-height: 1.3;
    @media (min-width: $tablet-width + 1) {
        font-size: 22px;
    }
    &__type {
        display: flex;
        padding: 18px 0;
        width: 100px;
        color: #3f3f3f;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        @at-root {
            $category: #ffbd0b #ff9898 #ffa87f;
            @for $i from 1 through 3 {
                .collapse-title.category#{$i} .collapse-title__type {
                    background-color: nth($category, $i);
                }
            }
        }
        @media (min-width: $tablet-width + 1) {
            width: 285px;
            /deep/ br {
                display: none;
            }
        }
    }
    &__name {
        display: flex;
        padding: 18px 1.5em 18px 10px;
        width: 100%;
        color: #fff;
        align-items: center;
        @at-root {
            $category: #2d5e9c #20436f #5d5588;
            @for $i from 1 through 3 {
                .collapse-title.category#{$i} .collapse-title__name {
                    background-color: nth($category, $i);
                }
            }
        }
        @media (min-width: $tablet-width + 1) {
            padding-right: 2em;
            padding-left: 18px;
        }
    }
}
.collapse-content {
    display: flex;
    flex-direction: column;
    padding: 15px 10px 20px;
    @media (min-width: $tablet-width + 1) {
        flex-direction: row;
        padding: 32px 54px;
    }
    &__illust {
        text-align: center;
        flex-shrink: 0;
    }
    &__text {
        width: 100%;
        letter-spacing: getLetterSpacing(10);
        @media (min-width: $tablet-width + 1) {
            display: flex;
            flex-direction: column;
            padding-left: 40px;
        }
        p {
            margin-top: .5em;
            margin-bottom: 1em;
            width: 100%;
            color: #3f3f3f;
            font-size: 20px;
            line-height: 28px;
            @media (min-width: $tablet-width + 1) {
                margin-top: 0;
                font-size: 22px;
                line-height: 34px;
            }
        }
        a {
            @include btn(100%, 60px, #fff, #f96823, 5px);
            font-weight: bold;
            font-size: 24px;
            @media (min-width: $tablet-width + 1) {
                margin: auto auto 0;
                padding-right: 38px;
                padding-left: 38px;
                width: auto;
            }
        }
    }
}
</style>