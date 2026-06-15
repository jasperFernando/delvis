var $0b71062ba1da86fb$exports = {};
const $0b71062ba1da86fb$var$products = [
    {
        name: "Passenger Elevators",
        url: "./services.html#pass-ele"
    },
    {
        name: "Home Elevators",
        url: "./services.html#home-ele"
    },
    {
        name: "Freight Elevators",
        url: "./services.html#frei-ele"
    },
    {
        name: "Hospital Elevators",
        url: "./services.html#hos-ele"
    },
    {
        name: "Panoramic Elevators",
        url: "./services.html#pano-ele"
    },
    {
        name: "24/7 Emergency Support",
        url: "./services.html#24-ele"
    },
    {
        name: "Installation",
        url: "./services.html#enroll-section"
    },
    {
        name: "Modernization",
        url: "./services.html#enroll-section"
    },
    {
        name: "Service",
        url: "./services.html#enroll-section"
    },
    {
        name: "Maintenance",
        url: "./services.html#enroll-section"
    },
    {
        name: "Elevators",
        url: "./services.html"
    },
    {
        name: "Escalators",
        url: "./services.html"
    },
    {
        name: "Canny",
        url: "./services.html"
    },
    {
        name: "Mitsubishi",
        url: "./services.html"
    }
];
const $0b71062ba1da86fb$var$openSearch = document.getElementById("openSearch");
const $0b71062ba1da86fb$var$closeSearch = document.getElementById("closeSearch");
const $0b71062ba1da86fb$var$searchOverlay = document.getElementById("searchOverlay");
const $0b71062ba1da86fb$var$searchInput = document.getElementById("searchInput");
const $0b71062ba1da86fb$var$searchResults = document.getElementById("searchResults");
// Open search overlay
$0b71062ba1da86fb$var$openSearch.addEventListener("click", ()=>{
    $0b71062ba1da86fb$var$searchOverlay.style.opacity = "1";
    $0b71062ba1da86fb$var$searchOverlay.style.pointerEvents = "auto";
    $0b71062ba1da86fb$var$searchInput.focus();
});
// Close search overlay
$0b71062ba1da86fb$var$closeSearch.addEventListener("click", $0b71062ba1da86fb$var$closeSearchOverlay);
document.addEventListener("keydown", (e)=>{
    if (e.key === "Escape") $0b71062ba1da86fb$var$closeSearchOverlay();
});
document.addEventListener("click", (e)=>{
    if (!$0b71062ba1da86fb$var$searchOverlay.contains(e.target) && !$0b71062ba1da86fb$var$openSearch.contains(e.target)) $0b71062ba1da86fb$var$closeSearchOverlay();
});
// Function to close the search overlay
function $0b71062ba1da86fb$var$closeSearchOverlay() {
    $0b71062ba1da86fb$var$searchOverlay.style.opacity = "0";
    $0b71062ba1da86fb$var$searchOverlay.style.pointerEvents = "none";
    $0b71062ba1da86fb$var$searchResults.innerHTML = ""; // Clear results
}
$0b71062ba1da86fb$var$searchInput.addEventListener("input", function() {
    const query = $0b71062ba1da86fb$var$searchInput.value.toLowerCase();
    $0b71062ba1da86fb$var$searchResults.innerHTML = ""; // Clear previous results
    if (query.trim() === "") {
        $0b71062ba1da86fb$var$searchResults.style.display = "none";
        return;
    }
    // Filter matching products
    const filteredProducts = $0b71062ba1da86fb$var$products.filter((product)=>product.name.toLowerCase().includes(query));
    if (filteredProducts.length === 0) $0b71062ba1da86fb$var$searchResults.innerHTML = "<p class='text-gray-400 text-center'>No results found</p>";
    else filteredProducts.forEach((product, index)=>{
        const item = document.createElement("a");
        item.href = product.url;
        item.textContent = product.name;
        item.classList = "search-result-item block p-3 rounded mt-2 cursor-pointer hover:bg-gray-700 text-gray-400 transition text-center";
        // Delay animation for a smooth staggered effect
        item.style.animationDelay = `${index * 0.05}s`;
        $0b71062ba1da86fb$var$searchResults.appendChild(item);
    });
    $0b71062ba1da86fb$var$searchResults.style.display = "block";
});
document.getElementById("search-btn").addEventListener("click", function() {
    document.querySelector(".nav_search-container").classList.add("active");
});
document.addEventListener("click", function(event) {
    let searchContainer = document.querySelector(".nav_search-container");
    if (!searchContainer.contains(event.target) && !event.target.matches("#search-btn")) searchContainer.classList.remove("active");
});


//# sourceMappingURL=index.4b7a6a68.js.map
