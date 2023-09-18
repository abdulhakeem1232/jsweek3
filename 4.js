let mark=parseFloat(prompt("Enter the mark:"));
if(mark>100|mark<0){
  console.log("Invalid mark");
}
else if(mark>50){
  console.log("Pass");
}
else{
  console.log("Fail");
}