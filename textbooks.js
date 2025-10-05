// Textbook Library Controller
class TextbooksController {
    constructor() {
        this.currentFilter = {
            category: '',
            level: '',
            sort: 'rating',
            search: ''
        }
        this.init();
    }



    init() {
        console.log('TextbooksController initializing...');
        console.log('TEXTBOOKS_DATABASE:', TEXTBOOKS_DATABASE);
        this.renderTextbooks();
        this.initEventListeners();
        this.updateStats();
    }

    initEventListeners() {
        // Filter events
        const categoryFilter = document.getElementById('categoryFilter');
        const levelFilter = document.getElementById('levelFilter');
        const sortFilter = document.getElementById('sortFilter');
        const searchInput = document.getElementById('searchInput');
        const uploadForm = document.getElementById('uploadForm');

        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.currentFilter.category = e.target.value;
                this.renderTextbooks();
            });
        }

        if (levelFilter) {
            levelFilter.addEventListener('change', (e) => {
                this.currentFilter.level = e.target.value;
                this.renderTextbooks();
            });
        }

        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                this.currentFilter.sort = e.target.value;
                this.renderTextbooks();
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.currentFilter.search = e.target.value.toLowerCase();
                this.renderTextbooks();
            });
        }

        if (uploadForm) {
            uploadForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleUpload();
            });
        }
    }

    renderTextbooks() {
        console.log('Rendering textbooks...');
        const grid = document.getElementById('textbooksGrid');
        const filteredTextbooks = this.getFilteredTextbooks();
        
        console.log('Filtered textbooks:', filteredTextbooks);
        
        if (filteredTextbooks.length === 0) {
            grid.innerHTML = '<div class="no-results">No textbooks found matching your criteria.</div>';
            return;
        }

        grid.innerHTML = filteredTextbooks.map(textbook => this.createTextbookCard(textbook)).join('');
    }

    getFilteredTextbooks() {
        let textbooks = Object.values(TEXTBOOKS_DATABASE.textbooks);
        console.log('All textbooks:', textbooks);
        
        // Apply filters
        if (this.currentFilter.category) {
            textbooks = textbooks.filter(book => book.category === this.currentFilter.category);
        }
        
        if (this.currentFilter.level) {
            textbooks = textbooks.filter(book => book.level === this.currentFilter.level);
        }
        
        if (this.currentFilter.search) {
            textbooks = textbooks.filter(book => 
                book.title.toLowerCase().includes(this.currentFilter.search) ||
                book.author.toLowerCase().includes(this.currentFilter.search) ||
                book.description.toLowerCase().includes(this.currentFilter.search)
            );
        }
        
        // Apply sorting
        textbooks.sort((a, b) => {
            switch (this.currentFilter.sort) {
                case 'rating':
                    return b.rating - a.rating;
                case 'downloads':
                    return b.downloads - a.downloads;
                case 'year':
                    return b.publishYear - a.publishYear;
                case 'title':
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });
        
        return textbooks;
    }

    createTextbookCard(textbook) {
        return `
            <div class="textbook-card" onclick="openTextbook('${textbook.id}')">
                <div class="book-cover">
                    <img src="${textbook.cover}" alt="${textbook.title}" onerror="this.src='https://via.placeholder.com/300x400/cccccc/ffffff?text=No+Image'">
                    <div class="book-overlay">
                        <div class="overlay-content">
                            <i class="fas fa-eye"></i>
                            <span>Read Online</span>
                        </div>
                    </div>
                </div>
                <div class="book-info">
                    <h3 class="book-title">${textbook.title}</h3>
                    <p class="book-author">by ${textbook.author}</p>
                    <div class="book-meta">
                        <span class="category-tag">${textbook.category}</span>
                        <span class="level-badge ${textbook.level.toLowerCase()}">${textbook.level}</span>
                    </div>
                    <div class="book-stats">
                        <div class="rating">
                            ${this.generateStars(textbook.rating)}
                            <span class="rating-value">${textbook.rating}</span>
                        </div>
                        <div class="downloads">
                            <i class="fas fa-download"></i>
                            <span>${this.formatNumber(textbook.downloads)}</span>
                        </div>
                    </div>
                    <div class="book-details">
                        <span class="pages">${textbook.pages} pages</span>
                        <span class="year">${textbook.publishYear}</span>
                        ${this.getDifficultyBadge(textbook.difficulty)}
                    </div>
                </div>
            </div>
        `;
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        let stars = '';
        
        // Full stars
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        // Half star
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }

    getDifficultyBadge(difficulty) {
        const levels = ['Beginner', 'Easy', 'Intermediate', 'Advanced', 'Expert'];
        const colors = ['green', 'blue', 'yellow', 'orange', 'red'];
        return `<span class="difficulty-badge ${colors[difficulty-1]}">${levels[difficulty-1]}</span>`;
    }

    formatNumber(num) {
        return num >= 1000 ? (num/1000).toFixed(1) + 'K' : num.toString();
    }

    updateStats() {
        const totalBooks = Object.keys(TEXTBOOKS_DATABASE.textbooks).length;
        const totalDownloads = Object.values(TEXTBOOKS_DATABASE.textbooks)
            .reduce((sum, book) => sum + book.downloads, 0);
        
        document.getElementById('totalBooks').textContent = totalBooks;
        document.getElementById('totalDownloads').textContent = this.formatNumber(totalDownloads);
    }

    handleUpload() {
        const formData = new FormData(document.getElementById('uploadForm'));
        
        // Validate form
        const title = formData.get('title');
        const author = formData.get('author');
        const category = formData.get('category');
        const level = formData.get('level');
        const file = formData.get('file');
        
        if (!title || !author || !category || !level || !file) {
            alert('Please fill in all required fields and select a PDF file.');
            return;
        }
        
        // Check file type
        if (file.type !== 'application/pdf') {
            alert('Please select a PDF file.');
            return;
        }
        
        // 移除文件大小限制 - 支持任意大小的PDF文件
        // Check file size (50MB limit) - REMOVED to support large textbooks
        // if (file.size > 50 * 1024 * 1024) {
        //     alert('File size must be less than 50MB.');
        //     return;
        // }
        
        // Simulate upload process
        this.showUploadProgress();
        
        // In a real application, you would send this to your server
        setTimeout(() => {
            this.completeUpload(formData);
        }, 3000);
    }

    showUploadProgress() {
        const modal = document.querySelector('.modal-content');
        modal.innerHTML = `
            <div class="upload-progress">
                <div class="progress-header">
                    <i class="fas fa-upload"></i>
                    <h3>Uploading Textbook...</h3>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
                <div class="progress-steps">
                    <div class="step active">
                        <i class="fas fa-file-upload"></i>
                        <span>Uploading file</span>
                    </div>
                    <div class="step">
                        <i class="fas fa-cogs"></i>
                        <span>Processing PDF</span>
                    </div>
                    <div class="step">
                        <i class="fas fa-check"></i>
                        <span>Finalizing</span>
                    </div>
                </div>
                <div class="progress-info">
                    <p>Please wait while we process your textbook...</p>
                </div>
            </div>
        `;

        // Animate progress bar
        const progressFill = document.querySelector('.progress-fill');
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            progressFill.style.width = progress + '%';
            
            // Update steps
            if (progress > 30) {
                document.querySelectorAll('.step')[1].classList.add('active');
            }
            if (progress > 70) {
                document.querySelectorAll('.step')[2].classList.add('active');
            }
            
            if (progress >= 100) {
                clearInterval(interval);
            }
        }, 100);
    }

    completeUpload(formData) {
        // Create new textbook entry
        const newId = 'user-upload-' + Date.now();
        const newTextbook = {
            id: newId,
            title: formData.get('title'),
            author: formData.get('author'),
            description: formData.get('description') || 'User uploaded textbook',
            category: formData.get('category'),
            level: formData.get('level'),
            difficulty: 3, // Default difficulty
            pages: 0, // Would be determined after processing
            publishYear: new Date().getFullYear(),
            rating: 0,
            downloads: 0,
            cover: 'https://via.placeholder.com/300x400/667eea/ffffff?text=' + encodeURIComponent(formData.get('title')),
            pdfPath: 'uploads/' + formData.get('file').name,
            language: 'English'
        };

        // Add to database (in real app, this would be sent to server)
        TEXTBOOKS_DATABASE.textbooks[newId] = newTextbook;

        // Show success message
        const modal = document.querySelector('.modal-content');
        modal.innerHTML = `
            <div class="upload-success">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Upload Successful!</h3>
                <p>Your textbook "${newTextbook.title}" has been uploaded successfully.</p>
                <div class="upload-details">
                    <p><strong>Title:</strong> ${newTextbook.title}</p>
                    <p><strong>Author:</strong> ${newTextbook.author}</p>
                    <p><strong>Category:</strong> ${newTextbook.category}</p>
                    <p><strong>Level:</strong> ${newTextbook.level}</p>
                </div>
                <div class="success-actions">
                    <button onclick="openTextbook('${newId}')" class="btn-primary">
                        <i class="fas fa-eye"></i> View Textbook
                    </button>
                    <button onclick="uploadAnother()" class="btn-secondary">
                        <i class="fas fa-plus"></i> Upload Another
                    </button>
                    <button onclick="closeUploadModal()" class="btn-secondary">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
            </div>
        `;

        // Refresh the textbooks grid
        this.renderTextbooks();
        this.updateStats();
    }
}

// Global functions
function openTextbook(textbookId) {
    window.location.href = `textbook-reader.html?id=${textbookId}`;
}

function openUploadModal() {
    document.getElementById('uploadModal').style.display = 'block';
}

function closeUploadModal() {
    document.getElementById('uploadModal').style.display = 'none';
    // Reset form
    document.getElementById('uploadForm').reset();
}

function uploadAnother() {
    // Reset form and stay in modal
    document.getElementById('uploadForm').reset();
    
    // Reset modal content
    const modal = document.querySelector('.modal-content');
    modal.innerHTML = `
        <div class="modal-header">
            <h3><i class="fas fa-upload"></i> Upload New Textbook</h3>
            <span class="close" onclick="closeUploadModal()">&times;</span>
        </div>
        <div class="modal-body">
            <form id="uploadForm" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="bookTitle">Textbook Title *</label>
                    <input type="text" id="bookTitle" name="title" required>
                </div>
                <div class="form-group">
                    <label for="bookAuthor">Author *</label>
                    <input type="text" id="bookAuthor" name="author" required>
                </div>
                <div class="form-group">
                    <label for="bookCategory">Category *</label>
                    <select id="bookCategory" name="category" required>
                        <option value="">Select Category</option>
                        <option value="Classical Mechanics">Classical Mechanics</option>
                        <option value="Quantum Physics">Quantum Physics</option>
                        <option value="Electromagnetism">Electromagnetism</option>
                        <option value="Thermodynamics">Thermodynamics</option>
                        <option value="Relativity">Relativity</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="bookLevel">Level *</label>
                    <select id="bookLevel" name="level" required>
                        <option value="">Select Level</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="bookDescription">Description</label>
                    <textarea id="bookDescription" name="description" rows="3" placeholder="Brief description of the textbook..."></textarea>
                </div>
                <div class="form-group">
                    <label for="bookFile">PDF File *</label>
                    <input type="file" id="bookFile" name="file" accept=".pdf" required>
                    <small>No file size limit - supports large textbooks</small>
                </div>
                <div class="form-group">
                    <label for="bookCover">Cover Image (optional)</label>
                    <input type="file" id="bookCover" name="cover" accept="image/*">
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn-secondary" onclick="closeUploadModal()">Cancel</button>
            <button type="submit" form="uploadForm" class="btn-primary">
                <i class="fas fa-upload"></i> Upload Textbook
            </button>
        </div>
    `;

    // Re-initialize event listeners for the new form
    document.getElementById('uploadForm').addEventListener('submit', (e) => {
        e.preventDefault();
        window.textbooksController.handleUpload();
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('uploadModal');
    if (event.target === modal) {
        closeUploadModal();
    }
}

// Initialize controller when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.textbooksController = new TextbooksController();
});