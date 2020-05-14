<template>
    <div class="caseItem">
        <div class="caseItem-illust" :style="'background-image:url(images/case/' + content.fileName + ')'"></div>
        <div class="caseItem-content">
            <span>{{content.category}}</span>
            <h2>{{content.company}}</h2>
            <vue-text-dot :line="6" :msg="content.description"></vue-text-dot>
            <a :href="content.url" target="_blank">繼續閱讀</a>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'CaseItem',
    props: {
        content: {
            type: Object
        }
    },
}
</script>