function car(name,mileage,max_speed){
    this.name=name;
    this.mileage=mileage;
    this.max_speed=max_speed;
  }
  const obj=new car("ferrari",7,340);
  console.log(obj.name);
  console.log(obj.mileage);
  console.log(obj.max_speed);