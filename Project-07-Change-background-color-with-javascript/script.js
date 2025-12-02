function changeBackground() {
  document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  // Generates a random color in hex format
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
