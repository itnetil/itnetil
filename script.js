const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        navLinks.classList.remove("show");
    });
});

// Contact Form Validation
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const text = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === "" || email === "" || text === ""){
        message.textContent = "יש למלא את כל השדות.";
        message.style.color = "#ff6b6b";
        return;
    }

    if(!emailRegex.test(email)){
        message.textContent = "כתובת האימייל אינה תקינה.";
        message.style.color = "#ff6b6b";
        return;
    }

    message.textContent = "הטופס תקין ונשלח בהצלחה (הדגמה בלבד).";
    message.style.color = "#22d3ee";

    form.reset();
});