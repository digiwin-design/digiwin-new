<template>
    <div>
        <h1 class="lists-title">{{context.title}}</h1>
        <div v-for="item in context.items" :key="item.imgSrc" class="list-item">
            <img :src="`images/case/${item.imgSrc}`" :alt="item.title">
            <div class="outline">
                <h3 class="name">
                    <a :href="item.link" target="_blank">{{item.title}}</a>
                </h3>
                <span class="type">{{item.type}}</span>
                <div class="desc">
                    <Vue-text-dot :msg="item.desc"></Vue-text-dot>
                </div>
                <a :href="item.link" class="link" target="_blank">瀏覽閱讀</a>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    components: {
        'VueTextDot': httpVueLoader('components/Vue-text-dot.vue'),
    },
    props: ['context'],
}
</script>

<style scoped>
.list-item {
    width: 270px;
}
.list-item img {
    display: block;
}
.outline {
    padding: 16px 16px 24px;
    height: 256px;
    border: 1px solid #ccc;
    border-top: none;
}
.name {
    margin: 10px 0 -4px;
    color: #00b0bd;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.2;
}
.type {
    position: relative;
    display: inline-block;
    margin-bottom: 30px;
    font-size: 15px;
    line-height: 1.5;
}
.type::before {
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: #00b0bd;
    content: '';
}
.desc {
    font-size: 17px;
    line-height: 1.5;
}
.link {
    float: right;
    margin-top: 20px;
    padding: 2px 8px;
    border-radius: 2px;
    background-color: #00b0bd;
    color: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 1.5;
    transition: color .15s ease-in-out, background-color .15s ease-in-out,
    border-color .15s ease-in-out;
}
a {
    color: #00b0bd;
}

</style>