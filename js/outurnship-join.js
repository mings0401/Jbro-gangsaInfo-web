$().w2layout({
    name: 'vc-requestPage-mainLayout-leftLayout',
    panels: [
        { title : makeTitle('환자 정보', '/images/list_icon.png'), style : 'margin-left : 10px;border-top : 2px solid #808080;', type: 'top', size : '175px', content: patientInfoTable },
        { type: 'main'}
    ],onRender: function(e) {
        

    }
});