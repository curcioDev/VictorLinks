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

// ------------------------
// EFEITO DE CLIQUE LIMPO
// ------------------------

function ativarTemporariamente(el) {
  el.classList.add("ativo")
  setTimeout(() => {
    el.classList.remove("ativo")
  }, 150)
}

const botoes = document.querySelectorAll(
  "a.whatsapp, a.linkedin, a.insta, a.github, p.email"
)

botoes.forEach((el) => {
  el.addEventListener("click", (e) => {
    ativarTemporariamente(el)

    // No caso do email (que é um <p>), executa a função custom
    if (el.tagName === "P") {
      e.preventDefault()
      mostrarEmail()
    }
  })
})

const span = document.getElementById("texto-animado")
const email = "vcurcio.dev@gmail.com"

span.classList.remove("fade-in")
span.classList.add("fade-out")

setTimeout(() => {
  span.textContent = email
  span.classList.remove("fade-out")
  span.classList.add("fade-in")
}, 300)
