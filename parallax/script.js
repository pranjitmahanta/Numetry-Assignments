document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn")
    const parallaxContainer = document.querySelector(".parallax-container")
  
    parallaxContainer.addEventListener("scroll", () => {
      if (parallaxContainer.scrollTop > 300) {
        scrollToTopBtn.style.display = "block"
      } else {
        scrollToTopBtn.style.display = "none"
      }
    })
  
    scrollToTopBtn.addEventListener("click", () => {
      parallaxContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  })
  
  