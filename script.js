function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
function setButtonColor(element) {
    const randomColor = getRandomColor();
    element.style.boxShadow = `0 0 20px ${randomColor}`;
    element.style.color = `${randomColor}`;
}


function setRandomColor(){
  const boxes = document.getElementsByClassName("colorGenerationToggle")

  for (const box of boxes) {
    const randomColor = getRandomColor();
    box.value = `${randomColor}`;
    box.nextElementSibling.value = `${randomColor}`;
  }
} 

function changeIcon(element) {
  const icon = element.firstElementChild;
  icon.classList.toggle("fa-lock-open");
  icon.classList.toggle("fa-lock");
}

function toggleRandomColor(element) {
  const box = element.nextElementSibling;
  box.classList.toggle("colorGenerationToggle");
}


