const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thx-state")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll("#rate-num")

const submitButton = document.getElementById("submit")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})