// Textbooks Database
const TEXTBOOKS_DATABASE = {
    textbooks: {
        'classical-mechanics-goldstein': {
            id: 'classical-mechanics-goldstein',
            title: 'Classical Mechanics',
            author: 'Herbert Goldstein',
            description: 'A comprehensive treatment of classical mechanics, covering Lagrangian and Hamiltonian formulations, oscillations, and rigid body dynamics.',
            category: 'Classical Mechanics',
            level: 'Graduate',
            difficulty: 4,
            pages: 638,
            publishYear: 2001,
            rating: 4.6,
            downloads: 15420,
            cover: 'https://via.placeholder.com/300x400/667eea/ffffff?text=Classical+Mechanics',
            pdfPath: 'data/classical_mechanics_goldstein.pdf',
            language: 'English'
        },
        'analytical-mechanics': {
            id: 'analytical-mechanics',
            title: 'Analytical Mechanics (分析力学)',
            author: 'Various Authors',
            description: 'A comprehensive textbook on analytical mechanics covering Lagrangian mechanics, Hamiltonian mechanics, and advanced topics in classical dynamics.',
            category: 'Classical Mechanics',
            level: 'Graduate',
            difficulty: 4,
            pages: 456,
            publishYear: 2020,
            rating: 4.3,
            downloads: 8750,
            cover: 'https://via.placeholder.com/300x400/764ba2/ffffff?text=Analytical+Mechanics',
            pdfPath: 'data/分析力学(1).pdf',
            language: 'Chinese'
        },
        'quantum-mechanics-griffiths': {
            id: 'quantum-mechanics-griffiths',
            title: 'Introduction to Quantum Mechanics (3rd Edition)',
            author: 'David J. Griffiths',
            description: 'A clear and accessible introduction to quantum mechanics, covering wave functions, the Schr?dinger equation, and applications to atoms and molecules.',
            category: 'Quantum Physics',
            level: 'Undergraduate',
            difficulty: 3,
            pages: 468,
            publishYear: 2018,
            rating: 4.7,
            downloads: 23150,
            cover: 'https://via.placeholder.com/300x400/40ba2e/ffffff?text=Quantum+Mechanics',
            pdfPath: 'data/量子力学概论 （翻译版 原书第3版） ([美]大卫·J.格里菲斯(David.J.Griffiths) etc.) (Z-Library).pdf',
            language: 'Chinese (Translation)'
        }
    },
    
    categories: [
        'All Categories',
        'Classical Mechanics',
        'Quantum Physics', 
        'Electromagnetism',
        'Thermodynamics',
        'Relativity',
        'Particle Physics',
        'Astrophysics'
    ],
    
    levels: [
        'All Levels',
        'Beginner',
        'Undergraduate',
        'Graduate',
        'Research'
    ],
    
    sortOptions: [
        { value: 'rating', label: 'Rating' },
        { value: 'downloads', label: 'Downloads' },
        { value: 'year', label: 'Publication Year' },
        { value: 'title', label: 'Title' }
    ]
};