<template>
    <div
        class="hoverBox"
        :class="[customClass, {'fadeIn': fadeIn}, {'arrow': arrow}]"
        :style="{'background-color': bgColor}"
        onclick
    >
        <img :src="content.imgSrc" alt="">
        <p class="hoverBox-title">{{content.title}}</p>
        <p class="hoverBox-subtitle" v-html="content.subtitle"></p>
        <div class="hoverBox-hover" :style="{ 'background-color': hoverBgColor }">
            <p v-html="content.hoverText"></p>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'HoverBox',
    props: {
        customClass: String,
        fadeIn: {
            type: Boolean,
            default: false
        },
        arrow: {
            type: Boolean,
            default: true
        },
        content: {
            type: Object,
            required: true
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
main .hoverBox {
    position: relative;
    overflow-y: hidden;
    cursor: pointer;
}
main .hoverBox:hover [class$="-hover"] {
    top: 0;
}
main .hoverBox [class$="-hover"] {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    height: inherit;
    transition: top 0.4s;
}
main .hoverBox.fadeIn [class$="-hover"] * {
    opacity: 0;
}
main .hoverBox.fadeIn:hover [class$="-hover"] * {
    animation: fadeIn 1s 0.4s forwards;
}
main .hoverBox.arrow::after {
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
