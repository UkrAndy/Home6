// Перше завдання                         <-- Будь-ласка вставляйте умову задач в коментарях перед розв"язком
function month(monthNumber) {
    let arr = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
    let str = arr[monthNumber - 1] тут не потрібно було описувати додаткову змінну. Одразу можна було поверати return arr[monthNumber - 1]
    return str
}
document.write(month(8))
//Третє завдання
function sum() {        Ок
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
    return Math.min(...arguments)    <-- Будьте обережні з деструктуризацією (об"єкт може мати і інші властивості)
}
document.write(`<br />${min(7, 3, 4, 5)}`)
//Четверте завдання
function countEven(arr) {
    let count = 0
    arr.forEach((x, i, arr) => {                    <-- якщо параметри " i, arr" не використовуються, то можна їх взагалі не писати
        (x % 2 == 0) ? count++ : false              <--- у даному випадку краще було використати reduce
    })
    return count
}
let arr = [7, 3, 4, 5, 8, 66, 55]
document.write(`<br />${countEven(arr)}`)
// П'яте завдання
function replaceZero(arr) {
    let str = arr.join()            <-- join праціює тільки з масивами рядкового типу
    str = str.replace(/0/g, '1')    <-- виконайте спрочатку без регулярних виразів
    let one = str.split(',')
    return one
}
let arr2 = [10, 20, 30, 40]
document.write(`<br />${replaceZero(arr2)}`)
// Шосте завдання
function table(a, b) {                            <-- Параметри називайте зрозумілиними назвами !!! (наприклад rowCount,colCount)
    let tbl = `<table border>`
    for (let i = 0; i < a; i++) {             
        tbl += `<tr>`
        for (let j = 0; j < b; j++) {
            tbl += `<td>${i + 1} ${j + 1}</td>`
        }
        tbl += `</tr>`
    }
    tbl += `</table>`
    return tbl
}
document.write(`<br/> ${table(5, 8)}`)
//Сьоме завдання
function imageRandom(arr) {
    let x = `<img src="${arr[Math.floor(Math.random() * arr.length)]} " alt="Картинка">`
    return x
}
let imgs = ['https://img2.dp.ru/images/article/2017/10/13/20db6bcd-6fe4-400d-b3f2-cce26b27deb4.jpg', 'https://www.e1.ru/news/images/resize_900/new1/479/012/images/0.jpg', 'https://cdn.vdmsti.ru/image/2018/9x/wcz9w/default-15xu.jpg']
document.write(`<br />${imageRandom(imgs)}`)
