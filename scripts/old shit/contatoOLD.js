let contactForm = document.querySelector(".contato")
let thanksSpan = document.querySelector(".thanks")

function hideShowForm () {
    if (contactForm.style.display != "none"){
        contactForm.style.display = "none"
        thanksSpan.style.display = "block"
         
    } else {
        contactForm.style.display = "flex"
        thanksSpan.style.display = "none"
    } 
}

// BOTAO TESTE
let teste = document.querySelector(".teste")
teste.addEventListener("click", evt => {
    evt.preventDefault(),
    hideShowForm()
})




