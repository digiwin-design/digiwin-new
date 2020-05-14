<template>
    <dl class="dl">
        <template v-for="item in list">
            <dt class="dt" :key="item.title">{{item.title}}</dt>
            <dd class="dd" :key="item.detail">{{item.detail}}</dd>
        </template>
    </dl>
</template>

<script>
module.exports = {
    props: ['list'],
}
</script>


<style lang="scss" scoped>
    .dl {
        line-height: 25px;
    }
    .dt {
        font-size: 26px;
        font-weight: bold;
        color: #bdad41;
    }
    .dd {
        color: #fff;
        & + .dt {
            margin-top: 1em;
        }
    }
</style>
