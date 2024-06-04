function reproduirAudio() {
    let player = document.getElementById('player');
    player.play();
}

function iniciarAnimacio() {
    let nau = document.querySelector('.nauTallada');
    nau.style.animationPlayState = 'running';
}

window.onload = function() {
    let playButton = document.getElementById('playButton');
    
    // Afegir l'event listener al botó de play
    playButton.addEventListener('click', function() {
        reproduirAudio();
        iniciarAnimacio();
    });
};
