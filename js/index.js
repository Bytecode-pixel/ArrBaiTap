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
var array=NumArr.sort();
var CoUnt=0;
var ShoW=1;
for(var i=0; i<array.length-1;i++){
    if(array[i]=array[i+1]){
        ShoW++;
    }
    else{
        if(ShoW>=CoUnt){
            CoUnt=ShoW;
            ShoW=1;
        }
        else{
            ShoW=1;
        }
    }
}
console.log("Bài 3:",CoUnt);

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
 var a = [1,3,4,7,9,11,3];
    var b = Number(prompt("input a number: "));
    var larger = []; //những số lớn hơn b;
    var smaller = []; //những số nhỏ hơn b;
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (b > a[i]) {
            smaller.push(a[i]);
        } else if (b < a[i]) {
            larger.push(a[i]);
        } else if ( b = a[i]) {
            console.log(b + " có xuất hiện trong chuỗi tại index: " + i);
        }
    }
    if (smaller.length == 0) {
        console.log("Giá trị gần nhất là: " + Math.min.apply(Math, larger));
    } else if (larger.length == 0) {
        console.log("Giá trị gần nhất là: " + Math.max.apply(Math, smaller));
    } else if (smaller.length != 0 && larger.length != 0) {
        result.push(Math.max.apply(Math, smaller), Math.min.apply(Math, larger));
        console.log("Giá trị gần nhất là: " + result);
    }


    //b7
    var students = [
        {
            id: "T3HXX1",
            firstName: "linh",
            lastName: "nguyEn ThI"
        },
        {
            id: "T3HXX2",
            firstName: "yeS",
            lastName: "haHA"
        },
        {
            id: "T3HXX5",
            firstName: "hIgH",
            lastName: "aS a Kite" 
        }];

    var results = students.filter(student => student.firstName.length >= 3)
        .map(
            student => {
                return {
                    id: student.id,
                    firstName: student.firstName.toLowerCase().replace(student.firstName[0], student.firstName[0].toUpperCase()),
                    lastName: student.lastName.toLowerCase().split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ")
                }});

    console.log("Bài 7",results);
//b8
    var students = [
        {
            id: "T3HXX1",
            firstName: "Tung",
            lastName: "Doan Hoang"
        },
        {
            id: "T3HXX2",
            firstName: "No",
            lastName: "Shit Motherfucker"
        },
        {
            id: "T3HXX5",
            firstName: "High",
            lastName: "As a Kite" 
        },
        {
            id: "T3HXX1",
            firstName: "No",
            lastName: "Shit Cunt"
        }
    ]

    var results = students.filter(student => student.lastName.split(" ")[0] === "Shit");
    console.log("Bài 8",results);

// b9
var students = [
    {
        id: "T3HXX1",
        firstName: "Tung",
        lastName: "Doan Hoang"
    },
    {
        id: "T3HXX2",
        firstName: "No",
        lastName: "Shit Motherfucker"
    },
    {
        id: "T3HXX5",
        firstName: "High",
        lastName: "As a Kite" 
    },
    {
        id: "T3HXX1",
        firstName: "No",
        lastName: "Shit Cunt"
    }
];

var sortByName = students.slice(0)
    .sort(
        function(a,b) {
            var x = a.firstName;
            var y = b.firstName;
            if (x < y) {
                return -1;
            } else if (x > y) {
                return 1;
            } else {
                return 0;
            }});
console.log("Bài9",sortByName);

//b10
var numbers = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
    // var numbers =[1,1,1,1,1,1,]
    var resultarr = []

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < Math.max(...numbers)) {
            resultarr.push(numbers[i])
        }
    }
    var result = Math.max(...resultarr)
    if (result === -Infinity) {
        console.log(-1)
    } else {
        console.log("Bài 10: ",result)
    }
// b11
var array = [9,1,8,3,4,15,19]
var z = 18
for (var a = 0; a < array.length; a++) {
    for (var b = a + 1; b < array.length; b++) {
        for (var c = b + 1; c < array.length; c++) {
            if (z == array[a] + array[b] + array[c]) {
                var result = "yes";
                break;
            }
        }
    }
}

if (result != "yes") {
    console.log("no")
} else {
    console.log("Bài 11: ",result)
}