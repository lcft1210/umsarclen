const adsContainer = document.getElementById('adsContainer');
const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const addForm = document.getElementById('addForm');
const newTitle = document.getElementById('newTitle');
const newContent = document.getElementById('newContent');
const backBtn = document.getElementById('backBtn');

// Load ads from localStorage or default
let ads = JSON.parse(localStorage.getItem('noticeAds')) || [
  {
    id: Date.now(),
    title: 'Campus Event - Cultural Night',
    content: 'Join us for an amazing cultural night on Dec 15th at the Main Hall. Free entry for all students!',
    date: '2025-11-28'
  },
  {
    id: Date.now()+1,
    title: 'Library Hours Extended',
    content: 'The library will be open 24/7 during exam week. Study rooms available for booking.',
    date: '2025-11-29'
  }
];

// Render ads
function renderAds() {
  adsContainer.innerHTML = '';
  if (ads.length === 0) {
    adsContainer.innerHTML = `<p style="color:#aaa;text-align:center;margin-top:50px;">No notices yet. Click "Add Notice" to get started!</p>`;
    return;
  }

  ads.forEach(ad => {
    const adDiv = document.createElement('div');
    adDiv.className = 'notice-card';
    adDiv.style.setProperty('--rand', Math.random());

    adDiv.innerHTML = `
      <button class="delete-btn">&times;</button>
      <h3>${ad.title}</h3>
      <p>${ad.content}</p>
      <p class="date">Posted: ${new Date(ad.date).toLocaleDateString()}</p>
    `;

    // Delete functionality
    adDiv.querySelector('.delete-btn').addEventListener('click', () => {
      ads = ads.filter(a => a.id !== ad.id);
      localStorage.setItem('noticeAds', JSON.stringify(ads));
      renderAds();
    });

    adsContainer.appendChild(adDiv);
  });
}

renderAds();

// Modal Open/Close
addBtn.addEventListener('click', () => modal.classList.add('active'));
modalClose.addEventListener('click', () => modal.classList.remove('active'));

// Add new notice
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newAd = {
    id: Date.now(),
    title: newTitle.value,
    content: newContent.value,
    date: new Date().toISOString()
  };
  ads.unshift(newAd);
  localStorage.setItem('noticeAds', JSON.stringify(ads));
  newTitle.value = '';
  newContent.value = '';
  modal.classList.remove('active');
  renderAds();
});

// Back button
backBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});
