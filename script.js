let arrow_up = document.querySelector("#arrow-up");
let navbar = document.getElementById("navbar");

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        arrow_up.style.display = "block";
        navbar.classList.add("sticky")

    } else {
        arrow_up.style.display = "none";
        navbar.classList.remove("sticky")
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


window.onscroll = function () { scrollFunction() };
arrow_up.addEventListener("click", topFunction);

// hamburger_menu JS Starts 

let big_wrapper;
let hamburger_menu;

function declare() {
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
}


declare();

function events() {
    hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("nav-open");
    });
}

events();

const links = document.querySelectorAll(".my-nav-link");

function closeMenu() {
    big_wrapper.classList.remove("nav-open");
}
links.forEach((link) => link.addEventListener("click", () => closeMenu()));

// hamburger_menu JS Ends 