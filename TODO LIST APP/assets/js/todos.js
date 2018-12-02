// Check off specific ToDos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete TodDos
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
       //grabbing new todo text from input
       let todoTest = $(this).val();
       $("this").val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoTest + "</li>");
    }
}); 

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});