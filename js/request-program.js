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

    var marginTd = (windowWidth - 650)/2;
    var table = '<table class="all-width-height-100">' +
        '<tr style="height: 60px;">' +
        '<td colspan="11"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="11" align="center">' +
        '<font class="font-30px-bold-454545">아웃턴쉽 프로그램요청</font>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td colspan="11"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="'+marginTd+'"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545">담당자</font>' +
        '</td>' +
        '<td width="200px;">' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td width="50px"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545">프로그램 구성</font>' +
        '</td>' +
        '<td width="200px;" colspan="3">' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td width="'+marginTd+'"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td colspan="11"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="'+marginTd+'"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545">이메일</font>' +
        '</td>' +
        '<td colspan="6" width="200px;">' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td width="'+marginTd+'"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td colspan="11"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td width="'+marginTd+'"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545">주소</font>' +
        '</td>' +
        '<td colspan="4" width="200px;">' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td width="12px;"></td>' +
        '<td class="div-logo-btn" width="120px;">우편번호 검색' +
        '</td>' +
        '<td width="'+marginTd+'"></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="11"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td width="'+marginTd+'"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545"></font>' +
        '</td>' +
        '<td colspan="6" width="200px;">' +
        '<input type="text" class="input-100per-30" placeholder="상세주소를 입력하세요.">' +
        '</td>' +
        '<td width="'+marginTd+'"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="11"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="'+marginTd+'"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545">날짜</font>' +
        '</td>' +
        '<td width="200px;">' +
        '<input type="date" class="input-100per-30">' +
        '</td>' +
        '<td width="50px"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545">총 예산</font>' +
        '</td>' +
        '<td width="200px;" colspan="3">' +
        '<input type="number" class="input-100per-30" placeholder="만원단위로 입력해주세요.">' +
        '</td>' +
        '<td width="'+marginTd+'"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td colspan="11"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="'+marginTd+'"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545">총 학생 수</font>' +
        '</td>' +
        '<td width="200px;">' +
        '<input type="number" class="input-100per-30">' +
        '</td>' +
        '<td width="50px"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545">노트북 대여</font>' +
        '</td>' +
        '<td colspan="4">' +
        '<div class="all-width-height-100">' +
        '<input type="checkbox" style="float: left">' +
        '<font class="font-14px-454545" style="margin-left: 10px;">학교/기관에서 PC를 제공한다면 체크해주세요.</font>' +
        '</div>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="11"></td>' +
        '</tr>' +

        '<tr valign="top" style="height: 300px;">' +
        '<td width="'+marginTd+'"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545">프로그램 구성</font>' +
        '</td>' +
        '<td colspan="6" width="200px;">' +
        '<textarea class="textarea-setting"></textarea>' +
        '</td>' +
        '<td width="'+marginTd+'"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td colspan="11"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td width="'+marginTd+'"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545">양식파일</font>' +
        '</td>' +
        '<td colspan="4" width="200px;">' +
        '<input type="text" class="input-100per-30" placeholder="프로그램 구성에 대하여 양식파일을 올릴 수 있습니다.">' +
        '</td>' +
        '<td width="12px;"></td>' +
        '<td class="div-logo-btn" width="120px;">파일 첨부하기' +
        '</td>' +
        '<td width="'+marginTd+'"></td>' +
        '</tr>' +

        '<tr style="height: 100px;">' +
        '<td colspan="11"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td colspan="11" align="center">' +
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
        '<font class="font-30px-bold-454545">아웃턴쉽 프로그램요청</font>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="10%"></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">담당자</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td width="10%"></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="10%"></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">연락처</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td width="10%"></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="10%"></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">이메일</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td width="10%"></td>' +
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

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="10%"></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">날짜</font>' +
        '</td>' +
        '<td>' +
        '<input type="date" class="input-100per-30">' +
        '</td>' +
        '<td width="10%"></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="10%"></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">총 예산</font>' +
        '</td>' +
        '<td>' +
        '<input type="number" class="input-100per-30" placeholder="만원단위로 입력해주세요.">' +
        '</td>' +
        '<td width="10%"></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="10%"></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">노트북 대여</font>' +
        '</td>' +
        '<td>' +
        '<input type="number" class="input-100per-30">' +
        '</td>' +
        '<td width="10%"></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="10%"></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">총 학생 수</font>' +
        '</td>' +
        '<td>' +
        '<div class="all-width-height-100">' +
        '<input type="checkbox" style="float: left">' +
        '<font class="font-14px-454545" style="margin-left: 10px;">학교/기관에서 PC를 제공한다면 체크해주세요.</font>' +
        '</div>' +
        '</td>' +
        '<td width="10%"></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="10%"></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">프로그램 구성</font>' +
        '</td>' +
        '<td>' +
        '</td>' +
        '<td width="10%"></td>' +
        '</tr>' +

        '<tr style="height : 200px;">' +
        '<td width="10%"></td>' +
        '<td colspan="2">' +
        '<textarea class="textarea-setting"></textarea>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">파일 양식</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30" placeholder="프로그램 구성에 대하여 양식파일을 올릴 수 있습니다.">' +
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
        '<div class="div-logo-btn">파일 첨부하기</div>' +
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