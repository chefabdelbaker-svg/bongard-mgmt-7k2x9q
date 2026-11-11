/* Traduction à l'affichage : le contenu source reste en français ; EN et HI sont des dictionnaires (data/i18n-en.js, data/i18n-hi.js). */
(function () {
  var LANGS = [["fr", "FR"], ["en", "EN"], ["hi", "हिन्दी"]];
  var lang = "fr"; try { lang = localStorage.getItem("bgac.lang") || "fr"; } catch (e) {}
  var m = location.search.match(/[?&]lang=(fr|en|hi)/); if (m) { lang = m[1]; try { localStorage.setItem("bgac.lang", lang); } catch (e) {} }
  var D = (window.BG_I18N && window.BG_I18N[lang]) || null; if (!D) lang = "fr";
  document.documentElement.lang = lang;
  var INL = { B: 1, STRONG: 1, EM: 1, I: 1, BR: 1, SUP: 1, SUB: 1, CODE: 1, MARK: 1, ABBR: 1, U: 1 };
  function nz(s) { return s.replace(/\s+/g, " ").trim(); }
  function isLeaf(el) { for (var i = 0; i < el.children.length; i++) { var c = el.children[i]; if (!INL[c.tagName] || !isLeaf(c)) return false; } return true; }
  function walk(el) {
    if (el.nodeType !== 1) return;
    var t = el.tagName; if (t === "SCRIPT" || t === "STYLE") return;
    if (el.namespaceURI === "http://www.w3.org/2000/svg" && t !== "text" && t !== "tspan" && t !== "svg" && t !== "g") return;
    ["placeholder", "aria-label", "title", "alt"].forEach(function (a) { var v = el.getAttribute(a); if (v) { var k = nz(v); if (D.attrs[k]) el.setAttribute(a, D.attrs[k]); } });
    if (el.children.length === 0 && !el.textContent.trim()) return;
    if (isLeaf(el)) { var k = nz(el.innerHTML), v = D.blocks[k]; if (v) { el.innerHTML = v; return; } if (!el.children.length) return; }
    for (var n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3) { var s = nz(n.textContent), w = s && D.blocks[s]; if (w) n.textContent = (/^\s/.test(n.textContent) ? " " : "") + w + (/\s$/.test(n.textContent) ? " " : ""); }
      else if (n.nodeType === 1) { var nx = n.nextSibling; walk(n); }
    }
  }
  var busy = false, queued = false;
  function run() { if (!D) return; busy = true; try { walk(document.body); if (D.blocks["__title__" + document.title]) document.title = D.blocks["__title__" + document.title]; } finally { busy = false; } }
  function trHTML(html) { if (!D) return html; var d = document.createElement("div"); d.innerHTML = html; walk(d); return d.innerHTML; }
  function trText(s) { return D && D.blocks[nz(s)] || s; }
  if (D) {
    document.addEventListener("DOMContentLoaded", function () { run(); });
    new MutationObserver(function () { if (busy || queued) return; queued = true; requestAnimationFrame(function () { queued = false; run(); }); }).observe(document.documentElement, { childList: true, subtree: true });
  }
  function picker() {
    var top = document.querySelector("header.top"); if (!top) return;
    var w = document.createElement("div"); w.className = "lang"; w.setAttribute("role", "group"); w.setAttribute("aria-label", "Language");
    LANGS.forEach(function (l) {
      if (l[0] !== "fr" && !(window.BG_I18N && window.BG_I18N[l[0]])) return;
      var b = document.createElement("button"); b.type = "button"; b.textContent = l[1]; b.setAttribute("lang", l[0]); if (l[0] === lang) b.className = "on";
      b.onclick = function () { try { localStorage.setItem("bgac.lang", l[0]); } catch (e) {} location.reload(); }; w.appendChild(b);
    });
    var sp = top.querySelector(".search"); top.insertBefore(w, sp || null);
  }
  document.addEventListener("DOMContentLoaded", picker);
  window.BGI = { lang: lang, run: run, trHTML: trHTML, trText: trText };
})();
