let cover = document.getElementById('cover');
let btn = document.getElementById('btn');
let loader = document.getElementById('loader');
let opacity = 1;
loader.style.opacity = opacity;
let blur_value = 30
const blur_id = setInterval(blurr, 100);

let load_value = 1;
const id = setInterval(load, 30);

function blurr() {
    cover.style.backdropFilter = `blur(${blur_value}px)`;
    console.log(blur_value);
    blur_value--;
    if (blur_value < 0) {
        clearInterval(id);
    }
}

function load() {
    loader.innerText = `${load_value}%`;
    console.log(load_value);
    load_value++;
    opacity = opacity - 0.01;
    loader.style.opacity = opacity;
    if (load_value > 100) {
        clearInterval(id);
    }
}