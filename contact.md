---
layout: default
title: Contact
permalink: /contact/
page_type: contact
---
<div class="contact-title-bar">
    <h1>Contact</h1>
    <p>
          This page has information on how to contact agent z, as well as guidelines to follow to ensure you get a response from them.<br>You may also check the Frequently Asked Questions section at the bottom of this page to see if your question is answered there.
    </p>
</div>
<div class="contact-page">
    <nav class="contact-section-nav" aria-label="Contact page sections">
        <a class="social-nav" href="#social-media">Social Media</a>
        <a class="business-nav" href="#business-inquiries">Business Inquiries</a>
        <a class="policies-nav" href="#messaging-policies">Message Policies</a>
        <a class="faq-nav" href="#faq">FAQ</a>
    </nav>
    <section id="social-media" class="contact-panel social-panel">
        <h2>Social Media</h2>
        <a class="social-card youtube-card" href="https://www.youtube.com/@agentzofficial" target="_blank">
            <img class="social-logo" src="/assets/imagesContact/youtube-logo.png">
            <div class="social-card-content">
                <h3>YouTube: @agentzofficial</h3>
                <p>
                    You can comment on agent z's videos or community posts to ask a question for agent z. They read majority of comments sent and can reply to your question there, though long discussions may be limited. Also try to ensure your comment still relates to the video or community post.
                </p>
                <span class="social-link">
                    Visit Channel ↗
                </span>
            </div>
        </a>
        <a class="social-card twitter-card" href="https://x.com/agentzofficial" target="_blank">
            <img class="social-logo" src="/assets/imagesContact/twitter-logo.png">
            <div class="social-card-content">
                <h3>Twitter: @agentzofficial</h3>
                <p>
                    General updates including additional ones not posted to the YouTube Community Tab, such as what games agent z is playing or additional renders. Contact through direct messaging agent z through the Chat system.
                </p>
                <span class="social-link">
                    Visit Profile ↗
                </span>
            </div>
        </a>
        <a class="social-card discord-card" href="https://discord.gg/J3D24cSQMv" target="_blank">
            <img class="social-logo" src="/assets/imagesContact/discord-logo.png">
            <div class="social-card-content">
                <h3>Discord: @agentzofficial</h3>
                <p>
                    Join the agent z VERSUS Discord Server to make it possible to direct message agent z through Discord.
                </p>
                <span class="social-link">
                    Join the Discord Server ↗
                </span>
            </div>
        </a>
        <a class="social-card bluesky-card" href="https://bsky.app/profile/agentzofficial.bsky.social" target="_blank">
            <img class="social-logo" src="/assets/imagesContact/bluesky-logo.png">
            <div class="social-card-content">
                <h3>Bluesky(!): @agentzofficial.bsky.social</h3>
                <p>
                    Posts mirrored from Twitter. You can mention agent z in your posts to get their attention, however direct messaging is NOT available due to age verification laws.
                </p>
                <span class="social-link">
                    Visit Profile ↗
                </span>
            </div>
        </a>
    </section>
    <section id="business-inquiries" class="contact-panel business-panel">
        <h2>Business Inquiries</h2>
        <div class="business-email-box">
            <span>agentzofficial.contact@gmail.com</span>
            <button class="copy-email">
                Copy
            </button>
        </div>
        <p class="business-description">
            For sponsorships, collaborations, licensing and other professional enquiries.
        </p>
    </section>
    <section id="messaging-policies" class="contact-panel policies-panel">
        <h2>⚠ Messaging Policies</h2>
        <p class="policies-description">
            To maintain the agent z YouTube Channel's neutrality and fairness in its communications with the audience, certain questions may not be answered. Below is a list of guidelines to keep in mind when contacting agent z. Please note that agent z may simply take a bit of extra time to reply otherwise.
        </p>
        <ul class="policy-list">
            <li><b>Please include your question in your messages.</b> agent z strictly only replies to messages with a clear subject or question to discuss and won't reply if a message sent to agent z lacks one, such as leaving just a greeting. Please ensure you are upfront!</li>
            <li><b>Avoid personal questions.</b> To maintain separation between agent z and the audience, questions relating to agent z's personal life in any way cannot be answered. This includes but is not limited to questions on agent z's life outside of YouTube, their favourite in any particular category, or details on agent z's appearance or identity.</li>
            <li><b>Questions relating to future plans cannot be answered.</b> Unless the answer has already been publicly stated, agent z cannot give any information relating to the future of the agent z YouTube Channel. This includes questions regarding future Story Arcs, episodes, or characters. Note that a lack of an answer to the question does not confirm it as all questions regarding the future of the agent z YouTube Channel will go unanswered.</li>
        </ul>
    </section>
    <section id="faq" class="contact-panel faq-panel">
        <h2>Frequently Asked Questions</h2>
        <div id="contact-faq-container"></div>
    </section>
</div>

<script>
const copyButton = document.querySelector(".copy-email");
const emailText = document.querySelector(".business-email-box span");
copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(emailText.textContent.trim());
    copyButton.textContent = "Copied!";
    setTimeout(() => {
        copyButton.textContent = "Copy";
    }, 2000);
});
</script>

<script>
(() => {
const faqData = [
    {
        question:"How do I send Fan Art?",
        answer:"Fan Art can be sent to agent z by posting it publicly on Twitter and Bluesky, including the hashtag #agentzfanart, or by posting it through your channel's YouTube Community tab and mentioning agent z by including @agentzofficial in your post. Fan Arts are chosen at random to appear at the end of episodes in outros.\n\nFan Art can also alternatively be sent privately through direct messaging on Twitter or Discord, though permission will be requested for your Fan Art to potentially be included in the outro of a future episode."
    },
    {
        question:"Can I help with videos/collab?",
        answer:"agent z prefers to keep the Splatoon Animations series as a solo project and therefore is not actively looking for collaborations with others involving the production of the Splatoon Animations series.\n\nDue to the Splatoon Animations series being agent z's primary focus, they likely would also not be looking for collaborations outside of the series canon either. If you still wish to begin talks on the potential for a collaboration, you can message agent z directly to begin discussions."
    },
    {
        question:"Will you reopen the agent z VERSUS Discord Server?",
        answer:"The agent z VERSUS Discord Server is archived when there are no ongoing events. Currently, the next event is to be hosted at a future subscriber milestone and was confirmed in the Discord Server to not be at 20,000 subscribers."
    }
];
const container = document.getElementById("contact-faq-container");
faqData.forEach(faq => {
    const item = document.createElement("div");
    item.className = "faq-item";
    item.innerHTML = `
        <div class="faq-question">
            ${faq.question}
        </div>
        <div class="faq-answer">
            ${faq.answer.split("\n\n").map(paragraph => `<p>${paragraph}</p>`).join("")}
        </div>
    `;
    item.querySelector(".faq-question").addEventListener("click", () => {
        item.classList.toggle("open");
    });
    container.appendChild(item);
});
})();
</script>