//Zadanie 1
const writeString = function(){
	console.log("Uda³o siê!");
}
writeString();

//Zadanie 2
const showNumber = function(number){
	console.log(number);
}
showNumber(12);

//Zadanie 3
const numbers = [1,2,3,4,5];
const showNumbers = function(){
	console.log(numbers);
}
showNumbers();

//Zadanie 4
const showString = function(show){
	counter = 0;
  let write = setInterval(function(){
  	console.log(show);
    counter++;
    
    if (counter == 5){
    	clearInterval(write);
      console.log("Koniec")
    }
  }, 3000)
}

showString("String");
	
