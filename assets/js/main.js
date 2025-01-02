document.addEventListener("DOMContentLoaded", () => {
    const marqueeContent = document.querySelector(".marquee-content");
    marqueeContent.innerHTML += marqueeContent.innerHTML; // Duplicate content
});
