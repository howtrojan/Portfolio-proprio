var div = document.getElementById('bemvindo');
var texto = 'Olá, me chamo André Santos Braga e estou em busca da minha primeira oportunidade como programador Front-End';

function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 50);
}

escrever(texto, div);