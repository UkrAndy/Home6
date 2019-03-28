// Перше завдання
function month(monthNumber) {
    let arr = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
    let str = arr[monthNumber - 1]
    return str
}
document.write(month(8))
//Третє завдання
function sum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
document.write(`<br />${sum(2, 3, 4, 5)}`)
function multiply() {
    let mult = 1
    for (let i = 0; i < arguments.length; i++) {
        mult *= arguments[i]
    }
    return mult
}
document.write(`<br />${multiply(2, 3, 4, 5)}`)
function avg() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum / arguments.length
}
document.write(`<br />${avg(7, 2, 3, 4, 5)}`)
function min() {
    return Math.min(...arguments)
}
document.write(`<br />${min(7, 3, 4, 5)}`)
//Четверте завдання
function countEven(arr) {
    let count = 0
    arr.forEach((x, i, arr) => {
        (x % 2 == 0) ? count++ : false
    })
    return count
}
let arr = [7, 3, 4, 5, 8, 66, 55]
document.write(`<br />${countEven(arr)}`)
// П'яте завдання
function replaceZero(arr) {
    let str = arr.join()
    str = str.replace(/0/g, '1')
    let one = str.split(',')
    return one
}
let arr2 = [10, 20, 30, 40]
document.write(`<br />${replaceZero(arr2)}`)
// Шосте завдання
function table(a, b) {
    document.write(`<table border>`)
    for (let i = 0; i < a; i++) {
        document.write(`<tr>`)
        for (let j = 0; j < b; j++) {
            document.write(`<td>${i + 1} ${j + 1}</td>`)
        }
        document.write(`</tr>`)
    }
    document.write(`</tabele>`)
}
table(5, 8)
//Сьоме завдання
function imageRandom(arr) {
    document.write(`<br /><img src="${arr[Math.floor(Math.random() * arr.length)]} " alt="Картинка">`)
}
let imgs = ['https://img2.dp.ru/images/article/2017/10/13/20db6bcd-6fe4-400d-b3f2-cce26b27deb4.jpg', 'https://www.e1.ru/news/images/resize_900/new1/479/012/images/0.jpg', 'https://cdn.vdmsti.ru/image/2018/9x/wcz9w/default-15xu.jpg']
imageRandom(imgs)