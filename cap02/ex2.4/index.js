//criar referência ao formulário(frm) e ao elemento h3(onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//criar um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)  //para obter o conteúdo dos campos
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo //para calcular o valor a ser pago
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`  //exibe resposta

    e.preventDefault()  // para evitar o envio do form
});