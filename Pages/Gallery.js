const MenuOpen = document.getElementById('menuBar1');
const Menu = document.getElementById('menuSection1');
const MenuClose = document.getElementById('menuClose1');
const Body = document.getElementById('body');
const Main = document.getElementById('main2');
const Main1 = document.getElementById('main1');

// Initial Styles
Menu.style.top = "-50vw";
Menu.style.opacity = "0";
Menu.style.display = "none";
Menu.style.transition = 'top 0.5s ease-in-out, opacity 0.5s ease-in-out';
Body.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';
Main.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';
Main1.style.transition = 'filter 0.5s ease-in-out, background-color 0.5s ease-in-out';
Body.style.filter = 'brightness(100%)';
Main.style.filter = 'brightness(100%)';
Main1.style.filter = 'brightness(100%)';
Main.style.backgroundColor = 'rgba(255, 255, 255, 1)';
Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
Main1.style.backgroundColor = 'rgba(255, 255, 255, 1)';

// ===== MENU OPEN =====
MenuOpen.addEventListener('mouseenter', function () {
    Menu.style.display = "flex";
    Menu.getBoundingClientRect(); // Force reflow to trigger transition
    
    // Start transitions at the same time
    Menu.style.top = "0vw";
    Menu.style.opacity = "1";

    Body.style.height = '100vh';
    Body.style.overflow = 'hidden';

    Main.style.filter = 'brightness(50%)';
    Main1.style.filter = 'brightness(50%)';
    Main.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    Main1.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    Body.style.backgroundColor = 'rgba(102, 98, 98, 0.8)';
});

// ===== MENU CLOSE =====
MenuClose.addEventListener('click', function () {
    Menu.style.top = "-50vw";
    Menu.style.opacity = "0";

    Body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    Main.style.filter = 'brightness(100%)';
    Main1.style.filter = 'brightness(100%)';
    Main.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    Main1.style.backgroundColor = 'rgba(255, 255, 255, 1)';

    // After animation ends, hide menu and restore scroll
    setTimeout(() => {
        Menu.style.display = "none";
        Body.style.overflow = 'auto';
        Body.style.height = 'auto';
    }, 500);
});


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
    closeMenu();
  }
});

overlay.addEventListener("pointerdown", closeMenu);

document.addEventListener("pointerdown", (e) => {
  if (!isMenuOpen) return;
  if (menu.contains(e.target) || menuBtn.contains(e.target)) return;
  closeMenu();
});

function closeMenu() {
  menu.style.transform = "translateX(100%)";
  menu.style.opacity = "0";
  menu.style.display = "none";
  overlay.style.opacity = "0";
  overlay.classList.add("pointer-events-none");
  body.style.overflow = "";
  isMenuOpen = false;
}





// JS for Navigation Links
// Navigation Links
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


// JS for Navigation Links
// List of all IDs that should redirect
const redirectIDs = ['b1', 'b2', 'b3', 'b4'];
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