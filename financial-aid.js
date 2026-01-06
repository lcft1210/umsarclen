// Back button
document.getElementById("back-btn").onclick = () => {
  console.log("Back button clicked!");
  window.history.back();
};

// Section data with translation keys
const sections = [
  {
    icon: "fa-award",
    titleKey: "financialAid.sections.scholarships.title",
    title: "Scholarships",
    gradient: "linear-gradient(to right, rgba(234,179,8,0.2), rgba(249,115,22,0.2))",
    items: [
      {
        nameKey: "financialAid.sections.scholarships.items.excellence.name",
        name: "UMS Excellence Scholarship",
        descriptionKey: "financialAid.sections.scholarships.items.excellence.description",
        description: "For students with CGPA 3.75 and above",
        amount: "RM 2,000 per semester",
        eligibility: "Full-time Malaysian students"
      },
      {
        nameKey: "financialAid.sections.scholarships.items.deans.name",
        name: "Dean's List Scholarship",
        descriptionKey: "financialAid.sections.scholarships.items.deans.description",
        description: "For Dean's List achievers",
        amount: "RM 1,500 per semester",
        eligibility: "CGPA 3.50 and above"
      },
      {
        nameKey: "financialAid.sections.scholarships.items.sports.name",
        name: "Sports Excellence Scholarship",
        descriptionKey: "financialAid.sections.scholarships.items.sports.description",
        description: "For state/national level athletes",
        amount: "RM 1,200 - RM 3,000",
        eligibility: "Active sports representative"
      },
      {
        nameKey: "financialAid.sections.scholarships.items.needBased.name",
        name: 'Need-Based Financial Aid',
        descriptionKey: "financialAid.sections.scholarships.items.needBased.description",
        description: 'For students from low-income families',
        amount: 'Up to RM 5,000',
        eligibility: 'Household income below RM 3,000'
      },
      {
        nameKey: "financialAid.sections.scholarships.items.ptps.name",
        name: "PTPS Education Support",
        descriptionKey: "financialAid.sections.scholarships.items.ptps.description",
        description: "State government financial assistance for Sabah students",
        contact: "<a href='https://ptps.sabah.gov.my' target='_blank' style='text-decoration: none;'>ptps.sabah.gov.my</a>",
        eligibility: "Eligible Sabah students"
      },
      {
        nameKey: "financialAid.sections.scholarships.items.jpa.name",
        name: 'JPA PBU Scholarship',
        descriptionKey: "financialAid.sections.scholarships.items.jpa.description",
        description: 'Federal scholarship for study in local universities',
        contact: '<a href="https://www.jpa.gov.my" target="_blank" style="text-decoration: none;">www.jpa.gov.my</a>',
        eligibility: 'Top-performing Malaysian students'
      }
    ]
  },
  {
    icon: "fa-dollar-sign",
    titleKey: "financialAid.sections.loans.title",
    title: "Student Loans",
    gradient: "linear-gradient(to right, rgba(34,197,94,0.2), rgba(20,184,166,0.2))",
    items: [
      {
        nameKey: "financialAid.sections.loans.items.ptptn.name",
        name: "PTPTN",
        descriptionKey: "financialAid.sections.loans.items.ptptn.description",
        description: "Government education loan scheme",
        amount: "Up to RM 12,000 per year",
        contact: "<a href='https://www.ptptn.gov.my' target='_blank' style='text-decoration: none;'>www.ptptn.gov.my</a>"
      },
      {
        nameKey: "financialAid.sections.loans.items.mara.name",
        name: 'MARA Education Loan',
        descriptionKey: "financialAid.sections.loans.items.mara.description",
        description: 'For Bumiputera students',
        amount: 'Covers tuition + living expenses',
        contact: '<a href="https://www.mara.gov.my" target="_blank" style="text-decoration: none;">www.mara.gov.my | +60 3-2161 7000</a>'
      },
      {
        nameKey: "financialAid.sections.loans.items.bank.name",
        name: 'Bank Education Loan',
        descriptionKey: "financialAid.sections.loans.items.bank.description",
        description: 'Private bank education financing',
        amount: 'Varies by bank',
        contact: 'Maybank, CIMB, Public Bank, etc.'
      },
    ]
  },
  {
    icon: "fa-briefcase",
    titleKey: "financialAid.sections.workStudy.title",
    title: "Work-Study Programs",
    gradient: "linear-gradient(to right, rgba(59,130,246,0.2), rgba(139,92,246,0.2))",
    items: [
      {
        nameKey: "financialAid.sections.workStudy.items.assistant.name",
        name: "Student Assistant",
        descriptionKey: "financialAid.sections.workStudy.items.assistant.description",
        description: "Part-time work in departments",
        amount: "RM 500 - RM 800",
        workload: "15–20 hours/week"
      },
      {
        nameKey: "financialAid.sections.workStudy.items.library.name",
        name: 'Library Assistant',
        descriptionKey: "financialAid.sections.workStudy.items.library.description",
        description: 'Help manage library operations',
        amount: 'RM 450 per month',
        workload: '12 hours per week'
      },
      {
        nameKey: "financialAid.sections.workStudy.items.lab.name",
        name: 'Lab Assistant',
        descriptionKey: "financialAid.sections.workStudy.items.lab.description",
        description: 'Assist in computer/science labs',
        amount: 'RM 600 per month',
        workload: '16 hours per week'
      },
      {
        nameKey: "financialAid.sections.workStudy.items.research.name",
        name: 'Research Assistant',
        descriptionKey: "financialAid.sections.workStudy.items.research.description",
        description: 'Assist lecturers in research projects',
        amount: 'RM 700 - RM 1,200',
        workload: 'Flexible hours'
      },
      {
        nameKey: "financialAid.sections.workStudy.items.customerService.name",
        name: 'Online Customer Service',
        descriptionKey: "financialAid.sections.workStudy.items.customerService.description",
        description: 'Support student inquiries online',
        amount: 'RM 150 - RM 200 per month',
        workload: '24 hours online (work from home)'
      }
    ]
  },
  {
    icon: "fa-plane",
    titleKey: "financialAid.sections.exchange.title",
    title: "Mobility Exchange Program",
    gradient: "linear-gradient(to right, rgba(236,72,153,0.2), rgba(139,92,246,0.2))",
    items: [
      {
        nameKey: "financialAid.sections.exchange.items.erasmus.name",
        name: "Erasmus+",
        descriptionKey: "financialAid.sections.exchange.items.erasmus.description",
        description: "Study in Europe",
        duration: "1 semester - 1 year",
        coverage: "€800-€1000/month",
        contact: "<a href='https://erasmus-plus.ec.europa.eu/' target='_blank' style='text-decoration: none;'>erasmus-plus.ec.europa.eu</a>"
      },
      {
        nameKey: "financialAid.sections.exchange.items.aims.name",
        name: 'ASEAN International Mobility for Students (AIMS)',
        descriptionKey: "financialAid.sections.exchange.items.aims.description",
        description: 'Exchange within ASEAN countries',
        duration: '1 semester',
        coverage: 'Tuition waiver + stipend',
        contact: '<a href="https://aims-rihed.net/" target="_blank" style="text-decoration: none;">aims-rihed.net</a>'
      },
      {
        nameKey: "financialAid.sections.exchange.items.commonwealth.name",
        name: 'Commonwealth Scholarship',
        descriptionKey: "financialAid.sections.exchange.items.commonwealth.description",
        description: 'Study in UK, Australia, Canada',
        duration: 'Varies',
        coverage: 'Full scholarship including airfare',
        contact: '<a href="https://www.britishcouncil.my/commonwealth-scholarship-and-fellowship-plan-csfp" target="_blank" style="text-decoration: none;">britishcouncil.my</a>'
      },
      {
        nameKey: "financialAid.sections.exchange.items.jasso.name",
        name: 'Japan Student Services Organization (JASSO)',
        descriptionKey: "financialAid.sections.exchange.items.jasso.description",
        description: 'Short-term exchange to Japan',
        duration: '3-12 months',
        coverage: '¥80,000 per month + one-way airfare',
        contact: '<a href="https://www.jasso.go.jp/en/" target="_blank" style="text-decoration: none;">jasso.go.jp/en</a>'
      }
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

// Function to render sections
function renderSections() {
  const container = document.getElementById("sections");
  if (!container) return;
  
  // Clear existing sections
  container.innerHTML = '';
  
  sections.forEach(section => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "section";

    // Get translated title
    const sectionTitle = getTranslatedText(section.titleKey, section.title);
    
    sectionDiv.innerHTML = `
      <div class="section-header">
        <i class="fa-solid ${section.icon}"></i>
        <h2>${sectionTitle}</h2>
      </div>
      <div class="cards"></div>
    `;

    const cards = sectionDiv.querySelector(".cards");

    section.items.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.background = section.gradient;

      // Get translated name and description
      const itemName = getTranslatedText(item.nameKey, item.name);
      const itemDescription = getTranslatedText(item.descriptionKey, item.description);
      
      let rows = "";
      Object.keys(item).forEach(key => {
        if (key !== "name" && key !== "description" && key !== "nameKey" && key !== "descriptionKey") {
          const label = getTranslatedText(`financialAid.labels.${key}`, 
            key.charAt(0).toUpperCase() + key.slice(1));
          rows += `
            <div class="card-row">
              <span>${label}:</span>
              <span>${item[key]}</span>
            </div>
          `;
        }
      });

      card.innerHTML = `
        <h3>${itemName}</h3>
        <p>${itemDescription}</p>
        ${rows}
      `;

      cards.appendChild(card);
    });

    container.appendChild(sectionDiv);
  });
}

// Set up other buttons
const applyOnlineBtn = document.querySelector('.btn-cyan');
if (applyOnlineBtn) {
  applyOnlineBtn.onclick = () => {
    window.location.href = "https://portal.ums.edu.my/financial-aid";
  };
}

const btnPurple = document.getElementById("btnPurple");
if (btnPurple) {
  btnPurple.onclick = () => {
    window.location.href = "https://student-finance.ums.edu.my";
  };
}

// Function to update sections (for language changes)
function updateFinancialAidSections() {
  renderSections();
}

// Make function available globally for language change events
window.updateFinancialAidSections = updateFinancialAidSections;

// Initialize everything when language manager is ready
if (window.languageManager) {
  // Language manager already loaded
  renderSections();
} else {
  // Wait for language manager to load
  document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for language manager to initialize
    setTimeout(function() {
      renderSections();
    }, 100);
  });
}

// Listen for language changes
document.addEventListener('languageChanged', function(e) {
  console.log('Language changed on Financial Aid page:', e.detail.language);
  updateFinancialAidSections();
});