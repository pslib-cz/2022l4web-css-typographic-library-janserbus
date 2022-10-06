const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navlist");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () =>{
    navlist.classList.toggle("active");
    hamburger.classList.toggle("active");    
    navbar.classList.toggle("active");
});
