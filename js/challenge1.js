subscribe.onchange = function() {
	var x = document.querySelector("#emailField");
	if (this.checked){
		console.log("selected");
    	x.style.display = "block";
  	} else {
  		console.log("Not selected");
    	x.style.display = "none";
  	}
  // 	Advanced Option....
  // 	x.style.display == "block" ?
		// x.style.display = "none" :
		// x.style.display = "block";
}

$("subscribe").click(function(){
	if (this.checked){
		var x = $("#emailField");
		x.css("display", "block");}
		else{
			x.css("display", "none");
		}
	}
);

// everytime u get rid of document.querySelector swap it w $
