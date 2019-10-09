 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });




	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var tooltip = function () {
		$('.material-tooltip-smaller').tooltip({
			template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-inner"></div></div>'
		});
	};
	tooltip();

	var fade = function () {
		$('.warp button').mouseenter(function (e) {
			$(this).siblings().stop().fadeTo(100, 0.2);
		});
		$('.warp button').mouseout(function (e) {
			$(this).siblings().stop().fadeTo(100, 1);

		});
	};
	fade();


// 弹窗功能
	var hade = function () {
		$(".yard").click(function(){
			$(".firstImage").hide();
			$(".yardImage").show();
			$(".tips").hide("slow")
		});
		$(".kitchen").click(function(){
			$(".firstImage").hide();
			$(".kitchenImage").show();
			$(".tips").hide("slow")
		});
		$(".bedroom").click(function(){
			$(".firstImage").hide();
			$(".bedroomImage").show();
			$(".tips").hide("slow")
		});
		$(".living").click(function(){
			$(".firstImage").hide();
			$(".livingImage").show();
			$(".tips").hide("slow")
		});
		$(".bathroom").click(function(){
			$(".firstImage").hide();
			$(".bathroomImage").show();
			$(".tips").hide("slow")
		});
		$(".back").click(function(){
			$(".firstImage").show();
			$(".yardImage").hide();
			$(".kitchenImage").hide();
			$(".bedroomImage").hide();
			$(".livingImage").hide();
			$(".bathroomImage").hide();
			$(".yards,.kitchens,.bedrooms,.livings,.bathrooms").hide();
		});
		$(".leaving1").click(function(){
			$(".checklist-1").show();
			$(".checklist-2").hide();
			$(".checklist-3").hide();
			$(".checklist-4").hide();
		});
		$(".leaving2").click(function(){
			$(".checklist-2").show();
			$(".checklist-1").hide();
			$(".checklist-3").hide();
			$(".checklist-4").hide();
		});
		$(".leaving3").click(function(){
			$(".checklist-3").show();
			$(".checklist-1").hide();
			$(".checklist-2").hide();
			$(".checklist-4").hide();
		});
		$(".leaving4").click(function(){
			$(".checklist-4").show();
			$(".checklist-1").hide();
			$(".checklist-2").hide();
			$(".checklist-3").hide();
		});
	};
	hade();

	var show = function () {
		$(".yard").mouseover(function(){
			$('.tips').show()
			$('.yardCon').show("slow")
			$('.kitchenCon,.livingCon,.bedroomCon,.bathroomCon').hide()
			$('.yards').hide("slow")
		});

		$(".kitchen").mouseover(function(){
			$('.tips').show()
			$('.kitchenCon').show("slow")
			$('.yardCon,.livingCon,.bedroomCon,.bathroomCon').hide()
			$('.yards').hide("slow")
		});

		$(".bedroom").mouseover(function(){
			$('.tips').show()
			$('.bedroomCon').show("slow")
			$('.kitchenCon,.livingCon,.yardCon,.bathroomCon').hide()
			$('.yards').hide("slow")
		});

		$(".bathroom").mouseover(function(){
			$('.tips').show()
			$('.bathroomCon').show("slow")
			$('.kitchenCon,.livingCon,.bedroomCon,.yardCon').hide()
			$('.yards').hide("slow")
		});

		$(".living").mouseover(function(){
			$('.tips').show()
			$('.livingCon').show("slow")
			$('.kitchenCon,.yardCon,.bedroomCon,.bathroomCon').hide()
			$('.yards').hide("slow")
		});

		$(".pool").mouseover(function(){
			$('.yards').show()
			$('.poolCon').show("slow")
			$('.equipmentCon,.bbqCon,.plantCon,.maintenanceCon').hide()
			$('.tips').hide("slow")
		});

		$(".equipment").mouseover(function(){
			$('.yards').show()
			$('.equipmentCon').show("slow")
			$('.poolCon,.bbqCon,.plantCon,.maintenanceCon').hide()
			$('.tips').hide("slow")
		});

		$(".bbq").mouseover(function(){
			$('.yards').show()
			$('.bbqCon').show("slow")
			$('.poolCon,.equipmentCon,.plantCon,.maintenanceCon').hide()
			$('.tips').hide("slow")
		});

		$(".plant").mouseover(function(){
			$('.yards').show()
			$('.plantCon').show("slow")
			$('.poolCon,.equipmentCon,.bbqCon,.maintenanceCon').hide()
			$('.tips').hide("slow")
		});

		$(".maintenance").mouseover(function(){
			$('.yards').show()
			$('.maintenanceCon').show("slow")
			$('.poolCon,.equipmentCon,.bbqCon,.plantCon').hide()
			$('.tips').hide("slow")
		});

		$(".furniture").mouseover(function(){
			$('.bedrooms').show()
			$('.furnitureCon').show("slow")
			$('.toyCon,.changetableCon,.bedCon').hide()
			$('.tips').hide("slow")
		});
		$(".toy").mouseover(function(){
			$('.bedrooms').show()
			$('.toyCon').show("slow")
			$('.furnitureCon,.changetableCon,.bedCon').hide()
			$('.tips').hide("slow")
		});
		$(".changetable").mouseover(function(){
			$('.bedrooms').show()
			$('.changetableCon').show("slow")
			$('.toyCon,.furnitureCon,.bedCon').hide()
			$('.tips').hide("slow")
		});
		$(".bed").mouseover(function(){
			$('.bedrooms').show()
			$('.bedCon').show("slow")
			$('.toyCon,.changetableCon,.furnitureCon').hide()
			$('.tips').hide("slow")
		});

		$(".cupboard").mouseover(function(){
			$('.kitchens').show()
			$('.cupboardCon').show("slow")
			$('.dinningCon,.storageCon,.stovetopCon,.microovenCon,.ovenCon,.accessCon').hide()
			$('.tips').hide("slow")
		});
		$(".dinning").mouseover(function(){
			$('.kitchens').show()
			$('.dinningCon').show("slow")
			$('.cupboardCon,.storageCon,.stovetopCon,.microovenCon,.ovenCon,.accessCon').hide()
			$('.tips').hide("slow")
		});
		$(".stovetop").mouseover(function(){
			$('.kitchens').show()
			$('.stovetopCon').show("slow")
			$('.dinningCon,.storageCon,.cupboardCon,.microovenCon,.ovenCon,.accessCon').hide()
			$('.tips').hide("slow")
		});
		$(".storage").mouseover(function(){
			$('.kitchens').show()
			$('.storageCon').show("slow")
			$('.dinningCon,.cupboardCon,.stovetopCon,.microovenCon,.ovenCon,.accessCon').hide()
			$('.tips').hide("slow")
		});
		$(".microoven").mouseover(function(){
			$('.kitchens').show()
			$('.microovenCon').show("slow")
			$('.dinningCon,.storageCon,.stovetopCon,.cupboardCon,.ovenCon,.accessCon').hide()
			$('.tips').hide("slow")
		});
		$(".oven").mouseover(function(){
			$('.kitchens').show()
			$('.ovenCon').show("slow")
			$('.dinningCon,.storageCon,.stovetopCon,.microovenCon,.cupboardCon,.accessCon').hide()
			$('.tips').hide("slow")
		});
		$(".access").mouseover(function(){
			$('.kitchens').show()
			$('.accessCon').show("slow")
			$('.dinningCon,.storageCon,.stovetopCon,.microovenCon,.cupboardCon,.ovenCon').hide()
			$('.tips').hide("slow")
		});


		$(".tv").mouseover(function(){
			$('.livings').show()
			$('.tvCon').show("slow")
			$('.curtainCon,.coffeetableCon,.sofaCon,.floorCon,.doorCon').hide()
			$('.tips').hide("slow")
		});

		$(".curtain").mouseover(function(){
			$('.livings').show()
			$('.curtainCon').show("slow")
			$('.tvCon,.coffeetableCon,.sofaCon,.floorCon,.doorCon').hide()
			$('.tips').hide("slow")
		});

		$(".coffeetable").mouseover(function(){
			$('.livings').show()
			$('.coffeetableCon').show("slow")
			$('.curtainCon,.tvCon,.sofaCon,.floorCon,.doorCon').hide()
			$('.tips').hide("slow")
		});

		$(".sofa").mouseover(function(){
			$('.livings').show()
			$('.sofaCon').show("slow")
			$('.curtainCon,.coffeetableCon,.tvCon,.floorCon,.doorCon').hide()
			$('.tips').hide("slow")
		});

		$(".floor").mouseover(function(){
			$('.livings').show()
			$('.floorCon').show("slow")
			$('.curtainCon,.coffeetableCon,.sofaCon,.tvCon,.doorCon').hide()
			$('.tips').hide("slow")
		});

		$(".door").mouseover(function(){
			$('.livings').show()
			$('.doorCon').show("slow")
			$('.curtainCon,.coffeetableCon,.sofaCon,.floorCon,.tvCon').hide()
			$('.tips').hide("slow")
		});

		$(".washing").mouseover(function(){
			$('.bathrooms').show()
			$('.washingCon').show("slow")
			$('.bathdoorCon,.bathstorageCon,.hotCon,.waterCon').hide()
			$('.tips').hide("slow")
		});
		$(".bathstorage").mouseover(function(){
			$('.bathrooms').show()
			$('.washbathstorageCon').show("slow")
			$('.bathdoorCon,.washingCon,.hotCon,.waterCon').hide()
			$('.tips').hide("slow")
		});
		$(".bathdoor").mouseover(function(){
			$('.bathrooms').show()
			$('.bathdoorCon').show("slow")
			$('.washingCon,.bathstorageCon,.hotCon,.waterCon').hide()
			$('.tips').hide("slow")
		});
		$(".hot").mouseover(function(){
			$('.bathrooms').show()
			$('.hotCon').show("slow")
			$('.bathdoorCon,.bathstorageCon,.washingCon,.waterCon').hide()
			$('.tips').hide("slow")
		});
		$(".water").mouseover(function(){
			$('.bathrooms').show()
			$('.waterCon').show("slow")
			$('.bathdoorCon,.bathstorageCon,.hotCon,.washingCon').hide()
			$('.tips').hide("slow")
		});


	};
	show();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoplayHoverPause:true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 0,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});
		$('.carousel-project').owlCarousel({
			autoplay: true,
			autoplayHoverPause:true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 3,
				autoplay: true,
				autoplayHoverPause:true,
				margin: 20,
				nav: true,
				dots: true,
				mouseDrag: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive:{
					600:{
						margin: 20,
						stagePadding: 3,
						items: 1
					},
					1000:{
						margin: 20,
						stagePadding: 3,
						items: 2
					},
					1200:{
						margin: 20,
						stagePadding: 3,
						items: 4
					}
				}
			});
		}

	};

	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't forget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('#appointment_time').timepicker();


})(jQuery);

