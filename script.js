const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const company = document.getElementById("company").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !phone || !email || !message) {
      formMessage.textContent = "יש למלא את כל שדות החובה.";
      formMessage.style.color = "#ff8b8b";
      return;
    }

    if (!emailRegex.test(email)) {
      formMessage.textContent = "כתובת הדוא״ל אינה תקינה.";
      formMessage.style.color = "#ff8b8b";
      return;
    }

    const subject = encodeURIComponent(`פנייה מאתר IT-NET - ${name}`);
    const body = encodeURIComponent(
      `שם: ${name}\nחברה: ${company || "לא צוין"}\nטלפון: ${phone}\nדוא״ל: ${email}\n\nתוכן הפנייה:\n${message}`
    );

    formMessage.textContent = "נפתחת הודעת דוא״ל מוכנה לשליחה...";
    formMessage.style.color = "#42d392";
    window.location.href = `mailto:support@it-net.co.il?subject=${subject}&body=${body}`;
  });
}

const currentYear = document.getElementById("currentYear");
if (currentYear) currentYear.textContent = new Date().getFullYear();
