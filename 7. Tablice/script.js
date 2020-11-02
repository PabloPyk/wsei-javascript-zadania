//Zadanie 1
let tab = ["pierwszy", "drugi", "trzeci"];
console.log(tab);

for (let i = 0; i < tab.length; i++){
	console.log(tab[i]);
}

//Zadanie 2
let secTable = ["audi", "blue", 22, 14, "text"];

//a
console.log("Element pierwszy tablicy to " + secTable[0]);
console.log("Element drugi tablicy to " + secTable[1]);

//b
console.log("Ostatni element tablicy to " + secTable[secTable.length - 1]);

//c
secTable.forEach(show =>{
	console.log(show);
})

//d
secTable.forEach((show, i) => {
	if (i % 2 == 0) console.log(show)
})

//e
secTable.forEach(show =>{
	if (typeof show == "string") console.log(show);
})

//f
secTable.forEach(show =>{
	if (typeof show == "number") console.log(show);
})

//Zadanie 3
let numbers = [1,2,3,4,5,6,7,8,9,0];

//a
let sum = 0;
for (let i = 0; i < numbers.length; i++){
	sum += numbers[i];
}
console.log("Suma elementów tablicy to" + " " + sum);

//b
let difference = 0;
for (let i = 9; i < numbers.length; i--){
	sum -= numbers[i];
}
console.log("Ró¿nica elementów tablicy to" + " " + difference);

//Zadanie 3
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//a
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Suma elementów tablicy to " + sum);

//b
let difference = 0;
for (let i = 0; i < numbers.length; i++) {
  difference -= numbers[i];
}
console.log("Ró¿nica elementów tablicy to " + difference);

//c
console.log("Œrenia elementów tablicy to " + sum/numbers.length);

//d
for (let i = 0; i < numbers.length; i++) {
  if (i%2 == 0){
        console.log(i);
  }
}

//e
for (let i = 0; i < numbers.length; i++) {
  if (i%2 != 0){
        console.log(i);
  }
}

//f
console.log("Najwiêkszy element tablicy to " + (Math.max.apply(null, numbers)));

//g 
console.log("Najmniejszy element tablicy to " + (Math.min.apply(null, numbers)));

//h
console.log(numbers.reverse());
