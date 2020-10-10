//b1
var NumArr = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];

var SumArr = NumArr.reduce((SumN,value) => SumN + value);

console.log(SumArr);
console.log("Bài 1: " ,SumArr);

//b2
var maxInNumbers = Math.max.apply(Math, NumArr); 
var minInNumbers = Math.min.apply(Math, NumArr);
var MediumNumbers =  NumArr.reduce((a,b)=> a+b)/NumArr.length;

console.log(" Bài 2a: " ,maxInNumbers);
console.log(" Bài 2b: " ,minInNumbers);
console.log(" Bài 2c: " ,MediumNumbers);

//b3
