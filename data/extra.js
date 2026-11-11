/* Plan de révision, glossaire, sources, points à confirmer */
BG.plan = [
  { day: 1, title: "La méthode et la marque", mods: ["methode", "marque", "chaine"], task: "Commencer par la méthode : poser des questions avant de présenter, répondre aux inquiétudes du client. Puis raconter l'histoire en une minute et décrire la chaîne de production sans citer de modèle au hasard." },
  { day: 2, title: "Préparer et diviser", mods: ["spiral", "stellar", "mira"], task: "Retenir le rôle, les limites de capacité et trois bénéfices par famille." },
  { day: 3, title: "Laminer et organiser", mods: ["rhea", "paneotrad"], task: "Distinguer outil, procédé, automatisation et savoir-faire." },
  { day: 4, title: "Fermenter", mods: ["hera", "bfc", "kryo"], task: "Expliquer les phases, l'humidité, les formats, le choix armoire / chambre, et la logique surgélation puis conservation." },
  { day: 5, title: "Cuire et refroidir", mods: ["soleo", "rotatif", "zephyr"], task: "Relier surface, temps de cuisson, chariots et conditionnement." },
  { day: 6, title: "Relier le laboratoire", mods: ["pack100", "reperes"], task: "Décrire le parcours de la pâte et les postes limitants." },
  { day: 7, title: "S'entraîner à expliquer", mods: ["methode"], task: "Reprendre les présentations orales (pitchs), simuler une découverte client, réviser les chiffres avec leurs conditions." },
];

BG.glossary = [
  ["Surgélation", "Refroidir un produit jusqu'à -18 °C à cœur, rapidement, pour figer sa qualité."],
  ["Conservation négative", "Stockage d'un produit déjà surgelé à -18 °C ambiants, pour une durée définie."],
  ["Four à chariot rotatif", "Four dans lequel un chariot chargé de plaques tourne pendant la cuisson."],
  ["Abaisse", "Pâte étalée à une épaisseur donnée."],
  ["Apprêt", "Développement des pâtons avant cuisson."],
  ["Blocage", "Maintien d'une température basse pour ralentir fortement la fermentation."],
  ["Buée", "Vapeur injectée dans le four pendant la cuisson."],
  ["Cataphorèse", "Traitement de surface qui améliore la tenue à la corrosion (ex. évaporateur HERA, BFC)."],
  ["Dormillon", "Phase de maintien à température plus basse après la pousse, pour limiter la poursuite de la fermentation."],
  ["ERGOCOM / SENSITIV'2", "Familles de commandes Bongard (voir chaque équipement pour les fonctions exactes)."],
  ["Farinage", "Apport de farine sur la pâte ou le tapis pour éviter qu'elle colle."],
  ["Fermentation contrôlée", "Pousse pilotée en température et humidité, avec ou sans blocage."],
  ["Hydratation", "Rapport entre l'eau et la farine dans une pâte."],
  ["Laminage", "Réduction progressive de l'épaisseur d'une pâte entre cylindres."],
  ["Pointage", "Première fermentation, souvent en masse."],
  ["Pointage en bacs", "Première fermentation en bacs, base du procédé PANEOTRAD."],
  ["Pétrissée", "Quantité de pâte pétrie en une fois (sert à dimensionner un pétrin)."],
  ["Poste limitant", "Étape qui plafonne le débit de tout le laboratoire."],
  ["Prérefroidissement", "Mise en température de l'enceinte avant introduction des produits."],
  ["Repos / détente", "Temps laissé au pâton entre deux opérations de mise en forme."],
  ["Ressuage", "Évacuation de chaleur et d'humidité du pain après cuisson."],
  ["Sole", "Surface de cuisson sur laquelle reposent directement les produits."],
  ["Tourage", "Abaisse et pliages successifs pour constituer le feuilletage."],
  ["Tropicalisé", "Groupe froid dimensionné pour une ambiance chaude (voir plage annoncée par gamme)."],
  ["Viennoiserie", "Pâtes levées feuilletées ou briochées (croissants, pains au chocolat…)."],
  ["Autobasculant", "Pétrin dont la cuve bascule pour verser la pâte (TL : table, TH : trémie)."],
  ["Argumat", "Document commercial Bongard qui argumente une gamme (source de ce support)."],
  ["Benchmark", "Comparaison datée avec des équipements concurrents : à vérifier avant usage."],
];

BG.sources = [
  ["S01", "Présentation d'entreprise (français)", "REV01 – 02/2025 ; 12 p."],
  ["S02", "Présentation Bongard 2024", "chiffres 2023 ; 8 p."],
  ["S03", "ARGUMAT SPIRAL EVO TH/TL", "05/2018 ; 54 p."],
  ["S04", "ARGUMAT STELLAR", "11/2019 ; 32 p."],
  ["S05", "ARGUMAT MIRA", "Rev01 – 02/2021 ; 25 p."],
  ["S06", "ARGUMAT RHEA AUTO", "Rev01 – 05/2023 ; 46 p."],
  ["S07", "ARGUMAT HERA", "édition non datée ; 37 p."],
  ["S08", "ARGUMAT BFC", "V00 ; campagne 2013–2014 ; 65 p."],
  ["S09", "ARGUMAT SOLEO EVO", "09/2018 ; 68 p."],
  ["S10", "Contre-argumentaire PANEOTRAD", "V00 ; date non précisée ; 16 p."],
  ["S11", "ARGUMAT ZEPHYR", "09/2018 ; 30 p."],
  ["S12", "Brochure RHEA AUTO", "date non identifiée ; 12 p."],
  ["S13", "PACK 100", "REV03 – 09/2023 ; 4 p."],
  ["S14", "ARGUMAT NOUVEAU KRYO", "09/2018 ; 35 p."],
  ["S15", "Brochure SÉRIE 4 (fours à chariot rotatif)", "date non identifiée"],
  ["S16", "Brochure SÉRIE 3 (fours à chariot rotatif)", "01/2012"],
];

BG.toConfirm = [
  "KRYO : argumentaire de 2018 ; commande connectée et service à distance à confirmer aujourd'hui.",
  "ROTATIF : module provisoire (brochures SÉRIE 4 et SÉRIE 3 de 2012) en attendant l'argumentaire rotatif.",
  "RHEA AUTO : poids minimal de pâte (3 kg ARGUMAT 2023 ; 0,5 kg vient des MANU dans la brochure rev04-c).",
  "PANEOTRAD : 36 matrices ≠ plus de 60 formes (unités différentes).",
  "BFC : support historique (groupe 38 °C) ≠ BFC EVO (tropicalisé de série, 43 °C).",
  "SOLEO EVO : cadence 15 ou 18 kg de pâte crue/m²/h ; édition 2018.",
  "ZEPHYR : essai fabricant de 40 min = un essai, pas une garantie.",
  "PACK 100 : 380 baguettes/h par four (SÉRIE 4 – 8.64) ; dimensions au sol à confirmer.",
  "Concurrence : benchmarks datés, non vérifiés comme offres actuelles.",
  "Services locaux (garantie, délais, maintenance, formation) : à formaliser dans l'offre locale.",
  "Vidéos : un lien existe dans S02, non vérifié (site non joignable depuis l'environnement de travail). Aucun lecteur intégré.",
];

BG.video = { label: "Vidéo mentionnée dans la présentation 2024 (S02)", status: "Lien non vérifié : ouvrir depuis la présentation d'origine. Aucune vidéo n'est intégrée tant qu'elle n'est pas vérifiée." };

BG.updates = [
  ["Novembre 2026", "Nouvel équipement : Di-vAin (ARGUMAT Rev01)."],
  ["Novembre 2026", "SOLEO EVO mis à jour sur l'ARGUMAT v.10 (07/2024) : portes pâtisserie et pain, commande SENSITIV'2."],
  ["Novembre 2026", "HERA mise à jour sur l'ARGUMAT Rev01 (03/2025) : 24 niveaux, options, groupe tropicalisé de série."],
  ["Novembre 2026", "Nouveaux outils : je prépare un rendez-vous, comparer, questions et inquiétudes, chiffres clés, chiffres clés ; vues Vendre / Technique sur chaque fiche."]
];
