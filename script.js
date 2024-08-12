// script.js
const totalImages = 48;
const imageElement = document.getElementById('product-image');
const sliderElement = document.getElementById('image-slider');

const updateImage = (index) => {
    const paddedIndex = String(index + 1).padStart(2, '0');
    imageElement.src = `images/image${paddedIndex}.jpg`;
};

sliderElement.addEventListener('input', (e) => {
    const index = parseInt(e.target.value, 10);
    updateImage(index);
});
