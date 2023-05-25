let boxes = document.getElementsByClassName('box');
let contents = document.getElementsByClassName('content');
const contentDistance = [];
let totalScreenHeight = window.innerHeight + window.scrollY;
let contentHeight = contents[0].getBoundingClientRect().height;
let activeBox;

for (let i = 0; i < boxes.length; i++) {
    let content = boxes[i].children[0];
    let dist = content.getBoundingClientRect().top;
    if (totalScreenHeight > dist + contentHeight) {
        boxes[i].classList.remove('hide');
        boxes[i].classList.add('show');
        activeBox = i;
    }
    contentDistance.push(dist);
}

window.addEventListener('scroll', () => {
    let activeBox2 = activeBox;
    for (let i = activeBox2 + 1; i < boxes.length; i++) {
        totalScreenHeight = window.innerHeight + window.scrollY;
        let dist = contentDistance[i];
        if (totalScreenHeight > dist + contentHeight) {
            boxes[i].classList.remove('hide');
            boxes[i].classList.add('show');
            activeBox2 = i;
        }
        else {
            boxes[i].classList.remove('show');
            boxes[i].classList.add('hide');
        }
    }
});


