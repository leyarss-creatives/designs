// initialize AOS
AOS.init();

// change offset based on screen size for .our-services-list
document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.querySelector('.our-services-list');

    function updateAOSOffset() {
        if (window.innerWidth <= 768) {
            targetElement.setAttribute('data-aos-offset', '50'); // mobile value
        } else {
            targetElement.setAttribute('data-aos-offset', '620'); // desktop value
        }

        AOS.refresh(); // re-initialize to apply the updated offset
    }

    updateAOSOffset(); // apply once on load
});