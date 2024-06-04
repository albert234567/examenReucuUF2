function reproduirAudio() {
    let player = document.getElementById('player');
    player.play();
}

window.onload = function() {
    // Reproduir l'àudio quan es carrega la pàgina
    reproduirAudio();

    // Començar l'animació de la nau
    let nau = document.querySelector('.nauTallada');
    nau.style.animationPlayState = 'running';
};
