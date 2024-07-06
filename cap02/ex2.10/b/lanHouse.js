//criar referência ao formulário e ao elemento h3
const frm = document.querySelector("form")
const pagar = document.getElementById("valorApagar")

//criar um ouvinte de evento acionado quando o botão submit for criado
frm.addEventListener("submit", (e) =>{
    const valor = Number(frm.inValor.value) //obtem o valor do tempo usado
    const tempo = Time(frm.inTempo.value) //obtem o tempo utilizado

    const valorFinal = tempo * valor //obtem o valor a ser pago

    pagar.innerText = `Valor a pagar R$: ${valorFinal.toFixed(2)}`   //exibir o valor a pagar

    e.preventDefault()
})