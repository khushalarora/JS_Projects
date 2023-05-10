let card1 = document.getElementById('card-1');
let card2 = document.getElementById('card-2');
let card3 = document.getElementById('card-3');
let card4 = document.getElementById('card-4');
let card5 = document.getElementById('card-5');
let card1_text = document.getElementById('card1-text');
let card2_text = document.getElementById('card2-text');
let card3_text = document.getElementById('card3-text');
let card4_text = document.getElementById('card4-text');
let card5_text = document.getElementById('card5-text');
let activeCard = card1;
let activeCardText = card1_text;


card1.style.width = '100%';
card2.style.width = '10%';
card3.style.width = '10%';
card4.style.width = '10%';
card5.style.width = '10%';

card1.addEventListener('click', ()=>{
    if (activeCard != card1) {
        card1.style.width = '100%';
        activeCard.style.width = '10%';
        card1_text.style.opacity = 1;
        card1_text.style.visibility = 'visible';
        activeCardText.style.opacity = 0;
        activeCardText.style.visibility = 'hidden';
        activeCardText = card1_text;
        activeCard = card1;
    }
});

card2.addEventListener('click', ()=>{
    if (activeCard != card2) {
        card2.style.width = '100%';
        activeCard.style.width = '10%';
        card2_text.style.opacity = 1;
        card2_text.style.visibility = 'visible';
        activeCardText.style.opacity = 0;
        activeCardText.style.visibility = 'hidden';
        activeCardText = card2_text;
        activeCard = card2;
    }
});

card3.addEventListener('click', ()=>{
    if (activeCard != card3) {
        card3.style.width = '100%';
        activeCard.style.width = '10%';
        card3_text.style.opacity = 1;
        card3_text.style.visibility = 'visible';
        activeCardText.style.opacity = 0;
        activeCardText.style.visibility = 'hidden';
        activeCardText = card3_text;
        activeCard = card3;
    }
});
card4.addEventListener('click', ()=>{
    if (activeCard != card4) {
        card4.style.width = '100%';
        activeCard.style.width = '10%';
        card4_text.style.opacity = 1;
        card4_text.style.visibility = 'visible';
        activeCardText.style.opacity = 0;
        activeCardText.style.visibility = 'hidden';
        activeCardText = card4_text;
        activeCard = card4;
    }
});
card5.addEventListener('click', ()=>{
    if (activeCard != card5) {
        card5.style.width = '100%';
        activeCard.style.width = '10%';
        card5_text.style.opacity = 1;
        card5_text.style.visibility = 'visible';
        activeCardText.style.opacity = 0;
        activeCardText.style.visibility = 'hidden';
        activeCardText = card5_text;
        activeCard = card5;
    }
});
