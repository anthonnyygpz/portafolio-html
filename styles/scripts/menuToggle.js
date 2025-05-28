document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    // Cambiar el texto del botón
    if (navMenu.classList.contains("show")) {
      menuToggle.classList.add("fa-xmark");
      menuToggle.classList.remove("fa-bars");
    } else {
      menuToggle.classList.add("fa-bars");
      menuToggle.classList.remove("fa-xmark");
    }
  });

  // Cerrar menú al hacer clic en un enlace
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();

        // Quitar el menú
        navMenu.classList.remove("show");

        // Restaurar el ícono a hamburguesa
        menuToggle.classList.add("fa-bars");
        menuToggle.classList.remove("fa-xmark");

        // Opcional: Navegar a la sección después de cerrar el menú
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
