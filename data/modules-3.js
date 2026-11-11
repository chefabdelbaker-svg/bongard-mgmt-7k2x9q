/* BONGARD Académie commerciale — contenu de formation (partie 3) */

/* ---------- 10 SOLEO EVO ---------- */
BG.modules.push({
  id: "soleo", num: "10", kind: "machine", family: "Cuisson",
  title: "SOLEO EVO",
  tagline: "Un four à soles électrique modulaire : bouche pâtissière ou boulangère, de 1 à 5 étages, de 0,25 à 1,98 m² par étage.",
  sources: "ARGUMAT SOLEO EVO v.10 (07/2024) — édition de référence ; ancienne édition 09/2018 (S09) remplacée ; présentation 02/2025 (S01 p. 11).",
  visuals: [{ need: "Brochure SOLEO EVO (PDF, Drive)", note: "Photos issues de l'argumentaire v.10 (produit, enfourneur, écran SENSITIV'2, pizza, nettoyage)." }],
  checks: [
    { s: "ok", t: "Cadence résolue par l'édition v.10 (07/2024) : 18 kg de pâte crue par m² et par heure en standard sur les modèles EVO, 15 kg sur les modèles SHOP. L'ambiguïté 15/18 de 2018 est levée." },
    { s: "ok", t: "Gamme, dimensions, hauteurs utiles « High / Low », élévateurs, étage pizza, étuves et isolation : repris de l'argumentaire v.10 (07/2024)." },
    { s: "tbc", t: "Nombre de plaques 460 × 660 par étage : lu sur les schémas de l'argumentaire (pas de tableau chiffré) ; confirmer sur offre." },
    { s: "tbc", t: "Isolation comparée à MIWE : valeurs données par Bongard dans son argumentaire ; à citer comme telles, avec la date." },
    { s: "tbc", t: "Benchmarks (MAP, Pavailler, Fringand, Sveba Dahlen, Salva, MIWE, Wiesheu) : axes de comparaison seulement, valeurs non vérifiées indépendamment, pas de classement repris." },
  ],
  sections: [
    { id: "quoi", title: "1 · Ce que c'est", html: `<p>SOLEO EVO est une <strong>gamme de fours à soles électriques modulaires</strong>, très étendue : de <b>1 à 5 étages</b>, de <b>0,25 à 1,98 m² par étage</b> selon le modèle, avec deux types de bouches (pâtissière ou boulangère). Son intérêt : adapter surface, étages, chargement et accessoires au laboratoire et à la diversité des produits.</p>` },
    { id: "fonct", title: "2 · Fonctionnement simple", html: `<p>Chaque étage est une enceinte de cuisson à sole, chauffée électriquement, avec son <b>générateur de buée</b> et un <b>compteur d'eau par étage</b> : la quantité de buée est dosée avec précision. La vapeur circule naturellement de l'arrière de l'enceinte vers la soupape de décompression à l'avant. Le four est piloté par un écran tactile SENSITIV'2 de 7 pouces (standard).</p>` },
    { id: "users", title: "3 · Utilisateurs et applications", html: `<ul><li>Pâtisserie et viennoiserie ;</li><li>pâte fraîche ou pâte froide (type Paneotrad), produits surgelés ou précuits crus ;</li><li>snacking : tartes salées, pizza (étage dédié selon modèle) ;</li><li><b>HORECA</b> : les M1 SHOP et M2 SHOP, compacts, conviennent aux pains, brioches et desserts qui accompagnent la carte d'un restaurant.</li></ul>` },
    { id: "carac", title: "4 · Caractéristiques essentielles", html: `<p><b>Bouche pâtissière</b></p><table class="t"><thead><tr><th>Modèle</th><th>Surface / étage</th><th>Largeur × profondeur utiles</th><th>Plaques 400×600</th><th>Baguettes 60 cm</th><th>Four L × P (bandeau)</th></tr></thead><tbody>
      <tr><td>M1 SHOP</td><td>0,25 m²</td><td>405 × 610 mm</td><td>1</td><td>4</td><td>936 × 856 mm</td></tr>
      <tr><td>M2 SHOP</td><td>0,50 m²</td><td>815 × 610 mm</td><td>2</td><td>8</td><td>1344 × 856 mm</td></tr>
      <tr><td>M4 SHOP</td><td>0,98 m²</td><td>803 × 1220 mm</td><td>4</td><td>16</td><td>1344 × 1471 mm</td></tr>
      <tr><td>M2 EVO</td><td>0,72 m²</td><td>935 × 770 mm</td><td>2</td><td>9</td><td>1510 × 1022 mm</td></tr>
      <tr><td>M3 EVO</td><td>0,94 m²</td><td>1400 × 670 mm</td><td>3</td><td>14</td><td>1978 × 921 mm</td></tr>
      <tr><td>M4 EVO</td><td>1,31 m²</td><td>1400 × 935 mm</td><td>4</td><td>17</td><td>1978 × 1186 mm</td></tr>
      <tr><td>M6 EVO</td><td>1,98 m²</td><td>1400 × 1415 mm</td><td>6</td><td>28</td><td>1978 × 1666 mm</td></tr></tbody></table>
      <p><b>Bouche boulangère</b> (profondeur sans / avec élévateur)</p><table class="t"><thead><tr><th>Modèle</th><th>Surface / étage</th><th>Baguettes 60 cm</th><th>Four L (mm)</th><th>Profondeur bandeau sans élévateur</th><th>Profondeur avec élévateur</th></tr></thead><tbody>
      <tr><td>M4 SHOP</td><td>0,98 m²</td><td>16</td><td>1344</td><td>1651 mm</td><td>3910 mm</td></tr>
      <tr><td>M2 EVO</td><td>0,72 m²</td><td>9</td><td>1510</td><td>1202 mm</td><td>3000 mm</td></tr>
      <tr><td>M3 EVO</td><td>0,94 m²</td><td>14</td><td>1978</td><td>1101 mm</td><td>2810 mm</td></tr>
      <tr><td>M4 EVO</td><td>1,31 m²</td><td>17</td><td>1978</td><td>1366 mm</td><td>3345 mm</td></tr>
      <tr><td>M6 EVO</td><td>1,98 m²</td><td>28</td><td>1978</td><td>1846 mm</td><td>4325 mm</td></tr></tbody></table>
      <p class="note">Avec hotte, la profondeur du four augmente (ex. M4 EVO pâtissière : 1601 mm ; bouche boulangère : 1781 mm sans élévateur). L'élévateur ajoute 200 mm en largeur. Le nombre de plaques 400 × 600 est celui des schémas de l'argumentaire ; pains sur sole, moules et pizzas : autre calcul. Surface totale = surface par étage × nombre d'étages, à relier au temps de cuisson.</p>
      <p><b>Hauteur utile</b> : bouche pâtissière 180 mm (étage « Low ») ou 240 mm (« High ») ; bouche boulangère 180 mm (« Low ») ou 225 mm (« High »). Hauteur totale de la voûte : 280 mm (« Low ») ou 340 mm (« High »).</p>` },
    { id: "config", title: "5 · Configurations, accessoires, options", html: `<ul><li><b>Deux types de bouches</b> : pâtissière (porte tirante) ou boulangère (porte poussante). C'est une distinction de construction, pas une interdiction de cuire pain et pâtisserie.</li><li><b>Étages « High » / « Low »</b> : jusqu'à 5 étages sur tous les modèles (4 sur le M1 SHOP). On choisit étage par étage la hauteur utile : par exemple 1 étage « High » pour des pièces hautes, les autres « Low ». Les modèles SHOP à bouche pâtissière n'ont que des étages « Low ».</li><li><b>Chargement bouche pâtissière</b> : enfourneur à bande de type barre d'angle, posé entre l'étage et la porte ; il charge, le défournement se fait à la pelle. L'enfourneur manuel est toujours utilisé en demi-largeur d'étage ; le M2 SHOP EVO est toujours chargé en pleine largeur.</li><li><b>Chargement bouche boulangère</b> : conçue pour un <b>élévateur intégré</b>. La vitre s'ouvre et se referme au passage du chargeur, sans geste du boulanger sur la poignée ; il permet d'enfourner <i>et</i> de défourner ; le chargeur à tiges s'accroche à des butées (fixes sur le four ou le support, ou repliables sur le support).</li><li><b>Élévateur pleine largeur</b> : M4 SHOP, M2 EVO, M3 EVO, M4 EVO, M6 EVO ; <b>demi-largeur</b> : M3 EVO et M4 EVO.</li><li><b>Étage pizza « Pizza Pratico »</b> (M2 SHOP et M2) : totalement indépendant, 400 °C, 3,5 kW max., enceinte 63 × 43 × 11,5 cm, 2 pizzas Ø 30 cm.</li><li><b>Étage pizza EVO</b> (M2 bouche boulangère) : commande SENSITIV'2 centralisée ou ERGOCOM par étage, 400 °C, 7,8 kW max., enceinte 94 × 63 × 11,5 cm, 6 pizzas Ø 30 cm ou 2 pizzas Ø 45 cm.</li><li><b>Étuves (hauteur 975 mm)</b> : M2 SHOP, M2, M3, M4, M6 EVO ; 6 à 24 plaques 400×600 / 460×660, espacement 75 mm, 1240 W, température ambiante à 50 °C, hygrostat électromécanique ; poids de 106 à 176 kg selon modèle.</li></ul>` },
    { id: "ctrl", title: "6 · Commande SENSITIV'2", html: `<p>Standard sur toute la gamme : écran tactile 7 pouces qui pilote tous les étages. Il offre :</p><ul><li>cuisson en mode manuel ou en mode recette (température, durée, injection de buée, fonctionnement des ouïes OURA) ;</li><li>départs différés programmables par étage et par jour ;</li><li>droits d'accès selon le profil utilisateur (modifier ou non les recettes, accéder aux réglages…) ;</li><li><b>Bongard Connect</b> : accès à distance pour la maintenance par les techniciens ;</li><li>personnalisation du four et fonction « Économie d'énergie » ; statistiques de production et d'énergie.</li></ul><p>Option : <b>une commande SENSITIV'2 par étage</b>. Moins de possibilités que la commande centralisée : sur les fours à 4 et 5 étages, la commande du 1<sup>er</sup> étage est très basse ; les recettes, les départs différés et les profils doivent être recréés sur chaque commande. Avec ERGOCOM, la buée reste gérée en secondes ; avec SENSITIV'2, en millilitres.</p>` },
    { id: "mat", title: "7 · Matériaux et construction", html: `<p>Isolation épaisse, étanchéité de porte et fonction d'économie d'énergie. Épaisseurs d'isolation annoncées par Bongard (SOLEO EVO / MIWE) : côté gauche 90 / 80 mm, côté droit 80 / 60 mm, caisson technique 130 / 60 mm, bandeau 90 / 50 mm. <b>Sole « lisse » (brevet « Smooth deck »)</b> et vitre démontable sans outil sur les étages à bouche boulangère pour faciliter le nettoyage. Poignée et commande du même côté. Pas de détail de matériaux de sole ou de parois au-delà : demander la fiche technique.</p>` },
    { id: "args", title: "8 · Atouts phares", html: `<table class="t args"><thead><tr><th>Atout</th><th>Caractéristique</th><th>Bénéfice client</th></tr></thead><tbody>
      <tr><td>Polyvalence</td><td>Pâtisserie, viennoiserie, pâte fraîche ou froide, surgelé ou précuit cru, snacking (tartes salées, pizza).</td><td>Une seule gamme pour des productions variées, avec recettes et configuration appropriées.</td></tr>
      <tr><td>Performance</td><td>18 kg de pâte crue par m² et par heure en standard sur les modèles EVO ; 15 kg sur les modèles SHOP.</td><td>Un four compact ET performant ; cadence à toujours lire avec son unité.</td></tr>
      <tr><td>Ergonomie</td><td>Élévateur intégré (bouche boulangère), plaques côte à côte, poignée et commande du même côté.</td><td>Moins de manutention devant le four, chargement et défournement facilités.</td></tr>
      <tr><td>Nettoyage</td><td>Sole lisse (brevet), vitre démontable sans outil sur bouche boulangère.</td><td>Entretien plus simple.</td></tr>
      <tr><td>Compacité</td><td>M1 SHOP et M2 SHOP adaptés au HORECA.</td><td>Pains, brioches et desserts du restaurant, sans laboratoire dédié.</td></tr>
      <tr><td>Économie</td><td>Excellente étanchéité de porte, fonction « Économie d'énergie », isolation plus épaisse que la concurrence citée.</td><td>Limiter pertes et chauffes inutiles selon l'organisation.</td></tr>
      <tr><td>Modularité</td><td>1 à 5 étages, « High » / « Low », commande centralisée ou par étage.</td><td>Dimensionner le four sur les produits et la place disponible.</td></tr></tbody></table>` },
    { id: "benef", title: "9 · Bénéfices concrets", html: `<ul><li>Un poste de cuisson dimensionné sur vos produits et votre place.</li><li>Des cuissons simultanées avec des paramètres différents, par étage.</li><li>Une buée dosée en millilitres, reproductible d'une fournée à l'autre.</li><li>Un chargement et un nettoyage plus simples.</li></ul><p class="ex"><b>Lire la cadence avec son unité.</b> « 18 kg de pâte crue par m² de cuisson et par heure » n'est ni une capacité par plaque, ni une garantie pour tous les produits. Nombre d'étages, pâte, poids, cuisson, chargement et temps de reprise déterminent le débit.</p>` },
    { id: "diff", title: "10 · Différenciations documentées", html: `<p>Benchmark de l'argumentaire v.10 (07/2024), à citer comme tel et à vérifier avant un classement :</p><ul><li><b>M2 / M2 SHOP</b> : surface de cuisson égale à celle d'un four Modelec 900 (Fringand), pour un four <b>30 cm moins profond et 7 cm moins large</b> ; égale à celle du MAP E50, pour <b>55 cm de profondeur en moins</b> et seulement 18 cm de largeur en plus.</li><li><b>M3 EVO</b> : le four le plus court du marché sans être le plus large.</li><li><b>M4 EVO</b> : seuls Fringand et SOLEO EVO M4 acceptent les plaques export 460 × 660 (le Modelec comparé est 20 cm plus large et 35 cm plus profond).</li><li><b>M6 EVO</b> : surface utile de 1,98 m² par étage avec 28 baguettes 60 cm.</li><li><b>Isolation</b> : plus épaisse que MIWE sur les quatre zones comparées (voir rubrique 7).</li></ul><p>La compacité se juge avec la hotte, l'enfourneur / l'élévateur et les dégagements.</p>` },
    { id: "disc", title: "11 · Questions de découverte", html: `<ul><li>Produits, poids de pièces, nombre de fournées au créneau de pointe ?</li><li>Cuisson sur sole, plaques ou moules ? Formats utilisés (400 × 600, 460 × 660 export) ?</li><li>Besoin de buée, hauteur utile (étage « High » ?), produits pizza / snacking ?</li><li>Bouche pâtissière ou boulangère ? Élévateur ? Place derrière le four pour la profondeur avec élévateur ?</li><li>Cuissons simultanées, paramètres différents à gérer ? Commande centralisée ou par étage ?</li><li>Puissance disponible, tension et fréquence, eau, extraction, accès ?</li></ul>` },
    { id: "obj", title: "12 · Questions et inquiétudes du client", html: `<div class="obj"><b>« Je rajouterai un étage plus tard. »</b><p>L'évolutivité se prépare : raccordement, hauteur, puissance et type de commande (centralisée ou par étage). Dans l'ancien support 2018, l'étage ajouté avait sa propre commande ; faisons confirmer le principe pour la version vendue.</p></div><div class="obj"><b>« Il suffit de mesurer la largeur du four. »</b><p>L'implantation inclut la profondeur, la hotte, l'élévateur (profondeur totale jusqu'à plus de 4 m sur le M6 EVO), les accès techniques et les raccordements. Surface utile de cuisson et surface occupée sont deux notions différentes.</p></div><div class="obj"><b>« Une commande par étage, c'est plus simple. »</b><p>C'est une option : mais recettes, départs différés et profils sont à recréer sur chaque commande, et la commande du 1<sup>er</sup> étage est très basse sur 4–5 étages. La commande centralisée offre plus de possibilités.</p></div>` },
    { id: "lim", title: "13 · Limites et vérifications", html: `<ul class="check"><li>Édition v.10 (07/2024) : toute performance se rapporte à cette édition ; vérifier toute évolution.</li><li>Les valeurs de benchmark sont celles de Bongard, non vérifiées indépendamment.</li><li>Ajout d'étage : validation de configuration et d'alimentation.</li><li>Le M1 SHOP est limité à 4 étages ; les modèles SHOP à bouche pâtissière n'ont pas d'étage « High ».</li></ul>` },
    { id: "syn", title: "14 · À retenir", html: `<ul><li>Four à soles électrique modulaire, 1 à 5 étages, 0,25 à 1,98 m² par étage.</li><li>Bouche pâtissière (tirante) ≠ boulangère (poussante, élévateur intégré).</li><li>18 kg/m²/h (EVO) ; 15 kg/m²/h (SHOP) : toujours avec l'unité.</li><li>SENSITIV'2 : buée en millilitres, recettes, départs différés, Bongard Connect.</li><li>Surface de cuisson ≠ surface occupée (élévateur compris).</li></ul>` },
  ],
  pitch: "SOLEO EVO est un four à soles électrique modulaire, de 1 à 5 étages. Nous choisissons la bouche, la surface, la hauteur des étages, le chargement et la commande selon vos produits et votre place, avec une buée dosée au millilitre et un nettoyage simplifié.",
  summary: ["De M1 SHOP à M6 EVO : 0,25 à 1,98 m² par étage.", "Bouche pâtissière (tirante) ≠ boulangère (poussante, élévateur).", "18 kg/m²/h (EVO), 15 (SHOP) : toujours avec l'unité.", "Étages « High » / « Low » à choisir un par un."],
  cards: [
    ["Que désigne « 18 kg/m²/h » ?", "Des kg de pâte crue par m² de cuisson et par heure : standard sur les EVO (15 sur les SHOP). Ni capacité par plaque, ni garantie générale."],
    ["Deux types de bouches", "Pâtissière à porte tirante (enfourneur à bande), boulangère à porte poussante avec élévateur intégré."],
    ["Étage « High » ou « Low »", "Hauteur utile 180 mm (Low) ou 225–240 mm (High) : choisie étage par étage, jusqu'à 5 étages."],
    ["Buée SENSITIV'2 vs ERGOCOM", "SENSITIV'2 : dosage en millilitres avec compteur par étage ; ERGOCOM : en secondes."],
  ],
});

/* ---------- 11 ZEPHYR ---------- */
BG.modules.push({
  id: "zephyr", num: "11", kind: "machine", family: "Cuisson",
  title: "ZEPHYR",
  tagline: "Le refroidissement fait partie de la production.",
  sources: "ARGUMAT ZEPHYR 09/2018 (S11). Aucun comparatif de marques concurrentes fourni.",
  diagram: "zephyr",
  visuals: [{ need: "Brochure ZEPHYR (PDF, Drive) — versions 2 chariots, 4 chariots, air ambiant + air froid", note: "Aucun visuel ZEPHYR exploitable dans les documents transmis." }],
  checks: [
    { s: "tbc", t: "Source technique de septembre 2018 : versions et capacités exactes à confirmer au projet." },
    { s: "tbc", t: "Essai fabricant (baguettes) : environ 40 min pour atteindre 26 °C à cœur en refroidissement combiné, contre 1 h 30 à 2 h dans un laboratoire à 20 °C. Résultat d'un essai, pas une durée garantie." },
    { s: "ok",  t: "Aucune comparaison de marques de tunnels dans le support : ne pas affirmer de supériorité sur un concurrent." },
  ],
  sections: [
    { id: "quoi", title: "1 · Ce que c'est", html: `<p>ZEPHYR est un <strong>système de ressuage / refroidissement du pain</strong> après cuisson : il reçoit les chariots au lieu de les laisser dispersés dans le laboratoire. Le ressuage, c'est l'évacuation de chaleur et d'une partie de l'humidité du pain.</p>` },
    { id: "fonct", title: "2 · Fonctionnement simple", html: `<table class="t"><thead><tr><th>Principe</th><th>Fonctionnement</th><th>Quand l'étudier</th></tr></thead><tbody>
      <tr><td>Air ambiant</td><td>Ventilation à travers les chariots ; extraction d'air chaud et humide.</td><td>Conditions du local et délais compatibles.</td></tr>
      <tr><td>Air ambiant + air froid</td><td>Première zone ventilée, puis zone réfrigérée, séparées par un rideau à lanières.</td><td>Recommandé notamment pour les climats chauds ou humides.</td></tr></tbody></table>` },
    { id: "users", title: "3 · Utilisateurs et applications", html: `<p>Boulangeries et ateliers qui doivent refroidir le pain avant tranchage, emballage ou surgélation, ou libérer des chariots de cuisson. Le système doit être intégré à la ventilation du site.</p>` },
    { id: "carac", title: "4 · Caractéristiques essentielles", html: `<ul><li>Versions à air ambiant pour <b>deux ou quatre chariots</b>.</li><li>Combinaison air ambiant / air froid : <b>deux zones</b>, capacités et implantation à préciser. Ne pas confondre le nombre de chariots d'une zone et la capacité totale du système.</li><li>Commandes électromécaniques ; section réfrigérée avec affichage de température ; circulation d'air répartie sur la hauteur de l'enceinte.</li></ul>` },
    { id: "config", title: "5 · Configurations, accessoires, options", html: `<p>Version air ambiant (2 ou 4 chariots) ou combinée air ambiant + air froid. Options et dimensions : selon la documentation du projet.</p>` },
    { id: "mat", title: "6 · Matériaux et construction", html: `<p>Intérieur inox, rails de protection contre les chocs des chariots, panneaux de 60 mm.</p>` },
    { id: "args", title: "7 · Atouts phares", html: `<table class="t args"><thead><tr><th>Atout</th><th>Bénéfice à vérifier chez le client</th></tr></thead><tbody>
      <tr><td>Refroidissement organisé</td><td>Réduire l'attente avant l'opération suivante, stabiliser le flux de sortie du four.</td></tr>
      <tr><td>Rotation des chariots</td><td>Un refroidissement plus court peut libérer plus vite les supports de cuisson.</td></tr>
      <tr><td>Circulation</td><td>Regrouper le ressuage plutôt que laisser les chariots encombrer le laboratoire.</td></tr>
      <tr><td>Conditionnement</td><td>Réduire le risque d'ensacher un pain trop chaud et de provoquer de la condensation.</td></tr>
      <tr><td>Tranchage</td><td>Préparer un produit plus adapté au tranchage que du pain encore chaud.</td></tr>
      <tr><td>Avant surgélation</td><td>Étape intermédiaire pour les produits concernés, sans remplacer le surgélateur.</td></tr></tbody></table>` },
    { id: "benef", title: "8 · Bénéfices concrets", html: `<ul><li>Moins d'attente avant tranchage ou emballage.</li><li>Moins de chariots qui encombrent le laboratoire.</li><li>Moins de risque de condensation à l'emballage.</li></ul>` },
    { id: "diff", title: "9 · Différenciations documentées", html: `<p>La comparaison documentée est celle d'un <b>refroidissement organisé</b> avec le <b>refroidissement libre</b> à l'air du laboratoire. Le support ne prouve pas une supériorité sur une autre marque de tunnel. Pour comparer : charge, température à cœur, temps, air extrait, énergie, encombrement, nettoyage, intégration au flux.</p>` },
    { id: "disc", title: "10 · Questions de découverte", html: `<ul><li>Produits ? Chariots par heure ?</li><li>Température du local ?</li><li>Délai avant livraison ou emballage ? Problèmes de condensation ?</li></ul>` },
    { id: "obj", title: "11 · Questions et inquiétudes du client", html: `<div class="obj"><b>« Le pain refroidit déjà tout seul. »</b><p>Mesurons le temps, la place occupée et l'attente avant tranchage ou emballage : l'intérêt dépend de ces contraintes.</p></div>` },
    { id: "lim", title: "12 · Limites et vérifications", html: `<ul class="check"><li>Ne remplace pas une étude de climatisation et d'extraction de chaleur du laboratoire.</li><li>Ne remplace pas un surgélateur.</li><li>Résultat d'essai ≠ durée garantie : autre pain, chargement ou climat, autre résultat.</li></ul>` },
    { id: "syn", title: "13 · À retenir", html: `<ul><li>Le ressuage commence après cuisson.</li><li>Deux principes : air ambiant, ou air ambiant + air froid.</li><li>Capacité d'une zone ≠ capacité totale.</li><li>Comparer à l'air libre, pas à un concurrent.</li></ul>` },
  ],
  pitch: "ZEPHYR structure la sortie du four. Il permet de travailler le temps de refroidissement et la rotation des chariots pour mieux alimenter le tranchage, l'emballage ou la surgélation.",
  summary: ["Ressuage : chaleur et humidité évacuées après cuisson.", "Air ambiant, ou air ambiant + air froid.", "Essai 40 min (26 °C à cœur) : un essai, pas une garantie.", "Aucune supériorité sur un concurrent documentée."],
  cards: [
    ["Ressuage : définition", "Évacuation de chaleur et d'une partie de l'humidité du pain après cuisson."],
    ["Quand recommander air ambiant + air froid ?", "Notamment pour les climats chauds ou humides, d'après le support."],
    ["Peut-on dire que ZEPHYR surpasse toutes les marques ?", "Non : le support ne compare que refroidissement organisé et refroidissement libre."],
  ],
});

/* ---------- 12 PACK 100 ---------- */
BG.modules.push({
  id: "pack100", num: "12", kind: "machine", family: "Laboratoire complet",
  title: "PACK 100",
  tagline: "Un exemple de laboratoire de 100 m² organisé autour d'un objectif de production.",
  sources: "PACK 100 REV03 09/2023 (S13).",
  diagram: "pack100",
  visuals: [{ need: "Brochure PACK 100 (PDF, Drive) — plan d'implantation 100 m²", note: "Le plan d'origine est le visuel de référence ; aucun plan exploitable n'a été extrait." }],
  checks: [
    { s: "gap", t: "SÉRIE 4 – 8.64 : la brochure cite 380 baguettes/h par four avec chariot 19 niveaux ; un CSV du Drive évoque 1 440 × 1 880 mm au sol. À confirmer avant toute reprise." },
    { s: "tbc", t: "Les 100 m² du plan ne dispensent pas de vérifier annexes, réseaux, réserves et exigences du site." },
    { s: "tbc", t: "Pas un laboratoire pâtisserie complet par défaut. 30 m² ou usine industrielle : étude dédiée." },
  ],
  sections: [
    { id: "quoi", title: "1 · Ce que c'est", html: `<p>Le PACK 100 illustre la capacité de Bongard à <strong>relier les équipements autour d'un objectif de production</strong>, plutôt qu'à juxtaposer des machines. C'est un exemple fabricant sur 100 m², pas un plan applicable à tout local.</p>` },
    { id: "fonct", title: "2 · Fonctionnement simple", html: `<p>Le pétrin alimente la division, le repos et le façonnage. La fermentation prépare les fournées ; les fours transforment ce débit en produits cuits ; le ressuage libère les chariots et prépare la sortie. Les équipements d'eau et les accessoires soutiennent la chaîne.</p>` },
    { id: "users", title: "3 · Utilisateurs et applications", html: `<p>Un projet de boulangerie dont l'objectif de production est clair. Le pack boulangerie n'est <b>pas</b> un laboratoire pâtisserie complet par défaut.</p>` },
    { id: "carac", title: "4 · Caractéristiques essentielles", html: `<table class="t"><thead><tr><th>Poste</th><th>Équipement cité</th><th>Fonction</th></tr></thead><tbody>
      <tr><td>Pétrissage</td><td>SPIRAL TH 300</td><td>Pétrissage et transfert de la pâte.</td></tr>
      <tr><td>Eau</td><td>DOMIX 30 et FONTO 180</td><td>Dosage de l'eau et refroidissement ; FONTO annoncé à 180 litres/heure.</td></tr>
      <tr><td>Division</td><td>DVP</td><td>Division volumétrique à piston.</td></tr>
      <tr><td>Repos</td><td>MEDIO F.A.</td><td>Repos intermédiaire statique automatique avec chargement.</td></tr>
      <tr><td>Façonnage</td><td>MAJOR AUTO + TE</td><td>Façonnage vertical et tapis de sortie.</td></tr>
      <tr><td>Fermentation</td><td>BFC</td><td>Fermentation contrôlée à chariots.</td></tr>
      <tr><td>Cuisson</td><td>SÉRIE 4 – 8.64</td><td>Four rotatif ; 380 baguettes/h par four avec chariot 19 niveaux dans le pack.</td></tr>
      <tr><td>Après cuisson</td><td>ZEPHYR</td><td>Ressuage à air ambiant et froid.</td></tr>
      <tr><td>Compléments</td><td>Tables, chariots, bacs, balances, toiles…</td><td>Supports indispensables au fonctionnement.</td></tr></tbody></table>` },
    { id: "config", title: "5 · Configurations, accessoires, options", html: `<p>Objectif annoncé : plus de <b>400 kg de pâte/heure</b>, ou <b>720 à 1 140 baguettes/heure</b>. Ces références correspondent à <em>son</em> scénario d'équipement et d'implantation : ce ne sont pas des équivalences universelles entre kg de pâte et baguettes, ni la capacité d'un seul four.</p>` },
    { id: "mat", title: "6 · Matériaux et construction", html: `<p>Sans objet pour ce module : voir les modules de chaque équipement.</p>` },
    { id: "args", title: "7 · Atouts phares", html: `<table class="t args"><thead><tr><th>Point à vérifier</th><th>Pourquoi il change le projet</th></tr></thead><tbody>
      <tr><td>Produit et grammage</td><td>La cadence en pièces dépend du poids, de la forme, des paramètres de fabrication.</td></tr>
      <tr><td>Débit instantané / quotidien</td><td>Un objectif au pic n'est pas une moyenne sur la journée.</td></tr>
      <tr><td>Nombre de fours et temps de cuisson</td><td>La cadence totale dépend des cycles, chargements et reprises.</td></tr>
      <tr><td>Fermentation et froid</td><td>Le stock intermédiaire doit absorber les flux et les durées de cycle.</td></tr>
      <tr><td>Chariots et plaques</td><td>Immobilisés pendant cuisson, fermentation, refroidissement, manutention.</td></tr>
      <tr><td>Équipe et circulation</td><td>Les déplacements, postes simultanés et accès conditionnent le débit réalisable.</td></tr>
      <tr><td>Surface réelle</td><td>Les 100 m² ne dispensent pas de vérifier annexes, réseaux, réserves.</td></tr></tbody></table>` },
    { id: "benef", title: "8 · Bénéfices concrets", html: `<ul><li>Une logique de laboratoire construite à partir de vos produits, de votre volume et de votre local.</li><li>Un interlocuteur qui raisonne sur le flux complet, pas machine par machine.</li></ul>` },
    { id: "diff", title: "9 · Différenciations documentées", html: `<p>Pas de comparaison concurrentielle dans le support PACK 100. Sa valeur est <b>pédagogique</b> : montrer le dimensionnement global et le poste limitant.</p>` },
    { id: "disc", title: "10 · Questions de découverte", html: `<ul><li>Produits, grammages, volume au pic et sur la journée ?</li><li>Local : surface réelle, annexes, réseaux, réserves ?</li><li>Viennoiseries, entremets, crèmes, surgelés à prévoir ?</li><li>Équipe et circulation ?</li></ul>` },
    { id: "obj", title: "11 · Questions et inquiétudes du client", html: `<div class="obj"><b>« Mon local fait 30 m². »</b><p>Le pack ne démontre pas ce cas : une étude dédiée est nécessaire.</p></div><div class="obj"><b>« 400 kg/h, c'est ce que j'aurai ? »</b><p>C'est le résultat du scénario du pack. Votre débit dépend de vos produits, fours, cycles et équipe.</p></div>` },
    { id: "lim", title: "12 · Limites et vérifications", html: `<ul class="check"><li>Exemple fabricant, pas plan applicable à tout local.</li><li>380 baguettes/h : par four, avec chariot 19 niveaux dans le pack.</li><li>Usine industrielle ou 30 m² : étude dédiée.</li></ul>` },
    { id: "syn", title: "13 · À retenir", html: `<ul><li>Un laboratoire, pas une juxtaposition de machines.</li><li>Chaque chiffre vient avec son scénario.</li><li>Le poste limitant décide du débit.</li></ul>` },
  ],
  pitch: "Le PACK 100 est un exemple de laboratoire organisé autour d'un objectif de production. Nous utilisons cette logique pour construire votre projet à partir de vos produits, de votre volume et de votre local.",
  summary: ["100 m², SPIRAL TH 300 → DVP → MEDIO → MAJOR → BFC → SÉRIE 4 → ZEPHYR.", ">400 kg/h ou 720–1 140 baguettes/h : dans son scénario.", "Pas un labo pâtisserie complet par défaut.", "30 m² ou usine : étude dédiée."],
  cards: [
    ["Que démontre le PACK 100 ?", "La logique de dimensionnement d'une chaîne complète autour d'un objectif de production."],
    ["Pourquoi ses chiffres ne se transposent pas ?", "Ils correspondent à son scénario d'équipement et d'implantation, pas à tout atelier."],
  ],
});

/* ---------- 13 REPÈRES DE GAMME ---------- */
BG.modules.push({
  id: "reperes", num: "13", kind: "intro", family: "Gamme",
  title: "Repères de gamme",
  tagline: "Situer les autres équipements avant de préconiser.",
  sources: "Présentation française 02/2025 (S01 pp. 4–12). Pas de fiche technique détaillée autonome dans le corpus.",
  visuals: [],
  checks: [{ s: "tbc", t: "Capacités et options détaillées de ces équipements : exiger la documentation dédiée avant préconisation. Les brochures Orion, Série 3/4, Krystal, Kronos, Major, RP, Saturne et Spiral du Drive peuvent enrichir ce module." }],
  sections: [
    { id: "prep", title: "Préparer, diviser, façonner", html: `<table class="t"><thead><tr><th>Équipement</th><th>Fonction et intérêt à retenir</th></tr></thead><tbody>
      <tr><td>CALYPSO</td><td>Pétrin à bras plongeants : travail délicat et limitation de l'échauffement mis en avant.</td></tr>
      <tr><td>DIVAIN</td><td>Appareil à levain liquide : mélange, fermentation et conservation dans un procédé défini.</td></tr>
      <tr><td>SATURNE EVO</td><td>Batteur-mélangeur : préparations pâtissières et mélanges selon outils et capacité.</td></tr>
      <tr><td>SPIRAL A</td><td>Pétrin à spirale à cuve amovible : organisation de la pâte et des cuves à étudier.</td></tr>
      <tr><td>L / FONTO</td><td>Refroidissement de l'eau : maîtrise de la température de pâte.</td></tr>
      <tr><td>MERCURE / CONCORDE / DIVIMACH</td><td>Familles de diviseuses hydrauliques : comparer fonctions, charges, commandes.</td></tr>
      <tr><td>ERIS</td><td>Diviseuse-bouleuse : portionnement et boulage associés.</td></tr>
      <tr><td>RP / MAJOR</td><td>Repos des pâtons puis façonnage vertical, selon procédé.</td></tr>
      <tr><td>PANEODUST</td><td>Farineur motorisé : répartition du farinage dans le procédé concerné.</td></tr>
      <tr><td>VENUS LINE</td><td>Division volumétrique de pâte fermentée et mise en bac automatique.</td></tr></tbody></table>
      <p class="callout">À « il me faut un pétrin » : préciser produit, poids des lots, échauffement admissible, transfert. À « une machine pour les baguettes » : identifier les étapes (diviser, bouler, détendre, façonner) ou un autre procédé. Le nom d'une famille ne suffit pas à établir un devis.</p>` },
    { id: "froid", title: "Froid, cuisson et services", html: `<table class="t"><thead><tr><th>Équipement / service</th><th>Rôle et point de distinction</th></tr></thead><tbody>
      <tr><td>KRYO+</td><td>Combiné refroidissement, surgélation et conservation ; évolutivité modulaire selon modèle.</td></tr>
      <tr><td>KRONOS-P / BSC</td><td>Refroidissement rapide et surgélation : plaques ou chariots selon gamme.</td></tr>
      <tr><td>ATHENA / BOREAL / KRYO</td><td>Blocage ou conservation : distinguer stockage et cycle de fermentation.</td></tr>
      <tr><td>BFC EVO / BFE EVO</td><td>Chambres de fermentation ou d'étuvage.</td></tr>
      <tr><td>ORION EVO</td><td>Four à soles électrique ; recettes, énergie, accessoires selon configuration.</td></tr>
      <tr><td>CERVAP</td><td>Four à tubes vapeur annulaires ; inertie et mode de chauffe décrits dans la présentation.</td></tr>
      <tr><td>SÉRIE 3 / SÉRIE 4</td><td>Fours à chariots rotatifs : relier chariot, gamme de produits et débit.</td></tr>
      <tr><td>MIZAR / KRYSTAL+ / PREMIO / ALCOR</td><td>Cuisson ventilée à chariot ou plaques ; ALCOR : four ventilé mixte.</td></tr>
      <tr><td>LIFT'EVO</td><td>Assistance à l'enfournement / défournement sur configurations compatibles.</td></tr>
      <tr><td>Bongard Connect</td><td>Pilotage et suivi à distance des équipements compatibles : vérifier modèle, commande, service, disponibilité locale.</td></tr></tbody></table>` },
    { id: "services", title: "Trois expertises au service du projet", html: `<p><b>Commerciale</b> : recommandation et implantation selon le process. <b>Métier</b> : essais et formation avec les experts. <b>Technique</b> : installation, maintenance et pièces selon l'offre.</p><p class="note">Contenu, calendrier, coût, conditions et interlocuteurs : à préciser avec le distributeur local. Service 7 j/7, concessions et financement évoqués pour la France : ne pas en faire des promesses locales sans confirmation.</p>` },
  ],
  pitch: "", summary: ["Savoir situer, ne pas préconiser sans documentation.", "Stockage au froid ≠ cycle de fermentation.", "Services : à formaliser dans l'offre locale."], cards: [
    ["Stockage au froid vs fermentation", "ATHENA / BOREAL / KRYO bloquent ou conservent ; HERA / BFC pilotent un cycle de fermentation."],
    ["Que fait LIFT'EVO ?", "Assiste l'enfournement / défournement sur configurations compatibles."],
  ],
});

/* ---------- 14 MÉTHODE COMMERCIALE ---------- */
BG.modules.push({
  id: "methode", num: "14", kind: "intro", family: "Méthode",
  title: "Méthode commerciale",
  tagline: "Passer de la caractéristique à la valeur.",
  sources: "Synthèse pédagogique fondée sur l'ensemble du corpus.",
  visuals: [],
  checks: [],
  sections: [
    { id: "etapes", title: "Six étapes", html: `<table class="t"><thead><tr><th>Étape</th><th>Action du commercial</th></tr></thead><tbody>
      <tr><td>1. Comprendre</td><td>Faire décrire produits, volumes, horaires, équipe, contraintes, objectifs.</td></tr>
      <tr><td>2. Observer</td><td>Identifier le poste limitant et le coût du problème : attente, irrégularité, manutention, capacité.</td></tr>
      <tr><td>3. Recommander</td><td>Choisir une configuration cohérente avec le procédé et les autres équipements.</td></tr>
      <tr><td>4. Démontrer</td><td>Relier la fonction technique au bénéfice utile pour ce client ; proposer un essai si nécessaire.</td></tr>
      <tr><td>5. Chiffrer</td><td>Comparer des périmètres identiques : options, accessoires, livraison, installation, formation, service.</td></tr>
      <tr><td>6. Confirmer</td><td>Faire valider références, réseaux, implantation, capacités, prestations, conditions dans l'offre.</td></tr></tbody></table>` },
    { id: "exemples", title: "Trois exemples de bonne présentation", html: `<div class="obj"><b>RHEA</b><p>« Vous constatez des variations d'épaisseur. Les programmes permettent de reproduire les réglages validés ; nous les testerons avec votre pâte et votre équipe. »</p></div><div class="obj"><b>HERA</b><p>« Vous souhaitez une fournée prête à 7 heures. Construisons le cycle avec votre recette, votre charge et votre heure de mise au froid. »</p></div><div class="obj"><b>SPIRAL TL</b><p>« Votre équipe vide plusieurs lots lourds sur table. Le basculement peut réduire cette manutention ; vérifions le transfert et le temps de vidage. »</p></div><p class="note">Exemples de formulations, sans engagement de performance.</p>` },
    { id: "loyal", title: "Comparer loyalement", html: `<p>Nommer les modèles et les configurations, dater les sources, garder les avantages comme les limites de chaque solution. Un prix sans périmètre, une puissance sans consommation mesurée ou une cadence sans conditions donnent une comparaison incomplète.</p><p class="callout">La bonne vente technique commence par un besoin compris et se termine par une configuration démontrable.</p>` },
    { id: "reflexes", title: "Les réflexes à acquérir", html: `<ul><li>Décrire chaque équipement en langage simple.</li><li>Relier trois caractéristiques à trois bénéfices précis.</li><li>Distinguer standard, option, configuration à confirmer.</li><li>Connaître les limites des benchmarks historiques.</li><li>Demander une vérification plutôt qu'inventer un chiffre ou une promesse.</li></ul>` },
  ],
  pitch: "", summary: ["Comprendre → observer → recommander → démontrer → chiffrer → confirmer.", "Une cadence sans conditions n'est pas un argument."], cards: [
    ["Les six étapes", "Comprendre, observer, recommander, démontrer, chiffrer, confirmer."],
    ["Comparer loyalement, c'est…", "Nommer modèles et configurations, dater les sources, garder avantages et limites."],
  ],
});
