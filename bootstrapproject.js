let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on")
}else{
    nav.classList.remove("scroll-on")
}
}
let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.array.forEach(function(a) {
    a.addeventlistener("click", function () {
        navcollapse.classList.remove("show");
    })
})