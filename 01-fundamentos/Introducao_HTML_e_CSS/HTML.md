# APRENDENDO SOBRE HTML

## Estrutura

### Tag
 Assim como etiquetas e servem para **marcar** e dar **semântica** aos componentes escritos no arquivo HTML. Geralemnte possuem uma tag de fechamento. 
 
 *!Não é case sensitive, mas é uma boa prática escrever no minúsculo!*

Exemplo:    

    <p>Este é um parágrafo</p>


### Atributos

Dão informações extras sobre uma tag para o navegador (browser) 

*!Tanto o nome do atributo quando o seu valor é case sensitive!*

Exemplo:

    <a href:"https//:google.com">Google</a>

## Tags Iniciais

### Título 

Os números marcam níveis de importância

    <h1>Título de nível 1<h1>
    <h2>Título de nível 2<h2>
    <h3>Título de nível 3<h3>
    <h4>Título de nível 4<h4>
    <h5>Título de nível 5<h5>
    <h6>Título de nível 6<h6>


![Demonstração títulos](/t%C3%ADtulos.png)


### Parágrafo
    <p>Este é um parágrafo<p>

**Quebra de linha**

Para que haja uma quebra de linha é necessário usar uma tag

    <p> Olá. <br/> Túdo bem? <p>

## Links

No atributo *href* indicamos o destino do link.

    <a href:"google.com">Google</a>

### Imagem

O **scr** indica o endereço da imagem

O **alt** indica um texto alternativo que será exibido caso o arquivo não possa ser carregado, além de ajudar leitores de tela.

    <img scr:"" alt=""/>

### Listas

Cada item das primeiras listas é definido pela tag *li*

#### Ordenadas

A ordem não importa


    <ul> 
        <li> pirulito <li>
        <li> bala <li>
        <li> bombom <li>
    <ul>

#### Ordenada

A ordem importa

    <ol>
        <li> Acordar <li>
        <li> Escovar os dentes <li>
        <li> Tomar café da manhã <li>
        <li> Estudar <li>
    <ol>

#### Definição

1. **dt**: título
2. **dd**: definição

        <dl>
            <dt> Título <dt>
            <dd> Definição sobre o título
        </dl>

### Tabelas

- **table**: delimita a tabela

- **tr**: indica as linhas

- **td** forma as colunas

### Áudio

- **controls** indica que deve exibir os controles
- **autoplay**: faz o áudio executar assim que for carregado

- **loop**: áudio se repete

        <audio controls src=""> </audio>

### Vídeos

        <video scr="" controls> </video>

## HTML Semântico