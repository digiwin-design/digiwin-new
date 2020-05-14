<template>
    <div class="accordion" :class="['section'+index]">
        <div ref="accordion">
            <template v-for="section in accordion">
                <h2 v-on:click="slideToggle" :key="section.title">
                    <span class="accordion-title" v-html="section.title"></span>
                    <span class="accordion-more">
                        <i>more</i>
                    </span>
                </h2>
                <div class="accordion-content" :key="section.links[0].href">
                    <div class="container">
                        <div class="accordion-col">
                            <div class="accordion-illust">
                                <img :src="'images/seminar/accordion/illust'+section.id+'.jpg'" alt>
                            </div>
                            <div class="accordion-btns">
                                <a
                                    v-for="link in section.links"
                                    :href="link.href"
                                    :class="{'js-nav':btnClass(link.href)}"
                                    :key="link.href"
                                    target="_blank"
                                >{{link.text}}</a>
                            </div>
                        </div>
                        <div class="accordion-col">
                            <template v-for="content in section.contents">
                                <h3 v-if="content.title" :key="content.title">{{content.title}}</h3>
                                <h4 v-if="content.subtitle" :key="content.subtitle">{{content.subtitle}}</h4>
                                <div v-html="content.html" class="accordion-detail" :key="content.html"></div>
                            </template>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['accordion', 'index'],
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        }
    },
    watch: {
        isMobile: function (val) {
            if (val) {
                this.destroyAccordion();
            }
            else {
                this.initAccordion();
            }
        }
    },
    methods: {
        btnClass: function (href) {
            return href === '#contact';
        },
        slideToggle: function (event) {
            if (this.isMobile) {
                $(event.currentTarget).toggleClass('active').next().slideToggle();
            }
        },
        initAccordion: function () {
            $(this.$refs.accordion).find('h2').removeClass('active');
            $(this.$refs.accordion).accordion({
                collapsible: true,
                heightStyle: 'content',
                active: this.index === 1 ? 0 : false // 第一區塊預設展開
            });
        },
        destroyAccordion: function () {
            if (this.index === 1) {
                $(this.$refs.accordion).find('h2').eq(0).addClass('active');
            }
            $(this.$refs.accordion).accordion('destroy');
        },
    },
    mounted: function () {
        if (!this.isMobile) {
            this.initAccordion();
        }
        else {
            if (this.index === 1) {
                $(this.$refs.accordion).find('h2').eq(0).addClass('active');
            }
        }
    },
};
</script>
