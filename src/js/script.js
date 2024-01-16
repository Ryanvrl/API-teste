const botao = document.querySelector('.botao')

botao.addEventListener('click', () => {
    mostrarConselho(document.getElementById('numero-id'), document.getElementById('texto-conselho-id'))
})

async function PegarConselho() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return resposta.json()    
}

async function mostrarConselho(id, texto) {
    const conselho = await PegarConselho()
    id.innerHTML = conselho.slip.id
    texto.innerHTML = conselho.slip.advice
}