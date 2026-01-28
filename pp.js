// Consolidated User Navbar Logic
document.addEventListener("DOMContentLoaded", () => {
  fetch("pp.html")
    .then(res => res.text())
    .then(data => {
      const navbarContainer = document.getElementById("navbar");
      if (!navbarContainer) return;

      navbarContainer.innerHTML = data;

      // Elements in pp.html
      const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("navLinks");
      const profileIcon = document.getElementById("profileIcon");
      const profileMenu = document.getElementById("profileMenu");

      // Hamburger toggle logic
      if (hamburger && navLinks) {
        hamburger.onclick = (e) => {
          e.stopPropagation();
          navLinks.classList.toggle("active");
        };
      }

      // Profile dropdown logic
      if (profileIcon && profileMenu) {
        profileIcon.onclick = (e) => {
          e.stopPropagation();
          profileMenu.classList.toggle("open");
        };
      }

      // Close menus on outside click
      document.onclick = (e) => {
        if (navLinks && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
          navLinks.classList.remove("active");
        }
        if (profileMenu && !profileMenu.contains(e.target)) {
          profileMenu.classList.remove("open");
        }
      };
    })
    .catch(err => console.error("Error loading navbar:", err));
});
