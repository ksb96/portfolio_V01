const openMenu = document.getElementById("menuBtn");
const mobileMenu = document.querySelector(".menuContainer");

const closeMenu = document.getElementById("closeBtn")
openMenu.checked = false;

openMenu.addEventListener("change", (e) => {
    if (openMenu.checked) {
        mobileMenu.classList.add('start')
    }
})

closeMenu.checked = false;
closeMenu.addEventListener("change", (e) => {
    if (closeMenu.checked) {
        console.log('hello')
        mobileMenu.classList.remove('start')
        closeMenu.checked = false;
        openMenu.checked = false;
    }
})
