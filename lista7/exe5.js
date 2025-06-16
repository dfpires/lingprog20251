function cadastra(mat, vet){
    for(let i=0;i<12;i++){
        mat[i] = [] // cria espaço na memória para cada vetor da matriz
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe as vendas na semana ${j+1} do mês ${vet[i]}`))    
        }
    }
}
function calculaTotalMes(mat, vet){
    for(let i=0;i<mat.length;i++){
        let soma = 0 // vamos iniciar um novo mês
        for(let j=0;j<mat[i].length;j++){
            soma = soma + mat[i][j]
        } 
        alert(`Total vendido em ${vet[i]} foi de ${soma}`)
    }
}
function calculaTotalSemana(mat){
    for(let j=0;j<4;j++){ // para cada semana
        let soma = 0
        for(let i=0;i<12;i++){ // para cada mês
            soma = soma + mat[i][j]
        }
        alert(`Total vendido na semana ${j} foi de ${soma}`)
    }
}
function calculaTotalAno(mat){
    let soma = 0
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<4;j++){
            soma += mat[i][j]
        }
    }
    return soma
}
function calculaVendasMaior5000(mat, vet){
    for(let i=0;i<12;i++){
        let qtde = 0
        for(let j=0;j<4;j++){
            if (mat[i][j] > 5000){
                qtde++
            }
        }
        alert(`Em ${vet[i]} teve ${qtde} vendas maiores que R$5.000,00`)
    }
}
function calculaMesesVendasMenores1000(mat, vet){
    for(let i=0;i<12;i++){
        let qtde = 0
        for(let j=0;j<4;j++){
            if (mat[i][j] < 1000){
                qtde++
            }
        }
        if (qtde > 0){
            alert(`Em ${vet[i]} teve ${qtde} vendas menores que R$1.000,00`)
        }
    }
}
function exe5(){
    let mat = []
    const vet = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    cadastra(mat, vet)
    calculaTotalMes(mat, vet)
    calculaTotalSemana(mat)
    calculaVendasMaior5000(mat, vet)
    calculaMesesVendasMenores1000(mat, vet)
    alert(`Total vendido no ano ${calculaTotalAno(mat)}`)
}
exe5()
// crie uma função que calcula e mostra a qtde de vendas maiores que 5000 em cada mês
// crie uma função que calcula e mostra os meses que tiveram vendas menores que 1000