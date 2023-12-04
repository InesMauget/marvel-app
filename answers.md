# Réponses aux questions 

## **Git:**

Quel est l'intérêt de commiter régulièrement et de manière atomique ?
```javascript
Cela permet de ne rien perdre et de savoir dans quelle partie du code on a fait telle fonctionnalité
````
A quoi sert une branche de type feature dans un développement logiciel de type git flow ?
```javascript
La branche feature permet de développer de nouvelles fonctionnalités pour la prochaine version. Cela permet d'avoir une isolation des fonctionnalités et facilite alors la montée de version
````
Quelle est la différence entre une branche main et une branche develop ?
```javascript
La branche main contient la version de l'application donnée à des utilisateurs tandis que develop est la partie en développement qui permet de faire des tests.
````
Quelle est la différence entre git add, git commit et git push ?
```javascript
Git add permet d'ajouter les fichiers en mode "Stage Changes". Le git commit permet d'enregistrer les fichiers en mode local. Le git push permet d'envoyer les fchiers sur Github
````

## **Github:**
Quel est l'intérêt d'une protection de branche ?
```javascript
Cela permet de ne pas supprimer la branche par inadvertance.
````
Quel est l'intérêt d'une pull request ?
```javascript
Cela permet de pouvoir envoyer les modifications d'une branche sur une autre. On a donc une montée de version
````

## **Versionning:**
Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?
```javascript
Cela permet d'expliquer qu'il y a eu des corrections de bugs ou des modifications mineures
````
Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?
```javascript
Cela permet de montrer qu'on a développé une nouvelle fonctionnalité
````
A quoi sert une version release candidate ?
```javascript
Cela permet d'avoir une autre version du projet qui peut être publiée. Elle est dans un premier temps mise sur main puis dans un second temps, il y a une pull request de main vers develop afin d'avoir les dernières modifications
La release candidate permet de tester la version avant de la mettre en production
````

## **Test :**
Quel est l'intérêt des tests unitaires ?
```javascript
Cela permet de voir si l'application peut ou non fonctionner. Il y a alors une détection précoce des bugs qui pourraient arriver. Ils sont relancés à chaque modification du code
````