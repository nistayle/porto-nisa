let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
const navbar = document.querySelector("[data-navbar]");
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});
for (let i = 0; i < navElemArr.length; i++) {

    navElemArr[i].addEventListener("click", function () {
  
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("active");
  
    });
  
  }