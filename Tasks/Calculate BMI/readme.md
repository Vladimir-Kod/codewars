# Calculate BMI

***
DESCRIPTION:

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
***

```js
function bmi(weight, height) {
  var result = weight / (height * height)
  if (result <= 18.5){
    return "Underweight"
  } else if (result <= 25 && result > 18.5){
    return "Normal"
  } else if (result <= 30 && result > 25){
    return "Overweight"
  } else if (result > 30){
    return "Obese"
  }
}
```