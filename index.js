document.addEventListener('DOMContentLoaded', function () {
    /*======Customer Testimonials Section======*/
    var splide = new Splide( '.splide', {
        type: 'loop',
        focus: 'center',
        perPage: 1,
        padding: '2rem',
        wheel: true,
    });
    splide.mount();

    /*======Explore More Btn: goes to the Projects Page======*/
    document.getElementById('btn-exploremore').addEventListener('click', function () {
        window.location = 'Other Pages/projects.html';
    });

    /*======BackToTop Btn: scrolls to the very top of page======*/
    document.getElementById('btn-backtotop').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

