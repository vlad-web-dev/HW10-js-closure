console.log('------------- #3')
function sum (a) {
    let result = a
    return function (b) {
        return result += b
    }
}

let sum1 = sum(1)
console.log(sum1(2))
console.log(sum(1)(2))

console.log('------------- #4')
/** Первый вариант
 *
 * При испольвании var выделяется одна ячейка памяти,
 * при использовании let выделяется ячейка под каждую итерацию, ES6)
 */
/*
for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}
*/

/** Второй вариант
 *
 * Ошибка из-за того что лексическое окружение создается один раз,
 * i будет присвоено последнее значение из цикла
 */
for (var i = 1; i <= 10; i++) {
    setTimeout(print(i))
}

function print(i) {
   let count = i
   return function () {
        console.log(count)
   }
}