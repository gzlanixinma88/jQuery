$(function () {
  $('.li_list').on('mouseenter',function () {
    var index=$('.li_list').index(this);
    $(".li_list ul").hide()
    $(".li_list:eq("+index+") ul").show();
})
  $('.li_list').on('mouseleave',function () {
    $(".li_list ul").hide()
  })
})