# JavaScript 

## Características

  - múltiplos paradigmas (forma como a linguagem fornece os recursos para desenvolver e construir soluções):
    
    - Orientada a objetos
    
    -Funciona

    -Orientada a eventos

  - possui tipagem dinâmica e fraca
    - O JavaScript entende por si qual o tipo da variável declarada sem precisar especificação, além de conseguir fazer operação com diferentes tipos de dados sem levar muito em conta o tipo de cada.

## Tipos Primitivos

  - Number: representação numérica

  - String: conjunto de caracteres
    
    *! Para declarar uma string é necessário colocar entre "" (aspas duplas), ''(aspas simples)!*

  - Boolean:representação de true (verdadeiro) ou false (falso)

- Null: nada
  
  *! Null é diferente de zero. O zero é passível de operação  matemática, o null **não**!*

- Undefined: valor indefinido.

## Operações Básicas

### Operações matemáticas

- Adição

      1 + 4

- Subtração

      3 - 2

- Multiplicação

        4 * 2

- Divisão

        10 / 5

- Módulo (representa o resto da divisão)

        9 % 5

### Operações com strings
  
- Concatenação (soma de string)

      "Planeta" + "terra"

## Recursos do Browser

### Console.log()
Imprime um dado no console.

    console.log("Eu sou uma mensagem no console.")
  
### console.info()
Imprime um dado no console de informação.

    console.info("Sou um dado de informação no console")

### console.warn()
Imprime um dado de urgencia/alerta no console.

    console.warn("Sou um dado tipo string de alerta no console.")

### console.error()
Imprime um dado de erro no console.

    console.warn("Sou um dado tipo erro no console.")

### alert
Exibe uma mensagem na tela

    alert("Bem vindo")

### confirm
Identifica quando clicamos em "cancel" ou "confirm"

    confirm("Pronto?")

### prompt()
Recebe um dado pelo usuário 

    prompt("Qual o seu nome?")

## Variáveis

- Variáveis são recursos que o JavaScript utiliza para armazenar valores que poderam ser utilizados no código.

- Para se utilizar uma variável é necessário declara-la

- Regas de nomenclatura de uma variável
  
  1.  Uma variável não pode conter espaço.
  
  2. Não se pode começar o nome de uma variável com número.

  3. Uma variável pode conter números, letras e simbolos.

  4. Não se pode usar palavras reservadas(palavras já utilizadas no JavaScript).

  5. JavaScript é case sensite

*!É uma boa prática usar o estilo Camel case para declarar uma variável, ou seja: a primeira palavra começar com letra minúscula e a segunda com letras maiúscula!*


### **let**

Tipo de variável que pode receber mudanças de valor durante o código.

*! Para declarar a variável é necessário incluir a palavra **let** porém, quando vamos atribuir novos valores a ela **não devemos escrever novamente a palavra let***

    let ano = 2022
    console.log(ano)
    ano = 2000
    console.log(ano)

### **const**
Tipo de variável que **não** pode receber mudanças de valor durante o código.

    const humano = "mamífero"
    console.log(humano)
    humano = "réptil"
    console.log(humano)

### **var**
Mesmo funcionamento que o let, **porém seu uso não é recomendado** por possuir um "escopo de função", o que pode confundir.

    var idade = 20
    console.log(idade)
    idade = 21
    console.log(idade)

## Comentário
Comentários não aparecem na execução do código e servem para se comunicar com outros programadores quando abrirem seu código.

#### Comentário de uma linha
    //Sou um comentário de uma linha

### Comentário de várias linhas
    /*Sou
    Um
    Comentário
    de
    várias
    linhas*/

## Operadores de comparação
- Retornam valores booleanos (true / false)

### Igualdade
- Compara se itens são iguais enquanto **valores**
        
        let noventaString = "90"
        let noventaNumero = 90
        console.log(noventaString == noventaNumero)

- Compara se itens são iguais tanto no **valor** quanto no **tipo**

        let cinquenta = 50
        let cinquentaString = "50"
        console.log(cinquenta === cinquentaString)

### Diferença (!)
- Diferente levando em consideração somente valores 

        let cinco = 5
        let cincoString = "5"
        console.log(cinco != cincoString)

- Diferente levando em consideração somente valores 

        let seis = 6
        let seisString = "6"
        console.log(seis !== seisString)

*!Para utilizar o operador de diferença utlizamos a **!** (**exclamação**)!*

### Maior que / maior ou igual

    let dois = 2
    console.log(dois > 1)

*!Utilizar o > (maior que) com string faz com que o javaScript verifique se a palavra, em relação ao alfabeto, vem antes que a outra!*

    let quatro = 4
    console.log(4 == 6) 

### Menor que / menor ou igual

    var angulo = 180
    console.log(angulo < 90)

*!Utilizar o > (maior que) com string faz com que o javaScript verifique se a palavra, em relação ao alfabeto, vem antes que a outra!*

    var a = 'A'
    console.log(A <= B)

## Operadores lógicos
- Retornam valores booleanos (true / false)


### && - se uma **e** outra for verdade 

Exemplo: 

- João quer ir a praia se hoje for sábado **e** estiver sol.

| Hoje | Tempo | Resultado |
|:---: | :---: | :---: |
| 'terça' | Sol | :x: |
| 'Sábado' | Chuva | :x: | 
| 'Sábado' | 'Sol' | :ballot_box_with_check: |

    let tempo = 'sol'
    let hoje = 'terça'
    console.log(tempo == 'sol' && hoje == 'sábado')


### || - se uma **ou** outra for verdade 

Exemplo: 

- Maria quer sair se hoje for sábado **ou** se ela sair cedo do trabalho.

| Hoje | Saída | Resultado |
|:---: | :---: | :---: |
| 'sábado' | tarde | :ballot_box_with_check: |
| 'quinta' | cedo | :ballot_box_with_check: | 
| 'sexta' | tarde | :x: |

    let hoje = 'quinta'
    let saida = 'cedo'
    console.log(hoje == 'sábado' || saida == 'cedo')
