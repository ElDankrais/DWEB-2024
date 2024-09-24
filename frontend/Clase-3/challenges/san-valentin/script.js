const message = document.querySelector('#message');
const buttons = document.querySelector('#buttons');
const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');

noBtn.addEventListener('click', () => {
    //RANDOM POSITIONIN OF THE noBTn
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var buttonHeight = noBtn.offsetHeight;
    var buttonWidth = noBtn.offsetWidth;
    topPos = Math.floor(Math.random()*(windowHeight-buttonHeight));
    leftPos = Math.floor(Math.random()*(windowWidth-buttonWidth));
    noBtn.style.left= leftPos + "px";
    noBtn.style.top = topPos + "px";

    //HINT # 1: window has properties of the width and height of the screen
    //HINT # 2: offsetWidth and offsetHeight are properties of html elements
    //HINT # 3: This button has position 'absolute', which means that its position in the html document could
    //be given by the style properties left and top (in px values)
});

yesBtn.addEventListener('click', () => {
    message.innerHTML = 'TE AMO MIBIDA';
    buttons.style.display = 'none';
});