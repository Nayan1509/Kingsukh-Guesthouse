document.addEventListener('DOMContentLoaded', function () {
  const bookingModal = document.getElementById('bookingModal');
  bookingModal.addEventListener('shown.bs.modal', function () {
    const whatsappButton = document.getElementById('whatsappButton');
    whatsappButton.addEventListener('click', function () {
      var checkIn = document.getElementById('check-in').value;
      var checkOut = document.getElementById('check-out').value;
      var guests = document.getElementById('guest-no').value;
      var roomType = document.getElementById('room-type').value;
      var phoneNumber = '+918797402184';
      var message = `Check-In: ${checkIn}%0aCheck-Out: ${checkOut}%0aGuests: ${guests}%0aRoom Type: ${roomType}`;
      var whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.location.href = whatsappUrl;
    });
  });
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};



// about container
ScrollReveal().reveal(".about-image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about-content .section-subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-content .section-header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about-content .about-description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about-links", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about-btn-container", {
  ...scrollRevealOption,
  delay: 2500,
});

// room container
ScrollReveal().reveal(".card-outer", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

// service container
ScrollReveal().reveal(".service-list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

// gallery container
ScrollReveal().reveal(".gallery-item", {
  ...scrollRevealOption,
  interval: 300,
  origin: "bottom",
});

// contact  

ScrollReveal().reveal(".contact-info", {
  ...scrollRevealOption,
  interval: 500,
  origin: "left",
});

ScrollReveal().reveal(".contact-form", {
  ...scrollRevealOption,
  delay: 500,
  origin: "right",
});


document.addEventListener('DOMContentLoaded', function () {
  var imageModal = document.getElementById('imageModal');
  imageModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var imgsrc = button.getAttribute('data-imgsrc');
    var modalImage = imageModal.querySelector('#modalImage');
    if (window.innerWidth >= 768) {
      modalImage.src = imgsrc;
    } else {
      event.preventDefault();
      imageModal.style.display = 'none';
      console.log('Modal not opened on smaller screens.');
    }
  });
});