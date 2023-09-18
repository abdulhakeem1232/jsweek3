let num1=parseInt(prompt("Enter the first number"));
let num2=parseFloat(prompt("Enter the second number"));
let sum=parseFloat(sumofnumbers(num1,num2));
console.log("Sum:"+sum);

function sumofnumbers(num1,num2){
  let sum=num1+num2;
  return sum;
}
