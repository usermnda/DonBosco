# Site de l’école Don Bosco — Saint-Just-Malmont

Site vitrine moderne + espace de gestion, sans serveur à maintenir : tout repose sur **GitHub Pages** (hébergement des fichiers) et **Firebase** (base de données et connexion).

> Propulsé par **EbWebs** · Hébergé sur **EbWebs** · Créé par **Ethan MORGADO** · Vibecodé par **Claude**

---

## 1. Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Site public. Il lit son contenu dans Firebase ; si Firebase est injoignable, il affiche un contenu de secours intégré. |
| `manager.html` | Espace de gestion (réservé à l’équipe, non référencé par les moteurs de recherche). |
| `firebase-config.js` | Configuration du projet Firebase `ecoledonbosco-250f2` (déjà remplie). |
| `firestore.rules` | Règles de sécurité de la base Firestore. |
| `firebase.json` | Permet de déployer les règles avec la ligne de commande Firebase (facultatif). |
| `.nojekyll` | Indique à GitHub Pages de servir les fichiers tels quels. |

## 2. Ce que fait le site public

- Page d’accueil avec **diaporama** des photos de l’école (fondu enchaîné, points de navigation, flèches, pause au survol), **boutons** personnalisables et **cartes d’accès rapide**.
- **Bulles de chiffres** animées (compteurs qui s’incrémentent à l’affichage), modifiables dans le manager.
- **Bandeaux** adaptés au mobile (texte sur plusieurs lignes, bouton pour fermer).
- **Page Liens** en cartes, avec recherche instantanée.
- Icône d’onglet (favicon) reprenant le logo de l’école.
- Apparition progressive des contenus au défilement, menus déroulants animés, barre de progression de lecture, en-tête qui se réduit au défilement, photos agrandissables, bouton « retour en haut ».
- **Bandeaux** d’information en haut du site (avec dates de début et de fin, texte défilant possible).
- Pages : Accueil, Actualités, Nos associations (OGEC, APEL), L’école (Don Bosco, pastorale, horaires, locaux, équipe éducative, projets), Règlement financier, Liens, Contact, Mentions légales et pages de classes.
- Adapté mobile et tablette. Les animations sont désactivées pour les personnes qui ont réglé leur appareil pour réduire les mouvements.
- Statistiques de fréquentation **anonymes** (pages vues, visiteurs, clics).

## 3. Ce que fait le manager

Connexion par **e-mail et mot de passe** ou par **Google**, avec trois rôles :

| Rôle | Possibilités par défaut |
|---|---|
| **Enseignant** | Écrire, modifier et supprimer ses articles (avec ou sans photo), ajouter des dates, ajouter des photos. |
| **Direction** | Tout ce qui précède sur tous les contenus, plus bandeaux, pages, équipe, liens, apparence, coordonnées, comptes et statistiques. |
| **Développeur** | Tous les droits, réglage des permissions par rôle, connexion à la base, sauvegarde et import. |

Fonctions : tableau de bord, articles (recherche), dates (avec heure), bandeaux, pages (texte mis en forme, ordre dans le menu), équipe pédagogique et photos de l’école, liens (recherche), **Accueil et bulles** (texte d’accueil, bulles de chiffres, boutons, cartes rapides, liens ajoutés au menu), apparence (logo, couleurs, fond de la page de connexion), coordonnées, comptes utilisateurs, permissions, statistiques, aperçu et publication. Les onglets Accueil, Apparence et Coordonnées affichent un **aperçu en direct** du site.

**Session** : la case « Rester connecté sur cet ordinateur » (cochée par défaut) garde la connexion d’une visite à l’autre. Le bouton *Quitter* la termine.

**Fond de la page de connexion** : onglet Apparence, au choix une photo téléversée, l’adresse d’une image, la photo de l’école par défaut ou une couleur unie.

**Enregistrement** : toute modification fait apparaître une barre « Modifications non enregistrées » avec *Annuler*, *Enregistrer* et *Enregistrer et publier*. Les suppressions peuvent être annulées pendant quelques secondes.

### Mise en forme des pages
`## Titre` · `- liste` · `**gras**` · `[texte](https://lien)` · `![](https://adresse-image)` · une ligne vide pour un nouveau paragraphe.

## 4. Mise en place pas à pas

### A. Firebase (console.firebase.google.com, projet `ecoledonbosco-250f2`)
1. **Firestore Database** : créer la base (mode production). Onglet **Règles** : coller le contenu de `firestore.rules`, puis **Publier**. À faire avant d’ouvrir le site.
2. **Authentication > Méthode de connexion** :
   - activer **E-mail / mot de passe** ;
   - activer **Google** (choisir une adresse e-mail d’assistance, puis enregistrer).
3. **Authentication > Utilisateurs** : ajouter un compte par personne qui utilisera l’e-mail et le mot de passe (les comptes Google apparaissent après leur première connexion).
4. **Authentication > Paramètres > Domaines autorisés** : ajouter `VOTRE-COMPTE.github.io` et, si besoin, votre domaine personnalisé. Sans cela, la connexion Google échoue.
5. **Firestore > Données** : créer la collection `staff`. Pour chaque personne autorisée à publier, ajouter un document dont l’**ID est son UID** (visible dans Authentication > Utilisateurs) avec un champ `ok` = `true`.

### B. GitHub Pages
1. Créer un dépôt GitHub et y déposer tous les fichiers du dossier (y compris `.nojekyll`).
2. **Settings > Pages** : source « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. Le site est sur `https://VOTRE-COMPTE.github.io/NOM-DU-DEPOT/` et le manager sur `.../manager.html`.
4. Domaine personnalisé : Settings > Pages > Custom domain, puis l’enregistrement DNS indiqué par GitHub.

### C. Premier usage
1. Ouvrir `manager.html` et se connecter (e-mail ou Google). **Le premier compte qui se connecte devient « Développeur ».**
2. Onglet **Utilisateurs** : pour chaque personne, renseigner son nom affiché, son rôle et son **e-mail** (celui du compte Firebase ou Google). C’est ce qui relie une connexion à un rôle.
3. Modifier les contenus, puis **Enregistrer et publier**. Le site public se met à jour pour tous les visiteurs.

## 5. Données stockées dans Firestore

| Collection / document | Contenu | Lecture | Écriture |
|---|---|---|---|
| `site/config` | Contenu public du site (sans comptes) | tout le monde | personnel (`staff`) |
| `site/private` | Comptes et rôles du manager | personnel | personnel |
| `media/*` | Photos (réduites, 1 Mo max chacune) | tout le monde | personnel |
| `stats/*` | Compteurs de fréquentation anonymes | personnel | visiteurs (incrément) et personnel |
| `mstats/*` | Activité de l’équipe dans le manager | personnel | personnel |
| `staff/*` | Liste du personnel autorisé | la personne concernée | console uniquement |

## 6. Sécurité : à savoir

- Les identifiants de `firebase-config.js` sont **publics par conception** ; seules les règles Firestore protègent les données. Ne sautez pas l’étape de publication des règles.
- Les droits par rôle (enseignant, direction) sont appliqués par le manager. Côté Firebase, la distinction est « personnel autorisé ou non » : une personne du personnel techniquement habile pourrait contourner les restrictions de rôle.
- Un visiteur malveillant pourrait gonfler artificiellement les compteurs de statistiques : les chiffres sont indicatifs.
- Les photos par défaut viennent de l’ancien site ecole-donbosco.fr : elles s’affichent tant qu’il reste en ligne. Importez vos propres photos depuis le manager.

## 7. Dépannage

| Problème | Piste |
|---|---|
| « Connexion Google impossible : auth/unauthorized-domain » | Ajouter le domaine dans Authentication > Paramètres > Domaines autorisés. |
| « Ce compte Google n’est associé à aucun utilisateur » | Dans Utilisateurs, renseigner l’e-mail de cette personne (compte déjà créé par le développeur). |
| « Failed: Missing or insufficient permissions » à la publication | La personne n’est pas dans `staff` (UID) ou les règles ne sont pas publiées. |
| Le site public n’affiche pas les modifications | Avoir cliqué sur « Enregistrer et publier », puis recharger la page (Ctrl+F5). |
| Photos de l’ancien site absentes | L’ancien site est hors ligne ou bloque l’affichage externe : importer ses propres photos. |

## 8. Crédits

- **EbWebs** : propulsion et hébergement.
- **Ethan MORGADO** : création.
- **Claude** (Anthropic) : développement (« vibecoding »).
- Les animations s’inspirent de pratiques courantes du web moderne (diaporama en fondu, compteurs, apparitions au défilement) ; le code et le design sont originaux.
