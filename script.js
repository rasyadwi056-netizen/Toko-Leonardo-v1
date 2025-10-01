const form = document.getElementById('topupForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function(e){
    e.preventDefault();
    successMsg.textContent = "Top-Up berhasil! Terima kasih sudah menggunakan Top-Up Leonardo 🎮💰";
    form.reset();
});
