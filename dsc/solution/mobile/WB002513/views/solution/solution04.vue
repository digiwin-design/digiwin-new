<template>
    <div class="solution04">
        <article class="section1 container">
            <section-title title="台灣電池產業的優劣勢分析"></section-title>
            <dl class="list">
                <template v-for="item in result.section1">
                    <dt :key="item.name">{{item.name}}</dt>
                    <dd :key="item.desc[0]">
                        <ul>
                            <li v-for="d in item.desc" :key="d">{{d}}</li>
                        </ul>
                    </dd>
                </template>
            </dl>
        </article>

        <article class="section2 container">
            <section-title title="管理重點"></section-title>
            <ul>
                <li v-for="item in result.section2" :key="item">{{item}}</li>
            </ul>
        </article>

        <article class="section3 container">
            <section-title title="解決方案"></section-title>
            <table class="table">
                <thead>
                    <tr>
                        <th>特色</th>
                        <th>解決方案</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in result.section3" :key="item.name">
                        <td>{{item.name}}</td>
                        <td>{{item.desc}}</td>
                    </tr>
                </tbody>
            </table>
        </article>

        <article class="section4 container">
            <section-title title="成功案例"></section-title>
            <case-list :list="result.caseList"></case-list>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'solution04',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.name === this.$route.name);
        }
    },
}
</script>
