<template>
    <div class="lightBox">
        <a href @click.prevent="showImg(0)">了解完整流程</a>
        <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="imgIdx" @hide="handleHide"></vue-easy-lightbox>
    </div>
</template>

<script>
module.exports = {
    name: 'LightBox',
    data: function () {
        return {
            imgIdx: 0,
            visible: false,
            imgs: ['images/smartFactory/section1-illust.jpg'],
        }
    },
    methods: {
        showImg: function (idx) {
            this.imgIdx = idx;
            this.visible = true;
        },
        handleHide: function () {
            this.visible = false;
        },
    }
}
</script>