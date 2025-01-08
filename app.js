// Toggle Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
if (mobileMenu.classList.contains('hidden')) {
// Tampilkan menu
mobileMenu.classList.remove('hidden');
setTimeout(() => {
  mobileMenu.classList.remove('opacity-0');
  mobileMenu.classList.add('opacity-100');
}, 10); // Tambahkan sedikit delay agar transisi terlihat
} else {
// Sembunyikan menu
mobileMenu.classList.remove('opacity-100');
mobileMenu.classList.add('opacity-0');
setTimeout(() => {
  mobileMenu.classList.add('hidden');
}, 300); // Durasi harus sesuai dengan `duration-300` di Tailwind
}
});
