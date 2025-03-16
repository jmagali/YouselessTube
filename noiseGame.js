const volume = document.querySelector("#volume");
const ball = document.querySelector("#ball");

volume.addEventListener("click", () => {

    let random = Math.random() * ((76) + 60);

    document.documentElement.style.setProperty("--xPositionFour", `${random}vh`);
    document.documentElement.style.setProperty("--xPositionThree", `${random / 4 * 3}vh`);
    document.documentElement.style.setProperty("--xPositionTwo", `${random / 2}vh`);
    document.documentElement.style.setProperty("--xPositionOne", `${random / 4}vh`);

    ball.style.animation = 'none';

    ball.offsetHeight;

    ball.style.animation = 'projectile-motion 1s ease-in 0s';

    if (random === 136) {
        setTimeout(() => {
            ignore = true;
            window.location.href = 'videopage.html';
        }, 1000); 
    }
});
