
 function Modal (){

    const  modalWrapper = document.querySelector('.modal-wrapper').classList
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', close)

    function open(){
        modalWrapper.add('active')
    }
    function close(){

        modalWrapper.remove('active')

    }

    return {open ,close}
}








const modal = Modal()


const deleteButtons = document.querySelectorAll('button.delete')

deleteButtons.forEach(button =>{
    //Adicionar a escuta
    button.addEventListener('click',event =>{
        modal.open()
    })
})


