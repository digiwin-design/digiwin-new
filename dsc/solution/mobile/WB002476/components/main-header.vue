<template>
    <div class="header">
        <div class="container">
            <div>
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    line-height: 1.3;
}
h1 {
    font-weight: bold;
    font-size: 30px;
    line-height: 1.3;
}
p {
    margin-top: 1em;
    line-height: 1.4;
}
</style>