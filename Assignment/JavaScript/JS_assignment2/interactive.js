// Function to display the greeting message
function displayGreeting() {
    const nameInput = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greetingMessage');

    if (nameInput.trim() !== "") {
        greetingMessage.innerHTML = `<span style="font-weight: bold; color: #000080;">Hello, ${nameInput}!</span> 
                                     <span style="font-size: 20px; color: #008080;">Welcome to our wonderful interactive page.</span> 
                                     <span style="font-style: italic; color: #808000;">We hope you have a fantastic experience!</span>`;
    } else {
        greetingMessage.textContent = "Please enter your name above and click submit to get a personalized greeting.";
    }
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('submitButton');
    button.addEventListener('click', displayGreeting);
});
