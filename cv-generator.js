// Initialize Lucide Icons
lucide.createIcons();

// CV State
let cvData = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  summary: '',
  education: [],
  experience: [],
  skills: [],
  languages: [],
  achievements: []
};

// ----- Helper Functions -----
function addEducation() {
  const container = document.getElementById('educationList');
  const edu = { degree: '', institution: '', startDate: '', endDate: '', gpa: '' };
  cvData.education.push(edu);

  const div = document.createElement('div');
  div.className = 'card grid md:grid-cols-2 gap-4';
  div.innerHTML = `
    <input type="text" placeholder="Degree/Program" class="px-3 py-2 border rounded">
    <input type="text" placeholder="Institution" class="px-3 py-2 border rounded">
    <input type="text" placeholder="Start Date" class="px-3 py-2 border rounded">
    <input type="text" placeholder="End Date" class="px-3 py-2 border rounded">
    <input type="text" placeholder="GPA (optional)" class="px-3 py-2 border rounded">
  `;

  const inputs = div.querySelectorAll('input');
  inputs[0].addEventListener('input', e => edu.degree = e.target.value);
  inputs[1].addEventListener('input', e => edu.institution = e.target.value);
  inputs[2].addEventListener('input', e => edu.startDate = e.target.value);
  inputs[3].addEventListener('input', e => edu.endDate = e.target.value);
  inputs[4].addEventListener('input', e => edu.gpa = e.target.value);

  container.appendChild(div);
}

function addExperience() {
  const container = document.getElementById('experienceList');
  const exp = { position: '', company: '', startDate: '', endDate: '', description: '' };
  cvData.experience.push(exp);

  const div = document.createElement('div');
  div.className = 'card grid gap-2';
  div.innerHTML = `
    <input type="text" placeholder="Position/Role" class="px-3 py-2 border rounded">
    <input type="text" placeholder="Company/Organization" class="px-3 py-2 border rounded">
    <input type="text" placeholder="Start Date" class="px-3 py-2 border rounded">
    <input type="text" placeholder="End Date" class="px-3 py-2 border rounded">
    <textarea placeholder="Description" class="px-3 py-2 border rounded"></textarea>
  `;

  const inputs = div.querySelectorAll('input, textarea');
  inputs[0].addEventListener('input', e => exp.position = e.target.value);
  inputs[1].addEventListener('input', e => exp.company = e.target.value);
  inputs[2].addEventListener('input', e => exp.startDate = e.target.value);
  inputs[3].addEventListener('input', e => exp.endDate = e.target.value);
  inputs[4].addEventListener('input', e => exp.description = e.target.value);

  container.appendChild(div);
}

function addItem(inputId, list, renderFunc) {
  const input = document.getElementById(inputId);
  if (input.value.trim()) {
    list.push(input.value.trim());
    renderFunc();
    input.value = '';
  }
}

// Render Functions
function renderList(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  items.forEach((item, idx) => {
    const span = document.createElement('span');
    span.className = 'badge bg-cyan-600/30 border border-cyan-400/50';
    span.innerHTML = `${item} <button onclick="removeItem('${containerId}', ${idx})" class="hover:text-red-400">×</button>`;
    container.appendChild(span);
  });
}

function removeItem(containerId, idx) {
  let key = containerId.replace('List','');
  cvData[key].splice(idx,1);
  renderList(containerId, cvData[key]);
}

// AI Summary Generator (placeholder)
document.getElementById('generateSummary').addEventListener('click', () => {
  const firstEdu = cvData.education[0]?.degree || 'student';
  cvData.summary = `Highly motivated ${firstEdu} with strong academic background and passion for learning. Seeking opportunities to apply knowledge and contribute to organizational success.`;
  document.getElementById('summary').value = cvData.summary;
});

// ----- Add initial forms -----
addEducation();
addExperience();

// ----- Event Listeners -----
document.getElementById('addEducation').addEventListener('click', addEducation);
document.getElementById('addExperience').addEventListener('click', addExperience);
document.getElementById('addSkillBtn').addEventListener('click', () => addItem('newSkill', cvData.skills, () => renderList('skillsList', cvData.skills)));
document.getElementById('addLanguageBtn').addEventListener('click', () => addItem('newLanguage', cvData.languages, () => renderList('languagesList', cvData.languages)));
document.getElementById('addAchievementBtn').addEventListener('click', () => addItem('newAchievement', cvData.achievements, () => renderList('achievementsList', cvData.achievements)));

// ----- Generate CV Preview -----
document.getElementById('generateCV').addEventListener('click', () => {
  // Save form data
  cvData.fullName = document.getElementById('fullName').value;
  cvData.email = document.getElementById('email').value;
  cvData.phone = document.getElementById('phone').value;
  cvData.address = document.getElementById('address').value;
  cvData.summary = document.getElementById('summary').value;

  // Hide form, show preview
  document.getElementById('mainForm').classList.add('hidden');
  document.getElementById('cvPreview').classList.remove('hidden');

  // Populate CV Preview
  document.getElementById('cvName').innerText = cvData.fullName;
  document.getElementById('cvContact').innerText = `Email: ${cvData.email} | Phone: ${cvData.phone} | Address: ${cvData.address}`;
  document.getElementById('cvSummary').innerText = cvData.summary;

  // Education
  const cvEdu = document.getElementById('cvEducation');
  cvEdu.innerHTML = `<h2 class="text-2xl font-bold mt-4 mb-2 flex items-center gap-2">
    <i data-lucide="graduation-cap" class="w-6 h-6 text-cyan-600"></i> Education
  </h2>`;
  cvData.education.forEach(ed => {
    const div = document.createElement('div');
    div.className = 'p-2 bg-gray-100 rounded mb-2';
    div.innerHTML = `<strong>${ed.degree || ''}</strong> at ${ed.institution || ''} (${ed.startDate || ''} - ${ed.endDate || ''}) ${ed.gpa ? `| GPA: ${ed.gpa}` : ''}`;
    cvEdu.appendChild(div);
  });

  // Experience
  const cvExp = document.getElementById('cvExperience');
  cvExp.innerHTML = `<h2 class="text-2xl font-bold mt-4 mb-2 flex items-center gap-2">
    <i data-lucide="briefcase" class="w-6 h-6 text-cyan-600"></i> Work Experience
  </h2>`;
  cvData.experience.forEach(ex => {
    const div = document.createElement('div');
    div.className = 'p-2 bg-gray-100 rounded mb-2';
    div.innerHTML = `<strong>${ex.position || ''}</strong> at ${ex.company || ''} (${ex.startDate || ''} - ${ex.endDate || ''})<br>${ex.description || ''}`;
    cvExp.appendChild(div);
  });

  // Skills
  const cvSkills = document.getElementById('cvSkills');
  cvSkills.innerHTML = `<h2 class="text-2xl font-bold mt-4 mb-2 flex items-center gap-2">
    <i data-lucide="code" class="w-6 h-6 text-cyan-600"></i> Skills
  </h2>`;
  cvData.skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full mr-2 mb-2';
    span.innerText = skill;
    cvSkills.appendChild(span);
  });

  // Languages
  const cvLang = document.getElementById('cvLanguages');
  cvLang.innerHTML = `<h2 class="text-2xl font-bold mt-4 mb-2 flex items-center gap-2">
    <i data-lucide="languages" class="w-6 h-6 text-cyan-600"></i> Languages
  </h2>`;
  cvData.languages.forEach(lang => {
    const span = document.createElement('span');
    span.className = 'inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full mr-2 mb-2';
    span.innerText = lang;
    cvLang.appendChild(span);
  });

  // Achievements
  const cvAch = document.getElementById('cvAchievements');
  cvAch.innerHTML = `<h2 class="text-2xl font-bold mt-4 mb-2 flex items-center gap-2">
    <i data-lucide="award" class="w-6 h-6 text-cyan-600"></i> Achievements
  </h2>`;
  cvData.achievements.forEach(a => {
    const div = document.createElement('div');
    div.className = 'p-2 bg-gray-100 rounded mb-2';
    div.innerText = a;
    cvAch.appendChild(div);
  });

  // Re-create icons
  lucide.createIcons();
});

// ----- Back to Form -----
document.getElementById('backToForm').addEventListener('click', () => {
  document.getElementById('cvPreview').classList.add('hidden');
  document.getElementById('mainForm').classList.remove('hidden');
});

// ----- Download CV -----
document.getElementById('downloadCV').addEventListener('click', () => {
  const element = document.getElementById('cvPreview');

  const downloadBtn = document.getElementById('downloadCV');
  const backBtn = document.getElementById('backToForm');

  // Hide buttons before export
  downloadBtn.style.display = 'none';
  backBtn.style.display = 'none';

  html2pdf().set({
    margin: 0.5,
    filename: `${cvData.fullName || 'CV'}.pdf`,
    html2canvas: { scale: 2, scrollY: 0 }
  }).from(element).save().finally(() => {
    // Restore buttons after export
    downloadBtn.style.display = 'flex';
    backBtn.style.display = 'flex';
  });
});

