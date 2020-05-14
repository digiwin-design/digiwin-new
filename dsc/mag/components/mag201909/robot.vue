<template>
    <a
        href="/tw/zlsq.html?id=2048"
        target="_blank"
        class="robot"
        :class="{ active: active }"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseleave"
    ></a>
</template>

<script>
module.exports = {
    data: function () {
        return {
            debug: false,
            active: false,
            currentTime: 0,
            isHover: false,
            timer: null,
        }
    },
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        },
        stayTime: function () {
            return this.isMobile ? 5 : 7;
        },
    },
    watch: {
        isHover: function (val) {
            if (val) this.active = true;
        }
    },
    methods: {
        getSvg: function () {
            fetch('images/mag201909/robot.svg')
                .then(function (res) { return res.text() })
                .then(function (res) {
                    this.$el.innerHTML = res;
                    if (this.debug) this.active = true;
                    this.setTimer();
                }.bind(this));
        },
        setTimer: function () {
            if (this.debug) return;
            clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                if (this.currentTime < this.stayTime) {
                    this.active = true;
                    if (!this.isHover) {
                        this.currentTime++;
                        this.setTimer();
                    }
                }
                else {
                    this.active = false;
                    this.currentTime = 0;
                    setTimeout(this.setTimer, 3000);
                }
            }.bind(this), 1000);
        },
        onMouseEnter: function () {
            if (!this.isMobile) {
                this.isHover = true;
            }
        },
        onMouseleave: function () {
            this.isHover = false;
            this.currentTime = 0;
            this.setTimer();
        }
    },
    mounted: function () {
        this.getSvg();
    },
}
</script>

<style>
.robot {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 370px;
    height: 370px;
    transition: transform 1s;
    transform: translateX(-100%) rotate(30deg);
}
@media (max-width: 768px) {
    .robot {
        transform-origin: 30% 50%;
        transform: translateX(-100%) scale(0.5) rotate(30deg);
    }
}
.robot.active {
    transform: translateX(-110px) rotate(30deg);
}
@media (max-width: 768px) {
    .robot.active {
        transform: translateX(-110px) scale(0.5) rotate(30deg);
    }
}
.robot [data-name="arm"] {
    transform-origin: 202px 160px;
}
.robot.active [data-name="arm"] {
    animation: armAn 0.5s 1s infinite alternate;
}
.robot [data-name="lower-arm"] {
    transform-origin: 252px 212px;
    transform: rotate(30deg);
}
.robot.active [data-name="lower-arm"] {
    animation: lowerArmAn 0.5s 1s infinite alternate;
}
.robot [data-name="ball"] {
    transform: translate(53px, 20px);
}
.robot.active [data-name="ball"] {
    animation: ballAn 0.5s 1s infinite alternate ease-out;
}
@keyframes armAn {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(-35deg);
    }
}
@keyframes lowerArmAn {
    from {
        transform: rotate(35deg);
    }
    to {
        transform: rotate(0);
    }
}
@keyframes ballAn {
    from {
        transform: translate(53px, 20px);
    }
    to {
        transform: translate(-10px, -70px);
    }
}
</style>