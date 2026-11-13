# Site de l'école Don Bosco (Saint-Just-Malmont)

- `index.html` : site public (lit son contenu dans Firebase).
- `manager.html` : espace de gestion (articles, dates, bandeaux, pages, équipe, thèmes, statistiques…).
- `firebase-config.js` : configuration Firebase du projet `ecoledonbosco-250f2` (déjà remplie).
- `firestore.rules` : règles de sécurité de la base.

## 1. Préparer Firebase (console.firebase.google.com, projet ecoledonbosco-250f2)
1. **Firestore Database** : créer la base si ce n'est pas fait (mode production). Onglet **Règles** : coller le contenu de `firestore.rules` puis **Publier**. À faire avant la mise en ligne.
2. **Authentication > Méthode de connexion** : activer « E-mail / mot de passe ». Onglet **Utilisateurs** : ajouter un compte par personne (direction, développeur, enseignants).
3. **Firestore > Données** : créer la collection `staff`. Pour chaque personne autorisée à publier, ajouter un document dont l'**ID est l'UID** du compte (copié depuis Authentication) avec un champ `ok` = `true`.
4. **Authentication > Paramètres > Domaines autorisés** : ajouter `VOTRE-COMPTE.github.io` (et votre domaine personnalisé s'il y en a un).

## 2. Mettre en ligne sur GitHub Pages
1. Créer un dépôt GitHub (public) et y déposer tous les fichiers de ce dossier (y compris `.nojekyll`).
2. Dépôt > **Settings > Pages** > Source : « Deploy from a branch », branche `main`, dossier `/ (root)` > Save.
3. Le site est disponible sur `https://VOTRE-COMPTE.github.io/NOM-DU-DEPOT/` et le manager sur `.../manager.html`.
4. Domaine personnalisé (ex. ecole-donbosco.fr) : Settings > Pages > Custom domain, puis enregistrement DNS indiqué par GitHub.

## 3. Premier usage
1. Ouvrir `manager.html`, se connecter avec un compte Firebase (e-mail et mot de passe). Le premier compte devient « Développeur ».
2. Onglet **Utilisateurs** : renseigner l'e-mail Firebase de chaque personne, son nom affiché et son rôle.
3. Modifier le contenu, puis **Aperçu et publication > Publier sur Firebase**. Le site public se met à jour pour tous les visiteurs.

## À savoir
- Les identifiants de `firebase-config.js` sont publics par nature. Seules les règles Firestore protègent les données : ne les oubliez pas.
- Les droits par rôle (enseignant, direction) sont appliqués par le manager. Firebase n'impose que « personnel autorisé ou non » pour l'écriture.
- Les photos sont stockées dans Firestore (1 Mo max chacune) et réduites automatiquement.
- Les photos par défaut viennent de l'ancien site ecole-donbosco.fr : elles s'affichent tant qu'il est en ligne. Importez les vôtres depuis le manager.
- Statistiques (pages vues, visiteurs, clics) : onglet Statistiques du manager, anonymes, indicatives.
- Si le site Firebase est injoignable, la vitrine affiche son contenu de secours intégré.
