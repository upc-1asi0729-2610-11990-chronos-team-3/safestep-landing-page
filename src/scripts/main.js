// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-primary-700/95", "nav-blur", "shadow-lg");
  } else {
    navbar.classList.remove("bg-primary-700/95", "nav-blur", "shadow-lg");
  }
});

// Mobile menu
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  mobileMenuBtn.setAttribute("aria-expanded", "true");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  mobileMenuBtn.setAttribute("aria-expanded", "false");
});

// Close mobile menu when clicking links
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
  });
});

// FAQ Accordion
const accordionBtns = document.querySelectorAll(".accordion-btn");
accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector("i");
    const isOpen = content.classList.contains("active");

    // Close all others
    accordionBtns.forEach((otherBtn) => {
      otherBtn.nextElementSibling.classList.remove("active");
      otherBtn.querySelector("i").style.transform = "rotate(0deg)";
      otherBtn.setAttribute("aria-expanded", "false");
    });

    // Toggle current
    if (!isOpen) {
      content.classList.add("active");
      icon.style.transform = "rotate(180deg)";
      btn.setAttribute("aria-expanded", "true");
    } else {
      btn.setAttribute("aria-expanded", "false");
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document
  .querySelectorAll(".card-hover, .feature-card, .scene-card")
  .forEach((el) => {
    observer.observe(el);
  });
