<template>
    <div class="container">
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: #fff;
    font-weight: bold;
    font-size: 48px;
    line-height: 1.3;
}
.container p {
    margin-top: 1em;
    color: #fff;
    line-height: 1.6;
}
strong {
    color: #ff0;
}
</style>