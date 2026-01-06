// Peer-to-Peer Department Contact - WITH LANGUAGE SUPPORT

// Departments data with translation keys
const departments = [
  {
    icon: 'fa-users',
    titleKey: 'peerToPeer.departments.studentCouncil.title',
    title: 'Student Council',
    descriptionKey: 'peerToPeer.departments.studentCouncil.description',
    description: 'Your voice in university matters',
    contacts: [
      { name: 'Ahmad Zainuddin (President)', role: 'Student Council President', phone: '+60123456789', whatsapp: 'https://wa.me/60123456789' },
      { name: 'Sarah Lim (Vice President)', role: 'Vice President', phone: '+60123456790', whatsapp: 'https://wa.me/60123456790' },
      { name: 'Kumar Raj (Secretary)', role: 'Secretary', phone: '+60123456791', whatsapp: 'https://wa.me/60123456791' },
    ]
  },
  {
    icon: 'fa-graduation-cap',
    titleKey: 'peerToPeer.departments.facultyReps.title',
    title: 'Faculty Representatives',
    descriptionKey: 'peerToPeer.departments.facultyReps.description',
    description: 'Direct contact with faculty heads',
    contacts: [
      { name: 'Prof. Dr. Hassan Ahmad', role: 'Faculty of Computing & Informatics', phone: '+60883320300', whatsapp: 'https://wa.me/60883320300' },
      { name: 'Prof. Dr. Jane Wong', role: 'Faculty of Engineering', phone: '+60883320400', whatsapp: 'https://wa.me/60883320400' },
      { name: 'Prof. Dr. Rajesh Kumar', role: 'Faculty of Science & Natural Resources', phone: '+60883320500', whatsapp: 'https://wa.me/60883320500' },
      { name: 'Dr. Fatimah Ibrahim', role: 'Faculty of Business & Economics', phone: '+60883320600', whatsapp: 'https://wa.me/60883320600' },
    ]
  },
  {
    icon: 'fa-building',
    titleKey: 'peerToPeer.departments.campusAdmin.title',
    title: 'Campus Administration',
    descriptionKey: 'peerToPeer.departments.campusAdmin.description',
    description: 'Administrative and operational contacts',
    contacts: [
      { name: 'Dr. Abdullah Rahman', role: 'Deputy Vice-Chancellor (Student Affairs)', phone: '+60883320050', whatsapp: 'https://wa.me/60883320050' },
      { name: 'Puan Siti Aminah', role: 'Registrar Office', phone: '+60883320100', whatsapp: 'https://wa.me/60883320100' },
      { name: 'En. Mohd Yusof', role: 'Finance Department', phone: '+60883320200', whatsapp: 'https://wa.me/60883320200' },
    ]
  },
  {
    icon: 'fa-user',
    titleKey: 'peerToPeer.departments.academicAdvisors.title',
    title: 'Academic Advisors',
    descriptionKey: 'peerToPeer.departments.academicAdvisors.description',
    description: 'Get guidance on academic matters',
    contacts: [
      { name: 'Dr. Lim Wei Cheng', role: 'Academic Advisor (Computing)', phone: '+60883320310', whatsapp: 'https://wa.me/60883320310' },
      { name: 'Dr. Nurul Aini', role: 'Academic Advisor (Engineering)', phone: '+60883320410', whatsapp: 'https://wa.me/60883320410' },
      { name: 'Dr. Tan Sook Ming', role: 'Academic Advisor (Science)', phone: '+60883320510', whatsapp: 'https://wa.me/60883320510' },
    ]
  },
  {
    icon: 'fa-users',
    titleKey: 'peerToPeer.departments.studentWelfare.title',
    title: 'Student Welfare Representatives',
    descriptionKey: 'peerToPeer.departments.studentWelfare.description',
    description: 'Support for student welfare and wellbeing',
    contacts: [
      { name: 'Muhammad Ismail', role: 'Welfare Coordinator', phone: '+60124567890', whatsapp: 'https://wa.me/60124567890' },
      { name: 'Aisyah Ramli', role: 'Housing & Accommodation', phone: '+60125678901', whatsapp: 'https://wa.me/60125678901' },
      { name: 'David Chen', role: 'Sports & Recreation', phone: '+60126789012', whatsapp: 'https://wa.me/60126789012' },
    ]
  },
  {
    icon: 'fa-building',
    titleKey: 'peerToPeer.departments.branchCampuses.title',
    title: 'Branch Campus Contacts',
    descriptionKey: 'peerToPeer.departments.branchCampuses.description',
    description: 'Representatives from all UMS branches',
    contacts: [
      { name: 'Dr. Ahmad Sabri', role: 'UMS Labuan - Director', phone: '+60874608520', whatsapp: 'https://wa.me/60874608520' },
      { name: 'Puan Halimah', role: 'UMS Labuan - Student Affairs', phone: '+60874609990', whatsapp: 'https://wa.me/60874609990' },
      { name: 'Dr. Tan Kok Wei', role: 'UMS Sandakan - Director', phone: '+60896655000', whatsapp: 'https://wa.me/60896655000' },
      { name: 'En. Rahman Ali', role: 'UMS Sandakan - Student Affairs', phone: '+60896658880', whatsapp: 'https://wa.me/60896658880' },
    ]
  },
];

// Helper function to get translated text
function getTranslatedText(key, defaultText) {
  if (window.languageManager && key) {
    if (typeof window.languageManager.translate === 'function') {
      const trans = window.languageManager.translate(key);
      if (trans && trans !== key) return trans;
    }
    if (typeof window.languageManager.t === 'function') {
      const trans = window.languageManager.t(key);
      if (trans && trans !== key) return trans;
    }
  }
  return defaultText;
}

// Function to render departments
function renderDepartments() {
  const container = document.getElementById('departments');
  if (!container) return;
  
  container.innerHTML = '';
  
  let expandedIndex = null;
  
  departments.forEach((dept, index) => {
    const deptDiv = document.createElement('div');
    deptDiv.classList.add('department');
    
    const deptTitle = getTranslatedText(dept.titleKey, dept.title);
    const deptDescription = getTranslatedText(dept.descriptionKey, dept.description);
    
    const btn = document.createElement('button');
    btn.innerHTML = `
      <div class="department-info">
        <div class="department-icon">
          <i class="fa-solid ${dept.icon}"></i>
        </div>
        <div>
          <h3>${deptTitle}</h3>
          <p>${deptDescription}</p>
        </div>
      </div>
      <div class="expand-icon">
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    `;
    
    deptDiv.appendChild(btn);
    
    const contactsDiv = document.createElement('div');
    contactsDiv.classList.add('contacts');
    contactsDiv.style.display = 'none';
    
    dept.contacts.forEach(contact => {
      const contactCard = document.createElement('div');
      contactCard.classList.add('contact-card');
      
      const callLabel = getTranslatedText('peerToPeer.common.call', '📞 Call');
      const whatsappLabel = getTranslatedText('peerToPeer.common.whatsapp', 'WhatsApp');
      
      contactCard.innerHTML = `
        <h4>${contact.name}</h4>
        <p>${contact.role}</p>
        <div class="contact-links">
          <a href="tel:${contact.phone}" class="call-btn">${callLabel}</a>
          <a href="${contact.whatsapp}" target="_blank" class="whatsapp-btn">
            <i class="fa-brands fa-whatsapp"></i> ${whatsappLabel}
          </a>
        </div>
      `;
      contactsDiv.appendChild(contactCard);
    });
    
    deptDiv.appendChild(contactsDiv);
    
    btn.addEventListener('click', () => {
      if (expandedIndex === index) {
        contactsDiv.style.display = 'none';
        btn.querySelector('.expand-icon i').className = 'fa-solid fa-chevron-down';
        expandedIndex = null;
      } else {
        document.querySelectorAll('.contacts').forEach(c => c.style.display = 'none');
        document.querySelectorAll('.expand-icon i').forEach(icon => icon.className = 'fa-solid fa-chevron-down');
        contactsDiv.style.display = 'grid';
        btn.querySelector('.expand-icon i').className = 'fa-solid fa-chevron-up';
        expandedIndex = index;
      }
    });
    
    container.appendChild(deptDiv);
  });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
  console.log('Peer-to-Peer page loaded');
  
  const backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => window.history.back());
  }
  
  if (window.languageManager) {
    renderDepartments();
  } else {
    setTimeout(renderDepartments, 300);
  }
  
  document.addEventListener('languageChanged', function(e) {
    console.log('Language changed:', e.detail.language);
    renderDepartments();
  });
});