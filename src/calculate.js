function calculate(valuesArray) {
    if (valuesArray.length === 1) {
        return valuesArray[0] 
    }
    if (valuesArray.includes('*')) {
        const indexOfOperator = valuesArray.indexOf("*")
        const result = parseFloat(valuesArray[indexOfOperator - 1]) * parseFloat(valuesArray[indexOfOperator + 1])
        const modArray = valuesArray.toSpliced(indexOfOperator - 1, 3, result)
        return calculate(modArray)
    }
    if (valuesArray.includes('/')) {
        const indexOfOperator = valuesArray.indexOf("/")
        const result = parseFloat(valuesArray[indexOfOperator - 1]) / parseFloat(valuesArray[indexOfOperator + 1])
        const modArray = valuesArray.toSpliced(indexOfOperator - 1, 3, result)
        return calculate(modArray)
    }
    if (valuesArray.includes('+')) {
        const indexOfOperator = valuesArray.indexOf("+")
        const result = parseFloat(valuesArray[indexOfOperator - 1]) + parseFloat(valuesArray[indexOfOperator + 1])
        const modArray = valuesArray.toSpliced(indexOfOperator - 1, 3, result)
        return calculate(modArray)
    }
    if (valuesArray.includes('-')) {
        const indexOfOperator = valuesArray.indexOf("-")
        const result = parseFloat(valuesArray[indexOfOperator - 1]) - parseFloat(valuesArray[indexOfOperator + 1])
        const modArray = valuesArray.toSpliced(indexOfOperator - 1, 3, result)
        return calculate(modArray)
    }
}

