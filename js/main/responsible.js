/**
 * Created by kwangjeong on 2017. 1. 13..
 */
window.onresize = function(event) {
    var parent_height = $(window).height();
    var parent_width = $(window).width();

    if(parent_width < 800) {
        $('.div-main-banner').hide();
    }else {
        $('.div-main-banner').show();
        var banner_image_width = parent_width - 400;
        $('.div-main-banner img').css({'width':banner_image_width});
    }

};