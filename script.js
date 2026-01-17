// 1. CUENTA REGRESIVA
const weddingDate = new Date("Jan 18, 2026 15:30:00").getTime();
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance < 0) { clearInterval(timer); document.getElementById("countdown").innerHTML = "¡ES HOY!"; }
}, 1000);

// 2. RSVP WHATSAPP
document.getElementById('rsvpForm').onsubmit = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('guestName').value;
    const asistencia = document.getElementById('attendance').value;
    const personas = document.getElementById('numGuests').value;
    const plusOne = document.getElementById('plusOne').value;
    const status = asistencia === "si" ? "CONFIRMADO ✅" : "NO ASISTIRÁ ❌";
    const msg = `Hola Camila y Diego, soy ${nombre}.\nRSVP: ${status}\nPersonas: ${personas}\nExtra: ${plusOne}\n¡Gracias!`;
    window.open(`https://wa.me/528186694938?text=${encodeURIComponent(msg)}`, '_blank');
};

// 3. MÚSICA CON ANIMACIÓN DE PULSO
const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('weddingMusic');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = '<div class="music-icon">🎵</div>';
        musicBtn.classList.remove('playing');
    } else {
        music.play();
        musicBtn.innerHTML = '<div class="music-icon">⏸</div>';
        musicBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// 4. ANIMACIÓN DE LÍNEA DE TIEMPO (INTERSECTION OBSERVER)
// Esto hace que la línea crezca solo cuando aparece en pantalla
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('draw-active');
        }
    });
}, observerOptions);

const timelineLine = document.getElementById('draw-line');
if(timelineLine) observer.observe(timelineLine);


// 5. COPY TO CLIPBOARD
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => { alert("Datos copiados correctamente"); });
}

// 6. INICIALIZAR AOS (ANIMATE ON SCROLL) CON CONFIGURACIÓN SUAVE
AOS.init({
    duration: 1000, // Duración global más lenta
    easing: 'ease-out-cubic', // Efecto de frenado suave
    once: true, // Solo animar una vez
    offset: 50
});
