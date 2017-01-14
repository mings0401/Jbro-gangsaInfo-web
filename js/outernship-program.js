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
    var table = '<table class="all-width-height-100">' +
        '<tr style="height: 160px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<font class="font-30px-bold-ffffff">아웃턴쉽 프로그램</font>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 120px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<div style="width: 360px; height: 60px;" class="div-program">' +
        '<font class="font-20px-ffffff">교내 Internship program</font>' +
        '</div>'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<img src="/images/program/under_%20arrow.png"/>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<div style="width: 360px; height: 60px;" class="div-program">' +
        '<font class="font-20px-ffffff">연계기업 Outernship program</font>' +
        '</div>'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 160px;">' +
        '<td></td>' +
        '</tr>' +
        '</table>';

    $('#div-main-explain-area').empty();
    $('#div-main-explain-area').append(table);

    var explainTable = '<table class="all-width-height-100">' +
        '<tr style="height: 100px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<font class="font-26px-454545">internship program을 통한 우수인력의 선정과</font>' +
        '</td>' +
        '</tr>'+

        '<tr style="height: 14px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<font class="font-26px-454545">기업홍보를 동시에 </font>' +
        '<font class="font-30px-bold-9f5da4">Early Company </font>' +
        '<font class="font-26px-454545">직업체험</font>' +
        '</td>' +
        '</tr>'+



        '<tr style="height: 100px;">' +
        '<td></td>' +
        '</tr>' +
        '</table>';

    $('#div-main-text-explain-area').empty();
    $('#div-main-text-explain-area').append(explainTable);


    var imgWidth = '960';
    if(windowWidth < 1110){
        imgWidth = windowWidth * 0.7;
    }
    var graphTable = '<table class="all-width-height-100">' +
        '<tr style="height:60px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<img style="width: '+ imgWidth +'px;" src="/images/program/outernshiprogram.png"/>' +
        '</td>' +
        '</tr>' +

        '<tr style="height:60px;">' +
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
        '<font class="font-26px-bold-ffffff">현장 직업교육 체험 채널</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">취업희망 학생을 선발하여 별도의 기업소개, 안내를 통해 기업 이해도를 높임</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">주최기업에 맞춤형 직무 교육 설계 및 징행</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">기업 실부 경험 및 실질적 취업정보제공</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">직무 이외 마케팅, 기업 연구등을 통해 직간접적 기술 정보 습득의 기회의 장을 마련</font>' +
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
        '<font class="font-26px-bold-ffffff">현장 직업교육 체험 채널</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">&#39;교내인턴쉽&#39; 과 아웃턴쉽 프로그램을 운영으로 기존 인턴쉽 직무참여 경험을 쌓아 취업성공률을 높이고 기업의 부담감을 최소</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">기업현장실습으로 인한 기업과 학생과의 직무 참여 만족도를 높임</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">직무 아웃턴쉽 참여 우수자에게 인턴쉽 기회 부여 및 채용 연계 가능</font>' +
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
        '<font class="font-26px-bold-ffffff">기업-취업희망학생 매칭</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">직무 교육, 직무 실습, 기업교육, 기업홈보, 역량 실습 등 기업 맞춤형 인재 지원 설계가 가능</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">항복별 평가 점수표와 인적성 검사 등을 통해 체계적 인재 선별 및 선점 기회 지원</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">전문 기관의 참여 및 대행 시스템을 통해 기업인력, 비용 축소효과와 더불어 효율 및 신뢰성을 높은 인재 매칭 서비스를 이용 가능</font>' +
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
        '<font class="font-26px-bold-ffffff">기업업무 능력 역량 강화</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">기업 상황 분석을 통한 맞춤형 기업 홍보 방안 설계를 통해 기업 홍보 보안 대책 수립용이</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">분석을 토대로 홍보 및 마케딩 계획 수립 후 사전 교육 프로그램 운영을 통해 체게적 마케팅 역량 습득</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">대학생의 기업 홍보와 더불어 홍보 결과의 분석과 향후 대책 수립마련 등 기업의 2차 홍보에 대한 사전 자료 제공과 의견 수렴의 장 제공</font>' +
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
    var table = '<table class="all-width-height-100">' +
        '<tr style="height: 80px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<font class="font-30px-bold-ffffff">아웃턴쉽 프로그램</font>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 60px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<div style="width: 300px; height: 60px;" class="div-program">' +
        '<font class="font-20px-ffffff">교내 Internship program</font>' +
        '</div>'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr>' +
        '<td align="center">' +
        '<img src="/images/program/under_%20arrow.png"/>' +
        '</td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<div style="width: 300px; height: 60px;" class="div-program">' +
        '<font class="font-20px-ffffff">연계기업 Outernship program</font>' +
        '</div>'+
        '</td>' +
        '</tr>' +

        '<tr style="height: 80px;">' +
        '<td></td>' +
        '</tr>' +
        '</table>';

    $('#div-main-explain-area').empty();
    $('#div-main-explain-area').append(table);

    var explainTable = '<table class="all-width-height-100">' +
        '<tr style="height: 100px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<font class="font-14px-454545">internship program을 통한 우수인력의 선정과</font>' +
        '</td>' +
        '</tr>'+

        '<tr style="height: 14px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<font class="font-14px-454545">기업홍보를 동시에 </font>' +
        '<font class="font-20px-bold-9f5da4">Early Company </font>' +
        '<font class="font-14px-454545">직업체험</font>' +
        '</td>' +
        '</tr>'+


        '<tr style="height: 100px;">' +
        '<td></td>' +
        '</tr>' +
        '</table>';

    $('#div-main-text-explain-area').empty();
    $('#div-main-text-explain-area').append(explainTable);

    var imgWidth = '960';
    if(windowWidth < 960){
        imgWidth = windowWidth * 0.7;
    }
    var graphTable = '<table class="all-width-height-100">' +
        '<tr style="height:60px;">' +
        '<td></td>' +
        '</tr>' +

        '<tr valign="middle">' +
        '<td align="center">' +
        '<img style="width: '+ imgWidth +'px;" src="/images/program/outernshiprogram.png"/>' +
        '</td>' +
        '</tr>' +

        '<tr style="height:60px;">' +
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
        '<font class="font-21px-bold-ffffff">현장 직업교육 체험 채널</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">취업희망 학생을 선발하여 별도의 기업소개, 안내를 통해 기업 이해도를 높임</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">주최기업에 맞춤형 직무 교육 설계 및 징행</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">기업 실부 경험 및 실질적 취업정보제공</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">직무 이외 마케팅, 기업 연구등을 통해 직간접적 기술 정보 습득의 기회의 장을 마련</font>' +
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
        '<font class="font-21px-bold-ffffff">현장 직업교육 체험 채널</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">&#39;교내인턴쉽&#39; 과 아웃턴쉽 프로그램을 운영으로 기존 인턴쉽 직무참여 경험을 쌓아 취업성공률을 높이고 기업의 부담감을 최소</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">기업현장실습으로 인한 기업과 학생과의 직무 참여 만족도를 높임</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">직무 아웃턴쉽 참여 우수자에게 인턴쉽 기회 부여 및 채용 연계 가능</font>' +
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
        '<font class="font-21px-bold-ffffff">기업-취업희망학생 매칭</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">직무 교육, 직무 실습, 기업교육, 기업홈보, 역량 실습 등 기업 맞춤형 인재 지원 설계가 가능</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">항복별 평가 점수표와 인적성 검사 등을 통해 체계적 인재 선별 및 선점 기회 지원</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">전문 기관의 참여 및 대행 시스템을 통해 기업인력, 비용 축소효과와 더불어 효율 및 신뢰성을 높은 인재 매칭 서비스를 이용 가능</font>' +
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
        '<font class="font-21px-bold-ffffff">기업업무 능력 역량 강화</font>' +
        '</td>' +
        '<td width="15%"></td>' +
        '</tr>' +

        '<tr style="height: 30px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">기업 상황 분석을 통한 맞춤형 기업 홍보 방안 설계를 통해 기업 홍보 보안 대책 수립용이</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">분석을 토대로 홍보 및 마케딩 계획 수립 후 사전 교육 프로그램 운영을 통해 체게적 마케팅 역량 습득</font>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +

        '<tr style="height: 10px;">' +
        '<td colspan="4"></td>' +
        '</tr>' +

        '<tr>' +
        '<td colspan="2"></td>' +
        '<td>' +
        '<font class="font-14px-ffffff">대학생의 기업 홍보와 더불어 홍보 결과의 분석과 향후 대책 수립마련 등 기업의 2차 홍보에 대한 사전 자료 제공과 의견 수렴의 장 제공</font>' +
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