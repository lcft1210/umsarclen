// Service data
const services = {
  counseling: {
    title: "Counseling",
    description: "Professional counseling services for students.",
    icon: "fa-comments",
    hours: "Monday – Sunday, 24 hours",
    contact: { email: "hums@ums.edu.my", phone: "+60 88-320 0000 (212300)" },
    link: "counseling.html",
    list: [
      "Personal counseling sessions",
      "Mental health support",
      "Academic stress guidance",
      "Confidential consultations"
    ]
  },

  "it-support": {
    title: "IT Support",
    description: "Technical assistance and system support.",
    icon: "fa-laptop",
    hours: "Monday – Friday, 8am – 5pm",
    contact: { email: "digital@ums.edu.my", phone: "+60 88-329 000" },
    link: "it-support.html",
    list: [
      "Network troubleshooting",
      "Software installation",
      "Account recovery",
      "Hardware assistance"
    ]
  },

  "financial-aid": {
    title: "Financial Aid",
    description: "Financial assistance and student aid services.",
    icon: "fa-dollar-sign",
    hours: "Monday – Friday, 9am – 4pm",
    contact: { email: "financialaid@ums.edu.my", phone: "+60 88-320 303" },
    link: "financial-aid.html",
    list: [
      "Scholarship applications",
      "Loan guidance",
      "Emergency funding",
      "Fee consultation"
    ]
  },

  "car-rental": {
    title: "Car Rental",
    description: "Vehicle rental services for students.",
    icon: "fa-car",
    hours: "Daily, 8am – 8pm",
    contact: { email: "carrental@ums.edu.my", phone: "+60 88-320 404" },
    link: "car-rental.html",
    list: [
      "Short-term rental",
      "Long-term rental",
      "Student discounts",
      "Insurance coverage"
    ]
  },

  tutoring: {
    title: "Tutoring",
    description: "Academic tutoring and learning support.",
    icon: "fa-book",
    hours: "Monday – Saturday, 10am – 6pm",
    contact: { email: "tutoring@ums.edu.my", phone: "+60 88-320 505" },
    link: "tutoring.html",
    list: [
      "Subject tutoring",
      "Exam preparation",
      "Group study sessions",
      "One-on-one mentoring"
    ]
  },

  "career-service": {
    title: "Career Service",
    description: "Career guidance and job placement support.",
    icon: "fa-briefcase",
    hours: "Monday – Friday, 9am – 5pm",
    contact: { email: "career@ums.edu.my", phone: "+60 88-320 606" },
    link: "https://ums.edu.my/pkpkp/",
    list: [
      "Resume review",
      "Interview coaching",
      "Internship placement",
      "Career counseling"
    ]
  },

  "peer-to-peer": {
    title: "Peer-to-Peer",
    description: "Connect with fellow students and share knowledge.",
    icon: "fa-users",
    hours: "Monday – Friday, 9am – 5pm",
    contact: { email: "peer@ums.edu.my", phone: "+60 88-320 707" },
    link: "peer-to-peer.html",
    list: [
      "Student networking",
      "Mentoring programs",
      "Knowledge sharing",
      "Peer guidance"
    ]
  }
};

// Get current service from URL
function getServiceFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("service") || "counseling";
}

const currentService = getServiceFromURL();
if (!services[currentService]) {
  window.location.href = "Service.html";
}

const data = services[currentService];

// Header
document.getElementById("header-title").innerText = data.title;
document.getElementById("header-icon").className = `fa-solid ${data.icon}`;

// Main icon
document.getElementById("main-icon").className = `fa-solid ${data.icon}`;

// Text
document.getElementById("service-title").innerText = data.title;
document.getElementById("service-description").innerText = data.description;
document.getElementById("service-hours").innerText = data.hours;

// Contact Info
document.getElementById("service-email").innerText = data.contact.email;
document.getElementById("service-phone").innerText = data.contact.phone;

// List
const listContainer = document.getElementById("service-list");
data.list.forEach(item => {
  const div = document.createElement("div");
  div.className = "service-item";
  div.innerHTML = `<div class="dot"></div><p>${item}</p>`;
  listContainer.appendChild(div);
});

// Contact Button
const contactBtn = document.getElementById("contactBtn");
contactBtn.onclick = () => {
  if (data.link) {
    window.location.href = data.link;
  } else {
    alert("No contact page available for this service.");
  }
};

// Back button
function goBack() {
  window.location.href = "Service.html";
}
