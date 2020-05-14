<template>
    <div class="top">
        <div class="container">
            <div class="top-title">
                <a href="/tw/enewspaper.html" target="_blank">
                    <h1>
                        <picture>
                            <source srcset="images/logo-s-beta.png" media="(max-width:900px)">
                            <img src="images/logo-beta.png" alt="數位轉型專題報">
                        </picture>
                    </h1>
                </a>
                <p>{{date}}</p>
            </div>
            <sub-links></sub-links>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'Top',
    props: {
        date: {
            type: String,
            required: true
        }
    }
}
</script>