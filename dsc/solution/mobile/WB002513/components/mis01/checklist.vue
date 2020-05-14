<template>
    <div class="checklist">
        <ul v-for="(item, ulIdx) in list" :key="item[0]">
            <li v-for="(i, liIdx) in item" :key="i">
                <img src="images/mis01/check-icon.png" class="animated bounceIn" :style="getDelay(ulIdx, liIdx)">
                {{i}}
            </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    name: 'checklist',
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    methods: {
        getDelay: function (ulIdx, liIdx) {
            if (ulIdx === 1) {
                liIdx += this.lists[0].length;
            }
            return {
                animationDelay: liIdx * .5 + 's'
            }
        }
    },
}
</script>