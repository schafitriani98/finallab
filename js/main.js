let mobileMenu = document.querySelector("#mobile_menu")
let mobileBars = document.querySelector("#bars")
let closeBars = document.querySelector("#close")

mobileBars.addEventListener ("click", function(){
    mobileMenu.style.display = "block"
    document.querySelector("#mobile_menu").classList.add("show")
})
closeBars.addEventListener("click", function(){
    mobileMenu.style.display = "none"
    document.querySelector("#mobile_menu").classList.add("hide")
})