<template>
    <div class="section3-items">
        <div v-for="(item,i) in items" :key="item.text1" class="section3-item">
            <img v-bind:src="'images/section3-icon' + (i+1) + '.png'" alt />
            <p>{{item.text1}}</p>
            <p>{{item.text2}}</p>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['items']
}
</script>