const button = document.querySelector('.animated-button');

button.addEventListener('click', () => {
  
  button.classList.add('clicked');

  
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 200); 
});
