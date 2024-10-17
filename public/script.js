document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const backToTopButton = document.createElement("button");
    const themeToggle = document.createElement("button");
    backToTopButton.innerHTML = "↑";
    themeToggle.innerHTML = "🌙";
    backToTopButton.className = "back-to-top";
    themeToggle.className = "theme-toggle";

    document.body.appendChild(backToTopButton);
    document.body.appendChild(themeToggle);

    // Back-to-Top Button Show/Hide Logic
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Smooth Scroll to Top
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Section Fade-In Effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Theme Toggle Functionality
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });

    // Add Time-Based Greetings
    const header = document.querySelector("header h1");
    const hours = new Date().getHours();
    let greeting = "";

    if (hours < 12) {
        greeting = "Good Morning";
    } else if (hours < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    header.innerHTML = `${greeting} <br> Brajesh Kumar`;

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
