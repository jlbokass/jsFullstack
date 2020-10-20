ourForm = document.getElementById("ourForm")
ourField = document.getElementById("ourField")
ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    createItem(ourField.value)
})

function createItem(x) {
    ourHTML = `<li>${x}</li> `
    ourList.insertAdjacentHTML("beforeend", ourHTML)
}