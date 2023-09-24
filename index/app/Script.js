let prof = document.getElementById("prof")

let profImg = document.getElementById("profImg")

let clicked = false

let miniMenu = document.getElementById("miniMenu")

profImg.addEventListener("click", function () {
    if (!clicked) {
        prof.classList.add("border-2", "border-indigo-500")
        miniMenu.classList.remove("hidden")
        miniMenu.classList.add("block")
        clicked = true
    } else {
        prof.classList.remove("border-2", "border-indigo-500")
        miniMenu.classList.remove("block")
        miniMenu.classList.add("hidden")
        clicked = false
    }
})

let light = document.getElementById("light")

let lightC = false

let html = document.querySelector("html")

light.addEventListener("click", function () {
    if (!lightC) {
        makeDark()
    }
    else {
        makeLight()
    }

})

let theme = localStorage.getItem("theme")

if (theme != null) {
    if (theme == "dark") {
        makeDark()
    } else {
        makeLight()
    }
}


function makeDark() {
    light.classList.remove("fa-moon")
    light.classList.add("fa-sun")
    html.classList.add("dark")
    localStorage.setItem("theme", "dark")
    lightC = true
}

function makeLight() {
    light.classList.remove("fa-sun")
    light.classList.add("fa-moon")
    html.classList.remove("dark")
    localStorage.setItem("theme", "light")
    lightC = false
}