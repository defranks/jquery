$("subscribe").click(function(){
	if (this.checked){
		var x = $("#emailField");
		x.css("display", "block");}
		else{
			x.css("display", "none");
		}
	}
);
