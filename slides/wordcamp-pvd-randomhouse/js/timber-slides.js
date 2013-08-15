;(function($){

	function TimberSlides(){
		this.initCounters();
	}

	function toNumber(val){var str=String(val);str=str.replace(/[^\d.-]/g,"");var num=Number(str);return num;}

	TimberSlides.prototype.initCounters = function(){
		$('.counter').each(function(){
			var $counter = $(this);
			var from = 0;
			if ($counter.data('from')){
				from = $counter.data('from');
			}
			$counter.countTo({to:toNumber($counter.text()), from:from, speed:8000});
		});
	};

	new TimberSlides();

})(jQuery);