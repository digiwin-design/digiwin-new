
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
            codeSuces.innerHTML = "请输入验证码！"; 
            codeSuces.style.color = "#FF3E4B";  
            statu_k = 0;
            
        }         
        else if(inputCode != code ) { 
            createCode();
            document.getElementById("identCode").value = "";
            codeSuces.innerHTML = "验证码输入错误！@_@！";
            codeSuces.style.color = "#FF3E4B";
            statu_k = 0;
           
        }         
        else { 
              
            codeSuces.innerHTML = "验证成功！";
             codeSuces.style.color = "#43A7C9";
             statu_k = 1; 
        }             
    }  


    $(document).ready(function() {
        var chenkInfo = [];
        var chenk = new Array();
        var chenkStr ='';
        var timeAjaID;
        var s= [];
        var str = '';
 // 勾选其他复选框填写内容
        function otherSta() {
            var othChec = $('#othChecCont,.othChecCont');
            othChec.click(function(){
                if(othChec.is(':checked')) {
                    $('#contact-other').removeAttr("disabled"); 
                } else {
                    $('#contact-other').attr('disabled',true);
                    $('#contact-other').val('');
                }
            })     
        }
         otherSta();
      
         // 关闭感谢页
        $('.close,#goIndex').on( "click", function() {
            $('#thx').fadeOut();
             createCode();
        });

        function addAjax() {
            var thisName = $("#fromSource").text();//获取页面文宣编号
            var thisURL = decodeURI(window.location.href);
            var thisGaURL = decodeURI(window.location.pathname);
            var thisLoadLink = decodeURI($("#SourLoadLink").attr('href'));
            var thisTitle =  document.title;
            var comCont = $('#contact-company').val() || '';//获取公司名称
            var teleCont = $('#telephone').val() || '';//获取联系电话
            var exteCont = $('#extension').val() || '';
            var addrCont = $('#address').val() || '';//获取公司地址
            var contactPer = $('#contact_person').val() || '';//获取联系人姓名
            var emailCont = $('#contact-email').val() || '';//获取邮件地址
            var mobileCont =  $('#contact-mobile').val() || '';
            var departCont = $('#contact-dept').val() || '';//部门
            var jobTitCont =  $('#contact-job').val() || '';//职称
            var queryCont =   $('#contact-query').val() || '';//咨询内容
            var otherCont =  $('#contact-other').val() || '';//其他
            var tJSON = '{"doc_no": "' + thisName + '",' +
                            '"source": "' + thisTitle + '" ,' +
                            '"page_dir": "' + thisURL + '" ,' +
                            '"company": "' + comCont + '",' +
                            '"telephone": "' + teleCont + '",' +
                            '"extension": "' + exteCont + '",' +
                            '"address": "' + addrCont + '",' +
                            '"contact_person": "' + contactPer + '",' +
                            '"email": "' + emailCont+ '",' +
                            '"mobile": "' + mobileCont+ '",' +
                            '"department": "' +departCont + '",' +
                            '"job_title": "' + jobTitCont + '",' + 
                            '"req_sys": "' + chenkStr + '",' +
                            '"dm_ask": "' +  chenkInfo[0] + '",' +
                            '"get_file": "' + thisLoadLink + '" ,' +
                            '"query": "' + queryCont + '",' +
                            '"other": "' + otherCont + '",'+
                            '"country": "' + str+'"}';
             // console.log(tJSON);
            json = JSON.stringify(tJSON);
            $.support.cors = true;
            $.ajax({
                type: "POST",
                crossDomain: true,
                contentType: "application/json; charset=utf-8",
                url: "http://172.16.20.231/WE_S/Service.asmx/SaveData",//测试用
                dataType: "jsonp",
                jsonp: 'callback',
                jsonpCallback: 'getJson',       
                data: {data: tJSON},
                error: function(data)
                {
                    // alert(data.msg);
                },
                success: function(data)
                {
                    
                    console.log(data.msg);
                    console.log(data.farm);
                     // 根据是否勾选索取资料、公私田以及下载资料链接，显示感谢页内容
                    
                        $('.thxparg').html('');
                        $('.thxparg').html('我们会尽快处理您的e化需求');
                        $('.thxSourLoad1').hide();
                        $('#goIndex').removeClass('thxSourLoad2'); 
                    
                    $('#loading').fadeOut();
                    $('#thx').fadeIn();
                    chenk= [];
                    chenkStr ='';
                    chenkInfo = [];
                    // reset();
                   _hmt.push(['_trackPageview', '/virtual/form' + thisGaURL]); 
                   
                    ga('send', 'pageview', { 'page': '/pageview/' + thisGaURL, 'title': thisTitle });
                    
                    createCode();
                }
            })
        }
        
        $("#submit").click(function(){
            var emailError = false;
            var contactNotFinish = false;
            var choUlLiNotFinish = false;
            var demandNotFinish = false;
            var consContNotFinish = false;
            var tranNotFinish = false;
            //管理系统复选框的选择
            var chenkBox = $("input.contact-demand");
            for (var i = 0 ;i<chenkBox.length;i++) {
                if(chenkBox.get(i).checked) {
                    var value = chenkBox.get(i).value;
                    chenk.push(value)
                } else {
                    
                }
            }
            chenkStr =chenk.join("、"); 


            // 确认公司名称，联系电话、分机、公司地址、联络人、E-mail、行动电话是否少填写
            function fnContact() {
                $('.contact').removeClass('noInput');
                var requiLen = $('.required').length;

                var Telephone = $('#telephone'); 
                var contactTel = $('#telephone').val();

                requiLen > 0 ? requiLenFn() : contactTelFn() 
                function requiLenFn() {
                    for(var i = 0; i < $('.required').length; i++){
                        var contactValue = $('.required').eq(i).val();
                        var contactPlaceholder = $('.required').eq(i).attr('placeholder');
                        if (contactValue == '' || contactValue == contactPlaceholder ) {                  
                            contactNotFinish = true;
                            $('.required').eq(i).addClass('noInput');
                        }


                    } 
                }

                 function contactTelFn() {
                    if (contactTel.length > 0 && !validateTel(contactTel)) {
                        telephoneError = true;
                        contactNotFinish = true;
                        $('#telephone').addClass('noInput');
                    } else {
                         telephoneError = false;
                        $('#telephone').removeClass('noInput');
                    }
                } 

                }
            fnContact();
            
            // 确认需求内容复选框是否少填写
            function fnChenk () {
                var chenkContain = chenk.length;
                var requiredCheck = $('.demandCheck').hasClass('requiredCheck');
                if( requiredCheck == true){
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
           fnChenk ();

            // 确认咨询内容是否必填
            function fnConsult(){
                var Consulting = $('#contact-query').val();
                var requiredConsu = $('#contact-query').hasClass('requiredConsu');
                if (Consulting =='' && requiredConsu == true) {
                    consContNotFinish = true;
                    $('#contact-query').addClass('noInput');
                } else {
                    consContNotFinish = false;
                    $('#contact-query').removeClass('noInput');
                }
            }
            fnConsult();
           
            if($('#agree').is(':checked')) {
                if(statu_k == 1) {
                

                       if(!contactNotFinish  && !demandNotFinish && !consContNotFinish && !tranNotFinish){
                        $('#loading').fadeIn();
                        clearTimeout(timeAjaID);
                        timeAjaID = setTimeout(function(){
                            timeAjaID =  addAjax();
                        },2000)                    
                            
                    } else {
                        var txt=  "尚有联络资料未填写或者联系电话错误、请重新确认!";
                        window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
                        // alert('请输入正确的邮箱地址！')
                        chenk= [];
                        chenkStr ='';
                        chenkInfo = [];
                    }
                       
                } else {
                    var txt=  "请输入正确验证码！";
                    window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
                    // alert('请输入正确验证码！')
                    chenk= [];
                    chenkStr ='';
                    chenkInfo = [];
                }
            } else {
                var txt=  "请点选同意鼎捷软件隐私权，谢谢！";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
                // alert('请点选同意鼎新电脑隐私权，谢谢')
                chenk= [];
                chenkStr ='';
                chenkInfo = [];
            } 
        });

    });

