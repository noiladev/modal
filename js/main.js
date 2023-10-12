var wrapper = document.querySelector('.modal')
var shadow =document.querySelector('.shadow')



function openModal()  {
    wrapper.classList.add('open__modal')
    shadow.classList.add('shadow__open')
}

function closeModal() {
    wrapper.classList.remove('open__modal')
    shadow.classList.remove('shadow__open')
}