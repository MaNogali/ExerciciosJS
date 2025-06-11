/*FEITO
01 - Declare uma const "myBirthYear", que recebe o ano do seu nascimento, com 4  
dígitos. Ex.: 2001.
*/
const myBirthYear = 2009 

/* FEITO 
02 - Declare uma const "currentYear", que recebe o ano atual, com 4 dígitos.*/ 
const currentYear = 2025

/* FEITO
03 - Declare uma const "myAge", que recebe o ano atual subtraído pelo ano do seu  
nascimento. Mas sem digitar os números manualmente.
Você pode utilizar o sinal de menos (-) entre os dois valores e verificar o que  
acontece. 
- Exiba a "myAge" no console.
*/
const myAge = currentYear - myBirthYear
console.log(myAge)

/* FEITO
04 Comente o console.log acima, e:
- Antes do console.log abaixo, declare uma const "ten", esta const deverá receber o número 10:
- Descomente o console.log abaixo;
- Substitua a palavra "valor1" pelo ano atual somado à 10;
- Substitua a palavra "valor2" pela sua idade somada à 10;
- Os números não devem ser digitados manualmente;
- Observe o resultado no console do browser.
Não se assuste com as crases e os cifrões. Conversaremos mais sobre operações  
matemáticas e strings (textos) em breve =)
*/
const ten = 10
const valor1 = currentYear + 10
const valor2 = myAge + 10
console.log('Em ' + valor1 + ', estarei com ' + valor2 + ' anos.')
console.log(`Em ${valor1}, estarei com ${valor2} anos.`)

/* FEITO
05 - Comente o console.log acima, e:
- Armazene a palavra 'JavaScript' em uma constante "programmingLanguage";
- Armazene a junção das letras "J" e "S", da programmingLanguage, em uma constante "js";
- As letras não devem ser digitadas manualmente;
- Exiba a "js" no console;
*/
const programmingLanguage = 'JavaScript'
const js = `${programmingLanguage[0]}${programmingLanguage[4]}`
console.log(js)

/* FEITO
06 - Comente o console.log acima, e,
- Armazene, em uma constante "mdn", a junção das letras iniciais das 3 palavras que a constante "mozilla" que foi declarada abaixo, armazena;
- As iniciais não devem ser digitadas manualmente;
- Exiba a "mdn" no console;
*/
const mozilla = 'Mozilla Developer Network'
const mdn = `${mozilla[0]}${mozilla[8]}${mozilla[18]}`
console.log(mdn)

/*
07 - Comente o console.log acima, e,
- Exiba no console a última letra da string que a "randomWord" (abaixo) armazena, mas com a condição a seguir;
- Ao invés de inserir manualmente a posição do último caractere, faça com que a obtenção da última letra funcione para qualquer palavra que a "randomWord" receber;
- Dica: utilize a propriedade ".length".
*/
let randomWord = 'Araponga'
console.log(randomWord[randomWord.length - 1])

/* FEITO
08 - Comente o console.log acima, e,
- Exiba, no console, a string que "summerMessage" (abaixo) armazena, mas com todas as letras minúsculas;
- Não modifique a string da "summerMessage";
- Não digite a nova string manualmente.
*/
const summerMessage = 'O VERÃO CHEGA NESTE FIM DE SEMANA'
console.log(summerMessage.toLowerCase())

/* FEITO
09 - Comente o console.log acima, e,
- Exiba, no console, a string que "winterMessage" (abaixo) armazena, mas com todas as letras maiúsculas;
- Não modifique a string da "winterMessage";
- Não digite a nova string manualmente.
*/
const winterMessage = 'o inverno está chegando.'
console.log(winterMessage.toUpperCase())

/* FEITO
10 - Comente o console.log acima, e,
- Após a const "bestMovie" (abaixo), declare uma constante "realBestMovie";
- Atribua à "realBestMovie" a mesma string da "bestMovie", mas substituindo o nome do filme para "Moonlight";
- Exiba a "realBestMovie" no console.
*/
const bestMovie = 'E o Oscar de melhor filme vai para: "La la land"!'
const realBestMovie = bestMovie.replace('La la land', 'Moonlight')
console.log(realBestMovie)

// TREINO
let moeda = '6,39'
console.log(moeda.replace(',' , '.'))

/* FEITO
11 - Comente o console.log acima, e,
- Abaixo deste comentário, armazene o resto de 10 dividido por 3 em uma constante "reminder";
- Exiba a reminder no console. O resultado deve ser 1;
*/
const reminder = 10%3 //MOD (igual aquele que a nivia passou)
console.log(reminder)

/* FEITO
12 - Comente o console.log acima, e,
- Abaixo da let "episodes", incremente o valor dela em 1;
- Após o incremento, exiba a let "episodes" no console;
- O valor exibido no console deve ser 7.
*/
let episodes = 6

//PRIMEIRA FORMA DE FAZER (não recomendado)
//episodes = episodes + 1

//SEGUNDA FORMA (recomendado) - NOME: ADDITIONAL ASSIGNMENT
episodes += 1
console.log(episodes)


/* FEITO
13 - Comente o console.log acima, e,
- Decremente a let "episodes" em 1;
- Após o decremento, exiba a let "episodes" no console;
- O valor exibido no console deve ser 6.
*/
episodes -= 1
console.log(episodes)

/* FEITO
14 - Comente o console.log acima, e,
- Utilize o operador addition assignment para atualizar o valor da let "episodes" para 10;
- Após a atribuição, exiba a let "episodes" no console.
*/
episodes += 4
console.log(episodes)

/* FEITO
15 - Comente o console.log acima, e,
- Abaixo deste comentário, armazene a string 'O nº de episódios é: NUMERO_DE_EPISÓDIOS' em uma constante "allEpisodes";
- Insira a let "episodes" no lugar de "NUMERO_DE_EPISÓDIOS";
- Exiba a "allEpisodes" no console.
*/
const allEpisodes = `o n° de episódios é: ${episodes}`
console.log(allEpisodes)  