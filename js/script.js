let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menu.onClick = ()=>{
    menu.classList.toggle("bx-x")
    navbar.classList.toggle("active")
};
window.onscroll = () =>{
    menu.classList.remove("bx-x")
    navbar.classList.remove("active") 
};

const sr = ScrollReveal ({
    distance: "30px",
    duration: 1500,
    reset:true
})  
sr.reveal('.home-text', {delay:150, origin: "top"})
sr.reveal('.home-img', {delay:250, origin: "top"})
sr.reveal('.about, .cta, .resume, .contact, .copyright', {delay:100, origin: "top"})


