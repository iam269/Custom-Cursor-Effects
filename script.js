const cursor = document.querySelector('.cursor');
const icons = document.querySelectorAll('.icon');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

icons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        // Add clicked class to cursor
        cursor.classList.add('clicked');
        setTimeout(() => {
            cursor.classList.remove('clicked');
        }, 300);

        // Animate the icon
        icon.style.transform = 'scale(1.5) rotate(360deg)';
        setTimeout(() => {
            icon.style.transform = '';
        }, 500);

        // Create particle effect
        createParticles(e.clientX, e.clientY);
    });
});

function createParticles(x, y) {
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--x', (Math.random() - 0.5) * 200 + 'px');
        particle.style.setProperty('--y', (Math.random() - 0.5) * 200 + 'px');
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}