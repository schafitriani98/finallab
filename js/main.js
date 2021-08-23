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

// newsletter
let newsLetter = document.querySelector(".newsletter_popup")
let sideButton = document.querySelector("#sideBtn")
let closeSide = document.querySelector("#close_side")

sideButton.addEventListener ("click", function(){
    newsLetter.style.display = "block"
    document.querySelector("#subscription").classList.add("show")
})
closeSide.addEventListener("click", function(){
    newsLetter.style.display = "none"
    document.querySelector("#subscription").classList.add("hide")
})


// gallery 

// let images = [
//     "img\sun bear on tree.jpg",
//     "img\sun bear termenung.jpg",
//     "img\tyre swing sun bear.jpg",
//     "img\volunteer bear 1.jpg"
//     ]


// let next = document.querySelector("#nextBtn")
// let previous = document.querySelector("#previousBtn")
// let sliderImage = document.querySelector("#slider_image")
// let i = 0 //current image index

// next.addEventListener ("click", function(){
//     sliderImage.innerHTML = (images[i]);
//     if(i === 3) {
//         i = 0;
//     }
//     else {
//         i++;
//     }
// })

// previous.addEventListener("click", function(){
//     sliderImage.innerHTML = (images[i]);
//     if (i === 0) {
//         i = 3;
//     }    
//     else {
//         i--;    
//     }
// })




