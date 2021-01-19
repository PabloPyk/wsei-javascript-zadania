//Zadanie 1
function Person(name, surname, age, country, city, language) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.country = country;
  this.city = city;
  this.language = language;
}

const mateusz = new Person('Mateusz', 'Sznober', 21, 'Polska', 'Kraków', 'polski');
const jan = new Person('Jan', 'Kowalski', 22, 'Polska', 'Warszawa', 'polski');
const adam = new Person('Adam', 'Nowak', 23, 'Polska', '£ódŸ', 'polski');
const dominik = new Person('Dominik', 'Kowalski', 24, 'Polska', 'Katowice', 'polski');
const michal = new Person('Micha³', 'Szpak', 25, 'Polska', 'Gdynia', 'polski');

Person.prototype.changeAge = function(newAge) {
  this.age = newAge;
}
Person.prototype.changeCity = function(newCity) {
  this.city = newCity;
}

console.log(`Mateusz - ${mateusz.age} lat, Miasto: ${mateusz.city}`);
console.log(`Jan - ${jan.age} lat, Miasto: ${jan.city}`);
console.log(`Adam - ${adam.age} lat, Miasto: ${adam.city}`);

mateusz.changeAge(55);
jan.changeAge(33);
mateusz.changeCity('Katowice');
adam.changeAge('41')
console.log(`Mateusz - ${mateusz.age} lat, Miasto: ${mateusz.city}`);
console.log(`Jan - ${jan.age} lat, Miasto: ${jan.city}`);
console.log(`Adam - ${adam.age} lat, Miasto: ${adam.city}`);

//Zadanie 2
function Calculator() {
  this.operationHistory = [];

  this.sum = (a, b) => {
    this.operationHistory.push(a + " + " + b);
    return a + b;
  };

  this.sub = (a, b) => {
    this.operationHistory.push(a + " - " + b);
    return a - b;
  };

  this.div = (a, b) => {
    if (b === 0) {
      return "Nie wolno dzieliæ przez 0!";
    }
    this.operationHistory.push(a + " / " + b);
    return a / b;
  };

  this.mult = (a, b) => {
    this.operationHistory.push(a + " * " + b);
    return a * b;
  }
}

let calc1 = new Calculator();
let calc2 = new Calculator();

console.log(calc1.sum(2, 4));
console.log(calc2.div(2, 0));
console.log(calc1.operationHistory);

//Zadanie 3
function Game() {
  this.changeNumber = function() {
    Game.prototype.interval = setInterval(() => {
      Game.prototype.number = Math.round(Math.random() * 10);
      console.log(Game.prototype.number);
    }, 1000);
  };
  this.checkNumber = function() {
    Game.prototype.check = setInterval(() => {
      if (Game.prototype.number > 5) {
        clearInterval(Game.prototype.interval);
        clearInterval(Game.prototype.check);
      }
    }, 1000);
  };
}
const number1 = new Game();
const number2 = new Game();
number1.changeNumber();
number2.checkNumber();
