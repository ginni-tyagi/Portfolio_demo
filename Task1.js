function showMessage() {
const text = document.getElementById("welcome-text");
  if ( text.innerHTML.includes("Web Development Intern")) {
    text.innerHTML = "Thank you for visiting my portfolio website. I am continuously learning HTML, CSS, JavaScript and building projects to improve my web development skills.";
  } else {
    text.innerHTML = "Web Development Intern passionate about building responsive and user-friendly websites using HTML, CSS, and JavaScript.";
  }
}
