function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
  } else {
    img.setAttribute("src", "assets/avatar.png")
  }
}

function mostrarEmail(event) {
  event.preventDefault()

  const texto = document.getElementById("email-texto")
  const email = "vcurcio.dev@gmail.com"
  const original = "Email Profissional"

  texto.classList.remove("fade-in")
  texto.classList.add("fade-out")

  setTimeout(() => {
    texto.textContent = texto.textContent === original ? email : original
    texto.classList.remove("fade-out")
    texto.classList.add("fade-in")
  }, 300) // tempo igual ao da animação
}
