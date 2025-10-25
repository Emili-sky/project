console.clear()
console.log("Це JavaScript")
let lightButton = document.querySelector("#lightTheme")
let darkButton = document.querySelector("#darkTheme")
let customButton = document.querySelector("#customTheme")
lightButton.addEventListener("click", changeTheme)
darkButton.addEventListener("click", changeTheme)
customButton.addEventListener("click", changeTheme)

function changeTheme() {
    if (this.id == "lightTheme") {
        document.body.style.color = "black"
        document.body.style.background = "white"
    }
    else if (this.id == "darkTheme") {
        document.body.style.color = "white"
        document.body.style.background = "blak"
    }
    else {
        document.body.style.color = "blue"
        document.body.style.background = "pink"
    }
}
