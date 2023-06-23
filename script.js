window.addEventListener('DOMContentLoaded', (event) => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    yesBtn.addEventListener('click', () => {
        window.location.href = 'newpage.html';
    });

    noBtn.addEventListener('click', () => {
        const maxWidth = window.innerWidth - 100;
        const maxHeight = window.innerHeight - 100;

        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
});
