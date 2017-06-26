$(document).foundation();
var nav = responsiveNav(".js-nav-collapse", {closeOnNavClick: true});

function initMap(){
  var uluru = {lat: 43.585863, lng: -79.648084};
      var map = new google.maps.Map(document.getElementById('location__map'), {
        zoom: 12,
        scrollwheel: false,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
}

// (function($){
//   $(function(){
//     $('.parallax').parallax();
//   }); // end of document ready
// })(jQuery); // end of jQuery name space

// (function ($) {
//   $.fn.parallax = function () {
//     var window_width = $(window).width();
//     var isImgOn = false;
//
//     // Parallax Scripts
//     return this.each(function(i) {
//       var $this = $(this);
//       // $this.addClass('parallax');
//
//       function updateParallax(initial) {
//         var container_height;
//         if (window_width < 601) {
//           container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();
//         }
//         else {
//           container_height = ($this.height() > 0) ? $this.height() : 500;
//         }
//         var $img = $this.children("img").first();
//         var img_height = $img.height();
//         var parallax_dist = img_height - container_height;
//         var bottom = $this.offset().top + container_height;
//         var top = $this.offset().top;
//         var scrollTop = $(window).scrollTop();
//         var windowHeight = window.innerHeight;
//         var windowBottom = scrollTop + windowHeight;
//         var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
//         var parallax = Math.round((parallax_dist * percentScrolled));
//
//         if (initial || !isImgOn) {
//           $img.css('display', 'block');
//         }
//         if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
//           $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
//         }
//
//       }
//
//       // Wait for image load
//       $this.children("img").one("load", function() {
//         updateParallax(true);
//       }).each(function() {
//         if (this.complete) $(this).trigger("load");
//       });
//
//       $(window).scroll(function() {
//         window_width = $(window).width();
//         if(window_width < 1024){
//           $this.children("img").css('display', 'none');
//           isImgOn = false;
//           return;
//         }
//         updateParallax(false);
//       });
//
//       $(window).resize(function() {
//         window_width = $(window).width();
//         if(window_width < 1024){
//           $this.children("img").css('display', 'none');
//           isImgOn = false;
//           return;
//         }
//         updateParallax(false);
//       });
//
//     });
//
//   };
// }( jQuery ));
