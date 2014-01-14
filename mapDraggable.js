
$(function () {
    var placeMarker = [];
    //定義經緯度位置: 以政大校園的八角亭為例
    var latlng = new google.maps.LatLng(25.0139982, 121.4688272);
    //新北板橋香丘里
    //設定地圖參數
    var mapOptions = {
        zoom: 16, //初始放大倍數
        center: latlng, //中心點所在位置
        mapTypeId: google.maps.MapTypeId.ROADMAP //正常2D道路模式
    };
    //在指定DOM元素中嵌入地圖
    var map = new google.maps.Map(
                document.getElementById("map_canvas"), mapOptions);
    

    //加入標示點(Marker)
    var marker = new google.maps.Marker({
        position: latlng, //經緯度
        title: "請拖曳", //顯示文字

        draggable: true,
        animation: google.maps.Animation.DROP,
        map: map //指定要放置的地圖對象
    });



    //google.maps.event.addListener(map, 'dragend', function () { alert('map dragged'); });
    //google.maps.event.addListener(marker, 'dragend', function () { alert('marker dragged'); });
    google.maps.event.addListener(marker, 'dragend', geocodePosition);
  /*--  google.maps.event.addListener(map, 'click', function (e) {
        if (placeMarker) {
            for (i in placeMarker) {
                placeMarker[i].setMap(null);
            }
        }
        //placeMarker(e.latLng, map);
        var marker = new google.maps.Marker({
            postiton: event.latlng,
            map: map
        });
    });*/
});
//here for 定位
 function codeAddress() {
    var address = $("[id$='ddlcity']").val() + $('[id$=addressCC] :selected').text() + $("[id$='addressZ']").val();
    var geocoder1 = new google.maps.Geocoder();  
 //alert(address);
    if (geocoder1) {
        //alert(address);
      geocoder1.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
              var location = results[0].geometry.location;
              //alert(results);
              //myLatlng = new google.maps.LatLng(location.lat(), location.lng());
              myLatlng1 = results[0].geometry.location;
              var myOptions = {
                    zoom: 16,
                    center: myLatlng1,
                    mapTypeId: google.maps.MapTypeId.ROADMAP          
              };    
              map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
              
              //var image = 'carRed.png';
              var marker = new google.maps.Marker({
                  map: map, 
                  //icon: image,
                  draggable: true,
                  animation: google.maps.Animation.DROP,
                  position: results[0].geometry.location
              });     
            google.maps.event.addListener(marker, 'dragend', geocodePosition);
      //initArray();
      //startToFind();     
      //showResultsOnMap(map);    
          
        } 
    else {
              alert("Geocode was not successful for the following reason: " + status + address);
        }
      });
    }
  }  



      /*  var marker = new google.maps.Marker(
{
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: results[0].geometry.location
}); 
function placeMarker(position, map) {
    var pmarker = new google.maps.Marker({
        position: position,
        map: map
    });
    
   
    }
function codeAddress(){
    var geocoderA ;
    var mapA;
    var addressA = '<%= Request.QuertString["addressZ"] %>'
    if (geocoderA)
    {
        geocoderA.geocode({'addressA':address},
            function result(results,status){
            if (status == google.maps.GeocoderStatus.OK){
                map.setCenter(results[0].geometry.location);
                var markerA = new google.maps.Marker(
                {
                    map: mapA,
                    position: results[0].geometry.location
                });
            }
            else{
                alert("Geocode was not success : " + status);
            }
        });
    }

},*/



function geocodePosition(pos) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        latLng: pos["latLng"]
        //'address':address
    },
    function (results, status) {
        $('#address').val("")
        
                //alert("p0");
                if (status == google.maps.GeocoderStatus.OK) {
            //if (results[0].address_components[4].long_name == "新北市"){
                //map.setCenter(results[0].geometry.location);
                
                var addr = results[0].formatted_address
                //var myLat = results[0].geometry.LatLng
                var myLatLng = results[0].geometry.location
                

                //alert(results[0].geometry.location);
                //map.setCenter(latLng) //將地圖中心定位到查詢結果
                //marker.setPosition(latLng) //將標記點定位到查詢結果
                //marker.setTitle(addr) //重新設定標記點的title
                //市,區,里
                var addr_city = results[0].address_components[4].long_name
                var addr_zone = results[0].address_components[3].long_name
                var addr_village = results[0].address_components[2].long_name
                var addr_zipcode = results[0].address_components[6].long_name
                //var myLat = results[0].geometry.location.lat()
                //var myLng = results[0].grometry.location.lng()

            }
        
        else {
                $("#mapErrorMsg").html('Cannot determine address at this location.' + status).show(100);
            }
            //var addr = results[0].formatted_address
        var tmpZ = (addr.indexOf("區"));
        
        //var tmpC = (addr.indexOf("市"));
        if (tmpZ <0)  {
        $('#addressZ').val(tmpZ)
        }
        else{
          
        addr_n=(addr.slice(tmpZ+1))
        //$('#addressZ').val(addr_n);
		//addr_s=(addr.slice(tmpZ-2,tmpZ+1))
		//$('#addressC').val(addr_zone);
        $("[id$='ddlcity']").val(addr_city)
        $("[id$='addressZ']").val(addr_n)
        $("[id$='addressC']").val(addr_zone)
        $("[id$='addressCC']").attr("value",addr_zipcode)
        //$("[id$='addressCC']").val('<option value="' + addr_zipcode + '"></option>')
        $("[id$='ddlcity']").val(addr_city)
            var sel =  $("[id$='ddlSub']").val();
    //var sell = $("[id$='ddlMain']").val();
        $("[id$='hidSub']").val($('[id$=ddlSub] :selected').text());
        $("[id$='hidSubid']").val( $("[id$='ddlSub']").val());
        $("[id$='txtDetail']").val("我在" + $('[id$=addressCC] :selected').text() + $("[id$='addressZ']").val() + "附近，發生" + $('[id$=ddlSub] :selected').text()+ "事件，請派人協助處理");
     
        if ($("[id$='ddlSub']").val() == "AA0000")
            {
                //alert("123");

            }
            else
            {
                //alert("456");

            }
        }

        
            if (results[0].address_components[4].long_name !== "新北市"){
                alert("目前所在位置非 新北市 服務範圍");
            }

            else{}
});

}

$(document).ready(function() { 
  //綁定地址輸入框的keyup事件以即時重新定位
  $("#addressZ").bind("keyup",function(){ 
    GetAddressMarker();
    //$("#NowLatLng").html("【移動標記點後的位置】");
  }); 
});


       

 