document.addEventListener('DOMContentLoaded', function() {
    const cube = document.querySelector('.click');

    cube.addEventListener('click', function() {
        cube.classList.toggle('clicked'); // Toggle the class to move and change color
    });
});
