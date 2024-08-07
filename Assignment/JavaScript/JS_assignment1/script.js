// Function to change the text of the <h1> tag
function changeHeading() {
    const heading = document.getElementById('heading');
    heading.textContent = 'Happy Learning!!';
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('btnChange');
    button.addEventListener('click', changeHeading);
});
