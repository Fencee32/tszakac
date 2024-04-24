// script.js

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
});
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(function(section) {
        var top = section.offsetTop;
        var height = section.clientHeight;
        var nav = section.getAttribute('data-nav');
        if (window.scrollY >= top && window.scrollY < top + height) {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === nav) {
                    link.classList.add('active');
                }
            });
        }
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const body = document.querySelector('body');

    // Képek hozzáadása az eseményfigyelőhöz
    gallery.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            openModal(event.target.src, event.target.alt);
        }
    });

    // Modal megnyitása a kattintott kép alapján
    function openModal(src, alt) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${src}" alt="${alt}">
            </div>
        `;
        body.appendChild(modal);

        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', closeModal);
    }

    // Modal bezárása
    function closeModal() {
        const modal = document.querySelector('.modal');
        modal.remove();
    }
});
// Get the modal
var modal = document.getElementById("myModal");

// Get the images
var images = document.querySelectorAll(".gallery-img");

// Get the modal image content
var modalImg = document.getElementById("img01");

// Get the close button
var span = document.getElementsByClassName("close")[0];

// Function to open modal
function openModal() {
    modal.style.display = "block";
}

// Function to close modal
span.onclick = function () {
    modal.style.display = "none";
};

// Loop through the images and add onclick events
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modalImg.src = this.src;
        openModal();
    };
}

// Function to handle image navigation
var slideIndex = 0;
function plusSlides(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    var slides = document.getElementsByClassName("gallery-img");
    slideIndex = (n + slides.length) % slides.length; // Ensure looping through images
    modalImg.classList.add("fadeout");
    setTimeout(function () {
        modalImg.src = slides[slideIndex].src;
        modalImg.classList.remove("fadeout");
    }, 300); // Delay to allow fadeout animation
}
