function codeAddress() {
    var address = $("[id$='Label2']").value;
    var geocoder = new google.maps.Geocoder();  

    if (geocoder) {
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
      var location = results[0].geometry.location;
      //myLatlng = new google.maps.LatLng(location.lat(), location.lng());
      myLatlng = results[0].geometry.location;
          var myOptions = {
        zoom: 12,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP          
          };    
      map = new google.maps.Map(document.getElementById("dialog-map"), myOptions); 
      
      //var image = 'carRed.png';
          var marker = new google.maps.Marker({
              map: map, 
          //icon: image,
              position: results[0].geometry.location
          });     
      
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