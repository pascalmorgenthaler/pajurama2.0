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