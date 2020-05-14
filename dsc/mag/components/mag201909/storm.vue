<template>
    <div class="storm">
        <img src="images/mag201909/header-wind.png" class="js-wind" />
        <img src="images/mag201909/header-ball.png" class="ball js-ball" v-for="i in 8" :key="i" />
    </div>
</template>

<script>
module.exports = {
    methods: {
        initAn: function () {
            let tl = new TimelineMax();
            tl.from('.js-wind', 2, { opacity: 0 });
            tl.staggerFrom('.js-ball', 1, { opacity: 0, scale: 0 }, -0.2);
        }
    },
    mounted: function () {
        this.initAn();
    },
}
</script>

<style>
.storm {
    position: absolute;
    top: -115px;
    left: 28px;
    overflow: hidden;
    width: 555px;
    height: 522px;
    animation: stormAn 1.5s linear 1;
}
.storm::after {
    position: absolute;
    top: 0;
    left: 150%;
    width: 30%;
    height: 100%;
    background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0) 100%
    );
    content: "";
    transform: skewX(-45deg);
    animation: lightAn 3s linear 2s infinite;
}
.ball {
    position: absolute;
}
.ball:nth-child(1) {
    top: 120px;
    left: 160px;
    transform: scale(0.5);
}
.ball:nth-child(2) {
    top: 185px;
    left: 135px;
    transform: scale(0.6);
}
.ball:nth-child(3) {
    top: 280px;
    left: 35px;
    transform: scale(0.5);
}
.ball:nth-child(4) {
    top: 260px;
    left: 210px;
    transform: scale(0.6);
}
.ball:nth-child(5) {
    top: 280px;
    left: 340px;
    transform: scale(0.4);
}
.ball:nth-child(6) {
    top: 270px;
    left: 460px;
    transform: scale(0.6);
}
.ball:nth-child(7) {
    top: 360px;
    left: 385px;
    transform: scale(1);
}
.ball:nth-child(8) {
    top: 415px;
    left: 450px;
    transform: scale(0.4);
}
@keyframes lightAn {
    80% {
        left: 150%;
    }
    100% {
        left: -100%;
    }
}
@keyframes stormAn {
    0% {
        transform: translateX(10px);
    }
    10% {
        transform: translateY(5px);
    }
    20% {
        transform: translateX(-10px);
    }
    30% {
        transform: translateY(-5px);
    }
    40% {
        transform: translateX(10px);
    }
    50% {
        transform: translateY(5px);
    }
    60% {
        transform: translateX(-10px);
    }
    70% {
        transform: translateY(-5px);
    }
    80% {
        transform: translateX(10px);
    }
    90% {
        transform: translateY(5px);
    }
    100% {
        transform: translateX(0);
    }
}
</style>