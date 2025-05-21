document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navList = document.querySelector(".nav-list")

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active")

      // Animate hamburger to X
      const spans = menuToggle.querySelectorAll("span")
      if (navList.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const emailInput = this.querySelector('input[type="email"]')
      if (emailInput && emailInput.value) {
        // Aquí se integraría con una base de datos en el futuro
        // Por ahora, solo mostramos un mensaje de confirmación
        alert("¡Gracias por suscribirte a nuestro boletín!")
        emailInput.value = ""
      }
    })
  }

  // Sticky header behavior
  const header = document.querySelector(".main-header")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 200) {
      // Scroll down
      header.style.transform = "translateY(-100%)"
    } else {
      // Scroll up
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
  })

  // Lazy loading images
  if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          const src = img.getAttribute("data-src")
          if (src) {
            img.setAttribute("src", src)
            img.removeAttribute("data-src")
          }
          observer.unobserve(img)
        }
      })
    })

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imgObserver.observe(img)
    })
  }

  // Espacio para futura integración de base de datos
  // Esta función se utilizará para cargar datos dinámicos desde una base de datos
  function loadDynamicContent() {
    // Aquí se implementará la lógica para cargar contenido desde la base de datos
    // Por ejemplo:
    // fetch('/api/articles')
    //   .then(response => response.json())
    //   .then(data => {
    //     // Renderizar artículos dinámicamente
    //   });
  }

  // Función para manejar la búsqueda
  const searchForm = document.querySelector(".search-container")
  if (searchForm) {
    const searchInput = searchForm.querySelector("input")
    const searchBtn = searchForm.querySelector(".search-btn")

    searchBtn.addEventListener("click", (e) => {
      e.preventDefault()
      if (searchInput.value.trim() !== "") {
        // Aquí se implementará la búsqueda cuando se integre la base de datos
        // Por ahora, solo mostramos un mensaje
        alert("Función de búsqueda: " + searchInput.value)
        searchInput.value = ""
      }
    })

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault()
        searchBtn.click()
      }
    })
  }
})
