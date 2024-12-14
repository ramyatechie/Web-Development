const btn1El = document.querySelector(".btn1")
const btn2El = document.querySelector(".btn2")
const btn3El = document.querySelector(".btn3")
const titleEl = document.querySelector(".title")
const bodyEl = document.querySelector("body")

btn1El.addEventListener("click", function(){
    bodyEl.style.backgroundColor = "yellow";
});

btn2El.addEventListener("click", function(){
    titleEl.style.fontSize = "90px";
});

btn3El.addEventListener("click", function(){
    bodyEl.style.backgroundColor = "";
    titleEl.style.fontSize = '30px';
});