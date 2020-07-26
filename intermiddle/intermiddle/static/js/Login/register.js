const SendBtnJquery = $("#SendBtn")
const SendBtn = document.querySelector("#SendBtn")

function ShowError(Erro){
    let Aviso = $("#AvisoShow")
    Aviso.removeClass("AvisoTextGreen")
    Aviso.text(Erro) 

}


function ValidarCampos(){
    let NomeMain = $("#NomeMain")
    let NomeUser = $("#NomeUser")
    let PhoneNumber = $("#PhoneNumber")
    let Email = $("#Email")
    let Senha1 = $("#Senha1")
    let Senha2 = $("#Senha2")

    let campos = [
        NomeMain,
        NomeUser,
        PhoneNumber,
        Email,
        Senha1,
        Senha2
    ]
    let Validados = 0

    for(let l = 0;l < campos.length;l++){
        let campo = campos[l].val()
        let Tamanho = campo.length
        Tamanho = parseInt(Tamanho)

        if(Tamanho < 4){
            ShowError("Todos os campos devem ter ao menos 4 caracteres")

        }else{
            Validados += 1
        }

    }
    if(Validados < parseInt(campos.length)){
        return false
    }else{
        return true
    }
}




function validarSenhas(){
    let Senha1 = $("#Senha1")
    let Senha2 = $("#Senha2")
    if(Senha1.val() === Senha2.val()){
        return true
    }else{
        return false
    }
}

function validar(event){
    
    event.preventDefault()
    
    if(validarSenhas() === true ){
        console.log("Senha Iguais")
        if(ValidarCampos() === true){
            return true
        }else{
            ShowError("Todos os campos devem ter ao menos 4 caracteres")
        }
        
    }else{
        ShowError("As senhas não coencidem")
        console.log("Senhas Diferentes")
        return false
    }
    
}


SendBtn.addEventListener("click",function(event){
    event.preventDefault()
    CheckBox = $("#AgreeTermos")
    if(CheckBox.is(':checked') === true){
        if(validar(event) === true){
            ShowError("Concluido")
            $("#AvisoShow").addClass("AvisoTextGreen")
            document.Registrar.submit()
        }else{
            console.log("error")
        }
    }else{
        ShowError("Você precisa aceitar os termos de uso")
    }
    
    }
    
)