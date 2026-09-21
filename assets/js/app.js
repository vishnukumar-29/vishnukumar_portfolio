// Navbar Toggle
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const mobileLinks = document.querySelectorAll(".mobile-link");

let menuOpen = false;

menuButton.addEventListener("click", () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
        mobileMenu.classList.remove("invisible", "opacity-0");
        mobileMenu.classList.add("visible", "opacity-100");

        hamburger.classList.add("opacity-0", "rotate-90");

        cross.classList.remove("opacity-0", "rotate-90");
        cross.classList.add("opacity-100", "rotate-0");

        mobileLinks.forEach((link) => {
            link.classList.remove("opacity-0", "translate-y-5");
            link.classList.add("opacity-100", "translate-y-0");
        });

        document.body.classList.add("overflow-hidden");
    } else {
        closeMenu();
    }
});

function closeMenu() {
    menuOpen = false;

    mobileMenu.classList.add("invisible", "opacity-0");
    mobileMenu.classList.remove("visible", "opacity-100");

    hamburger.classList.remove("opacity-0", "rotate-90");

    cross.classList.add("opacity-0", "rotate-90");
    cross.classList.remove("opacity-100", "rotate-0");

    mobileLinks.forEach((link) => {
        link.classList.add("opacity-0", "translate-y-5");
        link.classList.remove("opacity-100", "translate-y-0");
    });

    document.body.classList.remove("overflow-hidden");
}

mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        closeMenu();
    }
});


// Skills Swiper
const skillsSwiper = new Swiper(".skillsSwiper", {
    slidesPerView: "auto",
    spaceBetween: 35,
    loop: true,
    speed: 3500,

    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },

    allowTouchMove: true,

    breakpoints: {
        0: {
            spaceBetween: 15
        },
        640: {
            spaceBetween: 25
        },
        768: {
            spaceBetween: 35
        },
        1024: {
            spaceBetween: 45
        }
    }
});

const skillsWrapper = document.querySelector(".skills-swiper-wrapper");

skillsWrapper.addEventListener("mouseenter", () => {
    skillsSwiper.autoplay.stop();
});

skillsWrapper.addEventListener("mouseleave", () => {
    skillsSwiper.autoplay.start();
});


// AOS Animation


// Typing Animation
const text = "Hi, I’m Vishnu Kumar";
const typingText = document.getElementById("typing-text");
const waveHand = document.getElementById("wave-hand");

let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;

        setTimeout(typeText, 100);
    } else {
        waveHand.classList.add("animate-wave");
    }
}

window.addEventListener("load", () => {
    typeText();
});
setTimeout(typeText, 150);  // Fast


// Counter Animation
const duration = 2000;
const counters = document.querySelectorAll(".counter");
const achievementSection = document.querySelector("#achievements");

let counterStarted = false;

function startCounters() {
    if (counterStarted) return;

    counterStarted = true;

    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    function updateCounters(currentTime) {
        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        );

        // Smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);

        counters.forEach((counter) => {
            const target = Number(counter.dataset.target);
            const currentValue = Math.floor(target * easeOut);

            counter.textContent = currentValue;
        });

        if (progress < 1) {
            requestAnimationFrame(updateCounters);
        } else {
            // Make sure every counter ends exactly on target
            counters.forEach((counter) => {
                counter.textContent = counter.dataset.target;
            });
        }
    }

    requestAnimationFrame(updateCounters);
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounters();
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.3
    }
);

observer.observe(achievementSection);


// Back to Top Button
const backToTop = document.getElementById("backToTop"); window.addEventListener("scroll", () => { if (window.scrollY > 300) { backToTop.classList.add("show"); } else { backToTop.classList.remove("show"); } }); backToTop.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });