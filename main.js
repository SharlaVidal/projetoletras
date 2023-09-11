function tocaSom(IdElementAudio) {
    const elementoAudio = document.querySelector(IdElementAudio);
    if (elementoAudio) {
        elementoAudio.currentTime = 0;  // Reinicia o áudio para garantir que ele seja tocado novamente
        elementoAudio.play();
    } else {
        console.error(`Elemento de áudio não encontrado para o seletor: ${IdElementAudio}`);
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

// Função para encontrar índice da letra no alfabeto
function encontrarIndiceDaLetra(letra) {
    return alfabeto.indexOf(letra);
}

// Ouvinte de evento para teclas do teclado
document.addEventListener('keydown', function(event) {
    const letraPressionada = event.key.toLowerCase();
    const index = encontrarIndiceDaLetra(letraPressionada);
    
    if (index !== -1 && index < listaDeTeclas.length) {
        const tecla = listaDeTeclas[index];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`;
        tocaSom(idAudio);
    }
});

// Ouvintes de evento para cliques nas teclas
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.addEventListener('click', function() {
        tocaSom(idAudio);
    });
}
