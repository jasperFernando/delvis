var $1e9f4526c8082438$exports = {};
window.submittedd = false; // Declare a global variable to track form submission
// Validate Name
function $1e9f4526c8082438$var$validateName() {
    var name = document.getElementById('name').value;
    if (name.trim().length === 0) {
        alert('Name can\'t be blank');
        return false;
    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert('Please enter your correct name');
        return false;
    }
    return true;
}
function $1e9f4526c8082438$var$validatePhone() {
    var phone1 = document.getElementById('phone').value.trim();
    if (phone1.length === 0) return true; // Phone is optional
    // Regex for UAE numbers (05XXXXXXXX or +9715XXXXXXXX)
    var uaeRegex = /^(?:\+971|0)5[0-9]{8}$/;
    // Regex for international numbers (+ followed by 6-15 digits)
    var intlRegex = /^\+?[1-9]\d{5,14}$/;
    if (!uaeRegex.test(phone1) && !intlRegex.test(phone1)) {
        alert('Please enter a valid UAE or international phone number');
        return false;
    }
    return true;
}
// Validate Email
function $1e9f4526c8082438$var$validateEmail() {
    var email = document.getElementById('email').value;
    if (email.length === 0) {
        alert('Email can\'t be blank');
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        alert('Please enter a correct email address');
        return false;
    }
    return true;
}
// Validate Full Form
window.validateForm = function() {
    if (!$1e9f4526c8082438$var$validateName() || !$1e9f4526c8082438$var$validatePhone() || !$1e9f4526c8082438$var$validateEmail()) {
        alert('Form not submitted');
        return false;
    } else {
        // window.submittedd = true;
        sessionStorage.setItem('formSubmitted', 'true');
        setTimeout($1e9f4526c8082438$var$showThankYouMessage, 100); // Show the thank-you message after 1 second
        return true;
    }
};
// Function to show thank-you message after submission
function $1e9f4526c8082438$var$showThankYouMessage() {
    document.getElementById('thank-message').style.display = 'block';
    document.getElementById('subb').style.display = 'none';
    document.getElementById('myForm').style.display = 'none';
}
// Handle Popup Logic
document.addEventListener("DOMContentLoaded", function() {
    var popupContainer = document.getElementById('popup-container');
    var closeBtn = document.getElementById('close-btn');
    var contactUsLinks = document.querySelectorAll('#contact-us-link-desktop, #contact-us-link-mobile');
    // Show popup after 5 seconds if not already shown
    if (!localStorage.getItem('popupShown')) setTimeout(function() {
        popupContainer.style.display = 'block';
        popupContainer.classList.add('show');
    }, 5000);
    else popupContainer.style.display = 'none';
    // Close popup event
    closeBtn.addEventListener('click', function() {
        popupContainer.classList.add('hide');
        setTimeout(function() {
            popupContainer.style.display = 'none';
            popupContainer.classList.remove('hide', 'show');
        }, 500);
        localStorage.setItem('popupShown', 'true');
    });
    // Show popup when clicking "Contact Us"
    contactUsLinks.forEach((link)=>{
        link.addEventListener('click', function(event) {
            event.preventDefault();
            popupContainer.style.display = 'block';
            popupContainer.classList.add('show');
            localStorage.setItem('popupShown', 'true');
        });
        if (localStorage.getItem('formSubmitted') === 'true') $1e9f4526c8082438$var$showThankYouMessage();
    });
}); // function toggleServiceSection(sectionId) {
 //     console.log('toggleServiceSection called with sectionId:', sectionId);
 //     var section = document.getElementById(sectionId);
 //     if (section) {
 //         section.style.display = section.style.display === 'none' ? 'block' : 'none';
 //     } else {
 //         console.error('Section not found: ' + sectionId);
 //     }
 // }


//# sourceMappingURL=index.3ebb61bf.js.map
