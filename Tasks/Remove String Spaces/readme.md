# Remove String Spaces

***
Simple, remove the spaces from the string, then return the resultant string.
***

```js
function noSpace(x){
    let complateString=[];
    let string = x.split('');
    for (let i = 0; i < x.length;  i++){
      if (string[i]===" "){
        complateString[i] = ""
      } else {
        complateString[i]=string[i]
      }
    };
    return complateString.join("");
};
```