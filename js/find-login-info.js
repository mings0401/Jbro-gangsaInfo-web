$(function () {
    /*윈도창 크기가 변경될 때 이벤트*/
    /*윈도창 크기가 변경될 때 이벤트*/
    $(window).bind('resize', function () {
        var width = $(window).width();
        if(width >= 1133){
            drawWidthMode();
        }else{
            drawHeightMode();
        }
    });

    $(window).trigger('resize');
});

function drawWidthMode() {
    var windowWidth = $(window).width();

    var leftTable = '<table class="all-width-height-100 table-border">' +
        '<tr style="height: 40px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 24px;">' +
        '<td width="40px;"></td>' +
        '<td colspan="4">' +
        '<font class="font-24px-bold-454545">이메일로 찾기</font>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 14px;">' +
        '<td width="40px;"></td>' +
        '<td colspan="4">' +
        '<font class="font-14px-898989">회원정보에 등록된 이메일로 아이디를 찾을 수 있습니다.</font>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 80px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td width="40px;"></td>' +
        '<td width="80px">' +
        '<font class="font-16px-454545">아이디</font>' +
        '</td>' +
        '<td colspan="3">' +
        '<input type="text" class="all-width-height-100">' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td width="40px;"></td>' +
        '<td width="80px">' +
        '<font class="font-16px-454545">이메일</font>' +
        '</td>' +
        '<td width="120px;">' +
        '<input type="text" class="all-width-height-100">' +
        '</td>' +
        '<td align="center" width="30px;">' +
        '<font class="font-16px-454545">@</font>' +
        '</td>' +
        '<td>' +
        '<select class="all-width-height-100">'+
        '<option>선택하세요.</option>'+
        '</select>'+
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 40px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 68px;">' +
        '<td></td>' +
        '<td colspan="4">' +
        '<div class="div-login-btn">확인</div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 53px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '</table>';

    var rightTable = '<table class="all-width-height-100 table-border">' +
        '<tr style="height: 40px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 24px;">' +
        '<td width="40px;"></td>' +
        '<td colspan="6">' +
        '<font class="font-24px-bold-454545">연락처로 찾기</font>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 14px;">' +
        '<td width="40px;"></td>' +
        '<td colspan="6">' +
        '<font class="font-14px-898989">회원정보에 등록된 연락처로 아이디를 찾을 수 있습니다.</font>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 80px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td width="40px;"></td>' +
        '<td width="80px">' +
        '<font class="font-16px-454545">아이디</font>' +
        '</td>' +
        '<td colspan="5">' +
        '<input type="text" class="all-width-height-100">' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td width="40px;"></td>' +
        '<td width="80px">' +
        '<font class="font-16px-454545">연락처</font>' +
        '</td>' +
        '<td colspan="5">' +
        '<div class="all-width-height-100">' +
        '<input type="radio">' +
        '<font class="font-14px-454545" style="margin-left: 10px;">휴대폰</font>' +
        '<input type="radio" style="margin-left: 20px;">' +
        '<font class="font-14px-454545" style="margin-left: 10px;">유선전화</font>' +
        '</div>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td width="40px;"></td>' +
        '<td width="80px">' +
        '</td>' +
        '<td width="50px;">' +
        '<select class="all-width-height-100">'+
        '<option>010</option>'+
        '<option>011</option>'+
        '<option>016</option>'+
        '</select>'+
        '</td>' +
        '<td align="center" width="25px;">' +
        '<font class="font-16px-454545">-</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="all-width-height-100">' +
        '</td>' +
        '<td align="center" width="25px;">' +
        '<font class="font-16px-454545">-</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="all-width-height-100">' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 40px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 68px;">' +
        '<td></td>' +
        '<td colspan="6">' +
        '<div class="div-login-btn">확인</div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 53px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +
        '</table>';

    var marginTd = (windowWidth - ( (430 * 2) + 80 ))/2;
    var mainTable = '<table class="all-width-height-100">' +
        '<tr style="height: 60px;">' +
        '<td colspan="5"></td>' +
        '</tr>' +
        '<tr style="height: 500px;">' +
        '<td width="'+ marginTd +'px;"></td>' +
        '<td width="430px;">'+ leftTable +'</td>' +
        '<td width="80px;"></td>' +
        '<td width="430px;">'+ rightTable +'</td>' +
        '<td width="'+ marginTd +'px;"></td>' +
        '</tr>' +
        '<tr style="height: 120px;">' +
        '<td colspan="5"></td>' +
        '</tr>' +
        '</table>';

    $('#main-wrapper').empty();
    $('#main-wrapper').append(mainTable);
}

function drawHeightMode() {
    var windowWidth = $(window).width();

    var leftTable = '<table class="all-width-height-100 table-border">' +
        '<tr style="height: 40px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 24px;">' +
        '<td width="40px;"></td>' +
        '<td colspan="4">' +
        '<font class="font-24px-bold-454545">이메일로 찾기</font>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 14px;">' +
        '<td width="40px;"></td>' +
        '<td colspan="4">' +
        '<font class="font-14px-898989">회원정보에 등록된 이메일로 아이디를 찾을 수 있습니다.</font>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 80px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td width="40px;"></td>' +
        '<td width="80px">' +
        '<font class="font-16px-454545">아이디</font>' +
        '</td>' +
        '<td colspan="3">' +
        '<input type="text" class="all-width-height-100">' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td width="40px;"></td>' +
        '<td width="80px">' +
        '<font class="font-16px-454545">이메일</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="all-width-height-100">' +
        '</td>' +
        '<td align="center" width="30px;">' +
        '<font class="font-16px-454545">@</font>' +
        '</td>' +
        '<td>' +
        '<select class="all-width-height-100">'+
        '<option>선택하세요.</option>'+
        '</select>'+
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 104">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 68px;">' +
        '<td></td>' +
        '<td colspan="4">' +
        '<div class="div-login-btn-height">확인</div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '</table>';

    var rightTable = '<table class="all-width-height-100 table-border">' +
        '<tr style="height: 40px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 24px;">' +
        '<td width="40px;"></td>' +
        '<td colspan="6">' +
        '<font class="font-24px-bold-454545">연락처로 찾기</font>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;">' +
        '<td colspan="6"></td>' +
        '</tr>' +

        '<tr style="height: 14px;">' +
        '<td width="40px;"></td>' +
        '<td colspan="6">' +
        '<font class="font-14px-898989">회원정보에 등록된 연락처로 아이디를 찾을 수 있습니다.</font>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 80px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td width="40px;"></td>' +
        '<td width="80px">' +
        '<font class="font-16px-454545">아이디</font>' +
        '</td>' +
        '<td colspan="5">' +
        '<input type="text" class="all-width-height-100">' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td width="40px;"></td>' +
        '<td width="80px">' +
        '<font class="font-16px-454545">연락처</font>' +
        '</td>' +
        '<td colspan="5">' +
        '<div class="all-width-height-100">' +
        '<input type="radio">' +
        '<font class="font-14px-454545" style="margin-left: 10px;">휴대폰</font>' +
        '<input type="radio" style="margin-left: 20px;">' +
        '<font class="font-14px-454545" style="margin-left: 10px;">유선전화</font>' +
        '</div>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td width="40px;"></td>' +
        '<td width="80px">' +
        '</td>' +
        '<td width="50px;">' +
        '<select class="all-width-height-100">'+
        '<option>010</option>'+
        '<option>011</option>'+
        '<option>016</option>'+
        '</select>'+
        '</td>' +
        '<td align="center" width="25px;">' +
        '<font class="font-16px-454545">-</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="all-width-height-100">' +
        '</td>' +
        '<td align="center" width="25px;">' +
        '<font class="font-16px-454545">-</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="all-width-height-100">' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 21px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 68px;">' +
        '<td></td>' +
        '<td colspan="6">' +
        '<div class="div-login-btn-height">확인</div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="8"></td>' +
        '</tr>' +
        '</table>';

    var marginTd = (windowWidth - ((430)))/2;
    var mainTable = '<table class="all-width-height-100">' +
        '<tr style="height: 60px;">' +
        '<td colspan="5"></td>' +
        '</tr>' +
        '<tr style="height: 500px;">' +
        '<td width="'+ marginTd +'px;"></td>' +
        '<td width="280px;">'+ leftTable +'</td>' +
        '<td width="'+ marginTd +'px;"></td>' +
        '</tr>' +
        '<tr style="height: 60px;">' +
        '<td colspan="5"></td>' +
        '</tr>' +
        '<tr style="height: 500px;">' +
        '<td width="'+ marginTd +'px;"></td>' +
        '<td width="280px;">'+ rightTable +'</td>' +
        '<td width="'+ marginTd +'px;"></td>' +
        '</tr>' +
        '</table>';

    $('#main-wrapper').empty();
    $('#main-wrapper').append(mainTable);
}