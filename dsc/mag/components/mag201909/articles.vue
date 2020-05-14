<template>
    <div class="articles">
        <section
            :id="'section3-' + (sectionIdx + 1)"
            :style="'background-image:url(images/mag201909/section3-' + (sectionIdx + 1) + '-header.png)'"
            v-for="(section, sectionIdx) in content"
            :key="section.header.title"
        >
            <header>
                <div class="container">
                    <h1>{{section.header.title}}</h1>
                    <p v-html="section.header.desc"></p>
                </div>
            </header>
            <div class="list">
                <ul class="container">
                    <li v-for="(list, listIdx) in section.list" :key="list.title">
                        <a :href="list.link" target="_blank">
                            <div class="list-img">
                                <img
                                    :src="'images/mag201909/section3-' + (sectionIdx + 1) + '-article' + (listIdx + 1) + '.jpg'"
                                />
                            </div>
                            <div class="list-text">
                                <p class="list-subtitle" v-html="list.subtitle"></p>
                                <p class="list-title" v-html="list.title"></p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
module.exports = {
    name: 'articles',
    props: {
        content: {
            type: Array,
            required: true
        }
    },
    computed: {
        sections: function () {
            return this.$el.querySelectorAll('section');
        }
    },
    methods: {
        scrollHandler: _.throttle(function () {
            let windowBottom = window.pageYOffset + window.innerHeight;
            this.sections.forEach(function (section) {
                let sectionPos = section.getBoundingClientRect().top + window.pageYOffset;
                if (sectionPos < windowBottom) {
                    section.classList.add('active');
                }
                else {
                    section.classList.remove('active');
                }
            });
        }, 100)
    },
    mounted: function () {
        window.addEventListener('scroll', this.scrollHandler);
    },
}
</script>