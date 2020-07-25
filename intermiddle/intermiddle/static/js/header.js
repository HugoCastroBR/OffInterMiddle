

$("#MainMenuToggler").click(function(){
    if($(".ConfigMenu").is(".no")){
    }$(".ConfigMenu").addClass("no")

    if($(".MainMenu").is(".no")){
        $(".MainMenu").removeClass("no")
        return
    }$(".MainMenu").addClass("no")
})

$("#ConfigMenuToggler").click(function(){
    if($(".MainMenu").is(".no")){
    }$(".MainMenu").addClass("no")
    if($(".ConfigMenu").is(".no")){
        $(".ConfigMenu").removeClass("no")
        return
    }$(".ConfigMenu").addClass("no")

})