'use strict';


const addEventOnElement = function (element, type, callback) {
    if (element.length > 1 ) {
        for (let i=0; i < element.length; i++) {
            element[i].addEventListener(type, callback);
        }
    } else {
        element.addEventListener(type, callback);
    }
}



const navToggle = document.querySelector("[data-nav-toggler]");
const navBar = document.querySelector("[data-navbar]");
const navBarLink = document.querySelectorAll("[data-nav-link]");


const toggleNavBar = function () {
    navBar.classList.toggle("active")
    navToggle.classList.toggle("active");
}

addEventOnElement(navToggle, "click", toggleNavBar);


const closeNavBar = function () {
    navBar.classList.remove("active");
    navToggle.classList.remove("active");
}

addEventOnElement(navBarLink, "click", closeNavBar);

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOn = function() {
    if(window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

addEventOnElement(window, "scroll", activeElementOn);
