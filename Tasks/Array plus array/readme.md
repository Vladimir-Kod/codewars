# Array plus array

***
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
***

```js
function arrayPlusArray(arr1, arr2) {
  var sumArray1 = 0;
  var sumArray2 = 0;
  for (let i = 0; i < arr1.length; i++){
    sumArray1 += arr1[i];
  }
  for (let x = 0; x < arr2.length; x++){
    sumArray2 += arr2[x];
  }
  return sumArray1 + sumArray2;
};
```