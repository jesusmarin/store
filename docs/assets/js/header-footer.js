// header-footer.js

// Ejemplo de un efecto de cambio de color del fondo del header al hacer scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const header = document.getElementById("header");
  
    if (window.scrollY >= header.offsetHeight) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });