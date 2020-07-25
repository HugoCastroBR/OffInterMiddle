function abrir_menu(){
    ///document.getElementById('my_form').style.display = "none";
    var form = document.getElementById('menu')

    if(form.style.display != "flex"){
        form.style.display ='flex';
        return
}
form.style.display = 'none'
}

$(function(){
    $("html").load("header.html"); 
});