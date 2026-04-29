let p1Wins = 0;
let p2Wins = 0;

function rollDice() {
    // 1. Add shake animation
    const diceImages = document.querySelectorAll("img");
    diceImages.forEach(img => img.classList.add("shake"));

    // 2. Wait for animation to finish before changing images (500ms)
    setTimeout(() => {
        // Player 1 Logic
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomImage1 = "images/dice" + randomNumber1 + ".png";
        document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

        // Player 2 Logic
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        let randomImage2 = "images/dice" + randomNumber2 + ".png";
        document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

        // Remove shake class so it can be triggered again
        diceImages.forEach(img => img.classList.remove("shake"));

        // Winner Logic
        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
            p1Wins++;
        } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
            p2Wins++;
        } else {
            document.querySelector("h1").innerHTML = "Draw! 🤝";
        }

        // Update Scores
        document.getElementById("p1-score").innerText = p1Wins;
        document.getElementById("p2-score").innerText = p2Wins;

    }, 500);
}