// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

    var arrayString = name.split(' '); // метод .split(' ') с пробелом между ковычек позволяет из строки сделать массив строк
    var firstName = arrayString[0];
    var lastName = arrayString[1];
    
    return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase();
    
    }