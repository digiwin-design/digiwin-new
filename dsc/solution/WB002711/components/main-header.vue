<template>
    <div class="header">
        <div class="container">
            <div>
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<style>
.header {
    line-height: 1.3;
}
.header h1 {
    font-weight: bold;
    font-size: 30px;
}
@media (min-width: 769px) {
    .header h1 {
        font-size: 48px;
    }
}
.header p {
    margin-top: 1em;
}
</style>