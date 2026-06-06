// Tailwind config
function initTailwind() {
  document.documentElement.style.setProperty('--accent', '#0A5C4A');
  
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          display: ['Playfair Display', 'Georgia', 'serif']
        }
      }
    }
  };
}

// Navbar scroll effect
function initNavbar() {
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 20) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
    
    lastScroll = currentScroll;
  }, { passive: true });
}

// Mobile menu
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    
    if (isOpen) {
      menu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      btn.setAttribute('aria-label', 'Open menu');
    } else {
      menu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      btn.setAttribute('aria-label', 'Close menu');
    }
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        const navHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Contact form handling (static)
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple validation already handled by required attrs
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="flex items-center justify-center gap-x-2">
        <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
        Sending...
      </span>
    `;

    // Simulate network request
    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Show toast
      toast.classList.remove('hidden');
      toast.classList.add('flex');

      // Hide toast after 5s
      setTimeout(() => {
        toast.classList.remove('flex');
        toast.classList.add('hidden');
      }, 5200);
    }, 1250);
  });
}

// Set current year in footer
function initFooterYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

// Keyboard accessibility: close mobile menu on Escape
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const menu = document.getElementById('mobile-menu');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');
      const btn = document.getElementById('mobile-menu-btn');

      if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        btn.setAttribute('aria-label', 'Open menu');
      }
    }
  });
}

// Subtle entrance animation for cards (optional premium touch)
function initCardAnimations() {
  const cards = document.querySelectorAll('.premium-card');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => {
      card.style.opacity = '0.98';
      card.style.transform = 'translateY(6px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(card);
    });
  }
}

// Main init
function init() {
  initTailwind();
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initContactForm();
  initFooterYear();
  initKeyboard();
  initCardAnimations();

  // Mark year immediately
  console.log('%c[AtlanticOxide] Modern single-page website initialized.', 'color:#64748b;font-size:9px');
}

// Boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}