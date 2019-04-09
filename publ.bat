REM Antes de executar este arquivo, substitua
REM todas as ocorrências de <REPO> pelo seu repositório
REM e todas as ocorrências de <USER> pelo seu nome
REM de usuário do GitHub

IF [%1] == "" GOTO INSTRUCTIONS

ng build --prod --base-ref /<REPO>/AngularPwa/
git add dist
git commit -m %1
git subtree push --prefix=dist origin gh-pages
chrome.exe "https://<USER>.github.io/<REPO>/AngularPwa"

GOTO END

:INSTRUCTIONS

ECHO Uso:
ECHO publ "Mensagem de commit"
ECHO (A mensagem de commit deve ser informada entre aspas)

:END