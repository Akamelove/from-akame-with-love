const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => menu.classList.toggle("open"));
document.querySelectorAll(".menu a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"}));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold:0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const music = {
  1: {title: "Angel Baby", artist: "Troye Sivan", youtube: "https://www.youtube.com/watch?v=IR-6KE8C4VQ"},
  2: {title: "I do luv u", artist: "Okayceci", youtube: "https://www.youtube.com/watch?v=hCOgrWPSL4o"},
  3: {title: "My Beautiful Wife", artist: "Moore Aless", youtube: "https://www.youtube.com/watch?v=IByiQxj7YCw"}
};

document.querySelectorAll(".play-btn").forEach(button => {
  button.addEventListener("click", () => {
    const track = music[button.dataset.track];
    window.open(track.youtube, "_blank", "noopener,noreferrer");
  });
});
