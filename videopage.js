const audio = document.querySelector("#mute-icon");
var playNoiseYet = JSON.parse(localStorage.getItem('playNoiseYet'));

if (!playNoiseYet) {
    setTimeout(() => {
        alert("Oh no! It seems like the video has no audio! Please press the volume button to turn it on!");
    }, 1000);

    audio.addEventListener("click", goToNoiseGame);

    function goToNoiseGame() {
        window.location.href = 'noiseGame.html';
        localStorage.setItem('playNoiseYet', JSON.stringify(true)); 
        audio.removeEventListener("click", goToNoiseGame);
    }
}

localStorage.removeItem('playNoiseYet');
