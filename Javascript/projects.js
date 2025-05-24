//---Dropdown filter---
/* toggle between hiding/showing the dropdown content */
function showDropdownFilter() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/* close dropdown if user clicks outside of it */
window.addEventListener('click', function(event) {
    const dropdown = document.getElementById("myDropdown");
    const button = document.querySelector('.filter-btn');

    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});

//---Display the selected filter---
// get elements by their class/ids
const selectedFilter = document.querySelectorAll('.work');
const d1 = document.getElementById('dropdown1');
const d2 = document.getElementById('dropdown2');
const d3 = document.getElementById('dropdown3');
const d4 = document.getElementById('dropdown4');

// func to display the contents of the selected filter
function showFilteredContent(id) {
    // hide all other work divs
    selectedFilter.forEach(work => {
        work.style.display = 'none';
    });

    // show the selected work div
    const selectedWork = document.getElementById(id);
    if (selectedWork) {
        selectedWork.style.display = 'flex';
        selectedWork.style.flexDirection = 'column';
    }
}

/* make dropdown btns clickable to call the func above + hide dropdown after selection */
d1.addEventListener('click', function() {
    showFilteredContent('brand');
    document.getElementById("myDropdown").classList.remove('show');
});
d2.addEventListener('click', function() {
    showFilteredContent('event');
    document.getElementById("myDropdown").classList.remove('show');
});
d3.addEventListener('click', function() {
    showFilteredContent('print');
    document.getElementById("myDropdown").classList.remove('show');
});
d4.addEventListener('click', function() {
    showFilteredContent('proddesign');
    document.getElementById("myDropdown").classList.remove('show');
});

//---Splide for carousel---//
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.splide').forEach(function (el) {
        new Splide(el, {
            perPage: 3,
            perMove: 1,
            gap: '0.4rem',
            wheel: true,
            pagination: false,
            /* make perPage only 2 on mobile */
            breakpoints: {
                768: {
                    perPage: 2
                }
            }
        }).mount();
    });
}); 


/*function viewMore() {
    let splideContainer = document.querySelector(".splide__list");
    let moreImages = document.getElementById("moreImages");
    let button = document.querySelector(".moreBtn");
    let fourthImage = splideContainer.children[3]; // Select the 4th image
    let arrows = document.querySelectorAll(".splide__arrow");
    
    if (moreImages.style.display === "none" || moreImages.style.display === "") {
        moreImages.style.display = "block";
        button.textContent = "Show Less";
        // Hide the 4th image
        fourthImage.style.display = "none";
        //hides the arrow
        arrows.forEach(arrow => arrow.style.display = "none")
        //repositioning the images
        splideContainer.scrollTo({ left: 0, behavior: "smooth" });
        // Resize the remaining images
        document.querySelectorAll(".splide__slide").forEach((slide, index) => {
            if (index < 3) {
                slide.style.width = "31.2%"; // Resize the first 3 images
            }
        });

    } else {
        moreImages.style.display = "none";
        button.textContent = "Show More";
        // Show the 4th image again
        fourthImage.style.display = "block";
        arrows.forEach(arrow => arrow.style.display = "block");
        //repositioning the images
        splideContainer.scrollTo({ left: 0, behavior: "smooth" });
    }
} */

    function viewMore(button) {
    let workSection = button.closest(".work");

    // Get the corresponding ".splide__list" inside that section
    let splideContainer = workSection.querySelector(".splide__list");
    let moreImages = workSection.querySelector("#moreImages");
    let fourthImage = splideContainer.children[3]; // Select the 4th image (if exists)
    let arrows = workSection.querySelectorAll(".splide__arrow");

    // Check the display state and toggle visibility
    if (moreImages.style.display === "none" || moreImages.style.display === "") {
        moreImages.style.display = "block";
        button.textContent = "Show Less";
        // Reposition the images smoothly
        splideContainer.scrollTo({ right: 0, behavior: "smooth" });
        // Hide the 4th image 
        if (fourthImage) fourthImage.style.display = "none";
        // Hide arrows 
        arrows.forEach(arrow => arrow.style.display = "none");
        // Resize the images 
        splideContainer.querySelectorAll(".splide__slide").forEach((slide, index) => {
            if (index < 3) {
                slide.style.width = "31.2%"; // Resize the first 3 images
            }
        });

    } else {
        moreImages.style.display = "none";
        button.textContent = "Show More";
        // Show the 4th image again
        if (fourthImage) fourthImage.style.display = "block";
        // Show arrows again
        arrows.forEach(arrow => arrow.style.display = "block");
    }
}
