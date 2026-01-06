document.addEventListener('DOMContentLoaded', () => {
  console.log('Tutoring page loaded');

  // Back button
  document.getElementById('backBtn')?.addEventListener('click', () => window.history.back());

  const lecturers = [
    { name: 'Dr. Ahmad bin Hassan', subject: 'Mathematics', available: 'Mon, Wed, Fri' },
    { name: 'Prof. Sarah Lim', subject: 'Computer Science', available: 'Tue, Thu' },
    { name: 'Dr. Kumar Rajesh', subject: 'Physics', available: 'Mon, Wed' },
    { name: 'Ms. Emily Tan', subject: 'Chemistry', available: 'Tue, Thu, Fri' },
    { name: 'Dr. Fatimah binti Ahmad', subject: 'Biology', available: 'Mon, Wed, Fri' },
    { name: 'Prof. John Smith', subject: 'Engineering', available: 'Tue, Thu' }
  ];

  const form = document.getElementById('appointmentForm');
  const confCard = document.getElementById('confirmationCard');
  const studyGroupCard = document.getElementById('studyGroupCard');
  const subjectSelect = document.getElementById('subject');
  const lecturerSelect = document.getElementById('lecturer');
  const noticeBox = document.getElementById('noticeBox');

  function getTranslatedText(key, defaultText) {
    if (window.languageManager) {
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

  // Populate lecturers
  subjectSelect.addEventListener('change', () => {
    const subject = subjectSelect.value;
    lecturerSelect.innerHTML = '<option value="">' + getTranslatedText('serviceDetail.tutoring.form.selectLecturer', 'Choose a lecturer') + '</option>';
    lecturers.filter(l => l.subject === subject).forEach(l => {
      const opt = document.createElement('option');
      opt.value = l.name;
      opt.textContent = `${l.name} (${l.available})`;
      lecturerSelect.appendChild(opt);
    });
  });

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const studentId = document.getElementById('studentId').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contactNumber').value;
    const subject = subjectSelect.value;
    const lecturer = lecturerSelect.value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const topic = document.getElementById('topic').value;

    document.getElementById('confName').textContent = name;
    document.getElementById('confStudentId').textContent = studentId;
    document.getElementById('confSubject').textContent = subject;
    document.getElementById('confLecturer').textContent = lecturer;
    document.getElementById('confDate').textContent = date;
    document.getElementById('confTime').textContent = time;
    document.getElementById('confTopic').textContent = topic;

    noticeBox.innerHTML = `
      <p class="notice-main">
        ${getTranslatedText('tutoring.notice.title', 'Your tutoring session')} <strong>${lecturer}</strong> ${getTranslatedText('tutoring.notice.scheduled', 'is scheduled on')} <strong>${date}</strong> ${getTranslatedText('tutoring.notice.at', 'at')} <strong>${time}</strong>.
      </p>
      <p class="notice-sub">
        📧 ${getTranslatedText('tutoring.notice.emailSent', 'A confirmation email has been sent to')} <strong>${email}</strong>
      </p>
    `;

    form.style.display = 'none';
    confCard.style.display = 'block';
  });

  // Back to form
  document.getElementById('backToFormBtn').onclick = () => {
    form.style.display = 'block';
    confCard.style.display = 'none';
    studyGroupCard.style.display = 'none';
  };

  // Study group
  const createGroupBtn = document.getElementById('createStudyGroupBtn');
  const studyGroupLinkInput = document.getElementById('studyGroupLink');
  const copyLinkBtn = document.getElementById('copyLinkBtn');

  createGroupBtn.onclick = () => {
    const code = Math.random().toString(36).substr(2, 6).toUpperCase();
    studyGroupLinkInput.value = `https://ums.edu.my/study-group/SG${code}`;
    studyGroupCard.style.display = 'block';
  };

  copyLinkBtn.onclick = () => {
    studyGroupLinkInput.select();
    document.execCommand('copy');
    alert(getTranslatedText('tutoring.studyGroup.copied', 'Study group link copied!'));
  };

  // Min date
  const dateInput = document.getElementById('date');
  if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
  }

  // Update dynamic texts on language change
  document.addEventListener('languageChanged', function(e) {
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      el.textContent = getTranslatedText(key, el.textContent);
    });
  });
});
