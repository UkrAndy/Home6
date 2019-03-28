function month(monthNumber) {
    let arr = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
    let str = arr[monthNumber - 1]
    return str
}
document.write(month(8))
function sumFour() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
document.write(`<br />${sumFour(2, 3, 4, 5)}`)
function multiply() {
    let mult = 1
    for (let i = 0; i < arguments.length; i++) {
        mult *= arguments[i]
    }
    return mult
}
document.write(`<br />${multiply(2, 3, 4, 5)}`)