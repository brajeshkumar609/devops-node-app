// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animated Typing Effect for Header
const typedText = "Network Engineer | Aspiring DevOps Professional | Cloud Explorer";
let index = 0;

function typeEffect() {
    const headerText = document.querySelector('header p');
    if (index < typedText.length) {
        headerText.textContent += typedText.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Adjust speed here (100ms delay)
    }
}
window.onload = typeEffect; // Trigger typing on page load

// Fade-in Animation Trigger on Scroll
const sections = document.querySelectorAll('section');

function revealSection() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealSection); // Trigger fade-in on scroll

// Back-to-Top Button Visibility and Scroll
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆️';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme Toggle (Light/Dark Mode)
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌙';
themeToggle.className = 'theme-toggle';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent =
        document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});
