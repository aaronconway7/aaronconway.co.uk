$(document).ready(function() {

	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var top;
				if($(window).height() + target.offset().top > $(document).height()) {
					top = $(document).height() - $(window).height();
				} else {
					top = target.offset().top;
				}

				$('html, body').animate({
					scrollTop: top
				}, 1000, "swing");
				return false;
			}
		}
	});

	$(function(){
	    $("#typed1").typed({
	        strings: [ "<html>^200\n" +
	                    "<head>^200\n" +
	                    "      <title>^1000My Website</title>\n" +
	                    "</head>\n" +
	                    "<body>\n" +
	                    "      <h1>^500Hello World!</h1>\n" +
	                    "      <p>I'm Aar^150",

	                    "<html>\n" +
	                    "<head>\n" +
	                    "      <title>My Website</title>\n" +
	                    "</head>\n" +
	                    "<body>\n" +
	                    "      <h1>Hello World!</h1>\n" +
	                    "      <p>I'm 19.^1000",


	                    "<html>\n" +
	                    "<head>\n" +
	                    "      <title>My Website</title>\n" +
	                    "</head>\n" +
	                    "<body>\n" +
	                    "      <h1>Hello World!</h1>\n" +
	                    "      <p>I'm from Essex.^1000",


	                    "<html>\n" +
	                    "<head>\n" +
	                    "      <title>My Website</title>\n" +
	                    "</head>\n" +
	                    "<body>\n" +
	                    "      <h1>Hello World!</h1>\n" +
	                    "      <p>I'm a Computer Science Student.^1000",


	                    "<html>\n" +
	                    "<head>\n" +
	                    "      <title>My Website</title>\n" +
	                    "</head>\n" +
	                    "<body>\n" +
	                    "      <h1>Hello World!</h1>\n" +
	                    "      <p>I'm a designer.^1000",


	                    "<html>\n" +
	                    "<head>\n" +
	                    "      <title>My Website</title>\n" +
	                    "</head>\n" +
	                    "<body>\n" +
	                    "      <h1>Hello World!</h1>\n" +
	                    "      <p>But most importantly^300.^300.^300."
	                ],
	        contentType: 'text', // or 'html'
	        typeSpeed: 50,
	        backSpeed: 10,
	        backDelay: 100,
	        callback: function() {
	            //$('svg').addClass('animated fadeInUp');
	            $('.wrap').css("display", "flex");
	            $('#outro').show();
	            var tlHeight = $('#timeline').height();
	            $('.tl-line').height(tlHeight);
	            $('.scrolldownrow').fadeIn(5000);
	        }
	    });
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
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

	$('.introlink').click(function() {
	     $('#outro').hide();
	     $('#intro').show();
	});

	$('.outrolink').click(function() {
	     $('#intro').hide();
	     $('#outro').show();
	});

	$('.skip span').click(function() {
	    $('.wrap').css("display", "flex");
	    var tlHeight = $('#timeline').height();
	    $('.tl-line').height(tlHeight - 100 + "px");
	    $('html, body').animate({
	       scrollTop: $(".wrap").offset().top
	   }, 1000);
	   $('#outro').show();
	});

	$('.scrolldown').click(function() {
	    $('html, body').animate({
	       scrollTop: $(".wrap").offset().top
	   }, 1000);
	});

	$('.mobile-nav-toggle').on('click', function(){
	    var status = $(this).hasClass('is-open');
	    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
	    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
	});

	$('header h1').on('click', function(){
		if ($('header .logo').css('display') == 'block') {
			$('header .logo').hide();
			$('header .logo2').show();
		} else {
			$('header .logo2').hide();
			$('header .logo').show();
		}
	});

	$('footer .quote').on('click', function(){
		if ($('footer .quote-1').css('display') == 'block') {
			$('footer .quote-1').hide();
			$('footer .quote-2').show();
		} else {
			$('footer .quote-2').hide();
			$('footer .quote-1').show();
		}
	});

	$(window).scroll(function(){

		$('.growin').each(function(){
	        var wScroll = $(window).scrollTop();
	        var pos = $(this).offset().top;
	        if (wScroll > pos - $(window).height() + 50) {
	            $(this).addClass('animated zoomIn');
	            $(this).css("visibility", "visible");
	        }
	    });

		var wScroll = $(window).scrollTop();
	    var mainMid = $('.wrap').offset().top + $('.wrap').height()/2;
	    if (wScroll < mainMid){
	        $("#intro").show();
	        $("#outro").hide();
	    } else {
	        $("#intro").hide();
	        $("#outro").show();
	    }
	    var footerBottom = $('footer').offset().top + $('footer').height();
	    if (wScroll > footerBottom - $(window).height() + $(window).height()/2){
	        $("#typed2").typed({
	            strings: [  "        ... I'm ^300A^300a^300r^300o^300n^300.^2500 </p>\n" +
	                        "</body>\n" +
	                        "</html>"
	                    ],
	            contentType: 'text', // or 'html'
	            typeSpeed: 50,
	            backSpeed: 10,
	            backDelay: 1000,
	            callback: function() {

	            }
	        });
	    }
	    if (wScroll >= $('.wrap').offset().top && wScroll < $('.wrap').offset().top + $('.wrap').height() - $(window).height()) {
			if ($('header .header-position').css('display')=='none') {
				console.log("swag1");
	        	$('header .header-position').css('display', 'flex');
				$('header .header-position').addClass('animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
	            	$('header .header-position').removeClass('animated fadeInLeft');
	        	});
			}
	    } else if (wScroll > $('.wrap').offset().top + $('.wrap').height() - $(window).height() || wScroll < $('.wrap').offset().top){
			if ($('header .header-position').css('display')=='flex') {
				console.log("swag2");
				$('header .header-position').addClass('animated fadeOutLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
	            	$('header .header-position').removeClass('animated fadeOutLeft');
					$('header .header-position').css('display', 'none');
	        	});
			}
	    }
	});

	$(window).resize(function(){
	    var tlHeight = $('#timeline').height();
	    $('.tl-line').height(tlHeight - 100 + "px");
	});

});
