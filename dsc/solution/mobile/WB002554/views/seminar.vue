<template>
    <div class="seminar">
        <seminar-main v-if="content" :content="content"></seminar-main>
    </div>
</template>

<script>
module.exports = {
    name: 'Seminar',
    components: {
        'seminar-main': httpVueLoader('components/seminar/seminar-main.vue'),
    },
    computed: {
        content: function () {
            return store.state.result.seminar;
        }
    },
}
</script>