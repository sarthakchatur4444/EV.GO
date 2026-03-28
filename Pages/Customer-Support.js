function initializeContactPageTabs() {
  const contactPages = [
      {
          element: document.getElementById('ContactPage1'),
          url: 'General-Enquiry.html'
      },
      {
          element: document.getElementById('ContactPage2'),
          url: 'S-Enquiry.html'
      },
      {
          element: document.getElementById('ContactPage3'),
          url: 'Customer-Support.html'
      }
  ];
  contactPages.forEach((pageObj, index) => {
      pageObj.element.addEventListener('click', (e) => {
          contactPages.forEach((p, i) => {});

          if (pageObj.url) {
              setTimeout(() => {
                  window.location.href = pageObj.url;
              }, 100);
          }
      });
  });
}

window.onload = () => {
  initializeContactPageTabs();
};


// JS for Leaflet Map Integration
// Initialize map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// User location marker
var userMarker = L.marker([51.505, -0.09]).addTo(map)
  .bindPopup('You are here').openPopup();

// Track user location
navigator.geolocation.watchPosition(
  function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    userMarker.setLatLng([lat, lon]);
    map.setView([lat, lon], 14);
  },
  function(error) {
    alert('Error getting location: ' + error.message);
  },
  {
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 10000
  }
);

// Custom icon for showrooms
var imageIcon1 = L.icon({
  iconUrl: '../images/Location-Logo.png',
  iconSize: [45, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

// Showroom markers
L.marker([19.236540172746263, 73.13053372769332], { icon: imageIcon1 })
  .addTo(map)
  .bindPopup('Kalyan Showroom');
L.marker([19.2972289241795, 73.06333664676654], { icon: imageIcon1 })
  .addTo(map)
  .bindPopup('Bhiwandi Showroom');
L.marker([19.22387779093676, 73.09949366717157], { icon: imageIcon1 })
  .addTo(map)
  .bindPopup('Dombivli Showroom');
L.marker([19.247869023561798, 73.10635758352211], { icon: imageIcon1 })
  .addTo(map)
  .bindPopup('Kongaon Showroom');

// Remove Leaflet attribution prefix (optional)
L.control.attribution({ prefix: false }).addTo(map);


// JS for Navigation Bar Redirection
// Navigation Bar Redirection
let HOME_Page1 = document.getElementById('HOME1');
HOME_Page1.addEventListener('pointerdown', function() {
    window.location.href = '../index.html';
});

let PRODUCT_Page1 = document.getElementById('PRODUCT1');
PRODUCT_Page1.addEventListener('pointerdown', function() {
    window.location.href = 'Products.html';
});

let GALLERY_Page1 = document.getElementById('GALLERY1');
GALLERY_Page1.addEventListener('pointerdown', function() {
    window.location.href = 'Gallery.html';
});

let CONTACT_Page1 = document.getElementById('CONTACT1');
CONTACT_Page1.addEventListener('pointerdown', function() {
    window.location.href = 'General-Enquiry.html';
});

let HOME_Page2 = document.getElementById('HOME2');
HOME_Page2.addEventListener('pointerdown', function() {
    window.location.href = '../index.html';
});

let PRODUCT_Page2 = document.getElementById('PRODUCT2');
PRODUCT_Page2.addEventListener('pointerdown', function() {
    window.location.href = 'Products.html';
});

let GALLERY_Page2 = document.getElementById('GALLERY2');
GALLERY_Page2.addEventListener('pointerdown', function() {
    window.location.href = 'Gallery.html';
});

let CONTACT_Page2 = document.getElementById('CONTACT2');
CONTACT_Page2.addEventListener('pointerdown', function() {
    window.location.href = 'General-Enquiry.html';
});


// JS for Navigation Menu Open/Close
// Navigation Menu Open/Close
const MenuOpen = document.getElementById('menuBar1');
const Menu = document.getElementById('menuSection1');
const MenuClose = document.getElementById('menuClose1');
const Overlay = document.getElementById('menuOverlay');

Menu.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
Menu.style.transform = 'translateY(-100%)';
Menu.style.opacity = '0';
Menu.style.display = 'none';

MenuOpen.addEventListener('mouseenter', () => {
    Menu.style.display = 'flex';
    Menu.getBoundingClientRect();
    Menu.style.transform = 'translateY(0)';
    Menu.style.opacity = '1';

    Overlay.classList.remove('pointer-events-none');
    Overlay.style.opacity = '1';

    
    document.body.style.overflow = 'hidden';

});

function closeMenu() {
    Menu.style.transform = 'translateY(-100%)';
    Menu.style.opacity = '0';

    Overlay.style.opacity = '0';
    Overlay.classList.add('pointer-events-none');

    setTimeout(() => {
        Menu.style.display = 'none';
        document.body.style.overflow = '';
    }, 500);
}

MenuClose.addEventListener('pointerdown', closeMenu);

Overlay.addEventListener('pointerdown', closeMenu);


// JS for Menu Open & Close for mobile
//Menu Open & Close for mobile
const menuBtn = document.getElementById("menuBar4");
const menu = document.getElementById("menuSection2");
const overlay = document.getElementById("menuOverlay2");
const body = document.body;

let isMenuOpen = false;

// Initial setup
menu.style.transform = "translateX(100%)";
menu.style.opacity = "0";
menu.style.transition = "transform 0.4s ease, opacity 0.4s ease";
menu.style.display = "none";
menu.style.position = "absolute"; // use absolute relative to document
menu.style.right = "0";

menuBtn.addEventListener("pointerdown", () => {
  if (!isMenuOpen) {
    // Get navbar position dynamically
    const navbar = document.getElementById("M-bar");
    const navbarBottom = navbar.getBoundingClientRect().bottom + window.scrollY;

    menu.style.top = `${navbarBottom}px`; // place below navbar
    menu.style.transform = "translateX(0)";
    menu.style.opacity = "1";
    menu.style.display = "flex";
    overlay.classList.remove("pointer-events-none");
    overlay.style.opacity = "1";
    body.style.overflow = "hidden"; // prevent scrolling behind menu
    isMenuOpen = true;
  } else {
    closeMenu1();
  }
});

overlay.addEventListener("pointerdown", closeMenu1);

document.addEventListener("pointerdown", (e) => {
  if (!isMenuOpen) return;
  if (menu.contains(e.target) || menuBtn.contains(e.target)) return;
  closeMenu1();
});

function closeMenu1() {
  menu.style.transform = "translateX(100%)";
  menu.style.opacity = "0";
  menu.style.display = "none";
  overlay.style.opacity = "0";
  overlay.classList.add("pointer-events-none");
  body.style.overflow = "";
  isMenuOpen = false;
}



// JS for Redirection on Click
// List of all IDs that should redirect
const redirectIDs = ['b1', 'b2', 'b3', 'b4', 'b4', 'b5', 'b6', 'BN1', 'BN2', 'BN3'];
const redirectIDs2 = ['GI', 'GI1'];
const redirectIDs3 = ['SI', 'SI1'];
const redirectIDs4 = ['CS','NBS', 'CS1'];

// URL to redirect to
const redirectURL = 'Pro.html';
const redirectURL2 = 'General-Enquiry.html';
const redirectURL3 = 'S-Enquiry.html';
const redirectURL4 = 'Customer-Support.html';

// Attach click event to each element
redirectIDs.forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('click', () => {
      window.location.href = redirectURL;
    });
  }
});

redirectIDs2.forEach(id => {
const element = document.getElementById(id);
if (element) {
  element.addEventListener('click', () => {
    window.location.href = redirectURL2;
  });
}
});

redirectIDs3.forEach(id => {
const element = document.getElementById(id);
if (element) {
  element.addEventListener('click', () => {
    window.location.href = redirectURL3;
  });
}
});

redirectIDs4.forEach(id => {
const element = document.getElementById(id);
if (element) {
  element.addEventListener('click', () => {
    window.location.href = redirectURL4;
  });
}
});