

$("form").submit(function(e){
  if ($("input[type='radio']:checked").val()){
    return;
  }
  
alert("You must pick something pls")
e.preventDefault();
});
