const users = [
    {
        email: 'anna@text.com',
        password: 'anna'
    },
    {
        email: 'liza@text.com',
        password: 'liza'
    },
    {
        email: 'tanya@text.com',
        password: 'tanya'
    },
    {
        email: 'helen@text.com',
        password: 'helen'
    },
    {
        email: 'iya@text.com',
        password: 'iya'
    }
];

const form = document.getElementById('login-form');
const loginStatus = document.getElementById('login-status');

function login(email, password) {
    return new Promise(function (resolve, reject) {
        let user = users.find(user => user.email === email);
        if (user) {
            if (user.password === password) {
                resolve(`<p>User successfully logged in</p>`);
            } else {
                reject(`<p>Password is incorrect for e-mail ${email}</p>`);
            }
        } else {
            reject(`<p>User with e-mail ${email} does not exist</p>`);
        }
    })
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const loginEmail = document.getElementById('email').value;
    const loginPassword = document.getElementById('password').value;
    form.style.display = 'none';
    loginStatus.style.display = 'flex';

    login(loginEmail, loginPassword).then(
        message => {
            loginStatus.className = 'login-successful';
            loginStatus.innerHTML = message;
        },
        message => {
            loginStatus.className = 'login-failed';
            loginStatus.innerHTML = message;
        }
    );
});