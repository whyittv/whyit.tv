// WhyItTV - Main JavaScript
// Context over hype. Relevance over noise.

// Release schedule (11:59 PM CT Fridays)
const RELEASE_SCHEDULE = [
    { topic: 'sour-diesel', date: '2024-12-27T23:59:00-06:00', title: 'Sour Diesel' },
    { topic: 'nike', date: '2025-01-03T23:59:00-06:00', title: 'Nike' },
    { topic: 'levi-strauss', date: '2025-01-10T23:59:00-06:00', title: 'Levi Strauss' },
    { topic: 'chevrolet', date: '2025-01-17T23:59:00-06:00', title: 'Chevrolet' },
    { topic: 'coca-cola', date: '2025-01-24T23:59:00-06:00', title: 'Coca-Cola' },
    { topic: 'pepsi', date: '2025-01-31T23:59:00-06:00', title: 'Pepsi' },
    { topic: 'mcdonalds', date: '2025-02-07T23:59:00-06:00', title: "McDonald's" }
];

document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initMobileNav();
    initScrollEffects();
    initInfographicLightbox();
    initAutoUnlock();
});

// ===== Countdown Timer =====
function initCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (!daysEl) return;

    function getNextFriday() {
        const now = new Date();
        const friday = new Date();
        const daysUntilFriday = (5 - now.getDay() + 7) % 7;
        
        if (daysUntilFriday === 0 && now.getHours() >= 23 && now.getMinutes() >= 59) {
            friday.setDate(now.getDate() + 7);
        } else if (daysUntilFriday === 0) {
            friday.setDate(now.getDate());
        } else {
            friday.setDate(now.getDate() + daysUntilFriday);
        }
        
        friday.setHours(23, 59, 0, 0);
        return friday;
    }

    function updateCountdown() {
        const now = new Date();
        const target = getNextFriday();
        const diff = target - now;

        if (diff <= 0) {
            location.reload();
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

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

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            nav.style.background = 'rgba(5, 5, 8, 0.95)';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(5, 5, 8, 0.85)';
            nav.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.format-card, .upcoming-card, .promise-item').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Mobile nav styles
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-open .nav-links {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(5, 5, 8, 0.98);
            padding: var(--space-lg);
            gap: var(--space-md);
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }
        
        .nav-open .nav-social {
            display: flex !important;
            justify-content: center;
            position: absolute;
            top: calc(100% + 150px);
            left: 0;
            right: 0;
            background: rgba(5, 5, 8, 0.98);
            padding: var(--space-md);
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }
    }
`;
document.head.appendChild(style);

// ===== Infographic Lightbox =====
function initInfographicLightbox() {
    const infographicCards = document.querySelectorAll('.format-asset-infographic');
    
    if (!infographicCards.length) return;
    
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'infographic-modal';
    modal.innerHTML = `
        <button class="infographic-modal-close" aria-label="Close">&times;</button>
        <img src="" alt="Infographic full view">
    `;
    document.body.appendChild(modal);
    
    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.infographic-modal-close');
    
    // Add click handlers to infographic cards
    infographicCards.forEach(card => {
        const img = card.querySelector('img');
        if (!img) return;
        
        // Add hint element
        const hint = document.createElement('span');
        hint.className = 'infographic-hint';
        hint.textContent = 'Click to view full size';
        card.querySelector('.format-asset-image').appendChild(hint);
        
        card.addEventListener('click', function(e) {
            e.preventDefault();
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal handlers
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== Auto-Unlock System =====
function initAutoUnlock() {
    const now = new Date();
    
    // Find released and upcoming topics
    const released = RELEASE_SCHEDULE.filter(t => new Date(t.date) <= now);
    const upcoming = RELEASE_SCHEDULE.filter(t => new Date(t.date) > now);
    const nextUp = upcoming[0];
    
    // Update schedule page items
    document.querySelectorAll('.schedule-item[data-release]').forEach(item => {
        const releaseDate = new Date(item.dataset.release);
        const topicSlug = item.dataset.topic;
        const isReleased = releaseDate <= now;
        const isNext = nextUp && topicSlug === nextUp.topic;
        
        // Update classes
        item.classList.remove('schedule-item-past', 'schedule-item-next', 'schedule-item-future', 'schedule-item-locked');
        
        if (isReleased) {
            item.classList.add('schedule-item-past');
            
            // Update status badge
            const status = item.querySelector('.schedule-status');
            if (status) {
                status.textContent = 'Released';
                status.classList.remove('schedule-status-next', 'schedule-status-locked');
            }
            
            // Update format checkmarks
            item.querySelectorAll('.schedule-format').forEach(fmt => {
                fmt.classList.remove('schedule-format-pending');
                if (!fmt.textContent.startsWith('✓')) {
                    fmt.textContent = '✓ ' + fmt.textContent;
                }
            });
            
            // Add watch link if not present
            const content = item.querySelector('.schedule-content');
            if (content && !content.querySelector('.schedule-link')) {
                const link = document.createElement('a');
                link.href = '/topics/' + topicSlug + '.html';
                link.className = 'schedule-link';
                link.textContent = 'Watch Now →';
                content.appendChild(link);
            }
        } else if (isNext) {
            item.classList.add('schedule-item-next');
            
            const status = item.querySelector('.schedule-status');
            if (status) {
                status.textContent = 'Next Drop';
                status.classList.add('schedule-status-next');
                status.classList.remove('schedule-status-locked');
            }
        } else {
            item.classList.add('schedule-item-locked');
            
            const status = item.querySelector('.schedule-status');
            if (status) {
                status.textContent = 'Locked';
                status.classList.add('schedule-status-locked');
                status.classList.remove('schedule-status-next');
            }
        }
    });
    
    // Update topics page cards
    document.querySelectorAll('.topic-card[data-release]').forEach(card => {
        const releaseDate = new Date(card.dataset.release);
        const topicSlug = card.dataset.topic;
        const isReleased = releaseDate <= now;
        
        if (isReleased) {
            card.classList.add('topic-card-live');
            card.classList.remove('topic-card-locked');
            if (card.tagName === 'DIV') {
                // Convert to link
                const link = document.createElement('a');
                link.href = '/topics/' + topicSlug + '.html';
                link.className = card.className;
                link.innerHTML = card.innerHTML;
                card.parentNode.replaceChild(link, card);
            }
        } else {
            card.classList.add('topic-card-locked');
            card.classList.remove('topic-card-live');
        }
    });
    
    // Update homepage "Latest Drop" and "Coming Up" sections
    updateHomepage(released, upcoming);
}

function updateHomepage(released, upcoming) {
    // This function could dynamically update the homepage
    // For now, we'll rely on manual updates for the featured content
    // since it requires images and more complex markup
    
    // Update countdown to next release
    if (upcoming.length > 0) {
        const nextRelease = new Date(upcoming[0].date);
        // Countdown is already handled by initCountdown()
    }
}
