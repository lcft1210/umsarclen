// ===== PARTICLE BACKGROUND =====
const PARTICLE_COUNT = 80;
const container = document.querySelector('.particles');
const particles = [];

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const el = document.createElement('div');
  el.className = 'particle';
  const particle = {
    el,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    speed: Math.random() * 2 + 1
  };
  el.style.left = particle.x + 'px';
  el.style.top = particle.y + 'px';
  container.appendChild(el);
  particles.push(particle);
}

function animate() {
  particles.forEach(p => {
    p.y -= p.speed;
    if (p.y < -10) {
      p.y = window.innerHeight + 10;
      p.x = Math.random() * window.innerWidth;
    }
    p.el.style.transform = `translate(${p.x}px, ${p.y}px)`;
  });
  requestAnimationFrame(animate);
}

animate();

// ===== TITLE LETTER ANIMATION =====
const title = document.getElementById("title");
const text = title.textContent;
title.textContent = "";

// Wrap each letter in a span
text.split("").forEach(char => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char;
  span.style.display = "inline-block";
  span.style.transition = "transform 0.2s ease";
  title.appendChild(span);
});

// Animate letters entry
gsap.fromTo(
  "#title span",
  { y: -50, opacity: 0 },
  { 
    y: 0, 
    opacity: 1, 
    stagger: 0.05,
    duration: 0.8,
    ease: "power3.out"
  }
);

// Subtitle fade-in
gsap.from(".subtitle", { opacity: 0, delay: 0.3, duration: 0.8 });

// Cards animation
gsap.from(".card", {
  opacity: 0,
  scale: 0.8,
  stagger: 0.15,
  delay: 0.6
});

// ===== INTERACTIVE HOVER EFFECT =====
title.addEventListener("mousemove", e => {
  const rect = title.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  title.querySelectorAll("span").forEach(span => {
    const spanRect = span.getBoundingClientRect();
    const spanX = spanRect.left - rect.left + spanRect.width / 2;
    const spanY = spanRect.top - rect.top + spanRect.height / 2;

    const dx = mouseX - spanX;
    const dy = mouseY - spanY;
    const distance = Math.sqrt(dx*dx + dy*dy);

    if (distance < 100) {
      const power = (100 - distance) / 100;
      span.style.transform = `translate(${dx*0.2*power}px, ${dy*0.2*power}px) scale(${1 + 0.5*power})`;
    } else {
      span.style.transform = "translate(0px,0px) scale(1)";
    }
  });
});

// Reset on mouse leave
title.addEventListener("mouseleave", () => {
  title.querySelectorAll("span").forEach(span => {
    span.style.transform = "translate(0px,0px) scale(1)";
  });
});

// =====================
// Header Login State
// =====================
function updateHeaderLoginState() {
  const loginBtn = document.getElementById('loginBtn');
  const profileName = document.getElementById('profileName');
  const user = getUserData();
  const loggedIn = isUserLoggedIn();

  if (loggedIn && user) {
    profileName.textContent = user.fullName;
    profileName.style.display = 'inline';
    loginBtn.style.display = 'none';
  } else {
    loginBtn.style.display = 'inline';
    profileName.style.display = 'none';
  }
}

// Run on page load and browser back
document.addEventListener('DOMContentLoaded', updateHeaderLoginState);
window.addEventListener('pageshow', updateHeaderLoginState);

// Login/Profile button handlers
document.getElementById('loginBtn')?.addEventListener('click', () => {
  window.location.href = 'login.html';
});

document.getElementById('profileName')?.addEventListener('click', () => {
  window.location.href = 'profile.html';
});
