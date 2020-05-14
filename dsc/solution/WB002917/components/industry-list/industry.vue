<template>
    <ul class="industryList">
        <li v-for="item in list" :key="item.link">
            <a :href="item.link" target="_blank">{{item.text}}</a>
        </li>
    </ul>
</template>

<script>
module.exports = {
    computed: {
        list: function() {
            return [
                {
                    "text": "製造業",
                    "link": "/tw/dsc/solution/WB002783/WB00278301.html"
                },
                {
                    "text": "批發、零售流通產業",
                    "link": "/tw/dsc/solution/WB002675/WB00267501.html"
                },
                {
                    "text": "電子、光電與電力產業",
                    "link": "/tw/dsc/solution/WB002513/WB00251301.html"
                },
                {
                    "text": "機械產業",
                    "link": "/tw/dsc/solution/WB002476/WB00247601.html"
                },
                {
                    "text": "網購業",
                    "link": "/tw/dsc/solution/WB002595/WB00259501.html"
                },
                {
                    "text": "醫材業",
                    "link": "/tw/dsc/solution/WB002785/WB00278501.html"
                },
                {
                    "text": "醫美",
                    "link": "/tw/dsc/solution/WB002850/WB00285001.html"
                },
                {
                    "text": "生技",
                    "link": "/tw/dsc/solution/WB002543/WB00254301.html"
                },
                {
                    "text": "交通業",
                    "link": "/tw/dsc/solution/WB002811/WB00281101.html"
                },
                {
                    "text": "美妝保養業",
                    "link": "/tw/dsc/solution/WB002711/WB00271101.html"
                },
                {
                    "text": "食品產業",
                    "link": "/tw/dsc/solution/WB002553/WB00255301.html"
                },
                {
                    "text": "化學業",
                    "link": "/tw/solution/ListDetail5945.html"
                },
                {
                    "text": "塑橡膠業",
                    "link": "/tw/dsc/solution/WB002554/WB00255401.html"
                },
                {
                    "text": "金屬",
                    "link": "/tw/dsc/solution/WB002953/WB00295301.html"
                },
                {
                    "text": "紡織成衣",
                    "link": "/tw/solution/ListDetail5983.html"
                },
                {
                    "text": "設備代理",
                    "link": "/tw/dsc/solution/WB002801/WB00280101.html"
                },
                {
                    "text": "休閒娛樂",
                    "link": "/tw/solution/ListDetail5967.html"
                },
                {
                    "text": "接案管理",
                    "link": "/tw/dsc/solution/WB002752/WB00275201.html"
                },
                {
                    "text": "電子發票",
                    "link": "/tw/dsc/solution/WB002742/WB00274201.html"
                },
                {
                    "text": "工程業",
                    "link": "/tw/dsc/solution/WB002899/WB00289901.html"
                }
            ];
        }
    }
};
</script>

<style src="components/industry-list/industry.css"></style>
