function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  img.setAttribute(
    "src",
    html.classList.contains("light")
      ? "assets/avatar-light.png"
      : "assets/avatar.png"
  )
}

function mostrarEmail(event) {
  const span = document.getElementById("email-texto")
  const email = "vcurcio.dev@gmail.com"

  if (span.textContent === email) return

  span.classList.add("reveal-email")
  span.textContent = email

  navigator.clipboard
    .writeText(email)
    .then(() => mostrarToast())
    .catch((err) => console.error("Erro ao copiar:", err))

  setTimeout(() => {
    span.classList.remove("reveal-email")
    span.textContent = "Email Profissional"
  }, 3000)
}

function mostrarToast() {
  const toast = document.getElementById("copiado-toast")
  toast.classList.add("mostrar")

  setTimeout(() => {
    toast.classList.remove("mostrar")
  }, 2000)
}
