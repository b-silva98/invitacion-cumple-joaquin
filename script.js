// Música de fondo
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const musicControl = document.querySelector('.music-control i');
    
    if (music.paused) {
        music.play();
        musicControl.classList.remove('fa-music');
        musicControl.classList.add('fa-pause');
    } else {
        music.pause();
        musicControl.classList.remove('fa-pause');
        musicControl.classList.add('fa-music');
    }
}

// Confirmar asistencia por WhatsApp
function confirmAttendance(eventType) {
    const phoneNumber = "TU_NUMERO_DE_TELEFONO"; // Reemplaza con tu número
    const message = `Hola, confirmo mi asistencia al ${eventType} del bautismo y primer añito de [Nombre del Bebé].`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

// Mapa de Google
function initMap() {
    // Reemplaza con las coordenadas de tu ubicación
    const location = { lat: -34.397, lng: 150.644 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Ubicación de la ceremonia/celebración"
    });
}

// Función para abrir ubicación en Google Maps
function openLocation() {
    // Reemplaza con las coordenadas de tu ubicación
    const url = "https://www.google.com/maps?q=-34.397,150.644";
    window.open(url, '_blank');
}

// Inicializar el mapa cuando la ventana se carga
window.onload = function() {
    // Si no estás usando la API de Google Maps, puedes comentar esta línea
    // initMap();
};

// Countdown to August 20, 2025 at 20:00
function updateCountdown() {
    const targetDate = new Date('August 20, 2025 20:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.querySelector('.countdown-container').innerHTML = 
            '<div class="celebration-message">¡El gran día ha llegado!</div>';
    }
}

// Update countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);

// Initialize immediately
updateCountdown();

// Función para mostrar el modal de la ceremonia
function showCeremonyModal() {
    const modal = document.getElementById('ceremonyModal');
    modal.style.display = "block";
    
    // Cerrar modal al hacer clic en la X
    document.querySelector('.close-modal').onclick = function() {
        modal.style.display = "none";
    }
    
    // Cerrar modal al hacer clic fuera del contenido
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Función para confirmar asistencia
function confirmAttendance(eventType) {
    const phoneNumber = "TU_NUMERO_DE_TELEFONO"; // Reemplaza con tu número
    const message = `Hola, confirmo mi asistencia al ${eventType} del bautismo y primer añito de Joaquín.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Cerrar el modal después de confirmar
    document.getElementById('ceremonyModal').style.display = "none";
}