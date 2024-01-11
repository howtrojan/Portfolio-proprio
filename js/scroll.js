document.addEventListener('DOMContentLoaded', function () {
  var scrollLink = document.querySelector('.scroll-link');
  var scrollUp = document.querySelector('.scroll-to-top');

  // Adiciona um evento de rolagem à janela
  window.addEventListener('scroll', function () {
    // Mostra ou oculta a seta com base na posição de rolagem
    if (window.scrollY > 300) {
      scrollUp.style.display = 'block';
    } else {
      scrollUp.style.display = 'none';
    }
  });

  // Adiciona um evento de clique para rolar suavemente para o topo
  scrollLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

