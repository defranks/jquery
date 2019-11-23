$("img").each(function(){
	var msg = "Hover over an image below."
	$(this).mouseover(function(){
		// console.log("url('"+$(this).attr("src")+"')")
		$("#image").css("background-image", "url('"+$(this).attr("src")+"')");
		$("#image").html($(this).attr('alt'));
	});
	$(this).focus(function(){
		$("#image").css("backgroundImage", "url('"+$(this).attr("src")+"')");
		$("#image").html($(this).attr('alt'));
	});
	$(this).mouseleave(function(){
		$("#image").css("backgroundImage", "url('')");
		$("#image").html(msg);
	});
	$(this).blur(function(){
		$("#image").css("backgroundImage", "url('')");
		$("#image").html(msg);
	});
});
