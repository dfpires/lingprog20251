function entrada(vet){
    for(let i=0; i<3;i++){
        // cria objeto
        let objeto = {
            codigo: prompt(`Informe o código do produto`),
            estoque: Number(prompt(`Informe a qtde em estoque`)),
            preco: Number(prompt(`Informe o preço do produto`))
        }
        // adiciona objeto no vetor
        vet.push(objeto)
    }
}
function compra(vet){
        // comprando ...
    let cliente = Number(prompt(`Informe código do cliente`))
    do {
        let codigo = prompt(`Informe código do produdo para compra`)
        let qtde = Number(prompt(`Informe a qtde do produto para compra`))
        // procura pra ver se o produto existe
        let produtoEncontrado
        let i
        for(i=0;i<3;i++){
            if (vet[i].codigo == codigo){ // produtor encontrado
                produtoEncontrado = vet[i] // guarda produto em produtoEncontrado
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
}
function saida(vet){
    for(let i=0;i<vet.length;i++){
        alert(`Código ${vet[i].codigo} Estoque ${vet[i].estoque} Preco: ${vet[i].preco}`)
    }
}
function exe3(){
    // cadastra código e qtde em estoque
    let vetor = []
    entrada(vetor)
    compra(vetor)
    saida(vetor)
}