function entrada(va){
    va = va + 10
}
function processa(va){
    va = va + 10
}
function saida(va){
    alert(va)
}
function main(){
    let a = 10
     // passando um número como parâmetro da função
    // va vai receber o valor de a (passagem de parâmetro por valor)
    entrada(a)
    processa(a)
    saida(a)
}
main()