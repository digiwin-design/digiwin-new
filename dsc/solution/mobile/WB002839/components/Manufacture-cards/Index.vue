<template>
    <div class="section1-content">
        <div v-for="item in cards" :key="item.name" class="section1-item fadeIn" onclick>
            <p class="section1-item-name">{{item.name}}</p>
            <div class="section1-item-hover">
                <div>{{item.hoverText}}</div>
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
                        name: "成本結算",
                        hoverText: "人工成本、製造費用、材料及加工費。成本永遠無法確實精算..."
                    },
                    {
                        name: "庫存不準",
                        hoverText: "倉管人員只負責成品，原料、物料、半成品。存沒人管理，領料入庫也沒key單，現場人員直接領走使用..."
                    },
                    {
                        name: "品號編碼",
                        hoverText: "沒有品號編碼原則，造成一物多號的問題，庫存管理不易，也無法得知正確的庫存量..."
                    },
                    {
                        name: "採購請款",
                        hoverText: "生管直接叫貨，送來就請款，會計核對發票確認進貨金額不對，還要退回生管修改進貨金額，再送請款，作業流程耗時..."
                    },
                    {
                        name: "生產備料",
                        hoverText: "依完成圖面來施工，圖面完成後由人工手寫材料用料在圖面上，再進行採購及生產，人工作業造成無法快速的知道缺料狀況。"
                    },
                    {
                        name: "生產進度",
                        hoverText: "不同產品會有不同製程，各道製程皆可能自製或外包，會外包給不同廠商，且廠商會分批回貨，難以掌握進度跟良率。"
                    },
                    {
                        name: "生產排程",
                        hoverText: "現場口頭式管理，會自行生產半成品或成品，但未開立工單做生產進度控管，無法得知庫存量..."
                    },
                    {
                        name: "生產管理",
                        hoverText: "通常由經驗值及訂單交期來進行生產。無法預估原料、半成品(託工件)、成品的交期及生產天數..."
                    },
                    {
                        name: "生產流程",
                        hoverText: "訂單進來後會開出很多單據，會有分批進貨外包或退貨數量，進出很混亂，不知道生產到那裡，訂單何時可交？"
                    },
                    {
                        name: "託外加工",
                        hoverText: "外包加工，總是無法追蹤交期進度，還要指派人員定期追蹤交期管理。"
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
        $bgColor: #00b0bd, #0bd8e7, #70c7ef, #88b9b0, #33af84, #acd653, #89b682, #7ccdc4, #70c7ef, #00b0bd;
        @extend %item-hover;
        display: flex;
        flex-direction: column;
        color: #fff;
        align-items: center;
        justify-content: center;
        
        // background color & image
        @for $nth from 1 through 10 {
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
            width: 152px;
            height: 124px;
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
        &-hover {
            display: flex;
            padding: 20px;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>