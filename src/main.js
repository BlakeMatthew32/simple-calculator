// import calculate from "./calculate"

const calcDisplay = document.querySelector("#display")
const calcButtons = document.getElementsByClassName("calc-button")

function evaluate() {
    const values = calcDisplay.value.split(' ')
    return calculate(values)
}

function handleClick(value) {
    switch (value) {
        case "=": 
            calcDisplay.value = evaluate()
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
