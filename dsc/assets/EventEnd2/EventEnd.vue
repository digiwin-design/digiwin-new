<template>
    <div v-if="expired" class="endBanner" :class="{'is-hidden':isHidden}">
        <div class="endBanner-main">
            <a :href="url" class="endBanner-link" target="_blank"></a>
            <div class="endBanner-container">
                <img src="/tw/dsc/assets/EventEnd2/images/onair_end.png" class="endBanner-img">
                <a href class="endBanner-close" @click.prevent="toggleHandler"></a>
            </div>
        </div>
        <a href class="endBanner-open" @click.prevent="toggleHandler">預約回看</a>
    </div>
</template>

<script>
module.exports = {
    props: ['endDate', 'id'],
    data: function data() {
        return {
            expired: false,
            isHidden: false,
        };
    },
    computed: {
        url: function () {
            return this.id ? '/tw/zlsq.html?id=' + this.id : '/tw/resources.html';
        }
    },
    methods: {
        toggleHandler: function toggleHandler() {
            this.isHidden = !this.isHidden;
        }
    },
    created: function created() {
        var currentDate = Date.parse(new Date().toDateString());
        var endDate = Date.parse(this.endDate);
        this.expired = currentDate > endDate ? true : false;
    }
};
</script>

<style scoped>
.endBanner {
    position: fixed;
    bottom: 0;
    z-index: 3;
    width: 100%;
    background-image: url("images/event_end_bg.jpg");
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    transition: transform 0.4s;
}
.endBanner.is-hidden {
    transform: translateY(100%) translateY(-50px);
}
.endBanner.is-hidden .endBanner-main {
    opacity: 0;
    pointer-events: none;
}
.endBanner.is-hidden .endBanner-open {
    opacity: 1;
    pointer-events: auto;
}
.endBanner-main {
    transition: opacity 0.4s;
}
.endBanner-link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
}
.endBanner-container {
    position: relative;
    margin: 0 auto;
    max-width: 1000px;
}
.endBanner-img {
    max-width: 100%;
    vertical-align: middle;
}
.endBanner-close {
    background-image: url("images/close-icon.png");
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 2;
    width: 30px;
    height: 30px;
}
.endBanner-close::before {
    position: absolute;
    content: "";
    right: -7px;
    left: -7px;
    top: -7px;
    bottom: -7px;
}
.endBanner-open {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50px;
    color: #fff;
    text-align: center;
    letter-spacing: getLetterSpacing(75);
    font-size: 20px;
    line-height: 1;
    opacity: 0;
    transition: opacity 0.4s;
    pointer-events: none;
    justify-content: center;
    align-items: center;
}
.endBanner-open::before {
    background-image: url("images/open-icon.png");
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 5px;
    width: 32px;
    height: 10px;
    content: "";
}
</style>
