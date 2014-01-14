//通報內容自動帶出
var items = {};
var MstID = {
    AC0000:"--請選擇--",
    AB1001:"其他陳情意見",
    AC1001:"道路障礙",
    AC1002:"違章建築",
    AC1003:"路燈號誌",
    AC1004:"空氣汙染",
    AC1005:"噪音汙染",
    AC1006:"水汙染",
    AC1007:"廢棄物",
    AC1008:"居家環境"};
var Subtmp;
var Subidtmp;

$(document).ready(function () {
    $("[id$='ddlMain']").change(function () {
    listSub($("[id$='ddlMain']").val());
    });

    $("[id$='ddlSub']").change(function () {
        showMsg();
        var subb = $('[id$=ddlSub] :selected').text();
    });
    
    $("[id$='addressCC']").change(function () {
        showMsg();

    });

    listSub($("[id$=ddlMain]").val());
    });

function showMsg() {
    //$("[id$='txtMsg']").val("我在....");
    var sel =  $("[id$='ddlSub']").val();
    //var sell = $("[id$='ddlMain']").val();
    $("[id$='hidSub']").val($('[id$=ddlSub] :selected').text());
    //Subtmp = $('[id$=ddlSub] :selected').text();
    //Subidtmp = $("[id$='ddlSub']").val();
    $("[id$='hidSubid']").val( $("[id$='ddlSub']").val());
    $("[id$='txtDetail']").val("我在" + $('[id$=addressCC] :selected').text() + $("[id$='addressZ']").val() + "附近，發生 "+ $('[id$=ddlSub] :selected').text()+ " 事件，請協助處理");
    //$("[id$='tmpSub']").text( $('[id$=ddlSub] :selected').text()) ;
    //$("[id$='label5']").text( $('[id$=ddlSub] :selected').text()) ;
    //$("[id$='tmpSubid']").text( $('[id$=ddlSub] :selected').val()) ;
    //items[sel].name 
    //items[sel].itemid
    }

function listSub(catelog) {
    var url = "Messages.ashx?catelog=" + catelog;
    $.ajax({
    url: url, //本例中，url為genXML.php
    type: 'POST', //根據實際情況，可以是'POST'或者'GET'
    //data: "name=adam&location=61dh",本例中沒有用到data
    dataType: 'json', //指定數據類型
    timeout: 15000, //設置超時1000 = 1秒
    //contentType: "application/json; charset=utf-8",
    error: function (res) {
    alert("查詢失敗" + res);
    }, //錯誤提示
    success: function (msgs) { //ajax請求成功後 do something with xml
    var i;
    $("[id$=ddlSub]").find('option').remove();
    for (i = 0; i < msgs.length; i++) {
        var msg = msgs[i];
        items["" + msg.itemid] = msg;
        $('[id$=ddlSub]').append('<option value="' + msg.itemid + '">' + msg.name + '</option>');
    }
    showMsg();

    if ( $("[id$='hidSubid']").val() == "AA0000")
    {
        if ( $("[id$='hidSubid_']").val() == "")
        {
        //$("[id$='ddlSub']").delay(800).attr({value: $("[id$='hidSubid_']").val()});
        $("[id$='ddlSub']").delay(800).attr({value: $("[id$='hidSubid']").val()});
        }
        else
        {
        $("[id$='ddlSub']").delay(800).attr({value: $("[id$='hidSubid_']").val()});
        }
    }
    else{
    $("[id$='ddlSub']").delay(800).attr({value: $("[id$='hidSubid_']").val()});
        }
    }
    //$("[id$='ddlSub']").delay(800).attr({value: $("[id$='hidSubid_']").val()});
    
    });
}
