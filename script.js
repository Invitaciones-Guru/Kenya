// FUNCIONALIDAD APERTURA DE SOBRE
document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-btn');
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const music = document.getElementById('weddingMusic');
    const musicBtn = document.getElementById('musicBtn');

    openBtn.addEventListener('click', function() {
        // 1. Desvanecer sobre
        envelopeWrapper.classList.add('fade-out');
        
        // 2. Iniciar música automáticamente
        music.play();
        isPlaying = true;
        musicBtn.innerHTML = '<div class="music-icon">⏸</div>';
        musicBtn.classList.add('pulse-animation');
        
        // 3. Reiniciar AOS para que las animaciones de la invitación 
        // comiencen justo cuando se quita el sobre
        setTimeout(() => {
            AOS.refresh();
        }, 600);
    });
});


// FECHA
const weddingDate = new Date("Jul 25, 2026 15:30:00").getTime();

// COUNTDOWN
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (distance < 0) { clearInterval(timer); document.getElementById("countdown").innerHTML = "¡ES HOY!"; }
}, 1000);

// RSVP
document.getElementById('rsvpForm').onsubmit = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('guestName').value;
    const asistencia = document.getElementById('attendance').value;
    const personas = document.getElementById('numGuests').value;
    const plusOne = document.getElementById('plusOne').value;
    
    const status = asistencia === "si" ? "CONFIRMADO ✅" : "NO ASISTIRÁ ❌";
    
    const msg = `Hola Camila y Diego, soy ${nombre}.\n\nRSVP: ${status}\nPersonas: ${personas}\nExtra: ${plusOne}\n\n¡Gracias por la invitación!`;

    window.open(`https://wa.me/528186694938?text=${encodeURIComponent(msg)}`, '_blank');
};

// MÚSICA
const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('weddingMusic');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = '<div class="music-icon">🎵</div>';
        musicBtn.classList.remove('pulse-animation'); // Detener animación al pausar
    } else {
        music.play();
        musicBtn.innerHTML = '<div class="music-icon">⏸</div>';
        musicBtn.classList.add('pulse-animation'); // Activar animación al reproducir
    }
    isPlaying = !isPlaying;
});

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => { alert("Datos bancarios copiados"); });
}

// INICIALIZACIÓN AOS CON CONFIGURACIÓN "LUXURY"
AOS.init({
    duration: 1200, // Animaciones más lentas y elegantes (1.2 segundos)
    easing: 'ease-out-cubic', // Efecto de frenado suave
    once: true, // Solo animar una vez al bajar
    offset: 120 // Empezar a animar un poco antes
});
