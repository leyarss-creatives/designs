//=====Works Section=====
//---Dropdown filter---
// When the user clicks on the button, toggle between hiding and showing the dropdown content
function showDropdownFilter() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.filter-btn')) {
    var dropdowns = document.getElementsByClassName("filter-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}
}

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
    }
}

// make dropdown btns clickable to call the func above
d1.addEventListener('click', function() {
    showFilteredContent('brand');
});
d2.addEventListener('click', function() {
    showFilteredContent('event');
});
d3.addEventListener('click', function() {
    showFilteredContent('print');
});
d4.addEventListener('click', function() {
    showFilteredContent('proddesign');
});