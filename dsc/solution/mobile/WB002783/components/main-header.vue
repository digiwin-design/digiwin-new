<template>
    <div class="header">
        <div class="container">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
}
p {
    margin-top: 1em;
    color: #fff;
    line-height: 24px;
}
</style>