function seguir(){
    alert(`Você agora está seguindo Daniel Pires`)
}
// exercício 1
function exe1(){
    // vamos usar DOM para recuperar os dados do HTML
    // DOM - Document Object Model
    // converte texto para número - Number()
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // vamos fazer a subtração
    let sub = nro1 - nro2
    // vamos mostrar o resultado ao usuário
    //alert("A subtração é " + sub)
    document.getElementById("sub").innerText = "O resultado é " + sub
}

function exe2(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let multiplicacao = nro1 * nro2 * nro3
    document.getElementById("multiplicacao").innerText = "O resultado é " + multiplicacao
}

function exe3(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let divisao = nro1 / nro2
    document.getElementById("divisao").innerText = "O resulta é " + divisao
}

function exe4(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // média ponderada
    let mp = ((nro1 * 2) + (nro2 * 3)) / 5
    document.getElementById("mp").innerText = "O resultado é " + mp
}
function exe5(){
    let preco = Number(document.getElementById("preco").value)
    let desconto = (preco * 10) / 100
    document.getElementById("desconto").innerText = "O novo preço é de " 
    + (preco - desconto)
}
function exe6(){
    let salario = Number(document.getElementById("salario").value)
    let vendas = Number(document.getElementById("vendas").value)
    // calcula comissão
    let comissao = (vendas * 4) / 100
    // calcula salário final
    let final = salario + comissao
    // devolver resultado ao usuário
    document.getElementById("resultado").innerText = "Comissão " + comissao + 
    " salário final " + final
}
function exe7(){
    let peso = Number(document.getElementById("peso").value)
    // engordar
    let novo1 = peso + (peso * 15) / 100
    let novo2 = peso - (peso * 20) / 100

    document.getElementById("novo1").innerText = "Novo peso ao engordar 15% " + novo1
    document.getElementById("novo2").innerText = "Novo peso ao emagrecer 20% " + novo2
}

function exe8(){
    let peso = Number(document.getElementById("peso").value)
    let gramas = peso * 1000
    document.getElementById("gramas").innerText = "Peso em gramas " + gramas
}

function exe9(){
    let baseMenor = Number(document.getElementById("baseMenor").value)
    let baseMaior = Number(document.getElementById("baseMaior").value)
    let altura = Number(document.getElementById("altura").value)

    let trapezio = ((baseMenor + baseMaior) * altura) / 2
    
    document.getElementById("trapezio").innerText = trapezio
}

function exe10(){
    let lado = Number(document.getElementById("lado").value)
    let quadrado = lado * lado
    document.getElementById("quadrado").innerText = quadrado
}