<template>
    <div class="header">
        <div class="container">
            <div :data-text="small">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['small']
}
</script>

<style>
.header .container > div::before {
    content: attr(data-text);
}
.header h1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 1.3;
}
@media (min-width: 769px) {
    .header h1 {
        font-size: 48px;
    }
}
.header p {
    margin-top: 1em;
    line-height: 1.4;
}
</style>