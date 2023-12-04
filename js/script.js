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
