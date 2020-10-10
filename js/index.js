//b1
var NumArr = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];

var SumArr = NumArr.reduce((SumN,value) => SumN + value);
console.log("Bài 1: " ,SumArr);

//b2
var maxInNumbers = Math.max.apply(Math, NumArr); 
var minInNumbers = Math.min.apply(Math, NumArr);
var MediumNumbers =  NumArr.reduce((a,b)=> a+b)/NumArr.length;

console.log(" Bài 2a: " ,maxInNumbers);
console.log(" Bài 2b: " ,minInNumbers);
console.log(" Bài 2c: " ,MediumNumbers);

//b3
//b4    
var ArrB4 =  [1,2,3,2,3,4,6,7] ;
var arrFilter = ArrB4.filter((item, index) => ArrB4.indexOf(item) === index);
var SumNT= arrFilter.filter((iteam)=>{
    var ArrRE=[];
    if (iteam >=2) {
        for (var i = 2; i <= iteam; i++) {
            if(iteam/i!==0){
                ArrRE.push(iteam)
            }
        }
        return ArrRE;
    }
 });
 console.log(" Bài 4: " ,SumNT);

 //b5
 var ArrB5= [1,2,3,2,3,4,6,7];
 var SBPM= ArrB5.map(iteam=>Math.pow(iteam,2));
 console.log(" Bài 5: " ,SBPM);

 //b6