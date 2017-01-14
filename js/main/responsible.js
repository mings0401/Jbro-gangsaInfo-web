/**
 * Created by kwangjeong on 2017. 1. 13..
 */
window.onresize = function(event) {
    init();
};

function init() {
    var parent_height = $(window).height();
    var parent_width = $(window).width();

    if(parent_width < 700) {
        $('.div-main-banner').hide();


    }else {
        var banner_image_width;

        $('.div-main-banner').show();

        if(parent_width - 400 < 790) {
            banner_image_width = parent_width - 400;
        }else {
            banner_image_width = 780;
        }



        $('.div-main-banner img').css({
            'width':banner_image_width
        });
    }

    if(parent_width < 1100 && parent_width > 800) {
        $('.main-count-contents-img').show();

        $('.div-main-count-contents').css({
            'margin-left':'20px'
        });
    }else if(parent_width < 800) {
        $('.main-count-contents-img').hide();

    }else {
        $('.main-count-contents-img').show();

        $('.div-main-count-contents').css({
            'margin-left':'120px'
        });
    }

}