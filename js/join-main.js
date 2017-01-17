$(function () {
    /*윈도창 크기가 변경될 때 이벤트*/
    $(window).bind('resize', function () {
        var width = $(window).width();
        if(width >= 1365){
            drawWidthMode();
        }else{
            drawHeightMode();
        }

        $('.movePage').unbind('click');
        $('.movePage').bind('click', function () {
            switch ($(this).attr("value")){
                case 'outturnJoin':
                    location.href = "../outernship-join.html";
                    break;
                case 'commonJoin':
                    location.href = "common-join.html";
                    break
            }
        });
    });

    $(window).trigger('resize');
});

function drawWidthMode() {
var table = '<table class="all-width-height-100">'+
        '<tr style="height: 60px;">'+
        '<td colspan="5"></td>'+
        '</tr>'+
        '<tr style="height: 500px;">'+
        '<td></td>'+
        '<td width="430px;">'+
        '<div class="all-width-height-100 div-border">'+
        '<table class="all-width-height-100">'+
        '<tr style="height: 50px;">'+
        '<td></td>'+
        '</tr>'+
        '<tr style="height: 200px;">'+
        '<td align="center">'+
        '<img style="width: 200px; height: 200px;" src="images/join-main/outturnshipjoin.png">'+
        '</td>'+
        '</tr>'+
        '<tr style="height: 40px;">'+
        '<td></td>'+
        '</tr>'+
        '<tr style="height: 18px;">'+
        '<td align="center">'+
        '<font class="font-18px-898989">당당한 커리어를 위해!</font>'+
    '</td>'+
    '</tr>'+
   '<tr style="height: 84px;">'+
        '<td></td>'+
        '</tr>'+
        '<tr style="height: 50px;">'+
        '<td align="center">'+
        '<div class="div-button movePage font-button-text" style="width: 344px; height: 68px;" value="outturnJoin">아웃터니 회원가입'+
    '</div>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td></td>'+
    '</tr>'+
    '</table>'+
    '</div>'+
    '</td>'+
   '<td width="50px;"></td>'+
        '<td width="430px;">'+
        '<div class="all-width-height-100 div-border">'+
        '<table class="all-width-height-100">'+
        '<tr style="height: 50px;">'+
        '<td></td>'+
        '</tr>'+
        '<tr style="height: 200px;">'+
        '<td align="center">'+
        '<img style="width: 200px; height: 200px;" src="images/join-main/commonjoin.png">'+
        '</td>'+
        '</tr>'+
        '<tr style="height: 40px;">'+
        '<td></td>'+
        '</tr>'+
        '<tr style="height: 18px;">'+
        '<td align="center">'+
        '<font class="font-18px-898989">질 높은 교육을 위해!</font>'+
    '</td>'+
    '</tr>'+
   '<tr style="height: 84px;">'+
        '<td></td>'+
        '</tr>'+
        '<tr style="height: 50px;">'+
        '<td align="center">'+
        '<div class="div-button movePage font-button-text" style="width: 344px; height: 68px;" value="commonJoin">일반 회원가입'+
    '</div>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td></td>'+
    '</tr>'+
    '</table>'+
    '</div>'+
    '</td>'+
    '<td></td>'+
    '</tr>'+
    '<tr>'+
   '<td colspan="5"></td>'+
        '</tr>'+
        '</table>';

    $('#main-wrapper').empty();
    $('#main-wrapper').append(table);

}

function drawHeightMode() {
    var windowWidth = $(window).width();
    var table = '<table style="width: '+ windowWidth +'px;">' +
        '<tr>' +
        '<td width="20%"></td>' +
        '<td width="60%">' +
        '<div class="all-width-height-100 div-border">'+
        '<table class="all-width-height-100">'+
        '<tr style="height: '+ (windowWidth * 0.3) * 0.25 +'px;">'+
        '<td></td>'+
        '</tr>'+
        '<tr style="height: '+ windowWidth * 0.3 +'px;">'+
        '<td align="center">'+
        '<img style="width: '+ windowWidth * 0.3 +'px; height: '+ windowWidth * 0.3 +'px;" src="images/join-main/outturnshipjoin.png">'+
        '</td>'+
        '</tr>'+
        '<tr style="height: '+(windowWidth * 0.3) * 0.2+'px;">'+
        '<td></td>'+
        '</tr>'+
        '<tr style="height: '+ (windowWidth * 0.3) * 0.1 +'px;">'+
        '<td align="center">'+
        '<font class="font-18px-898989">당당한 커리어를 위해!</font>'+
        '</td>'+
        '</tr>'+
        '<tr style="height: '+ (windowWidth * 0.3) * 0.5 +'px;">'+
        '<td></td>'+
        '</tr>'+
        '<tr style="height: '+ (windowWidth * 0.3) * 0.25 +'px;">'+
        '<td align="center">'+
        '<div class="div-button movePage font-button-text" style="width: '+ windowWidth * 0.5 +'px;" value="outturnJoin">아웃터니 회원가입'+
        '</div>'+
        '</td>'+
        '</tr>'+
        '<tr>'+
        '<td></td>'+
        '</tr>'+
        '</table>'+
        '</div>'+
        '</td>' +
        '<td width="20%"></td>' +
        '</tr>' +
        '</table>';

    var commonJoinTable = '<table style="width: '+ windowWidth +'px;">' +
        '<tr>' +
        '<td width="20%"></td>' +
        '<td width="60%">' +
        '<div class="all-width-height-100 div-border">'+
        '<table class="all-width-height-100">'+
        '<tr style="height: '+ (windowWidth * 0.3) * 0.25 +'px;">'+
        '<td></td>'+
        '</tr>'+
        '<tr style="height: '+ windowWidth * 0.3 +'px;">'+
        '<td align="center">'+
        '<img style="width: '+ windowWidth * 0.3 +'px; height: '+ windowWidth * 0.3 +'px;" src="images/join-main/commonjoin.png">'+
        '</td>'+
        '</tr>'+
        '<tr style="height: '+(windowWidth * 0.3) * 0.2+'px;">'+
        '<td></td>'+
        '</tr>'+
        '<tr style="height: '+ (windowWidth * 0.3) * 0.1 +'px;">'+
        '<td align="center">'+
        '<font class="font-18px-898989">질 높은 교육을 위해!</font>'+
        '</td>'+
        '</tr>'+
        '<tr style="height: '+ (windowWidth * 0.3) * 0.5 +'px;">'+
        '<td></td>'+
        '</tr>'+
        '<tr style="height: '+ (windowWidth * 0.3) * 0.25 +'px;">'+
        '<td align="center">'+
        '<div class="div-button movePage font-button-text" style="width: '+ windowWidth * 0.5 +'px;" value="outturnJoin">일반 회원가입'+
        '</div>'+
        '</td>'+
        '</tr>'+
        '<tr>'+
        '<td></td>'+
        '</tr>'+
        '</table>'+
        '</div>'+
        '</td>' +
        '<td width="20%"></td>' +
        '</tr>' +
        '</table>';

    $('#main-wrapper').empty();
    $('#main-wrapper').append('<table class="all-width-height-100">' +
        '<tr style="height: 60px;"><td></td></tr>' +
        '<tr>' +
        '<td>'+ table +'</td>' +
        '</tr>' +
        '<tr style="height: 18px;"><td></td></tr>' +
        '<tr>' +
        '<td>'+ commonJoinTable +'</td>' +
        '</tr>' +
        '</table>');

}