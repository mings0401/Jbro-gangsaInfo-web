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



    var marginTd = (windowWidth - 1040) / 2;
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
        '<td class="td-change-area hide">'+ drawWidthAuboutMe() +'</td>' +
        '<td class="td-change-area hide">'+ drawWidthCareer() +'</td>' +
        '<td class="td-change-area hide">'+ drawWidthInterests() +'</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +


        '<tr>' +
        '<td colspan="3" align="center">' +
        '<div class="div-login-btn">수정완료</div>' +
        '</td>' +
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
        '</tr>' +

        '<tr>' +
        '<td width="208px;">' +
        '<div class="div-profile-menu" value="career">학력/경력</div>' +
        '</td>' +
        '<td></td>' +
        '<td width="208px;">' +
        '<div class="div-profile-menu" value="interests">관심분야</div>' +
        '</td>' +
        '</tr>' +
        '</table>';



    var mainTable = '<table class="all-width-height-100">' +
        '<tr style="height: 60px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<font class="font-30px-bold-454545">아웃터니 프로필</font>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td>'+ menuTable +'</td>' +
        '</tr>' +

        '<tr>' +
        '<td>' +
        '<table id="table-change-area" class="all-width-height-100">' +
        '<tr>' +
        '<td class="td-change-area">'+ drawHeightMemberInfo() +'</td>' +
        '<td class="td-change-area hide">'+ drawWidthAuboutMe() +'</td>' +
        '<td class="td-change-area hide">'+ drawWidthCareer() +'</td>' +
        '<td class="td-change-area hide">'+ drawWidthInterests() +'</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>' +


        '<tr>' +
        '<td align="center">' +
        '<div class="div-login-btn" style="width:300px !important;">수정완료</div>' +
        '</td>' +
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

/**
 * 개인 정보 ( 가로 모드 )
 */
function drawWidthMemberInfo() {
    var marginTd = 72;
    var memberInfoTable = '<table class="all-width-height-100">' +

        '<tr>' +
        '<td width="'+ marginTd +'px;"></td>' +
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
        '<td width="'+ marginTd +'px;"></td>' +
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
        '<div class="div-logo-btn">사진 첨부하기</div>' +
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


        '</table>';

    return memberInfoTable;
}

/**
 * 개인 정보 ( 가로 모드 )
 */
function drawHeightMemberInfo() {
    var marginTd = 72;
    var memberInfoTable = '<table class="all-width-height-100">' +

        '<tr style="height: 168px;">' +
        '<td width="'+ marginTd +'px;"></td>' +
        '<td colspan="2" align="center">' +
        '<div class="border-1px-solid-454545" style="width: 180px; height: 168px;"></div>' +
        '</td>' +
        '<td width="'+ marginTd +'px;"></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td colspan="2" align="center">' +
        '<div class="div-logo-btn">사진 첨부하기</div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">이름</font>' +
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
        '<font class="font-16px-454545">가입일</font>' +
        '</td>' +
        '<td>' +
        '<input type="date" class="input-100per-30">' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td width="90px;">' +
        '<font class="font-16px-454545">휴대폰번</font>' +
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
        '<font class="font-16px-454545">소속</font>' +
        '</td>' +
        '<td>' +
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
        '<font class="font-16px-454545">소속명</font>' +
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
        '<font class="font-16px-454545">관심분야</font>' +
        '</td>' +
        '<td>' +
        '<select class="input-100per-30">'+
        '<option>관심분야</option>'+
        '</select>'+
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
        '</table>';

    return memberInfoTable;
}

/**
 * 자기소개서 ( 가로 모드 )
 * @returns {string}
 */
function drawWidthAuboutMe() {
    var marginTd = 72;
    var table = '<table class="all-width-height-100">' +
        '<tr style="height : 360px;">' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '<td style="border: 1px solid #454545;">' +
        '<textarea style="width: 100%; height: 100%; border: none;" placeholder=" 성장과정, 성격, 자신만의 장단점 필수 (최대 5000자)"></textarea>' +
        '</td>' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td style="background-color: #f8f8f8; height: 30px; border: 1px solid #454545;" align="center">' +
        '<font>▼  입력창 크기 자동 조절</font>' +
        '</td>' +
        '<td style=""></td>' +
        '</tr>' +
        '</table>';

    return table;
}

function drawWidthCareer() {
    var marginTd = 72;
    var table = '<table class="all-width-height-100">' +
        '<tr style="height: 20px;">' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '<td colspan="6" class="td-border-puple">' +
        '<font class="font-16px-454545" style="margin-left: 6px;">학력</font>' +
        '</td>' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '</tr>' +

        '<tr style="height: 22px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 20px;">' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545" style="margin-left: 6px;">초등학교</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30" placeholder="학교명">' +
        '</td>' +
        '<td width="16ppx;"></td>' +
        '<td>' +
        '<input type="text" class="input-100per-30" placeholder="기간">' +
        '</td>' +
        '<td width="16ppx;"></td>' +
        '<td>' +
        '<input type="text" class="input-100per-30" placeholder="소재지">' +
        '</td>' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 20px;">' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545" style="margin-left: 6px;">중학교</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30" placeholder="학교명">' +
        '</td>' +
        '<td width="16ppx;"></td>' +
        '<td>' +
        '<input type="text" class="input-100per-30" placeholder="기간">' +
        '</td>' +
        '<td width="16ppx;"></td>' +
        '<td>' +
        '<input type="text" class="input-100per-30" placeholder="소재지">' +
        '</td>' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 20px;">' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '<td width="100px;">' +
        '<font class="font-16px-454545" style="margin-left: 6px;">고등학교</font>' +
        '</td>' +
        '<td>' +
        '<input type="text" class="input-100per-30" placeholder="학교명">' +
        '</td>' +
        '<td width="16ppx;"></td>' +
        '<td>' +
        '<input type="text" class="input-100per-30" placeholder="기간">' +
        '</td>' +
        '<td width="16ppx;"></td>' +
        '<td>' +
        '<input type="text" class="input-100per-30" placeholder="소재지">' +
        '</td>' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '</tr>' +

        '<tr style="height: 40px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 20px;">' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '<td colspan="6" class="td-border-puple">' +
        '<font class="font-16px-454545" style="margin-left: 6px;">경력</font>' +
        '</td>' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '</tr>' +

        '<tr style="height: 22px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 20px;">' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '<td>' +
        '<font class="font-16px-454545" style="margin-left: 6px;">회사명</font>' +
        '</td>' +
        '<td colspan="5">' +
        '<input type="text" class="input-100per-30" placeholder="또는 대외활동, 동아리활동">' +
        '</td>' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 20px;">' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '<td>' +
        '<font class="font-16px-454545" style="margin-left: 6px;">담당 업무</font>' +
        '</td>' +
        '<td colspan="5">' +
        '<input type="text" class="input-100per-30" placeholder="매장관리, 회계업무, 동아리 회장 등">' +
        '</td>' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 20px;">' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '<td>' +
        '<font class="font-16px-454545" style="margin-left: 6px;">기간</font>' +
        '</td>' +
        '<td colspan="5">' +
        '<input type="text" class="input-100per-30">' +
        '</td>' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '</tr>' +

        '<tr style="height: 20px;">' +
        '<td colspan="8"></td>' +
        '</tr>' +

        '<tr style="height: 20px;">' +
        '<td colspan="6"></td>' +
        '<td width="120px;">' +
        '<div class="div-logo-btn">경력 추가</div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '</table>';

    return table;
}

function drawWidthInterests() {
    var marginTd = 72;
    var table = '<table class="all-width-height-100">' +
        '<tr>' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '<td>' +
        '<div style="width: 100%; height: 100%;">' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">과학</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">교육</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">미디어</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">사회경제</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">소외계층</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">예술</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">경영</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">IT</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">인권</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">인문</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">적정기술</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">정치</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">지역개발</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">환경</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">마케팅</font>'+
        '</div>' +

        '<div class="font-16px-454545 item-float-left div-interests-area">' +
        '<input type="checkbox">'+
        '<font style="margin-left: 3px;" class="font-14px-454545">회계/업무</font>'+
        '</div>' +

        '</div>' +
        '</td>' +
        '<td width="'+ marginTd + 'px;"></td>' +
        '</tr>' +
        '</table>';

    return table;
}