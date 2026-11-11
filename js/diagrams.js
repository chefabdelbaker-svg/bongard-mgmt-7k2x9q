/* Schémas pédagogiques originaux (SVG inline) — non contractuels, ne représentent pas un modèle précis */
(function () {
  var NOTE = "Schéma pédagogique non contractuel";
  function box(x, y, w, h, t, sub, cls) {
    return '<g class="' + (cls || "") + '"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="6"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + (sub ? -3 : 4)) + '" text-anchor="middle" class="t1">' + t + '</text>' +
      (sub ? '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 12) + '" text-anchor="middle" class="t2">' + sub + '</text>' : "") + '</g>';
  }
  function arrow(x1, y1, x2, y2) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="ar" marker-end="url(#ah)"/>'; }
  function wrap(vb, title, body) {
    return '<figure class="diagram"><svg viewBox="' + vb + '" role="img" aria-label="' + title + '" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="ahp"/></marker></defs>' +
      body + '</svg><figcaption>' + title + ' — ' + NOTE + '</figcaption></figure>';
  }
  var D = {};

  D.chain = function () {
    var steps = [["Pétrir", "SPIRAL"], ["Pointer", "HERA / BFC"], ["Diviser", "MIRA…"], ["Laminer", "RHEA"], ["Apprêter", "HERA / BFC"], ["Cuire", "SOLEO…"], ["Ressuer", "ZEPHYR"], ["Conserver", "KRONOS…"]];
    var b = "";
    steps.forEach(function (s, i) {
      var x = 10 + (i % 4) * 172, y = 20 + Math.floor(i / 4) * 90;
      b += box(x, y, 150, 56, s[0], s[1], i === 3 ? "hl" : "");
      if (i % 4 < 3) b += arrow(x + 150, y + 28, x + 172, y + 28);
    });
    return wrap("0 0 700 200", "Chaîne de production du fournil", b);
  };

  D.spiral = function () {
    var b = '<rect x="40" y="60" width="150" height="110" rx="12" class="bowl"/><line x1="115" y1="40" x2="115" y2="130" class="tool"/><path d="M95 130 q20 20 40 0" class="tool" fill="none"/>' +
      '<text x="115" y="195" text-anchor="middle" class="t2">cuve + spirale + barre</text>';
    b += box(260, 40, 160, 50, "TL — basculement bas", "vers table de travail");
    b += box(260, 120, 160, 50, "TH — basculement haut", "vers trémie de diviseuse", "hl");
    b += arrow(190, 100, 260, 65) + arrow(190, 120, 260, 145);
    b += '<text x="470" y="70" class="t2">Vitesse lente : incorporation</text><text x="470" y="95" class="t2">Vitesse rapide : développement</text>';
    return wrap("0 0 700 210", "SPIRAL EVO : TL et TH", b);
  };

  D.rhea = function () {
    var b = box(10, 50, 130, 60, "Abaisse", "rouleaux, 1–50 mm");
    b += box(190, 50, 130, 60, "Tourage", "pliages");
    b += box(370, 50, 130, 60, "Enroulement", "de l'abaisse", "hl");
    b += box(550, 50, 140, 60, "Découpe (SC)", "jusqu'à 4 outils");
    b += arrow(140, 80, 190, 80) + arrow(320, 80, 370, 80) + arrow(500, 80, 550, 80);
    b += '<text x="350" y="150" text-anchor="middle" class="t2">Modes AUTO : automatique · semi-automatique · manuel</text>';
    return wrap("0 0 700 170", "RHEA : du laminage à la découpe", b);
  };

  D.hera = function () {
    var ph = [["Prérefroidissement", "préparer l'enceinte"], ["Blocage", "froid, activité ralentie"], ["Fermentation", "température + humidité"], ["Dormillon", "maintien"]];
    var b = "";
    ph.forEach(function (p, i) { var x = 10 + i * 172; b += box(x, 40, 150, 62, p[0], p[1], i === 2 ? "hl" : ""); if (i < 3) b += arrow(x + 150, 71, x + 172, 71); });
    b += '<text x="350" y="140" text-anchor="middle" class="t2">Leviers : température · humidité · ventilation (jusqu\'à 20 phases programmables)</text>';
    return wrap("0 0 700 160", "HERA : phases d'un cycle de fermentation", b);
  };

  D.bfc = function () {
    var b = '<rect x="30" y="20" width="300" height="150" rx="6" class="room"/>' +
      '<rect x="40" y="30" width="50" height="130" rx="4" class="hl2"/><text x="65" y="98" text-anchor="middle" class="t2" transform="rotate(-90 65 98)">bloc évaporateur</text>' +
      '<rect x="130" y="60" width="50" height="90" rx="3" class="cart"/><rect x="200" y="60" width="50" height="90" rx="3" class="cart"/><rect x="260" y="60" width="50" height="90" rx="3" class="cart"/>' +
      '<text x="220" y="52" text-anchor="middle" class="t2">chariots</text>';
    b += '<path d="M95 40 H300" class="flow"/><path d="M300 40 V54" class="flow" marker-end="url(#ah)"/>';
    b += '<text x="390" y="50" class="t2">Froid · chaleur · humidité</text><text x="390" y="74" class="t2">+ circulation d\'air</text>' +
      '<text x="390" y="110" class="t2">Chambre modulable par pas de 200 mm</text><text x="390" y="134" class="t2">(largeur et profondeur)</text>';
    return wrap("0 0 700 190", "BFC : principe d'une chambre (vue de dessus simplifiée)", b);
  };

  D.zephyr = function () {
    var b = box(10, 40, 150, 60, "Sortie du four", "chariots chauds");
    b += box(210, 40, 180, 60, "Zone ventilée", "air ambiant", "hl");
    b += box(440, 40, 180, 60, "Zone réfrigérée", "rideau à lanières");
    b += arrow(160, 70, 210, 70) + arrow(390, 70, 440, 70);
    b += '<text x="350" y="140" text-anchor="middle" class="t2">Option air ambiant seul (2 ou 4 chariots) ou combinaison ambiant + froid</text>';
    return wrap("0 0 700 160", "ZEPHYR : ressuage organisé", b);
  };

  D.pack100 = function () {
    var s = [["SPIRAL TH 300", "pétrir"], ["DVP", "diviser"], ["MEDIO F.A.", "repos"], ["MAJOR AUTO", "façonner"], ["BFC", "fermenter"], ["SÉRIE 4 – 8.64", "cuire"], ["ZEPHYR", "ressuer"]];
    var b = "";
    s.forEach(function (p, i) { var x = 10 + (i % 4) * 172, y = 20 + Math.floor(i / 4) * 90; b += box(x, y, 150, 56, p[0], p[1], i === 4 ? "hl" : ""); if (i % 4 < 3 && i < 6) b += arrow(x + 150, y + 28, x + 172, y + 28); });
    b += '<text x="350" y="205" text-anchor="middle" class="t2">Eau : DOMIX 30 + FONTO 180 · Supports : tables, chariots, bacs, balances, toiles</text>';
    return wrap("0 0 700 220", "PACK 100 : parcours de la pâte (exemple fabricant)", b);
  };

  window.BGDiagrams = D;
})();
