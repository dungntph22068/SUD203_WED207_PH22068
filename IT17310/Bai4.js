const cartbtn=document.querySelector(".anh2")
const cartshow=document.querySelector(".anh1")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.left="0"
})

cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.left="-100%"
})