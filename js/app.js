$(window).scroll(function() {
  var topDivOffsetTop = $(".ba-stat").offset().top;
  var viewPortSize = $(window).height();
  var triggerHeight = topDivOffsetTop - viewPortSize / 2;

  if ($(window).scrollTop() >= triggerHeight) {
    console.log("ANIMATION should start");
    $(".ba-stat-number").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text()
          },
          {
            duration: 1000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });

    $(this).off("scroll");
  }
});

$(document).ready(function() {
  

  $(".ba-slider")
    .slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    })
    .init(function(event, slick) {
      $(".main-preloader .preload")
        .eq(0)
        .addClass("animation");
    })
    .on("beforeChange", function(event, slick, currentSlide, nextSlide) {
      let preloaders = $(".main-preloader .preload");
      preloaders.eq(currentSlide).removeClass("animation");
      preloaders.eq(nextSlide).addClass("animation");
    }); 

    $('.ba-do-accordion__header').on('click', function() {
        
        $(this).parent().toggleClass('active');
    });

    $('.ba-section-map__link').on('click', function() {
      $('.ba-map').toggleClass('visible');
    })

});

var map;
function initMap() {
    let brooklyn = {lat: 40.65900428724487, lng: -73.91335897218187};
    map = new google.maps.Map(document.getElementById('map'),
        {
            center: brooklyn,
            zoom: 13
        }
    );
    var marker = new google.maps.Marker({
        position: brooklyn,
        map: map,
        icon: {
            url: 'images/map.jpg',
            origin: new google.maps.Point(0, 0),
            size: new google.maps.Size(32, 32)
        } 
    });

}
