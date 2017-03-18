(function($) {

	$(document).ready(function() {


		// Bootstrap Carousel mobile swipe
		$( "#myCarousel" ).on( "swiperight", swiperightHandler );
		$( "#myCarousel" ).on( "swipeleft",  swipeleftHandler );
		// Callback function references the event target and adds the 'swiperight' class to it
		function swiperightHandler( event ){
			$( "#myCarousel" ).carousel( "prev" );
		}
		// Callback function references the event target and adds the 'swiperight' class to it
		function swipeleftHandler( event ){
			$( "#myCarousel" ).carousel( "next" );
		}

		$(function() {
		  $('#header a[href*="#"]:not([href="#"]), #side-nav a[href*="#"]:not([href="#"]), #mobileHeader a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 1000);
				return false;
			  }
			}
		  });
		});


		function selectCurrentMenuItem(mi, cr, mode) {
			var top = $(window).scrollTop(),
				selected_item = -1,
				menu_height = $('#header').outerHeight();

			for (i = 0; i < mi.length; i++) {
				var menu_item = mi[i],
					id = $(menu_item).attr('data-id'),
					element = $("#" + id);
				if (!element.length) continue;
				var offset = $(element).offset(),
					i_top = offset.top,
					i_bottom = offset.top + $(element).outerHeight();

				if ((top + menu_height >= i_top) && (top + menu_height <= i_bottom)) {
					selected_item = i;
				}
			}
			if (selected_item !== cr) {
				for (j = 0; j < mi.length; j++) {
					if (j !== selected_item) {
						if (mode == 1)
							$(mi[j]).removeClass('current');
						else if (mode == 2)
							$(mi[j]).html('<i class="material-icons">&#xE836;</i>');
					}
				}
				if (mode == 1)
					$(mi[selected_item]).addClass('current');
				else if (mode == 2)
					$(mi[selected_item]).html('<i class="material-icons">&#xE837;</i>');
				cr = selected_item;
			}
		}
		// Anchor Links Smooth Scroll
		if ($('body').length) {
			var menu_items_TOP = [];
			var currentRegion_TOP = null;
			$('#header li a[href*="#"]').each(function() {
				var str = $(this).attr("href");
				$(this).addClass('spfr-menu-item');
				id = str.split('#')[1];
				menu_item = $(this);
				if (menu_item.length) {
					menu_item.attr('data-id', id);
					menu_item.attr('data-link-type', 'scroll');
					menu_items_TOP.push(menu_item);
				}
			});
			selectCurrentMenuItem(menu_items_TOP, currentRegion_TOP, 1);
			$(window).scroll(function() {
				selectCurrentMenuItem(menu_items_TOP, currentRegion_TOP, 1);
			});
			var menu_items_SIDE = [];
			var currentRegion_SIDE = null;
			$('#side-nav li a[href*="#"]').each(function() {
				var str = $(this).attr("href");
				$(this).addClass('spfr-menu-item');
				id = str.split('#')[1];
				menu_item = $(this);
				if (menu_item.length) {
					menu_item.attr('data-id', id);
					menu_item.attr('data-link-type', 'scroll');
					menu_items_SIDE.push(menu_item);
				}
			});
			selectCurrentMenuItem(menu_items_SIDE, currentRegion_SIDE, 2);
			$(window).scroll(function() {
				selectCurrentMenuItem(menu_items_SIDE, currentRegion_SIDE, 2);
			});
		}


		//Fix front page cover to window height
		function fixFrontCover() {
			if ($(window).width() > 991) {
				$('#header').removeClass('mobile');
				$windowSize = $(window).height();
				if ($windowSize > 766) {
					$('.section').height($windowSize);
				}
				else {
					$('.section').height(766);
				}
			}
			else {
				$('#header').addClass('mobile');
			}
		}
		fixFrontCover();
		$(window).resize(function() {
			fixFrontCover();
		});
		//Image Cover
		$('.plx').parallax({ scrollFactor: 2, initialPos: -400});


		//Mobile Sidebar
		$("body.no_sidebars #main-wrapper").removeClass("mainPageWSidebar");
		$("body.no_sidebars #main .sidebar-toggle").hide();
		var sidebarWidth = $('#sidebar').outerWidth(true);
		var sidebarState = false;
		//$('#sidebar').css('left',sidebarWidth*(-1));
		$('.sidebar-toggle').on('click', function(eS) {
			if (sidebarState) {
				closeSidebar();
			}
			else {
				openSidebar();
			}
			eS.stopPropagation();
		});
		$('.sidebar-toggle, .mobileSidebar').on('click', function(eS){
			eS.stopPropagation();
		});
		$(document).on('click', function(eS) {
			closeSidebar();
		});
		function openSidebar() {
			$('#sidebar.mobileSidebar').addClass('mobileSidebar-open').removeClass('mobileSidebar-close'); //.css('left','0');
			$('.sidebar-toggle').css('left',sidebarWidth-1);
			sidebarState = true;
			hideCart();
		}
		function closeSidebar() {
			$('#sidebar.mobileSidebar').addClass('mobileSidebar-close').removeClass('mobileSidebar-open'); //.css('left',sidebarWidth*(-1));
			$('.sidebar-toggle').css('left','-1px');
			sidebarState = false;
		}

		//pager
		$('.pager li.pager-next a').html('').wrapInner('<span class="glyphicon glyphicon-menu-right"></span>');
		$('.pager li.pager-previous a').html('').wrapInner('<span class="glyphicon glyphicon-menu-left"></span>');
		$('.pager li.pager-first a').html('').wrapInner('<span class="glyphicon glyphicon-menu-left"></span><span class="glyphicon glyphicon-menu-left"></span>');
		$('.pager li.pager-last a').html('').wrapInner('<span class="glyphicon glyphicon-menu-right"></span><span class="glyphicon glyphicon-menu-right"></span>');

		//Mobile Menu Bar Trigger //Mobile cart position
		var navBarState = false;
		var cart = $('.block-commerce-cart');
		$('.mobileLogo').after('<span class="cart-toggle glyphicon glyphicon-shopping-cart"></span>');
		var cartToggle = $('.cart-toggle');
		$(cartToggle).after($(cart).html());
		$(cartToggle).next('.shopping-cart-toggle').hide();
		$(cartToggle).nextAll('.content').addClass('mobileCart');
		cart = $('.mobileCart');
		var cartOffset = $(cart).outerWidth()*(-1);
		$(cart).css('right',cartOffset);

		var cartState = false;
		//var mobileHeader = $('#mobileHeader-wrapper');
		//var mobileHeaderHeight = $(mobileHeader).outerHeight();
		//$(mobileHeader).css('top', mobileHeaderHeight*(-1));

		function calculateMaskSize() {
			$('.mask').css({
				'width'  : $(window).width(),
				'height' : $(window).height(),
				'opacity': '0.8'
			});
		}
		function openNavBar() {
			$('#header').css('left','0px');
			$('.mask').css('display','block');
			$('.menu-open').html('<i class="material-icons">&#xE5CD;</i>');
			//calculateMaskSize();
			navBarState = true;
			hideCart();
		}
		function closeNavBar() {
			$('#header').css('left','-300px');
			$('.mask').css('display','none');
			$('.menu-open').html('<i class="material-icons">&#xE5D2;</i>');
			navBarState = false;
		}
		function showCart() {
			$(cart).css('right','0');
			cartState = true;
			closeNavBar();
		}
		function hideCart() {
			$(cart).css('right',cartOffset);
			cartState = false;
		}

		$('#header.mobile .menu li a').click(function() {
			closeNavBar();
		});

		$('.menu-open').on('click', function(){
			if (navBarState) {
				closeNavBar();
			}
			else {
				openNavBar();
			}
		});
		$(window).resize(function() {
			calculateMaskSize();
		});

		$('.mask').on('click', function() {
			closeNavBar();
		});
		$(cartToggle).on('click', function() {
			console.log('cart clicked');
			if (cartState) {
				hideCart();
			}
			else {
				showCart();
			}
		});


		//Mobile Swipes
		$( "#header-wrapper" ).on( "swipeleft",  swipeOffNavBar );
		$( '.mask' ).on( "swipeleft",  swipeOffNavBar );
		// Callback function references the event target and adds the 'swiperight' class to it
		function swipeOffNavBar( event ){
			closeNavBar();
		}
		$( '#navBarSlide' ).on( "swiperight", swipeOnNavBar );
		function swipeOnNavBar( event ) {
			openNavBar();
		}
		$( '.sidebar-toggle' ).on( "swiperight", swipeOnSidebar );
		$( '.sidebar-toggle' ).on( "swipeleft", swipeOffSidebar );
		$( '#sidebar' ).on( "swipeleft", swipeOffSidebar );
		function swipeOnSidebar( event ) {
			openSidebar();
		}
		function swipeOffSidebar( event ) {
			closeSidebar();
		}



	});
}(jQuery));
