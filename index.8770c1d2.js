var $5c9b0c3b0671b902$exports = {};
window.addEventListener("load", function() {
    window.cookieconsent.initialise({
        type: "opt-in",
        palette: {
            popup: {
                background: "#000"
            },
            button: {
                background: "#f1d600"
            }
        },
        theme: "classic",
        content: {
            message: "This website uses cookies to improve user experience.",
            allow: "Allow cookies",
            deny: "Deny cookies",
            link: "Learn more",
            href: "/privacy-policy" // replace with your privacy policy URL
        },
        onInitialise: function(status) {
            if (this.hasConsented()) console.log("\u2705 Cookies allowed");
            else console.log("\uD83D\uDEAB Cookies denied");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const revokeBtn = document.querySelector(".cc-revoke.cc-bottom");
    if (revokeBtn) {
        let isVisible = false;
        revokeBtn.addEventListener("click", function() {
            isVisible = !isVisible;
            revokeBtn.style.transform = isVisible ? "translateY(0)" : "translateY(90%)";
            revokeBtn.style.opacity = isVisible ? "1" : "0.6";
        });
    }
});


//# sourceMappingURL=index.8770c1d2.js.map
