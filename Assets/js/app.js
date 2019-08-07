//cross through specific todos by clicking
$("ul").on("click", "li", function() {
    // when an li is clicked inside ul, code is run
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        // grabs text from input when enter is hit
        let todoText = $(this).val();
        $(this).val("");
        // creates new li and adds to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
    }
});
    
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});