
function selected_set(Type){
    $(`#${Type}Btn`).addClass("selectedTypeOf")
    showContentByTypeOfSelection()
}



let Pessoa = false
let Empresa = false
let Loja = false

function showContentByTypeOfSelection(){
    //continuação do click do botao que remove campos, aqui é especificado
    //quais serao removidos
    if($(`#EmpresaBtn`).hasClass("selectedTypeOf")){
        $("#fullName").addClass("no")
        $("#userName").addClass("no")
        $("#lojaName").addClass("no")

        Pessoa = false
        Empresa = true
        Loja = false


        $("#empresaName").removeClass("no")
        $("#Cnpj").removeClass("no")
    }else if($(`#PessoaBtn`).hasClass("selectedTypeOf")){
        $("#fullName").removeClass("no")
        $("#userName").removeClass("no")

        Pessoa = true
        Empresa = false
        Loja = false


        $("#empresaName").addClass("no")
        $("#lojaName").addClass("no")
        $("#Cnpj").addClass("no")
    }else if($(`#LojaBtn`).hasClass("selectedTypeOf")){
        $("#fullName").addClass("no")
        $("#userName").addClass("no")
        $("#empresaName").addClass("no")
        $("#Cnpj").addClass("no")

        Pessoa = false
        Empresa = false
        Loja = true


        $("#lojaName").removeClass("no")
    }
    
}

$("#EmpresaBtn").click(function(event){
     //remove campos desncessarios para Empresa
    $(`#EmpresaBtn`).removeClass("selectedTypeOf")
    $(`#LojaBtn`).removeClass("selectedTypeOf")
    $(`#PessoaBtn`).removeClass("selectedTypeOf")
    event.preventDefault()
    selected_set("Empresa")

})

$("#PessoaBtn").click(function(event){
     //remove campos desncessarios para PEssoa
    $(`#EmpresaBtn`).removeClass("selectedTypeOf")
    $(`#LojaBtn`).removeClass("selectedTypeOf")
    $(`#PessoaBtn`).removeClass("selectedTypeOf")
    event.preventDefault()
    selected_set("Pessoa")
})

$("#LojaBtn").click(function(event){
    //remove campos desncessarios para Loja
    $(`#EmpresaBtn`).removeClass("selectedTypeOf")
    $(`#LojaBtn`).removeClass("selectedTypeOf")
    $(`#PessoaBtn`).removeClass("selectedTypeOf")
    event.preventDefault()
    selected_set("Loja")
})

$(document).ready(selected_set("Pessoa"))//seta o padrao como Pessoa quando usuario entra para se cadastrar


function register(status){
    if (status === true){
        //faz as animações de registro concluido
        $("#Register_form").addClass("no")
        $("#logos_container").addClass("centrar")
        $("#aviso").addClass("no")
        

        //mandar dados ao banco de dados antes do setTimeout
        
        setTimeout(() => {  $("#logos_container").addClass("giraFull"); }, 1000);
        $("#logos_container").removeClass("logos_space")
       //Mostar mensagem que dados estao sendo validados!
       //Para poder utlizar 100% da plataforma verificar o email!
    }else{
        $(".btnInRegisterPanel ").addClass("redlight")
        $("#aviso").removeClass("no")
    }
}


$("#Register_btn").click(function(event){
    //verifica os dados preenchidos ao clicar
    event.preventDefault()
    let Campos = [$("#userName"),$("#empresaName"),$("#lojaName"),$("#Cnpj"),$("#telefoneNumber"),
    $("#fullName"),$("#email"),$("#senha"),$("#senha2"),$("#cidade"),$("#Infos")]//#infos so para melhor contagem e reomver bugs!
    let Saida = []
    let naoPreenchidos = []
    let require = 10
    let verificados = 0
    
    for(let i = 0;i < Campos.length;i++){
        if(Campos[i].hasClass("no")){
            naoPreenchidos.push([Campos[i].attr('id'),": ",Campos[i].val(),])
            require -= 1
            //verifica a quatidade de campos que existem 
        }else{
            try{
                if(Campos[i].val().length > 3){
                    Saida.push(([Campos[i].attr('id')+": "+Campos[i].val(),]).toString())
                    verificados +=1 

                }else{
                    //nao adiciona o verificado fazendo assim com que 
                    //nao tenha o mesmo valor do require
                }

            }catch(e){
                //trata erro(?)
            }
            
        }
        
    }
    if(verificados < require){
        register(false)
    }else{
        if(Pessoa === true){Saida.push("Type: Pessoa")}else if(Loja === true){
            Saida.push("Type: Loja")}else if(Empresa === true){Saida.push("Type: Empresa")}
        
        //enviar dados ao banco de dados
        console.log("nao: "+naoPreenchidos)
        console.log("sim: "+Saida)
        register(true)
    }
    

})
