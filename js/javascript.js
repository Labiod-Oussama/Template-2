 const swiper = new Swiper('.swiper', {
   autoplay:{
       delay:8000,
       disableOnInteraction:false,
   },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
document.querySelector('.swiper-button-next').style.cssText="color:white;transform:scale(.6)";
document.querySelector('.swiper-button-prev').style.cssText="color:white;transform:scale(.6)";
document.querySelector('.down').addEventListener("click",()=>{
  document.getElementById('aboutUs').scrollIntoView({
    behavior:"smooth"
  })
})
// bottom of header
let  myHead = document.querySelector(".head");
let myFirstSection = document.querySelector(".sliders");
let myProjectSection =document.querySelector('.projects');
let myelenav = document.querySelectorAll('.navbar a');
window.addEventListener('scroll',(e)=>{
  if (this.pageYOffset>myFirstSection.offsetHeight -200) {
     myHead.style.position='fixed';
    myHead.style.backgroundColor='white';
    myHead.firstElementChild.style.color='black';
    myHead.style.transition=' all 2s ease';
    myHead.style.boxShadow='0px 3px 50px -10px rgba(51,51,51,0.4)';
    myelenav.forEach(element => {
      element.style.color='black';    
   });
  }
  else{
    myHead.style.cssText="position:absolute;background-color:transparent;color:rgb(218, 208, 208)";
    myHead.firstElementChild.style.color='white';
    myelenav.forEach(element => {
      element.style.color='rgb(218, 208, 208)';
   });
  }
})
window.addEventListener('scroll',(e)=>{
  if (this.pageYOffset>myFirstSection.offsetHeight-100) {
    myelenav.forEach(element => {
      if (element.dataset.aa=='ab') {
        element.style.color='green';
        element.style.transition='color .3s linear ';
      } else {
        element.style.color='black';
      }     
   });
  }
  if (this.pageYOffset>myProjectSection.offsetTop-100) {
    myelenav.forEach(element => {
      if (element.dataset.aa=='pr') {
        element.style.color='green';
        element.style.transition='color .3s linear ';
      } else {
        element.style.color='black';
      }     
   });
  }
})
 function check() {
   myelenav.forEach(e => {
       let ok = e.target.dataset.aa;
       if (ok=="ab") {
         e.style.color='green';
       }
   });
 }
 var bbtn =document.querySelector('.lll');
 var mail = document.querySelector('.checkmail');
 var mil = document.querySelector('.mil');
 bbtn.addEventListener("click",(e)=>{
   var mailValue = mail.value;
  if (!mailValue) {
     mil.classList.add('empty');
  }
  else{
    mil.classList.remove('empty');
  }
 })
 
var myImgs = document.querySelectorAll('.imagesPro img');
var myList =document.querySelectorAll('.stl');
myList.forEach(element => {
  element.addEventListener('click',(e)=>{
    if (e.currentTarget.dataset.img) {
      deleting();
      myImgs[Number(e.currentTarget.dataset.img)].classList.add('scaling');
      myImgs[Number(e.currentTarget.dataset.img)].classList.remove('active');
      myImgs[Number(e.currentTarget.dataset.oo)].classList.remove('active');
      myImgs[Number(e.currentTarget.dataset.oo)].classList.add('scaling');
    } else {
      restore();
    }
  })
});
function deleting() {
  myImgs.forEach(img => {
    img.classList.add('active');
    
  });
}
function restore() {
  myImgs.forEach(img => {
    img.classList.remove('active');
  });
}

class Personne{
   #e;   
  constructor(nom,pw){
    this.nom = nom;
    
    this.#e=pw;
  }
getPass(){
  return this.nom;
}
}
 
 let per = new Personne("ali",15); 
 
console.log(per.getPass());



