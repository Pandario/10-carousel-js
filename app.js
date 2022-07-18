const Buttons = document.querySelectorAll("[data-button-carousel]")

Buttons.forEach(Button => {
    Button.addEventListener("click", () => {
        const offset = Button.dataset.buttonCarousel === "next" ? 1 : -1
        const slides = Button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")
        const ActiveSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(ActiveSlide) + offset

        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete ActiveSlide.dataset.active
    })
})




