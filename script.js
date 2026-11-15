document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const letterScreen = document.getElementById('letter-screen');
    const enterBtn = document.getElementById('enter-btn');
    const backBtn = document.getElementById('back-btn');

    // Función para crear corazones flotantes
    function createHearts(containerId, count = 20) {
        const container = document.getElementById(containerId);
        if (!container) return;

        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');

            // Tamaños aleatorios
            const size = Math.random() * 16 + 10;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;

            // Posición horizontal aleatoria
            heart.style.left = `${Math.random() * 100}%`;

            // Duración y retraso de animación aleatorios
            const duration = Math.random() * 6 + 4;
            const delay = Math.random() * 5;
            heart.style.animationDuration = `${duration}s`;
            heart.style.animationDelay = `${delay}s`;

            container.appendChild(heart);
        }
    }

    // Inicializar corazones en pantalla de bienvenida
    createHearts('hearts-container', 25);

    // Transición al hacer click en el botón
    enterBtn.addEventListener('click', () => {
        welcomeScreen.classList.remove('active');
        setTimeout(() => {
            letterScreen.classList.add('active');
            // Crear corazones en la segunda pantalla si no se han creado
            if (document.getElementById('hearts-container-2').children.length === 0) {
                createHearts('hearts-container-2', 20);
            }
        }, 400);
    });

    // Volver a la pantalla de inicio
    backBtn.addEventListener('click', () => {
        letterScreen.classList.remove('active');
        setTimeout(() => {
            welcomeScreen.classList.add('active');
        }, 400);
    });
});