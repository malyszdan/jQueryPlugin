$(document).ready(function (){

	$("#submit").click(function() {
		validateForm($(this));
	});

	function validateForm() {
		$(":text").checkNames({minLen : 3});
		//$(":email").checkEmail();
	}
		

});
		

        $.fn.validate = function(options){
        	var settings = $.extend({
                        pattern : "tutaj regex" //tutaj rozszrzam options
                }, options);
                
            var pattern = new RegExp(settings.pattern);
                
            return this.each(function() {
                
                
                
                if (pattern.test($(this).val())){
                	
                }else{
                	
                }
                // tutaj zwaliduj addValidation($(this),validationF);
            });
        };