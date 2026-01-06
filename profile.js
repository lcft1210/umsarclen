// Get HTML elements
const profileMain = document.getElementById('profileMain');
const noDataDiv = document.getElementById('noData');
const backBtn = document.getElementById('backBtn');
const logoutBtn = document.getElementById('logoutBtn');

// =====================
// Utility: Get user data from localStorage
// =====================
function getUserData() {
  const user = localStorage.getItem('userData');
  return user ? JSON.parse(user) : null;
}

// =====================
// Utility: Logout
// =====================
function logoutUser() {
  localStorage.removeItem('ums_arclen_current'); // current user
  localStorage.removeItem('userData');           // cached user profile
  localStorage.removeItem('isLoggedIn');         // login flag
}

// Load current user
let studentData = getUserData();

// =====================
// Button handlers
// =====================
backBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});

logoutBtn.addEventListener('click', () => {
  logoutUser();
  alert('Logged out');
  window.location.href = 'login.html';
});

// =====================
// If no user data
// =====================
if (!studentData) {
  noDataDiv.style.display = 'block';
} else {
  noDataDiv.style.display = 'none';

  // =====================
  // PROFILE HEADER CARD
  // =====================
  const profileCard = document.createElement('section');
  profileCard.className = 'profile-card';
  profileCard.innerHTML = `
    <div class="profile-avatar">
      <div class="avatar-circle">
        <i class="fa-solid fa-user avatar-icon"></i>
      </div>
      <div class="status-dot"></div>
    </div>

    <div class="profile-info">
      <h2>${studentData.fullName || '-'}</h2>
      <p>${studentData.studentId || '-'}</p>
      <p>${studentData.program || '-'}</p>
    </div>

    <div class="profile-meta">
      <div class="cgpa-box">CGPA: ${studentData.cgpa || '-'}</div>
      <p>Semester ${studentData.currentSemester || '-'}</p>
    </div>
  `;
  profileMain.appendChild(profileCard);

  // =====================
  // ACTION BUTTONS
  // =====================
  const actionBar = document.createElement('div');
  actionBar.className = 'profile-actions';
  actionBar.innerHTML = `
    <button id="editBtn">Edit Profile</button>
    <button id="saveBtn" style="display:none;">Save</button>
  `;
  profileMain.appendChild(actionBar);

  const editBtn = document.getElementById('editBtn');
  const saveBtn = document.getElementById('saveBtn');

  // =====================
  // Info card helper
  // =====================
  function createInfoCard(iconClass, label, key, value, locked = false) {
    const card = document.createElement('div');
    card.className = 'info-card';
    card.innerHTML = `
      <div class="info-card-icon">
        <i class="${iconClass}"></i>
      </div>
      <div class="info-card-text">
        <p>${label}</p>
        <input 
          type="text"
          value="${value || ''}"
          data-key="${key}"
          ${locked ? 'disabled class="locked"' : 'disabled'}
        />
      </div>
    `;
    return card;
  }

  // =====================
  // Sections
  // =====================
  const sections = [
    {
      title: 'Personal Information',
      data: [
        ['fa-solid fa-envelope', 'Email', 'email', studentData.email],
        ['fa-solid fa-phone', 'Phone Number', 'phone', studentData.phone],
        ['fa-solid fa-calendar', 'Date of Birth', 'dateOfBirth', studentData.dateOfBirth],
        ['fa-solid fa-globe', 'Nationality', 'nationality', studentData.nationality],
        ['fa-solid fa-heart', 'Religion', 'religion', studentData.religion],
        ['fa-solid fa-user', 'Gender', 'gender', studentData.gender],
        ['fa-solid fa-users', 'Marital Status', 'maritalStatus', studentData.maritalStatus],
        ['fa-solid fa-droplet', 'Blood Type', 'bloodType', studentData.bloodType],
        ['fa-solid fa-location-dot', 'Address', 'address', studentData.address]
      ]
    },
    {
      title: 'Academic Information',
      data: [
        ['fa-solid fa-book-open', 'Program', 'program', studentData.program],
        ['fa-solid fa-graduation-cap', 'Faculty', 'faculty', studentData.faculty],
        ['fa-solid fa-clock', 'Current Semester', 'currentSemester', studentData.currentSemester],
        ['fa-solid fa-calendar', 'Year of Study', 'yearOfStudy', studentData.yearOfStudy],
        ['fa-solid fa-calendar', 'Intake Year', 'intakeYear', studentData.intakeYear],
        ['fa-solid fa-award', 'Expected Graduation', 'expectedGraduation', studentData.expectedGraduation],
        ['fa-solid fa-award', 'CGPA', 'cgpa', studentData.cgpa],
        ['fa-solid fa-shield', 'Academic Status', 'academicStatus', studentData.academicStatus],
        ['fa-solid fa-id-card', 'Matric Number', 'studentId', studentData.studentId, true]
      ]
    },
    {
      title: 'Additional Information',
      data: [
        ['fa-solid fa-phone', 'Emergency Contact', 'emergencyContact', studentData.emergencyContact],
        ['fa-solid fa-heart', 'Allergies', 'allergies', studentData.allergies],
        ['fa-solid fa-location-dot', 'Campus', 'campus', studentData.campus],
        ['fa-solid fa-location-dot', 'Hostel', 'hostel', studentData.hostel],
        ['fa-solid fa-book-open', 'Library Card No.', 'libraryCardNo', studentData.libraryCardNo],
        ['fa-solid fa-credit-card', 'Sponsorship', 'sponsorship', studentData.sponsorship],
        ['fa-solid fa-credit-card', 'Fee Status', 'feeStatus', studentData.feeStatus]
      ]
    }
  ];

  sections.forEach(section => {
    const sectionEl = document.createElement('section');
    sectionEl.innerHTML = `<h3>${section.title}</h3>`;
    const grid = document.createElement('div');
    grid.className = 'info-grid';
    section.data.forEach(item => grid.appendChild(createInfoCard(...item)));
    sectionEl.appendChild(grid);
    profileMain.appendChild(sectionEl);
  });

  // =====================
  // EDIT / SAVE
  // =====================
  editBtn.addEventListener('click', () => {
    document.querySelectorAll('.info-card input').forEach(input => {
      if (!input.classList.contains('locked')) input.disabled = false;
    });
    editBtn.style.display = 'none';
    saveBtn.style.display = 'inline';
  });

  saveBtn.addEventListener('click', () => {
    document.querySelectorAll('.info-card input').forEach(input => {
      const key = input.dataset.key;
      if (!input.classList.contains('locked')) {
        studentData[key] = input.value.trim();
      }
    });

    localStorage.setItem('userData', JSON.stringify(studentData));

    alert('Profile updated');
    location.reload();
  });
}
