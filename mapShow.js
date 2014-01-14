$(function () {
    //var placeMarker = [];
    //定義經緯度位置: 以政大校園的八角亭為例
    var latlng = new google.maps.LatLng(25.0139982, 121.4688272);
    //新北板橋香丘里
    //設定地圖參數
    var mapOptions = {
        zoom: 14, //初始放大倍數
        center: latlng, //中心點所在位置
        mapTypeId: google.maps.MapTypeId.ROADMAP //正常2D道路模式
    };
    //在指定DOM元素中嵌入地圖
    var map = new google.maps.Map(
                document.getElementById("dialog-map"), mapOptions);
    

    //加入標示點(Marker)
    var marker = new google.maps.Marker({
        position: latlng, //經緯度
        //title: "請拖曳", //顯示文字
        //content: "這裡會顯示地址",

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