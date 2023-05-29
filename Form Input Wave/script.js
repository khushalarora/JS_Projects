let email = document.getElementById('email');
let email_label = document.getElementById('email-label');
let password = document.getElementById('password');
let password_label = document.getElementById('password-label');

email_label.style.top = '42px';
password_label.style.top = '135px';

email.addEventListener('focusin', ()=>{
    for (let i = 0; i < 5; i++) {
        email_label.children[i].style.transform = `translate(0, -30px)`;
    }
    email.style.borderColor = 'lightblue';
    email_label.style.color = 'lightblue';
})

email.addEventListener('focusout', ()=>{
    if (email.value === '') {
        for (let i = 0; i < 5; i++) {
            email_label.children[i].style.transform = `translate(0)`;
        }
        email.style.borderColor = 'white';
        email_label.style.color = 'white';
    }
});

password.addEventListener('focusin', ()=>{
    for (let i = 0; i < 8; i++) {
        password_label.children[i].style.transform = `translate(0, -30px)`;
    }
    password.style.borderColor = 'lightblue';
    password_label.style.color = 'lightblue';
})

password.addEventListener('focusout', ()=>{
    if (password.value === '') {
        for (let i = 0; i < 8; i++) {
            password_label.children[i].style.transform = `translate(0)`;
        }
        password.style.borderColor = 'white';
        password_label.style.color = 'white';
    }
});