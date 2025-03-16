const video = document.querySelector("#work-video");

setTimeout(() => {
    alert("Wow, YouselessTube has a lot of videos! I wonder why all of them except for one is the same video! Maybe you should click on the one video that is different!");
}, 1000);

video.addEventListener("click", goToVideoPage);

function goToVideoPage() {
    window.location.href = 'videopage.html';
    video.removeEventListener("click", goToVideoPage);
}