<template>
    <ul class="process" :class="'p'+(id+1)">
        <li v-for="item in process" v-bind:key="item">
            <div v-html="item" class="process-item"></div>
        </li>
    </ul>
</template>

<script>
module.exports = {
    props: ['process', 'id']
}
</script>