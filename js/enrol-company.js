$(function () {
    /*윈도창 크기가 변경될 때 이벤트*/
    $(window).bind('resize', function () {
        var width = $(window).width();
        if(width >= 1024){
            drawWidthMode();
        }else{
            drawHeightMode();
        }
    });

    $(window).trigger('resize');
});

function drawWidthMode() {
    var windowWidth = $(window).width();

    var mariginTd = (windowWidth - 854)/2;
   var table = '<table class="all-width-height-100">' +
       '<tr style="height: 60px;">' +
       '<td colspan="12"></td>' +
       '</tr>' +

       '<tr style="height: 30px;">' +
       '<td colspan="12" align="center">' +
       '<font class="font-30px-bold-454545">아웃턴쉽 기업등록</font>' +
       '</td>' +
       '</tr>' +

       '<tr style="height: 60px;">' +
       '<td colspan="12"></td>' +
       '</tr>' +

       '<tr>' +
       '<td width="'+ mariginTd +'px;"></td>' +
       '<td width="180px;" colspan="2" rowspan="7" class="border-1px-solid-454545"></td>' +
       '<td width="44px;"></td>' +
       '<td width="90px;">' +
       '<font class="font-16px-454545">기업/기관명</font>' +
       '</td>' +
       '<td width="200px;">' +
       '<input type="text" class="input-100per-30">' +
       '</td>' +
       '<td width="50px;"></td>' +
       '<td width="90px;">' +
       '<font class="font-16px-454545">담당자</font>' +
       '</td>' +
       '<td width="200px;" colspan="3">' +
       '<input type="text" class="input-100per-30">' +
       '</td>' +
       '<td width="'+ mariginTd +'px;"></td>' +
       '</tr>'+

       '<tr style="height: 16px;">' +
       '<td colspan="11"></td>' +
       '</tr>' +

       '<tr>' +
       '<td></td>' +
       '<td width="44px;"></td>' +
       '<td>' +
       '<font class="font-16px-454545">업종 형태</font>' +
       '</td>' +
       '<td width="200px;">' +
       '<input type="text" class="input-100per-30">' +
       '</td>' +
       '<td width="50px;"></td>' +
       '<td>' +
       '<font class="font-16px-454545">직급</font>' +
       '</td>' +
       '<td width="200px;" colspan="3">' +
       '<input type="text" class="input-100per-30">' +
       '</td>' +
       '<td></td>' +
       '</tr>'+

       '<tr style="height: 16px;">' +
       '<td colspan="11"></td>' +
       '</tr>' +

       '<tr>' +
       '<td></td>' +
       '<td width="44px;"></td>' +
       '<td>' +
       '<font class="font-16px-454545">직원 수</font>' +
       '</td>' +
       '<td width="200px;">' +
       '<input type="text" class="input-100per-30">' +
       '</td>' +
       '<td width="50px;"></td>' +
       '<td>' +
       '<font class="font-16px-454545">연락처</font>' +
       '</td>' +
       '<td width="200px;" colspan="3">' +
       '<input type="text" class="input-100per-30"  colspan="3">' +
       '</td>' +
       '<td></td>' +
       '</tr>'+

       '<tr style="height: 16px;">' +
       '<td colspan="11"></td>' +
       '</tr>' +

       '<tr>' +
       '<td></td>' +
       '<td width="44px;"></td>' +
       '<td>' +
       '<font class="font-16px-454545">이메일</font>' +
       '</td>' +
       '<td colspan="6" width="200px;">' +
       '<input type="text" class="input-100per-30">' +
       '</td>' +
       '<td></td>' +
       '</tr>'+

       '<tr style="height: 16px;">' +
       '<td colspan="12"></td>' +
       '</tr>' +

       '<tr>' +
       '<td></td>' +
       '<td width="120px;">' +
       '<div class="div-logo-btn">로고 첨부하기</div>' +
       '</td>' +
       '<td width="60px;"></td>' +
       '<td width="44px;"></td>' +
       '<td>' +
       '<font class="font-16px-454545">주소</font>' +
       '</td>' +
       '<td colspan="4">' +
       '<input type="text" class="input-100per-30">' +
       '</td>' +
       '<td width="12px;"></td>' +
       '<td width="120px;">' +
       '<div class="div-logo-btn">우편번호 검색</div>' +
       '</td>' +
       '<td></td>' +
       '</tr>'+

       '<tr style="height: 10px;">' +
       '<td colspan="12"></td>' +
       '</tr>' +

       '<tr>' +
       '<td></td>' +
       '<td></td>' +
       '<td></td>' +
       '<td></td>' +
       '<td></td>' +
       '<td colspan="6">' +
       '<input type="text" class="input-100per-30" placeholder="상세주소를 입력해주세요.">' +
       '</td>' +
       '<td></td>' +
       '</tr>'+

       '<tr style="height: 100px;">' +
       '<td colspan="12"></td>' +
       '</tr>' +

       '<tr>' +
       '<td colspan="12" align="center">' +
       '<div class="div-login-btn">신청하기</div>' +
       '</td>' +
       '</tr>' +

       '</table>';

    $('#main-wrapper').empty();
    $('#main-wrapper').append(table);
}

function drawHeightMode() {
    var table = '<table class="all-width-height-100">' +
        '<tr style="height: 60px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4" align="center">' +
        '<font class="font-30px-bold-454545">아웃턴쉽 기업등록</font>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr style="height: 168px;">' +
        '<td width="10%"></td>' +
        '<td colspan="2" align="center">' +
        '<div class="border-1px-solid-454545" style="width: 180px; height: 168px;"></div>' +
        '</td>' +
        '<td width="10%"></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td colspan="2" align="center">' +
        '<div class="div-logo-btn">로고 첨부하기</div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">기업/기관명</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">담당자</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">업종 형태</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">직급</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">직원 수</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">연락처</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">이메일</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">주소</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 5px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<div class="div-logo-btn">우편번호 검색</div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 5px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545"></font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30" placeholder="상세주소를 입력하세요.">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4" align="center">' +
        '<div class="div-login-btn" style="width : 300px !important;">신청하기</div>' +
        '</td>' +
        '</tr>' +
        '</table>';

    $('#main-wrapper').empty();
    $('#main-wrapper').append(table);
}