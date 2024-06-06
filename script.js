// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Navigation link smooth scrolling
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Hero image click event
    const heroImage = document.getElementById('akackep');
    heroImage.addEventListener('click', function() {
        window.location.href = '#pricing';
    });
});

/// Get the modal
var modal = document.getElementById("myModal");

// Get the images and bind the onclick event to each image
var images = document.getElementsByClassName("gallery-img");
var modalImg = document.getElementById("img01");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        currentIndex = Array.prototype.indexOf.call(images, this);
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// Add navigation for modal images
var currentIndex;
document.querySelector(".prev").onclick = function () {
    if (currentIndex > 0) {
        currentIndex--;
        modalImg.src = images[currentIndex].src;
    }
}

document.querySelector(".next").onclick = function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        modalImg.src = images[currentIndex].src;
    }
}
