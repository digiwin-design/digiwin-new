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

<style scoped>
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
.hoverBox {
    position: relative;
    overflow-y: hidden;
    cursor: pointer;
}
.hoverBox:hover [class$=-hover] {
    top: 0;
}
.hoverBox [class$=-hover] {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    height: inherit;
    transition: top .4s;
}
.hoverBox.fadeIn [class$=-hover] * {
    opacity: 0;
}
.hoverBox.fadeIn:hover [class$=-hover] * {
    animation: fadeIn 1s .4s forwards;
}
</style>
