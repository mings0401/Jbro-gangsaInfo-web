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
        '<tr style="height: 40px;;">' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '<tr style="height: 24px;">' +
        '<td width="40px;"></td>' +
        '<td>' +
        '<font class="font-24px-bold-454545">SNS 로그인</font>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 70px;;">' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '<tr style="height: 68px;">' +
        '<td width="40px;"></td>' +
        '<td align="center">' +
        '<div class="div-social-btn table-facebook">' +
        '<img style="float: left; margin-left: 15px;" src="/images/login/facebook.png"/>' +
        '<font style="float: left; margin-left: 30px;" class="font-social-text">페이스북 아이디로 로그인</font>' +
        '</div>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;;">' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '<tr style="height: 68px;">' +
        '<td width="40px;"></td>' +
        '<td align="center">' +
        '<div class="div-social-btn table-naver">' +
        '<img style="float: left; margin-left: 15px;" src="/images/login/naver.png"/>' +
        '<font style="float: left; margin-left: 30px;" class="font-social-text">네이버 아디로 로그인</font>' +
        '</div>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr>' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '</table>';

    var rightTable = '<table class="all-width-height-100 table-border">' +
        '<tr style="height: 40px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr style="height: 24px;">' +
        '<td width="40px;"></td>' +
        '<td colspan="2">' +
        '<font class="font-24px-bold-454545">아이디로 로그인</font>' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 70px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr valign="middle" style="height: 68px;">' +
        '<td width="40px;"></td>' +
        '<td>' +
        '<font class="font-16px-454545">아이디</font>' +
        '</td>' +
        '<td width="270px;">' +
        '<input type="text" class="input-login">' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr valign="middle" style="height: 68px;">' +
        '<td width="40px;"></td>' +
        '<td>' +
        '<font class="font-16px-454545">비밀번호</font>' +
        '</td>' +
        '<td width="270px;">' +
        '<input type="password" class="input-login">' +
        '</td>' +
        '<td width="40px;"></td>' +
        '</tr>'+

        '<tr style="height: 46px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td align="right">' +
        '<div class="div-find-btn"><font class="font-14px-898989">아이디 찾기</font></div>' +
        '<div class="div-find-btn"><font class="font-14px-898989">|</font></div>' +
        '<div class="div-find-btn"><font class="font-14px-898989">비밀번호 찾기</font></div>' +
        '<div class="div-find-btn"><font class="font-14px-898989">|</font></div>' +
        '<div class="div-find-btn"><font class="font-14px-898989">회원 가입</font></div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 44px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr style="height: 68px;">' +
        '<td></td>' +
        '<td colspan="2">' +
        '<div class="div-login-btn">LOG IN</div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="4"></td>' +
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
        '<tr style="height: 10px;;">' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="10px;"></td>' +
        '<td>' +
        '<font class="font-24px-bold-454545">SNS 로그인</font>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '</tr>'+

        '<tr style="height: 70px;;">' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '<tr style="height: 68px;">' +
        '<td width="10px;"></td>' +
        '<td align="center">' +
        '<div class="div-social-btn-height table-facebook">' +
        '<img style="float: left; margin-left: 5px;" src="/images/login/facebook.png"/>' +
        '<font style="float: left; margin-left: 20px;" class="font-social-text-height">페이스북 아이디로 로그인</font>' +
        '</div>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '</tr>'+

        '<tr style="height: 20px;;">' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '<tr style="height: 68px;">' +
        '<td width="10px;"></td>' +
        '<td align="center">' +
        '<div class="div-social-btn-height table-naver">' +
        '<img style="float: left; margin-left: 5px;" src="/images/login/naver.png"/>' +
        '<font style="float: left; margin-left: 20px;" class="font-social-text-height">네이버 아디로 로그인</font>' +
        '</div>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '</tr>'+

        '<tr>' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '</table>';

    var rightTable = '<table class="all-width-height-100 table-border">' +
        '<tr style="height: 10px;">' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="10px;"></td>' +
        '<td>' +
        '<font class="font-24px-bold-454545">아이디로 로그인</font>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '</tr>'+

        '<tr style="height: 70px;">' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '<tr style="height: 16px;">' +
        '<td></td>' +
        '<td>' +
        '<font class="font-16px-454545">아이디</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle" style="height: 68px;">' +
        '<td width="10px;"></td>' +
        '<td width="270px;">' +
        '<input type="text" class="input-login">' +
        '</td>' +
        '<td width="10px;"></td>' +
        '</tr>'+

        '<tr style="height: 16px;">' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '<tr style="height: 24px;">' +
        '<td></td>' +
        '<td>' +
        '<font class="font-16px-454545">비밀번호</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle" style="height: 68px;">' +
        '<td width="10px;"></td>' +
        '<td width="270px;">' +
        '<input type="password" class="input-login">' +
        '</td>' +
        '<td width="10px;"></td>' +
        '</tr>'+

        '<tr>' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '<tr>' +
        '<td></td>' +
        '<td align="right">' +
        '<div class="div-find-btn"><font class="font-14px-898989">아이디 찾기</font></div>' +
        '<div class="div-find-btn"><font class="font-14px-898989">|</font></div>' +
        '<div class="div-find-btn"><font class="font-14px-898989">비밀번호 찾기</font></div>' +
        '<div class="div-find-btn"><font class="font-14px-898989">|</font></div>' +
        '<div class="div-find-btn"><font class="font-14px-898989">회원 가입</font></div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 44px;">' +
        '<td colspan="3"></td>' +
        '</tr>' +

        '<tr style="height: 68px;">' +
        '<td></td>' +
        '<td>' +
        '<div class="div-login-btn-height">LOG IN</div>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 38px;">' +
        '<td colspan="3"></td>' +
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