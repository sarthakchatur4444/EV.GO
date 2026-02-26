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


// JS for Menu Open & Close
//Menu Open & Close
const MenuOpen = document.getElementById('menuBar1');
const Menu = document.getElementById('menuSection1');
const MenuClose = document.getElementById('menuClose1');
const Overlay = document.getElementById('menuOverlay');
const Body = document.body;

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

    
    Body.style.overflow = 'hidden';

});

function closeMenu() {
    Menu.style.transform = 'translateY(-100%)';
    Menu.style.opacity = '0';

    Overlay.style.opacity = '0';
    Overlay.classList.add('pointer-events-none');

    setTimeout(() => {
        Menu.style.display = 'none';
        Body.style.overflow = '';
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

menu.style.transform = "translateX(100%)";
menu.style.opacity = "0";
menu.style.transition = "transform 0.4s ease, opacity 0.4s ease";
menu.style.display = "none";

menuBtn.addEventListener("pointerdown", () => {
  if (!isMenuOpen) {
    menu.style.transform = "translateX(0)";
    menu.style.opacity = "1";
    menu.style.display = "flex";
    overlay.classList.remove("pointer-events-none");
    overlay.style.opacity = "1";
    body.style.overflow = "hidden";
    isMenuOpen = true;
  } else {
    menu.style.transform = "translateX(100%)";
    menu.style.opacity = "0";
    menu.style.display = "none";
    overlay.style.opacity = "0";
    overlay.classList.add("pointer-events-none");
    body.style.overflow = "";
    isMenuOpen = false;
  }
});

overlay.addEventListener("pointerdown", () => {
  if (isMenuOpen) {
    menuBtn.click();
  }
});

document.addEventListener("pointerdown", (e) => {
  const menu = document.getElementById("menuSection2");
  const menuBtn = document.getElementById("menuBar4");

  if (menu.style.opacity !== "1") return;
  if (menu.contains(e.target) || menuBtn.contains(e.target)) return;

  menu.style.transform = "translateX(100%)";
  menu.style.opacity = "0";
  menu.style.display = "none";

  const overlay = document.getElementById("menuOverlay2");
  if (overlay) {
    overlay.style.opacity = "0";
    overlay.classList.add("pointer-events-none");
    menu.style.display = "flex";
  }

  document.body.style.overflow = "";
});




// JS for Redirecting to Other Pages
// List of all IDs that should redirect

const redirectIDs1 = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'BN1', 'BN2', 'BN3'];
const redirectIDs2 = ['GI', 'GI1'];
const redirectIDs3 = ['SI', 'SI1'];
const redirectIDs4 = ['CS','NBS', 'CS1'];
const redirectIDs5 = ['WTG1', 'WTG2', 'WTG3'];

// URL to redirect to
const redirectURL1 = 'Pro.html';
const redirectURL2 = 'General-Enquiry.html';
const redirectURL3 = 'S-Enquiry.html';
const redirectURL4 = 'Customer-Support.html';
const redirectURL5 = 'Gallery.html';

    // Attach click event to each element
redirectIDs1.forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('click', () => {
      window.location.href = redirectURL1;
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

redirectIDs5.forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('click', () => {
      window.location.href = redirectURL5;
    });
  }
});