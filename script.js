const link=document.querySelector(".hdn-links");
const toggleBtn = document.querySelector(".nav-toggle");
const hiddenLinks =document.querySelector(".hdn-links-for-small-scrn");
const reqHeight=link.getBoundingClientRect().height;
const showLinks=document.querySelector(".open");
const navCenter= document.querySelector(".nav-center");
const navBar = document.querySelector("nav");
const scrollTop=document.querySelectorAll(".scroll-to-top");
const banner = document.querySelector(".banner");
const scrollLinks =document.querySelectorAll(".scroll-links");
const navHeight=navCenter.getBoundingClientRect().height;
let floatingNav = document.querySelector(".floating-nav");
let navContain = document.querySelector(".contains-nav");


// const toggleBtns=document.querySelectorAll(".toggle-btns");


// toggleBtns.forEach((e)=>{
//     e.addEventListener("click",(e)=>{
//         e.target.style.fontSize="0px";
//     })
// })

scrollLinks.forEach((links)=>{
    links.addEventListener("click",(e)=>{
        hiddenLinks.style.height="0";
        e.preventDefault();
        const  id=e.target.getAttribute("href").slice(1);
        const element=document.getElementById(id);
        let position=element.offsetTop- navHeight ;
        const condition=navBar.classList.contains("fixed-nav");
        // if(!condition){
            // position=position ;
        // } 
        
        window.scrollTo({
            left:0,
            top:position,
        })


    })
})

showLinks.addEventListener("click",()=>{
    if(hiddenLinks.getBoundingClientRect().height===0)
    {
        hiddenLinks.style.height=`${reqHeight}px`;
    }
    else{
        hiddenLinks.style.height="0";
    }
    
    
})



window.addEventListener("scroll",()=>{
    const topBtn=document.querySelector(".top");
    const scroll = window.pageYOffset;
    
    if(scroll>navHeight){

        navContain.classList.add("fixed-nav");
        // banner.style.height="100%";
        // floatingNav.innerHTML=navCenter.innerHTML;



    }else{
        navContain.classList.remove("fixed-nav");
        // banner.style.height="auto";
        // floatingNav.innerHTML="";
    }
    if(scroll<navHeight){
        hiddenLinks.style.height="0";
    }

    if(scroll>700){
        topBtn.classList.add("show-top-btn");
    }else{
        topBtn.classList.remove("show-top-btn");
    }
})


function scrollToTop() {
    window.scrollTo({
    top: 0, 
    behavior: 'smooth' // Ensure smooth scrolling
     }); }
     
var currentDate = new Date().getFullYear();
const dateBox=document.querySelector("#year");
dateBox.innerHTML=currentDate;
