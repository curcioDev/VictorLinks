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

  navigator.clipboard
    .writeText(email)
    .then(() => {
      mostrarToast()
    })
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

// Aplica efeito visual em todos os botões interativos
const botoes = document.querySelectorAll(
  ".whatsapp, .linkedin, .insta, .email, .github"
)

botoes.forEach((botao) => {
  // Efeito ao tocar
  botao.addEventListener("touchstart", () => {
    botao.classList.add("ativo")
  })

  botao.addEventListener("touchend", () => {
    setTimeout(() => {
      botao.classList.remove("ativo")
    }, 150)
  })

  // Efeito ao clicar (pra desktop também)
  botao.addEventListener("mousedown", () => {
    botao.classList.add("ativo")
  })

  botao.addEventListener("mouseup", () => {
    setTimeout(() => {
      botao.classList.remove("ativo")
    }, 150)
  })
})

// Remove .ativo se o usuário sair e voltar pra aba (corrige o bug principal)
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    document
      .querySelectorAll(".ativo")
      .forEach((el) => el.classList.remove("ativo"))
  }
})

// Remove .ativo ao recarregar (opcional mas seguro)
window.addEventListener("load", () => {
  document
    .querySelectorAll(".ativo")
    .forEach((el) => el.classList.remove("ativo"))
})

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    botoes.forEach((botao) => {
      botao.classList.remove("ativo")
    })
  }
})
