var div = document.getElementById('bemvindo');
var texto = 'Em busca da primeira oportunidade como programador Front-End';

function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 50);
}

escrever(texto, div);