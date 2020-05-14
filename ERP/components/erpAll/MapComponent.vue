<template>
    <div class="mapContainer">
        <div v-show="isMobile">
            <div id="map-s1" class="map-s1">
                <div class="svg-container"></div>
                <p class="caption">▲智慧製造</p>
            </div>
            <div id="map-s2" class="map-s2">
                <div class="svg-container"></div>
                <p class="caption">▲新零售</p>
            </div>
        </div>
        <div v-show="!isMobile" id="map" class="map">
            <div class="svg-container"></div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            timeline: new TimelineMax(),
            timeline2: new TimelineMax(),
        }
    },
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        },
        elements: function () {
            return {
                map: document.querySelector('#map'),
                mapS1: document.querySelector('#map-s1')
            };
        }
    },
    methods: {
        getSvg: function () {
            Promise.all([fetchFile('images/erpAll/map-s1.svg'), fetchFile('images/erpAll/map-s2.svg'), fetchFile('images/erpAll/map.svg')]).then(function (res) {
                document.querySelector('#map-s1 .svg-container').innerHTML = res[0];
                document.querySelector('#map-s2 .svg-container').innerHTML = res[1];
                document.querySelector('#map .svg-container').innerHTML = res[2];
                // this.initGUI();
                this.initAn();
                this.scrollHandler();
                if (!this.isMobile) this.hoverAn();
            }.bind(this));
        },
        initGUI: function () {
            let _this = this;
            let gui = new dat.GUI();
            let controls = {
                restart: function () {
                    _this.timeline.restart();
                    window.addEventListener('scroll', _this.scrollHandler);
                },
                pause: function () {
                    _this.timeline.pause(0);
                    window.addEventListener('scroll', _this.scrollHandler);
                }
            };
            gui.add(controls, 'restart');
            gui.add(controls, 'pause');
        },
        initAn: function () {
            this.timeline.pause(0);

            // map1
            this.timeline.from('.js-map1-1', .5, {
                y: '-=20',
                opacity: 0,
            })
                .from('.js-map1-2', .5, {
                    y: '-=20',
                    opacity: 0,
                })
                .from('.js-map1-3', .5, {
                    y: '+=20',
                    opacity: 0,
                })
                .from('.js-map1-4', .5, {
                    y: '+=20',
                    opacity: 0,
                })
                .from('.js-map1-5', .5, {
                    y: '+=20',
                    opacity: 0,
                });

            // map2
            let map2_1 = TweenMax.from('.js-map2-1', .5, {
                y: '-=20',
                opacity: 0,
            });
            let map2_2 = TweenMax.from('.js-map2-2', .5, {
                y: '-=20',
                opacity: 0,
            });
            let map2_3 = TweenMax.from('.js-map2-3', .5, {
                y: '-=20',
                opacity: 0,
            });
            let map2_4 = TweenMax.from('.js-map2-4', .5, {
                y: '-=20',
                opacity: 0,
            });
            this.timeline.add(map2_1, 0);
            this.timeline.add(map2_2, .5);
            this.timeline.add(map2_3, 1);
            this.timeline.add(map2_4, 1.5);

            // 水波動畫
            this.timeline2.pause(0);
            this.timeline2.to('.js-bg', 1, {
                scale: 1.5,
                opacity: 0,
                repeat: -1,
                transformOrigin: '50% 50%',
            });
        },
        scrollHandler: _.throttle(function () {
            window.addEventListener('scroll', this.scrollHandler);
            let el = this.isMobile ? this.elements.mapS1 : this.elements.map;
            getScrollPos(el, 0, function () {
                window.removeEventListener('scroll', this.scrollHandler);
                this.timeline.play();
                setTimeout(this.shakeAn, 2000);
            }.bind(this));
        }, 100),
        hoverAn: function () {
            let _this = this;
            document.querySelectorAll('[class^=js-map]').forEach(function (el) {
                el.addEventListener('mouseenter', function () {
                    _this.timeline2.restart();
                    this.firstElementChild.style.display = 'inline';
                });
                el.addEventListener('mouseleave', function () {
                    this.firstElementChild.style.display = 'none';
                });
            });
        },
        shakeAn: function () {
            let oriLinks = [];
            let ranLinks = [];

            // 存入物件的className
            document.querySelectorAll('.js-links > a').forEach(function (el) {
                oriLinks.push(el.className.baseVal);
            });

            // 複製原始陣列做隨機陣列
            let links = JSON.parse(JSON.stringify(oriLinks));

            setInterval(function () {
                // 隨機取完後重新複製
                if (!links.length) {
                    links = JSON.parse(JSON.stringify(oriLinks));
                }

                // 針對隨機取出的物件做動畫
                ranLinks = this.getRanArr(links, 2);
                ranLinks.forEach(function (item) {
                    let el = document.querySelector('.js-links .' + item);
                    el.classList.add('shake', 'shake-constant', 'shake-constant--hover');
                    // 停止動畫
                    setTimeout(function () {
                        el.classList.remove('shake', 'shake-constant', 'shake-constant--hover');
                    }, 1000);
                });
            }.bind(this), 2000);
        },
        getRanArr: function (beforeArr, total) {
            var newArr = [];
            for (var i = 0; i < total; i++) {
                var ran = Math.floor(Math.random() * beforeArr.length);
                newArr.push(beforeArr.splice(ran, 1)[0]); // 移出舊陣列數字到新陣列
            };
            return newArr;
        }
    },
    mounted: function () {
        this.getSvg();
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.scrollHandler);
    },
}
</script>