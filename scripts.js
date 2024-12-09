const button = document.querySelector('.tarefa-botao')
const input = document.querySelector('.tarefa-adicionar')
const listacompleta = document.querySelector('.tarefa-lista')

let minhalista = []



function adicionartarefa() {
    minhalista.push(input.value)
    input.value=''
    mostrartarefas()
}

function mostrartarefas() {

    let novaLi = ''

    minhalista.forEach((item,posicao) => {

        novaLi = novaLi + `
            <li class="tarefa">
                <img src="./img/Check.png" alt="approve-task">
                <p>${item}</p>
                <img src="./img/Trash Icon.png" alt="delete-task" onclick ="deletartarefa(${posicao})">
            </li>
            `
    })
    
listacompleta.innerHTML = novaLi

}

function finalizartarefa(){
    
}

function deletartarefa (posicao) {
    minhalista.splice(posicao, 1)
    mostrartarefas()
}


button.addEventListener('click',adicionartarefa)
