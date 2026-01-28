// Load navbar into the element with id="navbar"
document.addEventListener("DOMContentLoaded", () => {
  fetch("pp-d.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Now add functionality after navbar loads
      const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("navLinks");

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

      const profileIcon = document.getElementById("profileDropdown");
      const profileMenu = document.getElementById("profileMenu");

      profileIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        profileMenu.classList.toggle("open");
      });

      document.addEventListener("click", (e) => {
        if (!profileMenu.contains(e.target)) {
          profileMenu.classList.remove("open");
        }
      });
    });
});


