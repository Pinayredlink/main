function playVideo() {
    const video = document.querySelector('.video-card video');
    const playButton = document.querySelector('.play-button');
    video.play();
    playButton.style.display = 'none';
};

/*
document.getElementById("menuToggle").addEventListener("click", function () {
var menu = document.getElementById("menu");
menu.classList.toggle("show");
var content = document.getElementById("content");
content.classList.toggle("show");
}); 
*/

// Add JavaScript to handle the click event
document.getElementById("main-ads-button").addEventListener("click", function() {
    // This will open a new URL in a new tab/window when the ad button is clicked
    window.open("https://www.example.com", "_blank");
    this.style.display = "none";
});       

// Add JavaScript to handle the click event
document.getElementById("video-ads").addEventListener("click", function() {
    // This will open a new URL in a new tab/window when the ad button is clicked
    window.open("https://bit.ly/3Sqbu1I", "_blank");
    this.style.display = "none";
});

// Add JavaScript to handle the click event
document.getElementById("title-ads").addEventListener("click", function() {
    // This will open a new URL in a new tab/window when the ad button is clicked
    window.open("https://bit.ly/3suneWc", "_blank");
    this.style.display = "none";
});

document.getElementById("video-ads2").addEventListener("click", function() {
    // This will open a new URL in a new tab/window when the ad button is clicked
    window.open("https://bit.ly/4646keQ", "_blank");
    this.style.display = "none";
});

// Add JavaScript to handle the click event
document.getElementById("title-ads2").addEventListener("click", function() {
    // This will open a new URL in a new tab/window when the ad button is clicked
    window.open("https://bit.ly/3suneWc", "_blank");
    this.style.display = "none";
});

document.getElementById("video-ads3").addEventListener("click", function() {
    // This will open a new URL in a new tab/window when the ad button is clicked
    window.open("https://bit.ly/3u5qb01", "_blank");
    this.style.display = "none";
});

// Add JavaScript to handle the click event
document.getElementById("title-ads3").addEventListener("click", function() {
    // This will open a new URL in a new tab/window when the ad button is clicked
    window.open("https://bit.ly/3suneWc", "_blank");
    this.style.display = "none";
});