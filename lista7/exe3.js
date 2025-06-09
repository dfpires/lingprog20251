function entrada(mat){
    for(let i=0;i<6;i++){
        mat[i] = []
        for(let j=0;j<3;j++){
            mat[i][j] = Math.floor(Math.random() * 31)
        }
    }
}
function calculaMaiorMenor(mat){
    // inicia a variável maior e menor como sendo o primeiro elemento
    let maior = mat[0][0], menor = mat[0][0]
    let iMaior = 0, jMaior = 0, iMenor = 0, jMenor = 0
    // busca por elementos maiores ou menores
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if (mat[i][j] > maior){
                maior = mat[i][j]
                iMaior = i
                jMaior = j
            }
            if (mat[i][j] < menor){
                menor = mat[i][j]
                iMenor = i
                jMenor = j
            }
        }
    }
    alert(mat)
    alert(`${maior} está na posição [${iMaior}][${jMaior}] e o menor ${menor} na posição [${iMenor}][${jMenor}]`)
}
function exe3(){
    let mat = []
    entrada(mat)
    calculaMaiorMenor(mat)
}
exe3()