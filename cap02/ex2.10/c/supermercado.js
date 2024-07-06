//criar referência ao formulário e aos h3(resp1 e resp2)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPromocao")
const resp2 = document.querySelector("#outPrecoTerceiro")

//criar um ouvinte de evento que é acionado ao clicar no botão submit
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value //obtem o nome do produto
    const preco = Number(frm.inPreco.value)  //obtem o valor do produto
    
    const terceiro = preco / 2 // calcula o valor do desconto na 3° unidade
    const total = (preco * 2) + terceiro //calcula o valor ao levar 3 produtos sendo que na promoção 1 sai com 50% 

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}` //exibir o nome do medicamento
    resp2.innerText = `O terceiro produto custa apenas R$: ${terceiro.toFixed(2)}`   //exibir o valor promocional

    e.preventDefault()     //evitar o envio do form 
})