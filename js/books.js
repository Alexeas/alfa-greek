
$("#read").click(function(){
    $(".flex-book-text").removeClass("display-none");
    $(".flex-book-text-translate").addClass("display-none");
});

$("#translate").click(function(){
    $(".flex-book-text-translate").removeClass("display-none");
    $(".flex-book-text").addClass("display-none");
});
