<template>
    <div class="desk">
        <div class="cards">
            <div class="card" v-for="(content, idx) in popupContents" :key="content.title">
                <figure
                    :class="{'imghvr-flip-vert': device === null, active: showPopup && idx === currentPopup}"
                >
                    <img :src="require(`@/assets/images/card${idx+1}.png`)" alt />
                    <figcaption>
                        <img v-if="device === null" :src="require(`@/assets/images/card-h.png`)" alt="">
                    </figcaption>
                    <a href @click.prevent="popupShow(idx)"></a>
                </figure>
            </div>
        </div>

        <Popup :id="currentPopup">
            <div class="popup-container">
                <div class="popup-content">
                    <div class="popup-cols" v-if="popupContents">
                        <div class="popup-col">
                            <img
                                :src="`images/popup-card${popupContent.id}.png`"
                                alt
                            />
                        </div>
                        <div class="popup-col">
                            <p class="popup-title">{{popupContent.title}}</p>
                            <p class="popup-desc" v-html="popupContent.desc"></p>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
    </div>
</template>

<script>
import 'jquery-popup-overlay';
import axios from 'axios';
import Popup from './Popup.vue';

export default {
    components: {
        Popup,
    },
    data() {
        return {
            currentPopup: 0, // 點擊的彈窗序號
            popupContents: null, // 所有的彈窗內容
        };
    },
    computed: {
        device() {
            return this.$store.state.device;
        },
        showPopup() {
            return this.$store.state.showPopup;
        },
        // 取得點擊的彈窗內容
        popupContent() {
            return this.popupContents[this.currentPopup];
        },
    },
    methods: {
        popupShow(idx) {
            this.currentPopup = idx;
            this.$store.commit('togglePopup', true);
            $('#popup').popup('show');
        }
    },
    created() {
        // 取得彈窗內容
        axios.get('db.json')
            .then(res => {
                this.popupContents = res.data.popupContents;
            });
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/common.scss';
.desk {
    margin: auto;
}
.cards {
    $card-width: 256px;
    display: flex;
    margin: 0 auto;
    max-width: $card-width * 3;
    flex-wrap: wrap;
    @media (max-width: 960px) {
        max-width: $card-width * 2;
    }
    @media (max-width: 640px) {
        max-width: $card-width;
    }
}
.card {
    display: flex;
    margin: 18px;
}
[class^='imghvr-'],
[class^='imghvr-'] figcaption {
    padding: 0;
    background-color: transparent;
}
img,
figure {
    display: block;
}
figure {
    position: relative;
    a {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
    }
}
.imghvr-flip-vert {
    &.active {
        & > img {
            opacity: 0;
            transform: rotateY(-180deg);
        }
        figcaption {
            opacity: 1;
            transform: rotateY(0deg);
        }
    }
}
.popup {
    &-container {
        padding-right: 73px;
        padding-left: 88px;
        height: 100%;
        @media (max-width: $popup-breakpoint) {
            padding: 30px;
        }
    }
    &-content {
        display: flex;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        height: 100%;
    }
    &-cols {
        display: flex;
        color: #fff;
        letter-spacing: getLetterSpacing(10);
        align-items: center;
        @media (max-width: $popup-breakpoint) {
            flex-direction: column;
            height: 100%;
            justify-content: center;
            align-items: center;
        }
    }
    &-col {
        &:last-child {
            padding-left: 57px;
            width: calc(100% - 215px);
            @media (max-width: $popup-breakpoint) {
                padding-top: 20px;
                padding-left: 0;
                width: 100%;
            }
        }
    }
    &-title {
        $color: #c2e2e3 #fcf884 #ffd4cd #ffd4cd #b9dee1 #fff;
        margin-bottom: 10px;
        color: #f4f112;
        font-weight: bold;
        font-size: 35px;
        @media (max-width: $popup-breakpoint) {
            text-align: center;
        }
        @at-root {
            @for $i from 1 through 6 {
                .popup#{$i} .popup-title {
                    color: nth($color, $i);
                }
            }
        }
    }
    &-desc {
        color: #fdfdfe;
        font-size: 20px;
        line-height: 32px;
    }
}
</style>
