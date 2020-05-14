<template>
    <ul class="case">
        <li v-for="(item,idx) in result['719'].case" :key="item.title">
            <section>
                <div class="case-header js-case-header" :class="{ active: idx === 0 }">
                    <hgroup>
                        <h1>{{item.title}}</h1>
                        <h2>{{item.subtitle}}</h2>
                    </hgroup>
                </div>
                <div class="case-content js-case-content">
                    <div>
                        <div class="case-content-img">
                            <img :src="'/tw/article/images/719/case/case'+(idx+1)+'.png'" alt />
                        </div>
                        <div class="case-content-text">
                            <template v-for="content in item.contents">
                                <p class="case-content-text-title" :key="content.title">{{content.title}}</p>
                                <p v-html="content.text" :key="content.text"></p>
                            </template>
                        </div>
                    </div>
                </div>
            </section>
        </li>
    </ul>
</template>

<script>
module.exports = {
    computed: {
        result: function () {
            return store.state.result;
        },
    },
    methods: {
        clickHandler: function (e) {
            // 收起其它選單
            $(e.currentTarget)
                .parents('li')
                .siblings()
                .find('.js-case-header')
                .removeClass('active')
                .next()
                .slideUp();
            // 開合目前點擊選單
            $(e.currentTarget).toggleClass('active')
                .next()
                .slideToggle();
        }
    },
    mounted: function () {
        document.querySelectorAll('.js-case-header').forEach(function (el) {
            el.addEventListener('click', this.clickHandler);
        }.bind(this));
    },
}
</script>