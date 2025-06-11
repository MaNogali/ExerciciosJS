/*
CJAM - CURSO DE JAVASCRIPT ANDRÉ MAURÍCIO  

AVISO: se você executar, acidentalmente, um loop infinito, faça o seguinte:
- Feche o navegador;
- Desconecte o servidor;
- Modifique o seu código para que o looping infinito não aconteça;
- E só então, levante o servidor novamente.
*/

/* CORRIGIDO
01
- Utilizando um while loop, exiba no console todos os números entre 0 e 5, inclusive esses dois.
- O resultado deve ser:
   0
   1
   2
   3
   4
   5
*/
let  i = 0
while (i < 6){ 
 // console.log(i)
    i ++
}


/* CORRIGIDA
02 
- Comente a declaração da let e o loop acima e:
- Utilizando um for loop, faça o mesmo que foi pedido no exercício 01.
*/
for(let i = 0; i < 6; i ++){
  //console.log(i)
}

/* CORRIGIDA
03 
- Comente o loop acima e:
- Escreva um loop (for ou while) que exiba a frase abaixo no console;
- Substitua o "X" pela informação correta;
- "X" deve começar em 1 na 1ª exibição da frase e em 10 na última;
- Exiba a frase 10x no console.
"Esta é a Xª vez que esta frase é exibida no console."
*/
for(let x = 1; x < 11; x ++){
 // console.log(`Esta é a ${x}° vez que esta frase é exibida no console`)
}
console.log() // \n pula linha, mas não usei pq não ficou do jeito que eu queria
let x = 1
while(x < 11){
 // console.log(`Esta é a ${x}° vez que esta frase é exibida no console`)
    x ++
}

/* CORRIGIDA
04 
- Comente o loop acima e:
- Abaixo da constante "cities", declare uma let "upperCaseCities" e atribua à ela um array vazio;
- Adicione no array que a "upperCaseCities" armazena as cidades do array cities com todas as letras maiúsculas, utilizando o for loop.
- Para ver se deu certo, exiba o upperCaseCities no console.
*/
const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']
let upperCaseCities = [] 
 for(let j = 0; j < cities.length; j ++){
    upperCaseCities.push(cities[j].toUpperCase())
 }
 // console.log(upperCaseCities.join(', '))

/*
05 
- Comente o console.log acima e:
- Após a const numbers, utilize um for loop para somar todos os números do array;
- Exiba no console um boolean indicando se o total dessa soma é 337;
- O console deve exibir o valor true se a soma for igual a 337.
*/

const numbers = ['91', '5', '30', '97', '83', '31']
let soma = 0
for(let m = 0; m < numbers.length; m ++){
    soma += Number(numbers[m])
}
console.log(numbers)
/*
06 
- Comente o console.log acima.
Este exercício é um pouco mais complexo que os anteriores. Não se preocupe muito caso você não acerte ele. Apenas tente resolvê-lo com o conhecimento adquirido até aqui.

- O JavaScript permite você criar arrays dentro de um outro array. Isso é chamado de aninhamento de arrays, ou nested arrays em inglês. Por isso, o array "arrays" abaixo é uma sintaxe válida. Cada array dentro do array "arrays" é um item;

- Abaixo do array "arrays", utilizando o for loop, some todos os números destes arrays.
- Após o for, exiba no console o resultado, que deve ser 218.
  
Dica: você pode colocar um loop dentro do outro, ou seja, aninhá-los. =)
*/

const arrays = [
  [4, 32, 8],
  [64, 8, 32],
  [8, 32, 16],
  [2, 8, 4]
]

/*
07
- Abaixo do array "fruits", verifique se "abacaxi" existe no array. Se existir, exiba no console a mensagem "A string "abacaxi" existe no array  
fruits.";
- Se "abacaxi" não existir, verifique se "pera" existe no array. Se existir, exiba no console a mensagem "A string "pera" existe no array fruits.";
- Se nenhuma das duas frutas existirem no array, exiba no console a mensagem Nem pera nem abacaxi existem no array "fruits".".
*/

const fruits = ['morango', 'banana', 'mamão']

/*
08
- Armazene em uma constante apenas a hora atual na qual você está fazendo este exercício. Ex.: 19;
- À partir das 00, exiba "Bom dia!" no console;
- À partir das 12, exiba "Boa tarde!";
- À partir das 18, exiba "Boa noite!".
Obs.: tanto a expressão do lado esquerdo quanto a do lado direito do operador  
lógico precisam ter a constante especificada. Exemplo: hour > x && hour < y.
*/