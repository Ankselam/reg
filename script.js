const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconlose = document.querySelector('.icon-close');
const loginForm = document.querySelector('.loginForm');
const btnLoginpopup = document.querySelector('.btnLogin-popup');
const registrationForm = document.querySelector('.registrationForm');
const errorElement = document.getElementById('error');
const error1 = document.querySelector('.error1');
const nameInput = document.querySelector('.nameInput');
const input1 = document.querySelector('.input1');
const success = document.getElementById('success');
const input2 = document.querySelector('.input2');
const lastNameInput = document.querySelector('.lastNameInput');






registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconlose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    lastNameInput.value = '';
    nameInput.value = '';
    input1.value = '';
    input2.value = '';
    errorElement.textContent = '';
    error1.textContent = ""
});

const array = JSON.parse(localStorage.getItem('info')) || [];

let obj;



showUser()
function showUser() {

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (nameInput.value.length > 5 && lastNameInput.value.length > 5) {


            const reg = new FormData(registrationForm);
            obj = Object.fromEntries(reg);
            array.push(obj);
            localStorage.setItem('info', JSON.stringify(array))
            success.textContent = 'registration is successful'
            console.log(array);
        }

        nameInput.value.length <= 5 ? errorElement.textContent = 'username must be longer then 5 character' : errorElement.textContent = "";

        lastNameInput.value.length <= 5 ? error1.textContent = 'username must be longer then 5 character' : error1.textContent = "";

    });
};


showResult();
function showResult() {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(loginForm);
        let objobj = Object.fromEntries(fd);
        console.log(objobj);
        console.log(array);

        array.map(item => {

            if (objobj.name === item.name && objobj.password === item.password) {
                window.location.href = 'confirm.html'
                // btnLoginpopup.textContent = 'logout';
            };

        });
    });

};

btnLoginpopup.addEventListener('click', function () {
    btnLoginpopup.textContent = 'login'
});