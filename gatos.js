const words = ["Los gatos, científicamente conocidos como Felis catus.", "La mayoría de las razas de gatos tienen un pelaje suave y lujoso.", "Se les consideraba guardianes de los hogares."];
const wordCarousel = document.getElementById("word-carousel");
let currentIndex = 0;

function rotateWords() {
    wordCarousel.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
}

setInterval(rotateWords, 2000); 