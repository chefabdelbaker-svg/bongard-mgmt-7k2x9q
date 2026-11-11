/* Espace management — présent uniquement dans la version management. Aucune donnée n'est envoyée : les notes restent dans le navigateur. */
(function () {
  var D = window.BGM_DATA; if (!D) return;
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  var TABS = [["", "Guide d'évaluation"], ["questionnaire", "Questionnaire"], ["corrige", "Corrigé et barème"], ["oral", "Grille d'oral"], ["fiche", "Fiche candidat"], ["animation", "Guide d'animation"], ["quiz", "Quiz flash"], ["suivi", "Suivi de progression"]];
  var Qs = D.questions, ph = function (n) { return Qs.filter(function (q) { return q.phase === n; }); };
  function sum(a) { return a.reduce(function (t, q) { return t + q.points; }, 0); }
  function tabs(cur) { return '<div class="mtabs noprint">' + TABS.map(function (t) { return '<a href="#/management' + (t[0] ? "/" + t[0] : "") + '"' + ' class="' + (t[0] === cur ? "on" : "") + (t[0] === "animation" ? " sep" : "") + '">' + t[1] + "</a>"; }).join("") + "</div>"; }
  function head(t, cur) { return '<h1 class="pg">' + t + '</h1><div class="warn noprint">Version management — confidentielle. Ne pas transmettre ce lien ni les impressions aux commerciaux ou aux candidats.</div>' + tabs(cur) + '<p class="noprint"><button class="btn" data-m="print">Imprimer cette page</button></p>'; }
  function byMod(list, fn) { var h = "", cur = ""; list.forEach(function (q) { if (q.module !== cur) { cur = q.module; h += "<h2>" + q.module + " · " + esc(D.modules[q.module]) + "</h2>"; } h += fn(q); }); return h; }
  function guide() {
    var h = head("Guide d'évaluation", ""), tot = sum(Qs);
    h += '<div class="q"><b>Format</b> : ' + Qs.length + " questions, " + tot + " points écrits, plus 40 points d'oral. Phase 1 : " + ph(1).length + " questions (" + sum(ph(1)) + " pts, sans documents). Phase 2 : " + ph(2).length + " questions (" + sum(ph(2)) + " pts, dossier autorisé).</div>";
    D.notes.forEach(function (n) { h += '<div class="q' + (n.key === "flags" ? " warn" : "") + '"><h3 style="margin:0 0 6px">' + esc(n.title) + '</h3><p style="margin:0">' + esc(n.body).replace(/ \| /g, "<br><br>") + "</p></div>"; });
    return h;
  }
  function questionnaire() {
    var h = head("Questionnaire (sans corrigé)", "questionnaire");
    [1, 2].forEach(function (p) { h += "<h2>Phase " + p + " — " + sum(ph(p)) + " points</h2>" + byMod(ph(p), function (q) { return '<div class="q"><b>' + q.code + "</b> · " + q.points + " pts<br>" + esc(q.prompt) + "</div>"; }); });
    return h;
  }
  function corrige() {
    return head("Corrigé et barème", "corrige") + '<div class="warn">Contenu réservé à la direction.</div>' + byMod(Qs, function (q) { return '<div class="q"><b>' + q.code + "</b> · " + q.points + " pts · phase " + q.phase + "<br>" + esc(q.prompt) + '<div class="key"><b>Attendu :</b> ' + esc(q.expected) + "</div></div>"; });
  }
  function oral() {
    var h = head("Grille d'oral (40 points)", "oral");
    D.oral.forEach(function (o) { h += '<div class="q"><h3 style="margin:0 0 6px">' + esc(o.title) + " — " + o.max + " pts</h3><ul>" + o.items.map(function (i) { return "<li>" + esc(i.label) + " <b>(" + i.max + ")</b></li>"; }).join("") + "</ul></div>"; });
    return h;
  }
  /* fiche candidat : notes enregistrées dans le navigateur */
  var KEY = "bgm.fiche", S = (function () { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } })();
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function totals() {
    var w = 0, o = 0, sc = S.sc || {}; Qs.forEach(function (q) { var v = parseFloat(sc[q.code]); if (!isNaN(v)) w += Math.min(v, q.points); });
    D.oral.forEach(function (b) { b.items.forEach(function (i, k) { var v = parseFloat(sc[b.code + "." + k]); if (!isNaN(v)) o += Math.min(v, i.max); }); });
    return { w: w, o: o, t: w + o };
  }
  function verdict(t) { var p = t.t / 240; return p >= 0.8 && t.o >= 28 ? "Base solide (≥ 80 % et oral ≥ 28/40)" : p >= 0.8 ? "≥ 80 % mais oral inférieur à 28/40 : à consolider" : p >= 0.65 ? "Acquis à consolider avec accompagnement ciblé" : "Reprendre les fondamentaux avant autonomie commerciale"; }
  function fiche() {
    S.sc = S.sc || {};
    var h = head("Fiche candidat", "fiche") + '<div class="q"><label>Candidat <input type="text" data-m="name" value="' + esc(S.name || "") + '" placeholder="Nom"></label> <label>Date <input type="text" data-m="date" value="' + esc(S.date || "") + '"></label> <label>Évaluateur <input type="text" data-m="who" value="' + esc(S.who || "") + '"></label><p class="note noprint">Les notes restent dans ce navigateur (aucun envoi). Pour un autre candidat, imprimez puis utilisez « Nouvelle fiche ».</p></div><div id="tot" class="q"></div>';
    h += byMod(Qs, function (q) { return '<div class="q cp"><span><b>' + q.code + "</b> · " + esc(q.prompt) + '</span><span class="sc"><input type="number" min="0" max="' + q.points + '" step="0.25" data-sc="' + q.code + '" value="' + esc(S.sc[q.code] == null ? "" : S.sc[q.code]) + '"> / ' + q.points + "</span></div>"; });
    h += "<h2>Oral</h2>";
    D.oral.forEach(function (b) { h += '<div class="q"><b>' + esc(b.title) + " (" + b.max + ")</b>" + b.items.map(function (i, k) { var c = b.code + "." + k; return '<div class="cp"><span>' + esc(i.label) + '</span><span class="sc"><input type="number" min="0" max="' + i.max + '" step="0.25" data-sc="' + c + '" value="' + esc(S.sc[c] == null ? "" : S.sc[c]) + '"> / ' + i.max + "</span></div>"; }).join("") + "</div>"; });
    h += '<p class="noprint"><button class="btn" data-m="reset">Nouvelle fiche</button></p>';
    return h;
  }
  function refresh() { var el = document.getElementById("tot"); if (!el) return; var t = totals(); el.innerHTML = "<b>Écrit " + t.w + " / " + sum(Qs) + " · Oral " + t.o + " / 40 · Total " + t.t + " / 240 (" + Math.round(t.t / 2.4) + " %)</b><br>" + esc(verdict(t)) + '<br><span class="note">Repère pédagogique, jamais une décision de recrutement.</span>'; }

  /* ---- contenu issu des fiches (BG) : aucune donnée confidentielle ---- */
  var BGm = window.BG || { modules: [], plan: [] }, mById = {}; BGm.modules.forEach(function (m) { mById[m.id] = m; });
  function secL(m, id) { var d = document.createElement("div"), x = m.sections.filter(function (z) { return z.id === id; })[0]; d.innerHTML = x ? x.html : ""; return d; }
  function liOf(m, id) { return [].slice.call(secL(m, id).querySelectorAll("li")).map(function (l) { return l.innerHTML; }); }
  function objOf(m) { return [].slice.call(secL(m, "obj").querySelectorAll(".obj")).map(function (o) { return { q: o.querySelector("b").innerHTML, a: o.querySelector("p").innerHTML }; }); }
  function bl(a) { return a.length ? "<ul>" + a.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" : ""; }
  var PRINCIPES = ["Faire parler avant de faire lire : une question ouverte avant chaque démonstration.", "Un chiffre se cite toujours avec sa condition. Faire reformuler la condition à voix haute.", "Jeu de rôle court (5 à 8 minutes) : le commercial est le vendeur, un pair est le client, le manager observe et note.", "Féliciter d'abord ce qui est juste, puis corriger une seule chose à la fois.", "Terminer chaque séance par trois phrases que le commercial peut redire seul le lendemain.", "Ne jamais compléter une réponse à la place du commercial : laisser le silence faire son travail."];
  function animation() {
    var h = head("Guide d'animation", "animation") + '<div class="q"><h3 style="margin:0 0 6px">Principes d\'animation</h3>' + bl(PRINCIPES) + '</div><div class="q"><h3 style="margin:0 0 6px">Trame type d\'une séance (60 à 90 minutes)</h3><ol><li><b>Rappel (10 min)</b> : deux ou trois cartes de révision du jour précédent.</li><li><b>Présentation (20 min)</b> : une machine, un bénéfice à la fois, avec la photo à l\'écran.</li><li><b>Jeu de rôle (25 min)</b> : découverte puis objection, en binôme, avec le scénario ci-dessous.</li><li><b>Débrief (10 min)</b> : un point fort, un point à travailler par personne.</li><li><b>Quiz flash (10 min)</b> : <a href="#/management/quiz">lancer le quiz</a> sur les modules du jour.</li></ol></div>';
    (BGm.plan || []).forEach(function (d) {
      h += '<h2>Jour ' + d.day + " · " + esc(d.title) + '</h2><div class="q"><p style="margin:0 0 8px"><b>Objectif :</b> ' + esc(d.task) + "</p>";
      d.mods.forEach(function (id) {
        var m = mById[id]; if (!m) return;
        var dq = liOf(m, "disc").slice(0, 3), ob = objOf(m).slice(0, 2), lm = liOf(m, "lim").slice(0, 2);
        h += '<h3 style="margin:10px 0 4px">' + esc(m.title) + "</h3>";
        if (dq.length) h += "<p style=\"margin:4px 0\"><b>Le client (joué par un pair) répond à ces questions de découverte :</b></p>" + bl(dq);
        if (ob.length) h += "<p style=\"margin:4px 0\"><b>Objections à lancer pendant le jeu de rôle :</b></p>" + bl(ob.map(function (o) { return o.q + " — <i>réponse attendue :</i> " + o.a; }));
        if (lm.length) h += "<p style=\"margin:4px 0\"><b>Pièges à faire repérer (points à vérifier avant de recommander) :</b></p>" + bl(lm);
      });
      h += "</div>";
    });
    return h;
  }
  /* ---- quiz flash : cartes de révision, auto-évaluation par le manager ---- */
  var QZ = { mod: "", deck: [], i: 0, flip: false, ok: 0, ko: 0, who: "", done: false };
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function startQuiz(mod, n) { var d = []; BGm.modules.forEach(function (m) { if (mod && m.id !== mod) return; (m.cards || []).forEach(function (c) { d.push({ m: m.title, id: m.id, q: c[0], a: c[1] }); }); }); QZ.mod = mod; QZ.deck = shuffle(d).slice(0, n || 10); QZ.i = 0; QZ.flip = false; QZ.ok = 0; QZ.ko = 0; QZ.done = false; }
  var SV = (function () { try { return JSON.parse(localStorage.getItem("bgm.suivi")) || {}; } catch (e) { return {}; } })();
  SV.people = SV.people || []; SV.mod = SV.mod || {}; SV.quiz = SV.quiz || {}; SV.note = SV.note || {};
  function persistSV() { try { localStorage.setItem("bgm.suivi", JSON.stringify(SV)); } catch (e) {} }
  function rerender() { window.dispatchEvent(new Event("hashchange")); }
  function quiz() {
    var h = head("Quiz flash", "quiz") + '<p class="noprint">Pour animer une séance : la question s\'affiche, le commercial répond à voix haute, vous retournez la carte et notez « Juste » ou « À revoir ». Le score peut être enregistré dans le suivi.</p>';
    if (!QZ.deck.length) {
      h += '<div class="q noprint"><label>Module <select data-qz="mod"><option value="">Tous les modules</option>' + BGm.modules.filter(function (m) { return (m.cards || []).length; }).map(function (m) { return '<option value="' + m.id + '">' + esc(m.title) + "</option>"; }).join("") + '</select></label> <label>Nombre de cartes <select data-qz="n"><option>5</option><option selected>10</option><option>15</option><option>20</option></select></label> <label>Commercial <select data-qz="who"><option value="">(non enregistré)</option>' + SV.people.map(function (p, k) { return '<option value="' + k + '">' + esc(p) + "</option>"; }).join("") + '</select></label> <button class="btn pri" data-m="qstart">Démarrer</button></div>';
      return h;
    }
    var n = QZ.deck.length;
    if (QZ.done) {
      var pct = Math.round(100 * QZ.ok / n);
      return h + '<div class="q"><h3 style="margin:0 0 6px">Résultat : ' + QZ.ok + " / " + n + " (" + pct + " %)</h3><p>" + (pct >= 80 ? "Base solide." : pct >= 60 ? "À consolider avec un jeu de rôle ciblé." : "À reprendre : relire les fiches concernées avec le commercial.") + '</p><p class="noprint"><button class="btn pri" data-m="qsave">Enregistrer dans le suivi</button> <button class="btn" data-m="qreset">Nouveau quiz</button> <button class="btn" data-m="print">Imprimer</button></p></div>';
    }
    var c = QZ.deck[QZ.i];
    h += '<div class="q"><p class="note" style="margin:0">Carte ' + (QZ.i + 1) + " / " + n + " · " + esc(c.m) + " · score " + QZ.ok + '</p><div class="fc" style="min-height:140px;margin:10px 0"><div><small>' + (QZ.flip ? "Réponse" : "Question") + "</small>" + esc(QZ.flip ? c.a : c.q) + '</div></div><p class="noprint">' + (QZ.flip ? '<button class="btn" style="background:#e8f4ec" data-m="qok">Juste</button> <button class="btn" style="background:#fbeae7" data-m="qko">À revoir</button>' : '<button class="btn pri" data-m="qflip">Retourner la carte</button>') + ' <button class="btn" data-m="qreset">Abandonner</button></p></div>';
    return h;
  }
  function suivi() {
    var h = head("Suivi de progression", "suivi") + '<p class="noprint">Ajoutez vos commerciaux, cochez les modules vus en séance et reportez les notes. Tout reste dans ce navigateur ; imprimez la feuille pour l\'archiver.</p><p class="noprint"><input type="text" id="newp" placeholder="Nom du commercial" style="padding:8px 10px;border:1.5px solid var(--line);border-radius:8px"> <button class="btn pri" data-m="padd">Ajouter</button> <button class="btn" data-m="print">Imprimer</button></p>';
    var mods = BGm.modules.slice().sort(function (a, b) { return parseInt(a.num) - parseInt(b.num); });
    if (!SV.people.length) return h + "<p>Aucun commercial dans le suivi pour le moment.</p>";
    h += '<div class="tw"><table class="t suivi"><thead><tr><th>Commercial</th>' + mods.map(function (m) { return '<th title="' + esc(m.title) + '">' + esc(m.id.slice(0, 5)) + "</th>"; }).join("") + "<th>Quiz flash</th><th>Écrit /200</th><th>Oral /40</th><th>Commentaire</th><th class=\"noprint\"></th></tr></thead><tbody>";
    SV.people.forEach(function (p, k) {
      var qz = SV.quiz[k] || {}, ks = Object.keys(qz), avg = ks.length ? Math.round(ks.reduce(function (t, x) { return t + qz[x]; }, 0) / ks.length) + " %" : "—", nt = SV.note[k] || {};
      h += "<tr><td><b>" + esc(p) + "</b></td>" + mods.map(function (m) { return '<td><input type="checkbox" data-sv="mod" data-k="' + k + '" data-id="' + m.id + '"' + ((SV.mod[k] || {})[m.id] ? " checked" : "") + "></td>"; }).join("") + "<td>" + avg + '</td><td><input type="number" class="nb" data-sv="ecrit" data-k="' + k + '" min="0" max="200" value="' + esc(nt.ecrit == null ? "" : nt.ecrit) + '"></td><td><input type="number" class="nb" data-sv="oral" data-k="' + k + '" min="0" max="40" value="' + esc(nt.oral == null ? "" : nt.oral) + '"></td><td><input type="text" data-sv="com" data-k="' + k + '" value="' + esc(nt.com || "") + '"></td><td class="noprint"><button class="btn" data-m="pdel" data-k="' + k + '">Retirer</button></td></tr>';
    });
    return h + '</tbody></table></div><p class="note">Colonnes de modules : abréviation de l\'identifiant du module (survolez pour le nom complet).</p>';
  }
  window.BGM = {
    view: function (sub) { return sub === "animation" ? animation() : sub === "quiz" ? quiz() : sub === "suivi" ? suivi() : sub === "questionnaire" ? questionnaire() : sub === "corrige" ? corrige() : sub === "oral" ? oral() : sub === "fiche" ? fiche() : guide(); },
    after: function () { refresh(); }
  };
  document.addEventListener("input", function (e) {
    var t = e.target;
    if (t.dataset && t.dataset.sc) { S.sc = S.sc || {}; S.sc[t.dataset.sc] = t.value; persist(); refresh(); }
    else if (t.dataset && (t.dataset.m === "name" || t.dataset.m === "date" || t.dataset.m === "who")) { S[t.dataset.m] = t.value; persist(); }
  });
  document.addEventListener("change", function (e) {
    var t = e.target, sv = t.dataset && t.dataset.sv; if (!sv) return; var k = +t.dataset.k;
    if (sv === "mod") { SV.mod[k] = SV.mod[k] || {}; SV.mod[k][t.dataset.id] = t.checked; }
    else { SV.note[k] = SV.note[k] || {}; SV.note[k][sv] = t.value; }
    persistSV();
  });
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-m]"); if (!b) return;
    if (b.dataset.m === "print") window.print();
    var a = b.dataset.m, K = +b.dataset.k;
    if (a === "qstart") { var sel = function (x) { var el = document.querySelector('[data-qz="' + x + '"]'); return el ? el.value : ""; }; QZ.who = sel("who"); startQuiz(sel("mod"), parseInt(sel("n")) || 10); rerender(); return; }
    if (a === "qflip") { QZ.flip = true; rerender(); return; }
    if (a === "qok" || a === "qko") { if (a === "qok") QZ.ok++; else QZ.ko++; QZ.flip = false; if (QZ.i + 1 >= QZ.deck.length) QZ.done = true; else QZ.i++; rerender(); return; }
    if (a === "qreset") { QZ.deck = []; QZ.done = false; rerender(); return; }
    if (a === "qsave") { if (QZ.who !== "") { var w = +QZ.who; SV.quiz[w] = SV.quiz[w] || {}; SV.quiz[w][QZ.mod || "tous"] = Math.round(100 * QZ.ok / QZ.deck.length); persistSV(); alert("Score enregistré dans le suivi."); } else alert("Aucun commercial sélectionné au démarrage : score non enregistré."); return; }
    if (a === "padd") { var el = document.getElementById("newp"); if (el && el.value.trim()) { SV.people.push(el.value.trim()); persistSV(); rerender(); } return; }
    if (a === "pdel" && confirm("Retirer ce commercial du suivi ?")) { SV.people.splice(K, 1); var re = function (o) { var n = {}; Object.keys(o).forEach(function (x) { x = +x; if (x < K) n[x] = o[x]; else if (x > K) n[x - 1] = o[x]; }); return n; }; SV.mod = re(SV.mod); SV.quiz = re(SV.quiz); SV.note = re(SV.note); persistSV(); rerender(); return; }
    if (b.dataset.m === "reset" && confirm("Effacer la fiche en cours ?")) { S = {}; persist(); location.reload(); }
  });
})();
