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

/* card falling from the top to its position*/
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".why-choose-1, .why-choose-2, .why-choose-3");

    function checkScroll() {
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardPosition < windowHeight * 0.8) { // Adjust threshold for earlier/later reveal
                card.style.opacity = "1";
                card.style.transform = `translateY(0) rotate(${index % 2 === 0 ? "-6deg" : "6deg"})`;
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once on page load in case section is already in view
});