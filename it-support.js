// Back button
document.getElementById('back-btn').onclick = () => {
  window.history.back(); // go back to previous page
};

// FAQ data with translation keys
const faqs = [
  {
    icon: 'fa-wifi',
    titleKey: 'itSupport.faqs.wifi.title',
    contentKey: 'itSupport.faqs.wifi.content',
    title: 'Wi-Fi / Network Login Issues',
    content: '1. Connect to "UMS-Student" WiFi\n2. Open browser and navigate to wifi.ums.edu.my\n3. Enter your Student ID and password\n4. If issues persist, contact IT Help Desk at +60 88-329 000'
  },
  {
    icon: 'fa-lock',
    titleKey: 'itSupport.faqs.portal.title',
    contentKey: 'itSupport.faqs.portal.content',
    title: 'Student Portal Login Problems',
    content: '1. Go to portal.ums.edu.my\n2. Use your Student ID as username\n3. Default password is your IC number (without dashes)\n4. Clear browser cache if page doesn\'t load\n5. Contact portal@ums.edu.my for assistance'
  },
  {
    icon: 'fa-lock',
    titleKey: 'itSupport.faqs.password.title',
    contentKey: 'itSupport.faqs.password.content',
    title: 'Password Reset / Account Recovery',
    content: '1. Visit portal.ums.edu.my/reset\n2. Enter your Student ID and registered email\n3. Check your email for reset link\n4. Or visit IT Help Desk with your student card\n5. Location: IT Department, Ground Floor, Administration Building'
  },
  {
    icon: 'fa-envelope',
    titleKey: 'itSupport.faqs.email.title',
    contentKey: 'itSupport.faqs.email.content',
    title: 'Email Setup (Student Email)',
    content: 'Your UMS email: studentName&Batch@iluv.ums.edu.my\n\nSetup Instructions:\n1. Go to outlook.office.com\n2. Login with full email address\n3. Password: Same as portal password\n4. Enable 2FA for security\n\nMobile Setup:\n- Download Microsoft Outlook app\n- Add account with your credentials'
  },
  {
    icon: 'fa-download',
    titleKey: 'itSupport.faqs.software.title',
    contentKey: 'itSupport.faqs.software.content',
    title: 'Software Installation (Microsoft 365, Antivirus, etc.)',
    content: 'Free Software for UMS Students:\n\n1. Microsoft 365:\n- Visit office.com/signin\n- Login with UMS email\n- Download Office apps\n\n2. Antivirus (Windows Defender):\n- Pre-installed on Windows\n- Or download from software.ums.edu.my\n\n3. Other Software:\n- Visit it.ums.edu.my/downloads\n- Login with student credentials'
  },
  {
    icon: 'fa-wrench',
    titleKey: 'itSupport.faqs.device.title',
    contentKey: 'itSupport.faqs.device.content',
    title: 'Device Troubleshooting (laptop/phone)',
    content: 'Common Issues:\n\n1. Slow Computer:\n- Clear temp files\n- Disable startup programs\n- Run antivirus scan\n\n2. Cannot Connect to Campus WiFi:\n- Forget network and reconnect\n- Update device drivers\n- Check if MAC address is registered\n\n3. Need Help?\n- IT Clinic: Every Monday & Wednesday, 2-4 PM\n- Location: IT Lab, Block A'
  },
  {
    icon: 'fa-print',
    titleKey: 'itSupport.faqs.printing.title',
    contentKey: 'itSupport.faqs.printing.content',
    title: 'Printing System Issues',
    content: '1. Add printer:\n- Go to print.ums.edu.my\n- Download printer driver\n- Install and connect\n\n2. Print Credits:\n- Top up at library counter\n- Or online at portal.ums.edu.my/print\n\n3. Print Locations:\n- Library (All floors)\n- Computer Labs\n- Student Center\n\n4. Issues? Contact: print@ums.edu.my'
  },
  {
    icon: 'fa-desktop',
    titleKey: 'itSupport.faqs.lms.title',
    contentKey: 'itSupport.faqs.lms.content',
    title: 'Online Class / LMS Problems (Google Classroom, Moodle, etc.)',
    content: 'Learning Management Systems:\n\n1. UMS Moodle:\n- URL: itel.ums.edu.my\n- Login with student credentials\n- Contact: +60 883 200 00\n\n2. Google Classroom:\n- Use UMS email to join classes\n- Install Google Meet app\n\n3. Webex:\n- Free for students via portal\n- Download at webex.com\n\n4. Cannot access class materials?\n- Clear browser cache\n- Try different browser\n- Contact lecturer or digital@ums.edu.my'
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

// Function to render FAQ
function renderFAQ() {
  const faqList = document.getElementById('faq-list');
  if (!faqList) return;
  
  // Clear existing FAQ items
  faqList.innerHTML = '';
  
  faqs.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'faq-item';

    const btn = document.createElement('button');

    const header = document.createElement('div');
    header.className = 'faq-header';
    
    // Get translated title
    const title = getTranslatedText(faq.titleKey, faq.title);
    header.innerHTML = `<i class="fa-solid ${faq.icon}"></i><span>${title}</span>`;

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-chevron-down';
    icon.style.marginLeft = 'auto';

    btn.appendChild(header);
    btn.appendChild(icon);
    item.appendChild(btn);

    const content = document.createElement('div');
    content.className = 'faq-content';
    content.style.display = 'none';
    
    // Get translated content
    const contentText = getTranslatedText(faq.contentKey, faq.content);
    content.textContent = contentText;
    
    item.appendChild(content);

    btn.addEventListener('click', () => {
      const isVisible = content.style.display === 'block';
      content.style.display = isVisible ? 'none' : 'block';
      icon.className = isVisible ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up';
    });

    faqList.appendChild(item);
  });
}

// Function to update FAQ items (for language changes)
function updateFAQItems() {
  renderFAQ();
}

// Initialize FAQ when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Initial render
  renderFAQ();
  
  // Set up back button
  document.getElementById('back-btn').onclick = () => {
    window.history.back();
  };
});

// Make function available globally for language change events
window.updateFAQItems = updateFAQItems;