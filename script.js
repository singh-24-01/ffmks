// Sélection des éléments du menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Événement pour ouvrir/fermer le menu hamburger
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// Fermer le menu lorsque l'on clique sur un lien
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
    });
});

// Gestion des dropdowns sur mobile
const dropdownBtns = document.querySelectorAll('.dropdown .dropbtn');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();

        // Fermer les autres dropdowns
        dropdownBtns.forEach(otherBtn => {
            if (otherBtn !== btn) {
                otherBtn.classList.remove('active');
                otherBtn.nextElementSibling.style.display = 'none';
            }
        });

        // Basculer l'état actif du dropdown cliqué
        this.classList.toggle('active');
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});

// Gestion de l'affichage des sections du contenu
const sections = ['planning-section', 'presentation-section', 'mlsd-section', 'amsd-section', 'terms-section', 'plan-section'];

function showSection(sectionId) {
    sections.forEach(id => {
        document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
    });

    // Fermer le menu mobile après la sélection
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
}

// Ajout des événements aux liens
document.getElementById('planning-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('planning-section');
});

document.getElementById('presentation-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('presentation-section');
});

document.getElementById('mlsd-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('mlsd-section');
});

document.getElementById('amsd-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('amsd-section');
});

document.getElementById('plan-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('plan-section');
});

document.getElementById('terms-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('terms-section');
});
