# Calculate average

***
DESCRIPTION:

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
***

```js
function findAverage(array) {
  var result = 0;
  if (!array || !array.length){
    return result;
  }
  for (let i = 0; i < array.length; i++){
    result += array[i];
  }
  return result / array.length;
}
```