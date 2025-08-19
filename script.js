AOS.init({   
  });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  keyboard: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {      // from 0px width
      slidesPerView: 1,
      spaceBetween: 10
    },
    580: {    // from 480px width
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {   // from 1024px width
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});


let topbtn=document.querySelector(".up");

window.addEventListener("scroll",function(){
    if(this.scrollY > 200){
        topbtn.style.display ="block"
    }else{
        topbtn.style.display = "none"
    }
})

topbtn.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})



let openingelement = document.querySelector(".navbar2 i");
let sidebarelement = document.querySelector(".sidebar");
let closebtn=document.querySelector(".sidebar i")
let body = document.body;



openingelement.addEventListener("click",function(){
    sidebarelement.classList.add("showsidebar")
   
})

closebtn.addEventListener("click",function(){
    sidebarelement.classList.remove("showsidebar")
    
})