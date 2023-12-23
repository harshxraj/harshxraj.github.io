const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

let navbar = document.querySelector("header");
// let resumeButton = document.querySelector(".resume");
let resumeText = document.querySelector(".resume a");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#333";
    navbar.classList.add("nav-scrolled");
    // resumeButton.classList.add("nav-scrolled-resume-button");
    // resumeText.style.color = "#333";
    // document.querySelector(".nav-link.resume").style.color = "#212121";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.classList.remove("nav-scrolled");
    // resumeButton.classList.remove("nav-scrolled-resume-button");
    resumeText.style.color = "#eceff1";
    // document.querySelector(".nav-link.resume").style.color = "white";
  }
});
