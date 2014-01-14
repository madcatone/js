var CommonBullteinWebServicePath = 'http://117.56.7.101/New_webservice/webservice/CaseWS.asmx/';
function post(action, params, succ, err) {
    var request = $.ajax({
        type: 'POST',
        url: action,
        asnyc: false,
        contentType: "application/json",
        dataType: 'json',
        data: params,
        timeout: 100000,
        success: succ,
        error: err
    });

    request.fail(function (jqXHR, textStatus) {
        if (textStatus == 'timeout') {
            // TODO
            alert('連線逾時');
        }
    });
    return request;
}
function VillageCaseList(pk, rows, page, keyword, startDate, endDate, listType, searchType) {
    //showLoading();
    var serviceName = 'VillageCaseList';
    var params = {
        "UserPK": pk,
        "rowsPrePage": rows,
        "PageNum": page,
        "KeyWord": keyword,
        "StartDate": startDate,
        "EndDate": endDate,
        "ListType": listType,
        "SearchType": searchType
    };
    var sendParams = JSON.stringify(params);
    return post(CommonBullteinWebServicePath + serviceName, sendParams, VillageCaseListResponse, serviceErr);
}
function VillageCaseListResponse(response) {
    var result = response.d;
    console.log(JSON.stringify(response));
    console.log(JSON.stringify(result));

}
function serviceErr(response) {
    console.log("連線失敗 " + JSON.stringify(response));
} 