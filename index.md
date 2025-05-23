---
layout: default
title: Gallery
permalink: /
page_type: gallery
---
<div class="logo-container">
  <img
    src="{{ '/assets/serverImages/logo.png' | relative_url }}"
    alt="Art Archives Logo"
    id="logo"
  >
</div>

<div id="filter-bar"></div>
<div id="year-nav" class="year-nav"></div>
<div class="gallery" id="gallery"></div>
<div id="pagination-controls" class="pagination-controls"></div>

<div id="modal" class="modal">
  <div class="modal-frame">
    <span class="close">&times;</span>
    <div class="modal-content">
      <h2 id="modal-title" class="modal-title"></h2>
      <div class="image-wrapper">
        <img id="modal-img" src="" alt="" />
      </div>
      <div class="modal-meta">
        <div class="variant-thumbs"></div>
        <div class="modal-date" id="modal-date"></div>
        <div class="modal-icons"></div>
      </div>
    </div>

    <div class="modal-description-bar">
      <p id="modal-description"></p>
    </div>

    <p class="loading-hint">Images may take some time to load.</p>
    <p class="navigation-hint">Use ← and → arrow keys to navigate.</p>
  </div>
</div>

<div id="year-nav-bottom" class="year-nav"></div>

<div
  id="trivia-container"
  style="text-align: center; padding: 0; display: inline-block;"
>
  <img
    id="trivia-box"
    src="{{ '/assets/serverImages/trivia-box.webp' | relative_url }}"
    alt="Trivia Box"
    style="display: block; margin: 0 auto;"
  />
  <div id="trivia-content" style="margin: 6px 0 2px;">
    Loading trivia...
  </div>

  <div id="yeah-container" style="margin: 8px 0 0;">
    <img
      id="yeah-button"
      src="{{ '/assets/serverImages/yeah-button.webp' | relative_url }}"
      alt="Yeah!"
      style="cursor: pointer; display: block; margin: 0 auto;"
    />
  </div>
</div>

<div
  id="trivia-time"
  style="text-align: center; margin: 6px auto 30px; font-size: 0.9em; opacity: 0.6; width: fit-content;"
></div>

<section id="latest-news" class="latest-news-section">
  <h2>Latest News</h2>
  <div class="news-grid"></div>
  <div class="browse-news-container">
    <a href="{{ '/news/' | relative_url }}" class="browse-news-button">
      Browse News
    </a>
  </div>
</section>
