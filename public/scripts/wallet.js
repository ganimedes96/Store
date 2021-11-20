const wallet = document.getElementById('registration-wallet')

const add = document.getElementById('wallet')
const remove = document.getElementById('watch')
const remove1 = document.getElementById('perfume')

function addClass(){
    if(!hasClass()){
        return wallet.classList.add('active')
    }
}

function removeClass(){
    if(hasClass()){
    return wallet.classList.remove('active')
    }
}

function hasClass(){
    return wallet.classList.contains('active')

}


add.addEventListener('click',addClass)
remove.addEventListener('click', removeClass)
remove1.addEventListener('click', removeClass)