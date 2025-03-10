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