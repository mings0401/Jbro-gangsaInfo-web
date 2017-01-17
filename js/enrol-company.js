$(function () {
    /*윈도창 크기가 변경될 때 이벤트*/
    $(window).bind('resize', function () {
        var width = $(window).width();
        if(width >= 700){
            drawWidthMode();
        }else{
            drawHeightMode();
        }
    });

    $(window).trigger('resize');
});

function drawWidthMode() {
   var table = '<table class="all-width-height-100">' +
       '<tr style="height: 60px;">' +
       '<td colspan="9"></td>' +
       '</tr>' +
       '</table>';

    $('#main-wrapper').empty();
    $('#main-wrapper').append();
}

function drawHeightMode() {
    
}