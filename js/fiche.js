(function () {
  var IMG = BG.images || {}, byId = {};
  var ORDER = ["marque", "chaine", "spiral", "stellar", "mira", "rhea", "paneotrad", "hera", "bfc", "kryo", "soleo", "divain", "rotatif", "zephyr", "pack100", "reperes", "methode"];
  var M = BG.modules.slice().sort(function (a, b) { return ORDER.indexOf(a.id) - ORDER.indexOf(b.id); });
  M.forEach(function (m, i) { m.num = (i + 1 < 10 ? "0" : "") + (i + 1); byId[m.id] = m; });
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function ip(id, x) { return x.path || ("assets/machines/" + id + "/" + x.file); }
  var KEEP = ["quoi", "bg", "fonct", "ctrl", "dim", "carac", "args", "benef", "disc", "obj", "lim", "syn"];
  function photos(m) {
    var l = (IMG[m.id] || []).slice(), pick = [];
    ["machine", "usage", "detail"].forEach(function (k) { l.forEach(function (x) { if (x.kind === k && pick.length < 4 && pick.indexOf(x) < 0 && (k !== "machine" || pick.length < 2)) pick.push(x); }); });
    if (!pick.length) return "";
    return '<div class="ph">' + pick.map(function (x) { return '<figure><div class="im"><img src="' + ip(m.id, x) + '" alt=""></div><figcaption>' + esc(x.caption) + "</figcaption></figure>"; }).join("") + "</div>";
  }
  function fiche(m) {
    var h = '<section class="fiche"><div class="band"><img class="lg" src="assets/brand/bongard-logo.png" alt="Bongard"><div class="k">Académie commerciale · Module ' + m.num + " · " + esc(m.family) + "</div><h1>" + esc(m.title) + "</h1><p>" + esc(m.tagline || "") + "</p></div>" + photos(m);
    m.sections.forEach(function (s) { if (m.kind !== "machine" || KEEP.indexOf(s.id) >= 0) h += "<h2>" + esc(s.title) + "</h2>" + s.html; });
    if (m.pitch) h += '<div class="pitch"><small>Pitch d\'une minute</small>« ' + esc(m.pitch) + " »</div>";
    if (m.summary && m.summary.length) h += "<h2>Mémo</h2><ul>" + m.summary.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
    var tbc = (m.checks || []).filter(function (c) { return c.s !== "ok"; });
    if (tbc.length) h += "<h2>Points à confirmer</h2><ul>" + tbc.map(function (c) { return "<li>" + esc(c.t) + "</li>"; }).join("") + "</ul>";
    h += '<div class="foot">Sources : ' + esc(m.sources || "") + " · " + esc(BG.meta.disclaimer) + "</div></section>";
    return h;
  }
  var hash = (location.hash || "#all").slice(1), out = document.getElementById("out");
  if (byId[hash]) out.innerHTML = fiche(byId[hash]);
  else {
    out.innerHTML = '<section class="fiche cvr"><div class="band"><img class="lg" src="assets/brand/bongard-logo.png" alt="Bongard"><div class="k">Manuel d\'introduction · équipes commerciales et managers</div><h1>Académie commerciale</h1><p>Formation complète — ' + M.length + " modules</p></div><ul class=\"toc\">" + M.map(function (m) { return "<li><b>" + m.num + "</b> · " + esc(m.title) + "</li>"; }).join("") + '</ul><div class="foot">' + esc(BG.meta.edition) + " · " + esc(BG.meta.disclaimer) + "</div></section>" + M.map(fiche).join("");
  }
  window.__ready = true;
})();
