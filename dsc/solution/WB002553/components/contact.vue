<template>
    <div>
        <div id="contact">
            <div id="contactTxt" class="clearfix">
                <h2>資料索取與諮詢</h2>
                <div id="info">
                    <p>請填寫下方資料便於盡快為您服務。<br>若您需要立即的支援與服務，請直撥免付費專線 <span class="highLight">0800-888-162</span>，謝謝！</p>
                    <ul>
                        <li class="line">
                            <a href="https://acho.tw/acho/f/aB6q9" target="_blank"></a>
                        </li>
                        <li class="mail">
                            <a href="mailto:marketing01@digiwin.com"></a>
                        </li>
                        <li class="fb">
                            <a href="https://www.facebook.com/DSCmain" target="_blank"></a>
                        </li>
                    </ul>
                </div>
                <div id="formBlock" class="form">
                    <a id="fromSource" href="javascript:;"></a>
                    <div id="contactInput" class="clearfix">
                        <span class="hideLabel ">*公司名稱：</span><input type="text" placeholder="*完整公司名稱" name="contact-company" id="contact-company" class="contact required"><span class="hideLabel perLabel">*姓名：</span><input type="text" placeholder="*姓名" name="contact_person" id="contact_person" class="contact required"><span class="hideLabel evenLable">*聯絡電話：</span><input type="text" placeholder="*聯絡電話" name="telephone" id="telephone" class="contact required end"><span class="hideLabel evenLable">*E-mail：</span>
                        <input type="text" placeholder="*E-mail" name="contact-email" id="contact-email" class="contact required"><span class="hideLabel">*部門：</span><input type="text" placeholder="*部門" name="contact-dept" id="contact-dept" class="contact required"><span class="hideLabel">*職稱：</span><input type="text" placeholder="*職稱" name="contact-job" id="contact-job" class="contact required end">
                    </div>
                    <div class="consult-cont">
                        <p class="hideLabel">請在這裡描述您的需求：</p>
                        <textarea id="contact-query" cols='40' placeholder="請在這裡描述您的需求(500字以內)：" rows='4' class="" maxlength="500"></textarea>
                    </div>
                    <div v-if="multiple" class="demandCheck clearfix">
                        <label for="contact-demand01"><input name="contact-demand" class="contact-demand" id="contact-demand01" type="checkbox" value="預算管控資訊" /> 預算管控資訊</label>
                        <label for="contact-demand02"><input name="contact-demand" class="contact-demand" id="contact-demand02" type="checkbox" value="準確成本估算" /> 準確成本估算</label>
                        <label for="contact-demand03"><input name="contact-demand" class="contact-demand" id="contact-demand03" type="checkbox" value="確實掌握工程進度" /> 確實掌握工程進度</label>
                        <label for="contact-demand04"> <input name="contact-demand" class="contact-demand" id="contact-demand04" type="checkbox" value="估驗計價及請款" /> 估驗計價及請款</label>
                        <label for="contact-demand05"><input name="contact-demand" class="contact-demand" id="contact-demand05" type="checkbox" value="帳務結算及分析" /> 帳務結算及分析</label>
                        <label for="contact-demand06"><input name="contact-demand" class="contact-demand" id="contact-demand06" type="checkbox" value="發包及採購流程" /> 發包及採購流程</label>
                        <label for="contact-demand07"><input name="contact-demand" class="contact-demand" id="contact-demand07" type="checkbox" value="合約管控" /> 合約管控</label>
                        <label for="contact-demand08"><input name="contact-demand" class="contact-demand" id="contact-demand08" type="checkbox" value="其他" /> 其他</label>
                    </div>
                    <div v-else class="inforCheck">
                        <label for="dm_ask"> <input name="information" class="information" id="dm_ask" type="checkbox" value="資料索取">索取食品業相關資料</label> 
                    </div>
                    <hr>
                    <div class="verifica">
                        <span class="veriSpan">＊請輸入驗證碼：</span>
                        <span class="veriSpan-m">驗證碼:</span>
                        <input type="text" name="" id="identCode" class="identCode" onblur="validate()">
                        <input type="button" id="vericodePic" />
                        <span class="renovCode" onclick="createCode()"></span>
                        <span id="codeSuces"></span>
                    </div>
                    <input type="button" id="submit" value="送　　出">
                    <label for="agree" class="checAgree"><input type="checkbox" name="agree" value="" id="agree" checked="">
                        我同意接受鼎新電腦<a href="/tw/portal/page/index/id/1202.html" target="_blank">隱私權聲明</a></label>
                </div>
            </div>
        </div>

        <!-- loading -->
        <div id="loading">
            <p><i></i>資料提交中，請稍後</p>
        </div>

        <!-- thx page -->
        <div id="thx">
            <div id="thxContent">
                <div class="close">X</div>
                <p class="title">資料己送出</p>
                <p class="thxparg"></p>
                <p class="suprtCall">
                    <span>如需要立即的支援與服務，</span>
                    <span>請直撥免付費專線 0800-888-162，謝謝！</span>
                </p>
                <p class="thxSourLoad1">
                    <a id="SourLoadLink" href="" target="_blank">資料下載</a>
                </p>
                <p id="goIndex">
                    <a href="javascript:;">繼續瀏覽網站</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['multiple', 'source'],
    mounted: function () {
        $.getScript('/tw/dsc/js/Eform/form.js').done(function(){createCode()});

        window.addEventListener('load', function () {
            if (location.hash === '#contact') {
                let offset = $('.page-submenu').outerHeight();
                let targetPos = $('#contact').offset().top;
                let finalPos = offset ? targetPos - offset : targetPos;
                $('html, body').animate({ scrollTop: finalPos });
            }
        });
    },
}
</script>

<style src="/tw/dsc/css/Eform/form-rwd.css"></style>