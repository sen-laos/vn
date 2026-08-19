const DOWNLOAD_LINKS = {
  android: '', // ใส่ลิงก์ดาวน์โหลด Android/APK
  ios: ''      // ใส่ลิงก์ดาวน์โหลด iOS/App Store
};

const cards = [...document.querySelectorAll('.server')];
const refreshButton = document.getElementById('refreshServers');

function updateServers(manual = false) {
  if (manual) refreshButton.classList.add('loading');
  cards.forEach((card, index) => {
    const value = Number(card.dataset.base) + Math.floor(Math.random() * 9) - 4;
    const ping = card.querySelector('.ping');
    setTimeout(() => {
      ping.style.opacity = '0';
      setTimeout(() => {
        ping.textContent = value;
        ping.style.opacity = '1';
      }, 140);
    }, index * 60);
  });
  if (manual) setTimeout(() => refreshButton.classList.remove('loading'), 800);
}

refreshButton.addEventListener('click', () => updateServers(true));
(function scheduleUpdate(){
  setTimeout(() => { updateServers(); scheduleUpdate(); }, 2000 + Math.random() * 1000);
})();

