$(function () {
    /*윈도창 크기가 변경될 때 이벤트*/
    $(window).bind('resize', function () {
        var width = $(window).width();
        if(width >= 420){
            drawWidthMode();
        }else{
            drawHeightMode();
        }
    });

    $(window).trigger('resize');
});

function drawWidthMode() {
    var windowWidth = $(window).width();
    var explainTable = '<table class="all-width-height-100">' +
        '<tr style="height: 104px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<img src="/images/program/speciallecture1.png">' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<font class="font-30px-bold-ffffff">명사 특강</font>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<font class="font-20px-ffffff">아웃턴십은 명사섭외 전문 기업인 강사인포와 협업을 통해</font>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 14px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<font class="font-20px-ffffff">다양한 분야의 명사특강을 함께 합니다.</font>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 104px;">' +
        '<td></td>' +
        '</tr>' +
        '</table>';
    
    $('#div-main-explain-area').empty();
    $('#div-main-explain-area').append(explainTable);

    var imageWidth = 518;
    if(windowWidth < 600){
        imageWidth = windowWidth * 0.8;
    }

    var explainImageTable = '<table>' +
        '<tr style="height: 36px;"><td></td></tr>' +
        '<tr>' +
        '<td align="center">' +
        '<img width="'+imageWidth+'px;" src="/images/program/speciallecture2.png"/>' +
        '</td>' +
        '</tr>' +
        '<tr style="height: 36px;"><td></td></tr>' +
        '</table>';

    $('#div-main-text-explain-area').empty();
    $('#div-main-text-explain-area').append(explainImageTable);
}

function drawHeightMode() {

}