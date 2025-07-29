function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
  } else {
    img.setAttribute("src", "assets/avatar.png")
  }
}

function mostrarEmail() {
  const span = document.getElementById("email-texto")
  const email = "vcurcio.dev@gmail.com"

  if (span.textContent === email) return

  span.classList.add("reveal-email")
  span.textContent = email

  navigator.clipboard
    .writeText(email)
    .then(mostrarToast)
    .catch((err) => {
      console.error("Erro ao copiar:", err)
    })

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

// Seleciona todos os botões interativos (inclusive o <p class="email">)
const botoes = document.querySelectorAll(
  ".whatsapp, .linkedin, .insta, .email, .github"
)

botoes.forEach((botao) => {
  // Efeito visual no toque/click
  botao.addEventListener("touchstart", () => {
    botao.classList.add("ativo")
  })

  botao.addEventListener("touchend", () => {
    setTimeout(() => {
      botao.classList.remove("ativo")
    }, 150)
  })

  botao.addEventListener("mousedown", () => {
    botao.classList.add("ativo")
  })

  botao.addEventListener("mouseup", () => {
    setTimeout(() => {
      botao.classList.remove("ativo")
    }, 150)
  })

  // CORREÇÃO DO BUG: remove efeito travado após clique real
  botao.addEventListener("click", () => {
    setTimeout(() => {
      document
        .querySelectorAll(".ativo")
        .forEach((el) => el.classList.remove("ativo"))
    }, 300)
  })
})

// Evita estado travado ao mudar de aba
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    document
      .querySelectorAll(".ativo")
      .forEach((el) => el.classList.remove("ativo"))
  }
})

// Remove estado ativo ao carregar a página (extra segurança)
window.addEventListener("load", () => {
  document
    .querySelectorAll(".ativo")
    .forEach((el) => el.classList.remove("ativo"))
})
