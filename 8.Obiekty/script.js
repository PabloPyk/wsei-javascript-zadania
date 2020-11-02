//Zadanie 1
const car = {
  type: "Kombi",
  brand: "Audi",
  model: "RS6",
  year: 2018,
  color: "grey",
}
console.log(car.type, car.brand, car.model, car.year, car.color);

//Zadanie 2
car.changeBrand = function(newBrand){
  car.brand = newBrand;
}
car.changeBrand('Mercedes');
console.log(car.brand);

//Zadanie 3
const numbers = [1,2,3,4,5];
const numberObj = {
  sum: 0,
  sumNumbers(numbers){
    for (let i = 0; i < numbers.length; i++){
	  this.sum += numbers[i];
}
  console.log(this.sum);
  }
}
numberObj.sumNumbers(numbers);

//Zadanie 4
const secondCar = {
  name: "BMW",
  age: 12,
}
for (const key in secondCar){
  console.log(key, secondCar[key]);
}

//Zadanie 5
const thirdCar = {
  type: "Sedan",
  brand: "Mercedes",
  engine: {
    type: "gasoline",
    capacity: 2.5,
  }
}
console.log(thirdCar.engine.type, thirdCar.engine.capacity);

//Zadanie 6
const nextCar = {
  brand: "BMW",
  sound: function(){
    return "Hello";
  }
}
console.log(nextCar.sound());
