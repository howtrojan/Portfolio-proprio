let buttonMais =document.getElementById('mais');
let projetos = document.getElementById('projetos');

buttonMais.addEventListener('click', function(){    
    projetos.style.display = 'inline-block';
    buttonMais.style.display = 'none';
})
