<template>
    <div class="section1-content">
        <div v-for="item in cards" :key="item.name" class="section1-item fadeIn" onclick>
            <p class="section1-item-name">{{item.name}}</p>
            <div class="section1-item-hover">
                <ul :class="'col' + item.hoverText.length">
                    <li v-for="text in item.hoverText" :key="text">{{text}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        computed: {
            cards() {
                return [
                    {
                        name: "內銷",
                        hoverText: [
                            "銷售預測怎麼作？後續庫存數量又要怎麼備才能更精準符合客戶需求？",
                            "業務單位要怎麼掌握公司現有的商機和進行狀況？"
                        ]
                    },
                    {
                        name: "外銷",
                        hoverText: [
                            "如何讓船務出口人員知道未來有那些訂單要出？內部通知程序還要一一詢問太費時了...",
                            "業務主管要如何作訂單審查，掌握訂單毛利？",
                            "訂單售價該如何計算？要依據上次單價還是重新計算後再報價？"
                        ]
                    },
                    {
                        name: "維修售前",
                        hoverText: [
                            "序號記錄、履歷追蹤還在用紙本進行...",
                            "這是原廠的保固還是公司自己的保固，常常搞不清楚..."
                        ]
                    },
                    {
                        name: "維修服務",
                        hoverText: [
                            "維修人力分配、歷史維修記錄、零件庫存、維修成本管控...都用人工管理...",
                            "客戶之前修過那些問題？上次是怎麼解決的？",
                            "維修記錄無從查起？工程師也離職無人可問？"
                        ]
                    }
                ]
            }
        },
    };
</script>

<style lang="scss" scoped>
%item-hover {
    position: relative;
    overflow-y: hidden;
    cursor: pointer;
    &:hover [class$='-hover'] {
        top: 0;
    }
    [class$='-hover'] {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1;
        width: 100%;
        height: inherit;
        transition: top .4s;
    }

    // fadeIn
    &[class*='fadeIn'] {
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        &:hover [class$='-hover'] * {
            animation: fadeIn 1s .4s forwards;
        }
        [class$='-hover'] * {
            opacity: 0;
        }
    }
}
.section1 {
    &-item {
        $bgColor: #00b0bd, #0bd8e7, #e6b437, #d2cd46;
        @extend %item-hover;
        display: flex;
        flex-direction: column;
        color: #fff;
        align-items: center;
        justify-content: center;
        
        // background color & image
        @for $nth from 1 through 4 {
            &:nth-of-type(#{$nth}) {
                background-color: nth($bgColor, $nth);
                &::before {
                    background-image: url('images/icon#{$nth}.png');
                }
                .section1-item-hover {
                    background-color: rgba(darken(nth($bgColor, $nth), 20%), .95);
                }
            }
        }

        &::before {
            display: block;
            width: 150px;
            height: 120px;
            background-position: 50%;
            background-size: contain;
            background-repeat: no-repeat;
            content: '';
        }
        &::after {
            position: absolute;
            bottom: 12px;
            left: 50%;
            width: 15px;
            height: 8px;
            background-image: url('images/arrow.png');
            content: '';
            transform: translateX(-50%);
        }
        &-name {
            font-size: 24px;
        }
    }
}
</style>