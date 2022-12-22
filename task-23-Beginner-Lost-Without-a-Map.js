// DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    var array=[];
    for (let i = 0; i < x.length; i++){
      array.push(x[i]*2)
    }
    return array;
}