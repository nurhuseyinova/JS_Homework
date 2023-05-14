let head=document.querySelector("#head")
let bar=document.querySelector("#bar")
let p=document.querySelector("#paragraph")
let headUl=document.querySelector("#headUl")
let headNav=document.querySelector("#headnav")
let headLiA=document.querySelectorAll(".lia")


bar.addEventListener("click",function(){
        head.style.backgroundColor="black"
        head.style.backgroundImage="none"
        p.style.display="none"
        headUl.style.display="block"
        headUl.style.paddingInlineStart="0px"
})








