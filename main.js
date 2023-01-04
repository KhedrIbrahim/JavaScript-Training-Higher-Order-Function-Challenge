/*
**** Higher Order Function Challenge

You Can Use: 
--- ,
--- _
--- Space
--- True => 1 One Time Only In The Code

Never Use : 
--- Number 
--- Letter

You Must Use [Filtter + Map + Your Knowledge]
Order Is Not Important
All In One Chain
*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,S,c,h,o,o,l,2,0,Z";

let solution = myString.split("").filter(function (ele, ind ,arr) {
    return isNaN(+ele) && !ele.startsWith("_") && !ele.startsWith(",") && !ele.includes(arr[arr.length - true]) && arr.shift();
}).map(function (ele, ind, arr) {
    return ele === ele.toUpperCase() ? ` ${ele}` : ele;
}).reduce (function (acc , cele) {
    return acc + cele
})
console.log(solution); // Elzero Web School