var $df8da4b5726af936$exports = {};
// WORKING CODE
const $df8da4b5726af936$var$cursor = document.querySelector(".custom-cursor");
const $df8da4b5726af936$var$cursorDot = document.querySelector(".cursor-dot");
const $df8da4b5726af936$var$links = document.querySelectorAll("a, button");
let $df8da4b5726af936$var$isCursorInited = false;
let $df8da4b5726af936$var$targetX = 0, $df8da4b5726af936$var$targetY = 0; // Target position of the cursor
let $df8da4b5726af936$var$currentX = 0, $df8da4b5726af936$var$currentY = 0; // Current position of the cursor
const $df8da4b5726af936$var$cursorSpeed = 0.05; // Control the lag speed (smaller is more laggy)
// Initialize the cursor
const $df8da4b5726af936$var$initCursor = ()=>{
    $df8da4b5726af936$var$cursor.classList.add("custom-cursor--init");
    $df8da4b5726af936$var$isCursorInited = true;
};
// Destroy the cursor on mouse out
const $df8da4b5726af936$var$destroyCursor = ()=>{
    $df8da4b5726af936$var$cursor.classList.remove("custom-cursor--init");
    $df8da4b5726af936$var$isCursorInited = false;
};
// Detect hover over elements and change cursor state
// links.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     cursor.classList.add("custom-cursor--link");
//   });
//   link.addEventListener("mouseout", () => {
//     cursor.classList.remove("custom-cursor--link");
//   });
// });
$df8da4b5726af936$var$links.forEach((link)=>{
    link.addEventListener("mouseover", ()=>{
        clearTimeout($df8da4b5726af936$var$cursor.leaveTimeout);
        $df8da4b5726af936$var$cursor.classList.remove("custom-cursor--out");
        $df8da4b5726af936$var$cursor.classList.add("custom-cursor--link");
    });
    link.addEventListener("mouseout", ()=>{
        // First: trigger the "out" animation
        $df8da4b5726af936$var$cursor.classList.remove("custom-cursor--link");
        $df8da4b5726af936$var$cursor.classList.add("custom-cursor--out");
        // Optional: Remove .custom-cursor--out after animation completes
        $df8da4b5726af936$var$cursor.leaveTimeout = setTimeout(()=>{
            $df8da4b5726af936$var$cursor.classList.remove("custom-cursor--out");
        }, 300); // match the transition time
    });
});
// Update cursor position smoothly with lag effect
const $df8da4b5726af936$var$updateCursorPosition = ()=>{
    // Interpolate current position towards target position (for laggy effect)
    $df8da4b5726af936$var$currentX += ($df8da4b5726af936$var$targetX - $df8da4b5726af936$var$currentX) * $df8da4b5726af936$var$cursorSpeed;
    $df8da4b5726af936$var$currentY += ($df8da4b5726af936$var$targetY - $df8da4b5726af936$var$currentY) * $df8da4b5726af936$var$cursorSpeed;
    // Update the large cursor position
    $df8da4b5726af936$var$cursor.style.left = `${$df8da4b5726af936$var$currentX}px`;
    $df8da4b5726af936$var$cursor.style.top = `${$df8da4b5726af936$var$currentY}px`;
    // Update the small dot position
    $df8da4b5726af936$var$cursorDot.style.left = `${$df8da4b5726af936$var$targetX}px`;
    $df8da4b5726af936$var$cursorDot.style.top = `${$df8da4b5726af936$var$targetY}px`;
    // Repeat this animation frame
    requestAnimationFrame($df8da4b5726af936$var$updateCursorPosition);
};
// Mouse move event to update target position
document.addEventListener("mousemove", (e)=>{
    $df8da4b5726af936$var$targetX = e.clientX;
    $df8da4b5726af936$var$targetY = e.clientY;
    // Initialize cursor if not yet initialized
    if (!$df8da4b5726af936$var$isCursorInited) $df8da4b5726af936$var$initCursor();
});
// Destroy cursor on mouse out
document.addEventListener("mouseout", $df8da4b5726af936$var$destroyCursor);
// Start the laggy cursor movement
$df8da4b5726af936$var$updateCursorPosition();
// const lottieDiv = document.querySelector(".home-header_lottie-desktop");
// const parallaxSpeed = 0.02; // Adjust for more/less movement
// const updateParallax = () => {
//   if (!lottieDiv) return;
//   const centerX = window.innerWidth / 2;
//   const centerY = window.innerHeight / 2;
//   const moveX = (targetX - centerX) * parallaxSpeed;
//   const moveY = (targetY - centerY) * parallaxSpeed;
//   gsap.to(lottieDiv, {
//     x: moveX,
//     y: moveY,
//     duration: 0.6,
//     ease: "power3.out",
//   });
//   requestAnimationFrame(updateParallax);
// };
// updateParallax();
// // test
const $df8da4b5726af936$var$lottieDiv = document.querySelector(".home-header_lottie-desktop");
const $df8da4b5726af936$var$lottieSection = document.querySelector(".lott"); // wrap the Lottie in a section or container
const $df8da4b5726af936$var$parallaxTiltIntensity = 10;
const $df8da4b5726af936$var$lerpSpeed = 0.1;
let $df8da4b5726af936$var$currentTiltX = 0;
let $df8da4b5726af936$var$currentTiltY = 0;
let $df8da4b5726af936$var$localX = 0;
let $df8da4b5726af936$var$localY = 0;
let $df8da4b5726af936$var$isInSection = false;
document.addEventListener("mousemove", (e)=>{
    const rect = $df8da4b5726af936$var$lottieSection.getBoundingClientRect();
    $df8da4b5726af936$var$isInSection = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    if ($df8da4b5726af936$var$isInSection) {
        $df8da4b5726af936$var$localX = e.clientX - rect.left;
        $df8da4b5726af936$var$localY = e.clientY - rect.top;
    }
});
function $df8da4b5726af936$var$updateLottie3DTilt() {
    if (!$df8da4b5726af936$var$lottieDiv) return;
    if ($df8da4b5726af936$var$isInSection) {
        const rect = $df8da4b5726af936$var$lottieSection.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const offsetX = $df8da4b5726af936$var$localX - centerX;
        const offsetY = $df8da4b5726af936$var$localY - centerY;
        const percentX = offsetX / centerX;
        const percentY = offsetY / centerY;
        const targetTiltY = percentX * $df8da4b5726af936$var$parallaxTiltIntensity * -1;
        const targetTiltX = percentY * $df8da4b5726af936$var$parallaxTiltIntensity;
        $df8da4b5726af936$var$currentTiltX += (targetTiltX - $df8da4b5726af936$var$currentTiltX) * $df8da4b5726af936$var$lerpSpeed;
        $df8da4b5726af936$var$currentTiltY += (targetTiltY - $df8da4b5726af936$var$currentTiltY) * $df8da4b5726af936$var$lerpSpeed;
    } else {
        // Slowly return to 0 rotation when mouse leaves the section
        $df8da4b5726af936$var$currentTiltX += (0 - $df8da4b5726af936$var$currentTiltX) * $df8da4b5726af936$var$lerpSpeed;
        $df8da4b5726af936$var$currentTiltY += (0 - $df8da4b5726af936$var$currentTiltY) * $df8da4b5726af936$var$lerpSpeed;
    }
    gsap.set($df8da4b5726af936$var$lottieDiv, {
        rotationX: $df8da4b5726af936$var$currentTiltX,
        rotationY: $df8da4b5726af936$var$currentTiltY,
        transformPerspective: 800,
        transformOrigin: "center center"
    });
    requestAnimationFrame($df8da4b5726af936$var$updateLottie3DTilt);
}
$df8da4b5726af936$var$updateLottie3DTilt();


//# sourceMappingURL=index.fcd71397.js.map
