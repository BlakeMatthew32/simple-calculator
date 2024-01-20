
const calcDisplay = document.querySelector("#display")
const calcButtons = document.getElementsByClassName("calc-button")

function evaluate() {
    try {
        calcDisplay.value = eval(calcDisplay.value)
    }
    catch(error) {
        calcDisplay.value = "Error"
    }
}

function handleClick(value) {
    switch (value) {
        case "=": 
            evaluate()
            break
        case "C": 
            calcDisplay.value = ""
            break
        default: calcDisplay.value += value
    }
}

for(let btn of calcButtons) {
    btn.addEventListener("click", () => handleClick(btn.value))
}
