;(function ($) {
    $(function () {
        //isotope
        var isotopeContainer = $('.grid');
        isotopeContainer.isotope({
            itemSelector: '.grid-item',
            layoutMode: 'masonry'
        });
        // filter
        $('.bn-portfolio__filter button').click(function () {
            var $this = $(this);
            if (!$this.hasClass('filter-active')) {
                $this.parents('#option').find('.filter-active').removeClass('filter-active');
                $this.addClass('filter-active');
            }
            var selector = $this.attr('data-filter');
            isotopeContainer.isotope({
                itemSelector: '.grid-item',
                filter: selector
            });
            return false;
        });

        $('.bn-team-slider').slick({
            slide: '.bn-team-slide',
            dots: true,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            autoplay: true,
            pauseOnDotsHover: true,

        });

        $('.bn-testimonials-slider').slick({
            slide: '.bn-testimonials-slide',
            dots: true,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            autoplay: true,
            pauseOnDotsHover: true,

        });
        function initMap() {
            var center = {lat: 49.568592, lng: 34.585037};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: center
            });
            var image = '../img/favicon.png';
            var marker = new google.maps.Marker({
                position: center,
                map: map,
                icon: image
            });
        }
        initMap()

        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 2000);
        });$("#scroll").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 2000);
        });

    });
})(jQuery);