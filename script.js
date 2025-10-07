// Physics Legends - Main JavaScript File

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Initialize statistics counter
    initStatsCounter();
    
    // Initialize knowledge base navigation
    initKnowledgeBase();
    
    // Initialize search functionality
    initSearch();
    
    // Initialize knowledge base navigation
    initKnowledgeBaseNavigation();
});

// Animation initialization
function initAnimations() {
    // Fade in animation for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            hero.style.transition = 'all 0.8s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Staggered animation for feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + index * 100);
    });
}

// Statistics counter animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (target.toString().includes('+') ? '+' : '');
        }, 20);
    };
    
    // Intersection Observer for triggering animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    stats.forEach(stat => {
        observer.observe(stat);
    });
}

// Initialize knowledge base navigation
function initKnowledgeBase() {
    // Initialize knowledge base navigation
    initKnowledgeBaseNavigation();
}

// Knowledge base navigation functionality
function initKnowledgeBaseNavigation() {
    // Add knowledge base navigation functionality
    
    // Add click events for physicist cards
    const physicistCards = document.querySelectorAll('.physicist-card');
    physicistCards.forEach(card => {
        card.addEventListener('click', function() {
            const physicistName = this.querySelector('h3').textContent;
            const physicistId = getPhysicistIdByName(physicistName);
            if (physicistId) {
                window.location.href = `detail.html?type=physicist&id=${physicistId}`;
            }
        });
    });
    
    // Add click events for formulas
    const formulaItems = document.querySelectorAll('.formula-item');
    formulaItems.forEach(item => {
        item.addEventListener('click', function() {
            const formulaName = this.querySelector('.formula-name').textContent;
            const formulaId = getFormulaIdByName(formulaName);
            if (formulaId) {
                window.location.href = `detail.html?type=formula&id=${formulaId}`;
            }
        });
    });
}

// Get physicist ID by name
function getPhysicistIdByName(name) {
    if (typeof KNOWLEDGE_BASE !== 'undefined') {
        for (const [id, physicist] of Object.entries(KNOWLEDGE_BASE.physicists)) {
            if (physicist.name === name) {
                return id;
            }
        }
    }
    return null;
}

// Get formula ID by name
function getFormulaIdByName(name) {
    if (typeof KNOWLEDGE_BASE !== 'undefined') {
        for (const [id, formula] of Object.entries(KNOWLEDGE_BASE.formulas)) {
            if (formula.name === name) {
                return id;
            }
        }
    }
    return null;
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput || !searchResults) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = performSearch(query);
        displaySearchResults(results, searchResults);
    });
    
    // Hide search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });
}

function performSearch(query) {
    const results = [];
    
    if (typeof KNOWLEDGE_BASE === 'undefined') return results;
    
    // Search physicists
    Object.entries(KNOWLEDGE_BASE.physicists).forEach(([id, physicist]) => {
        if (physicist.name.toLowerCase().includes(query) ||
            physicist.field.toLowerCase().includes(query) ||
            physicist.biography.toLowerCase().includes(query)) {
            results.push({
                type: 'physicist',
                id: id,
                title: physicist.name,
                subtitle: physicist.field,
                description: physicist.biography.substring(0, 100) + '...'
            });
        }
    });
    
    // Search formulas
    Object.entries(KNOWLEDGE_BASE.formulas).forEach(([id, formula]) => {
        if (formula.name.toLowerCase().includes(query) ||
            formula.description.toLowerCase().includes(query) ||
            formula.field.toLowerCase().includes(query)) {
            results.push({
                type: 'formula',
                id: id,
                title: formula.name,
                subtitle: formula.field,
                description: formula.description
            });
        }
    });
    
    return results.slice(0, 8); // Limit to 8 results
}

function displaySearchResults(results, container) {
    if (results.length === 0) {
        container.innerHTML = '<div class="no-results">No results found</div>';
    } else {
        container.innerHTML = results.map(result => `
            <div class="search-result-item" onclick="navigateToResult('${result.type}', '${result.id}')">
                <div class="result-icon">
                    <i class="fas ${result.type === 'physicist' ? 'fa-user' : 'fa-calculator'}"></i>
                </div>
                <div class="result-content">
                    <div class="result-title">${result.title}</div>
                    <div class="result-subtitle">${result.subtitle}</div>
                    <div class="result-description">${result.description}</div>
                </div>
            </div>
        `).join('');
    }
    
    container.style.display = 'block';
}

function navigateToResult(type, id) {
    window.location.href = `detail.html?type=${type}&id=${id}`;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize knowledge base navigation
initKnowledgeBaseNavigation();

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize knowledge base navigation
initKnowledgeBaseNavigation();