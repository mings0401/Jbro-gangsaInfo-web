/**
 * Created by kwangjeong on 2017. 1. 15..
 */
/**
 * Created by kwangjeong on 2017. 1. 13..
 */
window.onresize = function(event) {
    init();
};

function init() {
    var parent_height = $(window).height();
    var parent_width = $(window).width();
    
    if(parent_width < 1000) {
        $(".big-img").hide();
    }else {
        $(".big-img").show();
    }

}