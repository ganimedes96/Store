const perfume = document.getElementById('registration-perfume')

const add = document.getElementById('perfume')
const remove = document.getElementById('watch')
const remove1 = document.getElementById('wallet')


function addClass(){
    if(!hasClass()){
        return perfume.classList.add('active')
    }
}

function removeClass(){
    if(hasClass()){
        return perfume.classList.remove('active')

    }
}
function hasClass(){
    return perfume.classList.contains('active')
}


add.addEventListener('click', addClass)
remove.addEventListener('click', removeClass)
remove1.addEventListener('click', removeClass)

