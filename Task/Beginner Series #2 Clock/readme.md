# Beginner Series #2 Clock

***
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:

h = 0
m = 1
s = 1

result = 61000
***

```js
function past(h, m, s){
  //#Happy Coding! ^_^
  var hours = h * 3600000;
  var minuts = m * 60000;
  var seconds = s * 1000;
  var result = hours + minuts + seconds;
  return result; 
}
```
