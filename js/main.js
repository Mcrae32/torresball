$(document).ready(function () {
    //scrolling
    jQuery(window).on('scroll', function () {
        var top = jQuery(document).scrollTop();
        var header = jQuery('header');
        var windowW = $(window).width();
        if (top > 0) {
            $('.if-s').addClass('sticky');
        } else {
            $('.if-s').removeClass('sticky');
        }
    });

    window.addEventListener('scroll', function (e) {
        const
            oldScroll = this.oldScroll || 0,
            newScroll = this.scrollY,
            //isScrollDown = newScroll > oldScroll;
            isScrollDown = newScroll > oldScroll && newScroll > 50;

        document.querySelector('header').classList.toggle('scroll-down', isScrollDown);
        this.oldScroll = newScroll;
    });

    // Header Search Toggle
    var $searchWrapper = $('.header-search-wrapper'),
        $body = $('body'),
        $searchToggle = $('.search-toggle'),
        widthWindow = document.documentElement.clientWidth;

    $searchToggle.on('click', function (e) {
        // $searchWrapper.toggleClass('show');
        // $(this).toggleClass('active');
        // $searchWrapper.find('input').focus();
        // e.preventDefault();

        if (widthWindow > 1299) {
            $searchWrapper.toggleClass('show');
            $(this).toggleClass('active');
            $searchWrapper.find('input').focus();
            e.preventDefault();
        }
    });

    $body.on('click', function (e) {
        if ($searchWrapper.hasClass('show')) {
            $searchWrapper.removeClass('show');
            $searchToggle.removeClass('active');
            $body.removeClass('is-search-active');
        }
    });

    $('.header-search').on('click', function (e) {
        e.stopPropagation();
    });

    function addingInput() {
        let widthWindow = document.documentElement.clientWidth;
        let searchWrapper = document.querySelector('.header-search-wrapper');
        if (widthWindow > 1299) {
            searchWrapper.classList.add('show');
        } else {
            searchWrapper.classList.remove('show');
        }
    }
    addingInput()
    $(window).resize(function () {
        addingInput()
    })

    //autoheight slider



    //Filter Toggle
    var $filterWrap = $('.widget .collapse');

    function checkWidth() {
        var windowWidth = $('body').innerWidth();
        if (windowWidth < 992) {
            $filterWrap.removeClass('show');
        }
    }
    checkWidth()

    $('#slider__heading').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('#news-block-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 2,
                    centerMode: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    arrows: false,
                }
            }
        ]
    });

    $('#leaders-of-sells-block-slider').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 2,
                    centerMode: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    arrows: false,
                }
            }
        ]
    });

    $('#recommend-block-slider').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 2,
                    centerMode: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    arrows: false,
                }
            }
        ]
    });

    //slider parthners
    $('.slider-brands').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    adaptiveHeight: true,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });

    $('.leader-positiions-wrap').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });

    /*superfish menu active*/
    // initialise plugin
    var menu = $('.menu').superfish({
        //add options here if required
    });

    // Mobile Menu Toggle - Show & Hide
    $('.mobile-menu-toggler').on('click', function (e) {
        $body.toggleClass('mmenu-active');
        $(this).toggleClass('active');
        e.preventDefault();
    });

    $('.mobile-menu-overlay, .mobile-menu-close').on('click', function (e) {
        $body.removeClass('mmenu-active');
        $('.menu-toggler').removeClass('active');
        e.preventDefault();
    });

    // Add Mobile menu icon arrows to items with children
    $('.mobile-menu').find('li').each(function () {
        var $this = $(this);

        /*if ( $this.find('ul').length ) {
            $('<span/>', {
                'class': 'mmenu-btn'
            }).appendTo($this.children('a'));
        }*/

        if ($this.find('ul').length) {
            $('<i/>', {
                'class': 'mmenu-btn fa fa-angle-down'
            }).appendTo($this.children('a'));
        }
    });

    // Mobile Menu toggle children menu
    $('.mmenu-btn').on('click', function (e) {
        var $parent = $(this).closest('li'),
            $targetUl = $parent.find('ul').eq(0);

        if (!$parent.hasClass('open')) {
            $targetUl.slideDown(300, function () {
                $parent.addClass('open');
            });
        } else {
            $targetUl.slideUp(300, function () {
                $parent.removeClass('open');
            });
        }

        e.stopPropagation();
        e.preventDefault();
    });

    // Clear All checkbox/remove filters in sidebar filter
    $('.sidebar-filter-clear').on('click', function (e) {
        $('.sidebar-shop').find('input').prop('checked', false);

        e.preventDefault();
    });

    //fancybox
    $("a.product-gallery-item").fancybox({
        'titlePosition': 'outside',
        'overlayColor': '#000',
        'overlayOpacity': 0.5,
        'loop': true
    });


});

