
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Change icon between ☰ and ✖
  menuBtn.textContent = navLinks.classList.contains("open") ? "✖" : "☰";
});

const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.scrollHeight - window.innerHeight;
  let scrolled = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrolled + "%";
});


const form = document.getElementById("contactForm");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const message = form.querySelector("textarea").value.trim();

  messageBox.style.color = "red";

  if (!name) {
    messageBox.textContent = "Enter your name.";
    return;
  }
  if (!email || !email.includes("@")) {
    messageBox.textContent = "Enter a valid email.";
    return;
  }
  if (!message) {
    messageBox.textContent = "Enter your message.";
    return;
  }

  messageBox.style.color = "green";
  messageBox.textContent = "Thank you! Your message has been sent.";
  form.reset();
});
const toggleBtn = document.getElementById("menuToggle");
const navMenu = document.querySelector("#navbar ul");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

