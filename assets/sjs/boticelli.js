(function($){
  var APP = window.APP || {};

  // Methods.
  // ------------------------------
        /**
     * Menu smooth scrolling
     * @return {[type]} [description]
     */
     APP.smoothScroll = function (menu) {
        $(menu).click(function(e) {
            e.preventDefault();
            $('html,body').scrollTo(this.hash, this.hash);
        });
    }

    APP.modalPrettyPhoto = function (options) {
        $("a[rel^='prettyPhoto']").prettyPhoto(options);
    }

    APP.backTop = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    }

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

        infowindow.open(map,marker);
    }

    // Method Calls.
    // ------------------------------
    APP.modalPrettyPhoto({overlay_gallery: false});

    APP.smoothScroll(menu = ".nav a");

    $("#back-top").hide();
    APP.backTop();

    APP.googleMapsInitialize(canvas = 'mapCanvas', latitude = 48.842077, longitude = 2.321857, zoom_factor = 17, info = "Your address here.");
    $('.carousel').carousel();
})(jQuery);