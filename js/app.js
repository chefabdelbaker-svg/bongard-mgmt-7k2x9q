/* BONGARD Académie commerciale — espace commercial.
   Ce fichier ne contient et ne charge AUCUN corrigé ni barème. */
(function () {
  "use strict";
  var ORDER = ["marque", "chaine", "spiral", "stellar", "mira", "rhea", "paneotrad", "hera", "bfc", "kryo", "soleo", "divain", "rotatif", "zephyr", "pack100", "reperes", "methode"];
  var M = BG.modules.slice().sort(function (a, b) { return ORDER.indexOf(a.id) - ORDER.indexOf(b.id); }), byId = {};
  M.forEach(function (m, i) { m.num = (i + 1 < 10 ? "0" : "") + (i + 1); });
  var DL = BG.downloads || { fiche: false, original: false, originals: {} };
  var BGI = window.BGI || { lang: "fr", run: function () {}, trHTML: function (h) { return h; }, trText: function (t) { return t; } };
  if (BGI.lang !== "fr") DL = { fiche: false, original: DL.original, originals: DL.originals };
  M.forEach(function (m) { byId[m.id] = m; });
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var main = $("#main"), side = $("#side");
  var LS = {
    get: function (k, d) { try { var v = localStorage.getItem("bgac." + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem("bgac." + k, JSON.stringify(v)); } catch (e) {} }
  };
  var state = { read: LS.get("read", {}), fav: LS.get("fav", {}), rev: LS.get("rev", {}), last: LS.get("last", null), view: LS.get("view", ""), profile: LS.get("profile", "") };
  function save() { LS.set("read", state.read); LS.set("fav", state.fav); LS.set("rev", state.rev); LS.set("last", state.last); LS.set("view", state.view); LS.set("profile", state.profile); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function strip(h) { return String(h).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(); }
  var IMG = (BG.images) || {};
  function ipath(m, x) { return x.path || ("assets/machines/" + m + "/" + x.file); }
  function pick(id) { var l = IMG[id]; if (!l) return null; var f = l.filter(function (x) { return x.kind === "machine"; })[0] || l[0]; return f ? { src: ipath(id, f), alt: f.alt, cut: !f.path || /machines/.test(f.path) } : null; }
  var CHAIN = [["Pétrir", "spiral", "SPIRAL EVO"], ["Diviser", "mira", "MIRA"], ["Laminer", "rhea", "RHEA"], ["Fermenter", "hera", "HERA"], ["Cuire", "soleo", "SOLEO EVO"], ["Ressuer", "zephyr", "ZEPHYR"]];
  function chain() { return '<div class="chain">' + CHAIN.map(function (c) { var i = pick(c[1]); return '<a href="#/m/' + c[1] + '"><div class="ph"><img src="' + i.src + '" alt="' + esc(i.alt) + '" loading="lazy"></div><b>' + c[0] + '</b><small>' + c[2] + "</small></a>"; }).join("") + "</div>"; }

  /* ---------- index de recherche ---------- */
  var index = [];
  M.forEach(function (m) {
    index.push({ mod: m.id, sec: "", title: m.title, text: m.title + " " + (m.tagline || "") + " " + (m.family || ""), label: m.num + " · " + m.title });
    (m.sections || []).forEach(function (s) { index.push({ mod: m.id, sec: s.id, title: m.title + " — " + s.title, text: m.title + " " + s.title + " " + strip(s.html) + " " + (BGI.lang !== "fr" ? strip(BGI.trHTML(s.html)) + " " + BGI.trText(s.title) : ""), label: m.title, sub: s.title }); });
    if (m.pitch) index.push({ mod: m.id, sec: "pitch", title: m.title + " — présentation", text: m.title + " pitch présentation " + m.pitch, label: m.title, sub: "Présentation en une minute" });
  });
  BG.glossary.forEach(function (g) { index.push({ route: "#/glossaire", title: g[0], text: g[0] + " " + g[1] + " " + (BGI.lang !== "fr" ? BGI.trText(g[0]) + " " + BGI.trText(g[1]) : ""), label: g[0], sub: "Glossaire : " + g[1] }); });
  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  index.forEach(function (i) { i.n = norm(i.text); });
  function search(q) {
    q = norm(q.trim()); if (q.length < 2) return [];
    var ws = q.split(/\s+/), out = [];
    index.forEach(function (i) { var sc = 0; for (var k = 0; k < ws.length; k++) { var p = i.n.indexOf(ws[k]); if (p < 0) { sc = -1; break; } sc += p < 40 ? 3 : 1; } if (sc > 0) out.push({ i: i, sc: sc }); });
    out.sort(function (a, b) { return b.sc - a.sc; });
    return out.slice(0, 12).map(function (o) { return o.i; });
  }
  var sIn = $("#q"), sRes = $("#res");
  sIn.addEventListener("input", function () {
    var r = search(sIn.value);
    sRes.innerHTML = r.map(function (i) {
      var h = i.route || ("#/m/" + i.mod + (i.sec ? "/" + i.sec : ""));
      return '<a href="' + h + '"><b>' + esc(i.label) + '</b><small>' + esc((i.sub || "").slice(0, 110)) + '</small></a>';
    }).join("") || (sIn.value.length > 1 ? '<a><small>Aucun résultat</small></a>' : "");
    sRes.classList.toggle("on", sIn.value.length > 1);
  });
  document.addEventListener("click", function (e) { if (!e.target.closest(".search")) sRes.classList.remove("on"); });
  sIn.addEventListener("keydown", function (e) { if (e.key === "Escape") { sRes.classList.remove("on"); sIn.blur(); } });
  sRes.addEventListener("click", function () { sRes.classList.remove("on"); sIn.value = ""; });
  document.addEventListener("keydown", function (e) {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches("section.fold > h2")) { e.preventDefault(); e.target.parentNode.classList.toggle("shut"); } if (e.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); sIn.focus(); } });

  /* ---------- navigation latérale ---------- */
  function renderSide(curId, curRoute) {
    var fams = []; M.forEach(function (m) { if (fams.indexOf(m.family) < 0) fams.push(m.family); });
    function L(r, t, k) { return '<a href="#/' + r + '"' + (curRoute === k ? ' class="cur"' : "") + ">" + t + "</a>"; }
    var h = L("", "Accueil", "cover") + L("equipements", "Les équipements", "equipements") + "<h2>Outils du rendez-vous</h2>" + L("preparer", "Je prépare ma rencontre", "preparer") + L("differences", "Ce qui fait la différence", "differences") + L("comparer", "Comparer", "comparer") + L("objections", "Questions et inquiétudes", "objections") + L("chiffres", "Chiffres clés", "chiffres") + "<h2>Apprendre</h2>" + L("esprit", "L'esprit Bongard", "esprit") + L("lexique", "Le lexique Bongard", "lexique") + L("parcours", "Parcours 7 jours", "parcours") + L("revision", "Cartes de révision", "revision") + L("glossaire", "Glossaire", "glossaire") + "<h2>Ressources</h2>" + L("favoris", "Mes favoris", "favoris") + L("telechargements", "Téléchargements", "telechargements") + L("sources", "Sources et mises à jour", "sources") + L("profil", "Changer de profil", "profil");
    if (window.BGM) h += "<h2>Management</h2>" + L("management", "Espace management", "management");
    fams.forEach(function (f) {
      h += "<h2>" + esc(f) + "</h2>";
      M.filter(function (m) { return m.family === f; }).forEach(function (m) {
        h += '<a href="#/m/' + m.id + '"' + (m.id === curId ? ' class="cur" aria-current="page"' : "") + '><span class="n">' + m.num + "</span>" + esc(m.title) + '<span class="dot' + (state.read[m.id] ? " read" : "") + '" title="' + (state.read[m.id] ? "Marqué comme lu" : "") + '"></span></a>';
      });
    });
    side.innerHTML = h;
  }
  var IC = {
    home: '<path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10"/>', eq: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 9h16M4 15h16M9 6h.01M9 12h.01M9 18h.01"/>', tools: '<path d="M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2-2z"/>', learn: '<path d="M4 5.5C7 4 9.5 4.3 12 6c2.5-1.7 5-2 8-.5V19c-3-1.5-5.5-1.2-8 .5-2.5-1.7-5-2-8-.5z"/><path d="M12 6v13.5"/>', more: '<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>'
  };
  var BN = [["", "Accueil", "home"], ["equipements", "Équipements", "eq"], ["outils", "Outils", "tools"], ["apprendre", "Apprendre", "learn"], ["plus", "Plus", "more"]];
  var bnav = document.createElement("nav"); bnav.className = "bnav"; bnav.setAttribute("aria-label", "Navigation principale");
  bnav.innerHTML = BN.map(function (b) { return '<a href="#/' + b[0] + '" data-bn="' + b[0] + '"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC[b[2]] + "</svg><span>" + b[1] + "</span></a>"; }).join("");
  document.body.appendChild(bnav);
  function bnActive() {
    var r = (location.hash || "#/").replace(/^#\/?/, "").split("/")[0], t = "plus";
    if (!r || r === "profil" || r === "apropos") t = r ? "plus" : ""; else if (r === "equipements" || r === "m") t = (r === "m" && /^(methode|marque)$/.test((location.hash.split("/")[2] || ""))) ? "apprendre" : "equipements"; else if (/^(outils|preparer|comparer|objections|chiffres|differences)$/.test(r)) t = "outils"; else if (/^(apprendre|parcours|revision|glossaire|esprit|lexique)$/.test(r)) t = "apprendre";
    [].slice.call(bnav.querySelectorAll("a")).forEach(function (a) { var on = a.getAttribute("data-bn") === t; a.classList.toggle("on", on); if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  }
  $("#menu").addEventListener("click", function () { side.classList.toggle("on"); });

  /* ---------- vues ---------- */
  var cur = null;
  function progress() { var n = M.length, r = M.filter(function (m) { return state.read[m.id]; }).length; return { n: n, r: r, p: Math.round(100 * r / n) }; }

  function equipements() {
    var p = progress(), last = state.last && byId[state.last];
    var RL = { spiral: "Pétrir", mira: "Diviser", rhea: "Laminer", hera: "Fermenter", soleo: "Cuire", zephyr: "Ressuer", stellar: "Battre" };
    var rail = ["spiral", "mira", "rhea", "hera", "soleo", "zephyr", "stellar"].map(function (id) { var i = pick(id); return '<a href="#/m/' + id + '"><div class="ph"><img src="' + i.src + '" alt="' + esc(i.alt) + '"></div><b>' + esc(byId[id].title.split(" ")[0]) + "</b><small>" + esc(byId[id].tagline.split(":")[0].slice(0, 34)) + "</small></a>"; }).join("");
    var h = '<div class="hero"><div class="kick">Les équipements</div><h1>Toute la gamme, poste par poste</h1><p class="lead">Chaque fiche réunit les photos officielles, les atouts, les questions à poser au client et les limites à connaître.' + (last ? ' <a class="btn ghost" href="#/m/' + last.id + '">Reprendre : ' + esc(last.title) + "</a>" : "") + '</p><div class="rail">' + rail + "</div></div>";
    h += '<div class="wrap"><div class="sh">De la farine au produit fini</div>' + chain();
    h += '<div class="stats"><div class="stat"><b>' + p.r + " / " + p.n + '</b><span>modules marqués comme lus</span></div><div class="stat"><b>' + Object.keys(state.fav).filter(function (k) { return state.fav[k]; }).length + '</b><span>favoris</span></div><div class="stat" style="flex:1;min-width:220px"><span>Progression de lecture <em>(déclarée)</em></span><div class="bar" style="margin-top:10px"><i style="width:' + p.p + '%"></i></div></div></div>';
    h += '<p class="note">La progression indique ce que vous avez déclaré avoir lu. Elle ne mesure pas votre compréhension : celle-ci est évaluée séparément, par la direction.</p>';
    h += '<div class="sh">Les ' + M.length + ' modules</div><div class="grid">' + M.map(mcard).join("") + "</div>";
    return h + "</div>";
  }
  function ovenSvg(n, g) {
    var d = "", y;
    for (var k = 0; k < 4; k++) {
      y = 22 + k * 24; var on = k === n;
      d += '<rect x="46" y="' + y + '" width="108" height="21" rx="3" fill="#2a2d31" stroke="#4a4f55"/><rect x="52" y="' + (y + 4) + '" width="82" height="13" rx="2" fill="' + (on ? "url(#og)" : "#17181a") + '" stroke="' + (on ? "#ff7a45" : "#3a3e44") + '"/><circle cx="143" cy="' + (y + 10.5) + '" r="3" fill="' + (on ? "#e8312a" : "#55595f") + '"/>';
      if (on) d += '<text x="93" y="' + (y + 14.5) + '" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-weight="800" font-size="11" fill="#fff">' + g + "</text>";
    }
    return '<svg viewBox="0 0 200 130" aria-hidden="true" focusable="false" style="position:absolute;inset:0;width:100%;height:100%"><defs><radialGradient id="og" cx="50%" cy="50%" r="70%"><stop offset="0" stop-color="#ffb347"/><stop offset="1" stop-color="#d9481c"/></radialGradient></defs><rect x="40" y="8" width="120" height="10" rx="3" fill="#8a8f96"/><rect x="42" y="18" width="116" height="104" rx="4" fill="#5b6066"/>' + d + '<rect x="50" y="120" width="6" height="8" fill="#3a3e44"/><rect x="144" y="120" width="6" height="8" fill="#3a3e44"/></svg>';
  }
  function apropos() {
    var mg = !!window.BGM, nm = M.filter(function (m) { return m.kind === "machine"; }).length;
    var h = '<section class="cover"><div class="cv-txt"><span class="beme"><img src="assets/brand/beme-logo.jpg" alt="BEME — Your partner in culinary excellence" width="150" height="150"></span><div class="kick">' + (mg ? "Livret d'intégration · version management" : "Livret d'intégration · équipes commerciales") + '</div><h1>Bienvenue chez BEME</h1><p class="lead">Bongard Middle East est le distributeur exclusif de Bongard dans la région. ' + (mg ? "Ce livret vous aide à former, évaluer et accompagner vos commerciaux sur les équipements que nous vendons." : "Ce livret vous accompagne pour comprendre les équipements, savoir en parler à un client et poser les bonnes questions avant de conseiller.") + '</p><div class="cta"><a class="btn pri" href="#/parcours">Commencer le parcours</a><a class="btn ghost" href="#/equipements">Voir les équipements</a></div></div><figure class="cv-ph"><img src="assets/brand/hero-oven.jpg" alt="Boulanger devant un four Bongard à commande tactile" width="706" height="751"></figure></section>';
    h += '<div class="wrap"><div class="sh">Qui nous sommes</div><div class="about"><p><b>BEME Bakery Equipment LLC</b> (BEME, aussi appelée Bongard Middle East) distribue au Moyen-Orient les équipements de boulangerie et de pâtisserie fabriqués en France. Créée en 2018, la société est basée à Dubai Investment Park 2 (Dubaï) et sert les boulangeries, pâtisseries, hôtels, cafés, boulangeries centrales, unités de production et traiteurs.</p><ul><li><b>Marques :</b> Bongard (fabricant français depuis 1922, marque principale), HydroProcess (hautes pressions) et Savy Goiseau (chocolat).</li><li><b>Zones couvertes :</b> Émirats arabes unis, Arabie saoudite, Qatar, Oman, Koweït, Bahreïn, Liban, Palestine, Soudan, Yémen, Irak et Syrie.</li><li><b>Services :</b> showroom sur rendez-vous, service après-vente 24 h/24 et 7 j/7, stock de pièces détachées aux Émirats et en Arabie saoudite.</li></ul><p class="note">Source : bongard-me.com.</p></div>';
    h += '<div class="sh">À quoi sert ce livret</div><div class="steps">' + (mg ? '<div><b>1</b><h3>Former</h3><p>Le contenu complet par équipement : à utiliser pour animer des sessions et répondre aux questions des équipes.</p></div><div><b>2</b><h3>Évaluer</h3><p>Un questionnaire, un corrigé détaillé et une grille d\'oral pour mesurer ce qui est acquis, de façon équitable.</p></div><div><b>3</b><h3>Accompagner</h3><p>Une fiche candidat qui calcule le score et indique où reprendre les bases. Les résultats servent à progresser, pas à décider seuls d\'un recrutement.</p></div>' : '<div><b>1</b><h3>Comprendre</h3><p>Chaque équipement est expliqué simplement : à quoi il sert, comment il fonctionne, ce qu\'il change pour le client.</p></div><div><b>2</b><h3>Accompagner</h3><p>Ce qui fait la différence, des questions de découverte, les inquiétudes des clients avec leurs réponses et une présentation d\'une minute par fiche.</p></div><div><b>3</b><h3>Retenir</h3><p>Des cartes de révision et un parcours d\'une semaine. Votre responsable vous évaluera séparément.</p></div>') + '</div>';
    return h + '<p><a class="btn pri" href="#/">← Retour à l\'accueil</a></p></div>';
  }
  var PROF = {
    vendeur: { t: "Commercial", d: "Je comprends nos équipements et je sais les mettre en valeur : ce qui fait la différence, les questions à poser, les inquiétudes à lever.", cta: ["Découvrir Bongard", "m/marque"], tiles: [["m/marque", "Découvrir la marque", "Histoire de Bongard depuis 1922, valeurs et chiffres. À lire en premier.", "assets/brand/production-site.jpg"], ["equipements", "Les équipements", "Toutes les fiches machine, en vue « Accompagner ».", "assets/brand/gamme-panorama.jpg"], ["differences", "Ce qui fait la différence", "Les atouts de chaque équipement, et comment comparer loyalement.", "assets/brand/hero-oven.jpg"], ["m/methode", "La méthode commerciale", "Poser les bonnes questions, répondre aux inquiétudes du client, comparer loyalement.", "assets/brand/baker-peel.jpg"], ["preparer", "Je prépare ma rencontre", "Une fiche d'une page par équipement : questions à poser, atouts, inquiétudes du client.", "assets/brand/menu-sources.webp"], ["objections", "Questions et inquiétudes", "Les questions et inquiétudes rencontrées sur le terrain, avec la réponse documentée.", "assets/brand/menu-glossaire.webp"]] },
    techco: { t: "Technicien", d: "Je comprends nos machines en profondeur : fonctionnement, caractéristiques, configurations et limites, pour bien dimensionner et préconiser.", cta: ["Découvrir Bongard", "m/marque"], tiles: [["m/marque", "Découvrir la marque", "Histoire de Bongard depuis 1922, valeurs et chiffres. À lire en premier.", "assets/brand/production-site.jpg"], ["equipements", "Les équipements", "Toutes les fiches machine : fonctionnement, caractéristiques, configurations, limites.", "assets/brand/gamme-panorama.jpg"], ["differences", "Ce qui fait la différence", "Les atouts de chaque équipement, et comment comparer loyalement.", "assets/brand/hero-oven.jpg"], ["comparer", "Comparer", "Deux ou trois équipements côte à côte.", "assets/brand/baker-peel.jpg"], ["m/reperes", "Repères de dimensionnement", "Du laboratoire au froid : les ordres de grandeur utiles.", "assets/brand/menu-telechargements.webp"], ["chiffres", "Chiffres clés", "Les repères à citer, avec leurs conditions.", "assets/brand/menu-sources.webp"]] },
    manager: { t: "Manager / Direction", d: "Je transmets, j'évalue et je suis la progression des équipes.", cta: ["Préparer une séance", "management/animation"], tiles: [["management/animation", "Guide d'animation", "Une séance par jour du parcours, avec jeux de rôle.", "assets/brand/baker-peel.jpg"], ["management/quiz", "Quiz flash", "Des cartes tirées au hasard, notées Juste ou À revoir.", "assets/brand/menu-revision.webp"], ["management/suivi", "Suivi de progression", "Un tableau imprimable par commercial.", "assets/brand/menu-management.webp"], ["management", "Évaluation", "Questionnaire, corrigé, grille d'oral, fiche candidat.", "assets/brand/menu-management.webp"], ["parcours", "Parcours de 7 jours", "Un plan jour par jour pour tout maîtriser en une semaine.", "assets/brand/hero-oven.jpg"], ["esprit", "L'esprit Bongard", "Notre façon d'accompagner, et les mots que nous employons.", "assets/brand/production-site.jpg"]] }
  };
  function profChooser() {
    var mg = !!window.BGM, ks = ["vendeur", "techco"].concat(mg ? ["manager"] : []);
    var para = mg ? "Ce livret vous donne les contenus à transmettre, un guide pour animer vos séances, un quiz, le suivi de progression et les outils d'évaluation. Autour de vous, tout un écosystème : Bongard, BEME, le service après-vente, le stock de pièces et vos équipes, à qui vous transmettez ce regard propre à la marque." : "Ce livret est votre point de départ : l'histoire de Bongard, les équipements que nous proposons, les atouts et la façon d'en parler à nos partenaires, et des outils concrets pour apprendre, vous préparer et progresser à votre rythme. Autour de vous, tout un écosystème : Bongard, BEME, le service après-vente, le stock de pièces, et votre responsable à vos côtés à chaque étape.";
    var h = '<section class="landing"><div class="ln-in"><div class="ln-logos"><img class="ln-bg" src="assets/brand/bongard-logo.png" alt="Bongard" width="203" height="34"><span class="ln-beme"><img src="assets/brand/beme-logo.jpg" alt="BEME — Your partner in culinary excellence" width="150" height="150"></span></div>';
    h += '<div class="kick">Votre livret d\'accueil et d\'intégration</div><h1>Bienvenue dans la famille BEME</h1><p class="sub">Bongard Equipment Middle East</p><p class="hello">Nous sommes heureux de vous accueillir, et fiers de vous accompagner dès vos premiers pas.</p><p class="lead">Être commercial ou technicien chez Bongard, ce n\'est pas seulement un métier : c\'est un parcours. Chez BEME, nous formons des professionnels qui connaissent l\'histoire de la marque, comprennent chaque équipement jusque dans le détail, et savent expliquer simplement ce qui fait la différence. Ce regard est propre à Bongard et à BEME.</p><p class="lead">Il se retrouve jusque dans nos mots : ici, nous parlons Bongard.</p><ul class="lexi"><li>Nous ne parlons pas de clients, mais de <b>partenaires</b>.</li><li>Nous ne parlons pas de vente, mais d\'<b>accompagner</b>.</li><li>Nous expliquons avec honnêteté : <b>nous ne vendons pas du rêve</b>.</li></ul><p class="lead">' + para + '</p><button class="go-pick" data-act="gopick" type="button"><span>Choisir mon profil</span><span class="ar">↓</span></button><p class="enter" id="pickhere">Choisissez votre profil pour entrer</p>';
    h += '<div class="profiles big" role="group" aria-label="Choisir son profil">' + ks.map(function (k) { var r = PROF[k]; return '<button class="pf' + (state.profile === k ? " on" : "") + '" data-act="profile" data-v="' + k + '" aria-pressed="' + (state.profile === k) + '"><b>' + r.t + "</b><span>" + r.d + "</span></button>"; }).join("") + '</div><p class="ln-more"><a href="#/apropos">À propos de BEME et de ce livret</a></p></div></section>';
    return h;
  }
  function cover() {
    var mg = !!window.BGM, cp = state.profile, nm = M.filter(function (m) { return m.kind === "machine"; }).length;
    if (!cp || !PROF[cp] || (cp === "manager" && !mg)) return profChooser();
    var P = PROF[cp], lastM = state.last && byId[state.last];
    var h = '<section class="welcome sm"><div class="kick"><span>Profil</span> <b>' + P.t + '</b> <a href="#/profil">changer</a></div><h1>Bienvenue chez BEME</h1><div class="cta"><a class="btn pri" href="#/' + P.cta[1] + '">' + P.cta[0] + "</a>" + (lastM ? '<a class="btn ghost" href="#/m/' + lastM.id + '"><span>Reprendre :</span> ' + esc(lastM.title) + "</a>" : "") + "</div></section>";
    h += '<div class="wrap"><div class="sh">Pour vous</div><div class="tools">' + P.tiles.map(function (t) { return '<a class="tool" href="#/' + t[0] + '" style="background-image:url(' + t[3] + ')"><span><b>' + t[1] + "</b><small>" + t[2] + "</small></span></a>"; }).join("") + "</div>";
    var tiles = [
      ["m/marque", "Découvrir la marque", "Histoire de Bongard depuis 1922, valeurs et chiffres. À lire en premier.", "assets/brand/production-site.jpg"],
      ["equipements", "Les équipements", nm + " fiches machine : photos, fonctionnement, atouts, inquiétudes du client et présentation d'une minute.", "assets/brand/gamme-panorama.jpg"],
      ["parcours", "Parcours de 7 jours", "Un plan jour par jour pour tout maîtriser en une semaine, avec l'objectif de chaque journée.", "assets/brand/baker-peel.jpg"],
      ["revision", "Cartes de révision", "Des questions et réponses pour vous tester, module par module.", "assets/brand/menu-revision.webp"],
      ["glossaire", "Glossaire", "Les termes du métier expliqués en langage simple.", "assets/brand/menu-glossaire.webp"],
      ["telechargements", "Téléchargements", "Les fiches PDF à imprimer ou à emporter en rendez-vous.", "assets/brand/menu-telechargements.webp"],
      ["sources", "Sources et points à confirmer", "D'où viennent les informations et ce qui doit être vérifié avant de s'engager auprès d'un client.", "assets/brand/menu-sources.webp"]
    ];
    if (mg) tiles.push(["management", "Espace management", "Guide d'évaluation, questionnaire, corrigé et barèmes, grille d'oral et fiche candidat. Réservé aux managers.", "assets/brand/menu-management.webp"]);
    h += '<div class="sh">Toutes les rubriques</div><div class="oven"><div class="oven-hood"><span>BONGARD</span></div><div class="menu-grid">' + tiles.map(function (t) { return '<a class="mt" href="#/' + t[0] + '">' + (t[3] ? '<span class="mi" style="background-image:url(' + t[3] + ')"></span>' : '<span class="mi plain"><i>' + ({ revision: "?", glossaire: "Aa", telechargements: "↓", sources: "✓", management: "★" }[t[0]] || "") + '</i></span>') + "<b>" + t[1] + "</b><small>" + t[2] + "</small></a>"; }).join("") + '</div><div class="oven-feet"><i></i><i></i></div></div><p><a href="#/apropos">À propos de BEME et de ce livret →</a></p></div>';
    return h;
  }
  function accToc(list) { return '<div class="toc acc-toc noprint" aria-label="Sommaire">' + list.map(function (m) { return '<a href="#/differences" data-act="aopen" data-mod="' + m.id + '">' + esc(m.title) + "</a>"; }).join("") + "</div>"; }
  function differences() {
    var h = '<h1 class="pg">Ce qui fait la différence</h1><p class="tag">Pour chaque équipement, les atouts documentés, puis la façon de comparer loyalement. On met en avant ce qui fait la différence, sans jamais affirmer une supériorité que les documents ne démontrent pas.</p><div class="filters noprint"><input type="search" id="dq" data-filter="df" placeholder="Chercher un équipement ou un atout" aria-label="Chercher"></div>' + accToc(MACH) + '<div class="acc-list" id="dlist">';
    MACH.forEach(function (m) {
      var d = document.createElement("div"); d.innerHTML = secHtml(m, "args"); var t = d.querySelector("table"), rows = t ? [].slice.call(t.querySelectorAll("tbody tr")).slice(0, 4) : [];
      var tbl = rows.length ? '<div class="tw"><table class="t">' + t.querySelector("thead").outerHTML + "<tbody>" + rows.map(function (r) { return "<tr>" + r.innerHTML + "</tr>"; }).join("") + "</tbody></table></div>" : (function () { var l = lis(m, "args"); return ul(l.slice(0, 4)); })();
      var df = secHtml(m, "diff");
      h += '<section class="sec df fold acc shut" id="a-' + m.id + '" data-mod="' + m.id + '"><h2 tabindex="0" role="button">' + esc(m.title) + '</h2><div class="fb"><h3>Les atouts</h3>' + tbl + (df ? "<h3>Comparer loyalement</h3>" + df : "") + '<p><a class="btn" href="#/m/' + m.id + '">Ouvrir la fiche complète</a></p></div></section>';
    });
    return h + "</div>";
  }
  function esprit() {
    var P = [["Comprendre avant d'accompagner", "Avant de parler d'un équipement, on écoute le projet du boulanger : ses produits, ses volumes, son local, son équipe."], ["Parler simplement", "Un bon accompagnement se comprend du premier coup, sans jargon inutile."], ["Dire la condition", "Un chiffre se cite toujours avec sa condition, et on dit ce qui reste à vérifier."], ["Être honnête sur les limites", "Mieux vaut dire ce qu'un équipement ne fait pas que promettre ce que nous ne tenons pas."], ["Rester à côté dans la durée", "Service après-vente, pièces détachées, relevé technique : l'accompagnement ne s'arrête pas à la livraison."], ["Apprendre sans cesse", "Les équipements évoluent : on relit les fiches et on met à jour ses connaissances."]];
    var h = '<h1 class="pg">L\'esprit Bongard</h1><p class="tag">Être commercial ou technicien chez Bongard, ce n\'est pas seulement un métier : c\'est un parcours. Voici ce qui nous guide.</p><div class="hubgrid">' + P.map(function (x, i) { return '<div class="hub"><b>' + (i + 1) + " · " + x[0] + "</b><span>" + x[1] + "</span></div>"; }).join("") + '</div><p><a class="btn pri" href="#/lexique">Le lexique Bongard</a></p>';
    return h;
  }
  function lexique() {
    var L = [["Vendre", "Accompagner, conseiller", "« Parlez-moi de votre projet. »"], ["Revendeur", "Partenaire", "« Nous sommes à vos côtés avant et après l'installation. »"], ["Client, prospect", "Partenaire, futur partenaire", "Dans un contrat, le mot « client » reste correct."], ["Objection", "Question, inquiétude du client", "« Je comprends votre inquiétude, regardons-la ensemble. »"], ["Pitch", "Présentation en une minute", "« En une minute, voici ce que cet équipement change pour vous. »"], ["Argument", "Atout, ce qui fait la différence", "« Voici ce qui fait la différence pour votre production. »"], ["Concurrent", "Autre solution", "« Comparons loyalement les deux solutions. »"], ["Conclure la vente", "Construire le projet ensemble", "« Que faut-il vérifier pour que ce projet fonctionne ? »"], ["Rendez-vous commercial", "Rencontre projet", "« Faisons le point sur votre projet. »"], ["Après-vente", "Accompagnement dans la durée", "« Nous restons à vos côtés après la mise en service. »"]];
    return '<h1 class="pg">Le lexique Bongard</h1><p class="tag">Ici, on ne vend pas, on accompagne. Les mots que nous choisissons disent la façon dont nous travaillons : on part du besoin du partenaire.</p><div class="tw"><table class="t"><thead><tr><th>Plutôt que…</th><th>Nous disons…</th><th>Par exemple</th></tr></thead><tbody>' + L.map(function (r) { return "<tr><td>" + r[0] + "</td><td><b>" + r[1] + "</b></td><td>" + r[2] + "</td></tr>"; }).join("") + '</tbody></table></div><div class="lx-list">' + L.map(function (r) { return '<article class="lx"><small>Plutôt que…</small><p class="a">' + r[0] + '</p><small>Nous disons…</small><p class="b"><b>' + r[1] + '</b></p><small>Par exemple</small><p class="ex">' + r[2] + "</p></article>"; }).join("") + '</div><p class="note">Les documents officiels de Bongard gardent leur vocabulaire (par exemple « distributeur exclusif »). Ce lexique est une proposition de la direction de BEME, à adapter.</p>';
  }
  function hub(title, intro, items) {
    return '<h1 class="pg">' + title + '</h1><p class="tag">' + intro + '</p><div class="hubgrid">' + items.map(function (i) { return '<a class="hub" href="#/' + i[0] + '"><b>' + i[1] + "</b><span>" + i[2] + "</span></a>"; }).join("") + "</div>";
  }
  function hubOutils() { return hub("Outils du rendez-vous", "Pour préparer un rendez-vous, répondre à un client et comparer.", [["preparer", "Je prépare ma rencontre", "Une fiche d'une page par équipement : questions à poser, atouts, inquiétudes du client."], ["differences", "Ce qui fait la différence", "Les atouts de chaque équipement, et comment comparer loyalement."], ["comparer", "Comparer", "Deux ou trois équipements côte à côte."], ["objections", "Questions et inquiétudes", "Les questions et inquiétudes rencontrées sur le terrain, avec la réponse documentée."], ["chiffres", "Chiffres clés", "Les repères à citer, avec leurs conditions."]]); }
  function hubApprendre() { return hub("Apprendre", "Se former à son rythme, puis se tester.", [["esprit", "L'esprit Bongard", "Notre façon d'accompagner : comprendre, parler simplement, rester à côté."], ["lexique", "Le lexique Bongard", "Les mots que nous employons : ici, on ne vend pas, on accompagne."], ["m/methode", "La méthode commerciale", "Poser les bonnes questions, répondre aux inquiétudes du client, comparer loyalement."], ["m/marque", "Découvrir la marque", "Histoire de Bongard depuis 1922, valeurs et chiffres. À lire en premier."], ["parcours", "Parcours de 7 jours", "Un plan jour par jour pour tout maîtriser en une semaine."], ["revision", "Cartes de révision", "Des questions et réponses pour vous tester, module par module."], ["glossaire", "Glossaire", "Les termes du métier expliqués en langage simple."]]); }
  function hubPlus() {
    var it = [["favoris", "Mes favoris", "Les fiches que vous avez mises de côté."], ["telechargements", "Téléchargements", "Les fiches PDF à imprimer ou à emporter en rendez-vous."], ["sources", "Sources et mises à jour", "D'où viennent les informations, ce qui doit être vérifié, et les dernières mises à jour."], ["apropos", "À propos de BEME", "Qui nous sommes et à quoi sert ce livret."], ["profil", "Changer de profil", "Commercial, technicien" + (window.BGM ? ", manager / direction" : "") + "."]];
    if (window.BGM) it.unshift(["management", "Espace management", "Évaluation, guide d'animation, quiz flash et suivi. Réservé aux managers."]);
    var mine = it.filter(function (i) { return /^(management|favoris|telechargements|profil)$/.test(i[0]); }), info = it.filter(function (i) { return /^(sources|apropos)$/.test(i[0]); });
    function grid(l) { return '<div class="hubgrid">' + l.map(function (i) { return '<a class="hub" href="#/' + i[0] + '"><b>' + i[1] + "</b><span>" + i[2] + "</span></a>"; }).join("") + "</div>"; }
    return '<h1 class="pg">Plus</h1><p class="tag">Tout le reste de l\'application.</p><h2 class="hsub">Mon espace</h2>' + grid(mine) + '<h2 class="hsub">Informations</h2>' + grid(info);
  }
  function telechargements() {
    var h = '<h1 class="pg">Téléchargements</h1><p class="tag">Des fiches PDF à emporter en rendez-vous.</p>';
    if (!DL.fiche && !DL.original) return h + "<p>Aucun téléchargement n'est disponible pour le moment.</p>";
    h += '<div class="tw"><table class="t"><thead><tr><th>Module</th>' + (DL.fiche ? "<th>Fiche Académie (PDF)</th>" : "") + (DL.original ? "<th>Argumentaire d\'origine Bongard (PDF)</th>" : "") + "</tr></thead><tbody>";
    M.forEach(function (m) {
      if (m.kind !== "machine" && !(DL.fiche)) return;
      var o = DL.originals && DL.originals[m.id];
      h += "<tr><td><b>" + m.num + " · " + esc(m.title) + "</b></td>" + (DL.fiche ? '<td><a href="docs/fiches/' + m.id + '.pdf" download>Télécharger</a></td>' : "") + (DL.original ? "<td>" + (o ? '<a href="' + o[0] + '" download>' + esc(o[1]) + "</a>" : "—") + "</td>" : "") + "</tr>";
    });
    h += "</tbody></table></div>";
    if (DL.original) h += '<p class="note">Les argumentaires d\'origine sont des documents internes Bongard ; certains sont en anglais. Leur diffusion dépend de l\'autorisation de Bongard.</p>';
    return h;
  }
  function dlbar(m) {
    var h = "", o = DL.original && DL.originals && DL.originals[m.id];
    if (DL.fiche) h += '<a class="btn" href="docs/fiches/' + m.id + '.pdf" download>⬇ Fiche PDF</a>';
    if (o) h += '<a class="btn" href="' + o[0] + '" download>⬇ Argumentaire d\'origine</a>';
    return h;
  }
  function mcard(m) {
    var i = pick(m.id), cov = m.id === "marque" || m.id === "pack100" || m.id === "reperes";
    var im = m.id === "marque" ? { src: "assets/brand/hero-oven.jpg", alt: "" } : m.id === "chaine" ? { src: "assets/brand/gamme-panorama.jpg", alt: "" } : m.id === "methode" ? { src: "assets/brand/baker-peel.jpg", alt: "" } : i;
    var cover = m.id === "marque" || m.id === "methode";
    return '<div class="card"><a class="cover" href="#/m/' + m.id + '">' + (im ? '<div class="ph' + (cover ? " cover" : "") + '"><img src="' + im.src + '" alt="" loading="lazy"></div>' : "") + '<div class="bd"><span class="fam">Module ' + m.num + " · " + esc(m.family) + "</span><h3>" + esc(m.title) + "</h3><p>" + esc(m.tagline || "") + '</p><div><span class="pill">' + (state.read[m.id] ? "✓ Lu" : "À lire") + "</span>" + (state.fav[m.id] ? ' <span class="pill">★ Favori</span>' : "") + "</div></div></a></div>";
  }

  var KIND = { machine: "Machine", usage: "En situation", detail: "Détail", schema: "Schéma" };
  function gallery(m) {
    var l = IMG[m.id]; if (!l || !l.length) return "";
    return '<div class="sh">Visuels officiels</div><div class="gal">' + l.map(function (x, k) {
      var src = ipath(m.id, x), cut = x.kind === "machine";
      return '<figure class="' + (cut ? "cut" : "") + '" data-zoom data-g="' + m.id + '" data-k="' + k + '"><span class="k">' + KIND[x.kind] + '</span><img src="' + src + '" alt="' + esc(x.alt) + '" width="' + x.w + '" height="' + x.h + '" loading="lazy"><figcaption>' + esc(x.caption) + "<i>" + esc(x.source) + "</i></figcaption></figure>";
    }).join("") + "</div>";
  }
  var HEROIMG = { marque: "assets/brand/production-site.jpg", methode: "assets/brand/baker-peel.jpg", chaine: "assets/brand/gamme-panorama.jpg" };
  function phero(m) {
    var i = pick(m.id), st = "";
    if (HEROIMG[m.id]) st = '<div class="stage cover"><img src="' + HEROIMG[m.id] + '" alt=""></div>';
    else if (i) st = '<div class="stage"><img src="' + i.src + '" alt="' + esc(i.alt) + '"></div>';
    return '<div class="phero"><div><div class="num">' + m.num + '</div><div class="meta">Module ' + m.num + " · " + esc(m.family) + "</div><h1>" + esc(m.title) + '</h1><p class="tag">' + esc(m.tagline || "") + "</p></div>" + st + "</div>";
  }

  var SELL = ["quoi", "users", "args", "benef", "diff", "disc", "obj", "syn"];
  function stT(t, vw) { return vw === "tout" ? t : t.replace(/^\d+ · /, ""); }
  function moduleView(m) {
    var h = phero(m) + '<div class="wrap">';
    h += '<div class="toolbar"><a class="btn pri" href="#/revision/' + m.id + '">Réviser ce module</a><button class="btn" data-act="read">' + (state.read[m.id] ? "✓ Lu — annuler" : "Marquer comme lu") + '</button>' + (DL.fiche ? '<a class="btn" href="docs/fiches/' + m.id + '.pdf" download>⬇ Fiche PDF</a>' : "") + '<details class="more"><summary class="btn">Plus d\'actions</summary><div class="moreb"><button class="btn" data-act="fav">' + (state.fav[m.id] ? "★ Retirer des favoris" : "☆ Ajouter aux favoris") + '</button><button class="btn" data-act="print">Imprimer / PDF</button>' + (DL.original && DL.originals && DL.originals[m.id] ? '<a class="btn" href="' + DL.originals[m.id][0] + '" download>⬇ Argumentaire d\'origine</a>' : "") + "</div></details></div>";
    var mach = m.kind === "machine", vw = mach ? (state.view || (state.profile === "vendeur" ? "vendre" : "tout")) : "tout";
    function inV(id) { return vw === "tout" || (vw === "vendre" ? SELL.indexOf(id) >= 0 : SELL.indexOf(id) < 0); }
    if (mach) h += '<div class="vtabs" role="tablist" aria-label="Vue de la fiche">' + [["vendre", "Accompagner", "Atouts, questions à poser, inquiétudes du client, présentation"], ["tech", "Technique", "Fonctionnement, caractéristiques, configurations, limites"], ["tout", "Fiche complète", "Toutes les rubriques"]].map(function (v) { return '<button class="vt' + (vw === v[0] ? " on" : "") + '" role="tab" aria-selected="' + (vw === v[0]) + '" data-act="view" data-v="' + v[0] + '"><b>' + v[1] + "</b><small>" + v[2] + "</small></button>"; }).join("") + "</div>";
    var showPitch = !mach || vw !== "tech", showVerif = !mach || vw !== "vendre";
    if (mach && vw !== "tech" && (m.pitch || lis(m, "benef").length)) h += '<div class="quick"><div class="qh">En 30 secondes</div>' + (m.pitch ? '<p class="qp">« ' + esc(m.pitch) + " »</p>" : "") + ul(lis(m, "benef").slice(0, 3)) + "</div>";
    h += '<div class="toc" aria-label="Sommaire">' + m.sections.filter(function (s) { return !mach || inV(s.id); }).map(function (s) { return '<a href="#/m/' + m.id + "/" + s.id + '">' + esc(stT(s.title, vw)) + "</a>"; }).join("") + (m.pitch && showPitch ? '<a href="#/m/' + m.id + '/pitch">Présentation</a>' : "") + (m.checks && m.checks.length && showVerif ? '<a href="#/m/' + m.id + '/verif">Vérifications</a>' : "") + "</div>";
    if (m.id === "chaine") h += chain();
    h += gallery(m);
    if (m.id === "pack100") h += '<p class="note">Visuels : les équipements cités dans le pack, issus des brochures de chaque machine. Le plan d’implantation du PACK 100 n’est pas reproduit ici.</p>';
    if (m.diagram && window.BGDiagrams[m.diagram]) h += window.BGDiagrams[m.diagram]();
    m.sections.forEach(function (s) { if (mach && !inV(s.id)) return; h += '<section class="sec fold" id="s-' + s.id + '"><h2 tabindex="0" role="button">' + esc(stT(s.title, vw)) + "</h2><div class=\"fb\">" + s.html + "</div></section>"; });
    if (m.pitch && showPitch) h += '<section class="sec" id="s-pitch"><div class="pitch"><small>Présentation en une minute</small>« ' + esc(m.pitch) + ' »</div></section>';
    if (m.summary && m.summary.length && showPitch) h += '<section class="sec"><h2>Mémo</h2><ul>' + m.summary.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></section>";
    if (m.checks && m.checks.length && showVerif) h += '<section class="sec" id="s-verif"><h2>Vérifications documentaires</h2><ul class="checks">' + m.checks.map(function (c) { return '<li><span class="badge ' + c.s + '">' + BG.status[c.s].label + "</span>" + esc(c.t) + "</li>"; }).join("") + '</ul><p class="note">Sources : ' + esc(m.sources) + "</p></section>";
    return h + "</div>";
  }

  function parcours() {
    var h = '<h1 class="pg">Parcours guidé de 7 jours</h1><p class="tag">Une semaine pour comprendre l\'ensemble. Marquez chaque module comme lu au fil de la lecture.</p><div class="week">';
    BG.plan.forEach(function (d) {
      h += '<div class="day"><div class="d">J' + d.day + '</div><div><b class="ui">' + esc(d.title) + "</b><p style=\"margin:4px 0\">" + esc(d.task) + '</p><div>' + d.mods.map(function (id) { return '<a class="pill" href="#/m/' + id + '">' + (state.read[id] ? "✓ " : "") + esc(byId[id].title) + "</a> "; }).join("") + "</div></div></div>";
    });
    return h + "</div>";
  }

  var fc = { deck: [], i: 0, flip: false, mod: null };
  function buildDeck(modId) {
    var d = []; M.forEach(function (m) { if (modId && m.id !== modId) return; (m.cards || []).forEach(function (c) { d.push({ k: m.id + ":" + d.length, mod: m.title, q: c[0], a: c[1] }); }); });
    return d;
  }
  function revision(modId) {
    if (fc.mod !== modId || !fc.deck.length) { fc.deck = buildDeck(modId); fc.i = 0; fc.flip = false; fc.mod = modId; }
    var c = fc.deck[fc.i], h = '<h1 class="pg">Cartes de révision</h1><p class="tag">' + (modId ? "Module : " + esc(byId[modId].title) + ' — <a href="#/revision">toutes les cartes</a>' : "Toutes les cartes") + "</p>";
    if (!c) return h + "<p>Aucune carte pour ce module.</p>";
    var st = state.rev[c.k] || "";
    h += '<div class="flash"><p class="note" style="text-align:center">Carte ' + (fc.i + 1) + " / " + fc.deck.length + '</p><div class="fc" tabindex="0" role="button" aria-label="Retourner la carte" data-act="flip"><div><small>' + esc(c.mod) + " · " + (fc.flip ? "Réponse" : "Question") + "</small>" + esc(fc.flip ? c.a : c.q) + "</div></div>" +
      '<div class="row"><button class="btn" data-act="prev">← Précédente</button><button class="btn pri" data-act="flip">Retourner</button><button class="btn" data-act="next">Suivante →</button></div>' +
      '<div class="row"><span class="note">Auto-évaluation (non évaluée par la direction) :</span><button class="btn" data-act="rev" data-v="sure">Je maîtrise</button><button class="btn" data-act="rev" data-v="again">À revoir</button>' + (st ? '<span class="pill">' + (st === "sure" ? "Maîtrisée" : "À revoir") + "</span>" : "") + "</div></div>";
    return h;
  }

  function glossaire() {
    return '<h1 class="pg">Glossaire</h1><p class="tag">Les termes essentiels, en langage simple.</p><div class="tw"><table class="t"><thead><tr><th>Terme</th><th>Définition</th></tr></thead><tbody>' + BG.glossary.map(function (g) { return "<tr><td><b>" + esc(g[0]) + "</b></td><td>" + esc(g[1]) + "</td></tr>"; }).join("") + "</tbody></table></div>";
  }
  function favoris() {
    var f = M.filter(function (m) { return state.fav[m.id]; });
    return '<h1 class="pg">Mes favoris</h1>' + (f.length ? '<div class="grid">' + f.map(function (m) { return '<div class="card"><a class="cover" href="#/m/' + m.id + '"><span class="fam">Module ' + m.num + "</span><h3>" + esc(m.title) + "</h3><p>" + esc(m.tagline || "") + "</p></a></div>"; }).join("") + "</div>" : "<p>Aucun favori pour l'instant.</p>");
  }
  function sources() {
    var h = '<h1 class="pg">Sources et points à confirmer</h1><p class="tag">Ce support est établi à partir de documents Bongard. Voici ce qu\'il faut savoir avant de s\'en servir devant un client.</p>';
    h += '<section class="sec"><h2>Points à confirmer avant usage</h2><ul>' + BG.toConfirm.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></section>";
    h += '<section class="sec"><h2>Dernières mises à jour</h2><ul>' + (BG.updates || []).map(function (u) { return "<li><b>" + esc(u[0]) + "</b> <span>" + esc(u[1]) + "</span></li>"; }).join("") + "</ul></section>";
    h += '<section class="sec"><h2>Vidéo</h2><p><span class="badge tbc">À confirmer</span>' + esc(BG.video.label) + ". " + esc(BG.video.status) + "</p></section>";
    h += '<section class="sec"><h2>Corpus</h2><div class="tw"><table class="t"><thead><tr><th>Code</th><th>Document</th><th>Édition</th></tr></thead><tbody>' + BG.sources.map(function (s) { return "<tr><td>" + s[0] + "</td><td>" + esc(s[1]) + "</td><td>" + esc(s[2]) + "</td></tr>"; }).join("") + "</tbody></table></div></section>";
    h += '<p class="note">' + esc(BG.meta.disclaimer) + " Les brochures d'origine du Drive ont servi à recouper certains chiffres (RHEA, HERA, BFC EVO) ; les écarts sont signalés dans chaque module.</p>";
    return h;
  }


  /* ---------- outils du commercial : tout est généré depuis le contenu des fiches ---------- */
  var MACH = M.filter(function (m) { return m.kind === "machine"; });
  function secHtml(m, id) { var x = m.sections.filter(function (z) { return z.id === id; })[0]; return x ? x.html : ""; }
  function lis(m, id) { var d = document.createElement("div"); d.innerHTML = secHtml(m, id); return [].slice.call(d.querySelectorAll("li")).map(function (l) { return l.innerHTML; }); }
  function usersBrief(m) {
    var d = document.createElement("div"), l = lis(m, "users"), p; d.innerHTML = secHtml(m, "users"); p = d.querySelector("p");
    if (l.length) return ul(l.slice(0, 3));
    if (p) return "<p>" + p.innerHTML + "</p>";
    var rows = [].slice.call(d.querySelectorAll("tbody tr")).slice(0, 3);
    return rows.length ? '<table class="t"><tbody>' + rows.map(function (r) { return "<tr>" + r.innerHTML + "</tr>"; }).join("") + "</tbody></table>" : "";
  }
  function objs(m) { var d = document.createElement("div"); d.innerHTML = secHtml(m, "obj"); return [].slice.call(d.querySelectorAll(".obj")).map(function (o) { var b = o.querySelector("b"), p = o.querySelector("p"); return { q: b ? b.innerHTML : "", a: p ? p.innerHTML : "" }; }); }
  function ul(a, cls) { return a.length ? "<ul" + (cls ? ' class="' + cls + '"' : "") + ">" + a.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" : ""; }
  function picker(base, cur) {
    return '<div class="pick">' + MACH.map(function (m) { var i = pick(m.id); return '<a class="pk' + (m.id === cur ? " on" : "") + '" href="#/' + base + "/" + m.id + '">' + (i ? '<span class="ph"><img src="' + i.src + '" alt="" loading="lazy"></span>' : "") + "<b>" + esc(m.title) + "</b><small>" + esc(m.family) + "</small></a>"; }).join("") + "</div>";
  }
  function preparer(id) {
    var h = '<h1 class="pg">Je prépare ma rencontre</h1>';
    var m = byId[id]; if (!m || m.kind !== "machine") return h + '<p class="tag">Choisissez l\'équipement dont vous allez parler. Vous obtenez une fiche d\'une page : quoi dire, quoi demander, quoi répondre, quoi vérifier.</p>' + picker("preparer", "");
    var b3 = lis(m, "benef").slice(0, 3), dq = lis(m, "disc"), lm = lis(m, "lim"), sy = lis(m, "syn"), ob = objs(m);
    h += '<p class="tag"><b class="pt">' + esc(m.title) + "</b> <span>" + esc(m.tagline || "") + '</span></p><div class="toolbar noprint"><button class="btn pri" data-act="print">Imprimer / PDF</button><a class="btn" href="#/preparer">Changer d\'équipement</a><a class="btn" href="#/m/' + m.id + '">Ouvrir la fiche complète</a></div>';
    h += '<div class="prep"><div class="q cp"><label>Client <input type="text" placeholder="Nom de l\'entreprise ou du contact"></label> <label>Date <input type="text" placeholder="jj/mm"></label></div>';
    if (m.pitch) h += '<section class="sec"><h2>1 · Ma phrase d\'ouverture</h2><div class="pitch"><small>Présentation en une minute</small>« ' + esc(m.pitch) + " »</div></section>";
    h += '<section class="sec"><h2>2 · Les questions à poser au client</h2>' + ul(dq, "check") + "</section>";
    h += '<section class="sec"><h2>3 · Les trois bénéfices à faire ressortir</h2>' + ul(b3) + "</section>";
    h += '<section class="sec"><h2>4 · Les questions et inquiétudes probables</h2>' + ob.map(function (o) { return '<div class="obj"><b>' + o.q + "</b><p>" + o.a + "</p></div>"; }).join("") + "</section>";
    h += '<section class="sec"><h2>5 · À vérifier avant de recommander</h2>' + ul(lm, "check") + "</section>";
    h += '<section class="sec"><h2>6 · À retenir</h2>' + ul(sy) + "</section>";
    h += '<section class="sec"><h2>Notes du rendez-vous</h2><textarea class="notes" rows="6" placeholder="Besoins exprimés, volumes, contraintes, prochaine étape…"></textarea></section></div>';
    return h;
  }
  function comparer(arg) {
    var sel = (arg || "").split(",").filter(function (x) { return byId[x] && byId[x].kind === "machine"; }).slice(0, 3);
    var h = '<h1 class="pg">Comparer des équipements</h1><p class="tag">Choisissez deux ou trois équipements (trois au maximum) pour les voir côte à côte. Utile pour expliquer pourquoi l\'un plutôt que l\'autre.</p>';
    h += '<div class="chips">' + MACH.map(function (m) { var on = sel.indexOf(m.id) >= 0, nx = on ? sel.filter(function (x) { return x !== m.id; }) : sel.concat(m.id).slice(-3); return '<a class="chip' + (on ? " on" : "") + '" href="#/comparer/' + nx.join(",") + '">' + (on ? "✓ " : "") + esc(m.title) + "</a>"; }).join("") + "</div>";
    if (sel.length < 2) return h + '<p class="note">Sélectionnez au moins deux équipements.</p>';
    var rows = [["En bref", function (m) { return esc(m.tagline || ""); }], ["Pour qui", usersBrief], ["Bénéfices", function (m) { return ul(lis(m, "benef").slice(0, 3)); }], ["À retenir", function (m) { return ul(lis(m, "syn")); }], ["À vérifier avant de recommander", function (m) { return ul(lis(m, "lim").slice(0, 3)); }], ["Pitch", function (m) { return m.pitch ? esc(m.pitch) : ""; }]];
    h += '<div class="toolbar noprint"><button class="btn" data-act="print">Imprimer / PDF</button></div><div class="tw"><table class="t cmp"><thead><tr><th></th>' + sel.map(function (id) { var i = pick(id); return '<th>' + (i ? '<img class="cimg" src="' + i.src + '" alt="">' : "") + '<a href="#/m/' + id + '">' + esc(byId[id].title) + "</a></th>"; }).join("") + "</tr></thead><tbody>";
    rows.forEach(function (r) { h += "<tr><th>" + r[0] + "</th>" + sel.map(function (id) { return "<td>" + r[1](byId[id]) + "</td>"; }).join("") + "</tr>"; });
    return h + "</tbody></table></div>";
  }
  function objections() {
    var all = []; MACH.forEach(function (m) { objs(m).forEach(function (o) { all.push({ m: m, q: o.q, a: o.a }); }); });
    var h = '<h1 class="pg">Questions et inquiétudes</h1><p class="tag">' + all.length + " questions et inquiétudes rencontrées sur le terrain, avec la réponse documentée. Filtrez par équipement ou cherchez un mot.</p>";
    h += '<div class="filters noprint"><input type="search" id="oq" data-filter="ob" placeholder="Chercher (prix, énergie, entretien…)" aria-label="Chercher une question ou une inquiétude"><select id="om" data-filter="ob" aria-label="Équipement"><option value="">Tous les équipements</option>' + MACH.map(function (m) { return '<option value="' + m.id + '">' + esc(m.title) + "</option>"; }).join("") + '</select><span class="note" id="ocount"></span></div>';
    h += '<div id="olist">' + all.map(function (o) { return '<div class="obj ob" data-mod="' + o.m.id + '"><span class="pill">' + esc(o.m.title) + '</span><b>' + o.q + "</b><p>" + o.a + '</p><a class="note" href="#/m/' + o.m.id + '/obj">Voir dans la fiche →</a></div>'; }).join("") + "</div>";
    return h;
  }
  function chiffres() {
    var h = '<h1 class="pg">Chiffres clés et précautions</h1><p class="tag">Les repères à avoir en tête par équipement, et ce qu\'il faut vérifier avant de s\'engager sur un chiffre devant un client. Un chiffre se cite toujours avec sa condition.</p><div class="filters noprint"><input type="search" id="cq" data-filter="ch" placeholder="Chercher un chiffre ou un équipement" aria-label="Chercher"></div>' + accToc(MACH.filter(function (m) { return (m.summary || []).length; })) + '<div class="acc-list" id="clist">';
    MACH.forEach(function (m) { var sm = m.summary || [], lm = lis(m, "lim").slice(0, 3); if (!sm.length) return; h += '<section class="sec ch fold acc shut" id="a-' + m.id + '" data-mod="' + m.id + '"><h2 tabindex="0" role="button">' + esc(m.title) + '</h2><div class="fb"><h3>Repères</h3>' + ul(sm.map(esc)) + (lm.length ? '<h3>À vérifier avant de citer</h3>' + ul(lm, "check") : "") + '<p><a class="btn" href="#/m/' + m.id + '">Ouvrir la fiche complète</a></p></div></section>'; });
    return h + "</div>";
  }
  function applyFilter(kind) {
    var q = ($("#" + ({ ob: "oq", ch: "cq", df: "dq" }[kind])) || {}).value || "", mm = kind === "ob" ? ($("#om") || {}).value || "" : "", n = 0;
    q = q.toLowerCase();
    [].slice.call(document.querySelectorAll("." + kind)).forEach(function (el) { var ok = (!mm || el.getAttribute("data-mod") === mm) && (!q || el.textContent.toLowerCase().indexOf(q) >= 0); el.hidden = !ok; if (ok) n++; if (q && ok && (kind === "df" || kind === "ch")) el.classList.remove("shut"); });
    var c = $("#ocount"); if (c && kind === "ob") c.innerHTML = "<b>" + n + "</b> " + BGI.trText(n > 1 ? "résultats" : "résultat");
  }
  document.addEventListener("input", function (e) { var f = e.target.getAttribute && e.target.getAttribute("data-filter"); if (f) applyFilter(f); });
  document.addEventListener("change", function (e) { var f = e.target.getAttribute && e.target.getAttribute("data-filter"); if (f) applyFilter(f); });

  /* ---------- routeur ---------- */
  function route() {
    var hash = location.hash || "#/", parts = hash.replace(/^#\/?/, "").split("/"), name = parts[0] || "home", h = "", curId = null;
    if (name === "m" && byId[parts[1]]) { curId = parts[1]; cur = byId[curId]; h = moduleView(cur); state.last = curId; save(); document.title = cur.title + " — Académie Bongard"; }
    else if (name === "parcours") { h = parcours(); name = "parcours"; }
    else if (name === "revision") { h = revision(parts[1] && byId[parts[1]] ? parts[1] : null); }
    else if (name === "glossaire") h = glossaire();
    else if (name === "favoris") h = favoris();
    else if (name === "sources") h = sources();
    else if (name === "telechargements") h = telechargements();
    else if (name === "management" && window.BGM) h = BGM.view(parts[1] || "");
    else if (name === "equipements") h = equipements();
    else if (name === "preparer") h = preparer(parts[1]);
    else if (name === "differences") h = differences();
    else if (name === "esprit") h = esprit();
    else if (name === "lexique") h = lexique();
    else if (name === "outils") h = hubOutils();
    else if (name === "apprendre") h = hubApprendre();
    else if (name === "plus") h = hubPlus();
    else if (name === "profil") { h = profChooser(); name = "cover"; }
    else if (name === "apropos") { h = apropos(); name = "cover"; }
    else if (name === "comparer") h = comparer(parts[1]);
    else if (name === "objections") h = objections();
    else if (name === "chiffres") h = chiffres();
    else { h = cover(); name = "cover"; }
    if (name !== "m") { document.title = "Académie commerciale Bongard"; cur = null; }
    main.innerHTML = (name === "m" || name === "cover" || name === "equipements" ? h : '<div class="wrap">' + h + '</div>') + (/^(sources|apropos)$/.test(name) ? '<footer class="f">' + esc(BG.meta.edition) + " · " + esc(BG.meta.disclaimer) + "</footer>" : "");
    document.body.classList.toggle("is-cover", name === "cover");
    document.body.classList.toggle("is-landing", !!main.querySelector(".landing"));
    (function () { var gp = main.querySelector(".go-pick"), pf = main.querySelector(".profiles.big"); if (!gp || !pf) return; function chk() { if (!document.body.contains(gp)) { window.removeEventListener("scroll", chk); window.removeEventListener("resize", chk); return; } gp.classList.toggle("off", pf.getBoundingClientRect().top < window.innerHeight - 40); } window.addEventListener("scroll", chk, { passive: true }); window.addEventListener("resize", chk); chk(); })();
    if (name === "management" && window.BGM) BGM.after();
    if (name === "objections") applyFilter("ob");
    renderSide(curId, name); bnActive();
    side.classList.remove("on");
    if (parts[0] === "m" && window.matchMedia("(max-width:860px)").matches) [].slice.call(main.querySelectorAll("section.fold")).forEach(function (x, i) { if (i > 0) x.classList.add("shut"); });
    var target = parts[0] === "m" && parts[2] ? document.getElementById("s-" + parts[2]) : null;
    if (target && target.classList) target.classList.remove("shut");
    if (target) target.scrollIntoView(); else window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);
  (function () { var bt = document.createElement("button"); bt.className = "totop noprint"; bt.type = "button"; bt.setAttribute("aria-label", "Haut de page"); bt.textContent = "↑"; bt.onclick = function () { window.scrollTo({ top: 0, behavior: "smooth" }); }; document.body.appendChild(bt); window.addEventListener("scroll", function () { bt.classList.toggle("on", window.scrollY > 900 && !document.querySelector(".landing")); }, { passive: true }); })();

  document.addEventListener("click", function (e) {
    var fh = e.target.closest("section.fold > h2"); if (fh) { fh.parentNode.classList.toggle("shut"); return; }
    var z = e.target.closest("[data-zoom]");
    if (z) { lbOpen(z.getAttribute("data-g"), +z.getAttribute("data-k")); return; }
    var lbb = e.target.closest("[data-lb]");
    if (lbb) { var t = lbb.getAttribute("data-lb"); if (t === "x") lbClose(); else lbStep(t === "n" ? 1 : -1); return; }
    if (e.target.id === "zoom") { lbClose(); return; }
    var b = e.target.closest("[data-act]"); if (!b) return;
    var a = b.getAttribute("data-act");
    if (a === "read" && cur) { state.read[cur.id] = !state.read[cur.id]; save(); route(); }
    else if (a === "fav" && cur) { state.fav[cur.id] = !state.fav[cur.id]; save(); route(); }
    else if (a === "view") { state.view = b.getAttribute("data-v"); save(); route(); }
    else if (a === "gopick") { var pk = document.getElementById("pickhere"); if (pk) pk.scrollIntoView({ behavior: "smooth", block: "start" }); }
    else if (a === "aopen") { e.preventDefault(); var tg = document.getElementById("a-" + b.getAttribute("data-mod")); if (tg) { tg.hidden = false; tg.classList.remove("shut"); tg.scrollIntoView({ behavior: "smooth", block: "start" }); } }
    else if (a === "profile") { var pv = b.getAttribute("data-v"); state.profile = pv; state.view = pv === "vendeur" ? "vendre" : "tout"; save(); if (location.hash.indexOf("#/profil") === 0 || !location.hash || location.hash === "#/") { if (location.hash === "#/") route(); else location.hash = "#/"; } else route(); }
    else if (a === "print") window.print();
    else if (a === "flip") { fc.flip = !fc.flip; rerenderRev(); }
    else if (a === "next") { fc.i = (fc.i + 1) % fc.deck.length; fc.flip = false; rerenderRev(); }
    else if (a === "prev") { fc.i = (fc.i - 1 + fc.deck.length) % fc.deck.length; fc.flip = false; rerenderRev(); }
    else if (a === "rev") { state.rev[fc.deck[fc.i].k] = b.getAttribute("data-v"); save(); rerenderRev(); }
  });
  document.addEventListener("keydown", function (e) {
    if ($("#zoom").classList.contains("on")) { if (e.key === "Escape") lbClose(); if (e.key === "ArrowRight") lbStep(1); if (e.key === "ArrowLeft") lbStep(-1); }
    if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("fc")) { e.preventDefault(); fc.flip = !fc.flip; rerenderRev(); }
  });
  var lb = { g: null, k: 0 };
  function lbShow() { var l = IMG[lb.g], x = l[lb.k], z = $("#zoom"); z.querySelector("img").src = ipath(lb.g, x); z.querySelector("img").alt = x.alt; z.querySelector("p").innerHTML = esc(x.caption) + "<small>" + esc(x.source) + " · " + (lb.k + 1) + " / " + l.length + "</small>"; }
  function lbOpen(g, k) { lb.g = g; lb.k = k; lbShow(); $("#zoom").classList.add("on"); }
  function lbClose() { $("#zoom").classList.remove("on"); }
  function lbStep(d) { var n = IMG[lb.g].length; lb.k = (lb.k + d + n) % n; lbShow(); }
  function rerenderRev() { var h = (location.hash || "").split("/"); main.innerHTML = "<div class=\"wrap\">" + revision(h[2] && byId[h[2]] ? h[2] : null) + "</div>"; var f = $(".fc"); if (f) f.focus(); }

  route();
})();
