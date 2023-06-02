let applause = new Audio('sounds/applause.mp3');
let boo = new Audio('sounds/boo.mp3');
let gasp = new Audio('sounds/gasp.mp3');
let tada = new Audio('sounds/tada.mp3');
let victory = new Audio('sounds/victory.mp3');
let wrong = new Audio('sounds/wrong.mp3');

let buttons = document.querySelectorAll('.btn');
let currentAudio;

buttons[0].addEventListener('click', ()=>{
    stopaudio();
    applause.play();
    console.log("playing applause");
    currentAudio = applause;
})
buttons[1].addEventListener('click', ()=>{
    stopaudio();
    boo.play();
    console.log("playing boo");
    currentAudio = boo;
})
buttons[2].addEventListener('click', ()=>{
    stopaudio();
    gasp.play();
    console.log("playing gasp");
    currentAudio = gasp;
})
buttons[3].addEventListener('click', ()=>{
    stopaudio();
    tada.play();
    console.log("playing tada");
    currentAudio = tada;
})
buttons[4].addEventListener('click', ()=>{
    stopaudio();
    victory.play();
    console.log("playing victory");
    currentAudio = victory;
})
buttons[5].addEventListener('click', ()=>{
    stopaudio();
    wrong.play();
    console.log("playing wrong");
    currentAudio = wrong;
})

function stopaudio() {
    console.log(currentAudio);
    if (currentAudio != undefined) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}