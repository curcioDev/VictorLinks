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
  const span = document.getElementById("email-texto")
  const email = "vcurcio.dev@gmail.com"

  if (span.textContent === email) return

  span.classList.add("reveal-email")
  span.textContent = email

  // Copiar pro clipboard
  navigator.clipboard
    .writeText(email)
    .then(() => {
      mostrarToast() // chama o aviso
    })
    .catch((err) => {
      console.error("Erro ao copiar:", err)
    })

  setTimeout(() => {
    span.classList.remove("reveal-email")
    span.textContent = "Email Profissional"
  }, 3000)
}

// Aviso de "copiado"
function mostrarToast() {
  const toast = document.getElementById("copiado-toast")
  toast.classList.add("mostrar")

  setTimeout(() => {
    toast.classList.remove("mostrar")
  }, 2000)
}
