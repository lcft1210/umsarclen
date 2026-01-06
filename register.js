const form = document.getElementById('registerForm');
const errorBox = document.getElementById('error');
const closeBtn = document.getElementById('closeBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  errorBox.classList.add('hidden');
  errorBox.textContent = '';

  const fullName = document.getElementById('fullName').value.trim();
  const studentId = document.getElementById('studentId').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;

  if (password !== confirm) {
    errorBox.textContent = 'Passwords do not match';
    errorBox.classList.remove('hidden');
    return;
  }

  try {
    const user = registerUser({ fullName, studentId, email, phone, password });
    setLoginState(true);
    saveUserData(user);

    // redirect after registration
    window.location.href = 'profile.html';
  } catch (err) {
    errorBox.textContent = err.message || 'Registration failed';
    errorBox.classList.remove('hidden');
  }
});

closeBtn.addEventListener('click', () => {
  window.location.href = 'login.html';
});
