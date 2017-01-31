/**
 * Created by kwangjeong on 2017. 1. 18..
 */
window.onresize = function(event) {
    init();
};

function init() {
    var parent_height = $(window).height();
    var parent_width = $(window).width();

    if(parent_width < 700) {
        $('.div-mypage').css({
            'margin-left':'20px'
        });


    }else {
        $('.div-mypage').css({
            'margin-left':'120px'
        });

    }


}