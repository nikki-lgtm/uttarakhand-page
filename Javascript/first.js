// Function to handle scrolling for both sections
function setupScrolling(prevBtnId, nextBtnId, containerClass) {
    const container = document.querySelector(containerClass);
    const scrollAmount = 300; // Adjust as needed

    document.getElementById(prevBtnId).addEventListener("click", () => {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    document.getElementById(nextBtnId).addEventListener("click", () => {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}

// Initialize scrolling for both containers
setupScrolling("prevBtn", "nextBtn", ".new-box-container1");
setupScrolling("prevButton", "nextButton", ".updated-box-container");
