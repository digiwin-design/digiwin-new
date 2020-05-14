<template>
    <div class="home" v-if="!loading">
        <div class="nav">
            <router-link to="/">進入頁</router-link> |
            <router-link to="/MA">儲備MA招募</router-link> |
            <router-link to="/school">校園招募</router-link> |
            <a href="javascript:;">社會招募</a>
        </div>
        <h1>進入頁</h1>
    </div>
</template>

<script>
import mixins from '@/mixins';

export default {
    name: 'home',
    mixins: [mixins],
}
</script>

<style lang="scss" scoped>
.nav {
    padding: 30px;
    a {
        color: #2c3e50;
        font-weight: bold;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>