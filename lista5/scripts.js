function exe3(){
    // cadastra código e qtde em estoque
    let vetor = []
    for(let i=0; i<3;i++){
        // cria objeto
        let objeto = {
            codigo: prompt(`Informe o código do produto`),
            estoque: Number(prompt(`Informe a qtde em estoque`)),
            preco: Number(prompt(`Informe o preço do produto`))
        }
        // adiciona objeto no vetor
        vetor.push(objeto)
    }
    // comprando ...
    let cliente = Number(prompt(`Informe código do cliente`))
    do {
        let codigo = prompt(`Informe código do produdo para compra`)
        let qtde = Number(prompt(`Informe a qtde do produto para compra`))
        // procura pra ver se o produto existe
        let produtoEncontrado
        let i
        for(i=0;i<3;i++){
            if (vetor[i].codigo == codigo){ // produtor encontrado
                produtoEncontrado = vetor[i] // guarda produto em produtoEncontrado
                break // pára de procurar - sair do for
            }
        }
        if (i == 3){ // produto não existe
            alert(`Código ${codigo} inexistente`)
        }
        else { // produto existe
            // tem em estoque suficiente
            if ( produtoEncontrado.estoque >= qtde){
                // atualiza o estoque
                produtoEncontrado.estoque -= qtde
                alert(`Pedido atendido. Obrigado e volte sempre`)
            }
            else { 
                alert(`Não temos estoque suficiente desta mercadoria`)
            }
        }
        cliente = Number(prompt(`Informe código do novo cliente. Digite 0 para encerrar`))
    } // fecha o do
    while (cliente != 0)
    console.log(vetor)
}

function exe6(){
    let vetor = []
    // entrada de dados
    for(let i=0;i<3;i++){
        // cria o objeto
        let obj = {
            nome: prompt(`Informe nome do ${i+1}o vendedor`),
            vendas: Number(prompt(`Informe total vendido pelo ${i+1}o vendedor`)),
            percentual: Number(prompt(`Informe percentual de vendas do ${i+1}o vendedor`))
        }
        // calcula a comissão -> vamos utilizar o . para acessar o campo/atributo do objeto
        obj.comissao = (obj.vendas * obj.percentual) / 100
        // adiciona o objeto no vetor
        vetor.push(obj)
    } // fecha o for

    // relação dos vendedores e os valores a receber
    let relatorio = ''
    for(let i=0;i<3;i++){
        relatorio += `\nVendedor: ${vetor[i].nome} vai receber ${vetor[i].comissao}`
    }
    alert(relatorio)
    // total das vendas de todos os vendedores
    let somaVendas = 0
    for(let i=0;i<3;i++){
        somaVendas = somaVendas + vetor[i].vendas
    }
    alert(`Total de vendas ${somaVendas.toFixed(2)}`)
    // calcula o maior e menor valor de comissão
    let objMaior = vetor[0] // primeiro funcionário é o maior
    let objMenor = vetor[0] // primeiro funcionário é o menor
    for(let i=1;i<3;i++){
        if (vetor[i].comissao > objMaior.comissao){
            objMaior = vetor[i]
        }
        if (vetor[i].comissao < objMenor.comissao){
            objMenor = vetor[i]
        }
    }
    alert(`${objMaior.nome} vai receber maior comissão de ${objMaior.comissao}`)
    alert(`${objMenor.nome} vai receber menor comissão de ${objMenor.comissao}`)
}

function exe9(){
    let vetor = []
    for(let i=0;i<10;i++){
        let obj = {
            nome : prompt(`Informe nome do produto ${i+1}`),
            codigo : Number(prompt(`Informe código do produto ${i+1}`)),
            preco : Number(prompt(`Informe preço do produto ${i+1}`)),
            novo: 0
        }
        vetor.push(obj)
    }
    // gerar o relatório com os novos preços
    for(let i=0;i<10;i++){
        if (vetor[i].codigo % 2 == 0 && vetor[i].preco > 1000){
            vetor[i].novo = vetor[i].preco + vetor[i].preco * 20/100
        }
        else if (vetor[i].codigo % 2 == 0){
            vetor[i].novo = vetor[i].preco + vetor[i].preco * 15/100
        }
        else if (vetor[i].preco > 100){
            vetor[i].novo = vetor[i].preco + vetor[i].preco * 10/100
        }
        else {
            vetor[i].novo = vetor[i].preco
        }
        alert(`${vetor[i].nome} - ${vetor[i].codigo} - ${vetor[i].preco} - ${vetor[i].novo}`)
    }
}