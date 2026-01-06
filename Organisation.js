// organisation.js - FIXED VERSION

// Icon mapping - MOVED TO TOP (global scope)
const iconMap = {
  building: 'fa-building',
  users: 'fa-users',
  award: 'fa-award',
  book: 'fa-book-open'
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  console.log('Organisation page loaded');
  
  // ===== BACK BUTTON FUNCTIONALITY =====
  const backBtn = document.getElementById('backBtn');
  if (backBtn) {
    console.log('Back button found:', backBtn);
    backBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Back button clicked!');
      
      // SIMPLE FIX: Just go to index.html
      window.location.href = "index.html";
      
      // OR if you want to go back in history:
      // window.history.back();
    });
    
    // Also add onclick as backup
    backBtn.onclick = function() {
      window.location.href = "index.html";
      return false;
    };
  } else {
    console.error('Back button NOT FOUND!');
  }

  // ===== TRANSLATION FUNCTIONS =====
  
  // Function to create organisation cards with translations
  function createOrganisationCards() {
    const container = document.getElementById('organisationContainer');
    if (!container) {
      console.error('Organisation container not found!');
      return;
    }
    
    console.log('Creating organisation cards...');
    
    // Clear existing content
    container.innerHTML = '';
    
    // Check if language manager is available
    if (!window.languageManager) {
      console.warn('Language manager not loaded. Loading fallback...');
      loadFallbackOrganisations();
      return;
    }
    
    // Define organisations with translation keys
    const organisations = [
      {
        category: 'organisation.categories.branches',
        icon: 'building',
        items: [
          { 
            name: 'organisation.items.umsKK', 
            contact: '+60 88-320 000', 
            email: 'pro@ums.edu.my' 
          },
          { 
            name: 'organisation.items.umsLabuan', 
            contact: '+60 87-460 852', 
            email: 'umskal@ums.edu.my' 
          },
          { 
            name: 'organisation.items.umsSandakan', 
            contact: '+60 89-665 500', 
            email: 'sandakan@ums.edu.my' 
          },
        ]
      },
      {
        category: 'organisation.categories.studentCouncil',
        icon: 'users',
        items: [
          { 
            name: 'organisation.items.presidentKK', 
            contact: '+60 12-345 6789', 
            email: 'president@ums.edu.my' 
          },
          { 
            name: 'organisation.items.vpKK', 
            contact: '+60 12-345 6790', 
            email: 'vp@ums.edu.my' 
          },
          { 
            name: 'organisation.items.secretaryKK', 
            contact: '+60 12-345 6791', 
            email: 'secretary@ums.edu.my' 
          },
          { 
            name: 'organisation.items.repLabuan', 
            contact: '+60 12-456 7890', 
            email: 'labuan.rep@ums.edu.my' 
          },
          { 
            name: 'organisation.items.repSandakan', 
            contact: '+60 12-567 8901', 
            email: 'sandakan.rep@ums.edu.my' 
          },
        ]
      },
      {
        category: 'organisation.categories.clubs',
        icon: 'award',
        items: [
          { 
            name: 'organisation.items.photoClub', 
            contact: 'photo@ums.edu.my', 
            email: '' 
          },
          { 
            name: 'organisation.items.debateSociety', 
            contact: 'debate@ums.edu.my', 
            email: '' 
          },
          { 
            name: 'organisation.items.musicClub', 
            contact: 'music@ums.edu.my', 
            email: '' 
          },
          { 
            name: 'organisation.items.sportsClub', 
            contact: 'sports@ums.edu.my', 
            email: '' 
          },
          { 
            name: 'organisation.items.marineClub', 
            contact: 'marine@ums.edu.my', 
            email: '' 
          },
          { 
            name: 'organisation.items.wildlifeClub', 
            contact: 'wildlife@ums.edu.my', 
            email: '' 
          },
        ]
      },
      {
        category: 'organisation.categories.societies',
        icon: 'book',
        items: [
          { 
            name: 'organisation.items.csSociety', 
            contact: 'cs@ums.edu.my', 
            email: '' 
          },
          { 
            name: 'organisation.items.engSociety', 
            contact: 'eng@ums.edu.my', 
            email: '' 
          },
          { 
            name: 'organisation.items.bizSociety', 
            contact: 'biz@ums.edu.my', 
            email: '' 
          },
          { 
            name: 'organisation.items.scienceSociety', 
            contact: 'science@ums.edu.my', 
            email: '' 
          },
          { 
            name: 'organisation.items.intlBizSociety', 
            contact: 'intlbiz@ums.edu.my', 
            email: '' 
          },
          { 
            name: 'organisation.items.marineScienceSociety', 
            contact: 'marinesci@ums.edu.my', 
            email: '' 
          },
        ]
      }
    ];
    
    // Create cards
    organisations.forEach((org, i) => {
      const card = document.createElement('div');
      card.className = 'bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl fade-up';
      card.style.animationDelay = `${i * 0.15}s`;

      // Get translated category name
      const categoryName = window.languageManager.t(org.category);
      
      card.innerHTML = `
        <h2 class="text-2xl mb-6 flex items-center gap-3" data-translate="${org.category}">
          <i class="fa-solid ${iconMap[org.icon]} text-cyan-400"></i>
          ${categoryName}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
      `;

      const grid = card.querySelector('.grid');

      org.items.forEach(item => {
        const box = document.createElement('div');
        box.className = 'bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all hover:scale-105';

        // Get translated item name
        const itemName = window.languageManager.t(item.name);
        
        box.innerHTML = `
          <h3 class="mb-2" data-translate="${item.name}">${itemName}</h3>
          <p class="text-cyan-300 text-sm">${item.contact}</p>
          ${item.email ? `<p class="text-cyan-300 text-sm">${item.email}</p>` : ''}
        `;

        grid.appendChild(box);
      });

      container.appendChild(card);
    });
    
    console.log('Organisation cards created successfully');
  }

  // ===== FALLBACK FUNCTION =====
  function loadFallbackOrganisations() {
    const container = document.getElementById('organisationContainer');
    if (!container) return;
    
    console.log('Loading fallback organisations...');
    
    // Fallback organisations (English) - your original data
    const fallbackOrganisations = [
      {
        category: 'UMS Branches',
        icon: 'building',
        items: [
          { name: 'UMS Kota Kinabalu Campus', contact: '+60 88-320 000', email: 'pro@ums.edu.my' },
          { name: 'UMS Labuan International Campus', contact: '+60 87-460 852', email: 'umskal@ums.edu.my' },
          { name: 'UMS Sandakan Branch Campus', contact: '+60 89-665 500', email: 'sandakan@ums.edu.my' },
        ]
      },
      {
        category: 'Student Council',
        icon: 'users',
        items: [
          { name: 'Student Council President (KK)', contact: '+60 12-345 6789', email: 'president@ums.edu.my' },
          { name: 'Vice President (KK)', contact: '+60 12-345 6790', email: 'vp@ums.edu.my' },
          { name: 'Secretary (KK)', contact: '+60 12-345 6791', email: 'secretary@ums.edu.my' },
          { name: 'Student Representative (Labuan)', contact: '+60 12-456 7890', email: 'labuan.rep@ums.edu.my' },
          { name: 'Student Representative (Sandakan)', contact: '+60 12-567 8901', email: 'sandakan.rep@ums.edu.my' },
        ]
      },
      {
        category: 'Clubs',
        icon: 'award',
        items: [
          { name: 'Photography Club', contact: 'photo@ums.edu.my', email: '' },
          { name: 'Debate Society', contact: 'debate@ums.edu.my', email: '' },
          { name: 'Music Club', contact: 'music@ums.edu.my', email: '' },
          { name: 'Sports Club', contact: 'sports@ums.edu.my', email: '' },
          { name: 'Marine Biology Club (Labuan)', contact: 'marine@ums.edu.my', email: '' },
          { name: 'Wildlife Club (Sandakan)', contact: 'wildlife@ums.edu.my', email: '' },
        ]
      },
      {
        category: 'Societies',
        icon: 'book',
        items: [
          { name: 'Computer Science Society', contact: 'cs@ums.edu.my', email: '' },
          { name: 'Engineering Society', contact: 'eng@ums.edu.my', email: '' },
          { name: 'Business Society', contact: 'biz@ums.edu.my', email: '' },
          { name: 'Science Society', contact: 'science@ums.edu.my', email: '' },
          { name: 'International Business Society (Labuan)', contact: 'intlbiz@ums.edu.my', email: '' },
          { name: 'Marine Science Society (Sandakan)', contact: 'marinesci@ums.edu.my', email: '' },
        ]
      }
    ];

    // Clear existing content
    container.innerHTML = '';
    
    fallbackOrganisations.forEach((org, i) => {
      const card = document.createElement('div');
      card.className = 'bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl fade-up';
      card.style.animationDelay = `${i * 0.15}s`;

      card.innerHTML = `
        <h2 class="text-2xl mb-6 flex items-center gap-3">
          <i class="fa-solid ${iconMap[org.icon]} text-cyan-400"></i>
          ${org.category}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
      `;

      const grid = card.querySelector('.grid');

      org.items.forEach(item => {
        const box = document.createElement('div');
        box.className = 'bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all hover:scale-105';

        box.innerHTML = `
          <h3 class="mb-2">${item.name}</h3>
          <p class="text-cyan-300 text-sm">${item.contact}</p>
          ${item.email ? `<p class="text-cyan-300 text-sm">${item.email}</p>` : ''}
        `;

        grid.appendChild(box);
      });

      container.appendChild(card);
    });
    
    console.log('Fallback organisations loaded');
  }

  // ===== INITIALIZATION =====
  
  // Create organisation cards
  createOrganisationCards();
  
  // Update cards when language changes
  document.addEventListener('languageChanged', function(e) {
    console.log('Organisation page language changed to:', e.detail.language);
    createOrganisationCards();
  });

  // ===== LANGUAGE MANAGER CHECK =====
  // If language manager loads after DOM
  if (window.languageManager) {
    createOrganisationCards();
  } else {
    // Check every 100ms for language manager
    const checkLanguageManager = setInterval(() => {
      if (window.languageManager) {
        createOrganisationCards();
        clearInterval(checkLanguageManager);
      }
    }, 100);
    
    // Stop checking after 5 seconds
    setTimeout(() => {
      clearInterval(checkLanguageManager);
      if (!window.languageManager) {
        console.log('Language manager not available, using fallback');
      }
    }, 5000);
  }

}); // End of DOMContentLoaded