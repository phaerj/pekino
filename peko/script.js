document.addEventListener("DOMContentLoaded", () => {
  // Fade-in effetto cascata
  const fadeElems = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeElems.forEach(el => observer.observe(el));

  // Toggle Language 🇬🇧/🇮🇹
  let lang = "en";
  document.getElementById("toggleLang").addEventListener("click", () => {
    lang = (lang === "en") ? "it" : "en";
    translatePage(lang);
  });

  // Quiz submit
  const quiz = document.getElementById("ritualQuiz");
  if(quiz){
    quiz.addEventListener("submit", e => {
      e.preventDefault();
      const result = document.getElementById("quizResult");
      result.textContent = (lang === "it") 
        ? "Il tuo rituale è un bagno caldo con oli e un diario dei sogni."
        : "Your ritual is a warm bath with oils and a dream journal.";
    });
  }
});

// Traduzioni base
function translatePage(lang){
  if(lang === "it"){
    document.querySelector(".signup h2").textContent = "Rimani connesso";
    document.querySelector(".signup p").textContent = "Iscriviti per ricevere rituali, anteprime esclusive e piccoli incantesimi di bellezza.";
    document.querySelector(".signup button").textContent = "Iscriviti";

    document.querySelector(".quiz h2").textContent = "Trova il tuo rituale personale";
    const legends = document.querySelectorAll(".quiz legend");
    legends[0].textContent = "1. In che momento della giornata ti senti più te stesso?";
    legends[1].textContent = "2. Profumo preferito?";
    legends[2].textContent = "3. Quale stile ti richiama?";
    legends[3].textContent = "4. Scegli una parola:";
    legends[4].textContent = "5. Il tuo rituale ideale:";
    document.querySelector(".quiz button").textContent = "Scopri";

    const faqs = document.querySelectorAll(".faq summary");
    faqs[0].textContent = "Che prodotti offrite?";
    faqs[1].textContent = "Come funziona l'abbonamento?";
    faqs[2].textContent = "I prodotti sono adatti a pelli sensibili?";
    faqs[3].textContent = "Posso regalarlo?";

    const faqTexts = document.querySelectorAll(".faq p");
    faqTexts[0].textContent = "Creiamo ritual box con miscele botaniche, skincare naturale e contenuti esclusivi per un viaggio sensoriale olistico.";
    faqTexts[1].textContent = "Puoi scegliere piani mensili flessibili e personalizzare il rituale in base al tuo umore e alla stagione.";
    faqTexts[2].textContent = "Sì. Le nostre formule sono delicate, testate su pelli sensibili e create per rispettare il tuo equilibrio naturale.";
    faqTexts[3].textContent = "Certo! Le nostre box sono eleganti e puoi aggiungere un biglietto regalo per sorprendere qualcuno di speciale.";
  } else {
    document.querySelector(".signup h2").textContent = "Stay Connected";
    document.querySelector(".signup p").textContent = "Subscribe to receive rituals, exclusive previews and little beauty spells.";
    document.querySelector(".signup button").textContent = "Subscribe";

    document.querySelector(".quiz h2").textContent = "Find your personal ritual";
    const legends = document.querySelectorAll(".quiz legend");
    legends[0].textContent = "1. What time of day do you feel most yourself?";
    legends[1].textContent = "2. Favorite scent?";
    legends[2].textContent = "3. Which style calls you?";
    legends[3].textContent = "4. Choose a word:";
    legends[4].textContent = "5. Your ideal ritual:";
    document.querySelector(".quiz button").textContent = "Discover";

    const faqs = document.querySelectorAll(".faq summary");
    faqs[0].textContent = "What products do you offer?";
    faqs[1].textContent = "How does the subscription work?";
    faqs[2].textContent = "Are your products suitable for sensitive skin?";
    faqs[3].textContent = "Can I give it as a gift?";

    const faqTexts = document.querySelectorAll(".faq p");
    faqTexts[0].textContent = "We create ritual boxes with botanical blends, natural skincare and exclusive content for a holistic sensory journey.";
    faqTexts[1].textContent = "You can choose monthly plans with flexible options, and personalize your ritual to suit your mood and season.";
    faqTexts[2].textContent = "Yes. Our formulas are gentle, tested on delicate skin types, crafted to respect your natural balance.";
    faqTexts[3].textContent = "Of course! Our boxes are beautifully packaged and come with optional gift notes to surprise someone special.";
  }
}
