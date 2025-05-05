/* Don't go spoiling the fun ): */

async function loadTrivia() {
  const today = new Date().toISOString().split('T')[0];

  try {
    const response = await fetch('trivia.json');
    const triviaData = await response.json();

    const entry = triviaData.find(item => item.date === today);
    if (!entry) {
      document.getElementById('trivia-content').textContent = "If you see this, I forgor";
      return;
    }

    const decrypted = doubleVigenereDecrypt(entry.trivia, 'AGENTZ', 'SPLATOON');
    document.getElementById('trivia-content').textContent = decrypted;


  } catch (err) {
    console.error('Failed to load trivia:', err);
  }
}

window.onload = loadTrivia;
