
const menu = document.querySelector("#menu-tlacitko")
const menuPolozky = document.querySelector("#menu-polozky")

menu.addEventListener("click", () => {
    menuPolozky.classList.toggle("show")

    if(menuPolozky.classList.contains("show")) {
        menu.innerHTML = `<i class="fas fa-xmark"></i>`
    } else {
        menu.innerHTML = `<i class="fas fa-bars"></i>`
    }
})


