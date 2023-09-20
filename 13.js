let string=prompt("Enter a string");
let reverse=string.split("").reverse().join("");
if(string==reverse){
  console.log("String is a Palindrome")
}
else{
  console.log("String is not Palindrome");
}

