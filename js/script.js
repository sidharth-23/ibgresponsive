// $(document).ready(function () {
//     $('.hamburger-menu').click(function () {
//         $('.linksinnav ul').toggleClass('active');
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    // This function runs when the document is fully loaded and ready

    var hamburgerMenu = document.querySelector('.hamburger-menu');
    // Select the element with the class 'hamburger-menu'

    var navLinks = document.querySelector('.linksinnav ul');
    // Select the unordered list inside the element with the class 'linksinnav'

    hamburgerMenu.addEventListener('click', function () {
        // This function is executed when the hamburger icon is clicked

        navLinks.classList.toggle('active');
        // It toggles (adds or removes) the 'active' class on the unordered list
    });
});


 // Function to increment the number gradually
 function incrementNumberGradually(targetValue) {
    var currentNumber = 0;
    var incrementInterval = 1; // milliseconds
    var incrementAmount = 10;

    // Function to update the counter element with the current value
    function updateCounter() {
        document.getElementById('counter').innerText = currentNumber;
    }
    

    // Function to increment the number and update the counter
    function increment() {
        if (currentNumber < targetValue) {
            currentNumber += incrementAmount;
            updateCounter();
        } else {
            clearInterval(intervalId); // Stop the interval when target is reached
        }
    }

    // Set an interval to call the increment function
    var intervalId = setInterval(increment, incrementInterval);
}

// Call the incrementNumberGradually function when the page loads
window.onload = function() {
    incrementNumberGradually(2880); // Change 50 to your desired target value
};

