<ul class="nav container">
    <li v-for="(result, sectionId) in results">
        <div class="nav-title">{{result.title}}</div>
        <a href="javascript:;" @click="changeSection(sectionId)">
            <div>{{result.titleAbbr}}</div>
        </a>
        <ul class="nav-categories">
            <li v-for="(category, categoryId) in result.categories">
                <a href="javascript:;" v-if="category.titleAbbr" @click="changeSection(sectionId, '#' + result.id + '-' + (categoryId+1))">{{category.titleAbbr}}</a>
                <a href="javascript:;" v-else-if="category.titleHtml" v-html="category.titleHtml" @click="changeSection(sectionId, '#' + result.id + '-' + (categoryId+1))"></a>
                <a href="javascript:;" v-else @click="changeSection(sectionId, '#' + result.id + '-' + (categoryId+1))">{{category.title}}</a>
            </li>
        </ul>
    </li>
</ul>

<div id="section" class="section">
    <article v-for="(category, categoryId) in result.categories" :id="result.id + '-' + (categoryId+1)">
        <h1>{{category.title}}</h1>
        <p class="container">{{category.content}}</p>
        <template v-for="(items, index) in category.items">
            <input type="radio" :name="result.id + '-' + (categoryId+1)" :id="result.id + '-' + (categoryId+1) + '-' + (index+1) + '-input'" v-if="index">
            <input type="radio" :name="result.id + '-' + (categoryId+1)" :id="result.id + '-' + (categoryId+1) + '-' + (index+1) + '-input'" v-else checked>
        </template>
        <div class="section-nav">
            <label @click="setSliderHeight(result.id + '-' + (categoryId+1) + '-' + (index+1))" :for="result.id + '-' + (categoryId+1) + '-' + (index+1) + '-input'" v-for="(items, index) in category.items">{{items.title}}</label>
            <!--<label v-show="index !== 1" @click="setSliderHeight(result.id + '-' + (categoryId+1) + '-' + (index+1))" :for="result.id + '-' + (categoryId+1) + '-' + (index+1) + '-input'" v-for="(items, index) in category.items">{{items.title}}</label>-->
        </div>
        <div class="section-content">
            <div class="section-slider js-section-slider">
                <div v-for="(item, index) in category.items">
                <!--<div v-show="index !== 1" v-for="(item, index) in category.items">-->
                    <div class="container">
                        <div class="js-section-slider-content pc" :class="[result.id + '-' + (categoryId+1) + '-' + (index+1), 'js-' + result.id + '-' + (categoryId+1) + '-' + (index+1)]">
                            <div class="section-slider-content">
                                <div v-if="item.html" v-html="item.html"></div>
                                <component v-if="item.component" :is="item.component" :content="item.content"></component>
                            </div>
                            <a href="#contact" class="contactBtn js-nav">了解更多</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</div>

<article id="section-mb" class="section-mb">
    <h1 class="section-mb-title">{{result.title}}</h1>
    <div id="section-mb-accordion" class="section-mb-accordion">
        <template v-for="(category, categoryId) in result.categories">
            <h2 :class="'section-mb-header ' + result.id + ' js-' + result.id">{{category.title}}</h2>
            <div :class="'section-mb-body ' + result.id">
                <p class="container">{{category.content}}</p>
                <div class="js-section-mb-tabs">
                    <ul class="section-mb-tablist">
                        <li v-for="(item, index) in category.items">
                            <a :href="'#' + result.id + '-' + (categoryId+1) + '-' + (index+1)">{{item.title}}</a>
                        </li>
                    </ul>
                    <div v-for="(item, index) in category.items" :id="result.id + '-' + (categoryId+1) + '-' + (index+1)" class="section-mb-tabpanel">
                        <div class="section-mb-content mb" :class="result.id + '-' + (categoryId+1) + '-' + (index+1)">
                            <div v-if="item.html" v-html="item.html"></div>
                            <component v-if="item.component" :is="item.component" :content="item.content"></component>
                        </div>
                        <a href="#contact" class="contactBtn js-nav">了解更多</a>
                    </div>
                </div>
            </div>
        </template>
    </div>
</article>