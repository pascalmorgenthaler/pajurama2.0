'use strict'

// if(document.getElementById("fotografie").checked = true) {
//     document.getElementById("fotografie-check").classList.remove('hidden');
// };

// window.addEventListener("load", (event) => {
//     document.getElementById("personalbranding-auswahl").classList.add('hidden');
//   });

  window.onload = (event) => {
    document.getElementById("personalbranding-auswahl").classList.add('hidden');
    document.getElementById("unternehmen-auswahl").classList.add('hidden');
    document.getElementById("tourismus-auswahl").classList.add('hidden');
    document.getElementById("brand-auswahl").classList.add('hidden');
    document.getElementById("hotel-auswahl").classList.add('hidden');
    document.getElementById("fashion-auswahl").classList.add('hidden');
    document.getElementById("cafe-auswahl").classList.add('hidden');
    document.getElementById("etwas-anderes-auswahl").classList.add('hidden');
    document.getElementById("elopement-auswahl").classList.add('hidden');
    document.getElementById("couple-auswahl").classList.add('hidden');
    document.getElementById("intention-auswahl").classList.add('hidden');
    document.getElementById("etwas-anderes-2-auswahl").classList.add('hidden');
    document.getElementById("website-auswahl").classList.add('hidden');
    document.getElementById("onlineshop-auswahl").classList.add('hidden');
    document.getElementById("logo-auswahl").classList.add('hidden');
    document.getElementById("illustration-auswahl").classList.add('hidden');
  };

document.getElementById('fotografie-checkbox').addEventListener('click', function() {
    document.getElementById("fotografie-auswahl").classList.toggle('hidden');
    // CLOSE personalbranding when form is open and uncheck personalbranding-checkbox
    document.getElementById("personalbranding-auswahl").classList.add('hidden');
    document.getElementById('personalbranding-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck unternehmen-checkbox
    document.getElementById("unternehmen-auswahl").classList.add('hidden');
    document.getElementById('unternehmen-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck unternehmen-checkbox
    document.getElementById("tourismus-auswahl").classList.add('hidden');
    document.getElementById('tourismus-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck unternehmen-checkbox
    document.getElementById("brand-auswahl").classList.add('hidden');
    document.getElementById('brand-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck unternehmen-checkbox
    document.getElementById("hotel-auswahl").classList.add('hidden');
    document.getElementById('hotel-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck unternehmen-checkbox
    document.getElementById("fashion-auswahl").classList.add('hidden');
    document.getElementById('fashion-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck unternehmen-checkbox
    document.getElementById("cafe-auswahl").classList.add('hidden');
    document.getElementById('cafe-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck unternehmen-checkbox
    document.getElementById("etwas-anderes-auswahl").classList.add('hidden');
    document.getElementById('etwas-anderes-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck unternehmen-checkbox
    document.getElementById("etwas-anderes-2-auswahl").classList.add('hidden');
    document.getElementById('etwas-anderes-2-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck unternehmen-checkbox
    document.getElementById("elopement-auswahl").classList.add('hidden');
    document.getElementById('elopement-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck unternehmen-checkbox
    document.getElementById("couple-auswahl").classList.add('hidden');
    document.getElementById('couple-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck unternehmen-checkbox
    document.getElementById("intention-auswahl").classList.add('hidden');
    document.getElementById('intention-checkbox').checked = false;
});

document.getElementById('personalbranding-checkbox').addEventListener('click', function() {
    document.getElementById("personalbranding-auswahl").classList.toggle('hidden');
});

document.getElementById('unternehmen-checkbox').addEventListener('click', function() {
    document.getElementById("unternehmen-auswahl").classList.toggle('hidden');
});

document.getElementById('tourismus-checkbox').addEventListener('click', function() {
    document.getElementById("tourismus-auswahl").classList.toggle('hidden');
});

document.getElementById('brand-checkbox').addEventListener('click', function() {
    document.getElementById("brand-auswahl").classList.toggle('hidden');
});

document.getElementById('hotel-checkbox').addEventListener('click', function() {
    document.getElementById("hotel-auswahl").classList.toggle('hidden');
});

document.getElementById('fashion-checkbox').addEventListener('click', function() {
    document.getElementById("fashion-auswahl").classList.toggle('hidden');
});

document.getElementById('cafe-checkbox').addEventListener('click', function() {
    document.getElementById("cafe-auswahl").classList.toggle('hidden');
});

document.getElementById('etwas-anderes-checkbox').addEventListener('click', function() {
    document.getElementById("etwas-anderes-auswahl").classList.toggle('hidden');
});

document.getElementById('elopement-checkbox').addEventListener('click', function() {
    document.getElementById("elopement-auswahl").classList.toggle('hidden');
});

document.getElementById('couple-checkbox').addEventListener('click', function() {
    document.getElementById("couple-auswahl").classList.toggle('hidden');
});

document.getElementById('intention-checkbox').addEventListener('click', function() {
    document.getElementById("intention-auswahl").classList.toggle('hidden');
});

document.getElementById('etwas-anderes-2-checkbox').addEventListener('click', function() {
    document.getElementById("etwas-anderes-auswahl").classList.toggle('hidden');
});





document.getElementById('webdesign-checkbox').addEventListener('click', function() {
    document.getElementById("webdesign-auswahl").classList.toggle('hidden');
    // CLOSE personalbranding when form is open and uncheck personalbranding-checkbox
    document.getElementById("website-auswahl").classList.add('hidden');
    document.getElementById('website-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck personalbranding-checkbox
    document.getElementById("onlineshop-auswahl").classList.add('hidden');
    document.getElementById('onlineshop-checkbox').checked = false;
});


document.getElementById('website-checkbox').addEventListener('click', function() {
    document.getElementById("website-auswahl").classList.toggle('hidden');

    document.getElementById("onlineshop-auswahl").classList.add('hidden');
    document.getElementById('onlineshop-checkbox').checked = false;
});

document.getElementById('onlineshop-checkbox').addEventListener('click', function() {
    document.getElementById("onlineshop-auswahl").classList.toggle('hidden');

    document.getElementById("website-auswahl").classList.add('hidden');
    document.getElementById('website-checkbox').checked = false;
});





document.getElementById('branding-checkbox').addEventListener('click', function() {
    document.getElementById("branding-auswahl").classList.toggle('hidden');
    // CLOSE personalbranding when form is open and uncheck personalbranding-checkbox
    document.getElementById("logo-auswahl").classList.add('hidden');
    document.getElementById('logo-checkbox').checked = false;
    // CLOSE personalbranding when form is open and uncheck personalbranding-checkbox
    document.getElementById("illustration-auswahl").classList.add('hidden');
    document.getElementById('illustration-checkbox').checked = false;
});


document.getElementById('logo-checkbox').addEventListener('click', function() {
    document.getElementById("logo-auswahl").classList.toggle('hidden');
});

document.getElementById('illustration-checkbox').addEventListener('click', function() {
    document.getElementById("illustration-auswahl").classList.toggle('hidden');
});
