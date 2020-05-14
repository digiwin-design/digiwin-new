<template>
    <div class="smartFactory-collapse-and-tabs">
        <div ref="accordion" class="accordion">
            <template v-for="(item, idx) in content">
                <h2 @click="slideToggle" :key="item.title" :id="`anchor${idx}`">{{item.title}}</h2>
                <div class="accordion-content" :key="idx">
                    <tabs v-if="item.tab1" :id="`t${idx+1}`" :nav="nav">
                        <template :slot="`t${idx+1}-0`">
                            <div class="accordion-tab1">
                                <h3>{{item.tab1.subtitle}}</h3>
                                <p class="accordion-desc">{{item.tab1.desc}}</p>
                                <hover-box
                                    :content="pain"
                                    v-for="pain in item.tab1.pains"
                                    :key="pain.title"
                                ></hover-box>
                            </div>
                        </template>
                        <template :slot="`t${idx+1}-1`">
                            <div class="accordion-tab2">
                                <img :src="`images/smartFactory/${item.tab2.fileName}`" alt />
                            </div>
                        </template>
                    </tabs>

                    <template v-else>
                        <div class="accordion-content-detail">
                            <div>
                                <h3>{{item.subtitle}}</h3>
                                <p class="accordion-desc">{{item.desc}}</p>
                                <figure>
                                    <figcaption>{{item.figcaption}}</figcaption>
                                    <img :src="`images/smartFactory/${item.fileName}`" alt="">
                                </figure>
                            </div>
                        </div>
                    </template>

                    <div class="accordion-nav container">
                        <a href="#contact" class="js-nav">
                            <i class="material-icons">arrow_downward</i>
                            了解更多方案說明
                        </a>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'CollapseAndTabs',
    components: {
        'hover-box': httpVueLoader('components/smartFactory/hover-box.vue'),
    },
    props: {
        content: {
            type: Array
        },
        anchorIdx: {
            type: Number
        }
    },
    computed: {
        nav: function () {
            return ['提升生產現場應變速度', '如何自動報工'];
        },
    },
    methods: {
        slideToggle: function (event) {
            $(event.target).toggleClass('active').next().slideToggle();
        },
    },
    mounted: function () {
        $(this.$refs.accordion).find('h2').eq(0).addClass('active');
    },
};
</script>
