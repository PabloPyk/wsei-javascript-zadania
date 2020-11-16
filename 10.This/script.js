//Zadanie 1
function Person(name, surname, age, country, city){
  this.name = name,
  this.surname = surname,
  this.age = age,
  this.country = country,
  this.city = city
}

person1 = new Person('Mateusz', 'Sznober', 21, 'Polska', 'Kraków');
person2 = new Person('Jan', 'Kowalski', 26, 'Polska', 'Katowice');

Person.prototype.info = function(){
  console.log(this.name, this.surname, this.age, this.country, this.city);
}

Person.prototype.addAge = function(){
  this.age++;
}

person1.info();
person2.info();
person1.addAge();
person2.addAge();
person1.info();
person2.info();

//Zadanie 2
Person.prototype.dish = new Array ();
Person.prototype.showDishes = function (){
  console.log(this.dish);
}

Person.prototype.newDish = function (name){
  this.dish.push(name);
}

person2.newDish("Tomato soup");
person2.showDishes();

//Zadanie 3
function Calculator(a, b){
  this.a = a;
  this.b = b;

  this.add = function (){
    return (this.a + this.b);
  }
  this.sub = function(){
    return (this.a - this.b);
  }
  this.mul = function(){
    return (this.a * this.b);
  }
  this.div = function(){
    if (!b === 0)
      return (this.a / this.b);
    else
      return "Nie wolno dzieliæ przez 0!"
  }
}

const firstNumbers = new Calculator(4,2);
const secondNumbers = new Calculator (5,0);

console.log(firstNumbers.add());
console.log(firstNumbers.sub());
console.log(secondNumbers.add());
console.log(secondNumbers.div());