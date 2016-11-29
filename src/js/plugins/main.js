
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

		// clients slider 

		$('.our-clients-slider').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  arrows : false,
		  dots : false,
		  autoplay: true,
		  infinite: true,
		  responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
	        }, {
	            breakpoint: 992,
	            settings: {
	                slidesToShow: 3,
	                slidesToScroll: 3
	            }
	        }]
		});

		// banner-slider

		$('.carousel-inner').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows : false,
		  dots : true,
		  autoplay: true,
		  infinite: true
		});

	//Pralallax image scroll Animation
	
	if (window.matchMedia('(min-width: 767px)').matches) {
			$(function() {
				$.stellar({
					horizontalScrolling : true,
					verticalOffset : 0,
					// responsive: false,
					// scrollProperty: 'scroll',
					// hideDistantElements: true
				});
			});
		}

	// video playing script for home page //

	$('#open-popup').magnificPopup({
    	 items: [
      		 {
        	src:"https://www.youtube.com/watch?v=Wc_HC76u8F8" , type: 'iframe' // this overrides default type
            }, 
		
        ],
			 
       gallery: {
       enabled: true
    },
    type: 'video' // this is a default type
			
   });

})();


		