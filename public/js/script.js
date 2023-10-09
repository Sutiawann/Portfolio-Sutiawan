window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Humberger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});



// Tab
// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//     for (tablink of tablinks) {
//         tablink.classList.remove("active-link");
//     }
//     for (tabcontent of tabcontents) {
//         tabcontent.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");
// }

