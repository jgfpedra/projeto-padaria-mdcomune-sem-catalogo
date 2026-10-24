
(() => {
  const seletor = "#catalogoModulosContainer";

  function removerCatalogo() {
    document.querySelectorAll(seletor).forEach((elemento) => {
      elemento.remove();
    });
  }

  // Remove o catálogo assim que possível.
  removerCatalogo();

  // Detecta se o sistema inserir o catálogo novamente.
  const observador = new MutationObserver(() => {
    removerCatalogo();
  });

  observador.observe(document, {
    childList: true,
    subtree: true
  });
})();
