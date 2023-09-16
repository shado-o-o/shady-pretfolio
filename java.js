













let btnHeader=document.querySelector(".btn-respose-h");
let btnHeaderImg=document.querySelector('.btn-respose-h img');


let comHeader=document.querySelector(".com-h");
let x=0;
 btnHeader.addEventListener("click",()=>{
    if (x==0) {
       btnHeaderImg.src='./imgs/icons/x.svg';
       comHeader.style.height='500px';
        return x=1;
    } else {
        btnHeaderImg.src='./imgs/icons/bar.svg';
        comHeader.style.height='0px';
        return x=0;
    }
 })
window.addEventListener("resize",()=>{
   if (window.innerWidth>=600) {
    comHeader.style.height='45px';
   }
   else{
    comHeader.style.height='0px';

   }
});


 let links=document.querySelectorAll(".links-h a");
 let linkActive=document.querySelector(".link-active");
 
 for (let i = 0; i < links.length; i++) {
     const element = links[i];
     element.addEventListener("click",()=>{
        links.forEach(element => {
            element.classList.remove("active");
        });
        element.classList.add("active");
    });
}
let space=document.querySelector('.tital h2');
let spaceText="  Intelligent Living Space";

for (let i = 0; i < spaceText.length; i++) {
    const element = spaceText[i];
    setTimeout(()=>{
     space.innerHTML+=element;
    },140*i)
    if (i==spaceText.length-1) {
      
        
    }
}

let fadeIn=document.querySelectorAll("#fade-in");
let fadeOut=document.querySelectorAll("#fade-out");
function scroll(){
    fadeIn.forEach(element => {
        if(element.offsetTop > window.screenY){
            element.classList.add('scroll')
        }
    });
}
window.addEventListener("load",scroll);
function scroll2(){
    fadeOut.forEach(element => {
        if(element.offsetTop > window.screenY){
            
            element.classList.add('scroll2')
        }
          
    });
    
}
window.addEventListener("load",scroll2);
let lefadeIn=document.querySelectorAll("#el-fade-in");
let lefadeOut=document.querySelectorAll("#el-fade-out");
let win=window.innerWidth;
function scroll3d(){
     
    if(win>=455){
        lefadeIn.forEach(element => {
       if(element.offsetTop < window.scrollY+900){
           element.classList.add('scroll3');
       }
       else {
           element.classList.remove('scroll3');
       }
       });
      }
    else if(win<=425){
         lefadeIn.forEach(element => {
        if(element.offsetTop < window.scrollY+900){
            element.classList.add('scroll3');
        }
        else {
            element.classList.remove('scroll3');
        }
       
    });}
   
 
}
window.addEventListener("scroll",scroll3d);
function scroll3d2(){
    if(win>=455){
        lefadeOut.forEach(element => {
       if(element.offsetTop < window.scrollY+900){
           element.classList.add('scroll32');
       }
       else {
           element.classList.remove('scroll32');
       }
      
   });}
    if (win<=454) {
         lefadeOut.forEach(element => {
        if(element.offsetTop < window.scrollY+900){
            element.classList.add('scroll32');
        }
        else {
            element.classList.remove('scroll32');
        }
         });
    }}
   
 

window.addEventListener("scroll",scroll3d2);


