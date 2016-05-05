$(document).ready(function (){

	$("#submit").click(function() {
		validateForm($(this));
	});

	function validateForm() {
		$("#name").validate({minLen : 4}).css('background-color','green');
		$("#surname").validate({pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/});
		$("#email").checkEmail();
	}
		

});
