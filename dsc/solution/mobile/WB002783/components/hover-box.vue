<template>
    <div class="hoverBox" :class="[customClass, {'fadeIn': fadeIn}, {'arrow': arrow}]" onclick>
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
        }
    }
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
main .hoverBox:hover [class$=-hover] {
    top: 0;
}
main .hoverBox [class$=-hover] {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    height: inherit;
    transition: top .4s;
}
main .hoverBox.fadeIn [class$=-hover] * {
    opacity: 0;
}
main .hoverBox.fadeIn:hover [class$=-hover] * {
    animation: fadeIn 1s .4s forwards;
}
main .hoverBox.arrow::after {
    position: absolute;
    top: calc(100% - 24px);
    left: 50%;
    color: #fff;
    content: '\f106';
    font: normal normal normal 24px/1 FontAwesome;
    transform: translate(-50%, 0);
    animation: arrow 1.5s infinite ease-out;
}
</style>
