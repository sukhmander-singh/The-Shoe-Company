const menuBtn = document.querySelector('#menu-btn i')
const menuBar = document.querySelector('#menu-bar')
const menuBarLinks = document.querySelectorAll('#menu-bar a')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-arrow-right-long')
    menuBtn.classList.toggle('fa-bars')
    menuBar.classList.toggle('hidden')
})

for(let menuLink of menuBarLinks) {
    menuLink.addEventListener('click', () => {
        menuBtn.classList.remove('fa-arrow-right-long')
        menuBtn.classList.add('fa-bars')
        menuBar.classList.add('hidden')
    })
}