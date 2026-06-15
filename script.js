// ===============================
// STarlight Academy V4 PRO Script
// Clean + Safe + Production Ready
// ===============================


// ===============================
// SAFE ELEMENT CHECKER
// ===============================
function exists(id) {
    return document.getElementById(id) !== null;
}


// ===============================
// ANIMATED COUNTERS (SAFE)
// ===============================
function animateCounter(id, target, suffix = "") {

    const element = document.getElementById(id);
    if (!element) return; // prevent errors if missing

    let count = 0;
    const increment = target / 100;

    function updateCounter() {
        if (count < target) {
            count += increment;
            element.textContent = Math.floor(count) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    }

    updateCounter();
}

// Run counters only if they exist
animateCounter("students", 500, "+");
animateCounter("teachers", 50, "+");
animateCounter("success", 98, "%");
animateCounter("years", 15, "+");


// ===============================
// WHATSAPP ADMISSION FORM (SAFE)
// ===============================
const form = document.getElementById("admissionForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const student = document.getElementById("student")?.value || "N/A";
        const email = document.getElementById("email")?.value || "N/A";
        const phone = document.getElementById("phone")?.value || "N/A";
        const message = document.getElementById("message")?.value || "N/A";

        const whatsappMessage = `
🎓 STARLIGHT ACADEMY ADMISSION REQUEST

Student Name: ${student}
Email: ${email}
Phone: ${phone}

Message:
${message}
        `;

        const whatsappNumber = "2348000000000"; // replace with real number

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url, "_blank");
    });
}


// ===============================
// STICKY HEADER SHADOW (SAFE)
// ===============================
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");
    if (!header) return;

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }

});


// ===============================
// GALLERY HOVER (FIXED)
// ===============================
const galleryItems = document.querySelectorAll(".gallery img");

if (galleryItems.length > 0) {
    galleryItems.forEach(item => {

        item.style.transition = "0.3s ease";

        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });

    });
}


// ===============================
// SMOOTH SCROLL (GLOBAL)
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// LOAD LOG
// ===============================
window.addEventListener("load", () => {
    console.log("✅ Starlight Academy V4 PRO Loaded Successfully");
});
