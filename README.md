# jQuery
###jquery项目
    到位的导航和轮播
    轮播图图片太大，会使图片变形
###二级菜单的实现
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
###首页完成
    二级菜单图标的显示与隐藏
     var height = $('.li_list').height()
     var ImgOffsetHeight = height*index
     $('.Img').css('top',(ImgOffsetHeight+15))
###服务商子页面云家政写到导航 
