'use strict';

(function ($, $win) {

    let sliders = [
        {
            pre_title: 'Creative Template 1',
            title: 'Welcome to MoGo 1',
            link_text: 'Learn more',
            link_url: '#'
        },
        {
            pre_title: 'Creative Template 2',
            title: 'Welcome to MoGo 2',
            link_text: 'Learn more',
            link_url: '#'
        },
        {
            pre_title: 'Creative Template 3',
            title: 'Welcome to MoGo 3',
            link_text: 'Learn more',
            link_url: '#'
        },
        {
            pre_title: 'Creative Template 4',
            title: 'Welcome to MoGo 4',
            link_text: 'Learn more',
            link_url: '#'
        }
    ];

    let counter = 0;

    let nav_link = $('.nav-link');

    let $click_changer_4 = $('#js-slider-click_4');
    let $click_changer_3 = $('#js-slider-click_3');
    let $click_changer_2 = $('#js-slider-click_2');
    let $click_changer_1 = $('#js-slider-click_1');

    let $sliders_progress = $('.top-slider-wrapper_progress');
    let $sliders_wrappers = $('.top-slider-wrapper');
    let $sliders_progress_length = $sliders_progress.length;

    //header elements
    let $top_header = $('.top-header');
    let $pre_title = $('#top-header__pre-title');
    let $title = $('#top-header__title');
    let $link = $('#top-header__link');
    let $loader = $('.loader');




    $($win).on('load', function () {
        $top_header.fadeIn(250);
        $loader.fadeOut(250,
            function () {
                animate_slides(counter);
            });

    });

    function switch_counter_and_rerun_slider(counter) {
        counter++;
        if (counter > ($sliders_progress_length - 1)) {
            counter = 0
        }
        animate_slides(counter);
    }

    $click_changer_4.on('click', function (counter) {
        $sliders_progress.stop();
        counter = 3;
        animate_slides(counter);
    });

    $click_changer_3.on('click', function (counter) {
        $sliders_progress.stop();
        counter = 2;
        animate_slides(counter);
    });

    $click_changer_2.on('click', function (counter) {
        $sliders_progress.stop();
        counter = 1;
        animate_slides(counter);
    });

    $click_changer_1.on('click', function (counter) {
        $sliders_progress.stop();
        counter = 0;
        animate_slides(counter);
    });


    function animate_slides(counter) {

        let current_slide = sliders[counter];

        let current_pre_title = current_slide.pre_title;
        let current_title = current_slide.title;
        let current_url = current_slide.link_url;
        let current_link_text = current_slide.link_text;

        //change slider texts


        $pre_title.text(current_pre_title);
        $title.text(current_title);
        $link.text(current_link_text);
        $link.attr("href", current_url);


        $sliders_wrappers.removeClass('active');
        $($sliders_wrappers[counter]).addClass('active');

        $sliders_progress.css({
            width: '0%'
        });

        $($sliders_progress[counter]).animate({
                width: '100%'
            },
            8000,
            function () {
                $top_header.fadeOut(300,
                    function () {
                        switch_counter_and_rerun_slider(counter);
                        $top_header.fadeIn(300);
                    });

            }
        );
    }

    //accordion

    $('.collapse').on('hidden.bs.collapse', function () {
        $($(this).parent().find('.accordion_arrow')).addClass('rotate');

        let images = $('.accordion_image');

        images.addClass('hidden');
    });

    $('.collapse').on('shown.bs.collapse', function () {
        $($(this).parent().find('.accordion_arrow')).removeClass('rotate');

        let imageClass = $(this).attr('data-image');

        let image = $(imageClass);
        let images = $('.accordion_image');

        images.addClass('hidden');
        image.removeClass('hidden');

    });


//acordion scroll


    //slick slider initialize
    $('.slick_slider').slick({
        dots:true
    });


    //scroll function


    nav_link.on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    let navbar = $('.navbar');

    $(function () {
        $(document).scroll(function () {
            navbar.toggleClass('scrolled', $(this).scrollTop() > navbar.height());
        });
    })




})(jQuery, window);

