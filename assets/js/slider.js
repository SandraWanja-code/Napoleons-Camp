document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  showSlide(index);

  // Set a custom timing array for slides (ms)
  const timings = [4000, 4000, 4000, 4000]; 
  // first slide stays 6s, others 4s

  function startSlider() {
    setTimeout(function loop() {
      nextSlide();
      setTimeout(loop, timings[index]);
    }, timings[index]);
  }

  startSlider();
});
document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.getElementById("scrollTopBtn");
  const bottomBtn = document.getElementById("scrollBottomBtn");

  // Show buttons when user scrolls down
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 300;
    topBtn.style.display = scrolled ? "block" : "none";
    bottomBtn.style.display = scrolled ? "block" : "none";
  });

  // Scroll to top
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Scroll to bottom
  bottomBtn.addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
});