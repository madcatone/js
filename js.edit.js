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

//$(document).ready(function () {

//$(function (){
    $(document).ready(function () {
    //if ($("[id$='hidMain']").val() == "居家環境" )
      //  {
        //    $("[id$='ddlMain']").attr({value:"AC1008"});
      //  }

    
        
        if ($("[id$='hidMain']").val() == "其他陳情意見" )
        {
            $("[id$='ddlMain']").attr({value:"AB1001"});
            
        }
        else if ($("[id$='hidMain']").val() == "道路障礙" )
        {
            $("[id$='ddlMain']").attr({value:"AC1001"});
            
        }
        else if ($("[id$='hidMain']").val() == "違章建築" )
        {
            $("[id$='ddlMain']").attr({value:"AC1002"});
            
        }
        else if ($("[id$='hidMain']").val() == "路燈號誌" )
        {
            $("[id$='ddlMain']").attr({value:"AC1003"});
            
        }
        else if ($("[id$='hidMain']").val() == "空氣汙染" )
        {
            $("[id$='ddlMain']").attr({value:"AC1004"});
            
        }
        else if ($("[id$='hidMain']").val() == "噪音汙染" )
        {
            $("[id$='ddlMain']").attr({value:"AC1005"});
            
        }
        else if ($("[id$='hidMain']").val() == "水汙染" )
        {
            $("[id$='ddlMain']").attr({value:"AC1006"});
            
        }
        else if ($("[id$='hidMain']").val() == "廢棄物" )
        {
            $("[id$='ddlMain']").attr({value:"AC1007"});
            
        }
        else if ($("[id$='hidMain']").val() == "居家環境" )
        {
            $("[id$='ddlMain']").attr({value:"AC1008"});
            
        }
        else
        {
            $('[id$=ddlMain] :selected').text("--請選擇--");
        }
        //$("[id$='imgbtn_detail_next']").hide();
        //$('[id$=ddlMain] :selected').text($("[id$='hidMain']").val());
        //$("[id$='ddlMain']").attr("value",$("[id$='hidMain']").val())
        //$("[id$='ddlSub']").val($("[id$='hidSubid_']").val());
        listSub($("[id$='ddlMain']").val());
         $("[id$='txtDetail']").val("我在" + $('[id$=addressCC] :selected').text() + $("[id$='addressZ']").val() + "附近，發生" + $('[id$=ddlSub] :selected').text()+ "事件，請派人協助處理");
     
        
/*
$(document).ready(function  (){
    if ($("[id$='hidSub_']").val() )//!= "--請選擇--" )
    {

        //$("[id$='imgbtn_detail_next']").hide();
        //$('[id$=ddlSub] :selected').text($("[id$='hidSub_']").val());
        $("[id$='ddlSub']").delay(800).attr({value: $("[id$='hidSubid_']").val()});
        //$("[id$='ddlSub']").val($("[id$='hidSubid_']").val());
    }
    else
    {
        //$('[id$=ddlSub] :selected').text("--請選擇--");

    }
});
*/
});
$(function (){
    if ($("[id$='hidZone']").val() == "--請選擇--" )
    {

     $('[id$=addressCC] :selected').text("--請選擇--");
     
    } 
        //$("[id$='imgbtn_detail_next']").hide();
        //$('[id$=addressCC] :selected').text($("[id$='hidZone']").val());
        //$("[id$='addressCC']").html($("[id$='hidZone']").val())
       
        //$("[id$='ddlSub']").val($("[id$='hidSubid_']").val());
    
    else
    {
       
    var address = $("[id$='ddlcity']").val() + $("[id$='hidZone']").val() + $("[id$='addressZ']").val();
    var geocoder1 = new google.maps.Geocoder();  
    //alert(address);
    if (geocoder1) {
        //alert(address);
        geocoder1.geocode( { 'address': address }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
              var location2 = results[0].geometry.location
              //alert(results);
              //myLatlng = new google.maps.LatLng(location.lat(), location.lng());
              var myLatlng2 = results[0].geometry.location 
              var addr_city2 = results[0].address_components[4].long_name
                var addr_zone2 = results[0].address_components[3].long_name
                var addr_village2 = results[0].address_components[2].long_name
                var addr_zipcode2 = results[0].address_components[6].long_name
                $("[id$='addressCC']").attr({value: addr_zipcode2});
                 $("[id$='txtDetail']").val("我在" + $('[id$=addressCC] :selected').text() + $("[id$='addressZ']").val() + "附近，發生" + $('[id$=ddlSub] :selected').text()+ "事件，請派人協助處理");
     
            } 
        else {
              //alert("Geocode was not successful for the following reason: " + status + address);
            }
      });
    }

    }
});

