const formulario = document.querySelector("form"); //obtém os elementos 
const nomePaciente = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];  //declara valor global


formulario.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do formulário
    const nome = formulario.inPaciente.value  //obtém nome do paciente
    pacientes.push(nome) //adicona o nome no final do vetor
    let lista = ""  //string para concatenar pacientes

    //for "tradicional" (inicia em 0, enquanto menor que tamanho do array)
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    }

    respLista.innerText = lista  //exibe a lista de pacientes na página
    formulario.inPaciente.value = ""  //limpa o conteúdo dos campos
    formulario.inPaciente.focus()  //posiciona o cursor no campo
})

//adiciona um "ouvinte" para o evento "click" no btnUrgencia que está no form
formulario.btUrgencia.addEventListener("click", () => {
    if(!formulario.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        formulario.inPaciente.focus()  //posiciona o cursor no campo 
        return //retorna ao form
    }


const nome = formulario.inPaciente.value  //obtém o nome do paciente
pacientes.unshift(nome) //adiciona paciente no início do vetor
let lista = "" //string para concatenar pacientes

//forEach aplicado sobre o array pacientes
pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
respLista.innerText = lista  //exibe a lista de pacientes
formulario.inPaciente.value = "" //limpa conteúdo
formulario.inPaciente.focus() //posiciona o cursor
});

formulario.btAtender.addEventListener("click", () => {
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera")
        formulario.inPaciente.focus()
        return
    }

    const atender = pacientes.shift() 
    nomePaciente.innerText = atender
    let lista = "" //string para concatenar pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista 
})

