// CONFIGURACIÓN DE FECHA
const weddingDate = new Date("Jan 18, 2026 15:30:00").getTime();

// CUENTA REGRESIVA
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (distance < 0) { clearInterval(timer); document.getElementById("countdown").innerHTML = "¡ES HOY!"; }
}, 1000);

// RSVP WHATSAPP AUTOMATIZADO
document.getElementById('rsvpForm').onsubmit = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('guestName').value;
    const asistencia = document.getElementById('attendance').value;
    const personas = document.getElementById('numGuests').value;
    const plusOne = document.getElementById('plusOne').value;
    
    const status = asistencia === "si" ? "CONFIRMADO ✅" : "NO ASISTIRÁ ❌";
    
    const msg = `Hola Camila y Diego, soy ${nombre}.
    
RSVP: ${status}
Personas: ${personas}
Extra: ${plusOne}

¡Gracias por la invitación!`;

    window.open(`https://wa.me/528186694938?text=${encodeURIComponent(msg)}`, '_blank');
};

// MÚSICA
const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('weddingMusic');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = '<div class="music-icon">🎵</div>'; // Icono Play
    } else {
        music.play();
        musicBtn.innerHTML = '<div class="music-icon">⏸</div>'; // Icono Pause
    }
    isPlaying = !isPlaying;
});

// COPIAR AL PORTAPAPELES
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Datos bancarios copiados");
    });
}

// INICIAR ANIMACIONES
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});
