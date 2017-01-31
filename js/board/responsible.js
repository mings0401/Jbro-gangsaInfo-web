/**
 * Created by kwangjeong on 2017. 1. 16..
 */
window.onresize = function(event) {
    init();
};

function init() {
    var parent_height = $(window).height();
    var parent_width = $(window).width();

    if(parent_width > 1400) {
        $('.div-board-title').css({
            'margin-left':'120px',
            'margin-right':'120px'
        });

        $('.div-board-content').css({
            'margin-left':'120px',
            'margin-right':'120px'
        });

        $('.div-board-footer').css({
            'margin-left':'120px',
            'margin-right':'120px'
        });

    }else {
        $('.div-board-title').css({
            'margin-left':'0px',
            'margin-right':'0px'
        });

        $('.div-board-content').css({
            'margin-left':'0px',
            'margin-right':'0px'
        });

        $('.div-board-footer').css({
            'margin-left':'0px',
            'margin-right':'0px'
        });
    }


}