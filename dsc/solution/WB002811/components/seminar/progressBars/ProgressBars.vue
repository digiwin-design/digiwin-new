<template>
    <div ref="progressBars" class="progressBars">
        <template v-for="(bar, barIdx) in progressBars">
            <h2 :key="bar.subtitle">{{barIdx+1}}.{{bar.subtitle}}</h2>
            <ul class="js-barGroup" :key="bar.items[0].text">
                <li v-for="(item, itemIdx) in bar.items" :class="{highest:item.highest}" :key="item.text">
                    <div class="text">
                        <p>{{item.text}}</p>
                    </div>
                    <div class="value">
                        <div
                            :id="'bar'+(barIdx+1)+'-'+(itemIdx+1)"
                            class="bar js-bar disabled"
                            :data-percentage="item.percentage"
                            :style="{width:setBarWidth(item.percentage)}"
                        >0</div>
                    </div>
                </li>
            </ul>
        </template>
    </div>
</template>

<script src="components/seminar/progressBars/progressBars.min.js"></script>
