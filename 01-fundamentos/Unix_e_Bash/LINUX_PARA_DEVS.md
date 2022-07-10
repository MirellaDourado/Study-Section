# Linux para Devs

## Ferramentas de desenvolvimento

### Instalando Compiladores

Um compilador é um programa de sistema que traduz um programa descrito em uma linguagem de alto nível para um programa equivalente em código de máquina para um processador. Ou seja, o compilador nada mais é que um programa que traduz para o computador, em linguagem binária, os códigos escritos pelos humanos.

- Para verificar se há a existencia de compiladores no sistema linux basta:
1. Abrir o terminal
2. Digite `gcc --version`. Isso irá verificar se há a existencia do compilador para a linguagem C

- Caso indique que o pacote é inexistente:
1. Atualize o cache do pacote local com `sudo apt update`. Isso é essencial para uma instalação nova do Ubuntu.
2. Dê o comando `sudo apt-get install build-essencial`. Para instalar o pacote essencial de compiladores.
  
### Desinstalando Compiladores

1. Abra o terminal
2. Digite `sudo apt remove build-essencial`
3. Dê o comando `sudo apt autoremove` para remover os pacotes de dependência residual

### Instalando IDEs

Uma IDE é um ambiente de desenvolvimento integrado, ou seja, é um software para criar aplicações.

Para instalar uma IDE basta:
1. Abrir a loja
2. Ir na aba desenvolvedor
3. Encontrar a IDE de preferencia e instalar

ou

1. Ir ao site da IDE
2. Seguir o passo a passo de instalação via terminal

### Instalando ferramentas de Banco de Dados

Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS).

Para instalar basta:
1. Abrir a loja
2. Ir na aba desenvolvedor
3. Encontrar a ferramenta de preferencia e instalar

ou

1. Ir ao site da ferramenta
2. Seguir o passo a passo de instalação via terminal

