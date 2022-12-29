# Invert values

***
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]

invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]

invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
***

```js
function invert(array) {
  var result = [];
  if (!array.length){
    return result;
  }
  for (let i = 0; i < array.length; i++){
    result.push(array[i] * -1)
   }
  return result;
}
```