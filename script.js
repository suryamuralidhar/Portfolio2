/* =========================
   MENU CLICK (DEBUG)
========================= */
function menuClick() {
  alert("Menu clicked 😎");
}

/* =========================
   POPUP (Privacy / Access)
========================= */
function openPopup(type) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popup-title");
  const text = document.getElementById("popup-text");

  if (!popup || !title || !text) return;

  if (type === "privacy") {
    title.innerText = "Privacy Policy";
    text.innerText =
      "This website respects your privacy. No personal data is collected without your consent. Any information shared through forms is used only for communication purposes.";
  }

  if (type === "access") {
    title.innerText = "Accessibility Statement";
    text.innerText =
      "This website is designed to be accessible to all users. We aim to ensure a seamless experience across devices and improve usability for everyone.";
  }

  popup.classList.add("active");
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.classList.remove("active");
}

/* =========================
   SMOOTH SCROLL
========================= */
const footerLink = document.querySelector('.footer-top a');

if (footerLink) {
  footerLink.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#hero')?.scrollIntoView({
      behavior: 'smooth'
    });
  });
}

const navLink = document.querySelector(".nav a");
if (navLink) {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#hero")?.scrollIntoView({
      behavior: "smooth",
    });
  });
}

/* =========================
   MENU OVERLAY
========================= */
function openMenu() {
  document.getElementById("menuOverlay")?.classList.add("active");
  document.body.classList.add("menu-open"); // 👈 ADD THIS
}

function closeMenu() {
  document.getElementById("menuOverlay")?.classList.remove("active");
  document.body.classList.remove("menu-open"); // 👈 ADD THIS
}

/* CLICK OUTSIDE TO CLOSE */
const overlay = document.getElementById("menuOverlay");
if (overlay) {
  overlay.addEventListener("click", (e) => {
    if (e.target.id === "menuOverlay") closeMenu();
  });
}

/* =========================
   EMAILJS INIT
========================= */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init("vEzwEATQ1qBKcza_2");
  } else {
    console.error("EmailJS still not loaded ❌");
  }
});

/* =========================
   CONTACT FORM
========================= */

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const button = form.querySelector(".btn-submit");

    const firstName = form.querySelector("input[name='first_name']")?.value;
    const lastName = form.querySelector("input[name='last_name']")?.value;
    const email = form.querySelector("input[name='email']")?.value;
    const message = form.querySelector("textarea[name='message']")?.value;

    const name = firstName + " " + lastName;

    if (!firstName || !lastName || !email || !message) {
      alert("Fill all fields da ⚠️");
      return;
    }

    button.innerText = "Sending...";
    button.disabled = true;

    emailjs.send("service_j81qzqc", "template_6cdwxzc", {
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      button.innerText = "Sent ✅";
      form.reset();

      setTimeout(() => {
        button.innerText = "SEND MESSAGE";
        button.disabled = false;
      }, 2000);
    })
    .catch((error) => {
      console.error(error);
      button.innerText = "Failed ❌";
      button.disabled = false;
    });
  });
}