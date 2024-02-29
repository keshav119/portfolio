document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript is running!');
    
    var projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(function (item) {
        var projectTitle = item.querySelector('.project-title');
        var projectDetails = item.querySelector('.project-details');
        var arrow = item.querySelector('.arrow'); // Update to select arrow within the project item

        projectTitle.addEventListener('click', function () {
            console.log('Clicked on project title');
            projectDetails.classList.toggle('show-details');
            arrow.classList.toggle('down'); // Toggle the down class to apply rotation
        });
    });
});