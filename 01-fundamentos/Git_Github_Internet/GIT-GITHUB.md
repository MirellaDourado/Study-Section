# Git e GitHub


## Git Workflow


**Untracked (Não rastreado)**


O Git não está controlando as versões daquele arquivo


**Tracked (reasteado)**


O Git está controlando as versões daquele arquivo


**Staged/Index**


Arquivos na área de transferencia, tudo que está nesta área não tem seu histórico controlado pelo Git mas pode vir a ser controlado por ele.


**Comitted**


A versão do arquivo entrou para o histórico


**Modified (Modificado)**


O arquivo já está sendo rastreado porém sofreu alguma alteração que ainda não foi "comitado"


## Configuração


**Comando geral de configuração**
`git config`


### Comandos específicos


**Seta configuração para todos os usuários do computador**

`git config --system`


**Seta configuração para o usuário em todos os projetos do Git**

`git config --global`


**Para apenas o projeto atual**

`git config --local`


**Setar usuário**

`git config --global "User Name"`


**Setar email**

`git config --global emailDoUsuario@servico.com`


**Setar editor**

`git config --global core.editor editorEscolhido`


**Ver todas as configurações**

`git config --list` ou `git config --l`


## Repositório Local

**Iniciar um repositório local com o Git**

`git init`


**Ver estado dos arquivos**

`git status`


**Adicionar arquivo/diretório para a staged area**

`git add arquivo.txt`


**Adicionar diretório específico**

`git add diretório`


**Adicionar tudo que contem no diretório**

`git add .`

