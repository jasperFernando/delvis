console.log('script.js loaded');
$(document).ready(function() {
    console.log('Script loaded');
    // Function to toggle sections based on checkbox state
    function toggleServiceSection(sectionId, checkbox) {
        if (checkbox.is(':checked')) $('#' + sectionId).slideDown(); // Slide down if checked
        else $('#' + sectionId).slideUp(); // Slide up if unchecked
    }
    // Event listeners for the checkboxes
    $('#installation').on('change', function() {
        toggleServiceSection('installation-details', $(this));
    });
    $('#modernization').on('change', function() {
        toggleServiceSection('modernization-details', $(this));
    });
    $('#maintenance').on('change', function() {
        toggleServiceSection('maintenance-details', $(this));
    });
});
// workds fine 
document.addEventListener("DOMContentLoaded", function() {
    // Fade in when page loads
    document.body.classList.add("loaded");
    // Find all links and apply fade-out before navigation
    document.querySelectorAll("a:not([target='_blank'])").forEach((link)=>{
        link.addEventListener("click", function(event) {
            if (this.href.startsWith(window.location.origin) && !this.href.includes("#")) {
                event.preventDefault(); // Stop default navigation
                document.body.classList.add("fade-out"); // Start fade-out effect
                setTimeout(()=>{
                    window.location.href = this.href; // Navigate after fade-out
                }, 500); // Match CSS transition time (0.5s)
            }
        });
    });
});
// Handle browser Back and Forward buttons, remove fade-out so page is visible
window.addEventListener("pageshow", function(event) {
    document.body.classList.remove("fade-out");
}); // protect
 // document.addEventListener("contextmenu", (event) => event.preventDefault());
 // document.addEventListener("keydown", (event) => {
 //   if (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "i" || event.key === "j")) {
 //     event.preventDefault();
 //   }
 // });
 // document.addEventListener("keydown", function (event) {
 //     if (
 //         (event.ctrlKey && event.shiftKey && event.key === "I") ||  // Ctrl + Shift + I
 //         (event.ctrlKey && event.shiftKey && event.key === "J") ||  // Ctrl + Shift + J
 //         (event.ctrlKey && event.key === "U") ||  // Ctrl + U (View Page Source)
 //         (event.key === "F12")  // F12 (Open DevTools)
 //     ) {
 //         event.preventDefault();
 //         alert("DevTools is disabled!");
 //     }
 // });
 // setInterval(() => {
 //     if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
 //         alert("DevTools detected! Closing the page...");
 //         window.location.href = "about:blank"; // Redirect to an empty page
 //     }
 // }, 1000);
 // (function detectDevTools() {
 //     const threshold = 160; // Minimum difference to detect DevTools open
 //     function checkDevTools() {
 //         if (window.outerWidth - window.innerWidth > threshold || 
 //             window.outerHeight - window.innerHeight > threshold) {
 //             alert("DevTools detected! Closing the page...");
 //             window.location.href = "about:blank"; // Redirect to an empty page
 //         }
 //     }
 //     // Run detection every second
 //     setInterval(checkDevTools, 1000);
 //     // Detect resize event (triggers when DevTools opens)
 //     window.addEventListener("resize", checkDevTools);
 // })();
 // setInterval(() => {
 //     console.clear(); // Keeps clearing console output
 // }, 100);
 // // document.body.innerHTML = "";
 // // setTimeout(() => {
 // //     document.body.innerHTML = "<h1>Secure Content</h1><p>This content is loaded dynamically.</p>";
 // // }, 1000);
 // const obfuscatedCode = "console.log('This code is hidden');";
 // eval(obfuscatedCode);
 // (function () {
 //     let devToolsOpened = false;
 //     function detectDevTools() {
 //         const element = new Image();
 //         Object.defineProperty(element, "id", {
 //             get: function () {
 //                 devToolsOpened = true;
 //                 triggerProtection();
 //             }
 //         });
 //         console.log("%c", element); // Will trigger when console is open
 //     }
 //     function detectDebugger() {
 //         const start = performance.now();
 //         debugger; // Causes a delay when DevTools is open
 //         const end = performance.now();
 //         if (end - start > 100) {
 //             devToolsOpened = true;
 //             triggerProtection();
 //         }
 //     }
 //     function triggerProtection() {
 //         if (devToolsOpened) {
 //             document.body.innerHTML = "";
 //             setTimeout(() => {
 //                 document.body.innerHTML = "<h1>Secure Content</h1><p>Access Restricted.</p>";
 //             }, 1000);
 //         }
 //     }
 //     function checkOnLoad() {
 //         setTimeout(() => {
 //             detectDevTools();
 //             detectDebugger();
 //         }, 500); // Delay check to ensure DevTools was already open
 //     }
 //     // Run checks on page load and continuously every second
 //     checkOnLoad();
 //     setInterval(() => {
 //         detectDevTools();
 //         detectDebugger();
 //     }, 1000);
 //     // Prevent right-click & common DevTools shortcuts
 //     document.addEventListener("contextmenu", (e) => e.preventDefault());
 //     document.addEventListener("keydown", (e) => {
 //         if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.key === "u")) {
 //             e.preventDefault();
 //         }
 //     });
 // })();

//# sourceMappingURL=index.5fcf13db.js.map
