var typed = new Typed("#animate", {
  strings: ["Student", "Beginner web developer", "Software engineer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};
