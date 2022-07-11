# Git e GitHub

| Git | GitHub |
| --- | --- |
| Software de controle de versão | Plataforma de hospedagem de projetos|
| local | remoto |


## Git Workflow


| Untracked (Não rastreado)| Tracked (reasteado) | Staged/Index | Comitted | Modified (Modificado) |
| --------| ------ | ------ | ----- | ----- |
| O Git não está controlando as versões daquele arquivo | O Git está controlando as versões daquele arquivo | Arquivos na área de transferencia, tudo que está nesta área não tem seu histórico controlado pelo Git mas pode vir a ser controlado por ele. | A versão do arquivo entrou para o histórico | O arquivo já está sendo rastreado, porém sofreu alguma alteração que ainda não foi "comitado" |


## Configuração

`git config`


### Comandos específicos

**Seta configuração para todos os usuários do computador**

`git config --system`


**Seta configuração para o usuário em todos os projetos do Git**

`git config --global`


**Para apenas o projeto atual**

`git config --local`


**Setar usuário**

`git config --global user.name "User Name"`


**Setar email**

`git config --global user.email emailDoUsuario@servico.com`

**Setar editor**

`git config --global core.editor editorEscolhido`

**Ver todas as configurações**

`git config --list` ou `git config --l`

**Setar arquivos a serem ignorados**

`git config --global core.excludesfile ~/trybe/.gitignore`


## Repositório Local

**Iniciar um repositório local com o Git**

`git init`


**Ver estado dos arquivos**

`git status`


**Adicionar um arquivo que esta listado no *.gitignore***

`git add -f arquivo_no_gitignore.txt`

### Stage Area

**Adicionar arquivo/diretório para a staged area**

`git add arquivo.txt`


**Adicionar diretório específico**

`git add diretório`


**Adicionar tudo que contem no diretório**

`git add .`

### Comitar

`git commit`

**Comitar com mensagem**

`git commit -m "Esta é uma mensagem`

**Comitar um arquivo específico**

`git commit arquivo.txt`

**Comitar arquivo com mensagem**

`git commit arquivo.txt -m "Esta é uma mensagem`

**Comitar mais de um arquivo específico**

`git commit arquivo.txt outro_arquivo.txt`

### Remover

**Remover arquivo**

`git rm arquivo.txt`

**Remover diretório**

`git rm -r diretorio`

### Ressucitar um arquivo antigo

`git checkout quatroPrimeirosNúmerosDoHasgComArquivo~1 arquivoRessucitado.txt`

### Histórico (Project History)

**Exibir histórico**

`git log`

**Exibir histórico de maneira gŕafica**

`git log --graph`

**Exibir histórico de maneira gŕafica e simplificada**

`git log --graph --oneline`

**Ver commits anteriores que seja diferente e que possuam arquivos deletados**

`git log --diff-filter=D --sumary`

## Repositório Remoto

### Exibir repositórios remotos**

`git remote`

`git remote -v`

### Vincular repositório local e remoto

`git remote add origin git@github.com:mirelladourado/trybe.git`

### Desvincular um repositório remoto

`git remote rm trybe`

### Exibir informação dos repositório

`git remote show origin`

### Renomear um repositório remoto

`git remote rename origin trybe`

### Clonar um repositório remoto já existente

`gir clone git@github.com:mirelladourado/trybe.git`

### Enviar arquivos/diretórios para o repositório remoto

**Primeiro push**

`git push -u origin master`

**Demais pushes**

`git push`

### Atualizar o repositório local com o que tem no repositório remoto

**Atualizar os arquivos no branch atual**

`git pull`

**Buscar as alterações, porém não aplica-las**

`git fetch`

### Branch

**Listar branches**

`git branch`

**Listar branches com informações dos últimos commits**

`git branch -v`

**Criando um novo branch**

`git branch trybe-branch`

**Trocando para outra branch**

`git checkout trybe-branch`

**Apagando uma Branch** 

`git branch -d trybe-branch`

**Criar e trocar de branch ao mesmo tempo**

`git checkout -b trybe-new-branch`

**Mostrar Branches fundidas**

`git branch --merged`

**Mostrar Branches não fundidas**

`git branch --no-merged`

