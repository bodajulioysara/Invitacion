function openInvitation() {
  const screen = document.getElementById("welcome-screen");
  screen.classList.add("hidden");
  document.body.style.overflowY = "auto";
}

// Bloquear scroll al cargar
document.body.style.overflowY = "hidden";

// Lógica de cuenta regresiva
const weddingDate = new Date("April 19, 2026 15:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = weddingDate - now;

  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));

  // Solo actualizamos si los elementos existen en el HTML
  if (document.getElementById("days")) {
    document.getElementById("days").innerText = d.toString().padStart(2, "0");
    document.getElementById("hours").innerText = h.toString().padStart(2, "0");
    document.getElementById("mins").innerText = m.toString().padStart(2, "0");
  }
}, 1000);
