document.addEventListener('DOMContentLoaded', () => {
    // Mouse Events
    const colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', () => {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      document.body.style.backgroundColor = randomColor;
    });
  
    colorButton.addEventListener('mouseover', () => {
      colorButton.style.backgroundColor = '#0056b3';
    });
  
    colorButton.addEventListener('mouseout', () => {
      colorButton.style.backgroundColor = '#007BFF';
    });
  
    // Keyboard Events
    const textBox = document.getElementById('textBox');
    const output = document.getElementById('output');
  
    textBox.addEventListener('keydown', (event) => {
      output.textContent = `You pressed "${event.key}".`;
    });
  
    // Other Events
    textBox.addEventListener('change', () => {
      output.textContent += ` TextBox value changed to "${textBox.value}".`;
    });
  
    const selectBox = document.getElementById('selectBox');
    selectBox.addEventListener('change', () => {
      output.textContent += ` Selected option: "${selectBox.value}".`;
    });
    
    window.addEventListener('resize', () => {
      output.textContent += ` Window resized to ${window.innerWidth}x${window.innerHeight}.`;
    });
  });
  