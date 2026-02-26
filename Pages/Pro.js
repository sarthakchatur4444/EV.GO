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

// JavaScript for Navigation Bar Links
// Navigation Bar Links
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
let BackBTN = document.getElementById('BackBTN');
BackBTN.addEventListener('click', function() {
    window.location.href = 'Products.html';
});


// JS for Product Image Hover Change
// Product Page JS
const MainIMG = document.getElementById('MainPro');
const PRO1 = document.getElementById('Pro1');
const PRO2 = document.getElementById('Pro2');
const PRO3 = document.getElementById('Pro3');
const PRO4 = document.getElementById('Pro4');
const PRO5 = document.getElementById('Pro5'); 
PRO1.classList.add( 'border-2', 'border-teal-500');

PRO1.addEventListener('mouseenter', function() {
    MainIMG.src = "../images/EBikewBG4.png";
    PRO1.classList.add( 'border-2', 'border-teal-500');
    PRO2.classList.remove( 'border-2', 'border-teal-500');
    PRO3.classList.remove( 'border-2', 'border-teal-500');
    PRO4.classList.remove( 'border-2', 'border-teal-500');
    PRO5.classList.remove( 'border-2', 'border-teal-500');
});
PRO2.addEventListener('mouseenter', function() {
    MainIMG.src = "../images/EBikew-With-BG1.png";
    PRO1.classList.remove( 'border-2', 'border-teal-500');
    PRO2.classList.add( 'border-2', 'border-teal-500');
    PRO3.classList.remove( 'border-2', 'border-teal-500');
    PRO4.classList.remove( 'border-2', 'border-teal-500');
    PRO5.classList.remove( 'border-2', 'border-teal-500');
});
PRO3.addEventListener('mouseenter', function() {
    MainIMG.src = "../images/EBikew-With-BG2.png";
    PRO1.classList.remove( 'border-2', 'border-teal-500');
    PRO2.classList.remove( 'border-2', 'border-teal-500');
    PRO3.classList.add( 'border-2', 'border-teal-500');
    PRO4.classList.remove( 'border-2', 'border-teal-500');
    PRO5.classList.remove( 'border-2', 'border-teal-500');
});
PRO4.addEventListener('mouseenter', function() {
    MainIMG.src = "../images/EBikew-With-BG3.png";
    PRO1.classList.remove( 'border-2', 'border-teal-500');
    PRO2.classList.remove( 'border-2', 'border-teal-500');
    PRO3.classList.remove( 'border-2', 'border-teal-500');
    PRO4.classList.add( 'border-2', 'border-teal-500');
    PRO5.classList.remove( 'border-2', 'border-teal-500');
});
PRO5.addEventListener('mouseenter', function() {
    MainIMG.src = "../images/EBikew-With-BG4.png";
    PRO1.classList.remove( 'border-2', 'border-teal-500');
    PRO2.classList.remove( 'border-2', 'border-teal-500');
    PRO3.classList.remove( 'border-2', 'border-teal-500');
    PRO4.classList.remove( 'border-2', 'border-teal-500');
    PRO5.classList.add( 'border-2', 'border-teal-500');
});



// JS for Menu Open & Close for mobile
//Menu Open & Close for mobile
const menuBtn = document.getElementById("menuBar4");
const menu = document.getElementById("menuSection2");
const overlay = document.getElementById("menuOverlay2");
const Mbody = document.body;

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
    Mbody.style.overflow = "hidden";
    isMenuOpen = true;
  } else {
    menu.style.transform = "translateX(100%)";
    menu.style.opacity = "0";
    menu.style.display = "none";
    overlay.style.opacity = "0";
    overlay.classList.add("pointer-events-none");
    Mbody.style.overflow = "";
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



// JS for Variant and Color Selection
// Variant and Color Selection
const Var1 = document.getElementById('var1');
const Var2 = document.getElementById('var2');

Var1.classList.add('border-4', 'border-[rgb(0,175,184)]');
Var1.addEventListener('click', function() {
    Var1.classList.add('border-4', 'border-[rgb(0,175,184)]');
    Var2.classList.remove('border-4', 'border-[rgb(0,175,184)]');
});
Var2.addEventListener('click', function() {
    Var1.classList.remove('border-4', 'border-[rgb(0,175,184)]');
    Var2.classList.add('border-4', 'border-[rgb(0,175,184)]');
});


// JS for Color Selection
// Color Selection
const Color1 = document.getElementById('color1');
const Color2 = document.getElementById('color2');
const Color3 = document.getElementById('color3');

Color1.classList.add('border-4', 'border-[rgb(0,175,184)]');

Color1.addEventListener('click', function() {
    Color1.classList.add('border-4', 'border-[rgb(0,175,184)]');
    Color2.classList.remove('border-4', 'border-[rgb(0,175,184)]');
    Color3.classList.remove('border-4', 'border-[rgb(0,175,184)]');
});
Color2.addEventListener('click', function() {
    Color2.classList.add('border-4', 'border-[rgb(0,175,184)]');
    Color1.classList.remove('border-4', 'border-[rgb(0,175,184)]');
    Color3.classList.remove('border-4', 'border-[rgb(0,175,184)]');
});
Color3.addEventListener('click', function() {
    Color3.classList.add('border-4', 'border-[rgb(0,175,184)]');
    Color1.classList.remove('border-4', 'border-[rgb(0,175,184)]');
    Color2.classList.remove('border-4', 'border-[rgb(0,175,184)]');
});


// List of all IDs that should redirect
// URL to redirect to
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


// JS for Price Calculation based on Selected Features
// Price Calculation
const checkboxes = document.querySelectorAll("#checkbox");
const totalPriceEl = document.getElementById("totalPrice");
const addToCartBtn = document.getElementById("checkboxBtn");
let total = 0;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const price = Number(checkbox.dataset.price);
    if (checkbox.checked) {
      total += price;
    } else {
      total -= price;
    }
    totalPriceEl.textContent = `Total price: ₹${total.toLocaleString("en-IN")}`;
    const checkedCount = document.querySelectorAll("#checkbox:checked").length;
    addToCartBtn.innerHTML = `Added ${checkedCount} item${checkedCount !== 1 ? 's' : ''} to Cart`;
  });
});