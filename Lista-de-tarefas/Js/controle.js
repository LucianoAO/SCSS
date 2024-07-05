let contador = 0
let input = document.getElementById('inputTarefa')
let btnAdd = document.getElementById('btn-add')
let main = document.getElementById('areaLista')

function addTarefa() {
    // O valor do input
    let valorInput = input.value

    // Se não for vazio nem nulo, nem indefinido

    if((valorInput !== "") && (valorInput!== null) && (valorInput !== undefined) ) {
        
        ++contador
        
        let novoItem = `<div id="${contador}" class="item">
            <div class="item-icone">
                
                <span class="material-symbols-outlined" id="icone_${contador}" onclick="marcarTarefa(${contador})" >circle</span>
            </div>
            <div class="item-nome" onclick="marcarTarefa(${contador})">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button class="delete" onclick="deletar(${contador})"><span class="material-symbols-outlined">delete</span></button>
            </div>
        </div>`
        main.innerHTML += novoItem // Item no main
        input.value = ""
        input.focus()

    }
}

function deletar(id){
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function marcarTarefa(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')
    
    if(classe == "item") {
        item.classList.add('clicado')

        var icone = document.getElementById('icone_' + id)
        icone.innerHTML = 'check_circle'
        item.classList.add('checkcircle')

        item.parentNode.appendChild(item)

    } else {
        item.classList.remove('clicado')

        var icone = document.getElementById('icone_' + id)
        icone.innerHTML = 'circle'
        item.classList.remove('checkcircle')

    }
}

input.addEventListener("keyup", function(event){
    if(event.key === 'Enter') {
        event.preventDefault()
        btnAdd.click()
    }
})
