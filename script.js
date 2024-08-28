document.getElementById('celebrateBtn').addEventListener('click', function() {
    showConfetti();
    showPhotos();
});

function showConfetti() {
    // Função para criar o confete
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.getElementById('confetti').appendChild(confetti);
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
}

function showPhotos() {
    const photos = document.getElementById('photos');
    photos.style.opacity = 1;

    document.querySelectorAll('.photo').forEach((img, index) => {
        setTimeout(() => {
            img.style.transform = 'scale(1)';
        }, index * 200);
    });
}
