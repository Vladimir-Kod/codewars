# Summation

***
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3

1 + 2

summation(8) -> 36

1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
***

```js
var summation = function (num) {
    var sum= 0;
    var sum1 = 0;  
    for (let i =0; i < num; i++){
      sum++;  
      sum1 += sum;
    }
      
    return sum1;
}
```