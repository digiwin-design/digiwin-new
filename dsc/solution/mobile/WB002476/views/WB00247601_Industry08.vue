<template>
    <div class="WB00247601_Industry08">
        <main-header>
            <template slot="content">
                <h1>
                    機械設備業
                    <br />智慧工廠全場景
                </h1>
                <h2>戰情室</h2>
            </template>
        </main-header>

        <article class="section1">
            <h1 class="title container">如果有一個即時掌全廠、控異常、指揮應變的資訊那就好了</h1>
            <slider :slides="result.slider1">
                <swiper-slide v-for="slide in result.slider1" :key="slide.id">
                    <div class="slide" :class="`slide${slide.id}`">
                        <p class="slide-tag" :data-text="slide.tag"></p>
                        <figure>
                            <img :src="slide.imgSrc" alt />
                            <figcaption>{{slide.figcaption}}</figcaption>
                        </figure>
                        <div class="slide-text" v-html="slide.text"></div>
                    </div>
                </swiper-slide>
            </slider>
            <div class="section1-additional container">
                <p>當生產資訊變動率高、或者模糊不清的時候，管理者需要快速掌握的關鍵是"狀態(Status)"。以此做為戰術調整的依據，在面對生產變動時能指揮現場快速做出應變處置。因此，資訊的統一化、共享化、可視化，將是現場管理戰力提昇的關鍵能力。</p>
            </div>
        </article>

        <article class="section2">
            <div class="container">
                <h1 class="title">未來戰情室情境佈建</h1>
                <section>
                    <h2>應用場景</h2>
                    <p>角色：管理主管</p>
                    <ul>
                        <li>即時總覽五大機種的目標達成狀況，掌握當下執行缺口進行調整改善。</li>
                        <li>從「料況」、「進度」的即時資訊，連動串查執行工單現行的缺口，找出當下處置的方向</li>
                    </ul>
                </section>
                <section>
                    <h2>預期效益</h2>
                    <ul>
                        <li>管理者可以藉由即時全廠資訊找出執行缺口，進行調度處置以達成生產目標。</li>
                        <li>對應生產目標即時呈現「料況」、「進度」缺口項目，讓管理者能快速的指揮現場進行調度調整。</li>
                        <li>即時的戰情資訊呈現，消除人員事後收集彙總等時間上的浪費。</li>
                    </ul>
                </section>
                <section>
                    <h2>戰情室</h2>
                    <p>串聯整合全廠機台生產資訊</p>
                    <p>提升「達目標」、「掃障礙」、「當下處置」應變能力</p>
                </section>
            </div>
        </article>

        <article class="section4">
            <h1 class="title container">機械設備業智慧工廠戰情室—內涵與精神</h1>
            <div class="section4-item container">
                <img src="images/WB00247601_Industry08/section4-item1.svg" alt="">
            </div>
            <div class="section4-item container">
                <h2 class="title">打造機械設備業專屬戰情室</h2>
                <img src="images/WB00247601_Industry08/section4-item2.png" alt="">
            </div>
        </article>

        <router-link to="/industry/2#fullScene" class="bottomBtn">回 機械設備業智慧工廠全場景</router-link>
    </div>
</template>

<script>
module.exports = {
    name: 'WB00247601_Industry08',
    computed: {
        result() {
            return store.state.result.WB00247601_Industry08;
        }
    },
}
</script>
