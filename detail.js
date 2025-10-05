// Detail page controller
class DetailPageController {
    constructor() {
        this.currentType = null;
        this.currentId = null;
        this.init();
    }

    init() {
        // Get type and ID from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        this.currentType = urlParams.get('type'); // 'physicist' or 'formula'
        this.currentId = urlParams.get('id');

        if (this.currentType && this.currentId) {
            this.loadContent();
        } else {
            this.showError('Parameter error');
        }

        // Initialize search functionality
        this.initSearch();
    }

    loadContent() {
        if (this.currentType === 'physicist') {
            this.loadPhysicistDetail();
        } else if (this.currentType === 'formula') {
            this.loadFormulaDetail();
        }
    }

    loadPhysicistDetail() {
        const physicist = KNOWLEDGE_BASE.physicists[this.currentId];
        if (!physicist) {
            this.showError('Physicist not found');
            return;
        }

        // Update breadcrumb
        document.getElementById('breadcrumbCategory').textContent = 'Physicists';
        document.getElementById('breadcrumbName').textContent = physicist.name;
        document.title = `${physicist.name} - Physics Legends`;

        // Generate content
        const content = `
            <div class="physicist-detail">
                <div class="physicist-header">
                    <div class="physicist-image">
                        <img src="${physicist.image}" alt="${physicist.name}">
                    </div>
                    <div class="physicist-info">
                        <h1>${physicist.name}</h1>
                        <div class="physicist-meta">
                            <span class="meta-item">&#128197; ${physicist.years}</span>
                            <span class="meta-item">&#128300; ${physicist.field}</span>
                            <span class="meta-item">&#127757; ${physicist.nationality}</span>
                        </div>
                        <div class="physicist-bio">
                            ${physicist.biography}
                        </div>
                    </div>
                </div>

                <div class="achievements-section">
                    <h3><i class="fas fa-trophy"></i> Major Achievements</h3>
                    <div class="achievements-list">
                        ${physicist.achievements.map(achievement => `
                            <div class="achievement-item">
                                <i class="fas fa-star"></i> ${achievement}
                            </div>
                        `).join('')}
                    </div>
                </div>

                ${physicist.quotes ? `
                    <div class="quotes-section">
                        <h3><i class="fas fa-quote-left"></i> Famous Quotes</h3>
                        <div class="quotes-list">
                            ${physicist.quotes.map(quote => `
                                <blockquote class="quote-item">
                                    <p>"${quote}"</p>
                                    <cite>- ${physicist.name}</cite>
                                </blockquote>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${physicist.timeline ? `
                    <div class="timeline-section">
                        <h3><i class="fas fa-clock"></i> Life Timeline</h3>
                        <div class="timeline">
                            ${physicist.timeline.map(event => `
                                <div class="timeline-item">
                                    <div class="timeline-year">${event.year}</div>
                                    <div class="timeline-content">
                                        <h4>${event.title}</h4>
                                        <p>${event.description}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;

        document.getElementById('detailContent').innerHTML = content;

        // Load related formulas
        this.loadRelatedFormulas(physicist.relatedFormulas);
    }

    loadFormulaDetail() {
        const formula = KNOWLEDGE_BASE.formulas[this.currentId];
        if (!formula) {
            this.showError('Formula not found');
            return;
        }

        // Update breadcrumb
        document.getElementById('breadcrumbCategory').textContent = 'Formulas';
        document.getElementById('breadcrumbName').textContent = formula.name;
        document.title = `${formula.name} - Physics Legends`;

        // Generate content
        const content = `
            <div class="formula-detail">
                <div class="formula-header">
                    <div class="formula-display">${formula.formula}</div>
                    <div class="formula-name">${formula.name}</div>
                    <div class="formula-meta">
                        Discoverer: ${KNOWLEDGE_BASE.physicists[formula.discoverer]?.name || formula.discoverer} | 
                        Year: ${formula.year} | 
                        Field: ${formula.field}
                    </div>
                </div>

                <div class="description-section">
                    <h3><i class="fas fa-info-circle"></i> Formula Description</h3>
                    <p class="formula-description">${formula.description}</p>
                    <p class="formula-meaning">${formula.explanation.meaning}</p>
                </div>

                <div class="variables-section">
                    <h3><i class="fas fa-calculator"></i> Variable Definitions</h3>
                    <div class="variables-grid">
                        ${Object.entries(formula.explanation.variables).map(([symbol, meaning]) => `
                            <div class="variable-item">
                                <div class="variable-symbol">${symbol}</div>
                                <div class="variable-name">${meaning}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="applications-section">
                    <h3><i class="fas fa-cogs"></i> Applications</h3>
                    <div class="applications-list">
                        ${formula.explanation.applications.map(app => `
                            <span class="application-tag">${app}</span>
                        `).join('')}
                    </div>
                </div>

                ${formula.examples ? `
                    <div class="examples-section">
                        <h3><i class="fas fa-lightbulb"></i> Practical Examples</h3>
                        <div class="examples-grid">
                            ${formula.examples.map(example => `
                                <div class="example-card">
                                    <div class="example-title">${example.title}</div>
                                    <div class="example-description">${example.description}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;

        document.getElementById('detailContent').innerHTML = content;

        // Load related physicist
        this.loadRelatedPhysicist(formula.discoverer);
    }

    loadRelatedFormulas(formulaIds) {
        if (!formulaIds || formulaIds.length === 0) return;

        const relatedContent = formulaIds.map(id => {
            const formula = KNOWLEDGE_BASE.formulas[id];
            if (!formula) return '';

            return `
                <a href="detail.html?type=formula&id=${id}" class="related-card">
                    <h4>${formula.name}</h4>
                    <div class="formula-preview">${formula.formula}</div>
                    <p>${formula.description}</p>
                </a>
            `;
        }).join('');

        if (relatedContent) {
            document.getElementById('relatedContent').innerHTML = `
                <h3><i class="fas fa-link"></i> Related Formulas</h3>
                <div class="related-grid">
                    ${relatedContent}
                </div>
            `;
        }
    }

    loadRelatedPhysicist(physicistId) {
        const physicist = KNOWLEDGE_BASE.physicists[physicistId];
        if (!physicist) return;

        const relatedContent = `
            <a href="detail.html?type=physicist&id=${physicistId}" class="related-card">
                <div class="physicist-card-image">
                    <img src="${physicist.image}" alt="${physicist.name}">
                </div>
                <div class="physicist-card-info">
                    <h4>${physicist.name}</h4>
                    <p class="physicist-years">${physicist.years}</p>
                    <p class="physicist-field">${physicist.field}</p>
                    <p class="physicist-bio-short">${physicist.biography.substring(0, 100)}...</p>
                </div>
            </a>
        `;

        document.getElementById('relatedContent').innerHTML = `
            <h3><i class="fas fa-user"></i> Related Physicist</h3>
            <div class="related-grid">
                ${relatedContent}
            </div>
        `;
    }

    initSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }

            const results = this.performSearch(query);
            this.displaySearchResults(results);
        });

        // Hide search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchResults.style.display = 'none';
            }
        });
    }

    performSearch(query) {
        const results = [];

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

    displaySearchResults(results) {
        const searchResults = document.getElementById('searchResults');
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No results found</div>';
        } else {
            searchResults.innerHTML = results.map(result => `
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
        
        searchResults.style.display = 'block';
    }

    showError(message) {
        document.getElementById('detailContent').innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Error</h3>
                <p>${message}</p>
                <a href="index.html" class="btn-primary">Return to Home</a>
            </div>
        `;
    }
}

// Global functions
function navigateToResult(type, id) {
    window.location.href = `detail.html?type=${type}&id=${id}`;
}

// Initialize controller when page loads
document.addEventListener('DOMContentLoaded', () => {
    new DetailPageController();
});