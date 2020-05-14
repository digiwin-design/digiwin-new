<template>
    <div class="dot" :style="{ height: height + 'px' }">
        <slot></slot>
    </div>
</template>

<script>
module.exports = {
    props: ['height'],
    mounted: function () {
        $(this.$el).dotdotdot({ truncate: 'letter' });
    },
}
</script>