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
    var windowWidth = $(window).width();
    var mainExplainTable = '<table class="all-width-height-100">' +
        '<tr style="height: 160px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<font class="font-30px-bold-ffffff">돌파구 취업캠프</font>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<div style="width: 360px; height: 60px;" class="div-program">' +
        '<font class="font-20px-ffffff">NCS 기반의 통합 취업 솔루션 제공</font>' +
        '</div>'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<table style="width: auto;">' +
        '<tr valign="center">' +
        '<td>' +
        '<img style="height: 20px;" src="/images/program/chekimg.png"/>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '<td width="140px;">' +
        '<font class="font-20px-ffffff">면접 컨설팅</font>' +
        '</td>' +
        '<td width="100px;"></td>' +
        '<td>' +
        '<img style="height: 20px;" src="/images/program/chekimg.png"/>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '<td width="140px;">' +
        '<font class="font-20px-ffffff">마인드 강화</font>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>'+

        '<tr style="height: 32px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<table style="width: auto;">' +
        '<tr valign="center">' +
        '<td>' +
        '<img style="height: 20px;" src="/images/program/chekimg.png"/>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '<td width="140px;">' +
        '<font class="font-20px-ffffff">입사서류 작성법</font>' +
        '</td>' +
        '<td width="100px;"></td>' +
        '<td>' +
        '<img style="height: 20px;" src="/images/program/chekimg.png"/>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '<td width="140px;">' +
        '<font class="font-20px-ffffff">토탈 취업 패키지</font>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>'+

        '<tr style="height: 32px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<table style="width: auto;">' +
        '<tr valign="center">' +
        '<td>' +
        '<img style="height: 20px;" src="/images/program/chekimg.png"/>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '<td width="140px;">' +
        '<font class="font-20px-ffffff">실전 모의고사</font>' +
        '</td>' +
        '<td width="100px;"></td>' +
        '<td>' +
        '<img style="height: 20px;" src="/images/program/chekimg.png"/>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '<td width="140px;">' +
        '<font class="font-20px-ffffff">취업 동향 파악</font>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>'+

        '<tr style="height: 160px;">' +
        '<td></td>' +
        '</tr>' +

        '</table>';



    $('#div-main-explain-area').empty();
    $('#div-main-explain-area').append(mainExplainTable);

    var imgWidth = 300;
    if(windowWidth > 960){
        imgWidth = 300;
    }
    else if(windowWidth > 600 && windowWidth < 960){
        imgWidth = 200;
    }else{
        imgWidth = 100;
    }
    var graphTable = '<table style="width: 100%;">' +
        '<tr style="height: 36px;">' +
        '<td></td>' +
        '</tr>' +

        '<td align="center">' +
        '<table style="width: auto; height: auto;">' +
        '<tr>' +
        '<td>' +
        '<img style="width: '+ imgWidth +'px;"  src="/images/program/interviewconsulting.png"/>' +
        '</td>' +
        '<td width="30px;"></td>' +
        '<td>' +
        '<img style="width: '+ imgWidth +'px;"  src="/images/program/interviewlecture.png"/>' +
        '</td>' +
        '<td width="30px;"></td>' +
        '<td>' +
        '<img style="width: '+ imgWidth +'px;"  src="/images/program/applicationdocuments.png"/>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 36px;">' +
        '<td></td>' +
        '</tr>' +
        '</table>';

    $('#div-main-graph-area').empty();
    $('#div-main-graph-area').append(graphTable);

    var advantageTable = '<table class="all-width-height-100">' +
        '<tr style="height: 100px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="15%"></td>' +
        '<td width="20px" align="left">' +
        '<font class="font-26px-bold-ffffff">·</font>' +
        '</td>' +
        '<td>' +
        '<font class="font-26px-bold-ffffff">청년취업마이크 토크콘서트</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">취업을 준비중인 청년 구직자들을 대상으로 최신 취업동향 및 트렌드,</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">취업 전문가들의 통찰력을 나눌 수 있는 소통의 장인 청년 취업마이크 토크 콘서트 프로그램을 운영, 공감대를 형성할 수 있는 콘텐츠들로</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">토크콘서트를 구성하여 취업에 대한 인식 제고 및 동기부여</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="15%"></td>' +
        '<td width="20px" align="left">' +
        '<font class="font-26px-bold-ffffff">·</font>' +
        '</td>' +
        '<td>' +
        '<font class="font-26px-bold-ffffff">NCS기반 청년 취업특강</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">NCS 기반 역량중심 채용시스템에서 취업 준비생들의 취업가능성을 높이기 위하여 구직 과정상 반드시 필요로 하는</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">자기소개서 작성, 면접, 프리젠테이션 스킬 등의 개선을 통한 역량 향상 교육훈련 및 컨설팅 프로그램 제공</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="15%"></td>' +
        '<td width="20px" align="left">' +
        '<font class="font-26px-bold-ffffff">·</font>' +
        '</td>' +
        '<td>' +
        '<font class="font-26px-bold-ffffff">취업역량 강화 캠프</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">취업을 앞둔 청년 구직자들을 대상으로 취업캠프를 실시하여</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">취업정보 제공, 취업역량 제고, 취업의욕 고취를 통해 조기 위업을 유도하는 프로그램,</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">고용동향, 직업심리검사, 기업/인사 담당자의 취업특강, 이미지메이킹, 모의면접, 취업성공 사례 등의 프로그램 제공</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="15%"></td>' +
        '<td width="20px" align="left">' +
        '<font class="font-26px-bold-ffffff">·</font>' +
        '</td>' +
        '<td>' +
        '<font class="font-26px-bold-ffffff">NCS 직업기초역량 강화 과정</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">NCS에서 제시한 직업기초능력표준을 토대로 기업/공공기관의 실사례를 반영하여 산업 현장 중심 교육과정으로 교육 프로그램을 구성</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">의사소통능력, 문제해결능력, 대인관계능력, 조직이해능력 교육등을 통한 기초능력 강화 도모</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="15%"></td>' +
        '<td width="20px" align="left">' +
        '<font class="font-26px-bold-ffffff">·</font>' +
        '</td>' +
        '<td>' +
        '<font class="font-26px-bold-ffffff">실전 NCS 취업역량(면접) 교육</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">NCS직업기초능력평가, NCS직무수행능력평가를 기반으로 한 취업역량</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">평가훈련 및 지도교육, 교육 후 개인 별 진단을 통한 취업상담, 취업전략수립, 취업기술향상 전략 등의 후속프로그램 연계</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 100px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +
        '</table>';

    $('#div-main-advantage-explain-area').empty();
    $('#div-main-advantage-explain-area').append(advantageTable);
}

function drawHeightMode() {
    var windowWidth = $(window).width();
    var mainExplainTable = '<table class="all-width-height-100">' +
        '<tr style="height: 60px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<font class="font-30px-bold-ffffff">돌파구 취업캠프</font>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<div style="width: 360px; height: 60px;" class="div-program">' +
        '<font class="font-20px-ffffff">NCS 기반의 통합 취업 솔루션 제공</font>' +
        '</div>'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<table style="width: auto;">' +
        '<tr valign="center">' +
        '<td>' +
        '<img style="height: 20px;" src="/images/program/chekimg.png"/>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '<td width="140px;">' +
        '<font class="font-20px-ffffff">면접 컨설팅</font>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>'+

        '<tr style="height: 32px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<table style="width: auto;">' +
        '<tr valign="center">' +
        '<td>' +
        '<img style="height: 20px;" src="/images/program/chekimg.png"/>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '<td width="140px;">' +
        '<font class="font-20px-ffffff">마인드 강화</font>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>'+

        '<tr style="height: 32px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<table style="width: auto;">' +
        '<tr valign="center">' +
        '<td>' +
        '<img style="height: 20px;" src="/images/program/chekimg.png"/>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '<td width="140px;">' +
        '<font class="font-20px-ffffff">입사서류 작성법</font>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>'+

        '<tr style="height: 32px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<table style="width: auto;">' +
        '<tr valign="center">' +
        '<td>' +
        '<img style="height: 20px;" src="/images/program/chekimg.png"/>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '<td width="140px;">' +
        '<font class="font-20px-ffffff">토탈 취업 패키지</font>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>'+

        '<tr style="height: 32px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<table style="width: auto;">' +
        '<tr valign="center">' +
        '<td>' +
        '<img style="height: 20px;" src="/images/program/chekimg.png"/>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '<td width="140px;">' +
        '<font class="font-20px-ffffff">실전 모의고사</font>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>'+

        '<tr style="height: 32px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<table style="width: auto;">' +
        '<tr valign="center">' +
        '<td>' +
        '<img style="height: 20px;" src="/images/program/chekimg.png"/>' +
        '</td>' +
        '<td width="10px;"></td>' +
        '<td width="140px;">' +
        '<font class="font-20px-ffffff">취업 동향 파악</font>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>'+

        '<tr style="height: 60px;">' +
        '<td></td>' +
        '</tr>' +

        '</table>';



    $('#div-main-explain-area').empty();
    $('#div-main-explain-area').append(mainExplainTable);

    var imgWidth = 300;
    if(windowWidth > 960){
        imgWidth = 300;
    }
    else if(windowWidth > 600 && windowWidth < 960){
        imgWidth = 200;
    }else{
        imgWidth = 100;
    }
    var graphTable = '<table style="width: 100%;">' +
        '<tr style="height: 36px;">' +
        '<td></td>' +
        '</tr>' +

        '<td align="center">' +
        '<table style="width: auto; height: auto;">' +
        '<tr>' +
        '<td>' +
        '<img style="width: '+ imgWidth +'px;"  src="/images/program/interviewconsulting.png"/>' +
        '</td>' +
        '<td width="30px;"></td>' +
        '<td>' +
        '<img style="width: '+ imgWidth +'px;"  src="/images/program/interviewlecture.png"/>' +
        '</td>' +
        '<td width="30px;"></td>' +
        '<td>' +
        '<img style="width: '+ imgWidth +'px;"  src="/images/program/applicationdocuments.png"/>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 36px;">' +
        '<td></td>' +
        '</tr>' +
        '</table>';

    $('#div-main-graph-area').empty();
    $('#div-main-graph-area').append(graphTable);

    var advantageTable = '<table class="all-width-height-100">' +
        '<tr style="height: 100px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="15%"></td>' +
        '<td width="20px" align="left">' +
        '<font class="font-21px-bold-ffffff">·</font>' +
        '</td>' +
        '<td>' +
        '<font class="font-21px-bold-ffffff">청년취업마이크 토크콘서트</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">취업을 준비중인 청년 구직자들을 대상으로 최신 취업동향 및 트렌드,</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">취업 전문가들의 통찰력을 나눌 수 있는 소통의 장인 청년 취업마이크 토크 콘서트 프로그램을 운영, 공감대를 형성할 수 있는 콘텐츠들로</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">토크콘서트를 구성하여 취업에 대한 인식 제고 및 동기부여</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="15%"></td>' +
        '<td width="20px" align="left">' +
        '<font class="font-21px-bold-ffffff">·</font>' +
        '</td>' +
        '<td>' +
        '<font class="font-21px-bold-ffffff">NCS기반 청년 취업특강</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">NCS 기반 역량중심 채용시스템에서 취업 준비생들의 취업가능성을 높이기 위하여 구직 과정상 반드시 필요로 하는</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">자기소개서 작성, 면접, 프리젠테이션 스킬 등의 개선을 통한 역량 향상 교육훈련 및 컨설팅 프로그램 제공</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="15%"></td>' +
        '<td width="20px" align="left">' +
        '<font class="font-21px-bold-ffffff">·</font>' +
        '</td>' +
        '<td>' +
        '<font class="font-21px-bold-ffffff">취업역량 강화 캠프</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">취업을 앞둔 청년 구직자들을 대상으로 취업캠프를 실시하여</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">취업정보 제공, 취업역량 제고, 취업의욕 고취를 통해 조기 위업을 유도하는 프로그램,</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">고용동향, 직업심리검사, 기업/인사 담당자의 취업특강, 이미지메이킹, 모의면접, 취업성공 사례 등의 프로그램 제공</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="15%"></td>' +
        '<td width="20px" align="left">' +
        '<font class="font-21px-bold-ffffff">·</font>' +
        '</td>' +
        '<td>' +
        '<font class="font-21px-bold-ffffff">NCS 직업기초역량 강화 과정</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">NCS에서 제시한 직업기초능력표준을 토대로 기업/공공기관의 실사례를 반영하여 산업 현장 중심 교육과정으로 교육 프로그램을 구성</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">의사소통능력, 문제해결능력, 대인관계능력, 조직이해능력 교육등을 통한 기초능력 강화 도모</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td width="15%"></td>' +
        '<td width="20px" align="left">' +
        '<font class="font-21px-bold-ffffff">·</font>' +
        '</td>' +
        '<td>' +
        '<font class="font-21px-bold-ffffff">실전 NCS 취업역량(면접) 교육</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">NCS직업기초능력평가, NCS직무수행능력평가를 기반으로 한 취업역량</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">평가훈련 및 지도교육, 교육 후 개인 별 진단을 통한 취업상담, 취업전략수립, 취업기술향상 전략 등의 후속프로그램 연계</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 100px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +
        '</table>';

    $('#div-main-advantage-explain-area').empty();
    $('#div-main-advantage-explain-area').append(advantageTable);
}