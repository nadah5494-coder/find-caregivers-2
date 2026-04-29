// ===== NAVBAR ACTIVE LINK =====
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// ===== BOOK BUTTON =====
function bookCaregiver(btn) {
  btn.textContent = 'Booked';
  btn.classList.add('booked');
  btn.disabled = true;
}

// ===== ADD PHOTO =====
function triggerUpload(placeholder) {
  placeholder.querySelector('input[type="file"]').click();
}

function previewPhoto(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    const placeholder = input.closest('.photo-placeholder');
    reader.onload = function (e) {
      placeholder.innerHTML = `<img src="${e.target.result}" alt="Caregiver photo"/>`;
    };
    reader.readAsDataURL(input.files[0]);
  }
}
