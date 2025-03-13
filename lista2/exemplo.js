// estrutura de seleção
// if

let imc = Number(document.getElementById("imc").value)
if (imc < 22){
    alert("Peso bom")
}

// if else
if (imc < 24) {
    alert("Peso bom")
}
else {
    alert("Cuidado")
}

// if else aninhados
if (imc < 18.5){
    alert("Magreza")
}
else if ((imc >= 18.5) && (imc < 25)){
    alert("Normal")
}
else if ((imc >= 25) && (imc < 30)){
    alert("Sobrepeso")
}
else if ((imc >= 30) && (imc < 35)){
    alert("Obesidade I")
}
else if ((imc >= 35) && (imc < 40)){
    alert("Obesidade II")
}
else {
    alert("Obesidade III")
}
