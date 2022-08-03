$(function(){
    $("#navbar").load("navbar.html");
    $("#header").load("header.html");
    $("#porto").load("porto.html");
    $("#produk").load("produk.html");
    $("#testimoni").load("testimoni.html");
    $("#help").load("help.html");
    $("#footer").load("footer.html");
});

let home = document.getElementById("home")
let work = document.getElementById("work")
let porto = document.getElementById("porto")
let archi = document.getElementById("archi")
let review = document.getElementById("review")
let news = document.getAnimations("news")
let contact = document.getElementById("contact")

let navLink = document.getElementById("nav-link")

navLink.click(function(){
    navLink.classList("nav-link")
    this.classList("nav-link active1")
})
