function toggleMode() {
  const html = document.documentElement
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  const img = document.querySelector("#perfil img")
  if (html.classList.contains("light")) {
    img.setAttribute('src', './IMAGENS/2.png')
  } else {
    img.setAttribute("src", "./IMAGENS/Avatar2.png")
  }



  }