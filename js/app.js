const burgerBtn = document.querySelector(".burger");
const burgerMenu = document.querySelector(".header_down");
const closeBurgerBtn = document.querySelector(".close-burger");
const body = document.getElementsByTagName("body")[0];

burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.add("active");
    body.classList.add("nonscroll")
});
closeBurgerBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("active")
    body.classList.remove("nonscroll")

});