$(function(){
    $("#navbar").load("navbar.html");
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

let index = document.getElementById("index")
let works = document.getElementById("works")
let port0 = document.getElementById("porto")
let archi = document.getElementById("archi")
let review = document.getElementById("review")
let news = document.getAnimations("news")
let contact = document.getElementById("contact")

let xhr = new XMLHttpRequest()
let loader = document.getElementById("loader")

function indexPage(){
    xhr.onload = function() {
        if (this.status === 200){
            loader.innerHTML = xhr.responseText;
        } else {
            console.log("Something Went Wrong")
        }
    };

    xhr.open('GET', 'footer.html');
    xhr.send
}