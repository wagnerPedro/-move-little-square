var posicaoX = 0 //controla posição x do player
var posicaoY = 0 //controla posição y do player

function load() {
    document.addEventListener("keydown", tecla)
}

function tecla() {
    let player = document.getElementById('player')
    let tecla = event.keyCode

    if(tecla == 37) {
        //Esquerda
        posicaoX -= 10
        player.style.left = posicaoX + 'px'
    } else if(tecla == 39) {
        //Direita
        posicaoX += 10
        player.style.left = posicaoX + 'px' 
    } 
    if (tecla == 38) {
        //Cima
        posicaoY -= 10
        player.style.top = posicaoY + 'px' 
    } else if(tecla == 40) {
        //baixo
        posicaoY += 10
        player.style.top = posicaoY + 'px'
    }
}

window.addEventListener("load", load)