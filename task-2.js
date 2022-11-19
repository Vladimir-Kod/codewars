function evenOrOdd(number) {

};

// создайте функцию, которая принимает целое число в качестве аргумента и возвращает 
// "Четное" для четных чисел или "Нечетное" для нечетных чисел.


function evenOrOdd(number) {
    if(number % 2 === 0) {     
    return "Even";
    } else {
    return "Odd";
    } 
  };

// оператор (argument % 2 === 0), если четное число вернет true, если нечетное, вернет false