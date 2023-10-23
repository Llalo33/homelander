/*
Значение, переданное первым параметром, при необходимости преобразуется в логическое значение. Если значение опущено или равно 0, -0, null, false, NaN, undefined или пустой строке (""), объект имеет начальное значение, равное false. Все остальные значения, включая любые объекты или строку "false", создают объект с начальным значением, равным true.
Не путайте примитивные значения true и false логического типа со значениями true и false объекта Boolean.
Любой объект, чьё значение не является равным undefined или null, включая сам объект Boolean со значением, равным false, вычисляется в true при передаче его в условное выражение. Например, условие в следующей инструкции if вычисляется в true:
*/
const ss = 33 > 2
const ss2 = 33 < 22
console.log(ss)
console.log(ss2)

const iAmAStudent = true
const isSpring = true
const javaSciptIsBeauty = true
const constCanBeChanged = false
const letCanBeChanged = true
const nullIsADataType = true
const nullIsAValue = false
const iAmFromGrozny = true