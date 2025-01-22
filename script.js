const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
/*test1*/
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')

}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')

}

function change1() {
    document.getElementById("img1").src = "./images/carousel-screen-1-dt.png"
}
function change2() {
    document.getElementById("img1").src = "./images/carousel-dt-1.png"
}
function change3() {
    document.getElementById("img2").src = "./images/carousel-screen-2-dt.png"
}
function change4() {
    document.getElementById("img2").src = "./images/carousel-dt-2.png"
}
function change5() {
    document.getElementById("img3").src = "./images/carousel-screen-3-dt.png"
}
function change6() {
    document.getElementById("img3").src = "./images/carousel-dt-3.png"
}
function change7() {
    document.getElementById("img4").src = "./images/carousel-screen-4-dt.png"
}
function change8() {
    document.getElementById("img4").src = "./images/carousel-dt-4.png"
}

// button states below//

function change9() {
    document.getElementById("arrow").src = "./icons & Logos/status=Hover.png"
}
function change10() {
    document.getElementById("arrow").src = "./icons & Logos/Arrow up.svg"
}

