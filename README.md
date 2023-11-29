[![Unit Tests](https://github.com/InesMauget/marvel-app/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/InesMauget/marvel-app/actions/workflows/unit-tests.yml)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=InesMauget_marvel-app&metric=coverage)](https://sonarcloud.io/summary/new_code?id=InesMauget_marvel-app)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=InesMauget_marvel-app&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=InesMauget_marvel-app)
# **Marvel App**

## **Installation**
Récupérer le projet en local et installer les dépendances 

```javascript
git clone url-du-projet
cd marvel-app
npm install
```

## **Lancement**
```javascript
npm start
````
L'application est accessible à l'adresse http://localhost:3000

## **Test**
Execution des test unitaires en mode watch, c'est à dire que les tests sont relancés  à chaque modification de code.
```javascript
npm test
````
Execution des tests uniquement une fois avec un rapport détaillé de la couverture de code
```javascript
npm run test:coverage
````

## **Conception**
Le projet est composé en 4 parties :
- Home (page d'accueil) : Liste des personnages
- Character : Page de détail d'un personnage
- About : Page d'information sur l'application
- Contact : Page de contact

```mermaid
flowchart LR
    C(Home)
    C -->|/about| D(About)
    C -->|/contact| E(Contact)
    C -->|/characters:/id| F((Character))
````
