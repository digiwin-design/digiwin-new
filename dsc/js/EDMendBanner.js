/*2016/06/02-判斷EDM是否過期，如果過期則顯示下方活動結束區塊*/
$(function(){
  var $endBanner = $('#end_banner');
  var endDateString = $endBanner.data('endDate');
  var endIndustry = $endBanner.data('linkPage');
  var currDate = Date.parse((new Date()).toDateString());
  var endDate = Date.parse(endDateString);
  
  $endBanner.hide();
  
  if (currDate > endDate) {
    $.ajax({
      url: 'http://www.digiwin.com/tw/dsc/js/onePageLink.xml',
      type: 'GET',
      dataType: 'xml',
      timeout: 1000,
      error: function(xml){
        console.log('404 error');
      },
      success: function(xml){
        var pageLink = $(xml).find('row[pageNum="' + endIndustry + '"]').attr('pageLink');
        if(pageLink !== '' && pageLink !== undefined){
          pageLink = pageLink;
        }else{
          pageLink = "http://www.digiwin.com/solution.htm#contact";
        }
        $endBanner.children('a').attr("href", pageLink);
        $endBanner.show();
      }
    })
  }else {
    $endBanner.hide();
  }
  // console.log(endIndustry,endDateString, currDate, endDate);
})