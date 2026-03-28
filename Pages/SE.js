import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBE06C511pKHuVzd0NOpOtjFfDzPh9TorI",
    authDomain: "ev-go--database-e631e.firebaseapp.com",
    databaseURL: "https://ev-go--database-e631e-default-rtdb.firebaseio.com",
    projectId: "ev-go--database-e631e",
    storageBucket: "ev-go--database-e631e.firebasestorage.app",
    messagingSenderId: "716019420520",
    appId: "1:716019420520:web:0098f36988a14e20c15add"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const contactInfoRef = ref(db, "ServiceEnquiryContactInfo");

function saveContactFormData(Fname, Email, Phone, State, City, PinCode, selectedValue, selectedService, SelectedRadio, serviceDate, InquiryType, Message) {
    let newContactInfoRef = push(contactInfoRef);
    set(newContactInfoRef, {
        Fname: Fname,
        Email: Email,
        Phone: Phone,
        State: State,
        City: City,
        PinCode: PinCode,
        SelectedValue: selectedValue,
        SelectedService: selectedService,
        SelectedRadio: SelectedRadio,
        ServiceDate: serviceDate,
        InquiryType: InquiryType,
        Message: Message
    });
}


// JS for Contact Page Tabs
// Contact Page Tabs
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


// JS for Image Upload and Preview
// Image Upload and Preview
function initializeImageUpload() {
    const displaySelectedImage = document.getElementById('ImagePreview');
    const addMore = document.getElementById('addMore');
    const imageUpload = document.getElementById('ImageUpload');
    
    if (displaySelectedImage && addMore && imageUpload) {
        addMore.addEventListener('click', () => imageUpload.click());
        displaySelectedImage.addEventListener('click', () => imageUpload.click());
        imageUpload.addEventListener('change', (event) => {
            const files = event.target.files;
            console.log("Selected files:", files);

            // Log each file
            Array.from(files).forEach((file, index) => {
                console.log(`Image ${index + 1}:`, {
                    name: file.name,
                    type: file.type,
                    size: file.size + " bytes"
                });
            });
            Array.from(files).forEach((file) => {
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const imgDiv = document.createElement('div');
                        imgDiv.classList.add('w-20', 'h-20', 'bg-gray-300', 'bg-cover', 'bg-center', 'bg-no-repeat', 'flex-wrap', 'relative', 'z-[20]', 'cursor-pointer', 'flex');
                        imgDiv.style.backgroundImage = `url(${e.target.result})`;
                        displaySelectedImage.appendChild(imgDiv);
                    };
                    reader.readAsDataURL(file);
                }
            });
            imageUpload.value = '';
        });
    } else {
        console.error('One or more elements are missing:', displaySelectedImage, addMore, imageUpload);
    }
}

initializeImageUpload();


// JS for Custom Dropdowns
// Custom Dropdown 1
function initializeDropdown1(dropdownBtnId, dropdownListId, selectedOptionId, hiddenInputId, dropdownIconId, customSelectWrapperId) {
    const dropdownBtn = document.getElementById(dropdownBtnId);
    const dropdownList = document.getElementById(dropdownListId);
    const selectedOption = document.getElementById(selectedOptionId);
    const hiddenInput = document.getElementById(hiddenInputId);
    const dropdownIcon = document.getElementById(dropdownIconId);
    const customSelectWrapper = document.getElementById(customSelectWrapperId);

    function triggerAnimation(el, className) {
        el.classList.remove(className);
        void el.offsetWidth;
        el.classList.add(className);
    }
    dropdownBtn.addEventListener("click", () => {
        dropdownList.classList.toggle("opacity-0");
        dropdownList.classList.toggle("scale-95");
        dropdownList.classList.toggle("scale-y-0");
        dropdownList.classList.toggle("scale-y-100");
        dropdownList.classList.toggle("pointer-events-none");
        dropdownIcon.classList.toggle("rotate-180");
        triggerAnimation(dropdownList, "bounce-in");
        triggerAnimation(customSelectWrapper, "bounce-in-wrapper");
    });
    document.querySelectorAll(`#${dropdownListId} li`).forEach((item) => {
        item.addEventListener("click", () => {
            selectedOption.textContent = item.textContent;
            selectedOption.classList.remove("text-neutral-400");
            selectedOption.classList.add("text-black");
            hiddenInput.value = item.dataset.value;
            dropdownList.classList.add("opacity-0", "scale-95", "scale-y-0", "pointer-events-none");
            dropdownIcon.classList.remove("rotate-180");
            triggerAnimation(dropdownList, "bounce-in");
            triggerAnimation(customSelectWrapper, "bounce-in-wrapper");
        });
    });
    document.addEventListener("click", (e) => {
        if (!customSelectWrapper.contains(e.target)) {
            dropdownList.classList.add("opacity-0", "scale-95", "scale-y-0", "pointer-events-none");
            dropdownIcon.classList.remove("rotate-180");
        }
    });
}

initializeDropdown1("dropdownBtn1", "dropdownList1", "selectedOption1", "hiddenModelInput1", "dropdownIcon1", "customSelectWrapper1");


// JS for Custom Dropdowns
// Custom Dropdown 2
function initializeDropdown2(dropdownBtnId, dropdownListId, selectedOptionId, hiddenInputId, dropdownIconId, customSelectWrapperId) {
    const dropdownBtn = document.getElementById(dropdownBtnId);
    const dropdownList = document.getElementById(dropdownListId);
    const selectedOption = document.getElementById(selectedOptionId);
    const hiddenInput = document.getElementById(hiddenInputId);
    const dropdownIcon = document.getElementById(dropdownIconId);
    const customSelectWrapper = document.getElementById(customSelectWrapperId);

    function triggerAnimation(el, className) {
        el.classList.remove(className);
        void el.offsetWidth;
        el.classList.add(className);
    }
    dropdownBtn.addEventListener("click", () => {
        dropdownList.classList.toggle("opacity-0");
        dropdownList.classList.toggle("scale-95");
        dropdownList.classList.toggle("scale-y-0");
        dropdownList.classList.toggle("scale-y-100");
        dropdownList.classList.toggle("pointer-events-none");
        dropdownIcon.classList.toggle("rotate-180");
        triggerAnimation(dropdownList, "bounce-in");
        triggerAnimation(customSelectWrapper, "bounce-in-wrapper");
    });
    document.querySelectorAll(`#${dropdownListId} li`).forEach((item) => {
        item.addEventListener("click", () => {
            selectedOption.textContent = item.textContent;
            selectedOption.classList.remove("text-neutral-400");
            selectedOption.classList.add("text-black");
            hiddenInput.value = item.dataset.value;
            dropdownList.classList.add("opacity-0", "scale-95", "scale-y-0", "pointer-events-none");
            dropdownIcon.classList.remove("rotate-180");
            triggerAnimation(dropdownList, "bounce-in");
            triggerAnimation(customSelectWrapper, "bounce-in-wrapper");
        });
    });
    document.addEventListener("click", (e) => {
        if (!customSelectWrapper.contains(e.target)) {
            dropdownList.classList.add("opacity-0", "scale-95", "scale-y-0", "pointer-events-none");
            dropdownIcon.classList.remove("rotate-180");
        }
    });
}

initializeDropdown2("dropdownBtn2", "dropdownList2", "selectedOption2", "hiddenModelInput2", "dropdownIcon2", "customSelectWrapper2");
   

// JS for Phone Number Input
// Phone Number Input
function initializePhoneInput() {
    const phoneInput = document.getElementById('Phone');
    const NOne = document.getElementById('NineOne');
  
    phoneInput.addEventListener('input', (event) => {
        phoneInput.value = phoneInput.value.replace(/\D/g, '');
        NOne.classList.add('text-black');
        if (phoneInput.value.length > 10) {
            phoneInput.value = phoneInput.value.slice(0, 10);
        }
    });
    phoneInput.addEventListener('input', () => {
        if (phoneInput.value.trim() !== '') {
            NOne.classList.remove('text-neutral-400');
            NOne.classList.add('text-black');
        } else {
            NOne.classList.remove('text-black');
            NOne.classList.add('text-neutral-400');
        }
    });
}

initializePhoneInput();


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

Overlay.addEventListener('pointerdown', closeMenu1);

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



// JS for Redirect Buttons
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


// JS for Form Submission
// Form Submission
// JS for Form Submission
// Form Submission
document.querySelector("#Content_Form").addEventListener("submit", function(e) {

    e.preventDefault();   // STOP normal form submission

    let form = document.getElementById("Content_Form");
    let formData = new FormData(form);

    // ---------- 1️⃣ SAVE TO FIREBASE ----------
    saveContactFormData(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("state"),
    formData.get("city"),
    formData.get("pincode"),
    formData.get("Model1"),
    formData.get("modelNumber"),
    formData.get("Model2"),
    formData.get("contactMethod"),
    formData.get("serviceDate"),
    formData.get("description"),
    formData.get("message")
);

    // ---------- 2️⃣ SEND TO PHP ----------
    fetch("service_enquiry.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Saved to Firebase + MySQL successfully!");
        console.log(data);
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
    });

});