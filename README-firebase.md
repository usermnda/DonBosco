# Mise en place de Firebase (école Don Bosco)

Ce dossier contient le site complet : `index.html` (vitrine publique) et `manager.html` (espace de gestion).
Tant que `firebase-config.js` est vide, tout fonctionne en mode local (données dans le navigateur).

## 1. Créer le projet
1. Console Firebase (console.firebase.google.com) > Ajouter un projet.
2. Firestore Database > Créer une base (mode production, région europe-west / eur3).
3. Authentication > Mode de connexion > activer « E-mail / mot de passe ».
4. Authentication > Utilisateurs > ajouter un compte par personne (direction, développeur, chaque enseignant).

## 2. Relier le site
1. Paramètres du projet > Vos applications > Web (</>) : copier la configuration.
2. La coller dans `firebase-config.js`.

## 3. Autoriser le personnel
Dans Firestore, créer la collection `staff` : un document par personne, dont l'**ID est l'UID** du compte (visible dans Authentication), avec un champ `ok: true`.

## 4. Règles et mise en ligne
```
npm install -g firebase-tools
firebase login
firebase init   (choisir Firestore + Hosting, garder les fichiers existants)
firebase deploy
```

## 5. Premier usage
1. Ouvrir `manager.html`, se connecter avec un compte Firebase : le premier compte devient « Développeur ».
2. Onglet Utilisateurs : renseigner l'« e-mail Firebase » de chaque compte pour lui attribuer son rôle.
3. Onglet « Aperçu et publication » > **Publier sur Firebase**. La vitrine `index.html` lit ensuite les données en ligne.

## À savoir
- Les règles protègent l'écriture (personnel uniquement). Les permissions par rôle (enseignant, direction) sont appliquées par le manager, pas par Firebase : elles ne remplacent pas une vraie vérification côté serveur.
- Les photos sont stockées dans Firestore (collection `media`, 1 Mo max chacune) : elles sont réduites automatiquement.
- Les photos par défaut viennent de l'ancien site (ecole-donbosco.fr) : elles s'affichent tant qu'il reste en ligne. Importez les vôtres depuis le manager.
