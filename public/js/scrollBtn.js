document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollBtn");

  function toggleButtonVisibility() {
    if (window.scrollY > 0) {
      scrollBtn.classList.replace("hidden", "block"); // Mostrar el botón
    } else {
      scrollBtn.classList.replace("block", "hidden"); // Ocultar el botón
    }
  }

  window.addEventListener("scroll", toggleButtonVisibility);
});
