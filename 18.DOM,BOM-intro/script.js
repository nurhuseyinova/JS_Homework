let startBtn=document.querySelector(".start");
let stopBtn=document.querySelector(".stop");
let range=document.querySelector(".range");
let incBtn=document.querySelector(".increment");
let decBtn=document.querySelector(".decrement");
let resetBtn=document.querySelector(".reset");
let num=document.querySelector(".num");
let inputBtn=document.querySelector(".inputbtn");



let count=0;
let interval;
startBtn.addEventListener("click",function () {
     interval=setInterval(()=>{
        count++
        range.innerText=count;
    },1000)

   
    
})


stopBtn.addEventListener("click",function () {
    clearInterval(interval);
    
})


incBtn.addEventListener("click",function () {
    range.innerText=++count
    
})


decBtn.addEventListener("click",function () {
   range.innerText=--count
    
})


resetBtn.addEventListener("click",function () {
    count=0
    range.innerText=count
   
    
})


let number=0
inputBtn.addEventListener("click",function () {
   
    num.innerText=number+num.stepUp(4)
    
})



