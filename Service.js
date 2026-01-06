// =====================
// BACK BUTTON
// =====================
const backBtn = document.getElementById('backBtn');
backBtn.onclick = () => {
  window.location.href = "index.html";
};

// =====================
// LANGUAGE SWITCHER
// =====================
function switchLanguage(lang) {
  // Save preference
  localStorage.setItem('preferredLanguage', lang);

  // Set language in manager
  if (window.languageManager && typeof window.languageManager.setLanguage === 'function') {
    window.languageManager.setLanguage(lang);
  }

  // Reload page to refresh all content
  window.location.reload();
}

// =====================
// SERVICE BUTTONS
// =====================
function createServiceButton(service) {
  const btn = document.createElement('button');
  btn.className = 'service-btn';

  if (window.languageManager && service.key) {
    btn.textContent = window.languageManager.t(service.key);
  } else {
    btn.textContent = service.name;
  }

  btn.onclick = () => {
    window.location.href = `ServiceDetail.html?service=${service.id}`;
  };

  return btn;
}

function createServiceButtons() {
  const services = [
    { id: 'counseling', key: 'servicePage.services.counseling', name: 'Counseling' },
    { id: 'it-support', key: 'servicePage.services.itSupport', name: 'IT Support' },
    { id: 'financial-aid', key: 'servicePage.services.financialAid', name: 'Financial Aid' },
    { id: 'car-rental', key: 'servicePage.services.carRental', name: 'Car Rental' },
    { id: 'tutoring', key: 'servicePage.services.tutoring', name: 'Tutoring' },
    { id: 'career-service', key: 'servicePage.services.careerService', name: 'Career Service' }
  ];

  const left = document.getElementById('leftServices');
  const right = document.getElementById('rightServices');

  left.innerHTML = '';
  right.innerHTML = '';

  services.slice(0, 3).forEach(s => left.appendChild(createServiceButton(s)));
  services.slice(3).forEach(s => right.appendChild(createServiceButton(s)));
}

// =====================
// UPDATE STATIC TEXTS
// =====================
function updateAllText() {
  document.querySelectorAll('[data-translate]').forEach(el => {
    if (window.languageManager) {
      const key = el.getAttribute('data-translate');
      const translated = window.languageManager.t(key);
      if (translated && translated !== key) el.textContent = translated;
    }
  });

  createServiceButtons(); // refresh buttons
}

// =====================
// INITIALIZE PAGE
// =====================
function initializePage() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';

  if (window.languageManager && typeof window.languageManager.setLanguage === 'function') {
    window.languageManager.setLanguage(savedLang);
  }

  // Set active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === savedLang);
  });

  updateAllText();
}

document.addEventListener('DOMContentLoaded', () => {
  initializePage();

  document.addEventListener('languageChanged', () => {
    updateAllText();
  });
});

// Fallback if languageManager loads late
const checkInterval = setInterval(() => {
  if (window.languageManager) {
    initializePage();
    clearInterval(checkInterval);
  }
}, 100);

setTimeout(() => {
  clearInterval(checkInterval);
  if (!window.languageManager) createServiceButtons();
}, 5000);
