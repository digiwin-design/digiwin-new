<template>
    <a href="javascript:;" class="anchor" :style="{ 'background-color': content.bgColor }">
        <p v-for="item in content.text" :key="item" v-html="item"></p>
        <img :src="content.imgSrc" alt />
        <i class="material-icons">arrow_forward</i>
    </a>
</template>

<script>
module.exports = {
    props: {
        content: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.anchor {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 282px;
    height: 276px;
    color: #fff;
    justify-content: center;
    align-items: center;
}
p {
    font-weight: bold;
}
p:nth-of-type(1) {
    font-size: 48px;
}
p:nth-of-type(2) {
    font-size: 30px;
    line-height: 1.2;
}
strong {
    color: #ffea00;
}
img {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(-50%);
}
i {
    position: absolute;
    right: 20px;
    bottom: 15px;
    font-size: 3em;
    transform: rotate(-135deg);
    animation: arrowAn 0.5s ease-in infinite alternate;
}
@keyframes arrowAn {
    from {
        transform: rotate(-135deg) translateX(0px);
    }
    to {
        transform: rotate(-135deg) translateX(10px);
    }
}
</style>