document.addEventListener("DOMContentLoaded", () => {
    const car = document.getElementById("car");
    let carPosition = 125;
    
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft" && carPosition > 50) {
            carPosition -= 75;
        } else if (event.key === "ArrowRight" && carPosition < 200) {
            carPosition += 75;
        }
        car.style.left = carPosition + "px";
    });

    function spawnObstacle() {
        const obstacle = document.createElement("div");
        obstacle.classList.add("obstacle");
        obstacle.style.left = [50, 125, 200][Math.floor(Math.random() * 3)] + "px";
        document.getElementById("gameContainer").appendChild(obstacle);

        let obstaclePosition = -80;
        const fallInterval = setInterval(() => {
            if (obstaclePosition > 320 && obstacle.style.left === car.style.left) {
                alert("Game Over! Refresh to play again.");
                location.reload();
            }
            if (obstaclePosition > 400) {
                clearInterval(fallInterval);
                obstacle.remove();
            }
            obstaclePosition += 5;
            obstacle.style.top = obstaclePosition + "px";
        }, 50);
    }

    setInterval(spawnObstacle, 1500);
});
