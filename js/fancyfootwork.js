var imgwidth;
var windowwidth;
var widthdiff;



$( document ).ready(function() {
    $("#mainhr").animate({width:'100%'}, 2000);
    //$(".myinterests .overlay").height($(".myinterests").height());
});

$( window ).resize(function() {
    //$(".myinterests .overlay").height($(".myinterests").height());
    $('.myskills').css('margin-bottom', $('.footer').height() + 'px');
});

var heroheight = $("#hero").outerHeight();

$(window).scroll(function(){
    if($(window).scrollTop() > (heroheight)){
        $(".scrolltotop").slideDown();
        $(function(){
            $("#typed").typed({
                strings: ["<white><black>Hello World!</black></white> <hairline>I'm Aaron.</hairline>"],
                typeSpeed: 20
            });
        });
    }
    else{
        $(".scrolltotop").slideUp();
    }
});

// (function($) {
//
//     /**
//     * Copyright 2012, Digital Fusion
//     * Licensed under the MIT license.
//     * http://teamdf.com/jquery-plugins/license/
//     *
//     * @author Sam Sehnert
//     * @desc A small plugin that checks whether elements are within
//     *     the user visible viewport of a web browser.
//     *     only accounts for vertical position, not horizontal.
//     */
//
//     $.fn.visible = function(partial) {
//
//         var $t            = $(this),
//         $w            = $(window),
//         viewTop       = $w.scrollTop(),
//         viewBottom    = viewTop + $w.height(),
//         _top          = $t.offset().top,
//         _bottom       = _top + $t.height(),
//         compareTop    = partial === true ? _bottom : _top,
//         compareBottom = partial === true ? _top : _bottom;
//
//         return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
//
//     };
//
// })(jQuery);
//
// var win = $(window);
//
// var allMods = $(".slideup");
//
// allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//         el.addClass("already-visible");
//     }
// });
//
// win.scroll(function(event) {
//
//     allMods.each(function(i, el) {
//         var el = $(el);
//         if (el.visible(true)) {
//             el.addClass("come-in");
//         }
//     });
//
// });

$(window).scroll(function(){
    $('.slidein').each(function(){
        var wScroll = $(window).scrollTop();
        var pos = $(this).offset().top;
        if (wScroll > pos - $(window).height() + 50) {
            $(this).addClass('animated zoomIn');
            $(this).css("visibility", "visible");
        }
    });
});

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
    $('.myskills').css('margin-bottom', $('.footer').height() + 'px');
});

$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});

$("img.location").hover(function(){
    $(this).css("opacity", 1);
    $(this).next().show();
    }, function(){
    $(this).css("opacity", 0.5);
    $(this).next().hide();
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if ((wScroll > $('.timeline1').offset().top - $(window).height() / 1.2 + 200) && (wScroll < $('.myinterests').offset().top)){
        $('.verticaltimeline').css("top", ($('.timeline1').offset().top + $(window).height()/8) + "px");
        $('.start').slideDown(250);
        $('.startyear').show();
        $('.verticaltimeline').show();
        var offset = wScroll - $('.verticaltimeline').offset().top + $(window).height() - 200;
        $('.timelngrow').css("transform", "scaleY(" + offset + ")");
    }

    if (wScroll < $('.timeline1').offset().top - $(window).height() / 1.2 + 200) {
        $('.verticaltimeline').hide();
        $('.startyear').hide();
        $('.start').hide(250);
    }

    var dpyStr = $('.profilephoto').css('background-position-y').substring(0, $('.profilephoto').css('background-position-y').length-2);
    var dpyInt = parseInt(dpyStr);
    var test = $('.profilephoto').offset().top - $(window).scrollTop();

    if (test < dpyInt + 40){
        $('.profilephoto').removeClass('periscopeparallax');
        $('.profilephoto').addClass('periscopefixed');
    }
})

$(function() {
    smoothScroll(1000);
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
