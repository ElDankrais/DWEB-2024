const message = document.querySelector('#message');
const buttons = document.querySelector('#buttons');
const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');

noBtn.addEventListener('click', () => {
    //RANDOM POSITIONIN OF THE noBTn
    //HINT # 1: window has properties of the width and height of the screen
    //HINT # 2: offsetWidth and offsetHeight are properties of html elements
    //HINT # 3: This button has position 'absolute', which means that its position in the html document could
    //be given by the style properties left and top (in px values)
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;

    const newX = Math.floor(Math.random() * maxWidth);
    const newY = Math.floor(Math.random() * maxHeight);

    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
});

yesBtn.addEventListener('click', () => {
    message.innerHTML = 'TE AMO MIBIDA';
    buttons.style.display = 'none';
});