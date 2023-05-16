let search_btn = document.getElementById('search-btn');
let container = document.getElementById('container');
let input_box = document.getElementById('input-box');
let input = document.getElementById('input');
input_box.style.width = '0px';
input.style.width = '0px';
container.style.width = '50px';
search_btn.addEventListener('click', () => {
    if (container.style.width === '50px') {
        container.style.width = '250px';
        input_box.style.width = '200px';
        input.style.width = '200px';
    }
    else if (container.style.width === '250px') {
        container.style.width = '50px';
        input_box.style.width = '0px';
        input.style.width = '0px';
    }
});