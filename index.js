'use strict';
// Add event listener to each project item to toggle the dropdown
var projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(function(item) {
    // Your code here
    var projectTitle = item.querySelector('.project-title');
    var projectDetails = item.querySelector('.project-details');

    projectTitle.addEventListener('click', function () {
        projectDetails.classList.toggle('show-details');
    });
});


