# REFORÇO DO BLOCO 1 - COMANDOS NO BASH

## Estrutura

- nomeDoUsuário@nomeDaMáquina
- '~' (diretório home) 
- '$' == usuário comum
- '#' == usuário root
- '|' == junta comandos

## Comandos básicos


| Comandos | Descrição |
| -------  | --------- |
| sudo     | Realiza comando de super usuário |
| sudo su  | Transforma em super usuário |
| clear    | Limpa a tela do terminal |
| cntrl l  | Dá espaço de tela |


## Comandos para arquivos e navegação


|Comandos | Descrição |
|:-------:| :-------: |
| ls       | Lista os arquivos não ocultos no diretório atual |
| ls -l    | Listagem detalhada |
| ls -a    | Listagem de todos os arquivos no diretório, incluindo os ocultos |
| ls -la   | Listagem de todos os arquivos, incluindo os ocultos, de forma detalhada | 
| cd       | Muda de diretório |
| pwd      | Mostra o caminho do diretório atual |
| mkdir    | Cria um diretório |
| rm       | Remove um arquivo |
|rm -f    | Força a remoção de algo |
| rm -r/rmdir | Remove diretório, apenas se estiver vazio |
| rm -rf   | Remove diretório com tudo dentro |
| cp       | Copia um arquivo para outro |
| mv       | Renomeia ou move um arquivo/diretório |
| touch    | Cria arquivos |
|cat      | Lê arquivos |
|cat >    | Permite escrever no arquivo e substituir o que já havia nele
|cat >>   | Permite escrever no arquivo ao final da linha
|echo     | Reproduz o que for escrito no terminal
|echo >>  | Imprime o que foi escrito no arquivo
|tail     | Mostra as 10 últimas linhas do arquivo
|tail -n  | Mostra as últimas linhas do número escolhido
|tail -f  | Fica checando se há novos dados a serem impressos no fim do arquivo
|head     | Mostra as 10 primeiras linhas do arquivo
|head -n  | mostra as primeiras linha do número escolhido
|head -f  | Fica checando se há novos dados a serem impressos no inicio do arquivo
|less     | Mostra parte do conteúdo, por páginas (sair "q"; pesquisar palavra "/")
|grep     | Procura palavra/frase no arquivo
|grep -i  | Pesquisa ignorando o case sensitive
|grep -v  | Procura conteúdo sem uma palavra/frase
|grep -n  | Mostra linha em que encontra a palavra
|grep -c  | Quantidade de vezes que encontra a palavra
|wc       | Mostra quantidade de linhas; palavras e caracteres de um arquivo
|wc -l    | Mostra somente quantidade de linhas
|wc -c    | Mostra somente quantidade de caractéres
|wc -w    | Mostra somente a quantidade de palavras
|sort     | Mostra um arquivo em ordem no terminal
|find . -name  | Encontra arquivo pelo nome
|find . -type | Encontra arquivo pelo tipo (d = diretório; f = arquivo)
|find . -size | Encontra arquivo pelo tamanho	


## Comandos de rede
 
	(todos utilizam ao lado do comando um URL de site desejado)


|Comandos             | Descrição
|-------------------|---------------------------------
|ping                 | Verifica se um determinado site está ativo
|whois                | Mostra as informações do site (alguns websites bloqueiam as informações)
|sudo apt-get install | Comando para instalar pacotes
|dig                  | Mostra o DNS
|dig -x               | Mostra o reverso do domínio de um site
|wget                 | Faz download de arquivos da internet
|curl                 | Lê o código fonte da página
|curl -o              | Copia o código fonte da página para um arquivo
	

## Comandos de processo

|Comandos             | Descrição
|-------------------|--------
|ps                   | Mostra processos em ação (mostra o PID)
|ps aux               | Mostra todos os processos da máquina
|kill                 | Mata o processo em execução
|kill -9              | Mata processo de maneira bruta
|sleep                | Coloca o terminal parado
|sleep _&             | Coloca o terminal para em segundo plano
|bg                   | Leva algo para segundo plano
|fg                   | Leva algo para frente
|cntrl z              | Suspende processo
|jobs                 | Mostra lista de processos e status
|cntrl C              | Termina processo em execução

	


## Comandos de compressão


|Comandos                              | Descrição
|------------------------------------|---------------------------------
|tar cf arquivotar arquivos.extensão   | Compacta arquivos.extensão no diretório atual
|tar xf arquivo.tar                    | Descompacta o arquivo.tar no diretório atual
|tar tf arquivo. tar                   | Mostra o conteúdo de arquivo.tar
	
## Comandos de sistema


|Comandos               | Descrição
|---------------------|-------------------------------
|date                   | mostra a data/hora
|uptime                 | mostra o tempo de utilização do sistema desde que foi ligado
|whoami                 | mostra qual usuário você está logado|
|w                      | mostra quem está online no sistema
|cat /pc/proc/cpuinfo   | Mostra as informações do Computador
|cat /proc/meminfo      | Mostra as informações da memória
|free                   | Mostra a utilização da memória e memória virtual
|du                     | Mostra o espaço usado no diretório corrente
|du -sh                 |Mostra os tamanhos de arquivos/diretórios no diretório corente em GB
|df                     | Mostra o uso do disco
|uname -a               | Mostra informações do Kernel
	
## Ajuda


|Comandos               | Descrição
|----------------|--------
|man                    | Mostra manual do comando desejado
|whatis                 | Mostra para que serve o comando
|apropos                | Mostra comandos que serve ao que é desejado
|history                | Mostra histórico de comandos
	
## Comandos de permissão
	
**Lembrando:**
- r/4 = leitura
- w/2 = edição
- x/1 = execução/acessar pelo CD
- hífen = arquivo comum
- d = diretório
- ordem: u (usuário), g (grupo), o (outros)

	
|Comandos               | Descrição
|---------------------|----------------
|chmod a                 | Muda o acesso de todos
|chmod u                 | Muda o acesso do usuário
|chmod g                 | Muda o acesso do grupo
|chmod o                 | Muda o acesso dos outros
|chmod  _-		 | Retira acesso
|chmod  _+               | Adiciona acesso
|chmod  _=               | Coloca acesso idêntico ao escrito
	
	
		


	

