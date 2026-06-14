// ===============================
// STarlight Academy V3 Script
// ===============================

// Animated Counter Function

function animateCounter(id, target, suffix = "") {

    let count = 0;

    const element = document.getElementById(id);

    const increment = target / 100;

    const updateCounter = () => {

        if (count < target) {

            count += increment;

            element.textContent =
                Math.floor(count) + suffix;

            requestAnimationFrame(updateCounter);

        } else {

            element.textContent =
                target + suffix;

        }

    };

    updateCounter();

}

// Run Counters

animateCounter("students", 500, "+");
animateCounter("teachers", 50, "+");
animateCounter("success", 98, "%");
animateCounter("years", 15, "+");


// ===============================
// WhatsApp Admission Form
// ===============================

const form = document.getElementById("admissionForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const student =
    document.getElementById("student").value;

    const email =
    document.getElementById("email").value;

    const phone =
    document.getElementById("phone").value;

    const message =
    document.getElementById("message").value;

    const whatsappMessage =

`🎓 STarlight Academy Admission Request

Student Name: ${student}

Parent Email: ${email}

Phone Number: ${phone}

Additional Information:
${message}`;

    // Replace with school's WhatsApp number

    const whatsappNumber =
    "2348000000000";

    const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

});


// ===============================
// Sticky Header Shadow Effect
// ===============================

window.addEventListener("scroll", function(){

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow =
        "0 2px 10px rgba(0,0,0,.1)";

    }

});


// ===============================
// Gallery Hover Animation
// ===============================

const galleryItems =
document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform =
        "scale(1.05)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform =
        "scale(1)";

    });

});


// ===============================
// Welcome Message
// ===============================

window.addEventListener("load", () => {

    console.log(
        "Starlight Academy V3 Loaded Successfully"
    );

});
