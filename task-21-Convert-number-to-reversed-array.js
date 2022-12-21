// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    return String(n).split('').reverse().map(i => +i);
}
// String() позволяет из чисел сделать строку чисел
// .split('') позволяет из одной строки сделать массив строк а разделить '' делает так что каждая буква или цыфра, 
// это отдельный элемент массива
// reverse() позволяет развернуть массив задам на перед
// .map(i => +i) позволяет пробежаться по массиву и из массива строк сделать массив чисел, можно сделать map(Number)
// будет тот же эффект
