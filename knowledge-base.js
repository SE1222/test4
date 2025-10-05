// Physics Knowledge Base Data
const KNOWLEDGE_BASE = {
    physicists: {
        'einstein': {
            id: 'einstein',
            name: 'Albert Einstein',
            years: '1879 - 1955',
            field: 'Theoretical Physics',
            nationality: 'German-American',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/800px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
            biography: `Albert Einstein was one of the greatest physicists of the 20th century, known as the father of modern physics. His theory of relativity revolutionized our understanding of time, space, gravity, and the universe.`,
            achievements: [
                'Special Theory of Relativity (1905)',
                'General Theory of Relativity (1915)', 
                'Photoelectric Effect Theory (1905)',
                'Nobel Prize in Physics (1921)',
                'Mass-Energy Equivalence E=mc?'
            ],
            formulas: ['mass_energy_equivalence', 'lorentz_transformation'],
            quotes: [
                "Imagination is more important than knowledge.",
                "God does not play dice with the universe.",
                "Life is like riding a bicycle. To keep your balance, you must keep moving."
            ],
            timeline: [
                { year: 1879, title: 'Birth', description: 'Born in Ulm, Germany' },
                { year: 1905, title: 'Miracle Year', description: 'Published Special Theory of Relativity and photoelectric effect papers' },
                { year: 1915, title: 'General Relativity', description: 'Completed General Theory of Relativity' },
                { year: 1921, title: 'Nobel Prize', description: 'Awarded Nobel Prize in Physics for photoelectric effect' },
                { year: 1955, title: 'Death', description: 'Died in Princeton, USA' }
            ]
        },
        'newton': {
            id: 'newton',
            name: 'Isaac Newton',
            years: '1643 - 1727',
            field: 'Classical Mechanics',
            nationality: 'English',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/800px-GodfreyKneller-IsaacNewton-1689.jpg',
            biography: `Isaac Newton was an English physicist and mathematician, regarded as one of the greatest scientists in history. He established the foundations of classical mechanics and discovered the law of universal gravitation.`,
            achievements: [
                'Newton\'s Laws of Motion',
                'Law of Universal Gravitation',
                'Invention of Calculus',
                'Principia Mathematica',
                'Optics Research'
            ],
            formulas: ['newton_second_law', 'universal_gravitation'],
            quotes: [
                "If I have seen further it is by standing on the shoulders of Giants.",
                "I can calculate the motion of heavenly bodies, but not the madness of people.",
                "Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things."
            ],
            timeline: [
                { year: 1643, title: 'Birth', description: 'Born in Woolsthorpe, England' },
                { year: 1687, title: 'Principia', description: 'Published Principia Mathematica' },
                { year: 1705, title: 'Knighthood', description: 'Knighted by Queen Anne' },
                { year: 1727, title: 'Death', description: 'Died in London' }
            ]
        },
        'curie': {
            id: 'curie',
            name: 'Marie Curie',
            years: '1867 - 1934',
            field: 'Radioactivity',
            nationality: 'Polish-French',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/800px-Marie_Curie_c._1920s.jpg',
            biography: `Marie Curie was a Polish-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize and the only person to win Nobel Prizes in two different scientific fields.`,
            achievements: [
                'Discovery of Polonium and Radium',
                'Nobel Prize in Physics (1903)',
                'Nobel Prize in Chemistry (1911)',
                'First Female Professor at University of Paris',
                'Pioneering Research on Radioactivity'
            ],
            formulas: ['radioactive_decay'],
            quotes: [
                "Nothing in life is to be feared, it is only to be understood.",
                "I was taught that the way of progress was neither swift nor easy.",
                "Be less curious about people and more curious about ideas."
            ],
            timeline: [
                { year: 1867, title: 'Birth', description: 'Born in Warsaw, Poland' },
                { year: 1903, title: 'First Nobel', description: 'Won Nobel Prize in Physics' },
                { year: 1911, title: 'Second Nobel', description: 'Won Nobel Prize in Chemistry' },
                { year: 1934, title: 'Death', description: 'Died in France' }
            ]
        },
        'feynman': {
            id: 'feynman',
            name: 'Richard Feynman',
            years: '1918 - 1988',
            field: 'Quantum Physics',
            nationality: 'American',
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Richard_Feynman_Nobel.jpg/800px-Richard_Feynman_Nobel.jpg',
            biography: `Richard Feynman was an American theoretical physicist known for his work in quantum electrodynamics, for which he shared the Nobel Prize in Physics in 1965. He developed the Feynman diagrams, a pictorial representation scheme for the mathematical expressions governing the behavior of subatomic particles.`,
            achievements: [
                'Quantum Electrodynamics (QED)',
                'Feynman Diagrams',
                'Nobel Prize in Physics (1965)',
                'Manhattan Project Contribution',
                'Feynman Lectures on Physics'
            ],
            formulas: ['feynman_qed'],
            quotes: [
                "I would rather have questions that can't be answered than answers that can't be questioned.",
                "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
                "The first principle is that you must not fool yourself ¡ª and you are the easiest person to fool."
            ],
            timeline: [
                { year: 1918, title: 'Birth', description: 'Born in New York City' },
                { year: 1943, title: 'Manhattan Project', description: 'Joined the Manhattan Project at Los Alamos' },
                { year: 1948, title: 'QED Theory', description: 'Developed quantum electrodynamics theory' },
                { year: 1965, title: 'Nobel Prize', description: 'Won Nobel Prize in Physics for QED' },
                { year: 1988, title: 'Death', description: 'Died in Los Angeles' }
            ]
        },
        'hawking': {
            id: 'hawking',
            name: 'Stephen Hawking',
            years: '1942 - 2018',
            field: 'Cosmology',
            nationality: 'British',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/800px-Stephen_Hawking.StarChild.jpg',
            biography: `Stephen Hawking was a British theoretical physicist and cosmologist who made groundbreaking contributions to our understanding of black holes and the nature of the universe. Despite being diagnosed with ALS, he continued his research and became one of the most famous scientists of our time.`,
            achievements: [
                'Hawking Radiation Theory',
                'Black Hole Thermodynamics',
                'A Brief History of Time',
                'Singularity Theorems',
                'Hawking-Penrose Theorems'
            ],
            formulas: ['hawking_radiation'],
            quotes: [
                "Intelligence is the ability to adapt to change.",
                "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
                "We are just an advanced breed of monkeys on a minor planet of a very average star."
            ],
            timeline: [
                { year: 1942, title: 'Birth', description: 'Born in Oxford, England' },
                { year: 1963, title: 'ALS Diagnosis', description: 'Diagnosed with ALS at age 21' },
                { year: 1974, title: 'Hawking Radiation', description: 'Discovered Hawking Radiation theory' },
                { year: 1988, title: 'Popular Science', description: 'Published A Brief History of Time' },
                { year: 2018, title: 'Death', description: 'Died in Cambridge' }
            ]
        },
        'tesla': {
            id: 'tesla',
            name: 'Nikola Tesla',
            years: '1856 - 1943',
            field: 'Electromagnetism',
            nationality: 'Serbian-American',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/800px-Tesla_circa_1890.jpeg',
            biography: `Nikola Tesla was a Serbian-American inventor and electrical engineer who made numerous contributions to the development of alternating current (AC) electrical systems and wireless technology.`,
            achievements: [
                'AC Induction Motor',
                'Polyphase System',
                'Tesla Coil',
                'Wireless Power Transmission',
                'Radio Technology'
            ],
            formulas: ['electromagnetic_induction'],
            quotes: [
                "The present is theirs; the future, for which I really worked, is mine.",
                "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
                "Invention is the most important product of man's creative brain."
            ],
            timeline: [
                { year: 1856, title: 'Birth', description: 'Born in Smiljan, Croatia' },
                { year: 1884, title: 'Immigration', description: 'Immigrated to the United States' },
                { year: 1888, title: 'AC Motor', description: 'Invented AC Induction Motor' },
                { year: 1943, title: 'Death', description: 'Died in New York' }
            ]
        },
        'schrodinger': {
            id: 'schrodinger',
            name: 'Erwin Schr?dinger',
            years: '1887 - 1961',
            field: 'Quantum Mechanics',
            nationality: 'Austrian',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Erwin_Schr%C3%B6dinger_%281933%29.jpg/800px-Erwin_Schr%C3%B6dinger_%281933%29.jpg',
            biography: `Erwin Schr?dinger was an Austrian physicist who developed fundamental results in quantum theory. He is best known for the Schr?dinger equation and the famous thought experiment known as Schr?dinger's cat.`,
            achievements: [
                'Schr?dinger Equation',
                'Wave Mechanics',
                'Nobel Prize in Physics (1933)',
                'Schr?dinger\'s Cat Thought Experiment',
                'Quantum Entanglement Studies'
            ],
            formulas: ['schrodinger_equation'],
            quotes: [
                "The task is not so much to see what no one has yet seen, but to think what nobody has yet thought about that which everybody sees.",
                "Consciousness cannot be accounted for in physical terms.",
                "The scientist only imposes two things, namely truth and sincerity."
            ],
            timeline: [
                { year: 1887, title: 'Birth', description: 'Born in Vienna, Austria' },
                { year: 1926, title: 'Wave Equation', description: 'Formulated the Schr?dinger Equation' },
                { year: 1933, title: 'Nobel Prize', description: 'Won Nobel Prize in Physics' },
                { year: 1961, title: 'Death', description: 'Died in Vienna' }
            ]
        }
    },
    
    formulas: {
        'mass_energy_equivalence': {
            id: 'mass_energy_equivalence',
            name: 'Mass-Energy Equivalence',
            formula: 'E = mc?',
            discoverer: 'einstein',
            year: 1905,
            field: 'Special Relativity',
            description: 'Einstein\'s famous equation showing the equivalence of mass and energy.',
            explanation: {
                variables: {
                    'E': 'Energy (Joules)',
                    'm': 'Mass (kilograms)',
                    'c': 'Speed of light (m/s)'
                },
                meaning: 'This equation shows that mass and energy are interchangeable. A small amount of mass can be converted into a tremendous amount of energy.',
                applications: [
                    'Nuclear reactions',
                    'Particle physics',
                    'Stellar nucleosynthesis',
                    'Nuclear power generation'
                ]
            },
            examples: [
                {
                    title: 'Nuclear Fusion in the Sun',
                    description: 'The Sun converts about 4 million tons of mass into energy every second through nuclear fusion.'
                },
                {
                    title: 'Nuclear Power Plants',
                    description: 'Nuclear reactors use controlled fission reactions to convert small amounts of uranium mass into electrical energy.'
                }
            ]
        },
        'newton_second_law': {
            id: 'newton_second_law',
            name: 'Newton\'s Second Law',
            formula: 'F = ma',
            discoverer: 'newton',
            year: 1687,
            field: 'Classical Mechanics',
            description: 'The fundamental law relating force, mass, and acceleration.',
            explanation: {
                variables: {
                    'F': 'Force (Newtons)',
                    'm': 'Mass (kilograms)',
                    'a': 'Acceleration (m/s?)'
                },
                meaning: 'The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.',
                applications: [
                    'Vehicle dynamics',
                    'Rocket propulsion',
                    'Sports biomechanics',
                    'Engineering design'
                ]
            },
            examples: [
                {
                    title: 'Car Acceleration',
                    description: 'A more powerful engine can apply greater force to accelerate a car faster.'
                },
                {
                    title: 'Rocket Launch',
                    description: 'Rockets achieve high acceleration by expelling mass at high velocity, creating thrust force.'
                }
            ]
        },
        'universal_gravitation': {
            id: 'universal_gravitation',
            name: 'Law of Universal Gravitation',
            formula: 'F = G(m?m?)/r?',
            discoverer: 'newton',
            year: 1687,
            field: 'Classical Mechanics',
            description: 'Newton\'s law describing the gravitational force between any two objects.',
            explanation: {
                variables: {
                    'F': 'Gravitational force (Newtons)',
                    'G': 'Gravitational constant (6.674 ¡Á 10??? m?/kg¡¤s?)',
                    'm?, m?': 'Masses of the two objects (kilograms)',
                    'r': 'Distance between object centers (meters)'
                },
                meaning: 'Every object in the universe attracts every other object with a force proportional to their masses and inversely proportional to the square of the distance between them.',
                applications: [
                    'Planetary motion',
                    'Satellite orbits',
                    'Tidal forces',
                    'Galaxy formation'
                ]
            },
            examples: [
                {
                    title: 'Earth-Moon System',
                    description: 'The gravitational force between Earth and Moon keeps the Moon in orbit and causes ocean tides.'
                },
                {
                    title: 'Satellite Orbits',
                    description: 'Artificial satellites use gravitational force to maintain stable orbits at specific altitudes for communication and navigation.'
                }
            ]
        },
        'schrodinger_equation': {
            id: 'schrodinger_equation',
            name: 'Schr?dinger Equation',
            formula: 'i??¦×/?t = ?¦×',
            discoverer: 'schrodinger',
            year: 1926,
            field: 'Quantum Mechanics',
            description: 'The fundamental equation of quantum mechanics describing the time evolution of quantum systems.',
            explanation: {
                variables: {
                    'i': 'Imaginary unit',
                    '?': 'Reduced Planck constant',
                    '¦×': 'Wave function',
                    '?': 'Hamiltonian operator'
                },
                meaning: 'This equation describes how the quantum state of a physical system changes with time, providing the foundation for all quantum mechanical calculations.',
                applications: [
                    'Atomic structure',
                    'Molecular bonding',
                    'Quantum computing',
                    'Semiconductor physics'
                ]
            },
            examples: [
                {
                    title: 'Hydrogen Atom',
                    description: 'The Schr?dinger equation accurately predicts the energy levels and electron orbitals in hydrogen atoms.'
                },
                {
                    title: 'Quantum Tunneling',
                    description: 'The equation explains how particles can pass through energy barriers, enabling technologies like tunnel diodes.'
                }
            ]
        },
        'feynman_qed': {
            id: 'feynman_qed',
            name: 'Quantum Electrodynamics',
            formula: '?f|S|i? = ¡Ò D¦Õ e^(iS[¦Õ]/?)',
            discoverer: 'feynman',
            year: 1948,
            field: 'Quantum Field Theory',
            description: 'Feynman\'s path integral formulation of quantum electrodynamics.',
            explanation: {
                variables: {
                    '?f|S|i?': 'Scattering amplitude',
                    'S[¦Õ]': 'Action functional',
                    '¦Õ': 'Field configuration',
                    '?': 'Reduced Planck constant'
                },
                meaning: 'This formulation describes the quantum mechanical behavior of electrically charged particles and their interactions with electromagnetic fields.',
                applications: [
                    'Particle physics calculations',
                    'Quantum field theory',
                    'Electromagnetic interactions',
                    'Precision measurements'
                ]
            },
            examples: [
                {
                    title: 'Electron-Photon Scattering',
                    description: 'QED accurately predicts the probability of electron-photon interactions in particle accelerators.'
                },
                {
                    title: 'Magnetic Moment of Electron',
                    description: 'QED calculations provide the most precise theoretical predictions in physics, matching experimental results to 12 decimal places.'
                }
            ]
        },
        'hawking_radiation': {
            id: 'hawking_radiation',
            name: 'Hawking Radiation',
            formula: 'T = ?c?/(8¦ÐGMk_B)',
            discoverer: 'hawking',
            year: 1974,
            field: 'Black Hole Physics',
            description: 'The temperature of radiation emitted by black holes due to quantum effects.',
            explanation: {
                variables: {
                    'T': 'Temperature (Kelvin)',
                    '?': 'Reduced Planck constant',
                    'c': 'Speed of light',
                    'G': 'Gravitational constant',
                    'M': 'Black hole mass',
                    'k_B': 'Boltzmann constant'
                },
                meaning: 'Black holes emit thermal radiation due to quantum effects near the event horizon, with temperature inversely proportional to their mass.',
                applications: [
                    'Black hole thermodynamics',
                    'Information paradox studies',
                    'Quantum gravity research',
                    'Cosmological models'
                ]
            },
            examples: [
                {
                    title: 'Stellar Black Holes',
                    description: 'Stellar-mass black holes have extremely low Hawking temperatures, making the radiation undetectable with current technology.'
                },
                {
                    title: 'Primordial Black Holes',
                    description: 'Small primordial black holes would have high temperatures and could evaporate completely through Hawking radiation.'
                }
            ]
        }
    }
};

// Search function for the knowledge base
function searchKnowledgeBase(query) {
    const results = [];
    const searchTerm = query.toLowerCase();
    
    // Search physicists
    Object.values(KNOWLEDGE_BASE.physicists).forEach(physicist => {
        if (physicist.name.toLowerCase().includes(searchTerm) ||
            physicist.field.toLowerCase().includes(searchTerm) ||
            physicist.biography.toLowerCase().includes(searchTerm)) {
            results.push({
                type: 'physicist',
                data: physicist,
                relevance: calculateRelevance(physicist, searchTerm)
            });
        }
    });
    
    // Search formulas
    Object.values(KNOWLEDGE_BASE.formulas).forEach(formula => {
        if (formula.name.toLowerCase().includes(searchTerm) ||
            formula.description.toLowerCase().includes(searchTerm) ||
            formula.field.toLowerCase().includes(searchTerm)) {
            results.push({
                type: 'formula',
                data: formula,
                relevance: calculateRelevance(formula, searchTerm)
            });
        }
    });
    
    // Sort by relevance
    results.sort((a, b) => b.relevance - a.relevance);
    
    return results;
}

function calculateRelevance(item, searchTerm) {
    let relevance = 0;
    const name = item.name.toLowerCase();
    const description = (item.biography || item.description || '').toLowerCase();
    
    if (name.includes(searchTerm)) relevance += 10;
    if (description.includes(searchTerm)) relevance += 5;
    
    return relevance;
}