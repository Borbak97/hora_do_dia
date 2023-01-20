function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `A hora atual é ${hora}:${minutos}hrs.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#f2efe1'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#efe1f2'
    } else {
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#474348'
    }   
}
