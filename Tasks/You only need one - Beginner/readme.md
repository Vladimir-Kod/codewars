# You only need one - Beginner

***
DESCRIPTION:
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
***

```js
function check(a, x) {
  var result = false;
  for (let i = 0; i < a.length; i++){
    if (a[i] === x){
      result = true;
    }
  }
  return result;
}
```