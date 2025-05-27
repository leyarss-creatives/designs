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

/* display the selected filter */
const selectedFilter = document.querySelectorAll('.work');
const d1 = document.getElementById('dropdown1');
const d2 = document.getElementById('dropdown2');
const d3 = document.getElementById('dropdown3');
const d4 = document.getElementById('dropdown4');

// func to display the contents of the selected filter
function showFilteredContent(id) {
    /* hide all other work divs */
    selectedFilter.forEach(work => {
        work.style.display = 'none';
    });

    /* show the selected work div */
    const selectedWork = document.getElementById(id);
    if (selectedWork) {
        selectedWork.style.display = 'flex';
        selectedWork.style.flexDirection = 'column';
    }
}

// func to change the dropdown's text n bg color according to the selected category
function updateDropdownDisplay(text, color, textColor = 'white') {
    const btn = document.getElementById('dropdownBtn');
    btn.textContent = '▼ ' + text;
    btn.style.backgroundColor = color;
    btn.style.color = textColor;
}

/* make dropdown btns clickable to call the func above + hide dropdown after selection */
d1.addEventListener('click', function() {
    showFilteredContent('brand');
    updateDropdownDisplay('Brand Development', getComputedStyle(d1).backgroundColor);
    document.getElementById("myDropdown").classList.remove('show');
});

d2.addEventListener('click', function() {
    showFilteredContent('event');
    updateDropdownDisplay('Event Branding', getComputedStyle(d2).backgroundColor);
    document.getElementById("myDropdown").classList.remove('show');
});

d3.addEventListener('click', function() {
    showFilteredContent('print');
    updateDropdownDisplay('Print Design', getComputedStyle(d3).backgroundColor, 'black'); // since yellow text is black
    document.getElementById("myDropdown").classList.remove('show');
});

d4.addEventListener('click', function() {
    showFilteredContent('proddesign');
    updateDropdownDisplay('Product Design', getComputedStyle(d4).backgroundColor);
    document.getElementById("myDropdown").classList.remove('show');
});


//---Splide for carousel---
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

//---View more btn to display all works per category---
function viewMore(button) {
    const workSection = button.closest(".work"); // Find the parent .work div
    const splide = workSection.querySelector(".splide");
    const allWorks = workSection.querySelector(".all-works");
    const isVisible = allWorks.style.display === "grid";

    if (window.innerWidth > 768) { 
        // only toggle for tablet/desktop
        if (isVisible) {
            allWorks.style.display = "none";
            splide.style.display = "block";
            button.textContent = "Show More";
        } else {
            allWorks.style.display = "grid";
            splide.style.display = "none";
            button.textContent = "Show Less";

            // make the user stay at the first works if all-works are shown
            allWorks.scrollIntoView({
                block: "start"
            });
        }
    }
}

//--for the embedd post--//
function showEmbedPost() {
    document.getElementById("fbEmbed").innerHTML = `
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLEyarssCreativesDesigns%2Fposts%2Fpfbid053PV9CsEoJDVQMUPDvnWb1fGj7AHcgmheLfgtLasTxAT71wMasytLzwuUyeM13Q5l&show_text=true&width=500"
        width="500" height="5" style="border:none;overflow:hidden"
        scrolling="no" frameborder="0" allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>`;
    
    document.getElementById("fbEmbed").style.display = "block";
}