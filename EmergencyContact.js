// Back button
document.getElementById('backBtn').onclick = () => history.back();

// Icon mapping (Lucide name ➜ Font Awesome class)
const iconMap = {
  phone: 'fa-phone',
  heart: 'fa-heart',
  shield: 'fa-shield-halved',
  flame: 'fa-fire'
};

// Translation keys for categories
const categoryTranslations = {
  'University': 'emergency.university',
  'Medical': 'emergency.medical',
  'Security': 'emergency.security',
  'Fire & Rescue': 'emergency.fire'
};

// Translation keys for contact names
const contactTranslations = {
  'UMS Kota Kinabalu - Main Office': 'emergency.mainOffice',
  'UMS Kota Kinabalu - Campus Security': 'emergency.campusSecurity',
  'UMS Kota Kinabalu - Health Center': 'emergency.healthCenter',
  'UMS Labuan - Main Office': 'emergency.mainOffice',
  'UMS Labuan - Campus Security': 'emergency.campusSecurity',
  'UMS Labuan - Health Center': 'emergency.healthCenter',
  'UMS Sandakan - Main Office': 'emergency.mainOffice',
  'UMS Sandakan - Campus Security': 'emergency.campusSecurity',
  'UMS Sandakan - Health Center': 'emergency.healthCenter',
  'Ambulance': 'emergency.ambulance',
  'Queen Elizabeth Hospital (KK)': 'emergency.hospital',
  'Likas Hospital (KK)': 'emergency.hospital',
  'Hospital Labuan': 'emergency.hospital',
  'Hospital Duchess of Kent (Sandakan)': 'emergency.hospital',
  'Police': 'emergency.police',
  'Kota Kinabalu Police Station': 'emergency.policeStation',
  'Traffic Police (KK)': 'emergency.trafficPolice',
  'Labuan Police Station (Bebuloh)': 'emergency.policeStation',
  'Sandakan Police Station': 'emergency.policeStation',
  'Fire Department': 'emergency.fire',
  'Bomba Kota Kinabalu': 'emergency.fireDepartment',
  'Bomba Labuan (Layangan)': 'emergency.fireDepartment',
  'Bomba Sandakan': 'emergency.fireDepartment'
};

const emergencyContacts = [
  {
    category: 'University',
    icon: 'phone',
    contacts: [
      { name: 'UMS Kota Kinabalu - Main Office', number: '+60 88-320 000', available: '8:00 AM - 5:00 PM' },
      { name: 'UMS Kota Kinabalu - Campus Security', number: '+60 88-329 053 / +60 12-792 2979 ', available: '24 Hours', urgent: true },
      { name: 'UMS Kota Kinabalu - Health Center', number: '+60 88-320 777', available: '8:00 AM - 10:00 PM' },
      { name: 'UMS Labuan - Main Office', number: '+60 87-503 000', available: '8:00 AM - 5:00 PM' },
      { name: 'UMS Labuan - Campus Security', number: '+60 87-503 127', available: '24 Hours', urgent: true },
      { name: 'UMS Labuan - Health Center', number: '+60 89-503 019', available: '8:00 AM - 5:00 PM' },
      { name: 'UMS Sandakan - Main Office', number: '+60 89-634 000', available: '8:00 AM - 5:00 PM' },
      { name: 'UMS Sandakan - Campus Security', number: '+60 89-634 120', available: '24 Hours', urgent: true },
      { name: 'UMS Sandakan - Health Center', number: '+60 19-313 5322', available: '8:00 AM - 5:00 PM' },
    ]
  },
  {
    category: 'Medical',
    icon: 'heart',
    contacts: [
      { name: 'Ambulance', number: '999', available: '24 Hours', urgent: true },
      { name: 'Queen Elizabeth Hospital (KK)', number: '+60 88-517 555', available: '24 Hours' },
      { name: 'Likas Hospital (KK)', number: '+60 88-522 600', available: '24 Hours' },
      { name: 'Hospital Labuan', number: '+60 87-596 888', available: '24 Hours' },
      { name: 'Hospital Duchess of Kent (Sandakan)', number: '+60 89-248 600', available: '24 Hours' },
    ]
  },
  {
    category: 'Security',
    icon: 'shield',
    contacts: [
      { name: 'Police', number: '999', available: '24 Hours', urgent: true },
      { name: 'Kota Kinabalu Police Station', number: '+60 88-529 222', available: '24 Hours' },
      { name: 'Traffic Police (KK)', number: '+60 19-564 9560', available: '24 Hours' },
      { name: 'Labuan Police Station (Bebuloh)', number: '+60 87-463 008', available: '24 Hours' },
      { name: 'Sandakan Police Station', number: '+60 89-221 251', available: '24 Hours' },
    ]
  },
  {
    category: 'Fire & Rescue',
    icon: 'flame',
    contacts: [
      { name: 'Fire Department', number: '994', available: '24 Hours', urgent: true },
      { name: 'Bomba Kota Kinabalu', number: '+60 88-210 214', available: '24 Hours' },
      { name: 'Bomba Labuan (Layangan)', number: '+60 87-464 444', available: '24 Hours' },
      { name: 'Bomba Sandakan', number: '+60 89-214 444', available: '24 Hours' },
    ]
  }
];

// Function to get translated text
function getTranslatedText(key, defaultText) {
  if (window.languageManager && key) {
    const translation = window.languageManager.t(key);
    if (translation && translation !== key) {
      return translation;
    }
  }
  return defaultText;
}

// Function to create/update emergency contact cards
function createEmergencyCards() {
  const grid = document.getElementById('emergencyGrid');
  if (!grid) return;
  
  // Clear existing content
  grid.innerHTML = '';
  
  emergencyContacts.forEach((cat, i) => {
    const card = document.createElement('div');
    card.className =
      'bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-md border border-red-400/30 rounded-2xl p-6 shadow-2xl fade-up';
    card.style.animationDelay = `${i * 0.1}s`;

    // Get translated category
    const categoryKey = categoryTranslations[cat.category] || '';
    const translatedCategory = getTranslatedText(categoryKey, cat.category);

    card.innerHTML = `
      <div class="flex items-center gap-3 mb-6">
        <div class="p-3 bg-red-500/20 rounded-xl">
          <i class="fa-solid ${iconMap[cat.icon]} text-red-400 text-xl"></i>
        </div>
        <h2 class="text-2xl">${translatedCategory}</h2>
      </div>
    `;

    cat.contacts.forEach((c, j) => {
      const a = document.createElement('a');
      a.href = `tel:${c.number}`;
      a.className =
        `block p-4 rounded-xl transition-all hover:scale-105 ${
          c.urgent
            ? 'bg-red-600/40 border-2 border-red-400 shadow-lg shadow-red-500/30'
            : 'bg-white/10 border border-white/20'
        }`;

      // Get translated contact name
      const contactKey = contactTranslations[c.name] || '';
      const translatedName = getTranslatedText(contactKey, c.name);
      
      // Get "URGENT" translation
      const urgentText = window.languageManager ? window.languageManager.t('common.urgent') : 'URGENT';

      a.innerHTML = `
        <div class="flex justify-between mb-2">
          <h3 class="font-semibold">${translatedName}</h3>
          ${c.urgent ? `<span class="px-3 py-1 bg-red-500 text-xs rounded-full animate-pulse">${urgentText}</span>` : ''}
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-cyan-300 flex items-center gap-2">
            <i class="fa-solid fa-phone"></i>${c.number}
          </span>
          <span class="text-gray-300">${c.available}</span>
        </div>
      `;
      card.appendChild(a);
    });

    grid.appendChild(card);
  });
}

// Function to update all text on the page
function updateEmergencyContactContent() {
  // Update static elements (handled by language-manager.js)
  
  // Update dynamic emergency cards
  createEmergencyCards();
}

// Initialize the page
function initializeEmergencyPage() {
  // Create initial emergency cards
  createEmergencyCards();
  
  // Set up back button
  document.getElementById('backBtn').onclick = () => history.back();
}

// When DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait for language manager to load
  setTimeout(initializeEmergencyPage, 100);
});

// Make function available globally for language change events
window.updateEmergencyContactContent = updateEmergencyContactContent;

// Fallback if language manager loads after DOM
if (window.languageManager) {
  initializeEmergencyPage();
} else {
  const checkInterval = setInterval(() => {
    if (window.languageManager) {
      initializeEmergencyPage();
      clearInterval(checkInterval);
    }
  }, 100);
  
  setTimeout(() => {
    clearInterval(checkInterval);
    if (!window.languageManager) {
      // Load without translations as fallback
      createEmergencyCards();
    }
  }, 5000);
}