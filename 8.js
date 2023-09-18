let num=parseInt(prompt("Enter the limit"));
var sum=0;
for(i=1;i<=num;i++){
  if(i%2==1){
    sum=sum+i;
  }
}
console.log(sum);