<template>
    <el-collapse v-model="activeNames" class="collapse">
        <el-collapse-item :name="idx + 1" v-for="(item, idx) in items" :key="item.title" :class="`item${idx + 1}`">
            <!-- title -->
            <template slot="title">
                <h2>{{item.title}}</h2>
            </template>

            <!-- content -->
            <div class="content container">
                <h3>{{item.content.title}}</h3>
                <p>{{item.content.desc}}</p>
                <div class="graph">
                    <div class="graph__quote" v-for="quote in item.content.quotes" :key="quote" v-html="quote"></div>
                    <img :src="`images/issue02/collapse${idx === 3 ? 2 : 1}.png`">
                </div>
                <h4>我希望</h4>
                <p>{{item.content.wish}}</p>
                <a href="#contact" class="js-nav">索取解決方案</a>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
module.exports = {
    name: 'Collapse',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            activeNames: 1
        };
    },
}
</script>

<style scoped>
.el-icon-arrow-right::before {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAALVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////BHg4sAAAADXRSTlMA4qxbVPrdiwcGivPXUMzG+gAAAGhJREFUCNdjYGDgNEoNU57AAAJud4EgBcRivwsGBUBmLYR5nYGBBUjdewskHBgaYUwJBlsY8zKDLox5iUEWxrzIEHv3HRjcvYrMRChA1oYwDMkKZIsZ1kKccwvoMi64IxFOh3hoD8hDAO3egudkhIJfAAAAAElFTkSuQmCC');
    background-position: 50%;
    background-repeat: no-repeat;
    content: '';
}
.el-icon-arrow-right.is-active::before {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAtUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///8EeDiwAAAANdFJOUwDirFtU+t2LBwaK89dQzMb6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAY0lEQVQY02NgYOAwEg1UbmAAAce7QCACYnHdBYMCIHMthHmdgYEFSN17CyQcGKbBmJkMtjDmZQZdGPMSQy6MeY0hFsa8yrAXwTyLUICkDckwJCuQLGaohTsH2ZFITod6iIEBAA8lgpe1L9ySAAAAAElFTkSuQmCC');
}
.el-collapse-item__header {
    padding-right: 15px;
    padding-left: 15px;
    height: 84px;
    background-color: #285a99;
    color: #fff;
    font-size: 24px;
    line-height: 30px;
}
@media (min-width: 361px) {
    .el-collapse-item__header {
        padding-right: 20px;
        padding-left: 20px;
    }
}
.el-collapse-item__header h2 {
    font-weight: bold;
}
.el-collapse-item__arrow {
    margin-right: 6px;
}
.el-collapse-item__content {
    padding: 2em 0;
    background-color: #e0dbd9;
}
</style>