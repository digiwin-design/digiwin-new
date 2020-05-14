<div class="section1">
    <div class="container">
        <section v-for="(item, index) in section1">
            <div class="section1-num">
                <i>議題</i>
                <i>{{index + 1}}</i>
            </div>
            <h1 v-html="item.title"></h1>
            <ul>
                <li v-for="list in item.lists" v-html="list"></li>
            </ul>
        </section>
    </div>
</div>

<article id="section2" class="section2">
    <div class="container">
        <h1>{{section2.title}}</h1>
        <Checklist :lists="section2.lists"></Checklist>
    </div>
</article>

<article class="section3">
    <div class="container">
        <h1 class="sectionTitle">{{section3.title}}</h1>
        <section v-for="(item, index) in section3.items">
            <h1>{{item.title}}</h1>
            <h2>{{item.subtitle}}</h2>
            <div v-html="item.content" class="section3-content"></div>
        </section>
    </div>
</article>
