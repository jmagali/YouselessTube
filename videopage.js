const audio = document.querySelector("#mute-icon");
var playNoiseYet = localStorage.getItem('playNoiseYet');

if (playNoiseYet == null) {
    setTimeout(() => {
        alert("Oh no! It seems like the video has no audio! Please press the volume button to turn it on!");
    }, 1000);

    audio.addEventListener("click", goToNoiseGame);

    function goToNoiseGame() {
        window.location.href = 'noiseGame.html';
        playNoiseYet = true;
        localStorage.setItem('playNoiseYet', playNoiseYet);
        audio.removeEventListener("click", goToNoiseGame)
    }

}
