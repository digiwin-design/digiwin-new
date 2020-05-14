<div id="app">
    <div class="vision">
        <div class="container">
            <div class="video-container">
                <div id="player"></div>
            </div>
        </div>
    </div>

    <article class="section1 section">
        <div class="container">
            <h1 class="section-title">{{section1.title}}</h1>
            <h2 v-html="section1.subtitle" class="section-subtitle"></h2>
            <div class="section-contentTitle">
                <span>{{section1.contentTitle}}</span>
            </div>
            <Section1-content />
        </div>
    </article>

    <article class="section2 section">
        <div class="container">
            <h1 class="section-title">{{section2.title}}</h1>
            <h2 v-html="section2.subtitle" class="section-subtitle"></h2>
            <div class="section-contentTitle">
                <span>{{section2.contentTitle}}</span>
            </div>
            <div class="section2-content">
                <div v-for="content in section2.contents" class="row">
                    <div v-for="item in content" class="col">
                        <a :href="item.link" target="_blank">
                            <figure>
                                <img :src="item.imgSrc">
                                <figcaption>
                                    <ul>
                                        <li v-for="text in item.caption">{{text}}</li>
                                    </ul>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </article>

    <div class="bottom">
        <div class="container">
            <ul>
                <li><a href="/tw/enewspaper.html" target="_blank">我要訂閱</a></li>
                <li><a href="javascript:;" @click="shareFb">分享</a></li>
                <li><a :href="lineMsg" target="_blank">分享</a></li>
            </ul>
        </div>
    </div>
</div>

<!-- ======================================================================= -->
<!-- section1 -->
<!-- ======================================================================= -->
<script type="text/x-template" id="section1-content-template">
    <div class="section1-content">
        <div class="row">
            <div class="col">
                <a href="/tw/blog/4/943.html" target="_blank">
                    <figure>
                        <img src="images/1901/section1/img01.jpg">
                        <figcaption>
                            <ul>
                                <li>逆商業時代 活過殘酷的明天</li>
                                <li>盧希鵬</li>
                            </ul>
                        </figcaption>
                    </figure>
                </a>
            </div>
            <div class="col">
                <a href="/tw/case/1691.html" target="_blank">
                    <figure>
                        <img src="images/1901/section1/img02.jpg">
                        <figcaption>
                            <ul>
                                <li>數位轉型當到 數據紅利就來</li>
                                <li>陳劉杰</li>
                            </ul>
                        </figcaption>
                    </figure>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/GeuafR9EtPQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col">
                <a href="/tw/news/690.html" target="_blank">
                    <figure>
                        <picture>
                            <source srcset="images/1901/section1/img03.jpg" media="(max-width: 1200px)">
                            <img src="images/1901/section1/img03-s.jpg">
                        </picture>
                        <figcaption>
                            <ul>
                                <li>企業高峰年會</li>
                                <li>運用數據 為下一場競技鳴槍起跑</li>
                            </ul>
                        </figcaption>
                    </figure>
                </a>
            </div>
        </div>
    </div>
</script>
