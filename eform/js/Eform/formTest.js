
    var code ;  
    var codeSuces = document.getElementById("codeSuces");
    var statu_k = -1;
    //产生验证码 
    window.onload =  createCode;
    function createCode(){  
        codeSuces.innerHTML = "";
        statu_k = -1
         code = "";
         document.getElementById("identCode").value = "";  
         var codeLength = 4; 
         var checkCode = document.getElementById("vericodePic"); 
         var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
         'S','T','U','V','W','X','Y','Z'); 
         for(var i = 0; i < codeLength; i++) {
            var index = Math.floor(Math.random()*36);
            code += random[index];
        }  
        checkCode.value = code;     
    } 

//校验验证码  
    function validate(){  
        var inputCode = document.getElementById("identCode").value.toUpperCase(); 
        if(inputCode.length <= 0) {   
            codeSuces.innerHTML = "請輸入驗證碼"; 
            // codeSuces.style.color = "#FF3E4B";  
            statu_k = 0;            
        }         
        else if(inputCode != code ) { 
            createCode();
            document.getElementById("identCode").value = "";
            codeSuces.innerHTML = "驗證碼輸入錯誤，請重新輸入。";
            // codeSuces.style.color = "#FF3E4B";
            statu_k = 0;
           
        }         
        else { 
            codeSuces.innerHTML = "";
            // codeSuces.innerHTML = "驗證成功！";
            // codeSuces.style.color = "#43A7C9";
            statu_k = 1; 
        }             
    }


    $(document).ready(function () {
        var chenkInfo = [];
        var chenk = new Array();
        var chenkStr = '';
        var timeAjaID;
        var s = [];
        var str = '';

        function validateEmail($email) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test($email);
        }


        // 勾选其他复选框填写内容
        function otherSta() {
            var othChec = $('#othChecCont,.othChecCont');
            othChec.click(function () {
                if (othChec.is(':checked')) {
                    $('#contact-other').removeAttr("disabled");
                } else {
                    $('#contact-other').attr('disabled', true);
                    $('#contact-other').val('');
                }
            })
        }
        otherSta();
        //跨国工厂选择
        function hasCountCho() {
            $('.hascoLa').click(function () {
                $('.transnat').show();
                s = [];
                $('.choNySpan').empty();
            })
            CountCho();
        }
        hasCountCho();
        function noCount() {
            $('.nocoLa').click(function () {
                $('.listCheck input').removeAttr('checked');
                s = [];
                str = '';
                $('.choNySpan').empty();
            })
        }
        noCount();
        //获取跨国国家
        function CountCho() {
            $('.toSerBtn').bind('click', function () {
                var choCo = $('.listCheck input');
                for (var i = 0; i < choCo.length; i++) {
                    (function (arg) {
                        if (choCo.get(i).checked) {
                            s.push(choCo[i].value);
                        }
                    })(i)
                }
                if (s.length == 0) {
                    alert('請勾選跨國工廠營運所在地，若無符合地區請勾選「其他」；若無跨國工廠營運請點擊「X」。')
                    s = [];
                    str = '';
                    $('.choNySpan').empty();
                } else {
                    $('.transnat').hide();
                    str = s.join(",");
                    $('.choNySpan').append('已選擇:' + '<span>' + str + '</span>')
                }

            })
            $('.closeChose').bind('click', function () {
                s = [];
                str = '';
                $('.choNySpan').empty();
                $('.transnat').hide();
                $('.choNy input').removeAttr('checked');
            })
        }

        // 关闭感谢页
        $('.close,#goIndex').on("click", function () {
            $('#thx').fadeOut();
            createCode();
        });

        function addAjax() {
            var thisName = $("#fromSource").text();
            var thisURL = decodeURI(window.location.href);
            var thisGaURL = decodeURI(window.location.pathname);
            var thisLoadLink = decodeURI($("#SourLoadLink").attr('href'));
            var thisTitle = document.title;
            var comCont = $('#contact-company').val() || '';
            var teleCont = $('#telephone').val() || '';
            var exteCont = $('#extension').val() || '';
            var addrCont = $('#address').val() || '';
            var contactPer = $('#contact_person').val() || '';
            var emailCont = $('#contact-email').val() || '';
            var mobileCont = $('#contact-mobile').val() || '';
            var departCont = $('#contact-dept').val() || '';
            var jobTitCont = $('#contact-job').val() || '';
            var queryCont = $('#contact-query').val() || '';
            var otherCont = $('#contact-other').val() || '';

            var tJSON = '{"doc_no": "' + thisName + '",' +
                            '"source": "' + thisTitle + '" ,' +
                            '"page_dir": "' + thisURL + '" ,' +
                            '"company": "' + comCont + '",' +
                            '"telephone": "' + teleCont + '",' +
                            '"extension": "' + exteCont + '",' +
                            '"address": "' + addrCont + '",' +
                            '"contact_person": "' + contactPer + '",' +
                            '"email": "' + emailCont + '",' +
                            '"mobile": "' + mobileCont + '",' +
                            '"department": "' + departCont + '",' +
                            '"job_title": "' + jobTitCont + '",' +
                            '"req_sys": "' + chenkStr + '",' +
                            '"dm_ask": "' + chenkInfo[0] + '",' +
                            '"get_file": "' + thisLoadLink + '" ,' +
                            '"query": "' + queryCont + '",' +
                            '"other": "' + otherCont + '",' +
                            '"country": "' + str + '"}';
            console.log(tJSON);
            $.support.cors = true;
            $.ajax({
                type: "POST",
                //crossDomain: true,
                //contentType: "application/json; charset=utf-8",
                url: "/tw/msg.php",
                dataType: "json",
                data: { data: tJSON },
                error: function (data) {
                    alert(data.msg);
                },
                success: function (data) {
                    console.log(data.msg);
                    console.log(data.farm);
                    // 根据是否勾选索取资料、公私田以及下载资料链接，显示感谢页内容
                    if (chenkInfo[0] == "N" || chenkInfo[0] == "undefined" || chenkInfo[0] == "") {
                        $('.thxparg').html('');
                        $('.thxparg').html('我們會盡快處理您的e化需求');
                        $('.thxSourLoad1').hide();
                        $('#goIndex').removeClass('thxSourLoad2');
                    } else {
                        var SourLoadLink = $('#SourLoadLink').attr('href');
                        if (SourLoadLink == "" || data.farm == "N") {
                            $('.thxparg').html('');
                            $('.thxparg').html('您所索取的資料，<br />將在3個工作天內寄發至您指定的 Email');
                            $('.thxSourLoad1').hide();
                            $('#goIndex').removeClass('thxSourLoad2');
                        } else if (data.farm == "Y" && SourLoadLink != "") {
                            $('.thxparg').html('');
                            $('.thxparg').html('我們會盡快處理您的 e化需求');
                            $('.thxSourLoad1').show();
                            $('#goIndex').addClass('thxSourLoad2');
                        }
                    }
                    $('#loading').fadeOut();
                    $('#thx').fadeIn();
                    chenk = [];
                    chenkStr = '';
                    chenkInfo = [];
                    // reset();
                    createCode();
					dataLayer.push({
					     'event':'FormSubmission',
                         'formTitle': thisTitle,
                         'formURL': thisGaURL,
                                  });
								  
                    //document.location.hash = '#contactSuccess'; //送出網址加錨點
                }
            })
        }

        $("#submit").click(function () {
            var emailError = false;
            var contactNotFinish = false;
            var choUlLiNotFinish = false;
            var demandNotFinish = false;
            var consContNotFinish = false;
            var tranNotFinish = false;
            //管理系统复选框的选择
            var chenkBox = $("input.contact-demand");
            for (var i = 0; i < chenkBox.length; i++) {
                if (chenkBox.get(i).checked) {
                    var value = chenkBox.get(i).value;
                    chenk.push(value)
                } else {

                }
            }
            chenkStr = chenk.join("、");

            //是否获取资料
            var dm_ask = $("#dm_ask");

            if (dm_ask.length == 0) {
                chenkInfo[0] = '';
            } else {
                if (dm_ask.is(':checked')) {
                    chenkInfo.push("Y");
                } else {
                    chenkInfo.push("N");
                }
            }
            // 确认公司名称，联系电话、分机、公司地址、联络人、E-mail、行动电话是否少填写
            function fnContact() {
                $('.contact').removeClass('noInput');
                var requiLen = $('.required').length;
                var Email = $('#contact-email');
                var contactEmai = $('#contact-email').val();

                requiLen > 0 ? requiLenFn() : contactEmaiFn()
                function requiLenFn() {
                    for (var i = 0; i < $('.required').length; i++) {
                        var contactValue = $('.required').eq(i).val();
                        var contactPlaceholder = $('.required').eq(i).attr('placeholder');
                        if (contactValue == '' || contactValue == contactPlaceholder) {
                            contactNotFinish = true;
                            $('.required').eq(i).addClass('noInput');
                        }

                        Email.hasClass("required") == true ? contactReEmai() : contactEmaiFn();
                    }
                }

                function contactEmaiFn() {
                    if (contactEmai.length > 0 && !validateEmail(contactEmai)) {
                        emailError = true;
                        contactNotFinish = true;
                        $('#contact-email').addClass('noInput');
                    } else {
                        emailError = false;
                        $('#contact-email').removeClass('noInput');
                    }
                }
                function contactReEmai() {
                    if (contactEmai.length == 0) {
                        contactNotFinish = true;
                        emailError = true;
                        $('#contact-email').addClass('noInput');
                    } else {
                        if (!validateEmail(contactEmai)) {
                            contactNotFinish = true;
                            emailError = true;
                            $('#contact-email').addClass('noInput');
                        } else {
                            emailError = false;
                        }
                    }
                }
            }
            fnContact();


            // 确认需求内容复选框是否少填写
            function fnChenk() {
                var chenkContain = chenk.length;
                var requiredCheck = $('.demandCheck').hasClass('requiredCheck');
                if (requiredCheck == true) {
                    if (chenkContain == 0) {
                        demandNotFinish = true;
                        $('.demandCheck').addClass('noInput');
                    } else {
                        demandNotFinish = false
                        $('.demandCheck').removeClass('noInput');
                    }
                } else {
                    demandNotFinish = false
                    $('.demandCheck').removeClass('noInput');
                }

                if ($('#othChecCont').is(':checked')) {
                    if ($('#contact-other').val() == '') {
                        demandNotFinish = true;
                        $('#contact-other').addClass('noInput');
                    } else {
                        demandNotFinish = false
                        $('#contact-other').removeClass('noInput');
                    }
                };
            }
            fnChenk();

            // 确认咨询内容是否必填
            function fnConsult() {
                var Consulting = $('#contact-query').val();
                var requiredConsu = $('#contact-query').hasClass('requiredConsu');
                if (Consulting == '' && requiredConsu == true) {
                    consContNotFinish = true;
                    $('#contact-query').addClass('noInput');
                } else {
                    consContNotFinish = false;
                    $('#contact-query').removeClass('noInput');
                }
            }
            fnConsult();
            //确认跨国公司是否必选
            function transChoFun() {
                var choCountry = $('.choNy input');
                var requiredTran = $('.requiredTran').hasClass('requiredTran');
                if (requiredTran == true) {
                    for (var i = 0; i < choCountry.length; i++) {
                        if (choCountry.eq(i).is(":checked")) {
                            tranNotFinish = false;
                            choCountry.removeClass('noInput');
                            return;
                        } else {
                            tranNotFinish = true;
                            choCountry.addClass('noInput');
                        }
                    }
                } else {
                    tranNotFinish = false;
                    choCountry.removeClass('noInput');
                }
            }
            transChoFun();
            if ($('#agree').is(':checked')) {
                if (statu_k == 1) {

                    if (!emailError && !contactNotFinish && !demandNotFinish && !consContNotFinish && !tranNotFinish) {
                        $('#loading').fadeIn();
                        clearTimeout(timeAjaID);
                        timeAjaID = setTimeout(function () {
                            timeAjaID = addAjax();
                        }, 2000)

                    } else {
                        var txt = "尚有聯絡資料未填寫或Email格式錯誤，請重新確認。";
                        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
                        // alert('请输入正确的邮箱地址！')
                        chenk = [];
                        chenkStr = '';
                        chenkInfo = [];
                    }

                } else {
                    var txt = "請輸入正確的驗證碼。";
                    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
                    // alert('请输入正确验证码！')
                    chenk = [];
                    chenkStr = '';
                    chenkInfo = [];
                }
            } else {
                var txt = "請點選同意鼎新電腦隱私權聲明，謝謝。";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
                // alert('请点选同意鼎新电脑隐私权，谢谢')
                chenk = [];
                chenkStr = '';
                chenkInfo = [];
            }
        });

    });

