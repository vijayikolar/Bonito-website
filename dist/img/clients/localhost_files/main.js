
// Text-input effects for contact form

(function() {
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
			})();

// slick slider 

	function mobileSlider() {
		$(".our-clients-slider").not('.slick-initialized').slick({					
			arrows : false,
			dots : false,
			infinite : true,
			speed : 350,
			slidesToShow : 3,
			slidesToScroll : 1,
			autoplay: true,
			autoplaySpeed: 2000,
			centerMode : true,
			centerPadding : '40px',
			variableWidth : true,	
			loop : true,
			cssEase : 'cubic-bezier(0.25, 0.1, 0.24, 1.26)',
			autoplay : false,
			responsive : [{
				breakpoint : 768,
				settings : {
					slidesToShow : 1,
					slidesToScroll : 1
				}
			}, {
				breakpoint : 3000,
				// settings : "unslick"
			}]

		});
	}			