/* ================================
   User Data Structure (Reference)
   ================================ */
/*
UserData fields (for reference only):
{
  fullName,
  studentId, // BIxxxx or BGxxxx
  email,
  phone,
  password,
  program,
  faculty,
  currentSemester,
  yearOfStudy,
  intakeYear,
  expectedGraduation,
  cgpa,
  academicStatus,
  emergencyContact,
  bloodType,
  allergies,
  campus,
  hostel,
  matricNumber,
  libraryCardNo,
  sponsorship,
  feeStatus
}
*/

/* ================================
   localStorage keys
   ================================ */
const LS_USERS = 'ums_arclen_users';
const LS_CURRENT = 'ums_arclen_current';

/* ================================
   Helpers
   ================================ */
function readUsers() {
  const raw = localStorage.getItem(LS_USERS);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeUsers(users) {
  localStorage.setItem(LS_USERS, JSON.stringify(users));
}

/* ================================
   Register User
   ================================ */
function registerUser(user) {
  // studentId validation (BI / BG)
  if (!/^(BI|BG)/i.test(user.studentId)) {
    throw new Error('Student ID must start with BI or BG');
  }

  const users = readUsers();

  // duplicate studentId
  if (users.some(u => u.studentId.toUpperCase() === user.studentId.toUpperCase())) {
    throw new Error('Student ID already registered');
  }

  // duplicate email
  if (
    user.email &&
    users.some(u => u.email && u.email.toLowerCase() === user.email.toLowerCase())
  ) {
    throw new Error('Email already registered');
  }

  const newUser = {
    ...user,
    studentId: user.studentId.toUpperCase()
  };

  users.push(newUser);
  writeUsers(users);

  // auto-login
  localStorage.setItem(LS_CURRENT, JSON.stringify(newUser));
  setLoginState(true);

  return newUser;
}

/* ================================
   Authenticate User
   ================================ */
function authenticateUser(studentId, password) {
  const users = readUsers();

  const found = users.find(
    u =>
      u.studentId.toUpperCase() === studentId.toUpperCase() &&
      u.password === password
  );

  if (found) {
    localStorage.setItem(LS_CURRENT, JSON.stringify(found));
    setLoginState(true);
    return found;
  }

  return null;
}

/* ================================
   Login State Helpers
   ================================ */
function setLoginState(isLoggedIn) {
  localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
}

function isUserLoggedIn() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

/* ================================
   User Data Helpers
   ================================ */
function saveUserData(userData) {
  localStorage.setItem('userData', JSON.stringify(userData));
}

function getUserData() {
  const cur =
    localStorage.getItem(LS_CURRENT) ||
    localStorage.getItem('userData');

  if (!cur) return null;

  try {
    return JSON.parse(cur);
  } catch {
    return null;
  }
}

/* ================================
   Logout
   ================================ */
function logoutUser() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem(LS_CURRENT);
}
