//1. Acciones a los botones
//2. Botón verde asociado a jugador 1
//3. Botón rojo asociado a jugador 2
//4. Botón de reset
//5. Select de cantidad de puntos a jugar
//6. Lógica de juego

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

let isGameOver = false;
let winningScore = 3;

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

function resetScore() {
    isGameOver = false;
    for (let player of [p1, p2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('has-text-danger', 'has-text-success');
        player.button.disabled = false;
    }
}

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    console.log(winningScore);
    resetScore();
})

p1.button.addEventListener('click', () => updateScore(p1, p2));
p2.button.addEventListener('click', () => updateScore(p2, p1));

resetButton.addEventListener('click', resetScore);



