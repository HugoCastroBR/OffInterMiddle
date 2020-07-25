let AtualBall = 1

function AtualizarImg(){
    $(`#BpC1-${AtualBall}`).addClass("BallSelectd")
}

function reset(){
    $(".BallPageC1").removeClass("BallSelectd")
    console.log(AtualBall)
}

function verificarvalor(){
    if(AtualBall > 5){
        AtualBall = 1
    }else if(AtualBall < 1){
        AtualBall = 5
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
    AtualBall = id
    verificarvalor()
    reset()
    AtualizarImg()
}

function Refresh_balls(Right){
    if(Right == true){
        add(true)
    }else{
        add(false)
    }
}