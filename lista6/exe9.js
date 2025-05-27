function entrada(vet){
     for(let i=0;i<10;i++){
        let obj = {
            nome : prompt(`Informe nome do produto ${i+1}`),
            codigo : Number(prompt(`Informe código do produto ${i+1}`)),
            preco : Number(prompt(`Informe preço do produto ${i+1}`)),
            novo: 0
        }
        vet.push(obj)
    }
}
function gerarRelatorio(vet){
    // gerar o relatório com os novos preços
    for(let i=0;i<10;i++){
        if (vet[i].codigo % 2 == 0 && vet[i].preco > 1000){
            vet[i].novo = vet[i].preco + vet[i].preco * 20/100
        }
        else if (vet[i].codigo % 2 == 0){
            vet[i].novo = vet[i].preco + vet[i].preco * 15/100
        }
        else if (vet[i].preco > 100){
            vet[i].novo = vet[i].preco + vet[i].preco * 10/100
        }
        else {
            vet[i].novo = vet[i].preco
        }
        alert(`${vet[i].nome} - ${vet[i].codigo} - ${vet[i].preco} - ${vet[i].novo}`)
    }
}
function exe9(){
    let vetor = []
    entrada(vetor)
    gerarRelatorio(vetor)
}