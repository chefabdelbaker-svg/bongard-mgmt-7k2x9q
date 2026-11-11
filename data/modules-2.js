/* BONGARD Académie commerciale — contenu de formation (partie 2) */

/* ---------- 06 RHEA ---------- */
BG.modules.push({
  id: "rhea", num: "06", kind: "machine", family: "Division & formage",
  title: "RHEA MANU et AUTO",
  tagline: "Laminer avec régularité : du manuel de table à l'automatique tactile.",
  sources: "ARGUMAT RHEA AUTO Rev01 05/2023 (S06) ; brochure RHEA (S12) ; brochure « RHEA+ MANU / RHEA AUTO » rev04-c du Drive (consultée).",
  diagram: "rhea",
  visuals: [{ need: "bongard-rhea-dc-fr-rev04-c.pdf (Drive) — photos MANU-T, MANU-S, MANU-SC, AUTO-S, AUTO-SC", note: "Montrer le bon modèle : table, socle, station de découpe, enrouleur automatique." }],
  checks: [
    { s: "gap", t: "Charge minimale des AUTO : l'ARGUMAT 2023 annonce 3 à 13 kg ; le dossier préparé cite aussi une brochure à 0,5–13 kg. La brochure rev04-c du Drive indique 0,5 kg pour les MANU (0,5–4, 0,5–6, 0,5–8 kg) et 3 à 13 kg pour les AUTO. Le 0,5 kg semble donc venir des MANU. Maximum commun : 13 kg. Minimum à confirmer sur la référence et la pâte." },
    { s: "ok",  t: "Cadences : 920 croissants/h (AUTO, pâtons de 13 kg, 100 g, outil 2 croissants B85 × H270, 2 personnes) et 640 croissants/h (MANU-SC, pâtons de 8 kg, mêmes conditions) retrouvées dans la brochure." },
    { s: "ok",  t: "Dimensions AUTO-S / AUTO-SC : 3 960 / 4 160 mm de largeur totale en travail, 1 180 mm de profondeur, 920 mm de hauteur de travail : retrouvées." },
    { s: "ok",  t: "+30 % de productivité / −30 % de temps avec la station de découpe (modèles SC) : formulation de la brochure, à vérifier sur les produits du client." },
    { s: "tbc", t: "Alimentation : MANU-T/S en triphasé 400 V 50 Hz de série (380 V 60 Hz de série également) ; AUTO en 208-230 V 50-60 Hz en option payante. Tension et fréquence locales à confirmer pour la référence proposée." },
  ],
  sections: [
    { id: "quoi", title: "1 · Ce que c'est", html: `<p>RHEA est une <strong>famille de laminoirs</strong> : elle abaisse la pâte progressivement, du petit modèle manuel de table aux modèles automatiques à commande tactile. Les versions <b>SC</b> intègrent une station de découpe, avec des outils choisis selon le produit. Elle laminage et tourage tous types de pâtes (feuilletée, feuilletée levée, sucrée, brisée, pâte d'amande, pâte à sucre).</p>` },
    { id: "fonct", title: "2 · Fonctionnement simple", html: `<p><b>Laminage</b> : réduire l'épaisseur. <b>Tourage</b> : abaisse et pliages pour constituer le feuilletage. <b>Enroulement</b> : récupération de l'abaisse sur un rouleau. La machine <em>ne roule pas</em> automatiquement les croissants.</p><p>Trois modes sur AUTO : <b>automatique</b> (programme enregistré), <b>semi-automatique</b> (épaisseurs initiale et finale et nombre d'étapes saisis, la machine calcule la progression), <b>manuel</b> (réglage direct, passage par passage).</p>` },
    { id: "users", title: "3 · Utilisateurs et applications", html: `<table class="t"><thead><tr><th>Modèle</th><th>Configuration</th><th>Usage</th></tr></thead><tbody>
      <tr><td>MANU-T</td><td>À poser sur table ; formats 500 et 500 L</td><td>Petites productions, besoins d'intégration</td></tr>
      <tr><td>MANU-S</td><td>Sur socle ; 500, 500 L, 600, 600 L</td><td>Production manuelle, longueur de tables adaptable</td></tr>
      <tr><td>MANU-SC</td><td>Sur socle, station de découpe 600 L</td><td>Laminage et découpe en commande manuelle</td></tr>
      <tr><td>AUTO-S</td><td>Sur socle, tapis de 650 mm</td><td>Laminage programmé, farinage et enroulement automatiques</td></tr>
      <tr><td>AUTO-SC</td><td>Sur socle, station de découpe 650 L</td><td>Automatisation du laminage, découpe intégrée</td></tr></tbody></table>` },
    { id: "carac", title: "4 · Caractéristiques essentielles", html: `<table class="t"><thead><tr><th>Modèle</th><th>Poids du pâton</th><th>Cylindres</th><th>Largeur totale en travail</th></tr></thead><tbody>
      <tr><td>MANU-T 500 / 500 L</td><td>0,5 – 4 kg</td><td>Ø 80 mm · 1–47 mm</td><td>1 470 / 2 070 mm</td></tr>
      <tr><td>MANU-S 500 à 600 L</td><td>0,5 – 6 kg (500) · 0,5 – 8 kg (600)</td><td>Ø 80 mm · 1–47 mm</td><td>de 2 300 à 3 250 mm</td></tr>
      <tr><td>MANU-SC 600 L</td><td>0,5 – 8 kg</td><td>Ø 80 mm · 1–47 mm</td><td>3 250 mm</td></tr>
      <tr><td>AUTO-S 650</td><td><b>3 – 13 kg</b></td><td>Ø 80 mm · 1–50 mm</td><td>3 960 mm</td></tr>
      <tr><td>AUTO-SC 650 L</td><td><b>3 – 13 kg</b></td><td>Ø 80 mm · 1–50 mm</td><td>4 160 mm</td></tr></tbody></table><p class="note">Source : brochure rev04-c du Drive, à confirmer sur la fiche de la référence proposée. AUTO : profondeur 1 180 mm, hauteur de travail 920 mm ; tables non repliables comme celles des MANU. Les MANU sur socle à table(s) rabattable(s) libèrent de l'espace une fois le laminage terminé.</p>` },
    { id: "config", title: "5 · Configurations, accessoires, options", html: `<ul><li><b>Commande</b> : poignée d'écartement des cylindres et afficheur numérique (MANU, au dixième de mm) ; double commande mains / pieds (MANU-S et SC) ; commande tactile 7 pouces (AUTO).</li><li><b>Farinage</b> : bac à farine amovible inox (MANU sur socle) ; farineur automatique intelligent qui détecte la pâte, largeur et intensité paramétrables (AUTO).</li><li><b>Enroulement</b> : deux rouleaux récupérateurs d'abaisse en aluminium ; enrouleur automatique à droite sur AUTO.</li><li><b>Station de découpe</b> (SC) : supports pour jusqu'à 4 outils ; croissants droits ou courbés, mini-croissants, pains au chocolat, chaussons, tartes, tartelettes, rectangles… (autres outils sur demande).</li></ul>` },
    { id: "mat", title: "6 · Matériaux et construction", html: `<p>Tablettes de réception de pâte en <b>inox amovibles</b> (lavables au lave-batterie), racleurs démontables, <b>tapis Smartblue</b> antistatique (moins de farinage, couleur bleue contre l'éblouissement). Rouleaux « Easy Pass » pour un passage sans déchirure sous les grilles de protection.</p>` },
    { id: "args", title: "7 · Atouts phares", html: `<table class="t args"><thead><tr><th>Atout</th><th>Fonction concrète</th><th>Intérêt client</th></tr></thead><tbody>
      <tr><td>Régularité</td><td>Programmes : écartement des cylindres, vitesse, farinage.</td><td>Reproduire la méthode validée entre opérateurs.</td></tr>
      <tr><td>Respect de la pâte</td><td>Progression des passages ; rouleaux Easy Pass.</td><td>Limiter les déchirures, rechercher une épaisseur homogène.</td></tr>
      <tr><td>Moins de gestes répétitifs</td><td>Farinage et enroulement automatiques ; découpe sur SC.</td><td>Réduire certaines manipulations, organiser le poste.</td></tr>
      <tr><td>Farinage maîtrisé</td><td>Largeur et intensité réglables, détection de pâte.</td><td>Ajuster la farine, limiter les poussières.</td></tr>
      <tr><td>Entretien</td><td>Tablettes et racleurs démontables, tapis Smartblue.</td><td>Faciliter le nettoyage selon les consignes constructeur.</td></tr>
      <tr><td>Utilisation encadrée</td><td>Profils et accès aux programmes (multi-utilisateurs).</td><td>Limiter les changements de réglages non souhaités.</td></tr></tbody></table>` },
    { id: "benef", title: "8 · Bénéfices concrets", html: `<ul><li>Épaisseur plus constante d'un opérateur à l'autre.</li><li>Moins de manipulations pendant que la machine travaille.</li><li>Station de découpe : jusqu'à <b>30 %</b> de temps en moins par rapport au travail manuel — <em>à vérifier sur vos produits, méthodes et effectifs</em>.</li></ul><p class="ex"><b>Chiffres avec leurs conditions.</b> 920 croissants/h : deux personnes, pâtons de 13 kg, croissants de 100 g, outil 2 croissants B85 × H270. 640 croissants/h pour MANU-SC : deux personnes, pâtons de 8 kg. Ces scénarios ne démontrent pas un gain identique dans tous les ateliers.</p>` },
    { id: "diff", title: "9 · Différenciations documentées (benchmark mai 2023)", html: `<p><b>Face au manuel</b> : l'AUTO apporte des réglages répétables, le farinage et l'enroulement automatiques ; la version SC ajoute la découpe. Le manuel garde son intérêt pour des besoins moins intensifs, un autre budget, des impératifs de rangement.</p><p><b>Face aux concurrents étudiés</b> (FRITSCH Rollfix Plus, RONDO Rondostar Cutomat 5000, BERTRAND PUMA Stratus Mega) : enrouleur standard, capacité 13 kg contre 10 kg, puissance moteur 1,1 kW contre 1,4 kW face au RONDO étudié. Éléments historiques : une puissance plus faible ne prouve pas à elle seule une consommation par produit plus faible.</p>` },
    { id: "disc", title: "10 · Questions de découverte", html: `<ul><li>Produits, poids de pâtons, grammages et épaisseurs finales ?</li><li>Volume quotidien et volume de pointe ? Temps passé au laminage et à la découpe ?</li><li>Nombre d'opérateurs, écarts de résultat constatés ?</li><li>Formats de découpe et outils nécessaires ? Place de travail et accès ?</li></ul>` },
    { id: "obj", title: "11 · Questions et inquiétudes du client", html: `<div class="obj"><b>« Mon pâtissier sait déjà laminer. »</b><p>Son savoir-faire sert à <em>définir</em> les programmes. L'objectif est de reproduire sa méthode et de réduire certaines manipulations ; mesurons le gain sur vos fabrications.</p></div><div class="obj"><b>« Le manuel me suffit. »</b><p>C'est possible : tout dépend du volume et du poste réellement limitant. Voyons combien de temps vous passez au laminage et quelle régularité vous recherchez.</p></div>` },
    { id: "lim", title: "12 · Limites et vérifications", html: `<ul class="check"><li>Charge minimale exacte pour la référence proposée (3 kg AUTO ? voir contrôle croisé).</li><li>Matière grasse, repos et procédé : les conseils de température et recettes du support ne sont pas des réglages universels.</li><li>Montage des outils et nettoyage : suivre la notice.</li><li>Tension et fréquence locales ; disjoncteur de type B obligatoire pour MANU-SC et AUTO.</li></ul>` },
    { id: "syn", title: "13 · À retenir", html: `<ul><li>AUTO régularise le laminage ; SC ajoute la découpe.</li><li>Laminage ≠ tourage ≠ enroulement.</li><li>La machine n'enroule pas les croissants : elle enroule l'abaisse.</li><li>Chaque chiffre de cadence vient avec ses conditions.</li></ul>` },
  ],
  pitch: "RHEA AUTO régularise les opérations de laminage. AUTO-SC intègre la découpe. Le choix se fait sur la pâte, le volume, le besoin d'automatisation et l'encombrement réel.",
  summary: ["MANU-T / S / SC et AUTO-S / SC.", "AUTO : 3–13 kg (brochure rev04-c) ; MANU : 0,5–8 kg.", "920 et 640 croissants/h : avec leurs conditions.", "Savoir-faire = définir les programmes."],
  cards: [
    ["Que ajoute la lettre « C » dans MANU-SC et AUTO-SC ?", "Une station de découpe intégrée, avec jusqu'à 4 outils de découpe."],
    ["Tourage : définition courte", "Abaisse et pliages successifs qui constituent le feuilletage."],
    ["Que signifie « Easy Pass » ?", "Des rouleaux qui accompagnent le pâton pour un passage sans déchirure sous les grilles de protection."],
    ["Que fait le farineur de l'AUTO ?", "Il détecte la pâte ; largeur et intensité du farinage sont paramétrables."],
  ],
});

/* ---------- 07 PANEOTRAD ---------- */
BG.modules.push({
  id: "paneotrad", num: "07", kind: "machine", family: "Division & formage",
  title: "PANEOTRAD",
  tagline: "Vendre un procédé de fabrication, pas une machine rapide.",
  sources: "Contre-argumentaire PANEOTRAD V00 (S10) ; présentation 02/2025 (S01 p. 9). Aucune brochure PANEOTRAD sur le Drive.",
  visuals: [{ need: "Brochure PANEOTRAD (PDF) — machine, matrices, schéma du procédé", note: "Aucun visuel PANEOTRAD exploitable dans les documents transmis." }],
  checks: [
    { s: "gap", t: "« 36 matrices » (contre-argumentaire) et « plus de 60 formes réalisables » (présentation 2025) : deux unités différentes. Ne pas assimiler matrices et formes." },
    { s: "tbc", t: "Source technique unique : le contre-argumentaire est un document de réponse aux objections, pas une notice. Chiffre de 30 % de temps, 72 h de conservation et montants en euros : historiques, non transposables sans validation." },
    { s: "ok",  t: "Les brochures HERA et BFC EVO du Drive prévoient un kit « Paneotrad » (pointage en masse) : lien confirmé entre PANEOTRAD et la fermentation en bacs." },
  ],
  sections: [
    { id: "quoi", title: "1 · Ce que c'est", html: `<p>PANEOTRAD est présenté comme un <strong>procédé breveté de séparation et de mise en forme des pâtons</strong> (2007). Il réorganise le travail autour de pâtes fermentées en bacs, puis d'une préparation adaptée à la cuisson. Sa valeur se comprend à l'échelle du fournil.</p>` },
    { id: "fonct", title: "2 · Fonctionnement simple", html: `<p>La pâte pointe en <b>bacs</b> au froid ; elle est ensuite séparée et mise en forme avec des outils (matrices) puis cuite. Le support présente le <b>remplacement de trois fonctions</b> du schéma traditionnel : diviseuse, repose-pâtons, façonneuse. Une partie du fonctionnement s'intègre à d'autres tâches du boulanger (<em>temps masqué</em>).</p>` },
    { id: "users", title: "3 · Utilisateurs et applications", html: `<p>Boulangers recherchant souplesse d'organisation, diversité de formes et fournil compact : pâtes fermentées en bacs, production différée, fournées étalées dans la journée.</p>` },
    { id: "carac", title: "4 · Caractéristiques essentielles", html: `<table class="t"><thead><tr><th>Point clé</th><th>Conséquence à expliquer</th></tr></thead><tbody>
      <tr><td>Trois fonctions remplacées</td><td>Diviseuse, repose-pâtons, façonneuse, dans le procédé concerné.</td></tr>
      <tr><td>Pointage en bacs</td><td>Pâte organisée au froid, production différée ; méthode et capacités à dimensionner.</td></tr>
      <tr><td>Diversité de formes</td><td>Recette, outils et finition permettent de varier les produits.</td></tr>
      <tr><td>Temps masqué</td><td>Une partie du fonctionnement s'intègre à d'autres tâches.</td></tr>
      <tr><td>Fournil compact</td><td>Moins de machines que dans le schéma traditionnel.</td></tr></tbody></table>` },
    { id: "config", title: "5 · Configurations, accessoires, options", html: `<ul><li>Matrices (outils de formes) : 36 citées par le contre-argumentaire.</li><li><b>PANEODUST</b> : farineur motorisé, farinage plus uniforme et limité.</li><li>Froid adapté : kit Paneotrad sur HERA / BFC EVO.</li><li>Four et formation de l'équipe inclus dans la réflexion d'ensemble.</li></ul>` },
    { id: "mat", title: "6 · Matériaux et construction", html: `<p>Pas de détail de matériaux dans le contre-argumentaire. <b>Ne pas en inventer</b> : demander la fiche technique de la configuration proposée.</p>` },
    { id: "args", title: "7 · Atouts phares", html: `<table class="t args"><thead><tr><th>Atout</th><th>Explication</th><th>Bénéfice potentiel</th></tr></thead><tbody>
      <tr><td>Organisation</td><td>Préparation de pâte et cuissons organisées dans le temps.</td><td>Étaler la production, limiter certaines contraintes horaires.</td></tr>
      <tr><td>Temps de travail</td><td>Le support évoque 30 % de réduction par rapport au procédé traditionnel.</td><td>Piste à mesurer sur des tâches et volumes comparables.</td></tr>
      <tr><td>Investissement global</td><td>Remplacement de trois équipements dans le procédé concerné.</td><td>Comparer l'ensemble de la solution : froid, accessoires, four.</td></tr>
      <tr><td>Surface</td><td>Moins de postes distincts, organisation en bacs.</td><td>Libérer de la place, étudier un petit laboratoire.</td></tr>
      <tr><td>Diversité</td><td>Formes et finitions, pâtes différenciées.</td><td>Élargir l'offre sans multiplier les pâtes.</td></tr>
      <tr><td>Entretien</td><td>Un équipement central plutôt que trois.</td><td>Analyser le coût et l'organisation de maintenance.</td></tr></tbody></table>` },
    { id: "benef", title: "8 · Bénéfices concrets", html: `<ul><li>Une production pensée sur la journée plutôt que sur un pic.</li><li>Un fournil potentiellement plus compact.</li><li>Une offre de pains variée à partir d'un même schéma.</li></ul><p class="note">Le savoir-faire reste déterminant : pétrissage, fermentation, qualité de pâte, finition, cuisson. Le procédé ne transforme pas une pâte inadaptée en bon pain.</p>` },
    { id: "diff", title: "9 · Différenciations documentées", html: `<p>Le contre-argumentaire illustre la relation entre cadence et cuisson avec des hypothèses (cuisson de 20 minutes, surfaces de four, effectifs). Message à retenir : <b>calculer le débit de la chaîne entière</b>. Le nombre de pains vendables dépend aussi du refroidissement, du conditionnement et des ventes. Le four peut devenir le poste limitant.</p>` },
    { id: "disc", title: "10 · Questions de découverte", html: `<ul><li>Pains et formes souhaités ? Volume par créneau ?</li><li>Procédé actuel, habitudes de fermentation, possibilités de froid ?</li><li>Surface, four, équipes, horaires ?</li></ul><p>Proposer un essai sur les recettes du client et une comparaison du flux complet.</p>` },
    { id: "obj", title: "11 · Questions et inquiétudes du client", html: `<table class="t"><thead><tr><th>Question ou inquiétude</th><th>Réponse à construire</th></tr></thead><tbody>
      <tr><td>« C'est trop cher. »</td><td>Comparer l'investissement global : machines remplacées, froid, bacs, accessoires, surface, formation, maintenance. Chiffrer avec les coûts réels du client.</td></tr>
      <tr><td>« C'est trop lent. »</td><td>Observer le temps total du procédé et le débit du four. Un cycle isolé ne mesure pas la productivité du laboratoire.</td></tr>
      <tr><td>« Le pain aura un aspect industriel. »</td><td>Recette, formes, matrices et finition donnent une identité produit. Proposer une démonstration sur les pains attendus.</td></tr>
      <tr><td>« Il faut du personnel qualifié. »</td><td>Le savoir-faire est indispensable pour la pâte et le procédé ; les autres opérations peuvent être transmises à des utilisateurs formés.</td></tr>
      <tr><td>« Si la machine tombe en panne ? »</td><td>Définir maintenance, pièces, service local. Aucun délai d'intervention sans engagement écrit.</td></tr>
      <tr><td>« Une diviseuse à grille fait pareil. »</td><td>Comparer méthode, manipulations, changement de formes, finition, nettoyage et temps total sur un essai.</td></tr></tbody></table>` },
    { id: "lim", title: "12 · Limites et vérifications", html: `<ul class="check"><li>Aucun retour sur investissement garanti ; montants en euros du document non transposables.</li><li>Conservation « jusqu'à 72 h » : à valider avec recette, température, organisation.</li><li>Diversité : vérifier les outils réellement disponibles pour le projet.</li></ul>` },
    { id: "syn", title: "13 · À retenir", html: `<ul><li>Un procédé, pas seulement une machine.</li><li>Trois fonctions remplacées dans le procédé concerné.</li><li>Matrices ≠ formes réalisables.</li><li>Valider sur les produits et les volumes du client.</li></ul>` },
  ],
  pitch: "PANEOTRAD permet de repenser la production autour de pâtes fermentées et d'une mise en forme adaptée. Son intérêt est la souplesse d'organisation, la diversité et la cohérence du fournil. Nous validons le résultat sur vos produits et vos volumes.",
  summary: ["Procédé breveté (2007), pointage en bacs.", "Remplace diviseuse, repose-pâtons, façonneuse dans le procédé.", "36 matrices ≠ 60 formes.", "Le four peut devenir le poste limitant."],
  cards: [
    ["PANEODUST", "Farineur motorisé : farinage plus uniforme et limité dans le procédé."],
    ["Pourquoi dire « procédé » ?", "Parce qu'il réorganise plusieurs étapes du fournil et dépend de la pâte, du froid, du four et de la formation."],
    ["Réflexe face à « trop lent »", "Mesurer le temps total du procédé et le débit du four, pas un cycle isolé."],
  ],
});

/* ---------- 08 HERA ---------- */
BG.modules.push({
  id: "hera", num: "08", kind: "machine", family: "Froid & fermentation",
  title: "HERA",
  tagline: "Piloter la fermentation dans le temps : armoires à plaques et à chariots.",
  sources: "ARGUMAT HERA Rev01 (03/2025) — édition de référence ; ancien ARGUMAT HERA (S07, non daté) ; brochure « HERA » rev02 du Drive (consultée).",
  diagram: "hera",
  visuals: [{ need: "bongard-hera-dc-fr-rev02-1.pdf (Drive) — HERA-P 1 porte, 2 portes, HERA-C", note: "Distinguer HERA-P (plaques) et HERA-C (chariots)." }],
  checks: [
    { s: "ok",  t: "24 niveaux (espacement 63 mm, glissières légèrement décalées en profondeur) contre 20 sur l'ancienne gamme : confirmé par l'ARGUMAT HERA Rev01 (03/2025). Crémaillères réglables tous les 32 mm." },
    { s: "ok",  t: "Plage de température −15 °C à +40 °C ; commande tactile SENSITIV'2 à 1,50 m du sol, écran 7 pouces, jusqu'à 20 phases de fermentation : confirmés (Rev01 et brochure rev02)." },
    { s: "ok",  t: "Groupe tropicalisé monté de série, ambiance jusqu'à 43 °C ; évaporateur à cataphorèse ; R290 sur groupes montés, R448A sur groupes non montés ou à distance : confirmés." },
    { s: "ok",  t: "Option 208-220 V monophasé 60 Hz confirmée (230 V 50 Hz de série) sur HERA-P et HERA-C." },
    { s: "ok",  t: "Retours de boulangers cités dans l'ARGUMAT (comparaison avec la BFA) : à présenter comme retours cités par Bongard, pas comme mesures." },
    { s: "tbc", t: "Benchmark CFI, HENGEL, PANEM, PANIMATIC : valeurs issues de l'ARGUMAT Rev01, non vérifiées indépendamment ; axes de comparaison seulement, aucun classement repris." },
    { s: "tbc", t: "Cabinet HERA-C 460×800 : plus étroit que le chariot 600×800 standard ; Bongard recommande fortement le 600×800 (voir rubrique 5). Le tutoriel vidéo SENSITIV'2 cité n'a pas été ouvert : lien non vérifié." },
  ],
  sections: [
    { id: "quoi", title: "1 · Ce que c'est", html: `<p>HERA est une <strong>gamme d'armoires de fermentation contrôlée</strong> : <b>HERA-P</b> pour les plaques (1 ou 2 portes), <b>HERA-C</b> pour les chariots. Elle permet d'accélérer, de ralentir ou de bloquer la pousse pour préparer les produits <em>au moment voulu</em>.</p>` },
    { id: "fonct", title: "2 · Fonctionnement simple", html: `<table class="t"><thead><tr><th>Phase</th><th>Rôle</th></tr></thead><tbody>
      <tr><td>Prérefroidissement</td><td>Préparer l'enceinte avant l'introduction des produits ou le cycle prévu.</td></tr>
      <tr><td>Blocage</td><td>Maintenir une température basse pour ralentir fortement l'activité fermentaire.</td></tr>
      <tr><td>Fermentation</td><td>Faire évoluer température et humidité pour la pousse attendue.</td></tr>
      <tr><td>Dormillon</td><td>Revenir à une température de maintien après la pousse pour limiter la poursuite de la fermentation.</td></tr></tbody></table><p>Le blocage maintient une température constante basse (2 à 5 °C) ; le prérefroidissement peut descendre jusqu'à −15 °C pour décongeler en douceur ou refroidir vite une pâte fraîche ; la durée du blocage est ajustée automatiquement par l'armoire selon l'heure de fin de cycle souhaitée ; la phase de fermentation accepte jusqu'à 20 phases entièrement personnalisées ; après un temps réglé, le dormillon ramène l'armoire à la température voulue. La levure est à son maximum vers 28–30 °C et bloquée vers 2 °C.</p><p>La <b>température</b> règle la vitesse de fermentation ; l'<b>humidité</b> aide à éviter le croûtage ; la <b>ventilation</b>, régulée automatiquement pendant le cycle, répartit les conditions sans agresser les produits. Le résultat dépend aussi de la recette, de la levure ou du levain, de la température initiale et du chargement.</p>` },
    { id: "users", title: "3 · Utilisateurs et applications", html: `<p>Pains (blancs, spéciaux, de tradition), pâtes briochées, levées, pizza, viennoiseries. Procédés : fermentation directe, pointage en masse, fermentation lente, fermentation contrôlée avec blocage, pré-poussé bloqué.</p><p>La pousse comprend trois étapes : la <b>fermentation</b> (renforce la pâte, aide à retenir les gaz), l'<b>apprêt</b> ou première pousse (détente de la pâte, plus facile à façonner) et la <b>pousse finale</b> (le volume augmente, structure alvéolée). L'armoire sert pendant la pousse finale et aussi pendant la fermentation, selon la technique : directe (rapide), indirecte (pointage en masse, fermentation lente), fermentation contrôlée avec blocage, ou pré-poussé bloqué.</p><p><b>Clientèle visée</b> : artisans qui veulent de la régularité et un droit d'accès aux recettes, boulangers de plus en plus perfectionnistes, équipes où plusieurs personnes interviennent sur un même cycle (transmission simple des informations), grandes surfaces et chaînes avec un personnel de moins en moins qualifié (utilisation simple et intuitive), boulangers réticents à la technologie.</p>` },
    { id: "carac", title: "4 · Caractéristiques essentielles", html: `<table class="t"><tbody>
      <tr><td>Plage de température</td><td>−15 °C à +40 °C</td></tr>
      <tr><td>Commande</td><td>SENSITIV'2 Fermentation, écran tactile 7 pouces, centre à 1,50 m du sol ; jusqu'à 20 phases personnalisables ; mode manuel ou programme</td></tr>
      <tr><td>HERA-P</td><td>Plaques 400×600, 400×800, 460×800, 600×800 ; 1 cellule / 1 porte, 2 cellules / 2 portes, ou 1 cellule / 2 vantaux (jusqu'à 1115×800)</td></tr>
      <tr><td>HERA-C</td><td>Chariots 400×600, 460×800, 600×800, 800×1000 (le 800×1000 n'est livré que non monté, en double vantail)</td></tr>
      <tr><td>Niveaux</td><td>24 niveaux (espacement 63 mm) ; crémaillères réglables tous les 32 mm ; sol plat facile à nettoyer, inox en option</td></tr>
      <tr><td>Groupe</td><td>Tropicalisé monté de série, ambiance jusqu'à 43 °C ; groupes montés ou à distance</td></tr>
      <tr><td>Électricité</td><td>230 V monophasé 50 Hz de série ; 208-220 V 60 Hz en option</td></tr></tbody></table><p class="note">Source : ARGUMAT HERA Rev01 (03/2025) et brochure rev02. Configuration exacte à confirmer sur la référence choisie.</p>` },
    { id: "config", title: "5 · Configurations, accessoires, options", html: `<ul><li>Utilisation <b>Standard</b> ; <b>Mixte</b> (Standard + Paneotrad) en option payante ; <b>usage danois</b> (sans hygrostat, uniquement en 400×600 et 600×800, option moins chère) ; <b>ATHENA Paneotrad</b> (uniquement en 600×800, en option).</li><li>Commande SENSITIV'2 avec hygrostat électronique de série ; commande électromécanique (hygrostat électromécanique) possible en 400×600 et 600×800 seulement.</li><li>Capteur de porte de série (non disponible sur le 2 cellules / 2 portes) ; livraison montée, montée à plat sur le dos, ou non montée (HERA-P, option payante).</li><li>Poignée de porte à gauche (série) ou à droite ; double vantail sur les grandes largeurs.</li><li>Intérieur et extérieur <b>inox 304</b> (option, uniquement avec SENSITIV'2).</li><li>Sol isolant antidérapant PVC + rampe d'accès inox sur HERA-C (option payante).</li><li>Groupes silencieux (option payante), groupe à distance de 8 à 20 m, raccord possible sur centrale CO₂ (nous consulter).</li></ul><p><p class="ex"><b>HERA-C 460×800 : à proposer avec une mise en garde.</b> Si la place est restreinte et que le HERA-C 600×800 ne passe pas, on peut proposer le 460×800 pour un chariot 600×800 : largeur du chariot standard 66 cm, largeur entre les deux butoirs 68 cm. Les freins des roulettes touchent les côtés, la sortie du chariot est moins fluide et il faut tenir le chariot par le haut pour ne pas se coincer les mains. <b>Bongard recommande fortement le HERA-C 600×800</b> pour une utilisation fluide.</p>` },
    { id: "mat", title: "6 · Matériaux et construction", html: `<ul><li>Structure plus durable : profilés PVC supprimés, panneaux assemblés par crochets plastique et raccords mâle / femelle avec joint plastique intégré, pente du bac à condensats plus forte, porte plus hermétique.</li><li>Écran tactile protégé par un pare-chocs.</li><li>Finition <b>PVC</b> intérieure et extérieure de série ; <b>inox 304</b> en option : <em>ne pas annoncer « tout inox »</em>.</li><li>Évaporateur traité par <b>cataphorèse</b> : meilleure tenue à la corrosion (ne supprime pas tout risque de fuite).</li><li>HERA-P : sol inox embouti, angles arrondis, nettoyage à l'éponge. HERA-C : rails de protection inox contre les chocs de chariots, bavette d'étanchéité ajustable.</li></ul>` },
    { id: "args", title: "7 · Atouts phares", html: `<table class="t args"><thead><tr><th>Atout</th><th>Élément du support</th><th>Bénéfice</th></tr></thead><tbody>
      <tr><td>Capacité</td><td>24 niveaux (63 mm) contre 20 auparavant, crémaillères tous les 32 mm.</td><td>Plus de plaques par armoire à encombrement comparable.</td></tr>
      <tr><td>Durabilité</td><td>Évaporateur traité par cataphorèse.</td><td>Meilleure tenue à la corrosion.</td></tr>
      <tr><td>Régularité</td><td>Sonde électronique, ventilation à vitesse régulée, capteur de porte.</td><td>Mieux piloter les conditions du cycle et la répartition autour des produits.</td></tr>
      <tr><td>Confort thermique local</td><td>Groupe tropicalisé de série, ambiance jusqu'à 43 °C.</td><td>Critère pertinent pour un local chaud ; emplacement du groupe à étudier.</td></tr>
      <tr><td>Commande lisible</td><td>Écran 7 pouces, centre à 1,50 m du sol.</td><td>Suivre le cycle et accéder aux informations.</td></tr>
      <tr><td>Qualité des produits</td><td>Vitesse du ventilateur régulée automatiquement : à l'ouverture de la porte (capteur) et pendant le cycle quand l'armoire ne produit ni chaud ni froid.</td><td>Produits moins agressés : pâtes douces, lisses, de belle présentation.</td></tr>
      <tr><td>Ergonomie</td><td>Porte réversible sur site, pivot assisté, maintien au-delà de 95°.</td><td>Adapter le sens de circulation, faciliter les gestes.</td></tr></tbody></table>` },
    { id: "benef", title: "8 · Bénéfices concrets", html: `<ul><li>Une fournée prête à l'heure voulue, avec moins de travail de nuit.</li><li>Des programmes protégés par profils d'accès.</li><li>Une armoire qui s'adapte à une évolution d'implantation (porte réversible).</li></ul><p class="ex"><b>Retours de boulangers cités par Bongard (par rapport à la BFA).</b> Résultats plus réguliers (pousse régulière dans l'armoire) ; humidité mieux retenue, pas de dessèchement de la pâte ; gain de temps (programmation plus simple et plus rapide) ; plus de fiabilité grâce à la commande SENSITIV'2.</p><p class="note"><b>Avant / après.</b> Ce qui reste : quatre phases de fermentation. Ce qui change : meilleure structure, évaporateur à cataphorèse, groupe tropicalisé désormais de série, commande tactile fluide avec gestion de profils, hygrostat électronique et capteur de porte, design aux couleurs Bongard. Objectif du lancement : renouveler la gamme vieillissante, répondre aux besoins clients, simplifier l'utilisation, standardiser la gamme.</p>` },
    { id: "diff", title: "9 · Différenciations documentées", html: `<p>Le benchmark de l'ARGUMAT Rev01 cite CFI, HENGEL, PANEM et PANIMATIC. Selon ce document : HERA-P — plage −15 / +40 °C (contre −5 à −10 °C en minimum et 35 à 40 °C en maximum chez les autres), hygrométrie 30 à 99 %, 24 niveaux de 63 mm (20 à 27 chez les concurrents), commande à hauteur des yeux (centre à 1,5 m), porte réversible sur site et fermeture assistée par charnière, ambiance maximale 43 °C (30 à 43 °C chez les autres), densité d'isolation PU 42 kg/m³ (35 à 43 chez les autres) ; HERA-C — hauteur de chariot 1855 mm, gaz R448A / R290, vapeur par buse d'injection. Un seul concurrent cité propose la connectivité. Les valeurs sont celles de Bongard. <b>Plusieurs caractéristiques sont partagées par d'autres marques.</b> La différence se démontre sur une combinaison utile au client : formats, accessibilité, régulation, tropicalisation, services, avec références exactes.</p>` },
    { id: "disc", title: "10 · Questions de découverte", html: `<ul><li>Quels pains et viennoiseries ? Frais, surgelés ou pré-poussés ?</li><li>Horaires de cuisson et volumes par fournée ?</li><li>Formats de plaques, hauteurs de produits, chariots (roues et freins compris) ?</li><li>Température du laboratoire, emplacement du groupe ?</li><li>Problèmes actuels : croûtage, irrégularité, surpousse, programmation ?</li><li>Combien d'opérateurs interviennent sur le cycle, quels réglages protéger ?</li></ul>` },
    { id: "obj", title: "11 · Questions et inquiétudes du client", html: `<div class="obj"><b>« Une chambre froide suffit. »</b><p>Une chambre froide conserve au froid. HERA pilote un cycle de fermentation avec température, humidité et phases programmées. Cherchez-vous du stockage ou une préparation à la cuisson à une heure donnée ?</p></div><div class="obj"><b>« Je veux remplir tous les niveaux. »</b><p>Le nombre de niveaux est une possibilité d'aménagement. Hauteur des produits, pas des glissières, circulation de l'air et charge autorisée déterminent l'usage réel.</p></div>` },
    { id: "lim", title: "12 · Limites et vérifications", html: `<ul class="check"><li>Formats de plaques, dimensions réelles des chariots, nombre de cellules, sens de porte, sol, rampe éventuelle.</li><li>Températures du support : repères, pas des recettes universelles.</li><li>Édition Rev01 (03/2025) ; vérifier toute évolution d'options.</li><li>Ne pas transférer d'une gamme à l'autre : HERA (groupe tropicalisé 43 °C) ≠ BFC historique (38 °C).</li></ul><p class="ex"><b>Démonstration utile.</b> Le tutoriel vidéo SENSITIV'2 (fermentation) est cité dans l'ARGUMAT ; lien non vérifié.  Partir d'une heure de cuisson, construire le cycle, montrer paramètres et droits d'accès, comparer les produits à plusieurs hauteurs avec le chargement et la recette du client.</p>` },
    { id: "syn", title: "13 · À retenir", html: `<ul><li>HERA-P = plaques ; HERA-C = chariots.</li><li>Quatre phases : prérefroidissement, blocage, fermentation, dormillon.</li><li>Température, humidité, ventilation : trois leviers.</li><li>Chambre froide ≠ cycle de fermentation.</li></ul>` },
  ],
  pitch: "HERA organise la fermentation pour préparer vos fournées au moment voulu. Elle combine les phases froides, la montée en température, l'humidité et une ventilation adaptée. Nous choisissons la version à plaques ou à chariots à partir de votre production et de votre implantation.",
  summary: ["HERA-P plaques, HERA-C chariots.", "−15 °C à +40 °C ; 20 phases ; écran 7 pouces à 1,50 m.", "24 niveaux (63 mm) contre 20 auparavant.", "Groupe tropicalisé de série (43 °C).", "Finition PVC, inox en option."],
  cards: [
    ["Rôle du dormillon", "Température de maintien après la pousse, pour limiter la poursuite de la fermentation."],
    ["Pourquoi l'humidité ?", "Elle aide à éviter le croûtage de la pâte."],
    ["24 niveaux", "Glissières légèrement décalées en profondeur pour obtenir 24 niveaux à 63 mm ; crémaillères réglables tous les 32 mm."],
    ["Porte HERA : trois atouts", "Réversible sur site, pivot assisté, maintenue ouverte au-delà de 95°."],
  ],
});

/* ---------- 09 BFC ---------- */
BG.modules.push({
  id: "bfc", num: "09", kind: "machine", family: "Froid & fermentation",
  title: "BFC",
  tagline: "La fermentation à l'échelle d'une chambre, construite autour du projet.",
  sources: "ARGUMAT BFC V00 (S08, support historique, campagne 2013–2014) ; brochure « BFC EVO / BFE EVO » rev03 du Drive (consultée).",
  diagram: "bfc",
  visuals: [{ need: "bongard-bfc-evo-dc-fr-rev03.pdf (Drive) — chambre BFC EVO, bloc évaporateur, plan type", note: "Distinguer BFC EVO (chambre) et BFE EVO (étuve)." }],
  checks: [
    { s: "gap", t: "Climat chaud : l'ARGUMAT historique (V00) décrit un groupe standard jusqu'à 38 °C avec tropicalisé en option ; la brochure BFC EVO rev03 du Drive annonce un groupe tropicalisé de série, ambiance jusqu'à 43 °C. Utiliser la brochure EVO pour la gamme actuelle, et confirmer le groupe au projet." },
    { s: "gap", t: "Matériaux : le support historique décrit mousse polyuréthane, parements aluminium et film PVC alimentaire ; la brochure EVO indique intérieur inox 304 et extérieur PVC de série, inox intérieur + extérieur en option." },
    { s: "ok",  t: "Plage −7 °C à +35 °C (+40 °C avec option chaud), panneaux de 60 mm, modularité par pas de 200 mm, évaporateur fixable sur une des trois parois, porte réversible, SENSITIV'2 (20 phases) : retrouvés dans la brochure EVO." },
    { s: "tbc", t: "Revendication d'« exclusivité » de circulation d'air et formulations environnementales du support ancien : non reprises comme arguments actuels. Fluide de la brochure EVO : R448A ; disponibilité et exigences applicables à confirmer dans l'offre." },
  ],
  sections: [
    { id: "quoi", title: "1 · Ce que c'est", html: `<p>La BFC est une <strong>chambre de fermentation contrôlée</strong> configurée pour recevoir les produits et les chariots du fournil. Elle produit froid, chaleur et humidité pour piloter le procédé choisi. La gamme actuelle est <b>BFC EVO</b> ; <b>BFE EVO</b> est une chambre étuve pour la pousse directe.</p>` },
    { id: "fonct", title: "2 · Fonctionnement simple", html: `<table class="t"><thead><tr><th>Fonction</th><th>Explication</th></tr></thead><tbody>
      <tr><td>Production de froid</td><td>Un circuit frigorifique prélève la chaleur de l'enceinte via l'évaporateur.</td></tr>
      <tr><td>Production de chaleur</td><td>Une résistance permet la remontée en température selon le cycle.</td></tr>
      <tr><td>Humidité</td><td>Pulvérisation d'eau et régulation de l'hygrométrie.</td></tr>
      <tr><td>Circulation d'air</td><td>Ventilateur, gaines et déflecteurs répartissent le flux autour des chariots (flux d'air indirect).</td></tr>
      <tr><td>Commande</td><td>SENSITIV'2 (brochure EVO) ; le support historique décrit aussi Opticom et une version électromécanique.</td></tr></tbody></table>` },
    { id: "users", title: "3 · Utilisateurs et applications", html: `<p>Fournils de toutes tailles : pains (blancs, spéciaux, tradition), pâtes briochées, levées, pizza, viennoiserie. Procédés : pousse directe, pointage en masse (idéal PANEOTRAD), fermentation lente, fermentation contrôlée avec blocage, pré-poussé bloqué.</p><p class="callout"><b>BFC ou HERA ?</b> HERA : armoire à formats et configurations définis. BFC : chambre dont l'implantation et la capacité se construisent autour du projet. Le choix se fait sur volumes, nombre de chariots, cycles simultanés, accès et surface disponible.</p>` },
    { id: "carac", title: "4 · Caractéristiques essentielles (BFC EVO rev03)", html: `<table class="t"><tbody>
      <tr><td>Plage de température</td><td>−7 °C à +35 °C (+40 °C avec option chaud)</td></tr>
      <tr><td>Blocs évaporateur</td><td>800 (BFC EVO) et 1000 (BFE EVO) ; 1 ou 2 ventilateurs</td></tr>
      <tr><td>Kits d'utilisation</td><td>Standard (série) ; Paneotrad (option gratuite) ; Mixte Standard + Paneotrad (option payante, permet le blocage au froid)</td></tr>
      <tr><td>Panneaux</td><td>Sandwich lisses de 60 mm</td></tr>
      <tr><td>Modularité</td><td>Largeur et profondeur par pas de 200 mm ; hauteur de chambre 2 225 mm avec groupe à distance</td></tr>
      <tr><td>Groupe froid</td><td>Tropicalisé jusqu'à 8 m de série (ambiance 43 °C) ; renforcé de 8 à 20 m, silencieux, sans groupe ou centrale (options)</td></tr>
      <tr><td>Électricité</td><td>400 V triphasé + N + T, 50-60 Hz</td></tr></tbody></table><p class="note">Source : brochure rev03 du Drive, à confirmer sur le plan de la chambre commandée.</p>` },
    { id: "config", title: "5 · Configurations, accessoires, options", html: `<ul><li>Kits <b>Standard / Paneotrad / Mixte</b> selon le procédé ; pousse lente et pré-poussé bloqué : validation technique du dimensionnement.</li><li>Sol isolant inox + rampe d'accès ; protections extérieures aluminium ; tunnel avec rappel de température.</li><li>Évaporateur sur une des trois parois, utile sous plafond bas ; raccord possible sur centrale frigorifique.</li><li>Éclairage LED de série.</li></ul>` },
    { id: "mat", title: "6 · Matériaux et construction", html: `<ul><li>Panneaux de 60 mm ; <b>intérieur inox 304, extérieur PVC</b> de série (brochure EVO) ; inox intérieur + extérieur en option.</li><li>Évaporateur à cataphorèse ; rails de protection inox contre les chocs de chariots ; semelles qui évitent le contact des panneaux avec l'eau.</li><li><em>Expliquer la fonction de chaque élément sans transformer une option en standard.</em></li></ul>` },
    { id: "args", title: "7 · Atouts phares", html: `<table class="t args"><thead><tr><th>Atout</th><th>Explication technique</th><th>Intérêt client</th></tr></thead><tbody>
      <tr><td>Maîtrise du dessèchement</td><td>Ventilation adaptée régulée, faible écart thermique, apport d'humidité indépendant.</td><td>Limiter le croûtage, préserver la surface de la pâte.</td></tr>
      <tr><td>Homogénéité</td><td>Flux d'air indirect, déflecteur, sonde d'humidité.</td><td>Produits traités de façon plus uniforme.</td></tr>
      <tr><td>Remontée progressive</td><td>Régulation par paliers présentée dans le support.</td><td>Éviter une réchauffe trop brutale.</td></tr>
      <tr><td>Construction</td><td>Panneaux de 60 mm ; protections selon options.</td><td>Isolation, entretien, protection des parois au quotidien.</td></tr>
      <tr><td>Implantation</td><td>Modularité par pas de 200 mm, évaporateur sur trois parois.</td><td>Adapter chambre et flux à certaines contraintes du local.</td></tr></tbody></table>` },
    { id: "benef", title: "8 · Bénéfices concrets", html: `<ul><li>Une chambre dimensionnée sur vos chariots, pas sur un catalogue de formats.</li><li>Une pousse plus régulière en climat chaud, groupe confirmé au projet.</li><li>Une fermentation programmée qui limite le travail de nuit.</li></ul>` },
    { id: "diff", title: "9 · Différenciations documentées", html: `<p>Modularité, position verticale de l'évaporateur, distribution d'air et réchauffe progressive sont les arguments structurants. Le support ancien revendique une exclusivité de circulation d'air : <b>aucun benchmark actuel ne permet d'affirmer qu'elle est unique en 2026</b>. Dater toute revendication, demander une documentation récente, argumenter sur des caractéristiques démontrées et des engagements confirmés.</p>` },
    { id: "disc", title: "10 · Questions de découverte et relevé technique", html: `<ul><li>Procédé de fermentation, type de pâte, quantité par cycle ?</li><li>Nombre, dimensions et circulation des chariots ; ouvertures et dégagements ?</li><li>Températures de pâte à l'entrée, heure de sortie souhaitée ?</li><li>Hauteur sous plafond, nature du sol, possibilité d'isolation ?</li><li>Emplacement du groupe, ambiance, longueur de liaison, eau et évacuations ?</li></ul>` },
    { id: "obj", title: "11 · Questions et inquiétudes du client", html: `<div class="obj"><b>« C'est juste une chambre froide plus chère. »</b><p>Le besoin à comparer est le pilotage de la fermentation : chaleur, humidité, ventilation et programmation s'ajoutent au froid. Voyons le cycle dont vos produits ont besoin.</p></div>` },
    { id: "lim", title: "12 · Limites et vérifications", html: `<ul class="check"><li>Ne pas transférer d'une gamme à l'autre : groupe BFC historique (38 °C) ≠ BFC EVO (43 °C) ≠ HERA.</li><li>Pousse lente, pré-poussé bloqué : exigences spécifiques de dimensionnement ou de réglage.</li><li>Fluide, disponibilité et exigences applicables : dans l'offre technique actualisée.</li><li>La conception ne dispense pas du nettoyage, du contrôle d'écoulement, du suivi du froid et de la maintenance.</li></ul>` },
    { id: "syn", title: "13 · À retenir", html: `<ul><li>BFC = chambre construite autour du projet ; HERA = armoire à formats définis.</li><li>Froid + chaleur + humidité + ventilation.</li><li>Kits Standard / Paneotrad / Mixte.</li><li>Dater les revendications anciennes.</li></ul>` },
  ],
  pitch: "La BFC EVO est une chambre de fermentation dimensionnée sur vos chariots et votre local. Elle combine froid, chaleur, humidité et ventilation pour piloter la pousse. Nous choisissons le kit selon votre procédé et validons l'implantation lors du relevé technique.",
  summary: ["Chambre modulable par pas de 200 mm.", "Kits Standard / Paneotrad / Mixte.", "Panneaux 60 mm ; évaporateur sur trois parois.", "Ancien support : groupe 38 °C ; EVO : tropicalisé de série."],
  cards: [
    ["Quatre fonctions d'une BFC", "Froid, chaleur, humidité, circulation d'air, pilotées par la commande."],
    ["Que permet le kit Mixte ?", "Standard + Paneotrad : il permet notamment le blocage au froid."],
    ["Pourquoi le pas de 200 mm ?", "La chambre se module en largeur et profondeur pour s'adapter au local et au nombre de chariots."],
  ],
});
