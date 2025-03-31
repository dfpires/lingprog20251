function exe1(){
    // recupera os dados do usuário
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    // calcular média
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media >= 7){
        document.getElementById("media").innerText = "Aprovado com média " + media
    }
    else {
        document.getElementById("media").innerText = "Reprovado com média " + media
    }
}
function exe2(){
    // recupera os dados do usuário
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    // calcula média
    let media = (nota1 + nota2) / 2
    if ((media >= 0) && (media < 3)){
        document.getElementById("media").innerHTML = "Reprovado " + media
    }
    else if ((media >= 3) && (media < 7)){
        document.getElementById("media").innerHTML = "Exame " + media
    }
    else if ((media >= 7) && (media <= 10)){
        document.getElementById("media").innerHTML = "Aprovado " + media 
    }
    else {
        document.getElementById("media").innerHTML = "Problema com notas"
    }
}

function exe3(){
    // recupera os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // calcula o menor e mostra o resultado
    if (nro1 < nro2){
        document.getElementById("menor").innerText = "O menor é " + nro1
    }
    else if (nro2 < nro1){
        document.getElementById("menor").innerText = "O menor é " + nro2
    }
    else {
        document.getElementById("menor").innerText = "Os dois são iguais"
    }
}

function exe4(){
    // recupera os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    // calcula o maior deles
    if (nro1 >= nro2 && nro1 >= nro3){
        document.getElementById("maior").innerHTML = "O maior é " + nro1
    }
    else if (nro2 >= nro1 && nro2 >= nro3){
        document.getElementById("maior").innerHTML = "O maior é " + nro2
    }
    else if (nro3 >= nro1 && nro3 >= nro2){
        document.getElementById("maior").innerHTML = "O maior é " + nro3
    }   
}
function exe5(){
    // recupera os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)
    // utilização do escolha
    switch (selecao){
        case 1: document.getElementById("result").innerText = (nro1 + nro2) / 2
                break
        case 2: if (nro1 >= nro2){
                    document.getElementById("result").innerText = nro1 - nro2
                }
                else {
                    document.getElementById("result").innerText = nro2 - nro1
                }
                break
        case 3: document.getElementById("result").innerText = nro1 * nro2
                break
        case 4: if (nro2 != 0){
                    document.getElementById("result").innerText = nro1 / nro2
                }
                else {
                    document.getElementById("result").innerText = "Divisão por zero"
                }
    }
}
function exe6(){
    // recupera os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)
    switch(selecao){
        case 1: document.getElementById("result").innerText = "A potência é " +
                Math.pow(nro1, nro2)
                break
        case 2: document.getElementById("result").innerHTML = "RQ do nro1 " + Math.sqrt(nro1).toFixed(2) 
                    + " <br/> RQ do nro2 " + Math.sqrt(nro2).toFixed(2)
                break
        case 3: document.getElementById("result").innerHTML = "RC do nro1 " + Math.cbrt(nro1).toFixed(2) 
                    + " <br/> RC do nro2 " + Math.cbrt(nro2).toFixed(2)
                break
    }
}
function exe7(){
    // recupera os dados do usuário
    let salario = Number(document.getElementById("salario").value)
    // verifica valor do salário
    if (salario < 0){
        document.getElementById("novo").innerHTML = "Salário negativo"
    }
    else if (salario < 500){
        document.getElementById("novo").innerHTML = "Novo salário " + (salario + salario*30/100)
    }
    else {
        document.getElementById("novo").innerHTML = "Salário maior ou igual a 500, sem reajuste"
    }
}
function exe8(){
    // recupera os dados do usuário
    let salario = Number(document.getElementById("salario").value) 
    if (salario < 0){
        document.getElementById("novo").innerHTML = "Salário negativo"
    }
    else if (salario <= 300){
        // vamos usar template string
        let novoSalario = (salario + salario*35/100)
        document.getElementById("novo").innerHTML = `Novo salário ${novoSalario}` 
    }
    else {
        // vamos usar template string
        novoSalario = (salario + salario*15/100)
        document.getElementById("novo").innerHTML = `Novo salário ${novoSalario}` 
    }
}
function exe9(){
    // recupera o valor do saldo
    let saldo = Number(document.getElementById("saldo").value)
    // calcula o crédito
    let credito = 0 // inicializa com zero
    if (saldo > 400){
        credito = saldo * 30 / 100
    }
    else if ((saldo > 300) && (saldo <= 400)){
        credito = saldo * 25 / 100
    }
    else if ((saldo > 200) && (saldo <= 300)){
        credito = saldo * 20 / 100
    }
    else if ((saldo >= 0) && (saldo <= 200)){
        credito = saldo * 10 / 100
    }
    else { // saldo negativo
        document.getElementById("credito").innerHTML = "Saldo não pode ser negativo"
        return // saiu da função
    }
    document.getElementById("credito").innerHTML = `Saldo ${saldo} e crédito ${credito}`
}
function exe10(){
    // recupera o custo da fábrica
    let custo = Number(document.getElementById("custo").value)
    let distribuidor = 0
    let imposto = 0
    if (custo >= 0 && custo < 12000){
        distribuidor = custo * 5 /100
        imposto = 0
    }
    else if (custo >= 12000 && custo <= 25000){
        distribuidor = custo * 10 / 100
        imposto = custo * 15 / 100
    }
    else if (custo > 25000) { // custo é negativo
        distribuidor = custo * 15 / 100
        imposto = custo * 20 / 100
    }
    else {
        document.getElementById("consumidor").innerHTML = "Custo negativo"
        return // sai da função
    }
    let consumidor = custo + distribuidor + imposto
    document.getElementById("consumidor").innerHTML = `Custo da fábrica ${custo} <br/> Distribuidor ${distribuidor} <br/> Imposto ${imposto} <br/> Valor ao consumidor ${consumidor}`
} // fecha função

function exe22(){
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    let risco
    if (idade >= 0 && idade < 20){
        if (peso >= 0 && peso < 60){
            risco = 9
        }
        else if (peso > 60 && peso <= 90){
            risco = 8
        }
        else if (peso > 90){
            risco = 7
        }
        else risco = "peso inválido"
    }
    else if (idade >= 20 && idade <= 50){
        if (peso >= 0 && peso < 60){
            risco = 6
        }
        else if (peso > 60 && peso <= 90){
            risco = 5
        }
        else if (peso > 90){
            risco = 4
        }
        else risco = "peso inválido"
    }
    else if (idade > 50){
        if (peso >= 0 && peso < 60){
            risco = 3
        }
        else if (peso > 60 && peso <= 90){
            risco = 2
        }
        else if (peso > 90){
            risco = 1
        }
        else risco = "peso inválido"
    }
    else {
        risco = "idade inválida"
    }
    document.getElementById("risco").innerHTML = risco
}

function exe24(){
    let preco = Number(document.getElementById("preco").value)
    let categoria = Number(document.getElementById("categoria").value)
    let situacao = Number(document.getElementById("situacao").value)
    if (preco < 0){
        document.getElementById("resultado").innerHTML = "Preço inválido"
    }
    else {
        // calcula aumento
        let aumento
        switch(categoria){
            case 1: if (preco <= 25){
                        aumento = preco * 5/100
                    }
                    else {
                        aumento = preco * 12/100
                    }
                    break
            case 2: if (preco <= 25){
                        aumento = preco * 8/100
                    }
                    else {
                        aumento = preco * 15/100
                    }
                    break
            case 3: if (preco <= 25){
                        aumento = preco * 10/100
                    }
                    else {
                        aumento = preco * 18/100
                    }
                    break
        }
        // calcula imposto
        let imposto
        if (categoria == 2 || situacao == 'R'){
            imposto = preco * 5/100
        }
        else {
            imposto = preco * 8/100
        }
        // calcula novo preço
        let novoPreco = preco + aumento + imposto
        // calcula classificação
        let classificacao
        if (novoPreco < 50){
            classificacao = "Barato"
        }
        else if (novoPreco >= 50 && novoPreco < 120){
                classificacao = "Normal"
        }
        else {
            classificacao = "Caro"
        }
        // resultado
        document.getElementById("resultado").innerHTML = `Aumento ${aumento} Imposto ${imposto} Novo preço ${novoPreco} e Classificação ${classificacao}`
    }
}