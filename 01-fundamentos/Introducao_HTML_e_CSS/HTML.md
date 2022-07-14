# APRENDENDO SOBRE HTML

## Estrutura

### Tag
 Assim como etiquetas e servem para **marcar** e dar **semântica** aos componentes escritos no arquivo HTML. Geralemnte possuem uma tag de fechamento. 
 
 *!Não é case sensitive, mas é uma boa prática escrever no minúsculo!*

Exemplo:    

    <p>Este é um parágrafo</p>

| Tag de Abertura | Elemento | Tag de Fechamento |
| :---: | :---: | :---: |
| < p > | Este é um parágrafo | < /p >
| < br > | - | - |

*! Nem toda tag possui uma tag de fechamento e nem toda tag necessariamente precisa de uma tag de fechamento. Mas saiba que essa é uma estrutura básica!*

### Atributos

Dão informações extras sobre uma tag para o navegador (browser) 

- Todos elementos **podem** ter atributos
- Atributos **sempre** são usados na tag de início
- Atributos geralmente vem no modo: atributo="valor"

*!Tanto o nome do atributo quando o seu valor são case sensitive!*

Exemplo:

    <a href:"https//:google.com">Google</a>

| Atributo | Elemento(s) | Definiçao
| :---: | :---: | :---: |
accept | < form >, < input > | Lista de tipos que o servidor aceita, tipicamente um tipo de arquivo.
accept-charset | < form > | Lista de conjunto de caracteres suportados.
accesskey | Encontra-se em todos | Define um atalho no teclado para ativar ou adicionar foco ao elemento.
action | < form > | A URI de um programa que processa a informação submetida através do formulário.
align | < applet >, < caption >, < col >, < colgroup >,  < hr >, < iframe >, < img >, < table >, < tbody >,  < td >,  < tfoot > , < th >, < thead >, < tr > | Especifica o alinhamento horizontal do elemento.
alt	| < applet >, < area >, < img >, < input > | Texto alternativo caso uma imagem não possa ser exibida.
async | < script > | Indica que o script deve ser executado assíncrono.
autocomplete | < form >, < input > | Indica se controles  neste formulário podem por padrão ter seus valores completados automaticamente pelo navegador.
autofocus | < button >, < input >, < keygen > (en-US), < select >, < textarea > | O elemento deve ser focado automaticamente após a página ser carregada.
autoplay | < audio >, < video > | O aúdio ou vídeo deve ser reproduzido assim que possível.
bgcolor	| < body >, < col >, < colgroup >, < marquee >, < table >, < tbody >, < tfoot >, < td >, < th >, < tr > | Cor do plano de fundo do elemento. *Nota: Por favor use a propriedade CSS background-color em vez disso.*
border | < img >, < object >, < table >	| A largura da borda. *Nota: Por favor use a propriedade CSS border em vez disso.*
buffered | < audio >, < video > | Contém o intervalo de tempo da mídia que já foi carregada.
challenge | < keygen > | A challenge string that is submitted along with the public key.
charset	| < meta >, < script > | Declara a codificação dos caracteres da página ou do  script.
checked	| < command >, < input > | Indica se o elemento deve ser checado no carregamento da página.
cite | < blockquote >, < del >, < ins >, < q > | Contêm uma URI que aponta para a fonte da citação ou alteração.
class | Encontra-se em todos | Frequentemente usado com CSS para estilizar os elementos com propriedades comuns.
code | < applet > | Especifica a URL do arquivo de classe do miniaplicativo que será carregado e executado.
codebase | < applet > | Este atributo fornece a URL absoluta ou relativa do diretório onde os arquivos .class do miniaplicativo são armazenados.
color | < basefont >, < font >, < hr > | Este atributo define a cor do texto usando o nome de uma cor ou uma cor especificada em hexadecimal através do formato #RRGGBB. *Nota: Por favor use a propriedade CSS color em vez disso.*
cols | < textarea >	| Define o número de colunas numa area de texto.
colspan	| < td >, < th > | O atributo colspan define o número de colunas que uma célula deve conter.
content	| < meta >	| Um valor associado com http-equiv ou name dependendo do contexto.
contenteditable	| Encontra-se em todos | Indica se o conteúdo do elemento é editável.
contextmenu	| Encontra-se em todos | Define o ID de um elemento < menu > que servirá como o menu de contexto de um outro elemento.
controls | < audio >, < video > | Indica se o navegador deve mostrar ou não os controles de reprodução ao usuário.
coords	| < area >	| Uma escolha de valores especificando as coordenadas da região hot-spot.
data | < object > |	Especifica a URL do recurso.
datetime | < del >, < ins >, < time > | Indica a data e o horário associados ao elemento.
default | < track >	| Indica que a faixa deve estar habilitada a não ser que as preferências do usuário indiquem algo diferente.
defer |	< script > | Indica que o script deve ser executado após a página ter sido analisada.
dir | Encontra-se em todos | Defina a direção do texto. Os valores permitidos são ltr (Esquerda para direita) e rtl (Direita para esquerda)
dirname	| < input> , < textarea >	 
disabled |	< button >, < command >, < fieldset >, < input >, < keygen > , < optgroup >, < option >, < select >, < textarea >	| Indica se o usuário pode ou não interagir com o elemento.
draggable |	Encontra-se em todos |	Define se o elemento pode ser arrastado.
dropzone	| Encontra-se em todos |	Indica que o elemento aceita a soltagem de conteúdo nele.
enctype	| < form >	| Define o tipo de conteúdo da data do formulário quando o method é POST.
for	| < label >, < output >	| Descreve elementos na qual pertencem a este.
form | < button >, < fieldset >, < input >, < keygen >, < label >, < meter >, < object >, < output >, < progress >, < select >, < textarea >	| Indica o formulário que é o proprietário do elemento.
headers	| < td >, < th >	| IDs dos elementos < th > na qual se aplicam a este elemento.
height | < canvas >, < embed >, < iframe >, < img >, < input >, < object >, < video > |	Nota: Em algumas instâncias, tal como < div >, isto é um atributo legado, em cujo caso  a propriedade CSS height deveria ser usado em vez. Em outros casos, assim como < canvas >, a altura deve ser especificado com esse atributo.
hidden	| Encontra-se em todos | Indica a relevância de um elemento.
high |	< meter > |	Indica o menor limite da faixa superior.
href |	< a >, < area >, < base >, < link > |	 A URL de um recurso ligado.
hreflang |	< a >, < area >, < link >	| Especifica o idioma de um recurso ligado.
http-equiv |	< meta>	 | 
icon	| < command > |	Especifica uma imagem na qual represente o comando.
id	| Encontra-se em todos |	Frequentemente usado com CSS para estilizar um elemento específico. O valor deste atributo deve ser único.
ismap |	< img >	| Indica que a imagem é parte de um mapa de imagem "sever-side".
itemprop	| Encontra-se em todos |	 
keytype	| < keygen > | Especifica o tipo de chave gerada.
kind |	< track>	| Especifica o tipo de caminho de texto.
label |	< track>	| Especifica um título "user-releadable" de um caminho de texto.
lang | Encontra-se em todos |	Define o idioma usado no elemento.
language |	< script >	| Define o idioma do script usado no elemento.
list	| < input > |	Identifica uma lista de opções pré definidas para sugerir ao usuário.
loop	| < audio >, < bgsound >, < marquee >, < video > | 	Indica se a mídia deveria começar tocando do começo quando ela é finalizada.
low	| < meter >	| Indica o maior limite da menor distância.
manifest |	< html > |	Especifica a URL do cache manifest do documento. documento
max	| < input >, < meter >, < progress >	| Indica o valor máximo permitido.
maxlength	| < input >, < textarea >	| Define o núemro máximo de caracteres permitido no elemento.
media	| < a >, < area >, < link >, < source >, < style >	| Especifica uma sugestão da mídia para qual recurso ligado foi designado.
method |	< form >	| Define qual método HTTP usar quando enviar um formulário. Pode ser GET(padrão) ou POST.
min	| < input >, < meter >	| Indica o valor mínimo permitido.
multiple	| < input >, < select > |	Indica se múltiplos valores podem ser inseridos em uma entrada do tipo email ou file.
name	| < button >, < form >, < fieldset >, < iframe >, < input >, < keygen >, < object >, < output >, < select >, < textarea >, < map >, < meta >, < param > |	Nome do elemento. Por exemplo usado pelo servidor para identificar os campos no envio do formulário.
novalidate |	< form >	| Este atributo indica que o formulário não deveria ser validado quando enviado.
open	| < details > |	Indica se os detalhes serão mostrados no carregamento da página.
optimum |	< meter >	| Indica o valor numérico optimal.
pattern	| < input >	| Define uma espreção regular na qual o valor do elemento será validado de encontro.
ping | < a >, < area > |	 
placeholder	| < input >, < textarea > |	Fornece uma sugestão ao usuário de o que pode ser inserido no campo.
poster |	< video >	| Uma URL indicando uma poster frame para mostrar desde que o usuário toque ou busque.
preload	| < audio >, < video > |	Indica se todo o recurso, partes dele ou nada deveria ser pré carregado.
pubdate	| < time >	| Indica se esta data e tempo é a data no mais próximo elemento antecessor < article > 
radiogroup	| < command > |	 
readonly	| < input >, < textarea > |	Indica se o elemento pode ser editado.
rel	| < a >, < area >, < link > |	Especifica o relacionamento do objeto alvo para o objeto ligado.
required	| < input >, < select >, < textarea > 	| Indica se este elemento é requerido para preencher ou não.
reversed | < ol> |	Indica se a lista deveria ser mostrada em uma ordem decrescente em vez de uma crescente.
rows |	< textarea > |	Define o número de linhas em uma área de texto.
rowspan	| < td >, < th >	| Define o número de linhas que uma célula de tabela deveria abranger mais.
sandbox	| < iframe > |	 
spellcheck	| Encontra-se em todos	| Indica se o spell de checagem está permitido para o elemento.
scope	| < th >	 
scoped	| < style >	 
seamless |	< iframe >	 
selected	| < option >	| Define o valor na qual será selecionado no carregamento da página.
shape	| < a >, < area >	 
size	| < input >, < select >	| Define a largura do elemento (em pixels). Se o elemento de atributo type é text ou password então este é o número de caracteres.
sizes	| < link >	 
span	| < col >, < colgroup >	 
src	| < audio >, < embed >, < iframe >, < img >, < input >, < script >, < source >, < track>, < video > |	 URL de um conteúdo incorporável.
srcdoc |	< iframe >	 
srclang	| < track >	 
start	| < ol >	| Define o primeiro número se não for 1.
step |	< input >	 
style | Encontra-se em todos |	Define estilos CSS na qual ultrapassarão estilos previamente configurados. Nota: Evitar usar
summary	| < table >	 
tabindex |	Encontra-se em todos |	Ultrapassa a ordem de tabulação padrão do navegador e segue o especificado como alternativa.
target |	< a >, < area >, < base >, < form >	 
title	| Encontra-se em todos |	Texto a ser mostrado em uma dica quando suspenso sobre um elemento.
type	| < button >, < input >, < command >, < embed >, < object >, < script >, < source >, < style >, < menu > | Define o tipo de elemento.
usemap	| < img >,  < input >, < object >	 
value	| < button >, < option >, < input >, < li >, < meter >, < progress >, < param >	| Define o valor padrão na qual será mostrado no elemento no carregar da página.
width | < canvas >, < embed >, < iframe >, < img >, < input >, < object >, < video >	| Nota: Em algumas instâncias, tal como < div >, este é um atributo legado, no caso da propriedade CSS width deveria ser usado ao em vez. em outros casos, tal como < canvas >, a largura deve ser especificada com este atributo.
wrap | < textarea >	| Indica se o texto deveria ser enrolado.


## Título 

Os títulos em HTML são definidos por nível de importância, indo do 1 até o 6

    <h1>Título de nível 1<h1>
    <h2>Título de nível 2<h2>
    <h3>Título de nível 3<h3>
    <h4>Título de nível 4<h4>
    <h5>Título de nível 5<h5>
    <h6>Título de nível 6<h6>


## Parágrafo

    <p>Este é um parágrafo<p>

**Quebra de linha**

O navegador não quebra linha, ou seja muda de parágrafo, sem uma tag.

    <p> Olá. <br/> Esta é uma quebra de linha <p>

### Formatação
    
    <strong> Textos importantes <strong>
    <em> Textos com ênfase <em>
    <mark> Textos marcados <mark>
    <small> Letras pequenas <small>
    <del> Texto deletado <del>
    <ins> Texto inserido depois <ins>
    <sub> Texto subscrito <sub>
    <sup> Texto sobrescrito <sup>

*! Não utilize as tags < i > e < b >, elas caíram em desuso por não possuírem significado !*

## Citação

        <blockquote> Utilizado para uma citação mais longa de outros lugares como livros, sites, revistas... <blockquote>


        <q> Utilizado para citações curtas <q>

## Abreviação 

        <p> O instituto da <abbr tittle: Organização Mundial da Saúde> OMS </abbr> indica o uso de máscara mesmo após a vacina

## Endereçamento de autor/dono

        <address> Escrito por Branca de Neve.<br>
        Visite-nos em:<br>
        exemplo.com<br>
        Caixa 564, Disneyland<br>
        EUA</address>

## Títlo de um trabalho (livros, poema, música...)

        <p>Quadro <cite> Noite Estrelada </cite> de Van Gogh. Pintado em 1889.</p>

## Links/Âncoras

No atributo **href** indicamos o destino do link.

        <a href:"https://www.google.com">Google</a>

## Comentários

        <!-- O comentário não aparece no código -->


## Imagem

O **scr** indica o endereço da imagem, podendo ser um link ou o caminho da pasta.

O **alt** indica um texto alternativo que será exibido caso o arquivo não possa ser carregado, além de ajudar leitores de tela de pessoas deficientes.

*! Para maior acessibilidade aconselho que haja uma maior descrição da imagem para que pessoas com deficiência visual possam entender a imagem !*

        <img scr:"https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mulher branca de cabelos loiros e camisa verde escura sorrindo para a foto"/>

*! Formatos de imagem !*

| Abreviação | Extensão
| :---: | :---: |
| APNG	| .apng |
| GIF	| .gif  |
| ICO	| .ico, .cur
| JPEG  | .jpg, .jpeg, .jfif, .pjpeg, .pjp
| PNG	| .png  |
| SVG	| .svg  |


## Listas

Cada item das primeiras listas é definido pela tag *li*

### Não ordenadas

A ordem não importa


    <ul> 
        <li> pirulito <li>
        <li> bala <li>
        <li> bombom <li>
    <ul>

### Ordenada

A ordem importa

    <ol>
        <li> Acordar <li>
        <li> Escovar os dentes <li>
        <li> Tomar café da manhã <li>
        <li> Estudar <li>
    <ol>

### Definição

1. **dt**: título
2. **dd**: definição

        <dl>
            <dt> Título <dt>
            <dd> Definição sobre o título
        </dl>

## Tabelas

- **table**: delimita a tabela

- **tr**: indica as linhas

- **td** forma as colunas

## Áudio

- **controls** indica que deve exibir os controles
- **autoplay**: faz o áudio executar assim que for carregado

- **loop**: áudio se repete

        <audio controls src=""> </audio>

## Vídeos

        <video scr="" controls> </video>

## HTML Semântico

| Tag |	Description |
| --- | ---- |
< article > |	
Define conteúdo independente e autocontido, sem título
< aside >	| Define o conteúdo, ao lado do conteúdo da página
< details > | Define detalhes adicionais que o usuário pode ver ou esconder
< figcaption > |  Define uma legenda para um elemento < figure >
< figure > | Especifica conteúdo independente, como ilustrações, diagramas, fotos, listagens de códigos, etc.
< footer >	| Rodapé
< header >	| Cabeçalho
< main >	| Conteúdo principal
< mark > | Define um texto marcado
< nav >	| Define links de navegação
< section >	| Define uma seção em um documento
< summary > | Definir define um cabeçalho visível para um elemento < details >
< time >	| Define a data/hora

![Ilustração de como seria um HTML utilizando propriedades semânticas](https://www.w3schools.com/html/img_sem_elements.gif)




## Referências:

### [W3CSchoolS](https://www.w3schools.com/html/default.asp)

### [MDN](https://developer.mozilla.org/)