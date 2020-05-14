<template>
    <div class="nav">
        <div class="nav-links">
            <a
                v-for="(link,idx) in result.nav['719']"
                :key="link"
                :href="'#section'+(idx+1)"
                @click.prevent="anchorController"
            >{{link}}</a>
        </div>
    </div>
</template>

<script>
module.exports = {
    computed: {
        result: function () {
            return store.state.result;
        },
    },
    methods: {
        anchorController: function (e) {
            let target = e.currentTarget.getAttribute('href');
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        },
    },
}
</script>

<style>
main .nav {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 50px;
    justify-content: flex-end;
}
main .nav-links {
    position: relative;
    display: flex;
    align-items: center;
}
main .nav a {
    border-bottom: 3px solid transparent;
    color: #555;
    font-weight: bold;
    font-size: 15px;
    line-height: 3;
    flex-shrink: 0;
}
@media (min-width: 769px) {
    main .nav a {
        font-size: 16px;
        line-height: 2;
    }
}
html.no-mobile main .nav a:hover {
    border-bottom-color: #f85820;
}
main .nav a + a {
    margin-left: .5em;
}
@media (min-width: 769px) {
    main .nav a + a {
        margin-left: 25px;
    }
}

</style>