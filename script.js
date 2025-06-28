// Attendi il caricamento del DOM
document.addEventListener('DOMContentLoaded', () => {
  // Pulsante per switch lingua
  const langToggle = document.getElementById('langToggle');
  const langElems = document.querySelectorAll('[data-lang]');
  let currentLang = 'it';

  function switchLang() {
    if (currentLang === 'it') {
      currentLang = 'en';
      langToggle.textContent = 'IT';
      langToggle.setAttribute('aria-label', 'Switch language to Italian');
      langToggle.setAttribute('aria-pressed', 'true');
    } else {
      currentLang = 'it';
      langToggle.textContent = 'EN';
      langToggle.setAttribute('aria-label', 'Switch language to English');
      langToggle.setAttribute('aria-pressed', 'false');
    }

    langElems.forEach(el => {
      if (el.getAttribute('data-lang') === currentLang) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  }

  langToggle.addEventListener('click', switchLang);

  // Mostra animazioni fade-in all'avvio
  const fadeElems = document.querySelectorAll('.fade-in');
  fadeElems.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 150);
  });

  // Quiz Logic
  const quizForm = document.getElementById('ritualQuiz');
  const resultDiv = document.getElementById('quizResult');

  quizForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(quizForm);
    let score = {
      calm: 0,
      energic: 0,
      relax: 0,
      floral: 0,
      woody: 0,
      fresh: 0,
      classic: 0,
      boho: 0,
      modern: 0,
      nature: 0,
      urban: 0,
      cozy: 0,
      holistic: 0,
      pragmatic: 0,
      experimental: 0,
    };

    // Conta risposte
    for (let [key, value] of formData.entries()) {
      score[value] = (score[value] || 0) + 1;
    }

    // Semplice logica per risultato basato sulla categoria con punteggio più alto
    let maxCategory = Object.entries(score).reduce((a, b) => a[1] > b[1] ? a : b)[0];

    // Messaggi risultato per IT e EN
    const resultsText = {
      it: {
        calm: "Il tuo rituale ideale è un'alba calma e meditativa con miscele botaniche rilassanti.",
        energic: "Il tuo rituale ideale è un pomeriggio energico e dinamico, pieno di profumi intensi.",
        relax: "Il tuo rituale ideale è una sera rilassante e raccolta con profumi avvolgenti.",
        floral: "Ami le note floreali: gelsomino e rosa sono il tuo cuore profumato.",
        woody: "Ami i profumi legnosi e muschiati, che ti collegano alla terra.",
        fresh: "Preferisci agrumi e erbe fresche per un tocco vivace.",
        classic: "Sei elegante e senza tempo, il classico è la tua firma.",
        boho: "Spirito libero e naturale: un rituale boho ti rappresenta.",
        modern: "Minimalismo contemporaneo per chi ama la semplicità e il design pulito.",
        nature: "Cerchi la calma della foresta profumata nei tuoi rituali.",
        urban: "Preferisci un'atmosfera urbana moderna e sofisticata.",
        cozy: "Ami ambienti intimi e accoglienti per i tuoi momenti speciali.",
        holistic: "Vivi la bellezza come unione di corpo, mente e spirito.",
        pragmatic: "Preferisci soluzioni pratiche e funzionali nella tua routine.",
        experimental: "Ami sperimentare e giocare con la creatività.",
      },
      en: {
        calm: "Your ideal ritual is a calm and meditative dawn with relaxing botanical blends.",
        energic: "Your ideal ritual is an energetic and dynamic afternoon full of intense scents.",
        relax: "Your ideal ritual is a relaxing and cozy evening with enveloping aromas.",
        floral: "You love floral notes: jasmine and rose are your scented heart.",
        woody: "You love woody and musky scents that connect you to the earth.",
        fresh: "You prefer citrus and fresh herbs for a lively touch.",
        classic: "You are elegant and timeless, classic is your signature.",
        boho: "Free and natural spirit: a boho ritual represents you.",
        modern: "Contemporary minimalism for those who love simplicity and clean design.",
        nature: "You seek the calm of a fragrant forest in your rituals.",
        urban: "You prefer a modern and sophisticated urban atmosphere.",
        cozy: "You love intimate and cozy settings for your special moments.",
        holistic: "You live beauty as a union of body, mind, and spirit.",
        pragmatic: "You prefer practical and functional solutions in your routine.",
        experimental: "You love experimenting and playing with creativity.",
      }
    };

    resultDiv.textContent = resultsText[currentLang][maxCategory] || (currentLang === 'it' ? "Risultato non trovato." : "Result not found.");
    resultDiv.focus();
  });
});
