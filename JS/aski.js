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
    strings: ['Mobile Developer', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true

});

// education btn

// 1. WAJIB DITULIS: Daftarkan dulu variabelnya agar JavaScript tidak bingung
const tombolEducation = document.querySelector('.edu-btn');
const wadahLogo = document.querySelector('.education-container');

// 2. Logika inti klik untuk memunculkan logo
tombolEducation.addEventListener('click', function(event) {
  // Menahan agar halaman tidak melompat ke atas/home jika tombolnya berupa link <a>
  event.preventDefault(); 
  
  // Saklar otomatis pasang/lepas class 'show'
  wadahLogo.classList.toggle('show');
  
  // Untuk ngetes di console browser Anda nanti
  console.log("Mantap! Class 'show' berhasil dipasang atau dilepas.");
});


