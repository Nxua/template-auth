// Mobile nav
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:absolute;top:64px;left:0;right:0;background:rgba(250,250,250,.98);padding:1rem 5%;gap:1rem;border-bottom:1px solid #e2e8f0;z-index:99;';
  });
}

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; } });
}, { threshold: 0.1 });

document.querySelectorAll('.feat-card, .price-card, .stat-card').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(16px)'; el.style.transition = 'opacity .45s ease, transform .45s ease';
  observer.observe(el);
});

// Form submit
document.querySelectorAll('button.btn-primary').forEach(btn => {
  if (btn.closest('form') || btn.closest('.contact-form') || btn.textContent.includes('Send')) {
    btn.addEventListener('click', () => {
      const inputs = document.querySelectorAll('input[type="email"]');
      if (inputs.length > 0 && !inputs[0].value.includes('@')) {
        inputs[0].style.borderColor = 'var(--error)';
        setTimeout(() => inputs[0].style.borderColor = '', 2000);
        return;
      }
      btn.textContent = '✓ Message sent!';
      btn.style.background = 'var(--success)';
      setTimeout(() => { btn.textContent = 'Send Message →'; btn.style.background = ''; }, 3000);
    });
  }
});

// Auth form — login button
const loginBtn = document.querySelector('.auth-card .btn-primary');
if (loginBtn && window.location.href.includes('login')) {
  loginBtn.addEventListener('click', () => {
    window.location.href = 'dashboard.html';
  });
}
