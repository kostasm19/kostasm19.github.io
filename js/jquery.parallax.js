
/**
 * jquery.parallax
 * version 1.01
 * copyright (c) 2016 http://kmountzouris.gr
 */

(function($) {

	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(options) {

		var $this = $(this);
		var body = $('body');
		var firstTop;
		var paddingTop = 0;


		var img1 = body.find('.node .field-name-field-image img');
		var img2 = body.find("#content .attachment .views-field-field-image img");
		if (img1.length) {
			img = img1;
		}
		else {
			img = img2;
		}
		if (img.length) {
			var imgSrc = img.attr('src');
			$this.css('background-image', 'url('+imgSrc+')');
		}


		var defaults = { scrollFactor: 3, initialPos: 400 };
		var settings = $.extend( {}, defaults, options );

		$this.addClass('parallax-bg');

		$this.each(function(){
			firstTop = 0;//$this.offset().top;
		});

		// setup defaults if arguments aren't specified
		xpos = "50%";
		speedFactor = 0.5;

		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = $element.height();

				// Check if totally above or totally below viewport
				//if ((top + height < pos || top > pos + windowHeight) || $element.css('left') == '2px') {
				//	return;
				//}
				if ($this.width() > 991) {
					$this.css('transform', 'translate(0px, '+ (firstTop -pos) * speedFactor +'px)');
				}
				//$this.css('backgroundPosition', xpos + " " + (-300 + Math.round((top - pos) * speedFactor)) + "px");
			});
		}
		$window.bind('scroll', update).resize(update);
		update();

	};
}(jQuery));
