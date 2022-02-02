//ex
//Object Destructuring 1,   8  
//                         1846

//Object Destructuring 2,  1846    1659

//Object Destructuring 3,   Your name is Alejandro and you like purple
//                           Your name is Melissa and you like green
//Array Destructuring 1,

  //console.log(first);   Maya
  //console.log(second); Marisa
  //console.log(third);   Chi

//Array Destructuring 2,

  //console.log(raindrops); // ?  Raindrops on roses
  //console.log(whiskers); // ?"whiskers on kittens", Bright copper kettles
  //console.log(aFewOfMyFavoriteThings); // ?[warm woolen mittens,Brown paper packages tied up with strings]

//Array Destructuring 3,    console.log(numbers) // ?10, 30 , 20


//ES5 Assigning Variables to Object Properties

/* var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b; */

const obj={
    numbers:{a:1,b:2}
}
//const {{a,b}}=obj;
//ES2015 Object Destructuring
const {a,b} = obj.numbers;




//ES5 Array Swap
/*
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;*/

//ES2015 One-Line Array Swap with Destructuring

let arr=[1,2];
[arr[0],arr[1]]=[arr[1],arr[0]];

//raceResults()

function raceResults([first,second,third,...rest]){
    return{
        first,second,third,rest

    }
};
