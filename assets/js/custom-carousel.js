$(document).ready(function() {
        var owl = $('.partner-section .owl-carousel');
        owl.owlCarousel({
            margin: 30,
            nav: true,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        })
})
$(document).ready(function() {
        var owl = $('.sellers-section .owl-carousel');
        owl.owlCarousel({
            margin: 30,
            nav: true,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 4
                }
            }
        })
})
$(document).ready(function() {
        var owl = $('.testimonials-section .owl-carousel');
        owl.owlCarousel({
            margin: 30,
            nav: true,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 2
                }
            }
        })
})