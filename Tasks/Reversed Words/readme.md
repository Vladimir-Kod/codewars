# Reversed Words

***
DESCRIPTION:

Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
***

```js
function reverseWords(str){
  var arrayString = str.split(' ');
  var result = [];
  for (let i = arrayString.length - 1; i >= 0; i-- ){
    result.push(arrayString[i]);
  }
  return result.join(' ');
}
```