<template>
    <div class="school" v-if="!loading">
        <h1>This is an school page</h1>
    </div>
</template>

<script>
import mixins from '@/mixins';

export default {
    name: 'school',
    mixins: [mixins],
}
</script>
