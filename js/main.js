// mobile menu
document.querySelector("button").addEventListener("click", function () {
  document.querySelector("#mobile_menu").classList.add("show");
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector("#mobile_menu").classList.remove("show");
  // document.querySelector("#mobile_menu").classList.add("hide")
});

// newsletter
let newsLetter = document.querySelector(".newsletter_popup");
let sideButton = document.querySelector("#sideBtn");
let closeSide = document.querySelector("#close_side");

sideButton.addEventListener("click", function () {
  newsLetter.style.display = "block";
  document.querySelector("#subscription").classList.add("show");
});
closeSide.addEventListener("click", function () {
  newsLetter.style.display = "none";
  document.querySelector("#subscription").classList.remove("show");
  // document.querySelector("#subscription").classList.add("hide")
});

// gallery

// let images = [
//     "img\sun bear on tree.jpg",
//     "img\sun bear termenung.jpg",
//     "img\tyre swing sun bear.jpg",
//     "img\volunteer bear 1.jpg"

// let next = document.querySelector("#nextBtn")
// let previous = document.querySelector("#previousBtn")
// let sliderImage = document.querySelector("#slider_image")
// let i = 0 //current image index
