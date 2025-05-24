document.addEventListener("DOMContentLoaded", () => {
    const bubbleContainer = document.querySelector(".Building-Blocks-section .bubbles");

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.className = "bubble";

        const size = Math.random() * 80 + 30;
        const xPosition = Math.random() * document.querySelector(".Building-Blocks-section").clientWidth;
        const colorArray = ["#00aeef", "#EF018D", "#FFF200", "#f699d0", "#99dff9", "#fff766"];
        const color = colorArray[Math.floor(Math.random() * colorArray.length)];

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${xPosition}px`;
        bubble.style.background = color;

        bubbleContainer.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 6000);
    }

    setInterval(createBubble, 500);
});
