document.addEventListener('DOMContentLoaded', () => {
    // DOM Selectors
    const textPara = document.getElementById('textPara');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const inputField = document.getElementById('inputField');
    const appendTextBtn = document.getElementById('appendTextBtn');
    const outputDiv = document.getElementById('output');
  
    // DOM Manipulation
    changeTextBtn.addEventListener('click', () => {
      textPara.textContent = 'The text has been changed!';
    });
  
    changeColorBtn.addEventListener('click', () => {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      document.body.style.backgroundColor = randomColor;
    });
  
    appendTextBtn.addEventListener('click', () => {
      const text = inputField.value;
      if (text) {
        const newElement = document.createElement('p');
        newElement.textContent = text;
        outputDiv.appendChild(newElement);
        inputField.value = ''; // Clear input field
      }
    });
  });
  