<template>
    <div ref="tabs" class="tabs">
        <ul class="tabs-tablist">
            <li v-for="(item, idx) in nav" :key="item">
                <a :href="'#' + id + '-' + idx">{{item}}</a>
            </li>
        </ul>
        <div v-for="(item, idx) in nav" :key="item" :id="id + '-' + idx" class="tabs-tabpanel">
            <div class="tabs-content">
                <slot :name="id + '-' + idx"></slot>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'Tabs',
    props: ['id', 'nav'],
    mounted: function () {
        $(this.$refs.tabs).tabs();
    },
    beforeDestroy: function () {
        $(this.$refs.tabs).tabs('destroy');
    },
}
</script>

<style scoped>
.tabs {
    padding-top: 30px;
    padding-bottom: 30px;
}
.tabs-tablist {
    display: flex;
    justify-content: center;
}
.tabs-tablist li {
    min-width: 112px;
}
.tabs-tablist li.ui-tabs-active a {
    background-color: #fff;
    color: #246dbf;
    font-weight: bold;
}
.tabs-tablist a {
    display: block;
    padding: 0 5px;
    height: 56px;
    border: 1px solid #fff;
    color: #fff;
    text-align: center;
    line-height: 56px;
}
.tabs-tablist a:focus {
    outline: none;
}
.tabs-content {
    display: flex;
    flex-direction: column;
    padding: 55px 25px;
    background-color: #fff;
    justify-content: center;
}
</style>