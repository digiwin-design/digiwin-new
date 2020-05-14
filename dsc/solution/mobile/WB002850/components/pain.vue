<template>
    <div
        class="pain"
        :class="[customClass, { 'fadeIn': fadeIn }, { 'arrow': arrow }]"
        :style="{ 'background-color': bgColor, height: height }"
        onclick
    >
        <img :src="content.imgSrc" alt />
        <p class="pain-title" v-text="content.text"></p>
        <div class="pain-hover" :style="{ 'background-color': hoverBgColor }">
            <ul v-if="Array.isArray(content.hoverText)">
                <li v-for="item in content.hoverText" :key="item" v-html="item"></li>
            </ul>
            <p v-else v-html="content.hoverText"></p>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'Pain',
    props: {
        content: {
            type: Object,
            required: true
        },
        customClass: String,
        fadeIn: {
            type: Boolean,
            default: false
        },
        arrow: {
            type: Boolean,
            default: true
        },
        height: {
            type: String,
            default: '224px'
        }
    },
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        },
        bgColor: function () {
            return 'hsl(' + this.hsl[0] + ',' + this.hsl[1] + '%,' + this.hsl[2] + '%' + ')';
        },
        hoverBgColor: function () {
            return 'hsla(' + this.hsl[0] + ',' + this.hsl[1] + '%,' + (this.hsl[2] - 20) + '%' + ',.95)';
        },
        hsl: function () {
            return w3color(this.content.color).toHslArray();
        }
    },
}
</script>

<style>
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes arrow {
    50% {
        transform: translate(-50%, 100%);
    }
}
main .pain {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    width: 100%;
    color: #fff;
    cursor: pointer;
    justify-content: center;
    align-items: center;
}
main .pain:hover [class$="-hover"] {
    top: 0;
}
main .pain img {
    margin: 0 auto 1em;
}
main .pain-title {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    line-height: 1;
}
main .pain [class$="-hover"] {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    display: flex;
    padding: 0 25px;
    width: 100%;
    height: inherit;
    color: #fff;
    text-align: justify;
    line-height: 2;
    transition: top 0.4s;
    justify-content: center;
    align-items: center;
}
main .pain [class$="-hover"] ul {
    padding-left: 1em;
    list-style-type: disc;
}
main .pain.fadeIn [class$="-hover"] * {
    opacity: 0;
}
main .pain.fadeIn:hover [class$="-hover"] * {
    animation: fadeIn 1s 0.4s forwards;
}
main .pain.arrow::after {
    position: absolute;
    top: calc(100% - 24px);
    left: 50%;
    color: #fff;
    content: "\f106";
    font: normal normal normal 24px/1 FontAwesome;
    transform: translate(-50%, 0);
    animation: arrow 1.5s infinite ease-out;
}
</style>
