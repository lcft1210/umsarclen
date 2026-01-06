const form = document.getElementById('appointmentForm');
const formSection = document.getElementById('formSection');
const successSection = document.getElementById('successSection');
const details = document.getElementById('details');
const noticeBox = document.getElementById('noticeBox');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    name: Name.value,
    studentId: studentId.value,
    email: email.value,
    contact: contact.value,
    issue: issue.value,
    branch: branch.value,
    date: date.value,
    time: time.value
  };

  details.innerHTML = `
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Student ID:</strong> ${data.studentId}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Contact:</strong> ${data.contact}</p>
    <p><strong>Issue:</strong> ${data.issue}</p>
    <p><strong>Branch:</strong> ${data.branch}</p>
    <p><strong>Date:</strong> ${data.date}</p>
    <p><strong>Time:</strong> ${data.time}</p>
  `;

  noticeBox.innerHTML = `
  <p class="notice-main">
    Please come to the <strong>Psychology Department of Health Center</strong>
    at <strong>${data.branch}</strong>
    on <strong>${data.date}</strong>
    at <strong>${data.time}</strong>.
  </p>
  <p class="notice-sub">
    📧 A confirmation email has been sent to
    <strong>${data.email}</strong>
  </p>
  `;

  formSection.classList.add('hidden');
  successSection.classList.remove('hidden');
});

const backBtn = document.getElementById('back-btn');
backBtn.onclick = () => {
  // If success page is visible
  if (!successSection.classList.contains('hidden')) {
    // Go back to form
    successSection.classList.add('hidden');
    formSection.classList.remove('hidden');
  } else {
    // Otherwise, go back to Services page
    window.location.href = "Service.html";
  }
};

const backToServiceBtn = document.getElementById('backToService');
backToServiceBtn.onclick = () => {
  window.location.href = "Service.html";
};