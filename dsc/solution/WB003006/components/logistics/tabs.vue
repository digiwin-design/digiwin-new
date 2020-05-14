<template>
    <div ref="tabs" class="tabs" :class="{'padding':nav}">
        <ul class="tabs-tablist">
            <li v-for="(item, idx) in nav" :key="item">
                <a :href="'#' + id + '-' + idx">{{item}}</a>
            </li>
        </ul>
        <div v-for="(item, idx) in nav" :key="item" :id="id + '-' + idx" class="tabs-tabpanel">
            <div class="tabs-content">
                <slot :name="id + '-' + idx + '-t'"></slot>
                <slot :name="id + '-' + idx"></slot>
            </div>
        </div>
        <div v-if="!nav" class="tabs-tabpanel">
            <div class="tabs-content">
                <slot :name="id + '-0-t'"></slot>
                <slot :name="id + '-0'"></slot>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['id', 'nav'],
    mounted: function () {
        $(this.$refs.tabs).tabs();
    },
    beforeDestroy: function () {
        $(this.$refs.tabs).tabs('destroy');
    },
}
</script>

<style>
.tabs.padding {
    padding-top: 30px;
    padding-bottom: 30px;
}
.tabs-tablist {
    display: flex;
    justify-content: center;
}
.tabs-tablist li {
    width: 165px;
}
.tabs-tablist li.ui-tabs-active a {
    background-color: #fff;
    color: #ed3e3e;
    font-weight: bold;
}
.tabs-tablist a {
    display: block;
    height: 56px;
    border: 1px solid #fff;
    color: #fff;
    text-align: center;
    line-height: 56px;
}
.tabs-tablist a:hover {
    color: #fff;
}
.tabs-tablist a:link,
.tabs-tablist a:visited {
    color: #fff;
}
.tabs-tablist a:focus {
    outline: none;
}
.tabs-tabpanel:first-of-type .tabs-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tabs-content {
    display: flex;
    flex-direction: column;
    padding: 55px 25px;
    background-color: #fff;
    align-items: center;
}
</style>