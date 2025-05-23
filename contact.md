---
layout: default
title: Contact
permalink: /contact/
page_type: contact
---

  <div class="contact-title-bar">
    <h1>Contact Me</h1>
  </div>
  
  <div class="contact-info">
    <p>If you ever want to ask me anything, don’t be afraid to ask through:</p>
    <ul>
      <li>Twitter (@agentzofficial) – <em>Recommended</em></li>
      <li>Bluesky (agentzofficial.bsky.social)</li>
      <li>Discord (agentzofficial)</li>
      <li>Email (ag3ntz@yahoo.com) – <em>For Professional Contact</em></li>
    </ul>
    <p>Please note that I strictly only responds to questions in messages. Please be upfront from your first message!</p>
  </div>

  <hr class="section-divider" />
  <div class="contact-info">
    <p>Alternatively, you can send me feedback with the form below! Please note that you won't receive a direct reply from me, but rest assured, I will read your message!</p>
    <p>To show me images, use links to sites such as Imgur.</p>
  </div>
  
  
  <div class="form-container">
    <form action="https://formspree.io/f/mwpooybd" method="POST">
      <label for="topic">Select a topic:</label><br />
      <select name="topic" id="topic" required>
        <option value=""></option>
        <option>Report a Bug</option>
        <option>Site Suggestion</option>
        <option>Criticism</option>
        <option>Missing Render Request</option>
        <option>Report Copyright Infringement</option>
        <option>Other</option>
      </select><br /><br />
  
      <label for="message">Provide a description:</label><br />
      <textarea id="message" name="message" rows="6" required></textarea><br /><br />
      
      <input type="hidden" name="_captcha" value="false">
      <button type="submit">Submit Form</button>
    </form>
  <div id="thank-you" style="display: none;">
      <p>Thank you for your submission! I’ll take a look when I can.</p>
    </div>
  </div>