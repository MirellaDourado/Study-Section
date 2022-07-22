# CSS

## Definição

- CSS significa Cascading Style Sheets

-CSS indica aos elementos HTML como se posicionarem

-CSS pode ser utilizado de forma interna e externa

*! Por motivo de boas práticas, deve-se sempre externar o CSS em arquivos com extensão ".css" !*

Interno (no próprio HTML):

        <p <style="color: red;"> Hello </p>
        
        <style>
            p{
                color: red;
            }
        </style>

Externo:

        <link ref= 'stylesheet' href="/style.css" />


## Anatomia


![Demonstração de declaração do CSS](https://www.w3schools.com/css/img_selector.gif)


| Tipo | Descrição |
| :---: | :------: |
| Seletor (Selector)| Seleciona o elemento HTML que deve ser estilizado |
| Bloco | Engloba as propriedades dentro do {} |
|Declaração (Declaration | Cada declaração inclui uma propriedade CSS |
| Propriedade (Property) | Define o que será alterado |
| Valor (Value)| Define a alteração |


*! No CSS ao finalizar o valor aplicado deve-se sempre aplicar o ponto e vírgula (;) ao final para indicar que acabou a declaração daquela propriedade!*

## Seletores


Os seletores são usados para selecionar o elemento HTML que irá sofrer a alteração.

### **Seletores Simples**
Seleciona elementos baseado no nome, id e class

    p {
    text-align: center;
    color: red;
    }
    
 *! No CSS id são representadas com uma hash (#) antes do nome do identificador e as class com um ponto (.) antes do nome das classes !*   

- ### Selecionar mais de um seletor

    - Para adicionar múltiplos elementos para o mesmo estilo basta adicionar uma vírgula entre eles

            h1, p{
            color: blue;
            }

### **Combinação de Seletores**

- ### Seletor Descendente
    - Seleciona uma tag que esteja dentro da outra
    - Utiliza espaço entre os seletores
        
            <style>
                p a{
                    color: red;
                    text-decoration: none;
                }
            </style>
            
            <p> Veja mais em <a href:"https://www.google.com/"> Google </a> </p>


- ### Seletor Filho

    - Seleciona seletores que sejam **filhos diretos**.
    - Utilizam sinal de maior (>) entre o seletor pai e seletor filho.

            <style>
                div > p {
                    background-color: yellow;
                }
            </style>

            <div>
                <p> background amarelo </p>
                <p> background amarelo </p>
                <section>
                    <p> NÃO AMARELO </p>
                </section>
                <p> background amarelo </p>
            </div>


- ### Seletor Seguinte Irmão

    - Usado para selecionar o elemento que vem **logo após** algum outro elemento.
    - Usa-se o sinal de mais (+) entre os irmãos adjacentes/seguintes

            <style>
                div + p{
                    color: red
                }
            </style>

            div{
                <p> NÃO VERMELHO </p>
            }
            <p> FICA VERMELHO </p>
            <p> NÃO FICA VERMELHO </p>


- ### Seletores Irmãos em Geral

    - Seleciona todos os elementos que são os próximos irmãos do elemento escolhido.
    - Usa-se o sinal de til (~) entre os elementos irmãos.

            <style>
                h1 ~ p{
                    color: purple;
                }
            </style>

            <h1> Olá <h1>
            <p> FICA ROXO </p>
            <p> FICA ROXO </p>


### Pseudo-classes

Pseudo-classes são usadas para definir um estado de um elemento

        elemento:pseudo-classe {
            propriedade: valor;
        }

| Seletor | Descrição |
| :-----: | :-------: |
| :active | Muda o estilo de um elemento que está sendo ativado pelo usuário |
| :any-link | Muda o estilo de todo elemento < a > ou < area > que possua um atributo *href*
| :autofill | Muda o estilo quando um elemento < input > é preenchido pelas sugestões do browser.
| :checked | Muda o estilo de qualquer elemento radio (< input type="radio">), checkbox (< input type="checkbox">) ou option (< option > em um < select >) que é marcado. |
| default | Muda o estilo de elementos < form > que são definidos em um grupo
| :defined | Muda o estilo de qualquer elemento que tenha sido definido |
| :disabled | Muda o estilo de qualquer elemento desabilitado |
| :empty | Muda o estilo de um elemento que não tem "filhos" |
| :enabled | Muda o estilo de qualquer elemento hablitado |
| :first-child | Muda o estilo de qualquer elemento que seja o primeiro filho da tag a qual essa pseudo-classe é aplicada. |
| :first-of-type | Muda o estilo do primeiro elemento em um grupo de elementos irmãos |
| :focus | Muda o estilo de um elemento que seja o foco de escrita do usuário.
| :hover | Muda o estilo de um elemento quando o mouse passa por cima dele.
| :in-range | Muda o estilo de um elemento < input > cujo o valor não passe do limite especificado com os atributos *min* e *max* | 
| :invalid | Muda o estilo do elemento < form >, < fieldset >, < input > cujo elemenro colocado pelo usuário não seja válido 
| :lang(idioma) | Muda o estilo de um elemento que possua o atributo *lang* do idioma selecionado. |
| :last-child | Muda o estilo de qualquer elemento que seja o último filho da tag a qual essa pseudo-classe é aplicada | 
| :last-of-type | Muda o estilo do último elemento entre um grupo de irmãos |
| :link | Muda o estilo de um elemento que não tenha sido visitado pelo usuário ainda. |
| :not(*elemento*) | Muda o estilo de elementos que não seja da lista de seletores selecionado.
| :nth-child(*n*)| Muda o estilo do elemento baseado na sua posição no grupo de irmãos |
| :nth-last-child(*n*) | Muda o estilo do elemento baseado na sua posição no grupo de irmãos, começado a contagem do final |
| :nth-last-of-type(n) | Muda o estilo do elemento baseado na sua posição entre os irmãos do mesmo tipo, começando a contagem pelo final |
| :nth-of-type(*n*) | Muda o estilo do elemento baseado na sua posição entre os irmãos do mesmo tipo |
| :only-child | Muda o estilo de elementos sem irmãos |
| :only-of-type | Muda o estilo de um elemento que não possui irmãos do mesmo tipo |
| :optional | Muda o estilo de qualquer elemento < input >, < select > ou < textarea > que não possui o atributo *required* |
| :out-of-range | Muda o estilo de um elemento < input > cujo o valor passe do limite especificado com os atributos *min* e *max* |
| :read-only | Muda o estilo de um elemento que não pode ser editado pelo usuário |
| :read-write | Muda o estilo de um elemento que pode ser editado pelo usuário |
| :required | Muda o est6tilo de qualquer elemento < input >, < select > ou < textarea > que possui o atributo *required*
| :root | Usado para declaração global, é referente ao < html > |
| :valid | Muda o estilo do elemento < form >, < fieldset >, < input > cujo elemenro colocado pelo usuário seja válido |
| :visited | Muda o estilo de um link já visitado pelo usuário


*! Caso não conheça algum atributo procure sobre [AQUI](https://github.com/MirellaDourado/Study-Section/blob/main/01-fundamentos/Introducao_HTML_e_CSS/HTML.md) !*

### Pseudo-elementos

| Seletor | Descrição |
| :---: | :---: |
| ::after | Insere um estilo após o elemento escolhido. | 
| ::before | Insere um estilo após o elemento escolhido. | 
| ::first-letter | Seleciona a primeira letra da primeira linha de um bloco. |
| ::first-line | Seleciona a primeira linha de um bloco. |    
| ::selection | Representa a parte de um texto selecionada pelo usuário. |

### Comentário

*! O comentário em CSS é o mesmo para uma linha e múltiplas linhas !*

    /*Isso é um comentário em CSS*/

### Background

- #### **background-color** 
    - Muda a cor do fundo
            
            p{
                background-color: red
            }
- #### **background-image**
    - Muda o fundo para uma imagem
            
            body{
                background-image: url(tree.jpg)
            }
- #### **background-repeat**
    - Repete a imagem de fundo 

            body{
                background-image: url(tree.jpg)
                background-repeat: no-repeat;
            }
- #### **background-attachment**
    
    - Especifica se a imagem de fundo deve se fixa (fixed) ou rolar (scroll) com a página

            body {
                background-image: url("img_tree.png");
                background-repeat: no-repeat;
                background-attachment: fixed;
            }

- #### **background-position**
    
    - Especifica a posição da imagem de fundo
        
            body {
                background-image: url("img_tree.png");
                background-repeat: no-repeat;
                background-position: right top;
                background-attachment: fixed;
            }
- #### **background (shorthand property)**
    
    - Maneira curta de definir as propriedades do background. Ordem: 1-color 2-image 3-repeat 4-position

            -body {
                background: #ffffff url("img_tree.png") no-repeat right top;
            }

### Border
Permite especificar *style*, *width*, e *color*




## Conhecendo as unidades de tamanho

*Mais recomendados estão marcados com um asterísco*

| Unidade | Descrição | Propriedades aplicadas
| :-----: | :-------: |
| px* | Pixels (referente ao dispositivo)
| em | Tamanho relativo à fonte utilizada no elemento ao qual está inserido |
| ex | Correspondente à altura da fonte 'x’ |
| in | Polegadas |
| cm | Centímetros |
| mm | Milímetros |
| pt | pontos |
| pc | picas |

## Fontes

### Mudar a fonte de um texto

        p{
            font-family: Arial;
        }

### Tamanho da fonte

        p{
            font-size: 12px;
        }

### Estilo na fonte

        p{
            font-style: italic
        }

Valor | Descrição |
:---: | :-------: |
normal | fonte sem efeito itálico ou oblicuo
italic | fonte com efeito itálico
oblique | font com efeito oblíquo

## Texto

### Alinhar o texto

    p{
        text-align: center;
    }

Valor | Descrição |
:---: | :-------: |
center | centralizado |
left | alinhado a esquerda |
right | alinhado a direita |
justify | alinhamentos justificado |

### Efeitos decorativos

    p{
        text-decoration: none;
    }

Valor | Descrição |
:---: | :-------: |
none | Não produz/ retira decoração do elemento
underline | Sublinhado
over-line | Linha acima do texto
line-through | Linha cortando o texto
blink | Texto piscando

### Transformando o texto
    
    p{
        Text-transform: lowercase;
    }

Valor | Descrição |
:---: | :-------: |
capitalize | Primeiro caracter de cada palavra estará em maiúsculo
uppercase | Todos os caracteres em maiúsculo
lowercase | Todos os caracteres em minúsculo
none | Não aplica efeitos

### Espaçamento entre letras

    p{
        letter-spacing: 0.2px
    }

### Espaçamento entre palavras

    p{
        word-spacing: 1.5px;
    }

## Listas

### Decoração dos marcadores

    ul li{
        list-style-type: square;
    }

#### Listas ordenadas

Valor | Descrição |
:---: | :-------: |
decimal* | números decimas, iniciando com 1 |
decimal-leading-zero* | números decimais com zeros iniciais à esquerda (01,02,03...) |
upper-roman* | números romanos minúsculos (I, II, III, IV, ...) |
lower-roman | números romanos minúsculos (i, ii, iii, iv, ...) |
georgian | umeração georgeana tradicional (an, ban, gan,...)
armenian | numeração armênia tradicional ()
none | nenhum marcador de lista

#### Listas não ordenadas

Valor | Descrição |
:---: | :-------: |
disc* | ponto sólido |
circle* | ponto vazio |
square* | quadrado vazio |
lower-latin* / lower-alpha | letras do nosso alfabeto minpusculas |
upper-latin* / upper-alpha | letras do nosso alfabeto em maiúsculas |
lower-greek | caracteres gregos clássicos (α, β, γ, …) |
none | nenhuma marcador de lista |

### Imagem no elemento de uma lista

    li{
        list-style-image: url("http://png.com/imagem.png)
    }

## Cores

### Cor do texto

    p{
        color: red;
    }

### Cor de fundo de um elemento

    body{
        background-color: gray;
    }

### Imagem de fundo do elemento

    body{
        backgroung-image: url(http://caminhoDaImagem/imagem.jpg);
    }

### Repetição da imagem de fundo

    body{
        background-repeat: no-repeat;
    }

Valor | Descrição |
:---: | :-------: |
repeat | Imagem é repetida em ambas as direções: horizontal e vertical |
repeat-x | Imagem repetida somente na horizontal |
repeat-y | Imagem repetida somente na vertical |
no-repeat | Imagem não será repetida e somente uma cópia da mesma será renderizada |

### Define se a imagem de fundo será fixa ou não

    body{
       background-attachment: fixed 
    }

Valor | Descrição |
:---: | :-------: |
scroll | Imagem acompanha a rolagem da página na janela do navegador |
fixed | Imagem fica fixa na página |

### Posição da imagem de fundo

    body{
            background-position	
        }




