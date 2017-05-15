;(function ($) {
    $(function () {

        $(document).ready(function(){
            $('.resentWorks-slider').slick({
                slide: '.resentWorks-slide',
                dots: true,
                // dotsClass: 'my-dots-class',
                autoplaySpeed: 3000,
                infinite: true,
                speed: 500,
                cssEase: 'linear',
                prevArrow: $('.arrowleft'),
                nextArrow: $('.arrowright'),
                autoplay: true,
                pauseOnDotsHover: true,

        });
            $('.ourTeam-slider').slick({
                slide: '.ourTeam-slide__wrapper',
                slidesToShow: 3,
                slidesToScroll: 1,
                // autoplay: true,
                cssEase: 'linear',
                prevArrow: ('.ourTeam-arrowleft'),
                nextArrow: ('.ourTeam-arrowright'),

                responsive: [
                    {breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 990,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
        });
        });

function initMap() {
    var center = {lat: -7.926847, lng: 112.637755};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: center,
        zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },
        scaleControl: true,
        scrollwheel: false

    });

    var image = './img/Pin-map.png';
    var marker = new google.maps.Marker({
        position: center,
        map: map,
        icon: image
    });

    marker.addListener('click', function() {
        // map.setZoom(8);
        map.setCenter(marker.getPosition());
    });
}
        initMap()

    });

    $(function() {

        $('#scrollTop').click(function() {
            $('html, body').animate({scrollTop: 0},2500);
            return false;
        })

    })

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });

})(jQuery);

