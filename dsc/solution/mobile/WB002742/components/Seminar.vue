<template>
    <div class="seminar">
        <seminar v-if="content" :content="content"></seminar>
    </div>
</template>

<script>
module.exports = {
    components: {
        'seminar': httpVueLoader('components/seminar/main/Seminar.vue'),
    },
    data() {
        return {
            content: null
        };
    },
    methods: {
        getData() {
            axios.get('db.json').then(res => {
                this.content = res.data;
            });
        }
    },
    created() {
        this.getData();
    }
}
</script>