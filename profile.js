 document.addEventListener('DOMContentLoaded', () => {
   fetch("pp.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

         const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("navLinks");

  const profileIcon = document.getElementById('profileIcon');
  const profileMenu = document.getElementById('profileMenu');

  profileIcon.addEventListener('click', () => {
    profileMenu.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!profileMenu.contains(e.target)) {
      profileMenu.classList.remove('open');
    }
  });
});
 });