// Fetch the data from the JSON file
fetch('gallery.json')
    .then(response => response.json())
    .then(data => {
        // Create the HTML for the image gallery
        var galleryHtml = '<div class="gallery">';
        data.forEach(image => {
            galleryHtml += `
      <div class="gallery-row">
        <div class="gallery-item">         
          <img src="${image.src}" alt="${image.alt}" data-src="${image.src}">
          <div class="gallery-caption">${image.caption}</div>
        </div>
       </div>
      `;
        });
        galleryHtml += '</div>';

        // Append the HTML to the container div
        document.querySelector('.gallery-container').innerHTML = galleryHtml;
    });

var gallery = document.querySelector('.gallery-container');
var modal = document.getElementById('modal');
var modalImage = document.getElementById('modal-image');
var modalClose = document.querySelector('.modal-close');

// Add
// Add click event listener to gallery
gallery.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        var src = e.target.getAttribute('data-src');
        modalImage.src = src;
        modalImage.style.marginLeft = "auto";
        modalImage.style.marginTop = "20px";
        modalImage.style.display = "bock";
        modalImage.style.width = "60%";
        modal.style.display = 'block';
        modal.style.textAlign = 'center';
    }
});

// Add click event listener to modal close button
modalClose.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Add click event listener to modal background to close modal
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

/* MENU SHOW */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*----- ANIMATE -----*/
// OVERLAY
gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

// IMG
gsap.from('.home__img', {opacity: 0, duration: 2, delay: 2, x: 60})

// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease: 'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease: 'expo.out', stagger: .2})