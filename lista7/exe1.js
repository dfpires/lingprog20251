function entrada(mat){
    for(let i=0;i<3;i++){
        mat[i] = []
        for(let j=0;j<5;j++){
            mat[i][j] = parseInt(Math.random() * 10) + 15// gera número aleatório entre 0 e 9
        }
    }
}
function somaEntre15e20(mat){
    let soma = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
            if (mat[i][j] >= 15 && mat[i][j] <= 20){
                soma++
            }
        }
    }
    return soma 
}
function exibeMatriz(mat){
    let saida = ''
    for(let i=0;i<mat.length;i++){
        saida = saida + '\n'
        for(let j=0;j<mat[i].length;j++){
            saida = saida + " " + mat[i][j]
        }
    }
    alert(saida)
}
function exe1(){
    let mat = []
    entrada(mat)
    alert(`A qtde de elementos entre 15 e 20 é ${somaEntre15e20(mat)}`)
    exibeMatriz(mat)
}
exe1()