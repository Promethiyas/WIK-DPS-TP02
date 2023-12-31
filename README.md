# WIK-DPS-TP02
WIK-DPS-TP02 est le second TP devops à rendre. Après un problème lié à l'installation de docker j'ai pu rattraper le retard du matin. J'ai suivi différentes documentations afin de comprendre le fonctionnement de la conteneurisation.

## Lancement du projet 

```bash
git clone https://github.com/Promethiyas/WIK-DPS-TP02.git
```

Deplacez vous dans le dossier ***\WIK-DPS-TP02***

### Un seul stage

Pour Build le docker pour accéder à notre précédent projet il faut d'abord utiliser:

```bash
docker build -t dockfile1 -f dockerfile1 .  
```

Afin de générer l'image.
Puis pour le lancer:

```bash
docker run -it -p 3000:3000 dockfile1     
```

ATTENTION: On peut pas avoir les deux images en même temps vu qu'elles utilisent le même port.

### Multi-Stage

Lancez cette commande afin de Build l'image:

```bash
docker-compose build
```

Une fois fait vous pouvez lancer le conteneur*:

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up  -d
```


## Accéder au localhost

Dans votre navigateur rendez-vous ici : http://localhost:3000/ping
Vous verrez le résultat de la requête ***GET*** sur la page ping. En remplaçant le ping par n'importe quoi d'autre vous verrez apparaître ***Error 404***.


## Liste des vulnérabilités

Afin d'accéder à la liste des vulnérabilités vous devez installer ***snyk*** avec curl:

```bash
curl https://static.snyk.io/cli/latest/snyk-win.exe -o snyk.exe
```

Puis vous devez vous authentifier avec:

```bash
.\snyk auth
```

Et vous pouvez maintenant faire:

```bash
.\snyk container test wik-dps-tp02-ts-node-docker > rapport.txt
```

Ce qui va mettre dans le fichier rapport.txt toutes les vulnérabilités trouvés, avec un résumé tout en bas.
 [rapport.txt](./rapport.txt)

## USER

On peut voir dans les deux ***dockerfile*** que l'user est changé, mais dans l'application Docker Desktop en accédant au termina et en tapant ***whoami*** on peut voir apparaitre ***newuser***, l'user créé dans le fichier.
