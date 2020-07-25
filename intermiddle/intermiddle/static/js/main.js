let AtualPage = 1
let ButtonRight = $("#nxtIdRight")
let ButtonLeft = $("#nxtIdRight")
let BtnPageTemplate = "ToPage"
let classToSelectd = "PageNavBallSelected"
///let NavBallPage = $(".PageNavBall")


function AtualizarBalls(){
    
    $(`.pg${AtualPage}`).removeClass("no")
}

function RemoveAllSelectd(){
    $(`.navContain`).addClass("no")
    $(`.navContain`).addClass("no")
    $(`.navContain`).addClass("no")
    $(`.navContain`).addClass("no")
    $(`.navContain`).addClass("no")
    
    $(`#ToPage1`).removeClass(classToSelectd)
    $(`#ToPage2`).removeClass(classToSelectd)
    $(`#ToPage3`).removeClass(classToSelectd)
    $(`#ToPage4`).removeClass(classToSelectd)
    $(`#ToPage5`).removeClass(classToSelectd)
}

function AtualizarBtn(){
    RemoveAllSelectd()
    $(`#ToPage${AtualPage}`).addClass(classToSelectd)
    AtualizarBalls()
}

function NavBallPageClick(Id){
    RemoveAllSelectd()
    $(`#${Id}`).addClass(classToSelectd)
    AtualizarBalls()
}


function ValidarPageNumber(add){
    if(add == true){
        if(AtualPage == 5){
            AtualPage = 1
        }else{
            AtualPage++
            
        }
    }
    else{
        if((AtualPage - 1) == 0){
            AtualPage = 5
        }else{
            AtualPage--
            
        }
    }
    AtualizarBtn()
}




function ChangePage(right){
    if(right == true){
        ValidarPageNumber(true)
    }else{
        ValidarPageNumber(false)
    }
}


