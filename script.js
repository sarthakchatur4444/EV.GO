// JS for Background Shape moving
// Background Shape moving
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomBorderRadius() {
    return `${getRandom(30, 60)}% ${getRandom(30, 60)}% ${getRandom(30, 60)}% ${getRandom(30, 60)}% / 
            ${getRandom(30, 60)}% ${getRandom(30, 60)}% ${getRandom(30, 60)}% ${getRandom(30, 60)}%`;
  }

  class Particle {
    constructor(element, containerWidth, containerHeight) {
      this.el = element;
      this.containerWidth = containerWidth;
      this.containerHeight = containerHeight;

      this.size = getRandom(12, 18);
      this.x = (containerWidth - this.size) / 2;
      this.y = (containerHeight - this.size) / 2;

      this.vx = getRandom(-0.01, 0.01);
      this.vy = getRandom(-0.01, 0.01);

      this.targetSize = getRandom(10, 20);
      this.borderRadius = getRandomBorderRadius();
      this.nextBorderRadius = getRandomBorderRadius();
      this.borderLerp = 0;

      this.updateStyle();
    }

    update(delta) {
      delta = Math.min(delta, 50);
      const margin = 5;

      this.x += this.vx * delta;
      this.y += this.vy * delta;


      const maxX = this.containerWidth - this.size - margin;
      const maxY = this.containerHeight - this.size - margin;

      if (this.x < margin || this.x > maxX) this.vx *= -1;
      if (this.y < margin || this.y > maxY) this.vy *= -1;


      this.size += (this.targetSize - this.size) * 0.005 * delta;
      if (Math.abs(this.size - this.targetSize) < 0.1) {
        this.targetSize = getRandom(20, 30);
      }


      this.borderLerp += 0.001 * delta;
      if (this.borderLerp >= 1) {
        this.borderLerp = 0;
        this.borderRadius = this.nextBorderRadius;
        this.nextBorderRadius = getRandomBorderRadius();
      }

      this.updateStyle();
    }

    updateStyle() {
      this.el.style.transform = `translate(${this.x}vw, ${this.y}vw)`;
      this.el.style.width = `${this.size}vw`;
      this.el.style.height = `${this.size}vw`;
      this.el.style.borderRadius = this.lerpBorderRadius(this.borderRadius, this.nextBorderRadius, this.borderLerp);
    }

    lerpBorderRadius(from, to, t) {
      const fromValues = from.match(/[\d.]+/g).map(Number);
      const toValues = to.match(/[\d.]+/g).map(Number);
      const lerped = fromValues.map((v, i) => v + (toValues[i] - v) * t);
      return `${lerped[0]}% ${lerped[1]}% ${lerped[2]}% ${lerped[3]}% / 
              ${lerped[4]}% ${lerped[5]}% ${lerped[6]}% ${lerped[7]}%`;
    }
  }

  function startParticles() {
    const containerWidth = 50;
    const containerHeight = 60;

    const p1 = new Particle(document.getElementById('circle1'), containerWidth, containerHeight);
    const p2 = new Particle(document.getElementById('circle2'), containerWidth, containerHeight);

    let lastTime = performance.now();
    
    function animate(time) {
      let delta = time - lastTime;
      delta = Math.min(delta, 50);
      lastTime = time;

      p1.update(delta);
      p2.update(delta);

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  window.onload = startParticles;





// JS for Bike SlideIn
// Bike SlideIn
const BikeName = document.getElementById('text2-sec2');
const BikeImg = document.getElementById('bikeImg');
const slider1 = document.getElementById('sl1');
const slider2 = document.getElementById('sl2');
const slider3 = document.getElementById('sl3');
const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const value3 = document.getElementById('value3');
const value4 = document.getElementById('value4');

let currentBike = 1;

function updateBike() {
    BikeImg.classList.remove("animate-slide-in");
    void BikeImg.offsetWidth;

    if (currentBike === 1) {
        updateTextColor(slider1);
        BikeImg.src = "images/EBikewBG1.png";
        BikeImg.style.width = `${window.innerWidth >= 1536 ? 50 : window.innerWidth >= 1280 ? 40 : window.innerWidth >= 1024 ? 30 : window.innerWidth >= 884 ? 20 : window.innerWidth >= 768 ? 15 : window.innerWidth >= 640 ? 10 : 85}vw`;
        BikeImg.style.marginTop = `${window.innerWidth >= 1536 ? -7 : window.innerWidth >= 1280 ? 0 : window.innerWidth >= 1024 ? -2 : window.innerWidth >= 884 ? 6 : window.innerWidth >= 768 ? 10 : window.innerWidth >= 640 ? 10 : 50}vw`;
        BikeImg.style.marginLeft = `${window.innerWidth >= 1536 ? 27.5 : window.innerWidth >= 1280 ? 30 : window.innerWidth >= 1024 ? 40 : window.innerWidth >= 884 ? 40 : window.innerWidth >= 768 ? 36 : window.innerWidth >= 640 ? 20 : 5}vw`;
        BikeName.innerHTML = "EVO10S";
        value1.innerHTML = "117 kmph";
        value2.innerHTML = "176 km";
        value3.innerHTML = "4";
        value4.innerHTML = "4.5";  
        currentBike = 2;
    } 
    else if (currentBike === 2) {
        updateTextColor(slider2);
        BikeImg.src = "images/EBikewBG2.png";
        BikeImg.style.width = `${window.innerWidth >= 1536 ? 45 : window.innerWidth >= 1280 ? 35 : window.innerWidth >= 1024 ? 25 : window.innerWidth >= 884 ? 15 : window.innerWidth >= 768 ? 12.5 : window.innerWidth >= 640 ? 10 : 80}vw`;
        BikeImg.style.marginTop = `${window.innerWidth >= 1536 ? -4 : window.innerWidth >= 1280 ? 3 : window.innerWidth >= 1024 ? 0.5 : window.innerWidth >= 884 ? 8 : window.innerWidth >= 768 ? 12 : window.innerWidth >= 640 ? 10 : 50}vw`;
        BikeImg.style.marginLeft = `${window.innerWidth >= 1536 ? 31.5 : window.innerWidth >= 1280 ? 32 : window.innerWidth >= 1024 ? 40 : window.innerWidth >= 884 ? 40 : window.innerWidth >= 768 ? 40 : window.innerWidth >= 640 ? 30 : 5}vw`;
        BikeName.innerHTML = "EVO20A";
        value1.innerHTML = "180 kmph";
        value2.innerHTML = "200 km";
        value3.innerHTML = "7.3";
        value4.innerHTML = "7";
        currentBike = 3;
    } 
    else {
        updateTextColor(slider3);
        BikeImg.src = "images/EBikewBG4.png";
        BikeImg.style.width = `${window.innerWidth >= 1536 ? 45 : window.innerWidth >= 1280 ? 35 : window.innerWidth >= 1024 ? 25 : window.innerWidth >= 884 ? 15 : window.innerWidth >= 768 ? 12.5 : window.innerWidth >= 640 ? 10 : 85}vw`;
        BikeImg.style.marginTop = `${window.innerWidth >= 1536 ? -4 : window.innerWidth >= 1280 ? 3 : window.innerWidth >= 1024 ? -3 : window.innerWidth >= 884 ? 5 : window.innerWidth >= 768 ? 9 : window.innerWidth >= 640 ? 10 : 45}vw`;
        BikeImg.style.marginLeft = `${window.innerWidth >= 1536 ? 31.5 : window.innerWidth >= 1280 ? 30 : window.innerWidth >= 1024 ? 40 : window.innerWidth >= 884 ? 40 : window.innerWidth >= 768 ? 40 : window.innerWidth >= 640 ? 30 : 5}vw`;
        BikeName.innerHTML = "EVO50X";
        value1.innerHTML = "112 kmph";
        value2.innerHTML = "186 km";
        value3.innerHTML = "5.3";
        value4.innerHTML = "7";
        currentBike = 1;
    }

    BikeImg.classList.add("animate-slide-in");
}

function updateTextColor(activeSlider) {
    [slider1, slider2, slider3].forEach(slider => {
        slider.style.color = (slider === activeSlider) ? "black" : "rgba(255, 255, 255, 1)";
    });
}

setInterval(updateBike, 4000);
updateBike();





//JS for Product Viewing for Desktop
// Product Viewing Slider
const wrapper = document.getElementById("products-wrapper");
const btnLeft = document.getElementById("scrl-left");
const btnRight = document.getElementById("scrl-right");

let visibleCards = 3;
let totalCards = wrapper.children.length;
let maxIndex = totalCards - visibleCards;

let currentIndex = 0;
let cardWidth = 0;

function calculateCardWidth() {
  const firstCard = wrapper.children[0];
  const style = getComputedStyle(wrapper);
  const gap = parseInt(style.columnGap || style.gap || 0);

  cardWidth = firstCard.offsetWidth + gap;
  maxIndex = totalCards - visibleCards;
}

function updateSlider() {
  const translate = -currentIndex * cardWidth;

  wrapper.style.transition =
    "transform 0.6s cubic-bezier(0.22,1,0.36,1)";
  wrapper.style.transform = `translateX(${translate}px)`;

  updateArrows();
}

btnRight.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

btnLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

function updateArrows() {
  btnLeft.style.opacity = currentIndex === 0 ? "0.4" : "1";
  btnRight.style.opacity = currentIndex === maxIndex ? "0.4" : "1";
}

calculateCardWidth();
updateSlider();

window.addEventListener("resize", () => {
  calculateCardWidth();
  updateSlider();
});



//JS for Product Viewing for Mobile
// Product Viewing Slider
const wrapper1 = document.getElementById("products-wrapper1");
const btnLeft1 = document.getElementById("scrl-left1");
const btnRight1 = document.getElementById("scrl-right1");

let startX1 = 0;
let isPointerDown1 = false;
let scrollStep1 = 0;

function calculateScrollStep1() {
  const firstCard = wrapper1.children[0];
  if (!firstCard) return 360;

  const style = getComputedStyle(wrapper1);
  const gap = parseInt(style.columnGap || style.gap || 0);

  scrollStep1 = firstCard.offsetWidth + gap;
}

function smoothScrollTo(target, duration = 500) {
  const start = wrapper1.scrollLeft;
  const distance = target - start;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Ease-in-out effect
    const ease = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    wrapper1.scrollLeft = start + distance * ease;

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

function scrollTo1(direction) {
  const target =
    wrapper1.scrollLeft + direction * scrollStep1;

  smoothScrollTo(target, 600);
}

btnRight1.addEventListener("pointerdown", () => scrollTo1(1));
btnLeft1.addEventListener("pointerdown", () => scrollTo1(-1));

wrapper1.addEventListener("pointerdown", (e) => {
  startX1 = e.clientX;
  isPointerDown1 = true;
  wrapper1.setPointerCapture(e.pointerId);
});

wrapper1.addEventListener("pointerup", (e) => {
  if (!isPointerDown1) return;

  const diff = startX1 - e.clientX;
  isPointerDown1 = false;

  if (Math.abs(diff) > 60) {
    scrollTo1(diff > 0 ? 1 : -1);
  }
});

wrapper1.addEventListener("pointercancel", () => {
  isPointerDown1 = false;
});

function updateArrows1() {
  const maxScroll = wrapper1.scrollWidth - wrapper1.clientWidth;

  btnLeft1.style.opacity = wrapper1.scrollLeft <= 4 ? "0.5" : "1";
  btnRight1.style.opacity = wrapper1.scrollLeft >= maxScroll - 4 ? "0.5" : "1";
}

calculateScrollStep1();
updateArrows1();

wrapper1.addEventListener("scroll", updateArrows1);
window.addEventListener("resize", () => {
  calculateScrollStep1();
  updateArrows1();
});



// JS for Special Features
// Initial view
const slides = [
  { box: SF1, text: SF1h4, title: SF1.querySelector("h3") },
  { box: SF2, text: SF2h4, title: SF2.querySelector("h3") },
  { box: SF3, text: SF3h4, title: SF3.querySelector("h3") }
];

let currentIndex1 = 0;
let intervalId;

function isMobile() {
  return window.innerWidth < 768;
}

slides.forEach(slide => {
  slide.box.classList.add("flex-[1]", "filtered-bg");
  slide.text.classList.add("hidden");
});

slides[0].box.classList.replace("flex-[1]", "flex-[5]");
slides[0].box.classList.remove("filtered-bg");
slides[0].text.classList.remove("hidden");

function resetSlides() {
  slides.forEach(slide => {
    slide.box.classList.remove("flex-[5]");
    slide.box.classList.add("flex-[1]", "filtered-bg");
    slide.text.classList.add("hidden");
  });
}

function updateTitles() {
  const mobile = isMobile();

  slides.forEach((slide, i) => {
    if (!mobile) {
      slide.title.classList.remove("hidden");
    } else {
      if (i === currentIndex1) {
        slide.title.classList.remove("hidden");
      } else {
        slide.title.classList.add("hidden");
      }
    }
  });
}

function activateSlide(index) {
  resetSlides();

  slides[index].box.classList.replace("flex-[1]", "flex-[5]");
  slides[index].box.classList.remove("filtered-bg");
  slides[index].text.classList.remove("hidden");

  currentIndex1 = index;
  updateTitles();
}

function autoRotate() {
  activateSlide(currentIndex1);
  currentIndex1 = (currentIndex1 + 1) % slides.length;
}

function onSlideClick(index) {
  clearInterval(intervalId);
  activateSlide(index);
  intervalId = setInterval(autoRotate, 5000);
}

slides.forEach((slide, index) => {
  slide.box.addEventListener("pointerdown", () => onSlideClick(index));
});
window.addEventListener("resize", updateTitles);

intervalId = setInterval(autoRotate, 5000);
updateTitles();





// JS for Sliders
// Slider Initial Call
const slides1 = document.querySelectorAll("#ssCon > div");
const dots = [
  document.getElementById("sssl1"),
  document.getElementById("sssl2"),
  document.getElementById("sssl3"),
  document.getElementById("sssl4")
];

let current = 0;
let interval;

slides1.forEach((slide, i) => {
  slide.style.transition = "transform 0.6s ease, opacity 0.6s ease";

  if (i === 0) {
    slide.style.transform = "translateX(0)";
    slide.style.opacity = "1";
  } else {
    slide.style.transform = "translateX(100%)";
    slide.style.opacity = "0";
  }
});

function showSlide(index) {
  if (index === current) return;

  const direction = index > current ? 1 : -1;

  slides1.forEach((slide, i) => {
    if (i === current) {
      slide.style.transform = `translateX(${direction * -100}%)`;
      slide.style.opacity = "0";
    } 
    else if (i === index) {
      slide.style.transform = "translateX(0)";
      slide.style.opacity = "1";
    } 
    else {
      slide.style.transform = `translateX(${direction * 100}%)`;
      slide.style.opacity = "0";
    }
  });

  dots.forEach((dot, i) => {
    dot.style.color = i === index ? "black" : "rgba(199,199,199,1)";
  });

  current = index;
  restartAuto();
}

function nextSlide() {
  showSlide((current + 1) % slides1.length);
}

function restartAuto() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}

dots.forEach((dot, i) => {
  dot.addEventListener("pointerdown", () => showSlide(i));
});

restartAuto();



// JS for Navigation Links
// Navigation Links
let HOME_Page1 = document.getElementById('HOME1');
HOME_Page1.addEventListener('pointerdown', function() {
    window.location.href = 'index.html';
});

let PRODUCT_Page1 = document.getElementById('PRODUCT1');
PRODUCT_Page1.addEventListener('pointerdown', function() {
    window.location.href = 'Pages/Products.html';
});

let GALLERY_Page1 = document.getElementById('GALLERY1');
GALLERY_Page1.addEventListener('pointerdown', function() {
    window.location.href = 'Pages/Gallery.html';
});

let CONTACT_Page1 = document.getElementById('CONTACT1');
CONTACT_Page1.addEventListener('pointerdown', function() {
    window.location.href = 'Pages/General-Enquiry.html';
});

let HOME_Page2 = document.getElementById('HOME2');
HOME_Page2.addEventListener('pointerdown', function() {
    window.location.href = 'index.html';
});

let PRODUCT_Page2 = document.getElementById('PRODUCT2');
PRODUCT_Page2.addEventListener('pointerdown', function() {
    window.location.href = 'Pages/Products.html';
});

let GALLERY_Page2 = document.getElementById('GALLERY2');
GALLERY_Page2.addEventListener('pointerdown', function() {
    window.location.href = 'Pages/Gallery.html';
});

let CONTACT_Page2 = document.getElementById('CONTACT2');
CONTACT_Page2.addEventListener('pointerdown', function() {
    window.location.href = 'Pages/General-Enquiry.html';
});





// JS for Menu Open & Close
//Menu Open & Close
const MenuOpen = document.getElementById('menuBar1');
const Menu = document.getElementById('menuSection1');
const MenuClose = document.getElementById('menuClose1');
const Overlay = document.getElementById('menuOverlay');
const Boddy = document.body;

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

    Boddy.style.overflow = 'hidden';

});

function closeMenu() {
    Menu.style.transform = 'translateY(-100%)';
    Menu.style.opacity = '0';

    Overlay.style.opacity = '0';
    Overlay.classList.add('pointer-events-none');

    setTimeout(() => {
        Menu.style.display = 'none';
        Boddy.style.overflow = '';
    }, 500);
}

MenuClose.addEventListener('pointerdown', closeMenu);

Overlay.addEventListener('pointerdown', closeMenu);





// JS for Menu Open & Close for mobile
//Menu Open & Close for mobile
const menuBtn = document.getElementById("menuBar4");
const menu = document.getElementById("menuSection2");
const overlay = document.getElementById("menuOverlay2");

let isMenuOpen = false;
let scrollY = 0;

/* ======================
   INITIAL STATE
====================== */
menu.style.transform = "translateX(100%)";
menu.style.opacity = "0";
menu.style.display = "none";
menu.style.transition = "transform 0.4s ease, opacity 0.4s ease";

overlay.style.opacity = "0";
overlay.classList.add("pointer-events-none");

/* ======================
   SCROLL LOCK (MOBILE SAFE)
====================== */
function lockScroll() {
  scrollY = window.scrollY;
  document.documentElement.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = "100%";
}

function unlockScroll() {
  document.documentElement.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  window.scrollTo(0, scrollY);
}

/* ======================
   MENU CONTROL
====================== */
function openMenu() {
  if (isMenuOpen) return;

  lockScroll();

  menu.style.display = "flex";
  requestAnimationFrame(() => {
    menu.style.transform = "translateX(0)";
    menu.style.opacity = "1";
  });

  overlay.style.opacity = "1";
  overlay.classList.remove("pointer-events-none");

  isMenuOpen = true;
}

function closeMenu1() {
  if (!isMenuOpen) return;

  menu.style.transform = "translateX(100%)";
  menu.style.opacity = "0";

  overlay.style.opacity = "0";
  overlay.classList.add("pointer-events-none");

  unlockScroll();
  isMenuOpen = false;

  setTimeout(() => {
    if (!isMenuOpen) menu.style.display = "none";
  }, 400);
}

/* ======================
   EVENTS
====================== */
menuBtn.addEventListener("pointerdown", (e) => {
  e.stopPropagation();
  isMenuOpen ? closeMenu1() : openMenu();
});

overlay.addEventListener("pointerdown", closeMenu1);

document.addEventListener("pointerdown", (e) => {
  if (!isMenuOpen) return;
  if (menu.contains(e.target) || menuBtn.contains(e.target)) return;
  closeMenu1();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu1();
});







// JS for Bike Color Change
//Color Pallet
const colorPallet1 = document.getElementById('color1');
const colorPallet2 = document.getElementById('color2');
const colorPallet3 = document.getElementById('color3');
const Varient1 = document.getElementById('Varient1');
const Varient2 = document.getElementById('Varient2');

colorPallet1.addEventListener('pointerdown', function() {
    Varient1.src = "images/EBikewBG2.2.png";
    Varient2.src = "images/EBikewBG2.2.png";
    colorPallet1.classList.add('w-6', 'h-6', 'lg:w-12', 'lg:h-12', '2xl:w-16', '2xl:h-16');
    colorPallet2.classList.add('w-5', 'h-5', 'lg:w-10', 'lg:h-10', '2xl:w-14', '2xl:h-14');
    colorPallet3.classList.add('w-5', 'h-5', 'lg:w-10', 'lg:h-10', '2xl:w-14', '2xl:h-14');
    colorPallet2.classList.remove('w-6', 'h-6', 'lg:w-12', 'lg:h-12', '2xl:w-16', '2xl:h-16');
    colorPallet3.classList.remove('w-6', 'h-6', 'lg:w-12', 'lg:h-12', '2xl:w-16', '2xl:h-16');
});
colorPallet2.addEventListener('pointerdown', function() {
    Varient1.src = "images/EBikewBG2.0.png";
    Varient2.src = "images/EBikewBG2.0.png";
    colorPallet1.classList.add('w-5', 'h-5', 'lg:w-10', 'lg:h-10', '2xl:w-14', '2xl:h-14');
    colorPallet2.classList.add('w-6', 'h-6', 'lg:w-12', 'lg:h-12', '2xl:w-16', '2xl:h-16');
    colorPallet3.classList.add('w-5', 'h-5', 'lg:w-10', 'lg:h-10', '2xl:w-14', '2xl:h-14');
    colorPallet1.classList.remove('w-6', 'h-6', 'lg:w-12', 'lg:h-12', '2xl:w-16', '2xl:h-16');
    colorPallet3.classList.remove('w-6', 'h-6', 'lg:w-12', 'lg:h-12', '2xl:w-16', '2xl:h-16');
});
colorPallet3.addEventListener('pointerdown', function() {
    Varient1.src = "images/EBikewBG2.1.png";
    Varient2.src = "images/EBikewBG2.1.png";
    colorPallet1.classList.add('w-5', 'h-5', 'lg:w-10', 'lg:h-10', '2xl:w-14', '2xl:h-14');
    colorPallet2.classList.add('w-5', 'h-5', 'lg:w-10', 'lg:h-10', '2xl:w-14', '2xl:h-14');
    colorPallet3.classList.add('w-6', 'h-6', 'lg:w-12', 'lg:h-12', '2xl:w-16', '2xl:h-16');
    colorPallet1.classList.remove('w-6', 'h-6', 'lg:w-12', 'lg:h-12', '2xl:w-16', '2xl:h-16');
    colorPallet2.classList.remove('w-6', 'h-6', 'lg:w-12', 'lg:h-12', '2xl:w-16', '2xl:h-16');
});





// JS for Redirection on Click
// List of all IDs that should redirect
const redirectIDs = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'];
const redirectIDs2 = ['GI', 'GI1', 'SYR', 'AV1', 'AV2'];
const redirectIDs3 = ['SI', 'SI1'];
const redirectIDs4 = ['CS','NBS', 'CS1'];

const redirectURL = 'Pages/Pro.html';
const redirectURL2 = 'Pages/General-Enquiry.html';
const redirectURL3 = 'Pages/S-Enquiry.html';
const redirectURL4 = 'Pages/Customer-Support.html';

redirectIDs.forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('pointerdown', () => {
      window.location.href = redirectURL;
    });
  }
});

redirectIDs2.forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('pointerdown', () => {
      window.location.href = redirectURL2;
    });
  }
});

redirectIDs3.forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('pointerdown', () => {
      window.location.href = redirectURL3;
    });
  }
});

redirectIDs4.forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener('pointerdown', () => {
      window.location.href = redirectURL4;
    });
  }
});





// JS for Q&A interaction
// Question and Answer Change
let QAs = [
  qa1, qa2, qa3, qa4, qa5
];

let As = [
  a1, a2, a3, a4, a5
];

let SVGs = [
  svg1, svg2, svg3, svg4, svg5
];

SVGs.forEach(svg => svg.classList.add('rotate-90'));

QAs.forEach((qa, index) => {
  qa.addEventListener('pointerdown', () => {
    As.forEach((ans, i) => {
      if (i === index) {
        ans.classList.remove('max-h-0', 'opacity-0');
        ans.classList.add('max-h-96', 'opacity-100');

        SVGs[i].classList.remove('rotate-90');
        SVGs[i].classList.add('-rotate-90');
      } else {
        ans.classList.add('max-h-0', 'opacity-0');
        ans.classList.remove('max-h-96', 'opacity-100');

        SVGs[i].classList.add('rotate-90');
        SVGs[i].classList.remove('-rotate-90');
      }
    });
  });
});





// JS for Compare Section
// Compare Section Toggle
const CompareImg = document.getElementById('CompareImage');
const ProName = document.getElementById('ProName1');
const OGPrice = document.getElementById('OGPrice1');
const EMIPrice = document.getElementById('EMIPrice1');
const TopSpeed = document.getElementById('TopSpeed1');
const CRange = document.getElementById('CRange1');
const Modes = document.getElementById('Modes1');
const Palette = document.getElementById('Palette1');
const CTime = document.getElementById('CTime1');
const SBWPeriod = document.getElementById('SBWPeriod1');
const PPerformance = document.getElementById('PP1');
const Keytype = document.getElementById('KeyType1');
const ComScrollLeft = document.getElementById('ComScrlLeft');
const ComScrollRight = document.getElementById('ComScrlRight');

ComScrollLeft.style.opacity = "0.0";
ComScrollLeft.style.pointerEvents = "none";
ComScrollRight.style.opacity = "1.0";
ComScrollRight.style.pointerEvents = "auto";

let compareIndex = 0;

ComScrollRight.addEventListener('pointerdown', () => {
  if (compareIndex === 0) {
    CompareImg.src = "images/EBikewBG2.png";
    ProName.textContent = "EVO 20A";
    OGPrice.textContent = "₹1,21999";
    EMIPrice.textContent = "EMI starts at ₹4,299";
    TopSpeed.textContent = "150 km/h";
    CRange.textContent = "85 km";
    Modes.textContent = "Eco, Normal, Sports";
    Palette.innerHTML = `
      <div id="color" class="w-4 h-4 rounded-full bg-[rgb(255,255,255)] border border-black"></div>
      <div id="color" class="w-4 h-4 rounded-full bg-[rgb(0,0,0)] border border-black"></div>
      <div id="color" class="w-4 h-4 rounded-full bg-[rgb(103,119,124)] border border-black"></div>
    `;
    CTime.textContent = "8.5 Hrs";
    SBWPeriod.textContent = "4yrs/40,000 kms";
    PPerformance.textContent = "10 kW";
    Keytype.textContent = "Smart Key";
    ComScrollLeft.style.opacity = "1.0";
    ComScrollLeft.style.pointerEvents = "auto";
    ComScrollRight.style.opacity = "1.0";
    ComScrollRight.style.pointerEvents = "auto";
    compareIndex = 1;
  }
  else if (compareIndex === 1) {
    CompareImg.src = "images/EBikewBG4.png";
    ProName.textContent = "EVO 50X";
    OGPrice.textContent = "₹1,35,999";
    EMIPrice.textContent = "EMI starts at ₹3,500";
    TopSpeed.textContent = "150 km/h";
    CRange.textContent = "100 km";
    Modes.textContent = "Eco, Normal Hyper";
    Palette.innerHTML = `
      <div id="color" class="w-4 h-4 rounded-full bg-[rgb(255,255,255)] border border-black"></div>
      <div id="color" class="w-4 h-4 rounded-full bg-[rgb(0,0,0)] border border-black"></div>
    `;
    CTime.textContent = "10 Hrs";
    SBWPeriod.textContent = "4yrs/60,000 kms";
    PPerformance.textContent = "15 kW";
    Keytype.textContent = "Smart Key,Mobile Key";
    compareIndex = 2;
    ComScrollLeft.style.opacity = "1.0";
    ComScrollLeft.style.pointerEvents = "auto";
    ComScrollRight.style.opacity = "0.0";
    ComScrollRight.style.pointerEvents = "none";
  }
});

ComScrollLeft.addEventListener('pointerdown', () => {
  if (compareIndex === 2) {
    CompareImg.src = "images/EBikewBG2.png";
    ProName.textContent = "EVO 20A";
    OGPrice.textContent = "₹1,21999";
    EMIPrice.textContent = "EMI starts at ₹4,299";
    TopSpeed.textContent = "150 km/h";
    CRange.textContent = "85 km";
    Modes.textContent = "Eco, Normal, Sports";
    Palette.innerHTML = `
      <div id="color" class="w-4 h-4 rounded-full bg-[rgb(255,255,255)] border border-black"></div>
      <div id="color" class="w-4 h-4 rounded-full bg-[rgb(0,0,0)] border border-black"></div>
      <div id="color" class="w-4 h-4 rounded-full bg-[rgb(103,119,124)] border border-black"></div>
    `;
    CTime.textContent = "8.5 Hrs";
    SBWPeriod.textContent = "4yrs/40,000 kms";
    PPerformance.textContent = "10 kW";
    Keytype.textContent = "Smart Key";
    ComScrollLeft.style.opacity = "1.0";
    ComScrollLeft.style.pointerEvents = "auto";
    ComScrollRight.style.opacity = "1.0";
    ComScrollRight.style.pointerEvents = "auto";
    compareIndex = 1;
  } 
  else if (compareIndex === 1) {
    CompareImg.src = "images/EBikewBG1.png";
    ProName.textContent = "EVO 10S";
    OGPrice.textContent = "₹1,04,999";
    EMIPrice.textContent = "EMI starts at ₹3,699";
    TopSpeed.textContent = "110 km/h";
    CRange.textContent = "60 km";
    Modes.textContent = "Eco, Normal";
    Palette.innerHTML = `
      <div id="color" class="w-4 h-4 rounded-full bg-[rgb(255,255,255)] border border-black"></div>
      <div id="color" class="w-4 h-4 rounded-full bg-[rgb(0,0,0)] border border-black"></div>
      <div id="color" class="w-4 h-4 rounded-full bg-[rgb(103,119,124)] border border-black"></div>
    `;
    CTime.textContent = "6 Hrs";
    SBWPeriod.textContent = "3yrs/30,000 kms";
    PPerformance.textContent = "7 kW";
    Keytype.textContent = "Standard Key";
    ComScrollLeft.style.opacity = "0.0";
    ComScrollLeft.style.pointerEvents = "none";
    ComScrollRight.style.opacity = "1.0";
    ComScrollRight.style.pointerEvents = "auto";
    compareIndex = 0;
  }
}); 
