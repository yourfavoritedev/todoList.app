var openItems = $("#openItems li");
var closedItems = document.querySelectorAll("#closedItems li");
var showActive = true;
var closedCount = closedItems.length;


//Will toggle status of item
$("#openItems").on("click", "li", function(){
	$(this).toggleClass("done");
})



//Removes item when clicked
$("#openItems").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
		$("#closedItems").append($(this))
		openItems = $("#openItems li")
		closedItems = document.querySelectorAll("#closedItems li")
		closedCount = closedItems.length
		congratulate()
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
		$("#openItems").append("<li><span><i class='fa fa-trash'></i></span> " + newItem + "</li>")
		//Clears input
		$(this).val("")
		openItems = $("#openItems li")
		removeCongrats()
	}
})


//toggles input line
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
})


//toggles between active and closed tasks
$(".fa-check-square").click(function(){
	showOpen();
	showActive = !showActive
})


//Appends a message for the user
function congratulate(){
	if(openItems.length == 0){
		$("#openItems").append("<li class='applaud'>" + "You have been really productive!" + "</li>")
	}
}


//Removes the congratulatory message for the user
function removeCongrats(){
	if(openItems.length > 1){
		$(".applaud").remove()
	}
}


//called to show or hide tasks
function showOpen(){
	if(showActive == true){
		//hides all openItems and unhides closedItems
		for(var i = 0; i < openItems.length; i++){
			openItems[i].style.display = "none"
		}
		for(var i = 0; i < closedItems.length; i++){
			closedItems[i].style.display = "inherit"
			closedItems[i].classList.remove("done")
		}
		//replace icons and disable input
		$("#closedItems span i").removeClass("fa-trash");
		$("#closedItems span i").addClass("fa-arrow-circle-up");
		$("input[type='text']").val("You have completed " + closedCount + " task(s).")
		$("input[type='text']").attr("disabled", true);

		//hides all closedItems and unhides openItems
	} else {
		for(var i = 0; i < openItems.length; i++){
			openItems[i].style.display = "inherit"
		}
		for(var i = 0; i < closedItems.length; i++){
			closedItems[i].style.display = "none"
		}
		//enable input
		$("input[type='text']").val("")
		$("input[type='text']").attr("disabled", false)
	}
}



//Toggle between css stylesheets.
$("#themePicker").on("change", function(){
	if($("option")[0].selected == true){
		$('link[href="assets/css/todoList.css"]').prop('disabled', false);
		$('link[href="assets/css/todoListGray.css"]').prop('disabled', true);
		$('link[href="assets/css/todoListLight.css"]').prop('disabled', true);
		$('link[href="assets/css/todoListChromatic.css"]').prop('disabled', true);
	} else if($("option")[1].selected == true){	
		$('link[href="assets/css/todoListLight.css"]').prop('disabled', false);	
		$('link[href="assets/css/todoList.css"]').prop('disabled', true);
		$('link[href="assets/css/todoListGray.css"]').prop('disabled', true);
		$('link[href="assets/css/todoListChromatic.css"]').prop('disabled', true);		
	} else if($("option")[2].selected == true){
		$('link[href="assets/css/todoListGray.css"]').prop('disabled', false);
		$('link[href="assets/css/todoList.css"]').prop('disabled', true);
		$('link[href="assets/css/todoListLight.css"]').prop('disabled', true);	
		$('link[href="assets/css/todoListChromatic.css"]').prop('disabled', true);				
	} else{
		$('link[href="assets/css/todoListChromatic.css"]').prop('disabled', false);			
		$('link[href="assets/css/todoList.css"]').prop('disabled', true);
		$('link[href="assets/css/todoListLight.css"]').prop('disabled', true);	
		$('link[href="assets/css/todoListGray.css"]').prop('disabled', true);
	}
})