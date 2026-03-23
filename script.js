/* =========================
   MENU CLICK (DEBUG)
========================= */
function menuClick(){
  alert("Menu clicked 😎");
}

/* =========================
   POPUP (Privacy / Access)
========================= */
function openPopup(type){
  const popup = document.getElementById("popup");
  const title = document.getElementById("popup-title");
  const text = document.getElementById("popup-text");

  if(type === "privacy"){
    title.innerText = "Privacy Policy";
    text.innerText = "This website respects your privacy. No personal data is collected without your consent. Any information shared through forms is used only for communication purposes.";
  }

  if(type === "access"){
    title.innerText = "Accessibility Statement";
    text.innerText = "This website is designed to be accessible to all users. We aim to ensure a seamless experience across devices and improve usability for everyone.";
  }

  popup.classList.add("active");
}

function closePopup(){
  const popup = document.getElementById("popup");
  if(popup){
    popup.classList.remove("active");
  }
}

/* =========================
   SMOOTH SCROLL
========================= */
const footerLink = document.querySelector('.footer-top a');
if(footerLink){
  footerLink.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#hero').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

const navLink = document.querySelector('.nav a');
if(navLink){
  navLink.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#hero').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

/* =========================
   MENU OVERLAY (FINAL FIX)
========================= */
function openMenu(){
  const menu = document.getElementById("menuOverlay");
  if(menu){
    menu.classList.add("active");
  }
}

function closeMenu(){
  const menu = document.getElementById("menuOverlay");
  if(menu){
    menu.classList.remove("active");
  }
}

/* CLICK OUTSIDE TO CLOSE */
const overlay = document.getElementById("menuOverlay");
if(overlay){
  overlay.addEventListener("click", function(e){
    if(e.target.id === "menuOverlay"){
      closeMenu();
    }
  });
}