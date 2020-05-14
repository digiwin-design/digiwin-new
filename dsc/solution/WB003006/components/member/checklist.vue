<template>
    <div class="checklist">
        <ul v-for="(list, ulIdx) in lists" :key="list[0]">
            <li v-for="(item, liIdx) in list" :key="item">
                <img src="images/member/check-icon.png" class="animated bounceIn" :style="getDelay(ulIdx, liIdx)">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    name: 'checklist',
    props: {
        lists: {
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