let head = document.querySelector("#head");
let bar = document.querySelector("#bar");
let p = document.querySelector("#paragraph");
let headUl = document.querySelector("#headUl");

let click = false;
bar.addEventListener("click", function () {
  click = !click;
  if (click) {
    head.style.backgroundColor = "black";
    head.style.backgroundImage = "none";
    p.style.display = "none";
    headUl.style.display = "block";
  } else {
    head.style.backgroundColor = "none";
    head.style.backgroundImage = "url('../desktopimg/hero.jpg')";
    p.style.display = "block";
    headUl.style.display = "none";
  }
});
