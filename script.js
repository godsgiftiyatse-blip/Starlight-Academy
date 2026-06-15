// ===============================
// STARLIGHT ACADEMY V4 PRO+ JS
// ===============================


// ===============================
// MOBILE MENU (SAFE + CLEAN)
// ===============================
const nav = document.querySelector("nav");
const header = document.querySelector(".nav-container");

if (nav && header) {

    const menuBtn = document.createElement("div");
    menuBtn.innerHTML = "☰";
    menuBtn.style.fontSize = "26px";
    menuBtn.style.cursor = "pointer";
    menuBtn.style.color = "#0b1d3a";

    header.appendChild(menuBtn);

    let open = false;

    function resizeMenu() {
        if (window.innerWidth <= 768) {
            nav.style.display = "none";
            menuBtn.style.display = "block";
        } else {
            nav.style.display = "flex";
            menuBtn.style.display = "none";
        }
    }

    resizeMenu();
    window.addEventListener("resize", resizeMenu);

    menuBtn.addEventListener("click", () => {
        open = !open;

        nav.style.display = open ? "flex" : "none";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "70px";
        nav.style.right = "20px";
        nav.style.background = "#fff";
        nav.style.padding = "15px";
        nav.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
        nav.style.borderRadius = "10px";
    });
}


// ===============================
// COUNTERS
// ===============================
function animateCounter(id, target, suffix = "") {
    const el = document.getElementById(id);
    if (!el) return;

    let count = 0;
    const speed = target / 100;

    function update() {
        count += speed;
        if (count < target) {
            el.textContent = Math.floor(count) + suffix;
            requestAnimationFrame(update);
        } else {
            el.textContent = target + suffix;
        }
    }

    update();
}

animateCounter("students", 500, "+");
animateCounter("teachers", 50, "+");
animateCounter("success", 98, "%");
animateCounter("years", 15, "+");


// ===============================
// SCROLL ANIMATION
// ===============================
const elements = document.querySelectorAll("section, .card, .hero");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});


// ===============================
// WHATSAPP FORM
// ===============================
const form = document.getElementById("admissionForm");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const student = document.getElementById("student")?.value || "";
        const email = document.getElementById("email")?.value || "";
        const phone = document.getElementById("phone")?.value || "";
        const message = document.getElementById("message")?.value || "";

        const text = `
🎓 STARLIGHT ACADEMY APPLICATION

Name: ${student}
Email: ${email}
Phone: ${phone}
Message: ${message}
        `;

        window.open(
            `https://wa.me/2348000000000?text=${encodeURIComponent(text)}`,
            "_blank"
        );
    });
}


// ===============================
// FAQ TOGGLE
// ===============================
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});


// ===============================
// HEADER SHADOW
// ===============================
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (!header) return;

    header.style.boxShadow =
        window.scrollY > 50
            ? "0 5px 20px rgba(0,0,0,0.15)"
            : "0 2px 10px rgba(0,0,0,0.1)";
});
