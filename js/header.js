document.addEventListener("DOMContentLoaded", () => {
    // ----- Hamburger menu toggle -----
    const hamburgerBtn = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        });
    }

    // ----- Highlight current page link -----
    const highlightCurrentPage = () => {
        const navItems = document.querySelectorAll('.nav-links li a');
        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        navItems.forEach(link => {
        const linkPage = link.getAttribute('href').split("/").pop();
        if (linkPage.toLowerCase() === currentPage.toLowerCase()) {
            link.classList.add('active');
        }
        });
    };

    highlightCurrentPage();
});
