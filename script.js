/* =============================================
   SAFESTEP - Landing Page JavaScript
   ============================================= */

document.addEventListener("DOMContentLoaded", () => {
    // ---------- Navbar Scroll Effect ----------
    const navbar = document.querySelector(".navbar");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        lastScroll = currentScroll;
    });

    // ---------- Mobile Menu ----------
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const mobileOverlay = document.querySelector(".mobile-overlay");

    function toggleMenu() {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("open");
        mobileOverlay.classList.toggle("active");
        document.body.style.overflow = navLinks.classList.contains("open")
            ? "hidden"
            : "";
    }

    function closeMenu() {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("open");
        mobileOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener("click", closeMenu);
    }

    // Close menu on link click
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // ---------- Smooth Scroll for Anchor Links ----------
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offsetTop =
                    target.offsetTop -
                    parseInt(
                        getComputedStyle(document.documentElement)
                            .scrollPaddingTop,
                    );
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    // ---------- Intersection Observer for Animations ----------
    const animateElements = document.querySelectorAll(
        ".fade-in, .fade-in-left, .fade-in-right",
    );

    if (animateElements.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px",
            },
        );

        animateElements.forEach((el) => observer.observe(el));
    }

    // ---------- FAQ Accordion ----------
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Close all
            faqItems.forEach((i) => i.classList.remove("active"));

            // Toggle current
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    // ---------- Testimonials Slider ----------
    const track = document.querySelector(".testimonials-track");
    const dots = document.querySelectorAll(".testimonial-dots button");
    const prevBtn = document.querySelector(".testimonial-prev");
    const nextBtn = document.querySelector(".testimonial-next");

    if (track && dots.length > 0) {
        let currentSlide = 0;
        const totalSlides = dots.length;
        let autoplayInterval;

        function goToSlide(index) {
            currentSlide = index;
            track.style.transform = `translateX(-${index * 100}%)`;

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });
        }

        function nextSlide() {
            goToSlide((currentSlide + 1) % totalSlides);
        }

        function prevSlide() {
            goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
        }

        function startAutoplay() {
            autoplayInterval = setInterval(nextSlide, 4000);
        }

        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }

        // Dot clicks
        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                stopAutoplay();
                goToSlide(i);
                startAutoplay();
            });
        });

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                stopAutoplay();
                prevSlide();
                startAutoplay();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                stopAutoplay();
                nextSlide();
                startAutoplay();
            });
        }

        // Start autoplay
        startAutoplay();

        // Pause on hover
        const wrapper = document.querySelector(".testimonials-wrapper");
        if (wrapper) {
            wrapper.addEventListener("mouseenter", stopAutoplay);
            wrapper.addEventListener("mouseleave", startAutoplay);
        }
    }

    // ---------- YouTube Videos (Click-to-Play) ----------
    document.querySelectorAll(".video-card[data-video-id]").forEach((card) => {
        const thumb = card.querySelector(".video-thumb");
        const videoId = card.dataset.videoId;

        thumb.addEventListener("click", function (e) {
            if (this.querySelector("iframe")) return;

            const iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            iframe.allow =
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            iframe.title = this.querySelector(".play-btn")
                ? "Reproducir video"
                : "Video";

            this.innerHTML = "";
            this.appendChild(iframe);
        });
    });

    // ---------- Counter Animation ----------
    const statNumbers = document.querySelectorAll(".stat-item h3");

    if (statNumbers.length > 0) {
        const counterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const text = target.textContent.trim();
                        const suffix = text.replace(/[\d.,]/g, "") || "";
                        const targetValue = parseFloat(
                            text.replace(/[^\d.]/g, ""),
                        );

                        if (isNaN(targetValue)) return;

                        let current = 0;
                        const duration = 2000;
                        const steps = 60;
                        const increment = targetValue / steps;
                        let step = 0;

                        const timer = setInterval(() => {
                            step++;
                            current += increment;

                            if (step >= steps) {
                                target.textContent =
                                    targetValue.toLocaleString() + suffix;
                                clearInterval(timer);
                            } else {
                                target.textContent =
                                    Math.round(current).toLocaleString() +
                                    suffix;
                            }
                        }, duration / steps);

                        counterObserver.unobserve(target);
                    }
                });
            },
            { threshold: 0.5 },
        );

        statNumbers.forEach((el) => counterObserver.observe(el));
    }
});
