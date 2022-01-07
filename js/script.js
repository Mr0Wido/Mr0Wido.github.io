var width = 100;
var time = 4000;

$(".glow").animate({
  width: width + "%"
}, time);

$(".underglow").animate({
  width: width + "%"
}, time);

function barWidth() {
    var barWidth = $(".track").width();
    $(".front").css("width", barWidth);
}
barWidth();
