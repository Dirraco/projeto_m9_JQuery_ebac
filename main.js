const form = document .getElementById ('form-tarefa');
let Linha = '<li>';

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const inputNomeDaTarefa = document.getElementById ('nome-tarefa');

    Linha += `<li>${inputNomeDaTarefa.value}</li>`;

    const listaTarefas = document.querySelector('ul');
    listaTarefas.innerHTML = Linha; 

    $('li').click(function() {
        $(this).addClass("finalizada");
    });
});