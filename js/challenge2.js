$("#useBilling").click(function(){
	console.log($("#billing").val());
	if ($("#useBilling").prop('checked')){
		$("#home").val($("#billing").val());
		$("#home").prop('disabled','true');
	}
	else{
		$("#home").val("");
		$("#home").prop('disabled','false');
	}
});
