<template>
    <div class="case">
        <main-header>
            <template slot="content">
                <h1>各行各業客戶證言</h1>
            </template>
        </main-header>
        <div class="nav">
            <a
                v-for="item in result.case"
                :key="item.title"
                :href="'#'+item.id"
                :class="{'is-disabled': !item.id}"
                @click.prevent="clickHandler"
            >{{item.title}}</a>
        </div>
        <accordion :accordion="result.case"></accordion>
    </div>
</template>

<script>
module.exports = {
    computed: {
        result: function () {
            return store.state.result;
        }
    },
    methods: {
        clickHandler: function (e) {
            let target = e.target.getAttribute('href');
            let offset = document.querySelector('.page-submenu').offsetHeight;
            let targetPos = $(target).offset().top;
            let finalPos = offset ? targetPos - offset : targetPos;
            this.slideDown(target);
            $('html, body').animate({ scrollTop: finalPos });
        },
        slideDown: function (target) {
            $(target).addClass('active').next().slideDown();
        },
    },
}
</script>
