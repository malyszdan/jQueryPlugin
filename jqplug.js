(function($) {

	$.fn.validate = function(params){
		var pattern, minLen;
		if(params.length == 0){
        	var settings = $.extend({
            	pattern : "^[A-ZĄĆĘŁŃÓŚŹŻ]{1}[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]*$",
                minLen: 3
               	 		}, params);
        }else if(params.pattern ==='undefined'){
        	var settings = $.extend({
    d        	pattern : "^[A-ZĄĆĘŁŃÓŚŹŻ]{1}[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]*$"
            }, params);
        }else if(params.minLen==='undefined'){
         	var settings = $.extend({
            	minLen: 3 
               	 		}, params);
        }
        pattern = new RegExp(params.pattern);
        minLen = params.minLen;
                
        return this.each(function() {
        		$(this).blur(function(){
					$(this).css('background-color', 'white');
					$(":button").attr('disabled', false);
				})
              if(!pattern.test($(this).val()) || $(this).val().length <= minLen) {
					$(this).addClass('err');
					console.log("blad");
					$(":button").attr('disabled', true);	
			} else {
				if($(this).hasClass('err')){
					$(this).removeClass('err');	
					$(":button").attr('disabled', false);}
              		console.log("Sukces!");
              }
            });
        };
		
		
	$.fn.checkEmail = function() {
		var pattern = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$");
		this.each(function() {
				$(this).blur(function(){
					$(this).css('background-color', 'white');
					$(":button").attr('disabled', false);
				})
			if(!pattern.test(this.value)) {
				$(this).addClass('err');
				$(":button").attr('disabled', true);
				console.log("blad");
			} else {
				if($(this).hasClass('err')){
					$(this).removeClass('err');
					$(":button").attr('disabled', false);
					console.log("Sukces!");
				}
			}
		}
	);
		return this;
	};
		
		
})(jQuery);




