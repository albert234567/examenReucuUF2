function reproduirAudio() {
    let player = document.getElementById('player');
    player.play();
}

function pararAudio() {
    let player = document.getElementById('player');
    player.pause();
    player.currentTime = 0; // Reiniciar l'àudio
}

function iniciarAnimacio() {
    let nau = document.querySelector('.nauTallada');
    nau.style.animationPlayState = 'running';
}

window.onload = function() {
    let playButton = document.getElementById('playButton');
    let nau = document.querySelector('.nauTallada');

    // Afegir l'event listener al botó de play
    playButton.addEventListener('click', function() {
        reproduirAudio();
        iniciarAnimacio();
    });

    // Afegir l'event listener per parar l'àudio quan l'animació acabi
    nau.addEventListener('animationend', function() {
        pararAudio();
    });
};
