//criar referência ao formulário(frm), aos elementos h3(nome e promo)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#nomeMedicamento")
const resp2 = document.querySelector("#preco")

//criar um "ouvinte" de evento, acionado quando o botão "submit" for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value //obtem o nome do medicamento
    const preco = Number(frm.inPreco.value)   //obtem o valor do medicamento
    
    const promocao = Math.floor(preco * 2)  //calcula o valor a pagar caso o cliente leve 2 itens, sendo o Math.floor uma HOF(grandeza);

    resp1.innerText = `Promoção de ${medicamento}` //exibir o nome do medicamento
    resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`   //exibir o valor promocional

    e.preventDefault()     //evitar o envio do form 

}) 