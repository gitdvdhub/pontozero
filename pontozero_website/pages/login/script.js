const email = document.getElementById('email');
const password = document.getElementById('pass');

//banco de dados

const user1 = {
    email: "david",
    password: "1234",
    cargo: "ADM"
};

const user2 = {
    email: "lego",
    password: "4321",
    cargo: "Client"
};


//logar(click) or (enter key)
document.addEventListener('keydown', function (event) {
    if(event.keyCode == 13 ) {
        logar()
    }
});

function logar() {
    
    //checkagem de conteúdo
    if ((email.value).length == 0 || (password.value).length == 0) {
    window.alert("Os dados inseridos estão incorretos ou são inválidos")
    } else {
        console.log(`email: ${(email.value)} | senha: ${(password.value)}`)

        if (String(email.value) == user1.email && String(password.value) == user1.password || String(email.value) == user2.email && String(password.value) == user2.password) {
            window.location.href = '../../index.html'
        } else {
            window.alert('O usuario não consta no banco de dados')
        }
    }
};
