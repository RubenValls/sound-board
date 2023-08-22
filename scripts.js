const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    card.addEventListener("click", () => {
        let sound = card.textContent
        const audio = document.getElementById(sound)
        audio.play()
    })
})