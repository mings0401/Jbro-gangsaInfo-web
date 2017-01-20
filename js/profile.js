$(function () {
    /*윈도창 크기가 변경될 때 이벤트*/
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
    var menuTable = '<table class="all-width-height-100">' +
        '<tr>' +
        '<td width="208px;">' +
        '<div class="div-profile-menu active" value="personal-info">개인정보</div>' +
        '</td>' +
        '<td></td>' +
        '<td width="208px;">' +
        '<div class="div-profile-menu" value="about-me">자기소개서</div>' +
        '</td>' +
        '<td></td>' +
        '<td width="208px;">' +
        '<div class="div-profile-menu" value="career">학력/경력</div>' +
        '</td>' +
        '<td></td>' +
        '<td width="208px;">' +
        '<div class="div-profile-menu" value="interests">관심분야</div>' +
        '</td>' +
        '</tr>' +
        '</table>';



    var marginTd = (windowWidth - 1024) / 2;
    var mainTable = '<table class="all-width-height-100">' +
        '<tr style="height: 60px;">' +
        '<td width="'+ marginTd +'px;"></td>' +
        '<td></td>' +
        '<td width="'+ marginTd +'px;"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="3" align="center">' +
        '<font class="font-30px-bold-454545">아웃터니 프로필</font>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>'+ menuTable +'</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<table id="table-change-area" class="all-width-height-100">' +
        '<tr>' +
        '<td class="td-change-area">'+ drawWidthMemberInfo() +'</td>' +
        '<td class="td-change-area hide"></td>' +
        '<td class="td-change-area hide">'+ drawWidthMemberInfo() +'</td>' +
        '<td class="td-change-area hide">'+ drawWidthMemberInfo() +'</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '</table>';

    $('#main-wrapper').empty();
    $('#main-wrapper').append(mainTable);

    $('.div-profile-menu').unbind('click');
    $('.div-profile-menu').bind('click', function () {
        if(!$(this).hasClass('active')){
            $('.active').removeClass('active');
            $(this).addClass('active');

            $('#table-change-area').find('td.td-change-area').addClass('hide');
            var value = $(this).attr("value");
            switch (value){
                case 'personal-info':
                    $('#table-change-area').find('td.td-change-area').eq(0).removeClass('hide');
                    break;
                case 'about-me':
                    $('#table-change-area').find('td.td-change-area').eq(1).removeClass('hide');
                    break;
                case 'career':
                    $('#table-change-area').find('td.td-change-area').eq(2).removeClass('hide');
                    break;
                case 'interests':
                    $('#table-change-area').find('td.td-change-area').eq(3).removeClass('hide');
                    break;
            }

        }

    });
}

function drawHeightMode() {

}

/**
 * 개인 정보 ( 가로 모드 )
 */
function drawWidthMemberInfo() {
    var mariginTd = 80;
    var memberInfoTable = '<table class="all-width-height-100">' +

        '<tr>' +
        '<td width="'+ mariginTd +'px;"></td>' +
        '<td width="180px;" colspan="2" rowspan="7" class="border-1px-solid-454545"></td>' +
        '<td width="44px;"></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">이름</font>' +
        '</td>' +
        '<td width="200px;">' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td width="50px;"></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">가입일</font>' +
        '</td>' +
        '<td width="200px;" colspan="3">' +
        '<input type="date" class="input-100per-30">' +
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
        '<font class="font-16px-454545">휴대폰번호</font>' +
        '</td>' +
        '<td width="200px;">' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td width="50px;"></td>' +
        '<td>' +
        '<font class="font-16px-454545">소속</font>' +
        '</td>' +
        '<td width="200px;" colspan="3">' +
        '<div class="all-width-height-100">'+
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">학교</font>'+
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">기업</font>'+
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">기관</font>'+
        '</div>'+
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
        '<td width="200px;">' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td width="50px;"></td>' +
        '<td>' +
        '<font class="font-16px-454545">소속명</font>' +
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
        '<font class="font-16px-454545">관심분야</font>' +
        '</td>' +
        '<td width="200px;">' +
        '<select class="input-100per-30">'+
        '<option>관심분야</option>'+
        '</select>'+
        '</td>' +
        '<td width="50px;"></td>' +
        '<td>' +
        '<font class="font-16px-454545">직급</font>' +
        '</td>' +
        '<td width="200px;" colspan="3">' +
        '<input type="text" class="input-100per-30"  colspan="3">' +
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
        '<div class="div-login-btn">수정완료</div>' +
        '</td>' +
        '</tr>' +

        '</table>';

    return memberInfoTable;
}