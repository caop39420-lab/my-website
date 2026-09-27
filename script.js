const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const otherView = document.getElementById('otherView');

// Mở giao diện khác khi bấm vào nút 3 gạch
menuBtn.addEventListener('click', () => {
  otherView.classList.add('active');
});

// Đóng giao diện khác để quay lại
closeBtn.addEventListener('click', () => {
  otherView.classList.remove('active');
});
