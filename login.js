const form = document.getElementById('loginForm');
const errorBox = document.getElementById('error');
const closeBtn = document.getElementById('closeBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  errorBox.classList.add('hidden');
  errorBox.textContent = '';

  const studentId = document.getElementById('studentId').value.trim();
  const password = document.getElementById('password').value;

  const user = authenticateUser(studentId, password);

  if (user) {
    setLoginState(true);
    saveUserData(user);

    // redirect after login
    window.location.href = 'profile.html';
  } else {
    errorBox.textContent =
      'Invalid credentials. Make sure your Student ID starts with BI or BG and password is correct.';
    errorBox.classList.remove('hidden');
  }
});

closeBtn.addEventListener('click', () => {
  window.location.href = 'MainPage.html';
});
