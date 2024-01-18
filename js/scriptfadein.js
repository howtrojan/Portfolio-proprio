document.addEventListener("DOMContentLoaded", function () {
    let fadeElements = document.querySelectorAll(".fade-in");

    function checkFade() {
      fadeElements.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("appear");
        }
      });
    }

    function isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Adicione um listener de scroll para verificar quando os elementos estão na visão
    window.addEventListener("scroll", checkFade);

    // Execute a verificação inicial ao carregar a página
    checkFade();
  });