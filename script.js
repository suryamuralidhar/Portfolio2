function menuClick(){
  alert("Menu clicked 😎");
}




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
  document.getElementById("popup").classList.remove("active");
}


document.querySelector('.footer-top a').addEventListener('click', function(e){
  e.preventDefault();

  document.querySelector('#hero').scrollIntoView({
    behavior: 'smooth'
  });
});


document.querySelector('.nav a').addEventListener('click', function(e){
  e.preventDefault();

  document.querySelector('#hero').scrollIntoView({
    behavior: 'smooth'
  });
});





function openMenu(){
  document.getElementById("menuOverlay").classList.add("active");
}

function closeMenu(){
  document.getElementById("menuOverlay").classList.remove("active");
}

/* CLICK OUTSIDE TO CLOSE */
document.getElementById("menuOverlay").addEventListener("click", function(e){
  if(e.target.id === "menuOverlay"){
    closeMenu();
  }
});



function openMenu(){
  document.getElementById("menuOverlay").classList.add("active");
  document.querySelector(".menu").classList.add("hide");
}

function closeMenu(){
  document.getElementById("menuOverlay").classList.remove("active");
  document.querySelector(".menu").classList.remove("hide");
}