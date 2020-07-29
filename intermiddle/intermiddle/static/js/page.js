let AtualBall = 0
const ImageQueryTemplate = "#Image_"

var elem = document.getElementsByClassName("BallPageC1")
var elementoAtual = 0

function GerarId(){
    elementoAtual = ((elem[AtualBall].id).split("-")[1])

    return (elem[AtualBall].id)
}

function AtualizarImg(){
    $(`#${GerarId()}`).addClass("BallSelectd")

    $(`${ImageQueryTemplate}${elementoAtual}`).removeClass("no")
    
}

function AtualizarPerBall(n){

    $(`#BpC1-${n}`).addClass("BallSelectd")
    $(`${ImageQueryTemplate}${n}`).removeClass("no")
}

function reset(){
    $(".BallPageC1").removeClass("BallSelectd")

    $(".MainImageC1User").addClass("no")
}

function verificarvalor(){
    if(AtualBall > (elem.length - 1)){
        AtualBall = 0
    }else if(AtualBall < 0){
        AtualBall = (elem.length - 1)
    }else{

    }
}

function add(Right){
    if(Right == true){
        AtualBall++
        verificarvalor()
        reset()
        AtualizarImg()
    }
    else if(Right == false){
        AtualBall--
        verificarvalor()
        reset()
        AtualizarImg()
        
    }
    else{
        
    }
}

function Refresh_balls_id(id){
    
    verificarvalor()
    reset()
    elementoAtual = id
    console.log(elementoAtual)
    AtualizarPerBall(id)
}


function Refresh_balls(Right){
    //console.log($(".BallPageC1").id)

    GerarId()
    if(Right == true){
        add(true)
    }else{
        add(false)
    }
}

