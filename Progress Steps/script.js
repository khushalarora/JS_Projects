let bar = document.getElementById('bar');
let prevBtn = document.getElementById('previous');
let nextBtn = document.getElementById('next');
let circle1 = document.getElementById('circle1');
const gray = '#e0e0e0';
const blue = '#3498db';
bar.style.width = '0%';
circle1.style.borderColor = blue;
let activeCircle = 1;

if (activeCircle === 1) {
    prevBtn.disabled = true;
    prevBtn.classList = ['btn-inactive'];
}

nextBtn.addEventListener('click', ()=>{
    prevBtn.disabled = false;
    prevBtn.classList = ['btn-active'];
    if (activeCircle < 4) {
        let newWidth = parseInt(bar.style.width.split('%')[0]) + 33;

        bar.style.width = `${newWidth}%`;
        console.log(newWidth);
        console.log(activeCircle);
        activeCircle++;
        document.getElementById(`circle${activeCircle}`).style.borderColor = blue;
    }
    if (activeCircle === 4) {
        nextBtn.disabled = true;
        nextBtn.classList = ['btn-inactive'];
    }
});

prevBtn.addEventListener('click', ()=>{
    nextBtn.disabled = false;
    nextBtn.classList = ['btn-active'];
    if (activeCircle > 1) {
        let newWidth = parseInt(bar.style.width.split('%')[0]) - 33;

        bar.style.width = `${newWidth}%`;
        console.log(newWidth);
        console.log(activeCircle);
        document.getElementById(`circle${activeCircle}`).style.borderColor = gray;
        activeCircle--;
    }
    if (activeCircle === 1) {
        prevBtn.disabled = true;
        prevBtn.classList = ['btn-inactive'];
    }
});