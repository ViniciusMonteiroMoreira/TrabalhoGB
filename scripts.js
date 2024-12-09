const button = document.querySelector('.tarefa-botao')
const input = document.querySelector('.tarefa-adicionar')
const listacompleta = document.querySelector('.tarefa-lista')

let minhalista = []



function adicionartarefa() {
    minhalista.push({
        tarefa: input.value,
        finalizada: false
    })
    input.value=''
    mostrartarefas()
}

function mostrartarefas() {

    let novaLi = ''

    minhalista.forEach((item,posicao) => {

        novaLi = novaLi + `
            <li class="tarefa ${item.finalizada && "feito"}">
                <img src="./img/Check.png" alt="approve-task" onclick="finalizartarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="./img/Trash Icon.png" alt="delete-task" onclick ="deletartarefa(${posicao})">
            </li>
            `
    })
    
listacompleta.innerHTML = novaLi

localStorage.setItem('lista',JSON.stringify(minhalista))

}

function finalizartarefa (posicao){
    minhalista[posicao].finalizada = !minhalista[posicao].finalizada
    mostrartarefas()
}

function deletartarefa (posicao) {
    minhalista.splice(posicao, 1)
    mostrartarefas()
}

function recarregaritems(){
    const tarefalocalstorage = localStorage.getItem('lista')
    if(tarefalocalstorage){
        minhalista = JSON.parse(tarefalocalstorage) 
    }
    mostrartarefas()
}

recarregaritems()

button.addEventListener('click',adicionartarefa)
