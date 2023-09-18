let input1=prompt("Enter first array with comas:");
let input2=prompt("Enter second array with comas:");

let arr1=input1.split(",");
let arr2=input2.split(",");
 
 let temp=arr1;
 arr1=arr2;
 arr2=temp;
console.log("Array 1:",arr1);
console.log("Array 2:",arr2);
