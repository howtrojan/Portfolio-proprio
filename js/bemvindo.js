var div = document.getElementById('bemvindo');
var texto = 'Em busca da primeira oportunidade como programador Front-End';
let direcao = 1; // 1 para escrever, -1 para apagar
let cursor = '|';

function escreverApagar(str, el) {
  let char = str.split('');
  let index = 0;

  setInterval(function () {
    if (direcao === 1) {
      if (index <= str.length) {
        el.innerHTML = str.substring(0, index) + cursor;
        index++;
      } else {
        direcao = -1;
      }
    } else {
      if (index >= 0) {
        el.innerHTML = str.substring(0, index) + cursor;
        index--;
      } else {
        direcao = 1;
      }
    }
  }, 80);
}

escreverApagar(texto, div);
