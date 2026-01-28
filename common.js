/* common.js - Shared functionality for CampusNotify */
document.addEventListener("DOMContentLoaded", () => {
    injectNavbar();
    injectFooter();
});

function injectNavbar() {
    const navbarHTML = `
    <div class="navbar">
        <div class="logopart">
            <img src="nani-removebg-preview (1).png" class="icon" alt="Campus Logo">
            <span class="logo-text">Campus Notify</span>
        </div>
        <div style="display: flex; align-items: center;">
            <div class="links">
                <div class="hamburger" onclick="toggleMenu()">&#9776;</div>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="hackathon.html">Hackathons</a></li>
                    <li><a href="internshipuser.html">Internships</a></li>
                    <li><a href="Technicalevents.html">Tech Events</a></li>
                    <li><a href="sport.html">Sports</a></li>
                    <li><a href="nss.html">Communities</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="conatct.html">Contact</a></li>
                </ul>
            </div>

            <!-- 🔔 Notification Bell -->
            <div class="notification">
                <i class="fa-regular fa-bell"></i>
                <span class="badge">3</span>
                <div class="notification-dropdown">
                    <div class="notification-item">🎉 New Hackathon: Code Sprint</div>
                    <div class="notification-item">📢 Internship Deadline Extended</div>
                    <div class="notification-item">🎭 Cultural Fest Announced</div>
                </div>
            </div>

            <!-- 👤 Profile -->
            <div class="profile-menu" id="profileMenu">
                <i id="profileIcon" class="fa-regular fa-circle-user"></i>
                <div class="profile-dropdown" id="profileDropdown">
                    <button class="profile-dropdown-item">
                        <a href="profile1.html" style="text-decoration: none; color: white;">My Profile</a>
                    </button>
                    <button class="profile-dropdown-item">
                        <a href="edit-profile.html" style="text-decoration: none; color: white;">Edit Profile</a>
                    </button>
                    <button class="profile-dropdown-item">
                        <a href="leaderboard.html" style="text-decoration: none; color: white;">Leaderboard</a>
                    </button>
                    <button class="profile-dropdown-item" id="logout-btn">
                        <a href="#" style="text-decoration: none; color: white;">Logout</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;

    const header = document.createElement("header");
    header.innerHTML = navbarHTML;
    document.body.prepend(header);

    // Initialize UI logic
    initNavLogic();
}

function initNavLogic() {
    const profileIcon = document.getElementById("profileIcon");
    const profileMenu = document.getElementById("profileMenu");
    const logoutBtn = document.getElementById("logout-btn");

    if (profileIcon) {
        profileIcon.addEventListener("click", (e) => {
            e.stopPropagation();
            profileMenu.classList.toggle("open");
        });
    }

    document.addEventListener("click", (e) => {
        if (profileMenu && !profileMenu.contains(e.target)) {
            profileMenu.classList.remove("open");
        }
    });

    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("currentUser");
            window.location.href = "login.html";
        });
    }
}

// Global toggleMenu function for hamburger
function toggleMenu() {
    const navList = document.querySelector(".links ul");
    navList.classList.toggle("active");
}

function injectFooter() {
    const footerHTML = `
    <footer class="global-footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>CampusNotify</h4>
                <p>Your ultimate portal for campus opportunities, events, and community engagement. Empowering students to lead and succeed.</p>
            </div>
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="conatct.html">Contact</a></li>
                    <li><a href="profile1.html">Profile</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Contact Us</h4>
                <p>Email: contact@campusnotify.in</p>
                <p>Phone: +91 12345 67890</p>
                <p>Address: VIT Campus, AP</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 CampusNotify. All rights reserved.</p>
        </div>
    </footer>
    `;

    const footer = document.createElement("footer-wrapper");
    footer.innerHTML = footerHTML;
    document.body.appendChild(footer);
}
