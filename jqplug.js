(function($) {

	$.fn.checkNames = function(minLen) {
		var pattern;
		pattern = new RegExp("^[A-ZĄĆĘŁŃÓŚŹŻ]{1}[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]*$");
		this.each(function() {
			if(!pattern.test($(this).val()) || $(this).val().length <= minLen) {
					$(this).addClass('err');
					console.log("blad");
					$(":button").attr('disabled', true);	
					
					
			} else {
				if($(this).hasClass('err')){
					$(this).removeClass('err');	
					$(":button").attr('disabled', false);	
					
					
				}
		}});
		
	return this;
	}

})(jQuery);




