// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('#theme-toggle i');
const html = document.documentElement;
const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const skillBars = document.querySelectorAll(".skill-progress");
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("gallery-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close-modal");
const contactForm = document.getElementById("contact-form");
const header = document.querySelector("header");

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Theme functionality
    initTheme();
    
    // Initialize other functionality
    initMobileMenu();
    initSkillBars();
    initGallery();
    initContactForm();
    initSmoothScroll();
    
    // Add event listeners for scroll effects
    window.addEventListener('scroll', () => {
        highlightActiveNavLink();
        updateHeaderOnScroll();
        animateSkillBars();
        animateOnScroll();
    });
    
    // Trigger initial animations
    setTimeout(() => {
        animateOnScroll();
    }, 500);
});

// Theme functionality
function initTheme() {
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme or default to light
    html.classList.remove('light-mode', 'dark-mode');
    html.classList.add(savedTheme + '-mode');
    updateThemeIcon(savedTheme);
    
    // Theme toggle functionality
    themeToggleBtn.addEventListener('click', () => {
        if (html.classList.contains('dark-mode')) {
            html.classList.remove('dark-mode');
            html.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        } else {
            html.classList.remove('light-mode');
            html.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        }
    });
}

// Update theme icon based on current theme
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Mobile menu functionality
function initMobileMenu() {
    // Mobile Menu Toggle
    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        nav.classList.toggle("active");
        
        // Animate hamburger menu bars
        const bars = document.querySelectorAll(".bar");
        if (hamburgerMenu.classList.contains("active")) {
            bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
            bars[1].style.opacity = "0";
            bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
        } else {
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        }
    });
    
    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburgerMenu.classList.remove("active");
            nav.classList.remove("active");
            
            // Reset hamburger menu bars
            const bars = document.querySelectorAll(".bar");
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        });
    });
}

// Highlight active nav link on scroll
function highlightActiveNavLink() {
    let current = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
}

// Update header on scroll
function updateHeaderOnScroll() {
    if (window.scrollY > 50) {
        header.style.background = "var(--header-bg)";
        header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    } else {
        header.style.background = "var(--header-bg)";
        header.style.boxShadow = "none";
    }
}

// Initialize skill bars
function initSkillBars() {
    skillBars.forEach(bar => {
        const parent = bar.parentElement;
        parent.setAttribute("data-progress", bar.style.width);
        bar.style.width = "0";
    });
}

// Animate skill bars when they come into view
function animateSkillBars() {
    const skills = document.querySelector(".skills");
    if (skills) {
        const skillsPosition = skills.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (skillsPosition < screenPosition) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                if (!width || width === "0px") {
                    setTimeout(() => {
                        bar.style.width = bar.parentElement.getAttribute("data-progress") || "0%";
                    }, 300);
                }
            });
        }
    }
}

// Initialize gallery functionality
function initGallery() {
    // Gallery Filtering
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            
            // Add active class to clicked button
            button.classList.add("active");
            
            const filterValue = button.getAttribute("data-filter");
            
            galleryItems.forEach(item => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "scale(1)";
                    }, 200);
                } else {
                    item.style.opacity = "0";
                    item.style.transform = "scale(0.8)";
                    setTimeout(() => {
                        item.style.display = "none";
                    }, 500);
                }
            });
        });
    });
    
    // Gallery Modal
    galleryItems.forEach(item => {
        const overlay = item.querySelector(".gallery-overlay");
        if (overlay) {
            overlay.addEventListener("click", () => {
                const imgSrc = item.querySelector("img").src;
                modalImg.src = imgSrc;
                modal.style.display = "block";
            });
        }
    });
    
    // Close Modal
    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }
    
    // Close Modal when clicking outside
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Initialize contact form
function initContactForm() {
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;
            
            // Simple form validation
            if (!name || !email || !message) {
                alert("Please fill in all required fields");
                return;
            }
            
            // Disable form elements
            const formElements = contactForm.elements;
            for (let i = 0; i < formElements.length; i++) {
                formElements[i].disabled = true;
            }
            
            // Show success message
            contactForm.innerHTML = `
                <div class="success-message fade-in">
                    <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--primary-color); margin-bottom: 20px;"></i>
                    <h3>Thank you, ${name}!</h3>
                    <p>Your message has been sent successfully. I'll get back to you soon.</p>
                </div>
            `;
            
            // Reset form after 5 seconds
            setTimeout(() => {
                contactForm.innerHTML = `
                    <div class="form-group">
                        <input type="text" id="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" id="subject" placeholder="Subject">
                    </div>
                    <div class="form-group">
                        <textarea id="message" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                `;
            }, 5000);
        });
    }
}

// Initialize smooth scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}


function animateOnScroll() {
    const elements = document.querySelectorAll('.about-content, .gallery-grid, .contact-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            if (!element.classList.contains('fade-in')) {
                element.classList.add('fade-in');
            }
        }
    });
}