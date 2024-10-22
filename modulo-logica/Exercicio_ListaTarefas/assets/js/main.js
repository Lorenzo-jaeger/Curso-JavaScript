document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('input-tarefa')) {
        el.addEventListener('keypress', function (e) {
            if (!el.value) {
                return;
            } else if (e.keyCode === 13) {
                insertTarefa(el.value)
                el.value = '';
                console.log("ok", el.value);
            }
        })
    }
    if (el.classList.contains('btn-tarefa')) {
        const inputTarefa = document.querySelector('.input-tarefa')

        if (!inputTarefa.value) {
            return
        } else {
            insertTarefa(inputTarefa.value)
            inputTarefa.value = '';
            console.log("ok", inputTarefa.value);

        }
    }
    if (el.classList.contains('apagar')) {
        if (!el.value) {
            el.parentElement.remove();
        }
    }
});


function insertTarefa(e) {
    const ul = document.querySelector('.tarefas');
    const li = document.createElement('li');

    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'X';
    btnApagar.setAttribute('class', 'apagar')
    btnApagar.setAttribute('title', 'Apagar esta tarefa');
    
    li.innerText = e + '   ';

    li.appendChild(btnApagar);

    ul.append(li);
}