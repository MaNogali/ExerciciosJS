let horaAtual = 45
if (horaAtual >= 0 && horaAtual <= 11){
    console.log('Bom dia!')
}
else if (horaAtual >= 12 && horaAtual <= 17){
    console.log('Boa tarde!')
}
else if (horaAtual >= 18 && horaAtual <= 24){
    console.log('Boa noite!')
}
else{
    console.log('Digito inválido')
}