const stars = document.querySelector(".stars");
const moon = document.querySelector(".moon");
const mountains = document.querySelector(".mountains");
const title = document.querySelector(".title");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  stars.style.transform = `translateY(${scroll * 0.1}px)`;
  moon.style.transform = `translateY(${scroll * 0.3}px)`;
  mountains.style.transform = `translateY(${scroll * 0.2}px)`;
  title.style.transform = `translateY(${scroll * 0.5}px)`;
});
