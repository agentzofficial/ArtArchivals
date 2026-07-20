---
layout: default
title: Gallery
permalink: /artarchivals/
page_type: gallery
---
<div class="logo-container">
  <img
    src="{{ '/assets/serverImages/logo.png' | relative_url }}"
    alt="Art Archives Logo"
    id="logo"
  >
</div>

<div id="filter-bar">
  <button id="filters-button">Filters</button>
  <button id="clear-filters-top" class="clear-btn">
    Clear Filters
  </button>
</div>
<div id="filters-modal" class="filters-modal hidden">
  <div class="filters-content">
    <div class="filters-header">
      <h2>Filters</h2>
      <button id="close-filters">
        ×
      </button>
    </div>
    <h3>Type</h3>
    <div id="type-filters"></div>
    <h3>Characters</h3>
    <div id="character-filters"></div>
    <h3>Miscellaneous</h3>
    <div id="misc-filters"></div>
    <div class="filters-footer">
      <span id="selected-count">
        0 images selected
      </span>
      <label class="filter-toggle">
        <input type="checkbox" id="exact-character-match">
        Show ONLY selected Characters
      </label>
      <div class="filter-actions">
        <button id="clear-filters-modal" class="clear-btn">
          Clear Filters
        </button>
        <button id="apply-filters">
          Apply Filters
        </button>
      </div>
    </div>
    <div id="filter-info-box" class="filter-info-box">
      Select a filter to see info
    </div>
  </div>
</div>
<div id="year-nav" class="year-nav"></div>
<div class="gallery" id="gallery"></div>
<div id="pagination-controls" class="pagination-controls"></div>

<div id="modal" class="modal">
  <div class="modal-frame">
    <button id="modal-exit">Exit</button>
    <div class="modal-content">
      <h2 id="modal-title" class="modal-title"></h2>
      <div class="modal-image-row">
        <button class="modal-side-btn left" aria-label="Previous image">‹</button>
        <div class="image-wrapper">
          <img id="modal-img" src="" alt="" />
        </div>
        <button class="modal-side-btn right" aria-label="Next image">›</button>
      </div>
      <div class="modal-meta">
        <div class="variant-thumbs"></div>
        <div class="modal-date" id="modal-date"></div>
        <div class="modal-icons"></div>
      </div>
    </div>

  <div class="modal-trivia-bar">
    <div class="trivia-label">
      Trivia
    </div>

  <div id="modal-trivia" class="trivia-content">
    </div>
  </div>

  <div class="modal-actions">
    <button id="view-full-btn" class="modal-action-btn">
      View Full Image
    </button>

    <button id="save-image-btn" class="modal-action-btn">
      Save Image
    </button>
  </div>

    <p class="loading-hint">Images may take some time to load.</p>
    <p class="navigation-hint">Use ← and → arrow keys to navigate.</p>
  </div>
</div>

<div id="image-viewer" class="image-viewer hidden">
    <button id="viewer-close">Exit Full Image Mode</button>
    <div id="viewer-stage">
        <img id="viewer-image">
    </div>
</div>

<div id="year-nav-bottom" class="year-nav"></div>
<div id="image-count" class="count-display">0 images</div>
