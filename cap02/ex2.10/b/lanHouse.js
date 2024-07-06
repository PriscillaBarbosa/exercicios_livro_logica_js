//criar referência ao formulário e ao elemento h3(onde será exibido a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//criar um ouvinte de evento acionado quando o botão submit for criado
frm.addEventListener("submit", (e) =>{
    //obtem conteúdo e converte em número
    const valor = Number(frm.inValor.value) //obtem o valor do tempo usado
    const tempo = Number(frm.inTempo.value) //obtem o tempo utilizado

    const pagar = Math.ceil(tempo / 15) * valor //obtem o valor a ser pago

    resp.innerText = `Valor a pagar R$: ${pagar.toFixed(2)}`   //exibir o valor a pagar com 2 decimais

    e.preventDefault()
})