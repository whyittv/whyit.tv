// WhyItTV - Main JavaScript
// Context over hype. Relevance over noise.

document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initMobileNav();
    initScrollEffects();
});

// ===== Countdown Timer =====
function initCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;

    // Calculate next Friday at midnight (11:59 PM)
    function getNextFriday() {
        const now = new Date();
        const friday = new Date();
        
        // Get days until Friday (Friday is day 5)
        const daysUntilFriday = (5 - now.getDay() + 7) % 7;
        
        // If it's Friday and past midnight, get next Friday
        if (daysUntilFriday === 0 && now.getHours() >= 23 && now.getMinutes() >= 59) {
            friday.setDate(now.getDate() + 7);
        } else if (daysUntilFriday === 0) {
            // It's Friday but not yet 11:59 PM
            friday.setDate(now.getDate());
        } else {
            friday.setDate(now.getDate() + daysUntilFriday);
        }
        
        // Set to 11:59 PM
        friday.setHours(23, 59, 0, 0);
        
        return friday;
    }

    function updateCountdown() {
        const now = new Date();
        const target = getNextFriday();
        const diff = target - now;

        if (diff <= 0) {
            // Drop time! Refresh to show new content
            location.reload();
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== Mobile Navigation =====
function initMobileNav() {
    const toggle = document.querySelector('.nav-mobile-toggle');
    const nav = document.querySelector('.nav');
    
    if (!toggle) return;

    toggle.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
        
        // Animate hamburger to X
        const spans = toggle.querySelectorAll('span');
        if (nav.classList.contains('nav-open')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// ===== Scroll Effects =====
function initScrollEffects() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.format-card, .topic-card-featured, .promise-list li').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add visible class styles dynamically
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .nav-open .nav-links,
    .nav-open .nav-social {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: rgba(10, 10, 15, 0.98);
        padding: var(--space-lg);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .nav-open .nav-links {
        padding-bottom: var(--space-md);
    }
    
    .nav-open .nav-social {
        flex-direction: row;
        justify-content: center;
        top: auto;
        position: relative;
        border-bottom: none;
        padding-top: var(--space-md);
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
`;
document.head.appendChild(style);
