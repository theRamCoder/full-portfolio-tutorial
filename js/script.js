const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + 1}s`;
  });
};

navSlide();

mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

sr.reveal(".social-media, .top, .logo", {
  origin: "top",
});
sr.reveal("#text, #msg, .left, .typing-effect, .img", {
  origin: "left",
});
sr.reveal("#email, .submit-btn, .right, .nav-link", {
  origin: "right",
});
sr.reveal(".foot, p", {
  origin: "bottom",
});
