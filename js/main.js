const navElement = document.querySelector("#header");
const iconThemes = document.querySelector(".nav-themes");
const dropDown = document.querySelector(".dropdown-icon");
const logo = document.querySelector(".logo a");
const button = document.getElementById("switchButton");
// Dark Theme
document.getElementById("switchButton").addEventListener("click", function () {
  document.getElementById("myBody").classList.toggle("dark");
});

// change css when scroll header
function scrollFunction() {
  const dark = document.querySelector(".dark");
  if (this.scrollY > 90 && !dark) {
    navElement.style.backgroundColor = "white";
    navElement.style.height = "70px";
    navElement.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
    dropDown.style.color = "black";
    logo.style.color = "black";
    iconThemes.style.color = "black";
    // changes themes
    button.onclick = changethemes;
  } else if (this.scrollY > 90 && dark) {
    navElement.style.backgroundColor = "black";
    navElement.style.height = "70px";
    navElement.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
    dropDown.style.color = "white";
    logo.style.color = "white";
    iconThemes.style.color = "white";
  } else {
    navElement.style.backgroundColor = "transparent";
    navElement.style.height = "90px";
    navElement.style.boxShadow = "unset";
    dropDown.style.color = "white";
    iconThemes.style.color = "white";
    logo.style.color = "var(--primary-color)";
  }
}
window.addEventListener("scroll", scrollFunction);

// Change themes when scroll and click
function changethemes() {
  const dark = document.querySelector(".dark");
  if (dark) {
    navElement.style.backgroundColor = "#000";
    dropDown.style.color = "white";
    logo.style.color = "white";
    iconThemes.style.color = "white";
  } else {
    navElement.style.backgroundColor = "white";
    dropDown.style.color = "black";
    logo.style.color = "black";
    iconThemes.style.color = "black";
  }
}

// Popup video
const opentext = document.getElementById("popup");
function openPopup() {
  opentext.classList.add("opentext");
}

function closePopup() {
  opentext.classList.remove("opentext");
}
