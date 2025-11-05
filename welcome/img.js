// Get references to the loader and the image elements
var loader = document.getElementById("loader");
var myImageElement = document.getElementById("aquaemp");

// Get the image name from the URL parameter
var myimageName = new URLSearchParams(window.location.search).get('image');

// --- This is the new part ---
// Define what happens when the image finishes loading
myImageElement.onload = function() {
    loader.style.display = 'none';    // Hide the loader
    myImageElement.style.display = 'block'; // Show the image
};

// Define what happens if the image fails to load (optional but good)
myImageElement.onerror = function() {
    loader.style.display = 'none'; // Hide the loader
    // You could show an error message here if you want
    console.error("Image failed to load.");
};

// Set the image source. This starts the loading process.
myImageElement.src = myimageName + ".png";
