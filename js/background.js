const images =["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backImg = document.createElement("img");

backImg.src = `img/${chosenImage}`;

document.body.appendChild(backImg);