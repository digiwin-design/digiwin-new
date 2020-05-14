<template>
    <div class="case-list">
        <dl v-for="item in list" :key="item.company">
            <dt>
                <i>{{item.company}}</i>
                <a :href="item.link" target="_blank">more</a>
            </dt>
            <dd>{{item.desc}}</dd>
        </dl>
    </div>
</template>

<script>
module.exports = {
    name: 'case-list',
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>