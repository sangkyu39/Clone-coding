const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.querySelector('body');

// Create a new element
// const bgimage = document.createElement("img");
// bgimage.src = `img/${chosenImage}`;
document.body.style.backgroundImage = "url(img/" + chosenImage + ")";

// Add the image to the body
// document.body.appendChild(bgimage);
