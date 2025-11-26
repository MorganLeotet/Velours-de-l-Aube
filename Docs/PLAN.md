## Plan

L'équipe va réaliser une architecture ave un serveur http express, ce plan est fait pour s'y retrouver et savoir ou on est et ce qui nous reste à faire.

## Sprint 0 : Nouvelle Charte Graphique

- Charte Graphique : document qui définit et formalise toutes les règles d'utilisation des éléments visuels d'une entreprise ou d'une marque

[X] Chercher un nouveau logo
    [X] simple et moderne
[X] Chercher une nouvelle Font
    [X] voir si il existe une Font "café"
    [X] voir les fonts sur les autres sites
    [X] trouver une font moderne
[X] Chercher de nouvelles couleurs
    [X] voir les autres sites
    [X] voir les couleur en relation avec le café
[X] Recherche d'un Design
    [X] voir les sites de vendeur de café (Nespresso, Dolce Gusto)
    [X] trouver un design moderne mais simple
    [X] voir un design en relation avec l'univers du café

## Sprint 1 : Création d'une architecture pour une application

[ ] initialiser le projet
    [ ] git init
    [ ] faire un .gitIgnore
    [ ] npm init -y
[ ] configuration du packageJSON
    [ ] changer le type "commonJs" en type "module"
[ ] Créer le point d'entrée de l'application
    [ ] créer un fichier index.js
    [ ] modifier le packageJSON
        [ ] Ajouter "dev":'node --watch index.js';
[ ] installer le module Express
    [ ] npm install express
[ ] Créer le serveur web
    [ ] importer express dans index.js
    [ ] installer le moteur de template EJS
        [ ] npm install ejs
    [ ] Faire le branchement de EJS
        [ ] mise en place des middlewares
                [ ] les statics
    [ ] installer dotenv pour les variables d'environnement
        [ ] npm install dotenv
        [ ] faire les fichiers .env et .env.example
        [ ] importer dotenv
        [ ] configuration du serveur http
[ ] Structurer les dossiers du projet
    [ ] intégration
    [ ] public
        [ ] images
        [ ] css
        [ ] js
    [ ] docs
        [ ] wireframe
        [ ] plan
        [ ] MCD
        [ ] MLD
    [ ] data
        [ ] base de données de l'application
    [ ] database
    [ ] dataMapper
    [ ] views
        [ ] partials
    [ ] middlewares
    [ ] routers
    [ ] controllers
[ ] Créer un routeur
    [ ] importer dans index.js
    [ ] utiliser dans index.js
[ ] Créer un controller
    [ ] importer dans router.js

## Sprint 2 : Afficher les données dans une page

[ ] Accéder à la liste des produits
    [ ] on veut afficher une page "Catalogue" qui contient la liste des produits
    [ ] importer les données
    [ ] envoyer catalogue.ejs au client
    [ ] créer un router
    [ ] créer un controller
        [ ] créer une méthode pour le controlller

[ ] Accéder au détail d'un produit
    [ ] Afficher la page " produit" qui contient le détail d'un produit
    [ ] importer les données
    [ ] envoyer produits.ejs au client
    [ ] créer une route
    [ ] créer une méthode pour le controller