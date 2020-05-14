<template>
    <article :id="product" :class="product">
        <div class="container">
            <section-title
                :title="result.solution[product].title"
                padding="1em"
            ></section-title>
            <p>{{result.solution[product].desc}}</p>
            <ul class="list">
                <li v-for="item in result.solution[product].list" :key="item.text">
                    <a :href="item.url" target="_blank">{{item.text}}</a>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
module.exports = {
    props: ['product'],
    computed: {
        result: function () {
            return store.state.result;
        }
    },
}
</script>