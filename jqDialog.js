$(function () {
    $("#dialog-message").dialog({
    autoOpen: false,
    modal: true,
    width: 455,
    height: 300,
    /*
    buttons: {
    上傳: function () {
    document.getElementById('<%= Button1.ClientID %>').click();
        },
    關閉: function () {
    //location.href="vcaseDraft.aspx";
    $(this).dialog("close");
        }
    }*/
    });
    $("#opener").click(function () {
    $("#dialog-message").dialog("open");
        });
});
  
$(function () {
    $("#dialog-info").dialog({
    autoOpen: false,
    modal: true,
    width: 300,
    height: 200,
    /*
    function fncsave()
     {
        document.getElementById('<%= savebtn.ClientID %>').click();
     }

    buttons: {
    存為草稿: function () {
    location.href="vcaseDraft.aspx";
    $(this).dialog("close");
    },

    放棄通報: function () {
    location.href="vcaseNew.aspx";
    $(this).dialog("close");
        }
    }*/
    });
    $("#cancelButton").click(function () {
    $("#dialog-info").dialog("open");
        });
});
                               
$(function () {
    $("#dialog-draft").dialog({
    autoOpen: false,
    modal: true,
    width: 300,
    height: 200,
    
    });
    
    $("#draftButton").click(function () {
    var errorMsg = "";
    if ($("[id$=ddlMain]").val() == "1") {
        errorMsg = errorMsg + "主項目未選。\n"
        //alert("No Lamp !!");
        //return false;
    }
    if ($("[id$=ddlSub]").val() == "AA0000") {
        errorMsg = errorMsg + "次項目未選。\n"
        //alert("No  Sub !!");
        //return false;
    }
    /*
    if ($("[id$=addressZ]").val() == "") {
        errorMsg = errorMsg + "通報地址未填寫。\n"
        //alert("No  Sub !!");
        //return false;
    }
    if ($("[id$=txtDetail]").val() == "") {
        errorMsg = errorMsg + "通報內容未填寫。"
        //alert("No  Sub !!");
        //return false;
    } */
    if (errorMsg != "")
    {
        alert(errorMsg);
        //return false;
    }
    else{
    $("#dialog-draft").dialog("open");}
    });
});

/*
    buttons: {
    確定: function () {
    location.href="vcaseDraft.aspx";
    $(this).dialog("close");
        }
    }*/
$(function () {
    $("#dialog-secinfo").dialog({
    autoOpen: false,
    modal: true,
    width: 300,
    height: 200,
    
    });
    $("#sec_draftButton").click(function () {
    $("#dialog-secinfo").dialog("open");
    });
});



$(function () {
    $("#dialog-map").dialog({
    autoOpen: false,
    modal: true,
    width: 640,
    height: 480,
    buttons: {

    確定: function () {
    $(this).dialog("close");
        }
    }
    });
    $("#showmap img").click(function () {
    $( "#dialog-map" ).dialog({
        open: function( event, ui ) {
            //alert("dialog open");
            var address = $("[id$='Location_2']").text();
            var geocoder = new google.maps.Geocoder();  
//alert(geocoder);
            if (geocoder) {
              geocoder.geocode( { 'address': address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
//alert(results);
              var location = results[0].geometry.location;
              //myLatlng = new google.maps.LatLng(location.lat(), location.lng());
//alert(location);
                var infowindow = new google.maps.InfoWindow({
                content: results[0].formatted_address
                 });
               myLatlng = results[0].geometry.location;
                  var myOptions = {
                zoom: 16,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP          
                  };    
              map = new google.maps.Map(document.getElementById("dialog-map"), myOptions); 
              
              //var image = 'carRed.png';
                  var marker = new google.maps.Marker({
                      map: map, 
                  //icon: image,
                      //content: results[0].formatted_address,
                      position: results[0].geometry.location
                  });     
              
              //initArray();
              //startToFind();     
              //showResultsOnMap(map);  
              google.maps.event.addListener(marker, 'click', function() {
                 infowindow.open(map,marker);
                });  
                  
                } 
            else {
                      alert("Geocode was not successful for the following reason: " + status + address);
                }
      });
    }
        }
    });
    $("#dialog-map").dialog("open");
    //$("#map_canvas").dialog("open");
    });
});

$(function () {
    $("#dialog-delete").dialog({
    autoOpen: false,
    modal: true,
    width: 300,
    height: 200,
    
    });
    $("#deletedraft img").click(function () {
    $("#dialog-delete").dialog("open");
        });
});

$(function () {
    $("#dialog-check").dialog({
    autoOpen: false,
    modal: true,
    width: 300,
    height: 200,
    buttons: {

    確定: function () {
    $(this).dialog("close");
        }
    }
    
    });
    $("#chkButton").click(function () {
        if ( $('[id$=ddlSub] :selected').text() == "--請選擇--" ){
        $("#dialog-check").dialog("open");
        }
        else{
            return false;
            //$("#dialog-check").dialog("open");|| $("[id$='addressZ']").val=="" || $("[id$='ddlSub']").val==""
        }
    });
});

$(function () {
    $("#dialog-draftnew").dialog({
    autoOpen: false,
    modal: true,
    width: 300,
    height: 200,
    
    buttons: {
    確定: function () {
    location.href="vcaseDraft.aspx";
    $(this).dialog("close");
        },
    取消: function () {
    $(this).dialog("close");    
        }
    }
    
    });
    $("#draftNew").click(function () {
    $("#dialog-draftnew").dialog("open");
        });
});

$(function () {
    $("#dialog-newupload").dialog({
    autoOpen: false,
    modal: true,
    width: 630,
    height: 600,
    buttons: {
    確定: function () {
    $(this).dialog("close");
        }
    }
    
    });
    $("#uploader").click(function () {
    $("#dialog-newupload").dialog("open");
        });
});

$(function () {
    $("#dialog-oldupload").dialog({
    autoOpen: false,
    modal: true,
    width: 630,
    height: 600,
    buttons: {
    確定: function () {
    $(this).dialog("close");
        }
    }
    
    });
    $("#olduploader").click(function () {
    $("#dialog-oldupload").dialog("open");
        });
});


$(function (){
    if ($("[id$='txtPage']").val() == "1")
    {
        $("[id$='imgbtnFirst']").hide();
        $("[id$='imgbtnFirst2']").hide();
        $("[id$='imgbtnPrev']").hide();
        $("[id$='imgbtnPrev2']").hide();
    }
    else
    {
        $("[id$='imgbtnFirst']").show();
        $("[id$='imgbtnFirst2']").show();
        $("[id$='imgbtnPrev']").show();
        $("[id$='imgbtnPrev2']").show();
    }
});

$(function (){
    if ($("[id$='txtPage']").val() == $("[id$='txtTotal']").html() )
    {
        $("[id$='imgbtnFinal']").hide();
        $("[id$='imgbtnNext']").hide();
        $("[id$='imgbtnFinal2']").hide();
        $("[id$='imgbtnNext2']").hide();
    }
    else
    {
        $("[id$='imgbtnFinal']").show();
        $("[id$='imgbtnNext']").show();
        $("[id$='imgbtnFinal2']").show();
        $("[id$='imgbtnNext2']").show();
    }
});
                          
$(function (){
    if ($("[id$='txtPage3']").html() == "1" )
    {
        $("[id$='imgbtn_detail_prev']").hide();
        //$("[id$='imgbtn_detail_next']").hide();
    
    }
    else
    {
        $("[id$='imgbtn_detail_prev']").show();
        //$("[id$='imgbtn_detail_next']").show();

    }
});

$(function (){
    if ($("[id$='txtPage3']").html() == $("[id$='txtTotal3']").html() )
    {
        //$("[id$='imgbtn_detail_prev']").hide();
        $("[id$='imgbtn_detail_next']").hide();
    
    }
    else
    {
        //$("[id$='imgbtn_detail_prev']").show();
        $("[id$='imgbtn_detail_next']").show();

    }
});
     
