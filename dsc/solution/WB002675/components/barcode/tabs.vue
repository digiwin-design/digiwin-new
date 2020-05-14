<template>
    <div class="tabs" :class="[status]">
        <div class="nav">
            <a href @click.prevent="status='before'">Before</a>
            <a href @click.prevent="status='after'">After</a>
        </div>
        <div v-show="status === 'before'" class="container">
            <p class="section1-col-title">商品種類這麼多，處理起來費時耗力！<br>這些問題你有沒有遇過？</p>
            <div class="section1-list before">
                <ul>
                    <li data-text="慢">
                        <p><strong>收貨</strong>每天進貨多又雜，系統打單太花時間，門口都大塞車！</p>
                    </li>
                    <li data-text="亂">
                        <p><strong>理貨</strong>每次理貨找貨出貨，都耗費心力，倉庫管理好沒效率！</p>
                    </li>
                    <li data-text="慢">
                        <p><strong>出貨</strong>有時候收到客戶的退貨通知，才發現又出錯貨了。</p>
                    </li>
                    <li data-text="錯">
                        <p><strong>盤點</strong>每次盤點總會花很多時間和人力、而且資料老是有誤差。</p>
                    </li>
                </ul>
            </div>
        </div>
        <div v-show="status === 'after'" class="container">
            <p class="section1-col-title">簡化程序，降低出錯率，快速提升效率</p>
            <div class="section1-list after">
                <ul>
                    <li data-text="快速">
                        <p><strong>收貨</strong>減少單據處理時間，提升時效和正確性。</p>
                    </li>
                    <li data-text="迅速">
                        <p><strong>理貨</strong>庫存異動自動轉撥，出庫入庫即時正確。</p>
                    </li>
                    <li data-text="神準">
                        <p><strong>出貨</strong>有強化理貨處理時效，大幅降低人員負荷。</p>
                    </li>
                    <li data-text="無誤">
                        <p><strong>盤點</strong>降低作業錯誤風險，庫存零盤差。</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            status: 'before'
        };
    }
}
</script>