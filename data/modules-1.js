/* BONGARD Académie commerciale — contenu de formation (partie 1)
   Aucune réponse d'évaluation ne figure dans ce fichier. */
window.BG = window.BG || { modules: [] };

BG.meta = {
  edition: "V2 — 11 novembre 2026",
  disclaimer: "Support pédagogique indépendant, établi à partir de documents Bongard transmis. Il ne remplace ni une offre technique actualisée, ni une notice d'utilisation.",
};

BG.status = {
  ok:  { label: "Confirmé",       hint: "Retrouvé dans une brochure d'origine consultée" },
  gap: { label: "Écart",          hint: "Deux documents ne disent pas la même chose" },
  tbc: { label: "À confirmer",    hint: "Non établi ou non transférable : vérifier avant d'affirmer" },
};

/* ---------- 01 LA MARQUE ---------- */
BG.modules.push({
  id: "marque", num: "01", kind: "intro", family: "Marque",
  title: "Bongard, équipementier français du fournil",
  tagline: "Une histoire française depuis 1922 : du four au laboratoire complet.",
  hero: "assets/brand/hero-oven.jpg",
  sources: "Présentation française REV01 02/2025 (S01) ; présentation 2024, chiffres 2023 (S02).",
  sections: [
    { id: "histoire", title: "Histoire et identité", html: `
      <p>Bongard naît en Alsace autour d'<strong>Oscar Bongard</strong>. En <strong>1922</strong>, il crée à Oberhoffen-sur-Moder une entreprise de réparation et d'entretien de fours de boulangerie. Ingénieur de formation, il se tourne vite vers leur <em>conception</em> : la marque se construit sur un besoin simple du boulanger, un outil de cuisson fiable et adapté à son métier.</p>
      <div class="timeline">
        <div><b>1922</b><span>Création par Oscar Bongard : entretien, puis conception de fours.</span></div>
        <div><b>1955–1958</b><span>Reprise par Oscar Bongard fils ; transfert du siège et de la production à Holtzheim, près de Strasbourg.</span></div>
        <div><b>1966 / 1967</b><span>Four à tubes vapeur CERVAP. <em>Année exacte à confirmer : les documents citent 1966 et 1967.</em></span></div>
        <div><b>1975</b><span>Premier four à chariot rotatif G1 ; four à soles électrique ELECTRIC.</span></div>
        <div><b>1984</b><span>Bongard se présente comme spécialiste de la boulangerie complète (four, froid, machines, mélange) et développe son réseau.</span></div>
        <div><b>1986–1998</b><span>Élargissement de l'offre : mélange, division, repos, mise en forme, fermentation, conservation.</span></div>
        <div><b>2007</b><span>Entrée dans Ali Group ; lancement du procédé PANEOTRAD.</span></div>
        <div><b>Depuis 2023</b><span>Bongard Connect : pilotage à distance sur les équipements compatibles.</span></div>
      </div>
      <p class="callout"><b>À ne pas dire.</b> « Une famille, une histoire » évoque l'origine humaine de la marque. Cela ne signifie pas que l'entreprise appartient encore à la famille fondatrice : elle fait partie d'Ali Group depuis 2007.</p>` },
    { id: "valeur", title: "La proposition de valeur", html: `
      <p>Bongard accompagne l'investissement dans <strong>une machine seule</strong> comme dans <strong>un laboratoire complet</strong>. La promesse commerciale : relier produits, volumes, organisation, surface et équipements. Elle vaut pour les petits fournils contraints en place comme pour des unités plus importantes, mais <em>la faisabilité se démontre projet par projet</em>.</p>
      <table class="t"><thead><tr><th>Fondement</th><th>Preuve à donner, bénéfice client</th></tr></thead><tbody>
        <tr><td>Régularité</td><td>Programmes, régulations et réglages adaptés pour répéter les opérations. La recette, les matières premières et la méthode restent déterminantes.</td></tr>
        <tr><td>Précision</td><td>Température, humidité, temps, épaisseur ou division : chaque famille agit sur des paramètres différents. Dire lesquels.</td></tr>
        <tr><td>Construction</td><td>Préciser matériaux et parties concernées (cuve, outils, panneaux, tablettes, protections). Une option inox n'est pas une machine tout inox en standard.</td></tr>
        <tr><td>Ergonomie</td><td>Basculement, enroulement, chargement et commandes accessibles : moins de manipulations répétitives.</td></tr>
        <tr><td>Énergie</td><td>Isolation, programmation, gestion des étages sur les modèles concernés. Distinguer puissance installée et consommation réelle.</td></tr>
        <tr><td>Accompagnement</td><td>Préconisation, implantation, essais, formation et assistance, selon le projet et les prestations convenues.</td></tr>
      </tbody></table>` },
    { id: "chiffres", title: "Chiffres de l'entreprise (datés)", html: `
      <p>Ces repères viennent des éditions fournies. <strong>Toujours citer la date</strong> quand on les reprend.</p>
      <div class="stats">
        <div><b>1 500</b><span>articles au catalogue<small>présentation 02/2025</small></span></div>
        <div><b>4</b><span>sites de production en Europe, dont 3 en France<small>présentation 02/2025</small></span></div>
        <div><b>+140</b><span>pays de distribution<small>présentations 2024 et 2025</small></span></div>
        <div><b>150 000</b><span>équipements dans le monde, dont 40 000 fours en fonctionnement<small>présentation 02/2025</small></span></div>
        <div><b>50 %</b><span>des ventes à l'export<small>présentation 02/2025</small></span></div>
        <div><b>71 M€</b><span>de chiffre d'affaires en 2023<small>présentation 2024 · 400 salariés</small></span></div>
      </div>
      <figure class="fig"><img src="assets/brand/world-map.jpg" alt="Carte mondiale des pays couverts par la distribution Bongard" loading="lazy"><figcaption>Couverture mondiale : plus de 140 pays. Source : présentation Bongard 2024.</figcaption></figure>
      <figure class="fig"><img src="assets/brand/production-site.jpg" alt="Atelier de production Bongard" loading="lazy"><figcaption>Site de production. Source : présentation Bongard 2024.</figcaption></figure>` },
    { id: "services", title: "Services : France ou Arabie saoudite ?", html: `
      <p>La documentation décrit trois expertises au service du projet :</p>
      <ul><li><b>Commerciale</b> : préconisation d'équipements, implantation du fournil selon le process.</li>
      <li><b>Métier</b> : showroom et laboratoire de 320 m² à Holtzheim pour tester sur ses produits ; maîtres-boulangers qui se déplacent « partout dans le monde, à la demande » pour former sur les machines.</li>
      <li><b>Technique</b> : garantie constructeur à compter de la livraison ; contrat de maintenance avec extension de garantie possible ; formation des techniciens des distributeurs.</li></ul>
      <p class="callout warn"><b>Règle d'or.</b> Le dépannage 7 j/7, le réseau de concessionnaires, les pièces expédiées sous 24 à 48 h et le financement Bongard Finance sont décrits <em>pour la France</em>. Ils ne deviennent <strong>jamais</strong> une promesse en Arabie saoudite sans confirmation écrite du distributeur local : contenu, délai, coût, conditions, interlocuteurs.</p>` },
  ],
  pitch: "Bongard est un équipementier français du fournil né en Alsace en 1922. Historiquement spécialiste du four, il propose aujourd'hui une offre qui couvre tout le laboratoire : de la machine isolée à une configuration complète, pensée à partir de vos produits, de vos volumes et de votre local. Les services locaux sont définis avec le distributeur dans l'offre.",
  summary: ["Création en 1922 par Oscar Bongard en Alsace ; four d'abord, puis tout le fournil.", "Membre d'Ali Group depuis 2007 : l'origine familiale n'est pas la propriété actuelle.", "Chiffres d'entreprise : toujours datés (éditions 2024 et 2025).", "Services France ≠ promesses locales en Arabie saoudite."],
  cards: [
    ["En quelle année et par qui Bongard a-t-il été fondé ?", "En 1922, par Oscar Bongard, en Alsace (Oberhoffen-sur-Moder)."],
    ["Depuis quand Bongard fait-il partie d'Ali Group ?", "Depuis 2007. L'entreprise n'appartient plus à la famille fondatrice."],
    ["Que signifie « du four au fournil complet » ?", "Le four d'origine a été rejoint par le mélange, la division, le repos, le façonnage, la fermentation et la conservation (1986–1998)."],
    ["Peut-on promettre un dépannage 7 j/7 en Arabie saoudite ?", "Non : ce service décrit le réseau français. Il se confirme par écrit avec le distributeur local."],
  ],
});

/* ---------- 02 LA CHAÎNE ---------- */
BG.modules.push({
  id: "chaine", num: "02", kind: "intro", family: "Métier",
  title: "Comprendre la chaîne avant d'accompagner",
  tagline: "Du pétrissage au ressuage : chaque poste a son équipement, et un poste limitant.",
  sources: "S01 pp. 8–11 ; S03 ; S07 ; synthèse pédagogique.",
  diagram: "chain",
  sections: [
    { id: "etapes", title: "Les étapes de production", html: `
      <table class="t"><thead><tr><th>Étape</th><th>Objectif</th><th>Équipements</th></tr></thead><tbody>
        <tr><td>Préparer / pétrir</td><td>Incorporer les ingrédients, développer la pâte en maîtrisant son échauffement.</td><td>SPIRAL, refroidisseur et doseur d'eau ; batteur selon préparation</td></tr>
        <tr><td>Pointer</td><td>Première fermentation, souvent en masse.</td><td>HERA, BFC ou conservation adaptée au procédé</td></tr>
        <tr><td>Diviser / mettre en forme</td><td>Portions et formes adaptées au produit.</td><td>MIRA, diviseuse volumétrique, bouleuse, repose-pâtons, MAJOR</td></tr>
        <tr><td>Laminer / détailler</td><td>Abaisse et, selon l'équipement, découpe.</td><td>RHEA MANU ou AUTO, station SC</td></tr>
        <tr><td>Apprêter</td><td>Développer les pâtons avant cuisson.</td><td>HERA, BFC ; programme adapté à la recette</td></tr>
        <tr><td>Cuire</td><td>Fixer la structure, développer couleur et texture.</td><td>SOLEO, ORION, rotatif, ventilé</td></tr>
        <tr><td>Ressuer / refroidir</td><td>Évacuer chaleur et humidité après cuisson.</td><td>ZEPHYR ; préparation au tranchage ou conditionnement</td></tr>
        <tr><td>Surgeler / conserver</td><td>Organiser le stock et les productions différées.</td><td>KRONOS-P, BSC, KRYO</td></tr>
      </tbody></table>` },
    { id: "logiques", title: "Deux logiques à distinguer", html: `
      <p>Le procédé <strong>traditionnel</strong> associe division, détente et façonnage avant apprêt. Le procédé <strong>PANEOTRAD</strong> réorganise la fabrication autour d'un pointage en bacs et d'une séparation / mise en forme adaptée, sans reprendre à l'identique le schéma traditionnel.</p>` },
    { id: "regle", title: "La règle du dimensionnement", html: `
      <p class="callout"><b>La capacité du laboratoire dépend du poste limitant</b> : pétrissage, froid, façonnage, pousse, four, refroidissement ou équipe. Une cadence machine élevée n'est pas une cadence garantie de produits finis. Relier chaque chiffre à son <em>format, son poids, son temps de cycle et son effectif</em>.</p>` },
  ],
  pitch: "Avant de parler machine, je regarde la chaîne : quel poste limite votre production aujourd'hui, et que se passe-t-il juste avant et juste après ?",
  summary: ["Huit étapes, de la préparation à la surgélation.", "Procédé traditionnel ≠ procédé PANEOTRAD.", "Une cadence machine n'est pas une cadence de pains finis.", "Toujours chercher le poste limitant."],
  cards: [
    ["Qu'est-ce que le poste limitant ?", "L'étape (pétrissage, froid, façonnage, pousse, four, refroidissement ou équipe) qui plafonne la capacité réelle du laboratoire."],
    ["Pourquoi une cadence machine n'est-elle pas une cadence de pains finis ?", "Elle ne concerne qu'une étape ; les étapes aval (façonnage, pousse, cuisson…) et l'équipe peuvent limiter davantage."],
  ],
});

/* ---------- 03 SPIRAL EVO TH/TL ---------- */
BG.modules.push({
  id: "spiral", num: "03", kind: "machine", family: "Mélange",
  title: "SPIRAL EVO TH/TL",
  tagline: "Pétrir et transférer la pâte : le pétrin à spirale autobasculant.",
  sources: "ARGUMAT SPIRAL TH/TL 05/2018 (S03) ; brochure « SPIRAL EvO TH/TL » du Drive (non datée, consultée).",
  diagram: "spiral",
  visuals: [{ need: "bongard-spiral-evo-th-tl-dc-fr.pdf (Drive) — photos TL et TH + schéma de basculement", note: "Montrer le bon pétrin : TL (déversement bas) ≠ TH (déversement haut)." }],
  checks: [
    { s: "ok",  t: "Plages de pâte par modèle (110 : 3,5–80 kg ; 150 : 4–100 ; 200 : 4–130 ; 300 : 4,5–200) retrouvées dans la brochure du Drive." },
    { s: "ok",  t: "Commande des deux mains, sonde infrarouge optionnelle (température de surface), cuve élargie : retrouvés dans la brochure." },
    { s: "tbc", t: "La brochure du Drive ne propose le TH qu'en 200 et 300 ; le TL existe en 110, 150, 200 et 300. Le modèle 150 est donc un TL : à vérifier avant de proposer un TH 150." },
    { s: "tbc", t: "Puissance et poids : brochure du Drive (4,55 kW / 6,8 kW / 8,4 kW ; 830 à 1 270 kg selon modèle) à confirmer sur la fiche du modèle commandé. Dimensions non reprises ici." },
    { s: "tbc", t: "Fréquence 60 Hz : des vitesses 60 Hz sont indiquées dans la brochure ; compatibilité du modèle proposé en Arabie saoudite à confirmer." },
  ],
  sections: [
    { id: "quoi", title: "1 · Ce que c'est", html: `<p>SPIRAL EVO TH/TL est un <strong>pétrin à spirale autobasculant</strong> : un pétrin à cuve fixe Spiral EvO accroché à une colonne de levage hydraulique. Il combine <em>pétrissage</em> et <em>transfert de la pâte</em>, pour limiter l'extraction manuelle de la cuve et mieux alimenter la suite de la production.</p>` },
    { id: "fonct", title: "2 · Fonctionnement simple", html: `<p>La spirale, la cuve et la barre de contre-pétrissage travaillent ensemble : <b>vitesse lente</b> pour l'incorporation, <b>vitesse rapide</b> pour développer la pâte. À la fin, la colonne hydraulique lève la cuve et la déverse en une fois, à droite ou à gauche selon le modèle. Le pétrin est tout de suite disponible pour la pétrissée suivante.</p><p>Trois modes de pétrissage : manuel simple, automatique, et manuel spécial « Paneotrad » qui intègre des temps de repos entre les phases.</p>` },
    { id: "users", title: "3 · Utilisateurs et applications", html: `<table class="t"><thead><tr><th>Version</th><th>Destination de la pâte</th><th>Profil d'utilisation</th></tr></thead><tbody><tr><td><b>TL</b> · basculement bas</td><td>Vers une table de travail (table d'affalage)</td><td>Atelier utilisant préparation et division sur plan de travail</td></tr><tr><td><b>TH</b> · basculement haut</td><td>Vers une trémie de diviseuse ; avec ou sans goulotte selon configuration</td><td>Production organisée autour d'un groupe automatique, plutôt intensive</td></tr></tbody></table>` },
    { id: "carac", title: "4 · Caractéristiques essentielles", html: `<table class="t"><thead><tr><th>Modèle</th><th>Plage de pâte annoncée</th><th>Sens du nombre</th></tr></thead><tbody><tr><td>110</td><td>3,5 à 80 kg</td><td rowspan="4">Le nombre désigne le <b>volume nominal de cuve en litres</b>. 150 ne signifie pas 150 kg de pâte.</td></tr><tr><td>150</td><td>4 à 100 kg</td></tr><tr><td>200</td><td>4 à 130 kg</td></tr><tr><td>300</td><td>4,5 à 200 kg</td></tr></tbody></table><p class="note">Capacités historiques (2018) et brochure du Drive concordantes. Vérifier farine, hydratation et application ; le dimensionnement dépend du poids par pétrissée.</p>` },
    { id: "config", title: "5 · Configurations, accessoires, options", html: `<ul><li><b>TL</b> : 110, 150, 200, 300 ; déversement à gauche ou à droite selon le modèle ; sans goulotte.</li><li><b>TH</b> : 200 et 300 ; avec goulotte (DVP) ou sans (DVM).</li><li><b>Sonde infrarouge</b> (option) : température de <em>surface</em> de la pâte, arrêt du pétrissage possible à la température souhaitée. Elle ne mesure pas le cœur de la pâte.</li></ul>` },
    { id: "mat", title: "6 · Matériaux et construction", html: `<p>Cuve inox et commande électronique selon le support. La cuve a été <b>élargie</b> pour augmenter la zone d'oxygénation de la pâte et limiter le contact avec l'outil diviseur. Préciser, sur la référence proposée, ce qui est inox et ce qui ne l'est pas.</p>` },
    { id: "args", title: "7 · Atouts phares", html: `<table class="t args"><thead><tr><th>Atout</th><th>Preuve technique</th><th>Bénéfice client</th></tr></thead><tbody>
      <tr><td>Moins de manutention</td><td>Basculement vers table ou trémie.</td><td>Limiter les extractions répétées et les efforts associés (TMS).</td></tr>
      <tr><td>Disponibilité du pétrin</td><td>Vidage de la cuve par transfert.</td><td>Libérer la machine pour la pétrissée suivante, si la suite du flux peut absorber la pâte.</td></tr>
      <tr><td>Souplesse</td><td>Plages de quantités par modèle.</td><td>Adapter les pétrissées au mix produit, pas seulement à un gros lot.</td></tr>
      <tr><td>Répétition des réglages</td><td>Commande électronique, programmes.</td><td>Reproduire les temps définis par le boulanger.</td></tr>
      <tr><td>Suivi de température</td><td>Sonde infrarouge en option.</td><td>Surveiller l'échauffement et piloter le pétrissage.</td></tr>
      <tr><td>Transfert encadré</td><td>Commande maintenue à deux mains pour le basculement.</td><td>Position de commande définie : l'opérateur n'est pas sous la cuve.</td></tr></tbody></table>` },
    { id: "benef", title: "8 · Bénéfices concrets", html: `<ul><li>Moins d'efforts répétitifs, moins de risques de troubles musculo-squelettiques.</li><li>Un pétrin qui ne fait plus attendre la pétrissée suivante.</li><li>Un transfert propre vers la table ou la diviseuse.</li></ul><p class="note">Un gain chiffré exige ses conditions de mesure chez le client.</p>` },
    { id: "diff", title: "9 · Différenciations documentées", html: `<p><b>Face à un pétrin sans basculement</b> : l'avantage concret porte sur le transfert. La valeur se mesure au nombre de pétrissées, au poids déplacé et au temps gagné au vidage.</p><p><b>Face à d'autres autobasculants</b> : le support de 2018 compare les commandes avec des équipements VMI et SINMAG de l'époque et met en avant la simplicité et les programmes. Ces références sont trop imprécises pour conclure à une supériorité générale aujourd'hui. Comparer sur devis : capacités utiles, hauteurs et côtés de déversement, encombrement en mouvement, commandes, température, sécurité, entretien, formation.</p>` },
    { id: "disc", title: "10 · Questions de découverte", html: `<ul><li>Poids minimum et maximum des lots ? Familles de pâtes et hydratations ?</li><li>Combien de pétrissées, sur quels créneaux ? Capacité du four ?</li><li>Table ou trémie à alimenter ? Hauteur, sens de transfert, place disponible ?</li><li>Méthode actuelle de vidage, effectif, difficultés de manutention ?</li></ul>` },
    { id: "obj", title: "11 · Questions et inquiétudes du client", html: `<div class="obj"><b>« Mon pétrin pétrit déjà très bien. »</b><p>Le point à examiner est aussi le transfert : voyons combien de pâte votre équipe extrait chaque jour, le temps que cela prend, et comment le basculement s'intégrerait à votre méthode.</p></div><div class="obj"><b>« Plus la cuve est grande, mieux c'est. »</b><p>Une grande pétrissée peut attendre trop longtemps avant division ou mise au froid. Acheter plus grand n'améliore pas automatiquement qualité ou productivité.</p></div>` },
    { id: "lim", title: "12 · Limites et vérifications avant préconisation", html: `<ul class="check"><li>Capacité par pétrissée, marge de fonctionnement, petits lots, évolutions prévues.</li><li>Dimensions de transfert, hauteur de table ou de trémie, place en mouvement.</li><li>Cohérence avec le froid, la division et le four.</li><li>Alimentation électrique et fréquence locale.</li></ul><p class="ex"><b>Exemple de raisonnement.</b> Un client travaille 100 kg de pâte par lot et vide sa cuve à la main sur table. Le 150 figure à 100 kg maximum, mais le choix ne s'arrête pas là : recette, marge, petits lots, évolution, dimensions de transfert. Un essai conforte la recommandation.</p>` },
    { id: "syn", title: "13 · À retenir", html: `<ul><li>TL = déversement bas sur table ; TH = déversement haut vers trémie.</li><li>Le nombre est un volume de cuve en litres, pas un poids de pâte.</li><li>La sonde infrarouge mesure la surface, pas le cœur.</li><li>Choisir la capacité par pétrissée et la destination du transfert, puis vérifier froid, division, four.</li></ul>` },
  ],
  pitch: "SPIRAL EVO TH/TL associe pétrissage à spirale et basculement de cuve. TL alimente une table ; TH transfère en hauteur vers une trémie. Son intérêt est de réduire les manutentions et de fluidifier la production, avec une taille de pétrissée adaptée à votre organisation.",
  summary: ["TL : table ; TH : trémie.", "Nombre = litres de cuve.", "Sonde IR en option : température de surface.", "Taille adaptée à la pétrissée, pas la plus grosse."],
  cards: [
    ["TL ou TH : quelle différence ?", "TL bascule bas vers une table de travail ; TH bascule haut vers une trémie de diviseuse."],
    ["Que désigne « 150 » dans SPIRAL EVO 150 ?", "Le volume nominal de cuve en litres, pas une masse de pâte (4 à 100 kg selon le support)."],
    ["Que mesure la sonde infrarouge optionnelle ?", "La température de surface de la pâte, pas celle du cœur."],
    ["Pourquoi la commande à deux mains ?", "Le basculement n'est possible que debout devant la commande : l'opérateur ne se trouve pas sous la cuve."],
  ],
});

/* ---------- 04 STELLAR ---------- */
BG.modules.push({
  id: "stellar", num: "04", kind: "machine", family: "Mélange",
  title: "STELLAR",
  tagline: "Un batteur-mélangeur de table pour les petites séries.",
  sources: "ARGUMAT STELLAR 11/2019 (S04). Aucune brochure STELLAR sur le Drive.",
  visuals: [{ need: "Brochure ou fiche STELLAR (PDF) — photo machine, cuve de réduction 12 L, support dédié", note: "Aucun visuel STELLAR exploitable dans les documents transmis." }],
  checks: [
    { s: "tbc", t: "Source unique : ARGUMAT 2019. Aucune brochure STELLAR sur le Drive : configuration actuelle et limites de charge à confirmer dans la notice." },
    { s: "tbc", t: "Alimentation du support : 230 V monophasé 50 Hz ; compatibilité 60 Hz à confirmer pour le marché local." },
  ],
  sections: [
    { id: "quoi", title: "1 · Ce que c'est", html: `<p>STELLAR est un <strong>batteur-mélangeur planétaire de table</strong> à cuve de 20 litres. Il répond aux préparations pâtissières et aux petites quantités, dans des laboratoires où la place et la précision d'exécution comptent.</p>` },
    { id: "fonct", title: "2 · Fonctionnement simple", html: `<p>L'outil tourne sur lui-même tout en parcourant la cuve (mouvement planétaire). La commande électronique règle la <b>vitesse variable</b> ; la minuterie permet un mode automatique avec arrêt. Les poids et vitesses se déterminent par préparation, selon la notice.</p>` },
    { id: "users", title: "3 · Utilisateurs et applications", html: `<p>Petite pâtisserie ou laboratoire produisant plusieurs recettes en petites quantités : blancs montés, meringues, pâte à choux, crèmes, pâtes compatibles avec les limites de la machine.</p>` },
    { id: "carac", title: "4 · Caractéristiques essentielles", html: `<table class="t"><tbody><tr><td>Cuve principale</td><td><b>20 litres</b> : volume de cuve, pas une capacité de 20 kg de produit.</td></tr><tr><td>Outils de série</td><td>Fouet, palette et spirale en inox, avec cuve inox.</td></tr><tr><td>Commande</td><td>Électronique, vitesse variable ; minuterie et modes manuel / automatique.</td></tr><tr><td>Vitesse</td><td>De 30 à 125 tr/min (indication du support).</td></tr><tr><td>Alimentation du support</td><td>230 V monophasé, 50 Hz — compatibilité 60 Hz à confirmer.</td></tr></tbody></table>` },
    { id: "config", title: "5 · Configurations, accessoires, options", html: `<ul><li><b>Cuve de réduction de 12 litres</b> avec trois outils : accessoire.</li><li><b>Support dédié</b> avec rangement pour une cuve et les outils.</li></ul>` },
    { id: "mat", title: "6 · Matériaux et construction", html: `<p>Cuve et trois outils en inox. Couvercle conçu pour limiter les émissions de farine et protéger l'utilisateur. Accès frontal aux commandes, poignées de cuve, goulotte amovible.</p>` },
    { id: "args", title: "7 · Atouts phares", html: `<table class="t args"><thead><tr><th>Atout</th><th>Preuve du support</th><th>Bénéfice client</th></tr></thead><tbody>
      <tr><td>Compacité</td><td>Format de table, support dédié avec rangement.</td><td>Un poste pour petites séries, accessoires organisés.</td></tr>
      <tr><td>Adaptation du travail</td><td>Vitesse variable, choix des outils.</td><td>Ajuster l'action mécanique à la préparation.</td></tr>
      <tr><td>Temps défini</td><td>Mode automatique avec minuterie et arrêt.</td><td>Reproduire un temps de mélange validé.</td></tr>
      <tr><td>Ergonomie</td><td>Accès frontal aux commandes, poignées, goulotte amovible.</td><td>Faciliter commande, préhension et nettoyage.</td></tr>
      <tr><td>Protection</td><td>Couvercle limitant les émissions de farine.</td><td>Encadrer l'utilisation, limiter certaines projections.</td></tr></tbody></table>` },
    { id: "benef", title: "8 · Bénéfices concrets", html: `<ul><li>Un poste de mélange pour petites préparations, sur une emprise réduite.</li><li>Des temps de mélange reproductibles d'un jour à l'autre.</li><li>Plusieurs recettes en petits lots grâce à la cuve de réduction.</li></ul>` },
    { id: "diff", title: "9 · Différenciations documentées", html: `<p>Le benchmark de 2019 compare compacité, variation de vitesse, commandes et accès. Il rapporte notamment une hauteur de <b>870 mm pour STELLAR contre 950 mm pour le BV22 bas</b>, et une variation de vitesse face aux trois vitesses du HOBART A200 étudié. Ces données décrivent des versions historiques (VMI BV22, SPAR SP200A, HOBART A200) : ne pas les généraliser aux gammes actuelles.</p>` },
    { id: "disc", title: "10 · Questions de découverte", html: `<ul><li>Quelles recettes, quelles charges par préparation, quels petits lots ?</li><li>Quels outils nécessaires ? Quelle place disponible ?</li><li>Quelle alimentation électrique (tension, fréquence) ?</li></ul>` },
    { id: "obj", title: "11 · Questions et inquiétudes du client", html: `<div class="obj"><b>« 20 litres, donc 20 kg. »</b><p>Le volume de cuve et la charge utile sont différents : la quantité admissible dépend de la préparation et de sa résistance au mélange.</p></div><div class="obj"><b>« Un concurrent propose le même volume moins cher. »</b><p>Comparer des périmètres identiques : charge par recette et outils, variation de vitesse, commande, minuterie, implantation, nettoyage, puis prix avec options, formation, garantie et service sur références exactes.</p></div>` },
    { id: "lim", title: "12 · Limites et vérifications", html: `<ul class="check"><li>« De table » ne veut pas dire léger : le poids et les efforts imposent de vérifier support, stabilité et dégagements.</li><li>Sans le piètement dédié : <b>structure fixe, sans roues</b>.</li><li>Alimentation locale (60 Hz) à confirmer.</li></ul>` },
    { id: "syn", title: "13 · À retenir", html: `<ul><li>20 L = volume de cuve ; charge utile selon la préparation et la notice.</li><li>Trois outils : fouet (aéré), palette (choux, crèmes), spirale (pâtes compatibles).</li><li>Installation sans piètement : structure fixe sans roues.</li></ul>` },
  ],
  pitch: "STELLAR apporte un poste de mélange pour les petites préparations, avec des outils adaptés et une vitesse variable. Nous le dimensionnons sur vos recettes et vos quantités réelles, puis vérifions son installation.",
  summary: ["Batteur planétaire de table, cuve 20 L.", "Trois outils inox : fouet, palette, spirale.", "Vitesse variable 30–125 tr/min, minuterie.", "Support sans roues ; 60 Hz à confirmer."],
  cards: [
    ["Quel outil STELLAR pour des blancs montés ?", "Le fouet, destiné aux préparations aérées (blancs montés, meringues)."],
    ["20 litres signifie-t-il 20 kg ?", "Non : c'est un volume de cuve. La charge utile dépend de la préparation et de la notice."],
    ["Quelle précaution sans piètement dédié ?", "Installer sur une structure fixe sans roues, après vérification de stabilité et de dégagements."],
  ],
});

/* ---------- 05 MIRA ---------- */
BG.modules.push({
  id: "mira", num: "05", kind: "machine", family: "Division & formage",
  title: "MIRA",
  tagline: "Diviser simplement dans un espace limité.",
  sources: "ARGUMAT MIRA Rev01 02/2021 (S05). Aucune brochure MIRA sur le Drive.",
  visuals: [{ need: "Brochure MIRA (PDF) — photo cuve ouverte, grilles 20 / 10 / 40 divisions", note: "Aucun visuel MIRA exploitable dans les documents transmis." }],
  checks: [
    { s: "tbc", t: "Source unique : ARGUMAT 2021. Aucune brochure MIRA sur le Drive ; benchmark JAC DIV-R 2021 non revérifié." },
    { s: "tbc", t: "Capacités valables pour un pointage en bac inférieur à 30 minutes ; pâte plus fermentée à valider avec le démonstrateur." },
  ],
  sections: [
    { id: "quoi", title: "1 · Ce que c'est", html: `<p>MIRA est une <strong>diviseuse hydraulique compacte</strong>, positionnée pour l'artisan qui cherche une solution simple. Elle <em>portionne</em> la pâte ; elle n'est ni une bouleuse ni une façonneuse.</p>` },
    { id: "fonct", title: "2 · Fonctionnement simple", html: `<p>La pâte est introduite dans la cuve ; la pression et les couteaux produisent les portions. La précision finale dépend aussi du poids de pâte chargé et de sa répartition : <b>une diviseuse ne corrige pas un pesage initial erroné</b>.</p>` },
    { id: "users", title: "3 · Utilisateurs et applications", html: `<p>Artisans de petits et moyens fournils, avec peu de place, qui divisent des pâtons de 200 à 1 000 g (petits pains, baguettes, pains plus lourds).</p>` },
    { id: "carac", title: "4 · Caractéristiques essentielles", html: `<table class="t"><tbody>
      <tr><td>Division standard</td><td>20 divisions ; cuve de 500 × 400 mm</td></tr>
      <tr><td>Charge standard</td><td>4 à 20 kg, soit des pâtons de 200 à 1 000 g</td></tr>
      <tr><td>Avec grille</td><td>Charge de 3 à 7 kg ; poids selon la grille et le nombre de divisions</td></tr>
      <tr><td>Grilles optionnelles</td><td>10 divisions ; 40 divisions en double découpe</td></tr>
      <tr><td>Pression réglable</td><td>Régulateur optionnel de 44 à 53 bar</td></tr>
      <tr><td>Dimensions au sol</td><td>762 mm de profondeur × 600 mm de largeur</td></tr>
      <tr><td>Poids</td><td>200 kg</td></tr>
      <tr><td>Cadence fabricant</td><td>Jusqu'à 1 200 pièces/heure : <b>référence à confronter au cycle réel</b></td></tr></tbody></table><p class="note">Capacités données pour un pointage en bac de moins de 30 minutes.</p>` },
    { id: "config", title: "5 · Configurations, accessoires, options", html: `<ul><li>Régulateur de pression (option) et grille « tradition » (option) pour pâtes fermentées.</li><li>Grilles 10 divisions et 40 divisions (double découpe).</li><li>Tablette rabattable optionnelle.</li></ul>` },
    { id: "mat", title: "6 · Matériaux et construction", html: `<p>Cuve en <b>aluminium</b> ; couteaux, levier et accessoires concernés en <b>inox</b> ; couvercle ABS/PMMA. Expliquer chaque matériau à son emplacement, sans annoncer « tout inox ».</p>` },
    { id: "args", title: "7 · Atouts phares", html: `<table class="t args"><thead><tr><th>Atout</th><th>Caractéristique</th><th>Bénéfice</th></tr></thead><tbody>
      <tr><td>Compacte</td><td>600 mm de largeur, 762 mm de profondeur.</td><td>Intégration possible dans un fournil contraint, après vérification des accès.</td></tr>
      <tr><td>Pâte fermentée</td><td>Régulateur de pression et grille tradition (options).</td><td>Adapter la pression, limiter le dégazage selon la pâte.</td></tr>
      <tr><td>Farine</td><td>Joint antiprojection, évents, récupération arrière.</td><td>Limiter les projections pendant l'opération.</td></tr>
      <tr><td>Manipulation</td><td>Poignée à rappel par ressort.</td><td>Retrouver la poignée en position pour refermer.</td></tr>
      <tr><td>Entretien</td><td>Remontée automatique des couteaux, accès intérieur.</td><td>Faciliter les opérations prévues par la notice.</td></tr></tbody></table>` },
    { id: "benef", title: "8 · Bénéfices concrets", html: `<ul><li>Une division simple dans une emprise réduite.</li><li>Des portions plus régulières si le pesage de départ est correct.</li><li>Option pour travailler les pâtes fermentées avec davantage de ménagement.</li></ul>` },
    { id: "diff", title: "9 · Différenciations documentées (benchmark 2021)", html: `<p><b>Face à la JAC DIV-R étudiée en 2021</b> : découpe carrée, grille 40 divisions en double découpe, cuve de 500 mm contre 460 mm, poids de 200 kg contre 265 kg, tablette rabattable optionnelle. Le tableau présente aussi une cuve inox et un régulateur standard sur la DIV-R : <em>conserver ces différences, sans prétendre que MIRA domine sur tous les critères</em>.</p><p><b>Face à MERCURE 4</b> (autre solution Bongard) : profondeur de 873 à 762 mm, poids de 240 à 200 kg. Deux solutions à choisir selon fonctions et besoins, pas seulement selon le prix.</p>` },
    { id: "disc", title: "10 · Questions de découverte", html: `<ul><li>Quels pains, quelles hydratations, quel temps de fermentation avant division ?</li><li>Quels poids de pâtons ?</li><li>Combien de lots et de pièces dans le créneau de production ?</li><li>Quels gestes après division : boulage, détente, façonnage ?</li><li>Quelle place pour l'ouverture du couvercle, le chargement, le nettoyage ?</li></ul>` },
    { id: "obj", title: "11 · Questions et inquiétudes du client", html: `<div class="obj"><b>« Elle fait aussi mes boules ? »</b><p>MIRA assure la division. Le boulage et le façonnage dépendent de votre méthode et des équipements suivants : regardons la chaîne complète.</p></div><div class="obj"><b>« Toutes les diviseuses se ressemblent. »</b><p>Comparer forme des portions, pression, grilles, charges, nettoyage et place. Une grille ou un régulateur change sensiblement l'usage : vérifier ce qui est inclus dans chaque offre.</p></div>` },
    { id: "lim", title: "12 · Limites et vérifications", html: `<ul class="check"><li><b>1 200 pièces/heure ≠ 1 200 pains finis</b> : boulage, façonnage, pousse et cuisson restent à intégrer.</li><li>Pâte plus fermentée ou procédé différent : validation avec le démonstrateur.</li><li>Options (grille, régulateur) alignées sur le produit.</li></ul><p class="ex"><b>Exemple.</b> 20 pièces de 350 g : charge théorique à répartir = 7 kg. Ce calcul vérifie la cohérence du lot ; il ne remplace ni un essai sur la pâte ni le contrôle du poids des pièces.</p>` },
    { id: "syn", title: "13 · À retenir", html: `<ul><li>Diviseuse hydraulique compacte, 20 divisions de série.</li><li>Elle divise : elle ne boule pas, elle ne façonne pas.</li><li>Régulateur de pression : option, à valider sur la recette.</li><li>Le chiffre de 1 200 pièces/h ne se transforme pas en promesse de pains finis.</li></ul>` },
  ],
  pitch: "MIRA est une diviseuse hydraulique compacte à 20 divisions. Elle vise une utilisation simple et peut recevoir des options de grille et de pression. Son intérêt s'évalue sur vos pâtes, les poids de pièces, la place disponible et les opérations qui suivent la division.",
  summary: ["20 divisions, 4 à 20 kg, pâtons de 200 à 1 000 g.", "Aluminium (cuve) + inox (couteaux, levier).", "Benchmark JAC DIV-R : 2021, avantages ET différences.", "Cadence de division ≠ pains finis."],
  cards: [
    ["Combien de divisions en standard ?", "20 divisions (cuve de 500 × 400 mm), pour une charge de 4 à 20 kg."],
    ["Quelle charge pour 20 pâtons de 350 g ?", "7 kg théoriques ; à confirmer par un essai et le contrôle du poids des pièces."],
    ["MIRA fait-elle le boulage ?", "Non : elle divise. Boulage et façonnage dépendent de la méthode et des équipements aval."],
  ],
});
