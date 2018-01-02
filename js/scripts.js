$(function(){
	/* Smooth Scroll */
	$('a[href^="#"]').click(function(e){
		var target = $(this).attr('href');
		$('html,body').animate({ scrollTop: $(target).offset().top },1000);
		e.preventDefault();
	});
	
	var skillinitialize = true;
	var skill = new WOW({
			boxClass: 'skill',
			offset: 100,
			callback:  function(box) {
				if(skillinitialize){
					$('.skill').circleProgress().on('circle-animation-progress', function(event, progress, stepValue) {
						$(this).find('span').text(String(stepValue.toFixed(2)).substr(2) + '%');
					});
				}
				skillinitialize = false;
			}
		}
	);
	skill.init();
	
	wow = new WOW({ animateClass: 'animated', offset: 100 });
    wow.init();
	
	
	/* Set Equal height */
	function eqHeight(){
		$('.row-eq-height').each(function(){
			$(this).find('.panel').height('auto');
			var h = 0;
			$(this).children().each(function(){
				if(h < $(this).children().height())
					h = $(this).children().height();
			});
			$(this).find('.panel').height(h);
		});
	}
	$(window).resize(function(){
		eqHeight();
	});
	eqHeight();
	
});