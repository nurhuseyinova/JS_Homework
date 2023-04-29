let result = document.querySelector(".result");
let value1 = document.querySelector("#value1");
let value2 = document.querySelector("#value2");
let addition = document.querySelector("#addition");
let substract = document.querySelector("#substract");
let multiply = document.querySelector("#multiply");
let division = document.querySelector("#division");
let reset = document.querySelector("#reset");

let num = 0;
addition.addEventListener("click", function () {
  if(value1.value == ""||value2.value == ""){
    num=0
    result.innerText = num;

  }
  else{
  num = +value1.value + +value2.value;
  result.innerText = num;}
});
substract.addEventListener("click", function () {
  if(value1.value == ""||value2.value == ""){
    num=0
    result.innerText = num;

  }
  else{
  num = value1.value - value2.value;
  result.innerText = num;}
});
multiply.addEventListener("click", function () {
  if(value1.value == ""||value2.value == ""){
    num=0
    result.innerText = num;

  }
  else{
  num = value1.value * value2.value;
  result.innerText = num;}
});
division.addEventListener("click", function () {
  if(value1.value == ""||value2.value == ""){
    num=0
    result.innerText = +num;

  }
  else{
  num = value1.value / value2.value;
  result.innerText = num;}
});
reset.addEventListener("click", function () {
  num = 0;
  result.innerText = num;

  value1.value = "";
  value2.value = "";
});
