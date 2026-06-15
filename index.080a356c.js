var $294e74850dbede7a$exports = {};
window.submitted = false; // Declare a global variable to track form submission
// Function to show thank-you message after submission
function $294e74850dbede7a$var$showThankYouMessage1() {
    document.getElementById('thankyou-message1').style.display = 'block';
    document.getElementById('subb1').style.display = 'none';
    document.getElementById('quoteForm').style.display = 'none';
    // Close popup after a delay (optional)
    setTimeout(()=>{
        document.getElementById('popup-container1').style.display = 'none';
    }, 3000);
}
// Validate Name
function $294e74850dbede7a$var$validateName1() {
    var name1 = document.getElementById('name1').value;
    if (name1.trim().length === 0) {
        alert('Name can\'t be blank');
        return false;
    }
    if (!name1.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert('Please enter your correct name');
        return false;
    }
    return true;
}
function $294e74850dbede7a$var$validatePhone1() {
    var phone1 = document.getElementById('phone1').value.trim();
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
function $294e74850dbede7a$var$validateEmail1() {
    var email1 = document.getElementById('email1').value;
    if (email1.length === 0) {
        alert('Email can\'t be blank');
        return false;
    }
    if (!email1.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        alert('Please enter a correct email address');
        return false;
    }
    return true;
}
function $294e74850dbede7a$var$validateServiceSelection() {
    // Get visibility of each service section
    const installationVisible = document.getElementById('installation-details').style.display !== 'none';
    const modernizationVisible = document.getElementById('modernization-details').style.display !== 'none';
    const maintenanceVisible = document.getElementById('maintenance-details').style.display !== 'none';
    // Check if at least one is visible
    if (!installationVisible && !modernizationVisible && !maintenanceVisible) {
        alert('Please select at least one service (Installation, Modernization, or Maintenance).');
        return false;
    }
    // You can add further checks if required to validate the contents inside the shown section
    return true;
}
function $294e74850dbede7a$var$validateServiceDetails() {
    let isAnyValid = false;
    // Validate Installation Section if visible
    const installationVisible = document.getElementById('installation-details').style.display !== 'none';
    if (installationVisible) {
        const budget1 = document.getElementById('budget1').value;
        const floors1 = document.getElementById('floor1').value.trim();
        if (budget1 !== '----' && floors1 !== '' && !isNaN(floors1) && parseInt(floors1) >= 1) isAnyValid = true;
    }
    // Validate Modernization Section if visible
    const modernizationVisible = document.getElementById('modernization-details').style.display !== 'none';
    if (modernizationVisible) {
        const budget2 = document.getElementById('budget2').value;
        const floors2 = document.getElementById('floor2').value.trim();
        const scope = document.getElementById('modernization-scope').value.trim();
        if (budget2 !== '----' && floors2 !== '' && !isNaN(floors2) && parseInt(floors2) >= 1 && scope !== '') isAnyValid = true;
    }
    // Validate Maintenance Section if visible
    const maintenanceVisible = document.getElementById('maintenance-details').style.display !== 'none';
    if (maintenanceVisible) {
        const frequency = document.getElementById('maintenance-frequency').value;
        const budget3 = document.getElementById('budget3').value;
        const floors3 = document.getElementById('floor3').value.trim();
        if (frequency !== '----' && budget3 !== '----' && floors3 !== '' && !isNaN(floors3) && parseInt(floors3) >= 1) isAnyValid = true;
    }
    // Final result
    if (!isAnyValid) {
        alert('Please fill in valid details for at least one visible service section.');
        return false;
    }
    return true;
}
// Validate Full Form
window.validateForm1 = function() {
    if (!$294e74850dbede7a$var$validateName1() || !$294e74850dbede7a$var$validatePhone1() || !$294e74850dbede7a$var$validateEmail1() || !$294e74850dbede7a$var$validateServiceSelection() || !$294e74850dbede7a$var$validateServiceDetails()) {
        alert('Form not submitted');
        return false;
    } else {
        window.submitted = true;
        setTimeout($294e74850dbede7a$var$showThankYouMessage1, 100); // Show the thank-you message after 1 second
        return true;
    }
};
// Handle Popup Logic Quote
document.addEventListener("DOMContentLoaded", function() {
    var popupContainer1 = document.getElementById('popup-container1');
    var closeBtn1 = document.getElementById('close-btn1');
    var contactUsLinks1 = document.querySelectorAll('#quote-us-link-desktop, #quote-us-link-mobile');
    // Show popup after 5 seconds if not already shown
    // if (!sessionStorage.getItem('popupShown')) {
    //     setTimeout(function () {
    //         popupContainer1.style.display = 'block';
    //         popupContainer1.classList.add('show');
    //     }, 5000);
    // } else {
    //     popupContainer1.style.display = 'none';
    // }
    // Close popup event
    closeBtn1.addEventListener('click', function() {
        popupContainer1.classList.add('hide');
        setTimeout(function() {
            popupContainer1.style.display = 'none';
            popupContainer1.classList.remove('hide', 'show');
        }, 500);
        sessionStorage.setItem('popupShown', true);
    });
    // Show popup when clicking "Contact Us"
    contactUsLinks1.forEach((link)=>{
        link.addEventListener('click', function(event) {
            event.preventDefault();
            popupContainer1.style.display = 'block';
            popupContainer1.classList.add('show');
            sessionStorage.setItem('popupShown', true);
        });
    });
});


//# sourceMappingURL=index.080a356c.js.map
