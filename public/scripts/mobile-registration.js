const btnRegister = document.getElementById('btn-register')

function registerMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}


btnRegister.addEventListener('click', registerMenu)



