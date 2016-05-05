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
            	pattern : "^[A-ZĄĆĘŁŃÓŚŹŻ]{1}[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłóńśźż]*$"
            }, params);
        }else if(params.minLen==='undefined'){
         	var settings = $.extend({
            	minLen: 3 
               	 		}, params);
        }
        pattern = new RegExp(params.pattern);
        minLen = params.minLen;
                
        return this.each(function() {
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
}		
		
)(jQuery);




