---
layout: default
title: agent z Versus
permalink: /versus/
---

<div class="homepage-logo">
  <img src="/assets/serverImages/logo_agentzversus.webp" alt="logo">
</div>

Competitive events officially hosted by agent z for their community.

The current agent z Event Discord Server is archived and is set to reopen when a future event is held.

Join here: https://discord.gg/J3D24cSQMv

<div class="versus-wrapper">
  <button class="versus-arrow left">&#10094;</button>

  <div class="versus-slider">
    <div class="versus-slide" data-link="/versus/agent_z_art_contest/">
      <img src="/assets/serverImages/versus/001-000.webp" alt="Event 1">
    </div>

    <div class="versus-slide" data-link="/versus/agent_z_art_contest/">
      <img src="/assets/serverImages/versus/versus-002.webp" alt="Coming Soon">
    </div>
  </div>

  <button class="versus-arrow right">&#10095;</button>
</div>


<script>
document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(document.querySelectorAll(".versus-slide"));
  const slider = document.querySelector(".versus-slider");
  const btnLeft = document.querySelector(".versus-arrow.left");
  const btnRight = document.querySelector(".versus-arrow.right");

  let index = 0;

  function updateSlides() {
    slides.forEach((slide, i) => {
      slide.classList.remove("active", "prev", "next");
      if (i === index) slide.classList.add("active");
      if (i === index - 1) slide.classList.add("prev");
      if (i === index + 1) slide.classList.add("next");
    });
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  btnRight.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlides();
  });

  btnLeft.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlides();
  });
  slides.forEach((slide, i) => {
    slide.style.cursor = "pointer";
    slide.addEventListener("click", (e) => {
      const targetLink = slide.dataset.link || null;
      if (i === index) {
        if (targetLink && targetLink !== "#") {
          window.location.href = targetLink;
        }
      } else {
        index = i;
        updateSlides();
      }
    });
  });
  updateSlides();
});
</script>
