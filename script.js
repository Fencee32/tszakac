// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Sima görgetés a navigációs linkekhez
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Hős kép kattintás esemény
    const heroImage = document.getElementById('akackep');
    heroImage.addEventListener('click', function() {
        window.location.href = '#pricing';
    });
});

// gallery.js

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const close = document.querySelector('.close');
    const images = document.querySelectorAll('.gallery-img');
    let currentIndex;

    images.forEach((img, index) => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            currentIndex = index;
        });
    });

    close.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    function showSlide(index) {
        if (images.length === 0) return; // Üres tömb ellenőrzése
        if (index >= images.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = index;
        }
        modalImg.src = images[currentIndex].src;
    }

    document.querySelector('.prev').addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    document.addEventListener('keydown', function(event) {
        if (modal.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                showSlide(currentIndex - 1);
            } else if (event.key === 'ArrowRight') {
                showSlide(currentIndex + 1);
            } else if (event.key === 'Escape') {
                modal.style.display = 'none';
            }
        }
    });
});
