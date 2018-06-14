//Will toggle status of item
$("ul").on("click", "li", function(){
	$(this).toggleClass("done")
})

//Removes item when clicked
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	})
	//stops events from outer events from firing
	event.stopPropagation();

})

//Adding new items
$("input[type='text']").keypress(function(event){
	//Runs when the user hits enter
	if(event.which === 13){
		//Stores their input
		var newItem = $(this).val()
		//Add new item to list
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newItem + "</li>")
		//Clears input
		$(this).val("")
	}
})


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
})