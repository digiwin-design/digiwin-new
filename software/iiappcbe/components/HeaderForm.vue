<template>
    <div class="headForm">
        <p class="headForm-title">立即申请试用</p>
        <ul class="headForm-fields">
            <li>
                <input type="text" v-model.lazy="company" :class="{'is-invalid':companyErr}">
                <i v-if="!company">公司名称</i>
            </li>
            <li>
                <input type="text" v-model.lazy="person" :class="{'is-invalid':personErr}">
                <i v-if="!person">联系人</i>
            </li>
            <li>
                <input type="text" v-model.lazy="phoneNum" :class="{'is-invalid':phoneNumErr}">
                <i v-if="!phoneNum">联系电话</i>
            </li>
        </ul>
        <a href @click.prevent="submit" class="headForm-submit">立即申请</a>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            company: null,
            companyErr: false,
            person: null,
            personErr: false,
            phoneNum: null,
            phoneNumErr: false,
        }
    },
    computed: {
        testResult: function () {
            return Boolean(this.company) && !this.companyErr && Boolean(this.person) && !this.personErr && Boolean(this.phoneNum) && !this.phoneNumErr;
        }
    },
    watch: {
        company: function () {
            this.companyErr = !this.company.length;
        },
        person: function () {
            this.personErr = !this.person.length;
        },
        phoneNum: function () {
            this.phoneNumErr = !(/^\d{8,}$/.test(this.phoneNum.trim()));
        },
    },
    methods: {
        submit: function () {
            if (this.testResult) {
                $('#loading').fadeIn();
                let query = {
                    doc_no: document.querySelector('#fromSource').innerText,
                    source: document.title,
                    page_dir: decodeURI(location.href),
                    company: this.company.trim(),
                    telephone: '',
                    extension: '',
                    address: '',
                    contact_person: this.person.trim(),
                    email: '',
                    mobile: this.phoneNum.trim(),
                    department: '',
                    job_title: '',
                    req_sys: '',
                    dm_ask: '',
                    get_file: '',
                    query: '',
                    other: '',
                    country: '',
                };
                $.ajax({
                    type: 'POST',
                    crossDomain: true,
                    contentType: 'application/json; charset=utf-8',
                    url: 'https://acp2.digiwin.com/WS_E/Service.asmx/SaveData',
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    jsonpCallback: 'getJson',
                    data: {
                        data: JSON.stringify(query)
                    },
                    success: function (data) {
                        $('#loading').fadeOut();
                        $('#thx').fadeIn();
                    }
                });
            }
            else {
                let msg = "尚有联络资料未填写或电话格式错误，请重新确认。";
                window.wxc.xcConfirm(msg, window.wxc.xcConfirm.typeEnum.info);
            }
        },
    },
}
</script>