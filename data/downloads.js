/* Téléchargements. Pour retirer une catégorie après décision de Bongard : mettre false. */
window.BG = window.BG || { modules: [] };
BG.downloads = {
  fiche: true,      /* fiche PDF générée par module + formation complète */
  original: true,   /* argumentaire d'origine Bongard (PDF) — à retirer si non autorisé */
  originals: {
    spiral: ["docs/originals/argumat-spiral-evo-th-tl.pdf", "ARGUMAT SPIRAL EVO TH/TL (05/2018)"],
    stellar: ["docs/originals/argumat-stellar.pdf", "ARGUMAT STELLAR"],
    mira: ["docs/originals/argumat-mira.pdf", "ARGUMAT MIRA"],
    rhea: ["docs/originals/argumat-rhea-auto.pdf", "ARGUMAT RHEA AUTO (05/2023)"],
    paneotrad: ["docs/originals/contre-argumat-paneotrad.pdf", "Contre-argumentaire PANEOTRAD"],
    hera: ["docs/originals/argumat-hera.pdf", "ARGUMAT HERA Rev01 (03/2025)"],
    bfc: ["docs/originals/argumat-bfc.pdf", "ARGUMAT BFC"],
    kryo: ["docs/originals/argumat-kryo.pdf", "ARGUMAT NOUVEAU KRYO (09/2018)"],
    soleo: ["docs/originals/argumat-soleo-evo.pdf", "ARGUMAT SOLEO EVO v.10 (07/2024)"],
    zephyr: ["docs/originals/argumat-zephyr.pdf", "ARGUMAT ZEPHYR (09/2018)"]
  }
};
