//Zadanie 1
let counter = 1;
const writingFunction = setInterval(function() {
	console.log("Czeœæ po raz " + counter++);
  if (counter > 15){
  	clearInterval(writingFunction);
  }
}, 3000);

//Zadanie 2
const brands = ["Nike", "Adidas", "Puma", "Rebook"];
let element = 0;

setTimeout(function(){
	console.log(brands.join(" "));
}, 2000);

let show = setInterval(function(){
	console.log(brands[element]);
  element++;
  if (element === brands.length){
  	clearInterval(show);
  }
}, 3000)