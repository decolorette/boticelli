(function($){
  var APP = window.APP || {};

  // Methods.
  // ------------------------------

  APP.googleMapsInitialize = function (canvas, latitude, longitude, zoom_factor, info) {
        var map_canvas = document.getElementById(canvas);
        
        var map_options = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: zoom_factor,
            scrollwheel: false,
            scaleControl: false,
            navigationControl: false,
            mapTypeControl: false,
            draggable: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options)

        var marker = new google.maps.Marker({    
            position: new google.maps.LatLng(latitude, longitude), 
            map: map
        });
        var infowindow = new google.maps.InfoWindow({
            content: info
        });
        map.disableScrollWheelZoom()
        infowindow.open(map,marker);
    }

    // Method Calls.
    // ------------------------------
    APP.googleMapsInitialize(canvas = 'mapCanvas', latitude = 48.842077, longitude = 2.321857, zoom_factor = 17, info = "Your address here.");
})(jQuery);