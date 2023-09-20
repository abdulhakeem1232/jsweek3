let arrinput=prompt("Enter elements separate by comma");
let arr=arrinput.split(",")

let count = 0;
arr.forEach(function(element) {
  if (element % 2 === 0) {
    count++;
  }
});

console.log("Count of even numbers: " + count);
