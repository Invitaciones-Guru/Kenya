const weddingDate = new Date("Jan 18, 2026 15:30:00").getTime();
setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

document.getElementById('rsvpForm').onsubmit = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('guestName').value;
    const asistencia = document.getElementById('attendance').value === "si" ? "Confirmado ✅" : "No podré asistir ❌";
    const personas = document.getElementById('numGuests').value;
    const plusOne = document.getElementById('plusOne').value;
    const texto = `¡Hola! Confirmo mi RSVP:\nNombre: ${nombre}\nAsistencia: ${asistencia}\nPersonas: ${personas}\nAcompañante: ${plusOne}`;
    window.open(`https://wa.me/528186694938?text=${encodeURIComponent(texto)}`, '_blank');
};

const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('weddingMusic');
let isPlaying = false;
musicBtn.onclick = () => {
    if (isPlaying) { music.pause(); document.getElementById('musicText').innerHTML = "PLAY MUSIC"; }
    else { music.play(); document.getElementById('musicText').innerHTML = "PAUSE MUSIC"; }
    isPlaying = !isPlaying;
};

function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("Copiado al portapapeles");
}

AOS.init({ once: true });
