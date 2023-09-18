let p=parseInt(prompt("Enter the principle amount"));
let r=parseFloat(prompt("Enter the rate of interest"));
let n=parseFloat(prompt("Enter the number of years"));
let si=parseFloat(simpleInterest(p,n,r));
console.log("Simple Interest:"+si)

function simpleInterest(p,n,r){
  let si=(p*n*r)/100;
  return si
}