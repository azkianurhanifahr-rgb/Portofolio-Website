// 1 memanggil menu
// 2 manggil navbar

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('ri-close-line')
    navbar.classList.toggle('active')
}

// tyed js(untuk mengubah isi teks)
const typed = new Typed(".multiple-text", {
    strings: ['Web Developer', 'Mobile Developer', 'UI Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true

});