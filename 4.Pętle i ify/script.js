/*Zadanie 1*/
let firstNum = 12;
let secondNum = 14;
if (firstNum > secondNum) {
	console.log("Liczba pierwsza jest wiêksza.")
}
else {
	console.log("Liczba druga jest wiêksza.")
}

/*Zadanie 2*/
let num1 = 5;
let num2 = 12;
let num3 = 7;

if (num1 > num2) {
	if (num1 > num3) {
  	console.log("Liczba pierwsza jest najwiêksza.")
  }
  else {
  	console.log ("Liczba trzecia jest najwiêksza.")
  }
} else if (num2 > num3){
		console.log("Liczba druga jest najwiêksza.")
} else {
		console.log("Liczba trzecia jest najwiêksza.")
}

/*Zadanie 3*/
for (let i = 0; i < 10; i++){
	console.log("Lubiê JavaScript");
}

/*Zadanie 4*/
let result = 0;
for (let i = 0; i < 10; i++){
	console.log(result += i);
}

/*Zadanie 5*/
var n = 5;
for (let i = 0; i <= n; i++){
	if(i % 2 == 0){
  console.log(i+ " - parzysta");
  } else {
  		console.log(i+ " - nieparzysta");
  }
}

/*Zadanie 6*/

for (let i = 0; i <= 10; i++){
	for (let j = 0; j <= 10; j++){
  	console.log("i= " + i + ", j= " + j);
  }
}

/*Zadanie 7*/
for (i = 0; i <= 100; i++){
	if (i % 15 == 0){
  	console.log("FizzBuzz");
  }
  if (i % 5 == 0){
  	console.log("Buzz");
  }
  if (i % 3 == 0){
  	console.log("Fizz");
  } 
  else{
  	console.log(i);
  }
}

/*Zadanie 8*/
//a
for (let i = 1; i <= 5; i++) {
	let row = '';
for (let j = 1; j <= i; j++) {
	row += "*";
  }
  console.log(row);
}

//b
let star = " *";
var size = 5;

for (let i = 0; i < size; i++){
	let tree = '';
  	for (let j = 0; j < size - i; j++){
    	tree += ' ';
    }
    for (let k = 0; k < i + 1; k++){
    	tree += star;
    }
    console.log(tree);
}

//c
for (let i = 0; i < size; i++){
	let tree = '';
  	for (let j = 0; j < size - i; j++){
    	tree += '  ';
    }
    for (let k = 0; k < (2 * i + 1); k++){
    	tree += star;
    }
    console.log(tree);
}

//e
//Star i size zareklarowane w podpunkcie 5
for (let i = 0; i < size; i++){
	let tree = '';
  	for (let j = 0; j < size - i; j++){
    	tree += ' ';
    }
    for (let k = 0; k < i + 1; k++){
    	tree += star;
    }
    console.log(tree);
}

for (let i = 0; i < 3; i++){
  var tree = '';
  for (j = 0; j < 5; j++){
    tree += ' ';
  }
  tree += star;
  console.log(tree);
}
