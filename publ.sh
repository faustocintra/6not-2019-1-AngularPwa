#!/bin/bash

if [ -z "$1" ] 
then
   echo "Uso:"
   echo "./publ.sh \"Mensagem de commit\""
   echo "(A mensagem de commit deve ser informada entre aspas)"
else
   ng build --prod --base-href /6not-2019-1-AngularPwa/AngularPwa/  
   git add dist
   git commit -m %1
   git subtree push --prefix=dist origin gh-pages
   chrome --incognito "https://fgcintra.github.io/6not-2019-1-AngularPwa/AngularPwa"
fi