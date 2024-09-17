window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(event) {
        // Show "Order Successful" message
        const messageBox = document.getElementById('order-message');
        messageBox.textContent = 'Order Successful!';
        messageBox.style.display = 'block';

        // Hide the message after 3 seconds
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);

        // Create sparkles effect
        createSparkles(event.clientX, event.clientY);
    });
});

function createSparkles(x, y) {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkles');
        document.body.appendChild(sparkle);

        // Random position around the click area
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 - 50;

        sparkle.style.left = `${x + randomX}px`;
        sparkle.style.top = `${y + randomY}px`;

        // Remove sparkles after 1 second
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}
