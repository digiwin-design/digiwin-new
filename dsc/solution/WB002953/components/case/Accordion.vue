<template>
    <div ref="accordion" class="accordion">
        <template v-for="item in accordion">
            <h2 v-on:click="slideToggle" v-bind:key="item.title">{{item.title}}</h2>
            <div class="accordion-content" v-bind:key="item.process[0]">
                <div class="container">
                    <process v-bind:process="item.process"></process>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
module.exports = {
    props: ['accordion'],
    methods: {
        slideToggle: function (event) {
            $(event.target).toggleClass('active').next().slideToggle();
        },
        scrollHandler: function (event) {
            $(event.target.hash).addClass('active').next().slideDown();
        }
    },
    mounted: function () {
        $(this.$refs.accordion).find('h2').eq(0).addClass('active');
    },
};
</script>
