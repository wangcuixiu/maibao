
//新增 首页



$('.flexslider').flexslider({
    directionNav: true,
    pauseOnAction: false
});
$('.flex-control-nav a').html('');

$(document).ready(function () {
    $('.swiper-container').each(function () {
        var $page = $(this).find('.bx-pager');
        $(this).find('.bxslider').bxSlider({
            auto: true,
            pagerCustom: $page,
            controls: false,
            preloadImages: 'all'
        });
    });

});


// 左边侧栏滚动效果
var floor1 = $(".floor-1").offset().top;
var floor2 = $(".floor-2").offset().top;
var floor3 = $(".floor-3").offset().top;
var floor4 = $(".floor-4").offset().top;
var floor5 = $(".floor-5").offset().top;
var floor6 = $(".floor-6").offset().top;
$(window).scroll(function () {
    var w_height = $(this).scrollTop() + 300;//优化体验

    if (w_height > floor1) {
        $(".menu-lift-wrap .menu-lift").show();

        if (w_height > floor6) {
            $(".menu-lift .floor6").addClass("on").siblings().removeClass("on");
        } else if (w_height > floor5) {
            $(".menu-lift .floor5").addClass("on").siblings().removeClass("on");
        } else if (w_height > floor4) {
            $(".menu-lift .floor4").addClass("on").siblings().removeClass("on");
        } else if (w_height > floor3) {
            $(".menu-lift .floor3").addClass("on").siblings().removeClass("on");
        } else if (w_height > floor2) {
            $(".menu-lift .floor2").addClass("on").siblings().removeClass("on");
        } else {
            $(".menu-lift .floor1").addClass("on").siblings().removeClass("on");
        }

    } else {
        $(".menu-lift-wrap .menu-lift").hide();
    }

})

//侧边栏点击 跳转
$(".menu-lift a").click(function () {
    var stop = $($(this).data("target")).offset().top;
    $("html,body").scrollTop(stop);
})


$(".floor-6 .mod-item").hover(function () {
    $(this).find(".pic-code").show();
    $(this).find(".pic-code").show();
    var piccode = $(this).find(".pic-code");

    var $piccode = $(piccode);
    if ($piccode.attr('isload') == "1")
        return;
    //ajax请求

    var url = "http://m.mbaobao.com/Product/product-detail?proSkuId=" + $piccode.attr('data-id') + "&productId=" + $piccode.attr('data-groupid');
    $piccode.find("#qrcodeimage").qrcode({ correctLevel: 0, width: 150, height: 150, text: url });
    $piccode.attr('isload', "1");

}, function () {
    $(this).find(".pic-code").hide();
});


