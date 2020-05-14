<template>
    <div ref="accordion" class="accordion">
        <template v-for="(item, idx) in accordion">
            <h2 v-on:click="slideToggle" :key="item.title">
                {{item.title}}
                <span>
                    <i>more</i>
                </span>
            </h2>
            <div class="accordion-content" :key="item.text">
                <div class="container">
                    <div class="accordion-col">
                        <div class="accordion-illust">
                            <img :src="item.imgSrc" alt>
                        </div>
                        <div class="accordion-btns">
                            <a
                                v-for="link in item.links"
                                :href="link.href"
                                :class="{'js-nav':btnClass(link.href)}"
                                :key="link.href"
                                target="_blank"
                            >{{link.text}}</a>
                        </div>
                    </div>
                    <div class="accordion-col" :class="'text'+(idx+1)">
                        <template v-for="content in item.contents">
                            <h3 v-if="content.title" :key="content.title">{{content.title}}</h3>
                            <h4 v-if="content.subtitle" :key="content.subtitle">{{content.subtitle}}</h4>
                            <div v-html="content.html" class="accordion-detail" :key="content.html"></div>
                        </template>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script src="components/seminar/accordion/accordion.min.js"></script>
