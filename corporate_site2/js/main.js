const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector("#global-nav");

btn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  btn.setAttribute("aria-expanded", String(isOpen));
  nav.setAttribute("aria-hidden", String(!isOpen));
});

// メニューのリンクを押したら閉じる（スマホ便利）
nav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-hidden", "true");
  });
});

const targets = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-show");
    }
  });
});

targets.forEach(target => observer.observe(target));

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});