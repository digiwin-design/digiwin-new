<template>
    <div
        class="hoverBox"
        :class="[customClass, {'fadeIn': fadeIn}, {'arrow': arrow}]"
        :style="{
            'background-color': bgColor,
        }"
        onclick
    >
        <slot name="content"></slot>
        <div class="hoverBox-hover">
            <slot name="hover"></slot>
        </div>
    </div>
</template>

<script>
module.exports = {
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
        color: {
            type: String,
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
        hsl: function () {
            return w3color(this.color).toHslArray();
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
    max-width: 390px;
    width: 100%;
    height: 310px;
    color: #fff;
    cursor: default;
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
    background-image: linear-gradient(to bottom, #910619, #000);
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
    top: calc(100% - 40px);
    left: 50%;
    color: #fff;
    content: "\f106";
    font: normal normal normal 40px/1 FontAwesome;
    transform: translate(-50%, 0);
    animation: arrow 1.5s infinite ease-out;
}
</style>
