let right = document.getElementsByClassName('right')[0];
let left = document.getElementsByClassName('left')[0];

left.addEventListener('mouseover', ()=>{
    // console.log('hovered');
    left.style.width = '75%';
    right.style.width = '25%';
    left.style.zIndex = 1;
    right.style.zIndex = 0;
});

left.addEventListener('mouseout', ()=>{
    // console.log('out');
    left.style.width = '50%';
    right.style.width = '50%';
    left.style.zIndex = 0;
    right.style.zIndex = 0;
});

right.addEventListener('mouseover', ()=>{
    // console.log('hovered');
    right.style.width = '75%';
    left.style.width = '25%';
    right.style.zIndex = 1;
    left.style.zIndex = 0;
});


right.addEventListener('mouseout', ()=>{
    // console.log('out');
    left.style.width = '50%';
    right.style.width = '50%';
    right.style.zIndex = 0;
    left.style.zIndex = 0;
});

