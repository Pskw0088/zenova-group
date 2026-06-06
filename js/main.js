/* ========================================
   ZENOVA GROUP - Main JavaScript
   ======================================== */

'use strict';

// ======== PRELOADER ========
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('hidden');
      setTimeout(() => preloader.remove(), 600);
    }
  }, 1600);
});

// ======== NAVBAR ========
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

// Scroll handler
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
  updateActiveNav();
  animateOnScroll();
  animateCounters();
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Active nav link on scroll
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ======== SMOOTH SCROLL ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ======== TYPING ANIMATION ========
const typingEl = document.getElementById('typing-text');
const words = ['Digital Reality', 'Stunning Websites', 'E-Commerce Stores', 'Custom Solutions', 'Your Vision'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function typeWriter() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  typingTimeout = setTimeout(typeWriter, speed);
}

if (typingEl) {
  typeWriter();
}

// ======== PARTICLE SYSTEM ========
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const colors = ['#6C63FF', '#00D4AA', '#8b85ff', '#00b894', '#a78bfa'];
  const count = 25;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 5 + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 10;

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${left}%;
      bottom: -10px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    container.appendChild(particle);
  }
}
createParticles();

// ======== COUNTER ANIMATION ========
let countersStarted = false;

function animateCounters() {
  if (countersStarted) return;

  const counterSection = document.getElementById('hero');
  if (!counterSection) return;

  const rect = counterSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    countersStarted = true;
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 2000;
      const start = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }
}

// ======== AOS (Animate on Scroll) ========
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-aos]');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight - 80) {
      el.classList.add('aos-animate');
    }
  });
}

// Initial call
setTimeout(() => {
  animateOnScroll();
  animateCounters();
}, 300);

// ======== PORTFOLIO FILTER ========
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    portfolioCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = 'fadeIn 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Inject fadeIn keyframe
const style = document.createElement('style');
style.textContent = `@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(style);

// ======== TESTIMONIALS SLIDER ========
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.slider-dot');
const track = document.querySelector('.testimonials-track');
let autoSlideInterval;

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.getElementById('prev-slide')?.addEventListener('click', () => {
  stopAutoSlide();
  goToSlide(currentSlide - 1);
  startAutoSlide();
});

document.getElementById('next-slide')?.addEventListener('click', () => {
  stopAutoSlide();
  goToSlide(currentSlide + 1);
  startAutoSlide();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    stopAutoSlide();
    goToSlide(i);
    startAutoSlide();
  });
});

startAutoSlide();

// ======== FAQ ACCORDION ========
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Close all
    faqItems.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-answer').style.maxHeight = '0';
    });

    // Open clicked if was closed
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ======== CONTACT FORM VALIDATION ========
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    // Clear errors
    this.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

    // Validate fields
    const fields = [
      { id: 'name', rule: v => v.trim().length >= 2, msg: 'Please enter your full name.' },
      { id: 'email', rule: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Enter a valid email address.' },
      { id: 'phone', rule: v => /^[\+]?[\d\s\-\(\)]{7,15}$/.test(v.trim()), msg: 'Enter a valid phone number.' },
      { id: 'service', rule: v => v !== '', msg: 'Please select a service.' },
      { id: 'message', rule: v => v.trim().length >= 20, msg: 'Message must be at least 20 characters.' },
    ];

    fields.forEach(field => {
      const el = document.getElementById(field.id);
      if (!el) return;
      const group = el.closest('.form-group');
      const errEl = group ? group.querySelector('.form-error') : null;

      if (!field.rule(el.value)) {
        if (group) group.classList.add('error');
        if (errEl) errEl.textContent = field.msg;
        valid = false;
      }
    });

    if (valid) {
      const btn = this.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      const name = (document.getElementById('name')?.value || '').trim();
      const email = (document.getElementById('email')?.value || '').trim();
      const phone = (document.getElementById('phone')?.value || '').trim();
      const service = (document.getElementById('service')?.value || '').trim();
      const budget = (document.getElementById('budget')?.value || '').trim();
      const message = (document.getElementById('message')?.value || '').trim();

      const whatsappNumber = btn?.getAttribute('data-whatsapp-number') || '918595367745';
      const waBase = `https://wa.me/${whatsappNumber}`;

      const whatsappText = [
        'New lead from Zenova Group website!',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Mobile: ${phone}`,
        `Service: ${service}`,
        `Budget: ${budget}`,
        '',
        'Message:',
        message
      ].join('\n');

      const waUrl = `${waBase}?text=${encodeURIComponent(whatsappText)}`;

      // Optional UI feedback + then open WhatsApp
      setTimeout(() => {
        const success = document.getElementById('form-success');
        if (success) {
          success.style.display = 'block';
          success.textContent = '✅ Redirecting to WhatsApp...';
        }

        // reset immediately after opening
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        contactForm.reset();

        btn.textContent = 'Send Message';
        btn.disabled = false;

        setTimeout(() => {
          if (success) success.style.display = 'none';
        }, 3000);
      }, 400);
    }
  });
}

// ======== NEWSLETTER FORM ========
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('input');
    const btn = this.querySelector('button');
    if (input.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      btn.textContent = '✓';
      btn.style.background = '#00D4AA';
      input.value = '';
      setTimeout(() => {
        btn.textContent = '→';
        btn.style.background = '';
      }, 3000);
    }
  });
}

// ======== BACK TO TOP ========
const backToTop = document.getElementById('back-to-top');
backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ======== TOUCH SWIPE FOR TESTIMONIALS ========
let touchStartX = 0;
const testimonialWrapper = document.querySelector('.testimonials-wrapper');

if (testimonialWrapper) {
  testimonialWrapper.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  });

  testimonialWrapper.addEventListener('touchend', e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      stopAutoSlide();
      goToSlide(delta > 0 ? currentSlide + 1 : currentSlide - 1);
      startAutoSlide();
    }
  });
}
