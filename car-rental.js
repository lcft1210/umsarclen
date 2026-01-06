// car-rental.js - WITH FIXED TITLE HANDLING

// 1. Back button
document.getElementById("back-btn").onclick = () => {
  window.history.back();
};

// 2. Original branch data (WITH IMAGES)
const branches = [
  {
    name: 'UMS Kota Kinabalu',
    rentals: [
      {
        name: 'Grendline Travel Car Rental Services',
        link: 'https://www.grendlinetravel.com/category/car-rental-kota-kinabalu/',
        logo: 'logo-grendline.jpg'
      },
      {
        name: 'MJ Car Rental',
        link: 'https://wasap.my/60134856846',
        logo: 'mj-car-rental.jpg'
      }
    ]
  },
  {
    name: 'UMS Labuan International Campus',
    rentals: [
      {
        name: 'Carii',
        link: 'https://carii.org/book-now/',
        logo: 'carii-logo.jpg'
      },
      {
        name: '3guys Car Rental',
        link: 'https://t.me/threeguyscar',
        logo: '3guys-logo.jpeg'
      }
    ]
  },
  {
    name: 'UMS Sandakan Branch Campus',
    rentals: [
      {
        name: 'MJ Car Rental',
        link: 'https://wasap.my/60134856846',
        logo: 'mj-car-rental.jpg'
      },
      {
        name: 'MKAZ Car Rental',
        link: 'https://mkazcarrental.com/car-rental-sandakan/',
        logo: 'mkaz-logo.jpg'
      }
    ]
  }
];

// 3. Render function (ORIGINAL - keeps images)
function renderBranches() {
  const container = document.getElementById("branches-container");
  container.innerHTML = ''; // Clear first

  branches.forEach(branch => {
    const branchDiv = document.createElement("div");
    branchDiv.className = "branch";

    branchDiv.innerHTML = `
      <div class="branch-header">
        <i class="fa-solid fa-car"></i>
        <h2>${branch.name}</h2>
      </div>
      <div class="cards"></div>
    `;

    const cardsContainer = branchDiv.querySelector(".cards");

    branch.rentals.forEach(rental => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${rental.logo}" alt="${rental.name}" onerror="this.src='https://via.placeholder.com/300x180/667eea/764ba2?text=Car+Rental'">
        <h3>${rental.name}</h3>
        <a href="${rental.link}" target="_blank">Click to visit →</a>
      `;

      cardsContainer.appendChild(card);
    });

    container.appendChild(branchDiv);
  });
}

// 4. Language switching - WITH TITLE FIX
function setupLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  const headerTitle = document.querySelector('.header-title');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      
      // Update active button
      langButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Store preference
      localStorage.setItem('preferredLanguage', lang);
      
      // Apply translations
      applyTranslations(lang);
      
      // Adjust title font size for BM if needed
      if (lang === 'ms') {
        headerTitle.style.fontSize = '1.7rem'; // Slightly smaller for BM
      } else {
        headerTitle.style.fontSize = '2rem'; // Back to normal for EN
      }
    });
  });
}

// 5. Simple translation function
function applyTranslations(lang) {
  const translations = {
    en: {
      title: 'Car Rental Services',
      intro: 'Convenient car rental services near UMS campuses',
      notesTitle: 'Important Notes:',
      note1: 'Always verify rental terms and conditions before booking',
      note2: 'Ensure you have a valid driving license',
      note3: 'Check insurance coverage included in the rental',
      note4: 'Book in advance during peak seasons and holidays',
      note5: 'UMS is not affiliated with these rental services',
      back: 'Back'
    },
    ms: {
      title: 'Perkhidmatan Sewa Kereta',
      intro: 'Perkhidmatan sewa kereta yang mudah berhampiran kampus UMS',
      notesTitle: 'Nota Penting:',
      note1: 'Sentiasa sahkan terma dan syarat sewa sebelum membuat tempahan',
      note2: 'Pastikan anda mempunyai lesen memandu yang sah',
      note3: 'Periksa liputan insurans yang termasuk dalam sewaan',
      note4: 'Tempah lebih awal semasa musim puncak dan cuti',
      note5: 'UMS tidak berkaitan dengan perkhidmatan sewaan ini',
      back: 'Kembali'
    }
  };
  
  const t = translations[lang] || translations.en;
  
  // Update static text
  document.querySelector('title').textContent = t.title;
  document.querySelector('.header-title').textContent = t.title;
  document.querySelector('.intro p').textContent = t.intro;
  document.querySelector('.notes h3').textContent = t.notesTitle;
  document.querySelector('#back-btn span').textContent = t.back;
  
  // Update notes list
  const noteItems = document.querySelectorAll('.notes li');
  if (noteItems.length >= 5) {
    noteItems[0].textContent = t.note1;
    noteItems[1].textContent = t.note2;
    noteItems[2].textContent = t.note3;
    noteItems[3].textContent = t.note4;
    noteItems[4].textContent = t.note5;
  }
  
  // Update dynamic content (branch names)
  const branchNames = document.querySelectorAll('.branch-header h2');
  if (branchNames.length >= 3 && lang === 'ms') {
    branchNames[0].textContent = 'UMS Kota Kinabalu';
    branchNames[1].textContent = 'Kampus Antarabangsa UMS Labuan';
    branchNames[2].textContent = 'Kampus Cawangan UMS Sandakan';
  } else if (branchNames.length >= 3) {
    branchNames[0].textContent = 'UMS Kota Kinabalu';
    branchNames[1].textContent = 'UMS Labuan International Campus';
    branchNames[2].textContent = 'UMS Sandakan Branch Campus';
  }
}

// 6. Initialize everything
document.addEventListener('DOMContentLoaded', function() {
  console.log('Car Rental Page Loading...');
  
  // Render branches first (with images)
  renderBranches();
  
  // Setup language switcher
  setupLanguageSwitcher();
  
  // Load saved language preference
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  const activeBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
  if (activeBtn) {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    activeBtn.classList.add('active');
    applyTranslations(savedLang);
    
    // Adjust title for BM if saved language is BM
    if (savedLang === 'ms') {
      document.querySelector('.header-title').style.fontSize = '1.7rem';
    }
  }
  
  console.log('Car Rental Page Ready!');
});