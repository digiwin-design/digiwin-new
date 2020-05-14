// JavaScript Documentvar $adBanner = $('#adBanner');
$(function(){
var $adBanner = $('#adBanner');
 var endDateString = $adBanner.data('endDate');
 var currDate = Date.parse((new Date()).toDateString());
 var endDate = Date.parse(endDateString);

 if (currDate > endDate) {
  $adBanner.hide();
 }
 })