function entrada(vet){ // vet = vetor
    vet[0] = 'A'
    vet[1] = 'B'
    vet[2] = 'C'
}
function processa(vet){
    vet[0] = vet[0] + 'U'
    vet[1] = vet[1] + 'U'
    vet[2] = vet[2] + 'U'
}
function saida(vet){
    alert(`Saída de dados ${vet}`)
}
function main(){
    let vetor = []
    // passando vetor como parâmetro da função
    // vet vai receber uma referência de vetor (passagem de parâmetro por referência)
    entrada(vetor) 
    processa(vetor)
    saida(vetor)
}
main()