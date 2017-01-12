$(function () {
    /*윈도창 크기가 변경될 때 이벤트*/
    $(window).bind('resize', function () {
        var width = $(window).width();
        if(width >= 1365){
            drawWidthMode();
        }else{
            drawHeightMode();
        }
    });

    $(window).trigger('resize');
});

function drawWidthMode() {
    var windowWidth = $(window).width();
    var table = '<table class="all-width-height-100">'+
        '<tr style="height: 60px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr style="height: 150px;">'+
        '<td colspan="17" align="center">'+
        '<img class="img-join" src="images/join/outurnshipjoin.png">'+
        '</td>'+
        '</tr>'+
        '<tr style="height: 16px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr style="height: 30px;">'+
        '<td colspan="17" align="center">'+
        '<font class="font-30px-main-title">아웃턴쉽 회원가입</font>'+
    '</td>'+
    '</tr>'+
    '<tr style="height: 60px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr style="height: 24px;">'+
        '<td width="20%;"></td>'+
        '<td colspan="15" class="td-border-puple">'+
        '<font class="font-24px-454545-title">필수 가입정보 입력</font>'+
    '</td>'+
    '<td width="20%;;"></td>'+
        '</tr>'+
        '<tr style="height: 52px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr style="height: 30px;">'+
        '<td width="20%;"></td>'+
        '<td width="100px">'+
        '<font class="font-16px-subtitle">아이디</font>'+
        '</td>'+
        '<td width="10px;"></td>'+
        '<td width="200px;">'+
        '<input type="text" class="input-text-area">'+
        '</td>'+
        '<td width="10px;"></td>'+
        '<td width="100px;">'+
        '<div class="div-overlap">'+
        '<table class="all-width-height-100">'+
        '<tr valign="middle">'+
        '<td align="center">중복확인</td>'+
        '</tr>'+
        '</table>'+
        '</div>'+
        '</td>'+
        '<td colspan="10"></td>'+
        '<td width="20%;"></td>'+
        '</tr>'+
        '<tr style="height: 16px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr style="height: 30px;">'+
        '<td width="20%;"></td>'+
        '<td width="100px">'+
        '<font class="font-16px-subtitle">비밀번호</font>'+
        '</td>'+
        '<td width="10px;"></td>'+
        '<td width="200px;">'+
        '<input type="text" class="input-text-area">'+
        '</td>'+
        '<td colspan="12"></td>'+
        '<td width="20%;"></td>'+
        '</tr>'+
        '<tr style="height: 16px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr style="height: 30px;">'+
        '<td width="20%"></td>'+
        '<td width="100px">'+
        '<font class="font-16px-subtitle">비밀번호 확인</font>'+
    '</td>'+
    '<td width="10px;"></td>'+
        '<td width="200px;">'+
        '<input type="text" class="input-text-area">'+
        '</td>'+
        '<td colspan="12"></td>'+
        '<td width="20%;"></td>'+
        '</tr>'+
        '<tr style="height: 8px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr style="height: 12px;">'+
        '<td width="20%"></td>'+
        '<td width="100px"></td>'+
        '<td colspan="15">'+
        '<font class="font-12px-898989">* 8~12자로 영문 대/소문자, 숫자, 특수문자 2가지 이상으로 조합해주세요.</font>'+
    '</td>'+
    '</tr>'+
    '<tr style="height: 30px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr style="height: 30px;">'+
        '<td width="20%"></td>'+
        '<td width="100px">'+
        '<font class="font-16px-subtitle">이름</font>'+
        '</td>'+
        '<td width="10px;"></td>'+
        '<td width="200px;">'+
        '<input type="text" class="input-text-area">'+
        '</td>'+
        '<td colspan="7"></td>'+
        '<td width="100px">'+
        '<font class="font-16px-subtitle">관심분야</font>'+
        '</td>'+
        '<td width="10px;"></td>'+
        '<td width="200px;">'+
        '<select class="selectbox-interests">'+
        '<option>관심분야</option>'+
        '</select>'+
        '</td>'+
        '<td width="10px;"></td>'+
        '<td width="100px;"></td>'+
        '<td width="20%"></td>'+
        '</tr>'+
        '<tr style="height: 16px;">'+
        '<td colspan="15"></td>'+
        '</tr>'+
        '<tr style="height: 30px;">'+
        '<td width="20%"></td>'+
        '<td width="100px">'+
        '<font class="font-16px-subtitle">휴대전화</font>'+
        '</td>'+
        '<td width="10px;"></td>'+
        '<td width="200px;">'+
        '<input type="text" class="input-text-area" placeholder="-를 제외하고 입력해주세요.">'+
        '</td>'+
        '<td colspan="7"></td>'+
        '<td width="100px">'+
        '<font class="font-16px-subtitle">학교명/소재지</font>'+
        '</td>'+
        '<td width="10px;"></td>'+
        '<td width="200px;">'+
        '<input type="text" class="input-text-area">'+
        '</td>'+
        '<td width="10px;"></td>'+
        '<td width="100px;"></td>'+
        '<td width="20%"></td>'+
        '</tr>'+
        '<tr style="height: 16px;">'+
        '<td colspan="15"></td>'+
        '</tr>'+
        '<tr style="height: 30px;">'+
        '<td width="20%"></td>'+
        '<td width="100px">'+
        '<font class="font-16px-subtitle">이메일</font>'+
        '</td>'+
        '<td width="10px;"></td>'+
        '<td width="200px;">'+
        '<input type="text" class="input-text-area">'+
        '</td>'+
        '<td colspan="7"></td>'+
        '<td width="100px">'+
        '<font class="font-16px-subtitle">학년</font>'+
        '</td>'+
        '<td width="10px;"></td>'+
        '<td width="200px;">'+
        '<input type="text" class="input-text-area">'+
        '</td>'+
        '<td width="10px;"></td>'+
        '<td width="100px;"></td>'+
        '<td width="20%"></td>'+
        '</tr>'+
        '<tr style="height: 8px;">'+
        '<td colspan="15"></td>'+
        '</tr>'+
        '<tr style="height: 30px;">'+
        '<td width="20%"></td>'+
        '<td width="100px"></td>'+
        '<td width="10px;"></td>'+
        '<td width="200px;">'+
        '<select class="selectbox-interests">'+
        '<option>@ 선택하세요.</option>'+
    '</select>'+
    '</td>'+
    '<td colspan="10"></td>'+
        '<td width="10px;"></td>'+
        '<td width="100px;"></td>'+
        '<td width="20%;"></td>'+
        '</tr>'+
        '<tr style="height: 16px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr style="height: 12px;">'+
        '<td width="20%"></td>'+
        '<td width="100px"></td>'+
        '<td colspan="12">'+
        '<input type="checkbox">'+
        '<font class="font-12px-898989">sms 및 이메일을 통한 상품 및 이벤트 정보 수집에 동의합니다.</font>'+
    '</td>'+
    '<td width="10px;"></td>'+
        '<td width="100px;"></td>'+
        '<td width="20%;"></td>'+
        '</tr>'+
        '<tr style="height: 60px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr>'+
        '<td width="20%;"></td>'+
        '<td colspan="5" class="td-border-puple">'+
        '<font class="font-24px-454545-title">이용 약관</font>'+
    '</td>'+
    '<td colspan="5"></td>'+
        '<td colspan="5" class="td-border-puple">'+
        '<font class="font-24px-454545-title">개인정보수집 및 이용</font>'+
    '</td>'+
    '<td width="20%;"></td>'+
        '</tr>'+
        '<tr style="height: 16px;">'+
        '<td colspan="15"></td>'+
        '</tr>'+
        '<tr>'+
        '<td width="20%;"></td>'+
        '<td colspan="5">'+
        '<textarea class="textarea-setting" disabled="true">'+
        '</textarea>'+
        '</td>'+
        '<td colspan="5"></td>'+
        '<td colspan="5">'+
        '<textarea class="textarea-setting" disabled="true">'+
        '</textarea>'+
        '</td>'+
        '<td width="20%;"></td>'+
        '</tr>'+
        '<tr style="height: 40px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr style="height: 12px;">'+
        '<td colspan="17" align="center">'+
        '<font>오픈클래스 회원을 가입하시게 되면 이용약관 및 개인정보 수집 및 이용에 관한 약관을 전체 동의하게 됩니다.</font>'+
    '</td>'+
    '</tr>'+
    '<tr style="height: 60px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr style="height: 60px;">'+
        '<td colspan="17"></td>'+
        '</tr>'+
        '<tr style="height: 50px;">'+
        '<td colspan="17" align="center">'+
        '<div class="div-button" style="width: '+ windowWidth * 0.2 +'px;">'+
        '<font class="font-button-text">회원가입 완료</font>'+
    '</div>'+
    '</td>'+
    '</tr>'+
    '</table>';

    $('#main-wrapper').empty();
    $('#main-wrapper').append(table);

}

function drawHeightMode() {
    var windowWidth = $(window).width();
    var colspan = 5;
    var table = '<table class="all-width-height-100">' +
        '<tr style="height: '+ windowWidth * 0.3 +'px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="'+ colspan +'" align="center">' +
        '<img style="width: '+ windowWidth * 0.3 +'px;" src="images/join/outurnshipjoin.png">'+
        '</td>' +
        '</tr>' +
        '<tr style="height: '+ windowWidth * 0.08 +'px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +
        '<tr style="height: '+ windowWidth * 0.15 +'px;">' +
        '<td colspan="'+ colspan +'" align="center">' +
        '<font class="font-30px-main-title">아웃턴쉽 회원가입</font>'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 24px;">' +
        '<td style="width: 10px;"></td>' +
        '<td colspan="4" class="td-border-puple">'+//
        '<font class="font-24px-454545-title">필수 가입정보 입력</font>' +
        '</td>'+
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +
        '<tr style="height: 16px;">' +
        '<td></td>' +
        '<td colspan="4">' +
        '<font class="font-16px-subtitle">아이디</font>'+
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<input type="text" class="input-text-area">'+
        '</td>' +
        '<td width="10px;"></td>' +
        '<td>' +
        '<div class="div-overlap">'+
        '<table class="all-width-height-100">'+
        '<tr valign="middle">'+
        '<td align="center">중복확인</td>'+
        '</tr>'+
        '</table>'+
        '</div>'+
        '</td>' +
        '<td width="10px;"></td>' +
        '</tr>' +
        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +
        '<tr style="height: 16px;">' +
        '<td></td>' +
        '<td colspan="4">' +
        '<font class="font-16px-subtitle">비밀번호</font>'+
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td colspan="4">' +
        '<input type="text" class="input-text-area">'+
        '</td>' +
        '</tr>' +
        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td></td>' +
        '<td colspan="4">' +
        '<font class="font-16px-subtitle">비밀번호 확인</font>'+
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td colspan="4">' +
        '<input type="text" class="input-text-area">'+
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td colspan="4">' +
        '<font class="font-12px-898989">* 8~12자로 영문 대/소문자, 숫자, 특수문자 2가지 이상으로 조합해주세요.</font>'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +
        '<tr style="height: 16px;">' +
        '<td></td>' +
        '<td colspan="4">' +
        '<font class="font-16px-subtitle">이름</font>'+
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td colspan="4">' +
        '<input type="text" class="input-text-area">'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +
        '<tr style="height: 16px;">' +
        '<td></td>' +
        '<td colspan="4">' +
        '<font class="font-16px-subtitle">휴대전화</font>'+
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td colspan="4">' +
        '<input type="text" class="input-text-area" placeholder="-를 제외하고 입력해주세요.">'+
        '</td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td colspan="4">' +
        '<input type="checkbox">'+
        '<font class="font-12px-898989">sms 및 이메일을 통한 상품 및 이벤트 정보 수집에 동의합니다.</font>'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +
        '<tr style="height: 16px;">' +
        '<td></td>' +
        '<td colspan="4">' +
        '<font class="font-16px-subtitle">이메일</font>'+
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td colspan="4">' +
        '<input type="text" class="input-text-area">'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td colspan="4">' +
        '<select class="selectbox-interests">'+
        '<option>@ 선택하세요.</option>'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +
        '<tr style="height: 16px;">' +
        '<td></td>' +
        '<td colspan="4">' +
        '<font class="font-16px-subtitle">관심분야</font>'+
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td colspan="4">' +
        '<select class="selectbox-interests">'+
        '<option>관심분야</option>'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +
        '<tr style="height: 16px;">' +
        '<td></td>' +
        '<td colspan="4">' +
        '<font class="font-16px-subtitle">학교명/소재지</font>'+
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td colspan="4">' +
        '<input type="text" class="input-text-area">'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +
        '<tr style="height: 16px;">' +
        '<td></td>' +
        '<td colspan="4">' +
        '<font class="font-16px-subtitle">학년</font>'+
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td colspan="4">' +
        '<input type="text" class="input-text-area">'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +

        '<tr style="height: 24px;">' +
        '<td style="width: 10px;"></td>' +
        '<td colspan="4" class="td-border-puple">'+//
        '<font class="font-24px-454545-title">이용 약관</font>' +
        '</td>'+
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td colspan="3">' +
        '<textarea class="textarea-setting" disabled="true">'+
        '</textarea>'+
        '</td>' +
        '<td></td>' +
        '</tr>'+

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +

        '<tr style="height: 24px;">' +
        '<td style="width: 10px;"></td>' +
        '<td colspan="4" class="td-border-puple">'+//
        '<font class="font-24px-454545-title">개인정보 수집 및 이용</font>' +
        '</td>'+
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td colspan="3">' +
        '<textarea class="textarea-setting" disabled="true">'+
        '</textarea>'+
        '</td>' +
        '<td></td>' +
        '</tr>'+

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td colspan="4">' +
        '<font>오픈클래스 회원을 가입하시게 되면 이용약관 및 개인정보 수집 및 이용에 관한 약관을 전체 동의하게 됩니다.</font>'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'"></td>' +
        '</tr>' +

        '<tr style="height: 15px;">' +
        '<td colspan="'+ colspan +'" align = "center">' +
        '<div class="div-button" style="width : 200px;">'+
        '<font class="font-button-text">회원가입 완료</font>'+
        '</div>'+
        '</td>' +
        '</tr>' +


        '</table>';
    $('#main-wrapper').empty();
    $('#main-wrapper').append(table);

}