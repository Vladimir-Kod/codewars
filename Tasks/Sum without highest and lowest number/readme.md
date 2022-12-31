# Sum without highest and lowest number

***
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example

{ 6, 2, 1, 8, 10 } => 16

{ 1, 1, 11, 2, 3 } => 6
***

```js
function sumArray(array) {
  if(array) {
    array.sort((a, b) => {return a - b});
    let sum = 0;
    for(var i = 1; i < array.length - 1; i++){
      sum += array[i];
    }
    return sum;
  } 
  return 0;
}
```