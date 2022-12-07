const btn = document.querySelector('#send')

btn.addEventListener('click', () => {

    const nomeCliente = document.querySelector('#name')
    const substituicao = document.querySelector('.substituicao')
    const Client = String(nomeCliente.value)
    
    substituicao.innerHTML = Client + '!'
});