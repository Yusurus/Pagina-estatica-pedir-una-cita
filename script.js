const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const responseMessage = document.getElementById('responseMessage');

// Variable para almacenar la posición anterior del botón "NO"
let previousPosition = {
    x: window.innerWidth / 2 + 50,
    y: window.innerHeight / 2
};

// Función para calcular la distancia entre dos puntos
function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Función para obtener una nueva posición válida con distancia mínima de 500px
function getValidPosition() {
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;
    const margin = 20;
    
    let newX, newY;
    let attempts = 0;
    const maxAttempts = 100;
    
    do {
        newX = Math.random() * (window.innerWidth - buttonWidth - 2 * margin) + margin;
        newY = Math.random() * (window.innerHeight - buttonHeight - 2 * margin) + margin;
        attempts++;
        
        // Si no encuentra una posición válida después de muchos intentos, 
        // acepta cualquier posición que esté al menos a 200px
        if (attempts > maxAttempts / 2) {
            if (calculateDistance(previousPosition.x, previousPosition.y, newX, newY) >= 200) {
                break;
            }
        }
    } while (
        calculateDistance(previousPosition.x, previousPosition.y, newX, newY) < 500 && 
        attempts < maxAttempts
    );
    
    return { x: newX, y: newY };
}

// Función para mover el botón "NO"
function moveNoButton() {
    // Solo en el primer movimiento, cambiar a posición fija
    if (isFirstMove) {
        noBtn.style.position = 'fixed';
        isFirstMove = false;
        
        // Establecer posición inicial basada en la posición actual del botón
        const rect = noBtn.getBoundingClientRect();
        previousPosition = { x: rect.left, y: rect.top };
    }
    
    noBtn.classList.add('no-move');
    
    const newPosition = getValidPosition();
    
    noBtn.style.left = newPosition.x + 'px';
    noBtn.style.top = newPosition.y + 'px';
    
    // Actualizar la posición anterior
    previousPosition = newPosition;
    
    // Pequeña animación de escape
    noBtn.style.transform = 'scale(0.8)';
    setTimeout(() => {
        noBtn.style.transform = 'scale(1)';
        noBtn.classList.remove('no-move');
    }, 300);
}

// Función para crear confetti
function createConfetti() {
    const colors = ['#ff69b4', '#ffc0cb', '#ff1493', '#ffb6c1', '#ff91a4', '#ffa0b4', '#ff8fa3'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animation = `confettiFall ${Math.random() * 2 + 3}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// Eventos para el botón "NO"
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    moveNoButton();
});
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    moveNoButton();
});

// Evento para el botón "SÍ"
yesBtn.addEventListener('click', function() {
    createConfetti();
    responseMessage.style.display = 'block';
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
});

// Posicionar el botón "NO" inicialmente - solo cuando se mueva por primera vez
let isFirstMove = true;

// Reposicionar en caso de cambio de tamaño de ventana
window.addEventListener('resize', function() {
    // Solo reposicionar si el botón ya se ha movido (está en posición fija)
    if (!isFirstMove) {
        const newX = Math.min(previousPosition.x, window.innerWidth - noBtn.offsetWidth - 20);
        const newY = Math.min(previousPosition.y, window.innerHeight - noBtn.offsetHeight - 20);
        
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
        
        previousPosition = { x: newX, y: newY };
    }
});

// Crear flores flotantes
for (let i = 0; i < 25; i++) {
    const flor = document.createElement('div');
    flor.classList.add('flor');
    
    // Algunas flores más grandes
    if (i % 5 === 0) {
        flor.classList.add('flor-grande');
    }
    
    flor.style.left = Math.random() * 100 + 'vw';
    flor.style.animationDuration = (5 + Math.random() * 5) + 's';
    flor.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(flor);
}

// Crear corazones flotantes
const corazones = ['💖', '💕', '💗', '💘', '💝', '🌹', '🌸'];
for (let i = 0; i < 15; i++) {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.textContent = corazones[Math.floor(Math.random() * corazones.length)];
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = (6 + Math.random() * 4) + 's';
    corazon.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(corazon);
}