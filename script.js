
    // Cuenta regresiva
    const weddingDate = new Date('2023-10-20T12:00:00Z').getTime();
    const countdown = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdown.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);


    
    const audio = document.getElementById("musica");
    const botonMusica = document.getElementById("botonMusica");
    const iconoMusica = document.getElementById("iconoMusica");

    botonMusica.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            iconoMusica.src = "./imagenes/musica/pause.png"; // Cambiar a la imagen de pausa
        } else {
            audio.pause();
            iconoMusica.src = "./imagenes/musica/play.png"; // Cambiar a la imagen de reproducción
        }
        });
